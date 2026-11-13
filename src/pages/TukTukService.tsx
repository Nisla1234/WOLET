import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import tuktukRidesImg from '../assets/images/tuktuk-rides.png';

export default function TukTukService() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const benefits = [
    {
      title: 'Ideal for city traffic',
      desc: 'Proposed benefit: Navigate through peak-hour congestion with the agility of a local three-wheeler.',
    },
    {
      title: 'Local expert drivers',
      desc: 'Proposed benefit: Connect with neighborhood driver-partners familiar with Sri Lankan urban routes.',
    },
    {
      title: 'Transparent fare estimates',
      desc: 'Proposed benefit: Designed to provide clear route information and upfront guidance before travel.',
    },
  ];

  const faqs = [
    {
      q: 'What is WOLET Tuk Tuk Rides?',
      a: 'Tuk Tuk Rides is a proposed local three-wheeler mobility category designed for convenient, everyday travel across busy Sri Lankan streets and neighborhood lanes.',
    },
    {
      q: 'How can I plan a Tuk Tuk ride enquiry?',
      a: 'Visit the Ride page, select your Pickup Location and Destination using Sri Lanka address search, choose Tuk Tuk Rides, and submit your route enquiry.',
    },
    {
      q: 'How can tuk-tuk owners join as driver-partners?',
      a: 'Interested three-wheeler drivers can register their interest through the Join Our Partner Network page and select Tuk Tuk as their vehicle category.',
    },
  ];

  return (
    <div className="bg-white text-[#14243A]">
      {/* Hero Section */}
      <section className="bg-[#08264A] text-white py-7 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={tuktukRidesImg}
            alt="Sri Lankan Tuk Tuk in Colombo"
            decoding="async"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08264A] via-[#08264A]/90 to-[#08264A]/55" />
        </div>

        <div className="max-w-7xl mx-auto mobile-px sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-2.5 sm:space-y-4">
            <span className="inline-block bg-[#FFD21F] text-[#08264A] font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
              Service Detail
            </span>
            <h1 className="fluid-page-title font-extrabold tracking-tight">
              Tuk Tuk <span className="text-[#FFD21F]">Rides</span>
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-white/90 font-medium">
              Iconic Sri Lankan Three-Wheeler Transit
            </p>
          </div>
        </div>
      </section>

      {/* Main Detail Section */}
      <section className="py-8 sm:py-14 lg:py-20 max-w-7xl mx-auto mobile-px sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <span className="inline-block bg-[#0759A6]/10 text-[#0759A6] font-semibold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
              Iconic Mobility
            </span>
            <h2 className="fluid-section-title font-extrabold text-[#14243A]">
              Navigate Sri Lankan Streets with Ease
            </h2>
            <p className="text-[#667085] leading-relaxed text-sm sm:text-base">
              Navigate bustling city streets and neighborhood lanes quickly and affordably with our trusted local tuk-tuk partner network.
            </p>
            <p className="text-[#667085] leading-relaxed text-sm">
              Whether you are commuting across the city or running daily errands in your neighborhood, WOLET tuk-tuk rides are designed to offer accessible local transit.
            </p>

            <div className="space-y-2.5 sm:space-y-3 pt-1">
              {benefits.map((b, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <CheckCircle className="w-5 h-5 text-[#0759A6] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#14243A] text-sm">{b.title}</h3>
                    <p className="text-xs sm:text-sm text-[#667085] mt-0.5 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
              <Link
                to="/ride"
                className="inline-flex items-center justify-center space-x-2 bg-[#FFD21F] hover:bg-[#f6c612] text-[#08264A] font-bold px-6 sm:px-7 min-h-[44px] sm:min-h-[48px] rounded-xl shadow-md transition-all text-sm"
              >
                <span>Plan a Ride Enquiry</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 border border-slate-300 hover:border-[#0759A6] text-[#14243A] font-bold px-5 sm:px-6 min-h-[44px] sm:min-h-[48px] rounded-xl transition-all text-sm"
              >
                <span>Contact Support</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-slate-100 bg-slate-100 p-1 sm:p-0">
              <div className="relative rounded-xl sm:rounded-none overflow-hidden aspect-[16/9] sm:aspect-[16/10] lg:aspect-[4/3] max-h-[205px] sm:max-h-none">
                <img
                  src={tuktukRidesImg}
                  alt="Authentic Sri Lankan three-wheeler tuk-tuk in Colombo"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
                <div className="hidden sm:flex absolute bottom-4 left-4 right-4 bg-[#08264A]/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-white items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[10px] text-[#FFD21F] font-bold uppercase tracking-wider block">
                      WOLET Category
                    </span>
                    <h3 className="font-bold text-sm md:text-base truncate">
                      Authentic Sri Lankan Three-Wheeler
                    </h3>
                  </div>
                  <span className="bg-[#FFD21F] text-[#08264A] text-xs font-bold px-3 py-1 rounded-xl shrink-0">
                    Tuk Tuk
                  </span>
                </div>
              </div>
              <div className="sm:hidden mt-1.5 bg-[#08264A] p-2.5 rounded-xl text-white flex items-center justify-between gap-2.5">
                <div className="min-w-0">
                  <span className="text-[10px] text-[#FFD21F] font-bold uppercase tracking-wider block">
                    WOLET Category
                  </span>
                  <h3 className="font-bold text-xs truncate">
                    Authentic Sri Lankan Three-Wheeler
                  </h3>
                </div>
                <span className="bg-[#FFD21F] text-[#08264A] text-[11px] font-bold px-2.5 py-1 rounded-lg shrink-0">
                  Tuk Tuk
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-8 sm:py-14 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto mobile-px sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0759A6]">Passenger Journey</span>
            <h2 className="fluid-section-title font-extrabold text-[#14243A]">How the Tuk Tuk Journey Works</h2>
            <p className="text-[#667085] text-sm">Simple steps to plan your neighborhood or city commute.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-2.5 sm:space-y-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#FFD21F]/25 text-[#08264A] font-bold flex items-center justify-center text-base sm:text-lg tabular-nums">
                1
              </div>
              <h3 className="font-bold text-[#14243A] text-lg">Set Your Location</h3>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                Enter your pickup point and destination using Sri Lanka address search.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-2.5 sm:space-y-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#FFD21F]/25 text-[#08264A] font-bold flex items-center justify-center text-base sm:text-lg tabular-nums">
                2
              </div>
              <h3 className="font-bold text-[#14243A] text-lg">Select Tuk Tuk Rides</h3>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                Choose the Tuk Tuk category for nimble city and neighborhood travel.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-2.5 sm:space-y-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#FFD21F]/25 text-[#08264A] font-bold flex items-center justify-center text-base sm:text-lg tabular-nums">
                3
              </div>
              <h3 className="font-bold text-[#14243A] text-lg">Submit Route Enquiry</h3>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                Preview your route on the interactive map and submit your enquiry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-8 sm:py-14 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto mobile-px sm:px-6 lg:px-8 space-y-5 sm:space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0759A6]">Tuk Tuk FAQs</span>
            <h2 className="fluid-section-title font-extrabold text-[#14243A]">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full min-h-[56px] flex items-center justify-between gap-4 p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-[#14243A] hover:bg-slate-100 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#0759A6] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#667085] shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#667085] leading-relaxed border-t border-slate-200 pt-3">
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
