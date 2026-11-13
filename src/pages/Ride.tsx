import { useState, useMemo } from 'react';
import { APIProvider } from '@vis.gl/react-google-maps';
import { ArrowRight, Shield, CheckCircle, ChevronDown, ChevronUp, AlertCircle, MapPin } from 'lucide-react';
import LocationAutocompleteInput from '../components/LocationAutocompleteInput';
import RideMapPreview from '../components/RideMapPreview';
import { SelectedLocation } from '../types/location';
import colomboLotusHeroImg from '../assets/images/colombo-lotus-hero.png';
import passengerRidesImg from '../assets/images/passenger-rides.png';
import tuktukRidesImg from '../assets/images/tuktuk-rides.png';
import bikeRidesImg from '../assets/images/bike-rides.png';

const GOOGLE_MAPS_API_KEY = (import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined)?.trim() || '';

function areLocationsSame(a: SelectedLocation | null, b: SelectedLocation | null): boolean {
  if (!a || !b) return false;
  if (a.placeId && b.placeId && a.placeId === b.placeId) return true;
  const latDiff = Math.abs(a.latitude - b.latitude);
  const lngDiff = Math.abs(a.longitude - b.longitude);
  return latDiff < 0.0001 && lngDiff < 0.0001;
}

export default function Ride() {
  const [pickupText, setPickupText] = useState('');
  const [pickupLocation, setPickupLocation] = useState<SelectedLocation | null>(null);

  const [destinationText, setDestinationText] = useState('');
  const [destinationLocation, setDestinationLocation] = useState<SelectedLocation | null>(null);

  const [selectedCategory, setSelectedCategory] = useState('sedan');
  const [passengerName, setPassengerName] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const mapsConfigured = Boolean(GOOGLE_MAPS_API_KEY);

  const categories = [
    {
      id: 'sedan',
      name: 'Passenger Rides',
      desc: 'Travel comfortably and safely across Sri Lanka with professional driver-partners.',
      capacity: 'Up to 4 passengers',
      image: passengerRidesImg,
    },
    {
      id: 'tuktuk',
      name: 'Tuk Tuk Rides',
      desc: 'A convenient, iconic local ride for everyone across busy city streets.',
      capacity: 'Up to 3 passengers',
      image: tuktukRidesImg,
    },
    {
      id: 'bike',
      name: 'Bike Rides',
      desc: 'Quick and flexible travel option to beat traffic and arrive promptly.',
      capacity: '1 passenger',
      image: bikeRidesImg,
    },
  ];

  const faqs = [
    {
      q: 'How do I plan a ride enquiry with WOLET?',
      a: 'Search and select your pickup location (or use your current location), choose your destination from the Sri Lanka address suggestions, pick a ride category, and submit your enquiry.',
    },
    {
      q: 'Which locations in Sri Lanka can I search?',
      a: 'You can search addresses, streets, airports, hotels, shopping malls, hospitals, and recognizable landmarks across Sri Lanka.',
    },
    {
      q: 'What vehicle categories are presented?',
      a: 'WOLET presents Passenger Rides (cars), Tuk Tuk Rides (three-wheelers), and Bike Rides (motorcycles).',
    },
    {
      q: 'Does submitting this form confirm a live ride booking?',
      a: 'No. This interface records a structured ride enquiry with your selected pickup and destination coordinates for future booking integration.',
    },
  ];

  const validation = useMemo(() => {
    let pickupError: string | null = null;
    let destinationError: string | null = null;
    let identicalError: string | null = null;

    if (!pickupText.trim()) {
      pickupError = 'Please enter a pickup location.';
    } else if (!pickupLocation) {
      pickupError = 'Please select a valid pickup suggestion.';
    }

    if (!destinationText.trim()) {
      destinationError = 'Please enter a destination.';
    } else if (!destinationLocation) {
      destinationError = 'Please select a valid destination.';
    }

    if (pickupLocation && destinationLocation && areLocationsSame(pickupLocation, destinationLocation)) {
      identicalError = 'Pickup and destination must be different.';
    }

    const locationsValid = Boolean(
      pickupLocation &&
      destinationLocation &&
      !areLocationsSame(pickupLocation, destinationLocation)
    );

    return {
      pickupError,
      destinationError,
      identicalError,
      locationsValid,
    };
  }, [pickupText, pickupLocation, destinationText, destinationLocation]);

  const canContinue = validation.locationsValid && passengerName.trim().length > 0 && phone.trim().length > 0;

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setAttemptedSubmit(true);

    if (!canContinue) {
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setAttemptedSubmit(false);
    setPickupText('');
    setPickupLocation(null);
    setDestinationText('');
    setDestinationLocation(null);
    setPassengerName('');
    setPhone('');
    setNote('');
  };

  const ridePlannerContent = (
    <div className="space-y-8 sm:space-y-12 lg:space-y-16">
      {/* Top Split: Planner Form + Map Preview & Safety */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-start">
        {/* Left: Ride Enquiry Panel */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-8 shadow-lg sm:shadow-xl overflow-visible">
          <div className="space-y-1 sm:space-y-1.5 mb-4 sm:mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0759A6]">Ride Planner</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#14243A]">Plan Your Route</h2>
            <p className="text-xs sm:text-sm text-[#667085]">
              Select verified Sri Lankan pickup and destination locations below.
            </p>
          </div>

          {!mapsConfigured && (
            <div className="mb-5 bg-amber-50 border border-amber-200 text-amber-900 p-4 rounded-2xl text-xs space-y-1.5">
              <div className="flex items-center space-x-2 font-bold">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Google Maps Configuration Required</span>
              </div>
              <p className="leading-relaxed">
                Location autocomplete, current-location geocoding, and interactive route map preview require{' '}
                <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">VITE_GOOGLE_MAPS_API_KEY</code> to be set in the environment.
              </p>
            </div>
          )}

          {submitted && pickupLocation && destinationLocation ? (
            <div className="bg-emerald-50 border border-emerald-200 p-5 sm:p-6 rounded-2xl space-y-4">
              <div className="text-center space-y-2">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="font-bold text-emerald-900 text-lg">Route Enquiry Prepared</h3>
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                  Thank you, <strong>{passengerName}</strong>. Your enquiry details have been validated and structured for backend integration (no live ride booking or dispatch was triggered).
                </p>
              </div>

              <div className="bg-white rounded-xl p-4 border border-emerald-200 space-y-2.5 text-xs sm:text-sm text-[#14243A]">
                <div>
                  <span className="font-bold text-[#0759A6] block text-xs">Pickup Location</span>
                  <span>{pickupLocation.formattedAddress}</span>
                </div>
                <div>
                  <span className="font-bold text-[#0759A6] block text-xs">Destination</span>
                  <span>{destinationLocation.formattedAddress}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                  <span className="text-[#667085]">Selected Category</span>
                  <span className="font-bold uppercase">{selectedCategory}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="w-full min-h-[48px] bg-[#08264A] hover:bg-[#061c38] text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
              >
                Plan Another Route
              </button>
            </div>
          ) : (
            <form onSubmit={handleEnquiry} className="space-y-4" noValidate>
              <LocationAutocompleteInput
                id="pickup-location"
                label="Pickup Location"
                placeholder="Search Colombo, airport, hotel, or landmark"
                iconType="pickup"
                textValue={pickupText}
                selectedLocation={pickupLocation}
                onTextChange={(val) => {
                  setPickupText(val);
                  if (attemptedSubmit) setAttemptedSubmit(false);
                }}
                onLocationSelect={(loc) => setPickupLocation(loc)}
                validationError={attemptedSubmit ? validation.pickupError : null}
                allowCurrentLocation={true}
                mapsConfigured={mapsConfigured}
              />

              <LocationAutocompleteInput
                id="destination-location"
                label="Destination"
                placeholder="Search destination in Sri Lanka"
                iconType="destination"
                textValue={destinationText}
                selectedLocation={destinationLocation}
                onTextChange={(val) => {
                  setDestinationText(val);
                  if (attemptedSubmit) setAttemptedSubmit(false);
                }}
                onLocationSelect={(loc) => setDestinationLocation(loc)}
                validationError={
                  validation.identicalError || (attemptedSubmit ? validation.destinationError : null)
                }
                allowCurrentLocation={false}
                mapsConfigured={mapsConfigured}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="passenger-name" className="block text-xs font-bold uppercase tracking-wider text-[#14243A]">
                    Passenger Name *
                  </label>
                  <input
                    id="passenger-name"
                    type="text"
                    required
                    placeholder="Your Name"
                    value={passengerName}
                    onChange={(e) => setPassengerName(e.target.value)}
                    className="w-full min-h-[46px] bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-base sm:text-sm text-[#14243A] focus:outline-none focus:ring-2 focus:ring-[#0759A6]"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="passenger-phone" className="block text-xs font-bold uppercase tracking-wider text-[#14243A]">
                    Phone Number *
                  </label>
                  <input
                    id="passenger-phone"
                    type="tel"
                    required
                    placeholder="+94 77 ..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full min-h-[46px] bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-base sm:text-sm text-[#14243A] focus:outline-none focus:ring-2 focus:ring-[#0759A6]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="ride-category" className="block text-xs font-bold uppercase tracking-wider text-[#14243A]">
                  Ride Category
                </label>
                <select
                  id="ride-category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full min-h-[46px] bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-base sm:text-sm text-[#14243A] focus:outline-none focus:ring-2 focus:ring-[#0759A6]"
                >
                  <option value="sedan">Passenger Rides (Car / Sedan)</option>
                  <option value="tuktuk">Tuk Tuk Rides (Three-Wheeler)</option>
                  <option value="bike">Bike Rides (Motorcycle)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="ride-notes" className="block text-xs font-bold uppercase tracking-wider text-[#14243A]">
                  Notes / Special Requests
                </label>
                <textarea
                  id="ride-notes"
                  rows={2}
                  placeholder="Luggage or accessibility notes..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-base sm:text-sm text-[#14243A] focus:outline-none focus:ring-2 focus:ring-[#0759A6]"
                />
              </div>

              {!validation.locationsValid && (pickupText.trim().length > 0 || destinationText.trim().length > 0) && (
                <p className="text-xs text-[#667085] flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0759A6] shrink-0" />
                  <span>
                    {validation.identicalError ||
                      'Select valid pickup and destination suggestions from the list to continue.'}
                  </span>
                </p>
              )}

              <button
                type="submit"
                disabled={!canContinue}
                className={`w-full min-h-[44px] sm:min-h-[48px] flex items-center justify-center space-x-2 font-bold py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl shadow-md transition-all text-sm ${
                  canContinue
                    ? 'bg-[#FFD21F] hover:bg-[#f6c612] text-[#08264A] cursor-pointer'
                    : 'bg-slate-200 text-slate-500 cursor-not-allowed shadow-none'
                }`}
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </form>
          )}
        </div>

        {/* Right: Interactive Map Preview + Safety Commitment */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-3.5 sm:p-6 shadow-lg">
            {mapsConfigured ? (
              <RideMapPreview pickup={pickupLocation} destination={destinationLocation} />
            ) : (
              <div className="h-[220px] sm:h-[360px] lg:h-[440px] rounded-2xl bg-slate-50 border border-dashed border-slate-300 flex flex-col items-center justify-center p-5 sm:p-6 text-center space-y-2.5 sm:space-y-3">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#0759A6]/10 text-[#0759A6] flex items-center justify-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-[#14243A]">Interactive Route Map Preview</h3>
                <p className="text-xs sm:text-sm text-[#667085] max-w-md leading-relaxed">
                  Configure <code className="bg-slate-200 px-1.5 py-0.5 rounded font-mono text-xs">VITE_GOOGLE_MAPS_API_KEY</code> to enable Sri Lanka Places Autocomplete, current location reverse geocoding, and interactive route rendering.
                </p>
              </div>
            )}
          </div>

          {/* Safety & Quality Commitment */}
          <div className="bg-[#08264A] text-white p-4 sm:p-7 rounded-2xl sm:rounded-3xl space-y-2 sm:space-y-2.5 shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFD21F] text-[#08264A] flex items-center justify-center font-bold shrink-0">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="font-bold text-base sm:text-lg text-white">The WOLET Safety Commitment</h3>
            </div>
            <p className="text-white/85 text-xs sm:text-sm leading-relaxed">
              Your safety and comfort guide how we design every passenger and driver-partner experience across Sri Lanka.
            </p>
          </div>
        </div>
      </div>

      {/* Full-Width Vehicle Options Row — prevents squeezing on 768px-1024px viewports */}
      <div className="space-y-4 sm:space-y-6">
        <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0759A6]">Vehicle Options</span>
          <h2 className="fluid-section-title font-extrabold text-[#14243A]">Choose the Right Ride for Your Trip</h2>
          <p className="text-[#667085] text-sm sm:text-base">
            Select your preferred WOLET ride category below to sync with your route planner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-8">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                aria-pressed={isSelected}
                className={`text-left cursor-pointer rounded-2xl border p-4 sm:p-5 lg:p-6 transition-all flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0759A6] ${
                  isSelected
                    ? 'border-[#0759A6] bg-sky-50/60 shadow-lg ring-2 ring-[#0759A6]/20'
                    : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="w-full">
                  <div className="aspect-[16/9] sm:aspect-[16/10] max-h-[170px] sm:max-h-none rounded-xl overflow-hidden mb-3 sm:mb-4 bg-slate-100">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <h3 className="font-bold text-[#14243A] text-lg mb-1">{cat.name}</h3>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-3 sm:mb-4">{cat.desc}</p>
                </div>
                <div className="w-full pt-2.5 sm:pt-3 border-t border-slate-200 flex items-center justify-between gap-2 text-xs sm:text-sm font-semibold text-[#0759A6]">
                  <span>{cat.capacity}</span>
                  <span className={isSelected ? 'text-[#08264A] font-bold' : ''}>
                    {isSelected ? 'Selected ✓' : 'Select'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white text-[#14243A]">
      {/* Hero Section */}
      <section className="bg-[#08264A] text-white py-7 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src={colomboLotusHeroImg}
            alt="Colombo Lotus Tower and cityscape"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08264A] via-[#08264A]/90 to-[#08264A]/55" />
        </div>

        <div className="max-w-7xl mx-auto mobile-px sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-2.5 sm:space-y-4">
            <h1 className="fluid-page-title font-extrabold tracking-tight">
              Get to Know Your <span className="text-[#FFD21F]">WOLET Ride Options</span>
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed">
              Search Sri Lankan pickup and destination locations and explore ride categories tailored for your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Ride Enquiry & Map Section */}
      <section className="py-6 sm:py-12 lg:py-16 max-w-7xl mx-auto mobile-px sm:px-6 lg:px-8">
        {mapsConfigured ? (
          <APIProvider
            apiKey={GOOGLE_MAPS_API_KEY}
            language="en"
            region="LK"
          >
            {ridePlannerContent}
          </APIProvider>
        ) : (
          ridePlannerContent
        )}
      </section>

      {/* Passenger FAQs Accordion Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto mobile-px sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0759A6]">Passenger Support</span>
            <h2 className="fluid-section-title font-extrabold text-[#14243A]">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full min-h-[56px] flex items-center justify-between gap-4 p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-[#14243A] hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#0759A6] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#667085] shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#667085] leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
