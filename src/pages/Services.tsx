import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import colomboLotusHeroImg from '../assets/images/colombo-lotus-hero.png';
import passengerRidesImg from '../assets/images/passenger-rides.png';
import tuktukRidesImg from '../assets/images/tuktuk-rides.png';
import bikeRidesImg from '../assets/images/bike-rides.png';

export default function Services() {
  const servicesList = [
    {
      id: 'passenger',
      title: 'Passenger Rides',
      subtitle: 'Comfortable Sedan & Hatchback Rides',
      description: 'Travel comfortably and safely across Sri Lanka with professional driver-partners.',
      image: passengerRidesImg,
      status: 'Proposed Category',
      features: ['Air-conditioned comfort', 'Professional driver-partners', 'Urban and suburban travel'],
      link: '/ride',
    },
    {
      id: 'tuktuk',
      title: 'Tuk Tuk Rides',
      subtitle: 'Iconic Sri Lankan Three-Wheeler Transit',
      description: 'A convenient, iconic local ride for everyone across busy city streets.',
      image: tuktukRidesImg,
      status: 'Proposed Category',
      features: ['Ideal for city traffic', 'Local expert drivers', 'Transparent fare estimates'],
      link: '/services/tuktuk',
    },
    {
      id: 'bike',
      title: 'Bike Rides',
      subtitle: 'Fast & Flexible Solo Commuting',
      description: 'Quick and flexible travel option to beat traffic and arrive promptly.',
      image: bikeRidesImg,
      status: 'Proposed Category',
      features: ['Quick transit times', 'Nimble urban navigation', 'Cost-effective daily commute'],
      link: '/ride',
    },
  ];

  return (
    <div className="bg-white text-[#14243A]">
      {/* Hero Banner */}
      <section className="relative bg-[#08264A] text-white py-7 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={colomboLotusHeroImg}
            alt="Colombo Lotus Tower and city roads"
            decoding="async"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08264A] via-[#08264A]/90 to-[#08264A]/55" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto mobile-px sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-2.5 sm:space-y-4">
            <h1 className="fluid-page-title font-extrabold tracking-tight">
              Smart Mobility <span className="text-[#FFD21F]">Solutions</span>
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-white/90 font-medium max-w-2xl leading-relaxed">
              Designed to connect passengers with independent driver-partners across Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-8 sm:py-14 lg:py-20">
        <div className="max-w-7xl mx-auto mobile-px sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2 sm:space-y-3">
            <h2 className="fluid-section-title font-extrabold text-[#14243A]">
              Choose Your Journey Category
            </h2>
            <p className="text-[#667085] text-sm sm:text-base">
              Whether you need a spacious sedan for family travel, a tuk-tuk for daily errands, or a bike to beat traffic, WOLET offers dedicated mobility categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {servicesList.map((service) => (
              <article
                key={service.id}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl border border-slate-200 overflow-hidden flex flex-col justify-between group hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[16/9] sm:aspect-[16/10] max-h-[190px] sm:max-h-none overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 bg-[#08264A]/90 backdrop-blur-md text-[#FFD21F] text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-lg sm:rounded-xl shadow-md">
                      {service.status}
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 lg:p-7 space-y-2.5 sm:space-y-3.5">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#14243A]">{service.title}</h3>
                    <p className="text-xs font-semibold text-[#0759A6] uppercase tracking-wider">{service.subtitle}</p>
                    <p className="text-[#667085] text-sm leading-relaxed">{service.description}</p>

                    <div className="space-y-1.5 sm:space-y-2 pt-2.5 sm:pt-3 border-t border-slate-100">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center space-x-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-[#0759A6] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 lg:p-7 pt-0">
                  <Link
                    to={service.link}
                    className="w-full min-h-[44px] sm:min-h-[48px] flex items-center justify-center space-x-2 bg-[#FFD21F] hover:bg-[#f6c612] text-[#08264A] font-bold py-2.5 sm:py-3 px-4 rounded-xl shadow-sm transition-all text-sm"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Callout */}
      <section className="py-8 sm:py-14 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto mobile-px sm:px-6 text-center space-y-4 sm:space-y-5">
          <h3 className="text-lg sm:text-2xl font-bold text-[#14243A]">Ready to explore smart transit with WOLET?</h3>
          <p className="text-[#667085] max-w-xl mx-auto text-sm sm:text-base">
            WOLET is a mobility platform connecting passengers with independent driver-partners across Sri Lanka. Building smarter mobility for tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <Link
              to="/ride"
              className="inline-flex items-center justify-center bg-[#0759A6] hover:bg-[#064a8c] text-white font-bold px-6 sm:px-8 min-h-[44px] sm:min-h-[48px] rounded-xl shadow-md text-sm transition-all w-full sm:w-auto"
            >
              Explore Ride Options
            </Link>
            <Link
              to="/drive"
              className="inline-flex items-center justify-center bg-[#FFD21F] hover:bg-[#f6c612] text-[#08264A] font-bold px-6 sm:px-8 min-h-[44px] sm:min-h-[48px] rounded-xl shadow-md text-sm transition-all w-full sm:w-auto"
            >
              Drive with WOLET
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
