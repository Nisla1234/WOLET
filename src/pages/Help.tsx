import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Search, ArrowRight } from 'lucide-react';

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'general',
      q: 'What is WOLET?',
      a: 'WOLET is a smart ride-hailing and mobility platform designed to connect passengers with independent driver-partners across Sri Lanka.',
    },
    {
      category: 'general',
      q: 'Which geographic areas does WOLET focus on?',
      a: 'Our initial operational focus areas include Colombo, Gampaha, and Kalutara.',
    },
    {
      category: 'passengers',
      q: 'How do I request a ride?',
      a: 'Passengers can use our Ride page to enter pickup and destination details, select a vehicle category, and submit ride enquiries.',
    },
    {
      category: 'passengers',
      q: 'What vehicle categories are available?',
      a: 'WOLET presents Passenger Rides (cars), traditional Sri Lankan Tuk Tuk Rides, and Bike Rides to suit varying daily commute needs.',
    },
    {
      category: 'drivers',
      q: 'How can drivers join the WOLET network?',
      a: 'Interested drivers and fleet owners can complete the partner application form on our "Drive with WOLET" page to begin the onboarding process.',
    },
    {
      category: 'drivers',
      q: 'What documents are required for driver onboarding?',
      a: "Prospective driver-partners typically require a valid Sri Lankan driver's license, vehicle registration, revenue license, insurance, and personal identification documents.",
    },
    {
      category: 'payments',
      q: 'What payment methods are supported?',
      a: 'WOLET is designed to support cash payments, secure digital wallet transactions, and card payments.',
    },
    {
      category: 'privacy',
      q: 'How is my personal data protected?',
      a: 'We adhere to robust privacy and data protection standards. Personal data submitted via our enquiry forms is used solely for communication and onboarding.',
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCat = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-white text-[#14243A]">
      {/* Hero */}
      <section className="bg-[#08264A] text-white py-8 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto mobile-px sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-5 relative z-10">
          <span className="bg-[#FFD21F] text-[#08264A] font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider inline-block">
            Help & Support Center
          </span>
          <h1 className="fluid-page-title font-extrabold tracking-tight">
            How Can We <span className="text-[#FFD21F]">Help You?</span>
          </h1>
          <p className="text-sm sm:text-lg text-white/90 max-w-2xl mx-auto">
            Find answers to frequently asked questions about passenger rides, driver onboarding, and WOLET mobility services.
          </p>

          {/* Centered Search Bar */}
          <div className="max-w-xl mx-auto pt-1 sm:pt-2">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
              <input
                type="search"
                aria-label="Search help topics"
                placeholder="Search help topics (e.g. drivers, payment, rides)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full min-h-[46px] sm:min-h-[48px] bg-white text-[#14243A] pl-12 pr-4 py-2.5 sm:py-3 rounded-2xl shadow-xl text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD21F]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories & FAQs */}
      <section className="py-8 sm:py-16 max-w-5xl mx-auto mobile-px sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { id: 'all', label: 'All Topics' },
            { id: 'general', label: 'General' },
            { id: 'passengers', label: 'Passengers' },
            { id: 'drivers', label: 'Drivers' },
            { id: 'payments', label: 'Payments' },
            { id: 'privacy', label: 'Privacy' },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`min-h-[44px] sm:min-h-[40px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#08264A] text-[#FFD21F] shadow-md'
                  : 'bg-slate-100 text-[#14243A] hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-3 sm:space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 px-4 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-[#667085] text-sm">No matching help articles found for "{searchQuery}".</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-3 min-h-[44px] inline-flex items-center justify-center px-4 text-xs sm:text-sm font-bold text-[#0759A6] underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
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
            })
          )}
        </div>

        {/* Contact Banner */}
        <div className="bg-[#08264A] text-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5 shadow-xl">
          <div className="space-y-1 sm:space-y-1.5 text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-bold text-[#FFD21F]">Still have questions?</h2>
            <p className="text-white/85 text-xs sm:text-sm">
              Our support team is ready to assist you with any inquiries.
            </p>
          </div>
          <Link
            to="/contact"
            className="w-full sm:w-auto min-h-[44px] sm:min-h-[48px] inline-flex items-center justify-center space-x-2 bg-[#FFD21F] hover:bg-[#f6c612] text-[#08264A] font-bold px-6 py-2.5 sm:py-3 rounded-xl shadow-md text-sm shrink-0"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>
      </section>
    </div>
  );
}
