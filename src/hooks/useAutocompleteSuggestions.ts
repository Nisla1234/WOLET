import { useEffect, useState } from 'react';

export interface PlaceSuggestion {
  id: string;
  mainText: string;
  secondaryText: string;
  formattedAddress: string;
  latitude: number;
  longitude: number;
}

interface PhotonFeature {
  properties?: {
    osm_id?: number;
    osm_type?: string;
    name?: string;
    street?: string;
    housenumber?: string;
    district?: string;
    city?: string;
    county?: string;
    state?: string;
    postcode?: string;
    country?: string;
    countrycode?: string;
  };
  geometry?: { coordinates?: [number, number] };
}

interface PhotonResponse {
  features?: PhotonFeature[];
}

// Keep requests to the shared public Photon demo service modest.
let lastPhotonRequestAt = 0;

function formatAddress(properties: NonNullable<PhotonFeature['properties']>): string {
  const parts = [
    properties.name,
    [properties.housenumber, properties.street].filter(Boolean).join(' '),
    properties.district,
    properties.city,
    properties.county,
    properties.state,
    properties.postcode,
    properties.country,
  ].filter(Boolean);
  return Array.from(new Set(parts)).join(', ');
}

export function useAutocompleteSuggestions(inputString: string, enabled: boolean) {
  const [suggestions, setSuggestions] = useState<PlaceSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const query = inputString.trim();
    if (!enabled || query.length < 2) {
      setSuggestions([]);
      setIsLoading(false);
      setError(null);
      return;
    }

    const controller = new AbortController();
    const waitForPublicService = Math.max(650, 1000 - (Date.now() - lastPhotonRequestAt));
    const timer = window.setTimeout(async () => {
      lastPhotonRequestAt = Date.now();
      setIsLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams({
          q: query,
          limit: '7',
          lang: 'en',
          bbox: '79.5,5.8,82.0,9.9',
        });
        const response = await fetch('https://photon.komoot.io/api/?' + params.toString(), {
          signal: controller.signal,
          headers: { Accept: 'application/json' },
        });
        if (!response.ok) throw new Error('Location search service is temporarily unavailable.');
        const data = (await response.json()) as PhotonResponse;
        const mapped = (data.features || [])
          .map((feature, index) => {
            const properties = feature.properties || {};
            const coordinates = feature.geometry?.coordinates;
            if (!coordinates || coordinates.length < 2) return null;
            if (properties.countrycode && properties.countrycode.toLowerCase() !== 'lk') return null;
            if (properties.country && properties.country.toLowerCase() !== 'sri lanka') return null;
            const formattedAddress = formatAddress(properties);
            if (!formattedAddress) return null;
            const mainText = properties.name || properties.street || properties.city || properties.district || formattedAddress;
            const secondaryText = formattedAddress === mainText ? 'Sri Lanka' : formattedAddress.replace(mainText + ', ', '');
            return {
              id: String(properties.osm_type || 'place') + '-' + String(properties.osm_id || index),
              mainText,
              secondaryText,
              formattedAddress,
              longitude: coordinates[0],
              latitude: coordinates[1],
            } satisfies PlaceSuggestion;
          })
          .filter((item): item is PlaceSuggestion => item !== null);
        setSuggestions(mapped);
        if (mapped.length === 0) setError('No matching places found in Sri Lanka. Try another street, town, or landmark.');
      } catch (err) {
        if (controller.signal.aborted) return;
        setSuggestions([]);
        setError(err instanceof Error ? err.message : 'Unable to search locations right now.');
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    }, waitForPublicService);

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [inputString, enabled]);

  const resetSession = () => {
    setSuggestions([]);
    setError(null);
  };

  return { suggestions, isLoading, error, resetSession };
}
