import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { useMapsLibrary } from '@vis.gl/react-google-maps';
import { MapPin, Navigation, LocateFixed, X, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { SelectedLocation } from '../types/location';
import { useAutocompleteSuggestions } from '../hooks/useAutocompleteSuggestions';

interface LocationAutocompleteInputProps {
  id: string;
  label: string;
  placeholder: string;
  iconType: 'pickup' | 'destination';
  textValue: string;
  selectedLocation: SelectedLocation | null;
  onTextChange: (value: string) => void;
  onLocationSelect: (location: SelectedLocation | null) => void;
  validationError?: string | null;
  allowCurrentLocation?: boolean;
  mapsConfigured: boolean;
}

export default function LocationAutocompleteInput({
  id,
  label,
  placeholder,
  iconType,
  textValue,
  selectedLocation,
  onTextChange,
  onLocationSelect,
  validationError,
  allowCurrentLocation = false,
  mapsConfigured,
}: LocationAutocompleteInputProps) {
  const placesLib = useMapsLibrary('places');
  const geocodingLib = useMapsLibrary('geocoding');

  const [isFocused, setIsFocused] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const [isFetchingDetails, setIsFetchingDetails] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [geoError, setGeoError] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const shouldSearch = mapsConfigured && isFocused && !selectedLocation && textValue.trim().length > 0;
  const { suggestions, isLoading, error: autocompleteError, resetSession } = useAutocompleteSuggestions(
    textValue,
    shouldSearch
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
        setHighlightedIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectSuggestion = async (suggestion: google.maps.places.AutocompleteSuggestion) => {
    if (!placesLib || !suggestion.placePrediction) return;

    setIsFetchingDetails(true);
    setGeoError(null);

    try {
      const place = suggestion.placePrediction.toPlace();
      await place.fetchFields({
        fields: ['id', 'formattedAddress', 'displayName', 'location'],
      });

      const loc = place.location;
      if (!loc) {
        setGeoError('Selected place does not include map coordinates. Please choose another suggestion.');
        setIsFetchingDetails(false);
        return;
      }

      const formattedAddress =
        place.formattedAddress ||
        place.displayName ||
        suggestion.placePrediction.text?.text ||
        textValue;

      const selected: SelectedLocation = {
        placeId: place.id || suggestion.placePrediction.placeId || '',
        formattedAddress,
        latitude: loc.lat(),
        longitude: loc.lng(),
      };

      onTextChange(formattedAddress);
      onLocationSelect(selected);
      resetSession();
      setIsFocused(false);
      setHighlightedIndex(-1);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes('OVER_QUERY_LIMIT') || msg.includes('RESOURCE_EXHAUSTED') || msg.includes('429')) {
        window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
      }
      setGeoError('Unable to retrieve place details. Please try another suggestion.');
    } finally {
      setIsFetchingDetails(false);
    }
  };

  const handleUseCurrentLocation = () => {
    setGeoError(null);

    if (!mapsConfigured) {
      setGeoError('Google Maps API is not configured yet. Current location address lookup is unavailable.');
      return;
    }

    if (!('geolocation' in navigator)) {
      setGeoError('Geolocation is not supported by your browser.');
      return;
    }

    if (!geocodingLib) {
      setGeoError('Geocoding service is still loading. Please try again in a moment.');
      return;
    }

    setIsLocating(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        try {
          const geocoder = new geocodingLib.Geocoder();
          const response = await geocoder.geocode({ location: { lat, lng } });

          if (!response.results || response.results.length === 0) {
            setGeoError('Unable to determine a street address for your current location.');
            setIsLocating(false);
            return;
          }

          const bestMatch = response.results[0];
          const selected: SelectedLocation = {
            placeId: bestMatch.place_id,
            formattedAddress: bestMatch.formatted_address,
            latitude: lat,
            longitude: lng,
          };

          onTextChange(bestMatch.formatted_address);
          onLocationSelect(selected);
          resetSession();
          setIsFocused(false);
        } catch (err) {
          const msg = err instanceof Error ? err.message : String(err);
          if (msg.includes('OVER_QUERY_LIMIT') || msg.includes('RESOURCE_EXHAUSTED')) {
            window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
          }
          setGeoError('Failed to resolve your current coordinates to an address.');
        } finally {
          setIsLocating(false);
        }
      },
      (err) => {
        setIsLocating(false);
        if (err.code === err.PERMISSION_DENIED) {
          setGeoError('Location permission was denied. Please enable location access or search manually.');
        } else if (err.code === err.POSITION_UNAVAILABLE) {
          setGeoError('Your current location is unavailable right now. Please search manually.');
        } else if (err.code === err.TIMEOUT) {
          setGeoError('Location request timed out. Please try again or enter your pickup location manually.');
        } else {
          setGeoError('Unable to detect your location. Please enter your pickup address manually.');
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!suggestions.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === 'Enter' && highlightedIndex >= 0 && suggestions[highlightedIndex]) {
      e.preventDefault();
      void handleSelectSuggestion(suggestions[highlightedIndex]);
    } else if (e.key === 'Escape') {
      setIsFocused(false);
      setHighlightedIndex(-1);
    }
  };

  const handleClear = () => {
    onTextChange('');
    onLocationSelect(null);
    setGeoError(null);
    resetSession();
  };

  const showDropdown =
    mapsConfigured &&
    isFocused &&
    !selectedLocation &&
    textValue.trim().length > 0 &&
    (isLoading || suggestions.length > 0 || Boolean(autocompleteError));

  const displayError = geoError || validationError || autocompleteError;

  return (
    <div ref={containerRef} className="space-y-1.5 relative">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <label htmlFor={id} className="block text-xs font-bold uppercase tracking-wider text-[#14243A]">
          {label} *
        </label>
        {allowCurrentLocation && (
          <button
            type="button"
            onClick={handleUseCurrentLocation}
            disabled={isLocating}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#0759A6] hover:text-[#08264A] bg-sky-50 hover:bg-sky-100 disabled:opacity-50 transition-colors min-h-[44px] sm:min-h-[36px] py-2 sm:py-1.5 px-3 sm:px-2.5 rounded-lg whitespace-nowrap"
          >
            {isLocating ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin shrink-0" />
            ) : (
              <LocateFixed className="w-3.5 h-3.5 shrink-0" />
            )}
            <span>{isLocating ? 'Locating...' : 'Use Current Location'}</span>
          </button>
        )}
      </div>

      <div className="relative">
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
          {iconType === 'pickup' ? (
            <MapPin className="w-4 h-4 text-[#0759A6]" />
          ) : (
            <Navigation className="w-4 h-4 text-[#0759A6]" />
          )}
        </div>

        <input
          id={id}
          type="text"
          autoComplete="off"
          role="combobox"
          aria-expanded={showDropdown}
          aria-autocomplete="list"
          aria-controls={`${id}-listbox`}
          placeholder={placeholder}
          value={textValue}
          onFocus={() => {
            setIsFocused(true);
            if (typeof window !== 'undefined' && window.innerWidth < 1024) {
              containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }}
          onChange={(e) => {
            const val = e.target.value;
            onTextChange(val);
            if (selectedLocation) {
              onLocationSelect(null);
            }
            setGeoError(null);
            setIsFocused(true);
            setHighlightedIndex(-1);
          }}
          onKeyDown={handleKeyDown}
          className={`w-full min-h-[48px] sm:min-h-[46px] bg-white border rounded-xl pl-10 pr-20 sm:pr-16 py-2.5 text-base sm:text-sm text-[#14243A] focus:outline-none focus:ring-2 transition-shadow ${
            displayError
              ? 'border-rose-400 focus:ring-rose-300'
              : selectedLocation
              ? 'border-emerald-500 focus:ring-emerald-200'
              : 'border-slate-300 focus:ring-[#0759A6]'
          }`}
        />

        <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center space-x-1">
          {(isFetchingDetails || isLocating) && (
            <Loader2 className="w-4 h-4 text-[#0759A6] animate-spin" />
          )}
          {selectedLocation && !isFetchingDetails && !isLocating && (
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-label="Valid location selected" />
          )}
          {textValue.length > 0 && (
            <button
              type="button"
              onClick={handleClear}
              aria-label={`Clear ${label}`}
              className="min-w-[40px] min-h-[40px] sm:min-w-[34px] sm:min-h-[34px] inline-flex items-center justify-center text-slate-400 hover:text-[#14243A] rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Autocomplete Suggestions Dropdown */}
      {showDropdown && (
        <div
          id={`${id}-listbox`}
          role="listbox"
          className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-2xl shadow-2xl z-40 max-h-56 sm:max-h-64 overflow-y-auto overscroll-contain divide-y divide-slate-100"
        >
          {isLoading && (
            <div className="flex items-center space-x-2 px-4 py-3 text-xs text-[#667085]">
              <Loader2 className="w-4 h-4 animate-spin text-[#0759A6]" />
              <span>Searching locations in Sri Lanka...</span>
            </div>
          )}

          {!isLoading && autocompleteError && (
            <div className="px-4 py-3 text-xs text-rose-600 flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{autocompleteError}</span>
            </div>
          )}

          {!isLoading && !autocompleteError && suggestions.length === 0 && (
            <div className="px-4 py-3 text-xs text-[#667085]">
              No matching places found in Sri Lanka. Try another landmark or street name.
            </div>
          )}

          {!isLoading &&
            suggestions.map((suggestion, idx) => {
              const prediction = suggestion.placePrediction;
              if (!prediction) return null;
              const mainText = prediction.mainText?.text || prediction.text?.text || '';
              const secondaryText = prediction.secondaryText?.text || '';
              const isHighlighted = idx === highlightedIndex;

              return (
                <button
                  key={prediction.placeId || idx}
                  type="button"
                  role="option"
                  aria-selected={isHighlighted}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    void handleSelectSuggestion(suggestion);
                  }}
                  className={`w-full text-left px-3.5 sm:px-4 py-3 min-h-[48px] flex items-start space-x-3 transition-colors ${
                    isHighlighted ? 'bg-sky-50' : 'hover:bg-slate-50'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-[#0759A6] shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[#14243A] truncate">{mainText}</p>
                    {secondaryText && (
                      <p className="text-xs text-[#667085] truncate">{secondaryText}</p>
                    )}
                  </div>
                </button>
              );
            })}
        </div>
      )}

      {displayError && (
        <p className="text-xs text-rose-600 flex items-center space-x-1.5 pt-0.5" role="alert">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{displayError}</span>
        </p>
      )}
    </div>
  );
}
