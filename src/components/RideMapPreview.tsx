import { useEffect, useRef, useState } from 'react';
import { Map, AdvancedMarker, Pin, useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import { SelectedLocation } from '../types/location';
import { MapPin, AlertCircle } from 'lucide-react';

interface RideMapPreviewProps {
  pickup: SelectedLocation | null;
  destination: SelectedLocation | null;
}

const COLOMBO_CENTER = { lat: 6.9271, lng: 79.8612 };

function RouteLayer({
  pickup,
  destination,
  onRouteStatus,
}: {
  pickup: SelectedLocation | null;
  destination: SelectedLocation | null;
  onRouteStatus: (status: { loading: boolean; error: string | null }) => void;
}) {
  const map = useMap();
  const routesLib = useMapsLibrary('routes');
  const polylinesRef = useRef<google.maps.Polyline[]>([]);

  useEffect(() => {
    if (!map) return;

    // Clear previous polylines
    polylinesRef.current.forEach((p) => p.setMap(null));
    polylinesRef.current = [];

    if (pickup && !destination) {
      map.panTo({ lat: pickup.latitude, lng: pickup.longitude });
      map.setZoom(14);
      onRouteStatus({ loading: false, error: null });
      return;
    }

    if (!pickup && destination) {
      map.panTo({ lat: destination.latitude, lng: destination.longitude });
      map.setZoom(14);
      onRouteStatus({ loading: false, error: null });
      return;
    }

    if (!pickup || !destination) {
      onRouteStatus({ loading: false, error: null });
      return;
    }

    // Fit both markers immediately while route computes
    const markerBounds = new google.maps.LatLngBounds();
    markerBounds.extend({ lat: pickup.latitude, lng: pickup.longitude });
    markerBounds.extend({ lat: destination.latitude, lng: destination.longitude });
    map.fitBounds(markerBounds, 56);

    if (!routesLib) return;

    let cancelled = false;
    onRouteStatus({ loading: true, error: null });

    const request: google.maps.routes.ComputeRoutesRequest = {
      origin: { lat: pickup.latitude, lng: pickup.longitude },
      destination: { lat: destination.latitude, lng: destination.longitude },
      travelMode: 'DRIVING',
      fields: ['path', 'viewport'],
      internalUsageAttributionIds: ['gmp_mcp_codeassist_v1_aistudio'],
    };

    routesLib.Route.computeRoutes(request)
      .then(({ routes }) => {
        if (cancelled) return;
        onRouteStatus({ loading: false, error: null });

        if (!routes || routes.length === 0) {
          onRouteStatus({ loading: false, error: 'No driving route preview available between these points.' });
          return;
        }

        const primaryRoute = routes[0];
        const newPolylines = primaryRoute.createPolylines({
          polylineOptions: {
            strokeColor: '#0759A6',
            strokeOpacity: 0.92,
            strokeWeight: 5,
          },
        });

        newPolylines.forEach((polyline) => {
          polyline.setMap(map);
        });
        polylinesRef.current = newPolylines;

        if (primaryRoute.viewport) {
          map.fitBounds(primaryRoute.viewport, 56);
        }
      })
      .catch((err) => {
        if (cancelled) return;
        const msg = err instanceof Error ? err.message : String(err);
        if (msg.includes('OVER_QUERY_LIMIT') || msg.includes('RESOURCE_EXHAUSTED') || msg.includes('429')) {
          window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
        }
        onRouteStatus({
          loading: false,
          error: 'Route line could not be displayed, showing pickup and destination markers.',
        });
      });

    return () => {
      cancelled = true;
      polylinesRef.current.forEach((p) => p.setMap(null));
      polylinesRef.current = [];
    };
  }, [map, routesLib, pickup, destination, onRouteStatus]);

  return null;
}

export default function RideMapPreview({ pickup, destination }: RideMapPreviewProps) {
  const [routeStatus, setRouteStatus] = useState<{ loading: boolean; error: string | null }>({
    loading: false,
    error: null,
  });

  const handleRouteStatus = useRef((status: { loading: boolean; error: string | null }) => {
    setRouteStatus(status);
  }).current;

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-[#0759A6]" />
          <h4 className="font-bold text-sm text-[#14243A]">Interactive Route Preview</h4>
        </div>
        <div className="flex items-center space-x-4 text-xs text-[#667085]">
          <span className="inline-flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#08264A] inline-block" />
            <span>Pickup (A)</span>
          </span>
          <span className="inline-flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFD21F] border border-[#08264A]/40 inline-block" />
            <span>Destination (B)</span>
          </span>
        </div>
      </div>

      {/* Explicit container height prevents map height collapse across breakpoints */}
      <div className="w-full h-[220px] sm:h-[360px] lg:h-[440px] rounded-2xl overflow-hidden border border-slate-200 shadow-md relative bg-slate-100">
        <Map
          mapId="DEMO_MAP_ID"
          defaultCenter={COLOMBO_CENTER}
          defaultZoom={12}
          gestureHandling="greedy"
          disableDefaultUI={false}
          streetViewControl={false}
          mapTypeControl={false}
          internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
          className="w-full h-full"
        >
          {pickup && (
            <AdvancedMarker
              position={{ lat: pickup.latitude, lng: pickup.longitude }}
              title={`Pickup: ${pickup.formattedAddress}`}
            >
              <Pin
                background="#08264A"
                borderColor="#FFD21F"
                glyphColor="#FFD21F"
                glyphText="A"
              />
            </AdvancedMarker>
          )}

          {destination && (
            <AdvancedMarker
              position={{ lat: destination.latitude, lng: destination.longitude }}
              title={`Destination: ${destination.formattedAddress}`}
            >
              <Pin
                background="#FFD21F"
                borderColor="#08264A"
                glyphColor="#08264A"
                glyphText="B"
              />
            </AdvancedMarker>
          )}

          <RouteLayer
            pickup={pickup}
            destination={destination}
            onRouteStatus={handleRouteStatus}
          />
        </Map>

        {routeStatus.loading && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow text-xs font-semibold text-[#08264A]">
            Loading route...
          </div>
        )}
      </div>

      {routeStatus.error && (
        <p className="text-xs text-amber-700 flex items-center space-x-1.5">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{routeStatus.error}</span>
        </p>
      )}
    </div>
  );
}
