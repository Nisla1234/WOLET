import { useEffect, useRef, useState } from 'react';
import { SelectedLocation } from '../types/location';
import { MapPin, AlertCircle, Loader2 } from 'lucide-react';

interface RideMapPreviewProps {
  pickup: SelectedLocation | null;
  destination: SelectedLocation | null;
}

interface LeafletMap {
  setView: (center: [number, number], zoom: number) => LeafletMap;
  fitBounds: (bounds: [number, number][], options?: { padding?: [number, number] }) => LeafletMap;
  invalidateSize: () => void;
  remove: () => void;
}

interface LeafletLayer {
  addTo: (map: LeafletMap) => LeafletLayer;
  remove: () => void;
}

interface LeafletApi {
  map: (element: HTMLElement, options?: Record<string, unknown>) => LeafletMap;
  tileLayer: (url: string, options: Record<string, unknown>) => LeafletLayer;
  circleMarker: (point: [number, number], options: Record<string, unknown>) => LeafletLayer;
  polyline: (points: [number, number][], options: Record<string, unknown>) => LeafletLayer;
}

declare global {
  interface Window { L?: LeafletApi; }
}

let leafletLoader: Promise<LeafletApi> | null = null;

function loadLeaflet(): Promise<LeafletApi> {
  if (window.L) return Promise.resolve(window.L);
  if (leafletLoader) return leafletLoader;

  leafletLoader = new Promise((resolve, reject) => {
    const cssId = 'wolet-leaflet-css';
    if (!document.getElementById(cssId)) {
      const link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-wolet-leaflet]');
    if (existingScript) {
      existingScript.addEventListener('load', () => window.L && resolve(window.L), { once: true });
      existingScript.addEventListener('error', () => reject(new Error('Map library could not be loaded.')), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.async = true;
    script.dataset.woletLeaflet = 'true';
    script.onload = () => window.L ? resolve(window.L) : reject(new Error('Map library did not initialize.'));
    script.onerror = () => reject(new Error('Map library could not be loaded.'));
    document.head.appendChild(script);
  }).catch((error) => {
    leafletLoader = null;
    throw error;
  });

  return leafletLoader;
}

const COLOMBO_CENTER: [number, number] = [6.9271, 79.8612];

export default function RideMapPreview({ pickup, destination }: RideMapPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const layersRef = useRef<LeafletLayer[]>([]);
  const [mapReady, setMapReady] = useState(false);
  const [routeLoading, setRouteLoading] = useState(false);
  const [routeError, setRouteError] = useState<string | null>(null);
  const [mapError, setMapError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    loadLeaflet().then((L) => {
      if (cancelled || !containerRef.current) return;
      const map = L.map(containerRef.current, { scrollWheelZoom: false }).setView(COLOMBO_CENTER, 11);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);
      mapRef.current = map;
      setMapReady(true);
      window.setTimeout(() => map.invalidateSize(), 100);
    }).catch((error) => {
      if (!cancelled) setMapError(error instanceof Error ? error.message : 'Map could not be loaded.');
    });

    return () => {
      cancelled = true;
      layersRef.current.forEach((layer) => layer.remove());
      layersRef.current = [];
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    const L = window.L;
    if (!map || !L || !mapReady) return;

    layersRef.current.forEach((layer) => layer.remove());
    layersRef.current = [];
    setRouteError(null);
    setRouteLoading(false);

    if (!pickup && !destination) {
      map.setView(COLOMBO_CENTER, 11);
      return;
    }

    const points: [number, number][] = [];
    if (pickup) {
      const point: [number, number] = [pickup.latitude, pickup.longitude];
      points.push(point);
      layersRef.current.push(L.circleMarker(point, {
        radius: 9, color: '#FFD21F', weight: 3, fillColor: '#08264A', fillOpacity: 1,
      }).addTo(map));
    }
    if (destination) {
      const point: [number, number] = [destination.latitude, destination.longitude];
      points.push(point);
      layersRef.current.push(L.circleMarker(point, {
        radius: 9, color: '#08264A', weight: 3, fillColor: '#FFD21F', fillOpacity: 1,
      }).addTo(map));
    }

    if (points.length === 1) {
      map.setView(points[0], 14);
      return;
    }

    if (points.length === 2) {
      map.fitBounds(points, { padding: [42, 42] });
      const controller = new AbortController();
      setRouteLoading(true);
      const url = 'https://router.project-osrm.org/route/v1/driving/' +
        pickup.longitude + ',' + pickup.latitude + ';' +
        destination.longitude + ',' + destination.latitude +
        '?overview=full&geometries=geojson';
      fetch(url, { signal: controller.signal, headers: { Accept: 'application/json' } })
        .then(async (response) => {
          if (!response.ok) throw new Error('The public route service is temporarily unavailable.');
          return response.json();
        })
        .then((data: { code?: string; routes?: Array<{ geometry?: { coordinates?: [number, number][] } }> }) => {
          if (controller.signal.aborted) return;
          const coordinates = data.routes?.[0]?.geometry?.coordinates;
          if (data.code !== 'Ok' || !coordinates?.length) throw new Error('No driving route was found for these locations.');
          const routePoints = coordinates.map((coordinate) => [coordinate[1], coordinate[0]] as [number, number]);
          layersRef.current.push(L.polyline(routePoints, {
            color: '#0759A6', weight: 5, opacity: 0.92,
          }).addTo(map));
          map.fitBounds(routePoints, { padding: [42, 42] });
        })
        .catch((error) => {
          if (!controller.signal.aborted) setRouteError(error instanceof Error ? error.message : 'Route preview is unavailable.');
        })
        .finally(() => {
          if (!controller.signal.aborted) setRouteLoading(false);
        });
      return () => controller.abort();
    }
  }, [pickup, destination, mapReady]);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-[#0759A6]" />
          <h4 className="font-bold text-sm text-[#14243A]">Interactive Route Preview</h4>
        </div>
        <div className="flex items-center gap-4 text-xs text-[#667085]">
          <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#08264A] border-2 border-[#FFD21F] inline-block" />Pickup (A)</span>
          <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#FFD21F] border-2 border-[#08264A] inline-block" />Destination (B)</span>
        </div>
      </div>

      <div className="w-full h-[220px] sm:h-[360px] lg:h-[440px] rounded-2xl overflow-hidden border border-slate-200 shadow-md relative bg-slate-100">
        <div ref={containerRef} className="absolute inset-0 z-0" />
        {routeLoading && <div className="absolute top-3 left-3 z-[500] bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow text-xs font-semibold text-[#08264A] flex items-center gap-2"><Loader2 className="w-3.5 h-3.5 animate-spin" />Loading driving route...</div>}
        {mapError && <div className="absolute inset-0 z-[500] bg-slate-50 flex items-center justify-center p-5 text-center text-sm text-rose-700"><AlertCircle className="w-4 h-4 mr-2" />{mapError}</div>}
      </div>

      {routeError && <p className="text-xs text-amber-700 flex items-center gap-1.5"><AlertCircle className="w-3.5 h-3.5 shrink-0" />{routeError} Pickup and destination markers are still shown.</p>}
      <p className="text-[10px] text-slate-500">Map data &copy; OpenStreetMap contributors. Route preview provided by OSRM.</p>
    </div>
  );
}
