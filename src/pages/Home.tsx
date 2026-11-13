import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Clock, Car, Users, CheckCircle } from 'lucide-react';
import colomboLotusHeroImg from '../assets/images/colombo-lotus-hero.png';
import colomboLotusCityscapeImg from '../assets/images/colombo-lotus-cityscape.png';
import passengerRidesImg from '../assets/images/passenger-rides.png';
import tuktukRidesImg from '../assets/images/tuktuk-rides.png';
import bikeRidesImg from '../assets/images/bike-rides.png';
import driverPartnerImg from '../assets/images/driver-partner.png';

export default function Home() {
  return (
    <div className="bg-white text-[#14243A]">
      {/* Hero Section */}
      <section className="relative bg-[#08264A] text-white overflow-hidden pt-5 pb-10 sm:pt-12 sm:pb-20 lg:py-16 xl:py-20">
        <div className="absolute inset-0 z-0">
          <img
            src={colomboLotusHeroImg}
            alt="Colombo Lotus Tower and Sri Lankan cityscape"
            decoding="async"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08264A] via-[#08264A]/90 to-[#08264A]/65" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto mobile-px sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 xl:gap-12 items-center">
            <div className="lg:col-span-6 space-y-3.5 sm:space-y-5">
              <h1 className="fluid-hero-title font-extrabold tracking-tight text-white">
                Move Freely with <span className="text-[#FFD21F]">WOLET.</span>
              </h1>

              <p className="text-[15px] sm:text-lg text-white/90 max-w-xl leading-relaxed">
                Discover a smarter way to connect passengers with independent driver-partners across Sri Lanka.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
                <Link
                  to="/ride"
                  className="inline-flex items-center justify-center space-x-2 bg-[#FFD21F] hover:bg-[#f6c612] text-[#08264A] font-bold px-5 sm:px-7 min-h-[44px] sm:min-h-[48px] rounded-xl shadow-lg transition-all text-sm sm:text-base whitespace-nowrap"
                >
                  <span>Explore WOLET</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                </Link>
                <Link
                  to="/drive"
                  className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold px-5 sm:px-7 min-h-[44px] sm:min-h-[48px] rounded-xl backdrop-blur-md transition-all text-sm sm:text-base whitespace-nowrap"
                >
                  <span>Drive with WOLET</span>
                </Link>
              </div>

              <div className="pt-3 sm:pt-4 grid grid-cols-3 gap-2 sm:gap-4 border-t border-white/15 text-white/85 text-xs sm:text-sm">
                <div>
                  <span className="block font-bold text-sm min-[380px]:text-base sm:text-lg text-[#FFD21F]">Colombo</span>
                  <span className="text-xs text-white/75 leading-snug block">Urban Mobility</span>
                </div>
                <div>
                  <span className="block font-bold text-sm min-[380px]:text-base sm:text-lg text-[#FFD21F]">Gampaha</span>
                  <span className="text-xs text-white/75 leading-snug block">Suburban Routes</span>
                </div>
                <div>
                  <span className="block font-bold text-sm min-[380px]:text-base sm:text-lg text-[#FFD21F]">Kalutara</span>
                  <span className="text-xs text-white/75 leading-snug block">Coastal Corridor</span>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Preview Card (Image 1 - Colombo Lotus Tower & Cityscape) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border sm:border-2 border-white/20 bg-white/5 p-1 sm:p-1.5">
                <div className="relative aspect-[16/9] lg:aspect-[16/10] max-h-[210px] sm:max-h-none w-full overflow-hidden rounded-xl sm:rounded-2xl">
                  <img
                    src={colomboLotusHeroImg}
                    alt="Colombo Lotus Tower and Colombo skyline"
                    decoding="async"
                    fetchPriority="high"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="hidden sm:block absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#08264A]/85 via-[#08264A]/40 to-transparent pointer-events-none" />
                  <div className="hidden sm:flex absolute bottom-3.5 left-3.5 right-3.5 bg-[#08264A]/90 backdrop-blur-md p-4 rounded-xl border border-white/15 items-center justify-between gap-3 text-white">
                    <div className="min-w-0">
                      <p className="text-[11px] text-[#FFD21F] font-semibold uppercase tracking-wider truncate">
                        Colombo Skyline
                      </p>
                      <h2 className="font-bold text-sm md:text-base text-white truncate">
                        Smart Transit Across Sri Lanka
                      </h2>
                    </div>
                    <span className="bg-[#FFD21F] text-[#08264A] text-xs font-bold px-2.5 py-1 rounded-lg shrink-0">
                      WOLET
                    </span>
                  </div>
                </div>
                <div className="sm:hidden mt-1.5 bg-[#08264A]/95 px-3 py-2 rounded-xl border border-white/15 flex items-center justify-between gap-2.5 text-white">
                  <div className="min-w-0">
                    <p className="text-[10px] text-[#FFD21F] font-semibold uppercase tracking-wider truncate">
                      Colombo Skyline
                    </p>
                    <h2 className="font-bold text-xs text-white truncate">
                      Smart Transit Across Sri Lanka
                    </h2>
                  </div>
                  <span className="bg-[#FFD21F] text-[#08264A] text-[11px] font-bold px-2.5 py-1 rounded-lg shrink-0">
                    WOLET
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Strip */}
      <section className="relative z-20 max-w-7xl mx-auto mobile-px sm:px-6 lg:px-8 -mt-4 sm:-mt-8 mb-8 sm:mb-12">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-3 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
          <div className="flex items-start space-x-3.5 p-3 rounded-xl transition-colors hover:bg-slate-50">
            <div className="w-11 h-11 rounded-xl bg-[#FFD21F]/20 flex items-center justify-center shrink-0">
              <Car className="w-5 h-5 text-[#0759A6]" />
            </div>
            <div>
              <h3 className="font-bold text-[#14243A] text-sm sm:text-base mb-0.5">Comfortable Rides</h3>
              <p className="text-xs text-[#667085] leading-relaxed">Travel in comfort across urban and suburban routes.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5 p-3 rounded-xl transition-colors hover:bg-slate-50">
            <div className="w-11 h-11 rounded-xl bg-[#FFD21F]/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#0759A6]" />
            </div>
            <div>
              <h3 className="font-bold text-[#14243A] text-sm sm:text-base mb-0.5">Trusted Service</h3>
              <p className="text-xs text-[#667085] leading-relaxed">Your safety and reliability are our highest priorities.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5 p-3 rounded-xl transition-colors hover:bg-slate-50">
            <div className="w-11 h-11 rounded-xl bg-[#FFD21F]/20 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-[#0759A6]" />
            </div>
            <div>
              <h3 className="font-bold text-[#14243A] text-sm sm:text-base mb-0.5">On-Time Travel</h3>
              <p className="text-xs text-[#667085] leading-relaxed">Plan every trip efficiently across busy city streets.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5 p-3 rounded-xl transition-colors hover:bg-slate-50">
            <div className="w-11 h-11 rounded-xl bg-[#FFD21F]/20 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-[#0759A6]" />
            </div>
            <div>
              <h3 className="font-bold text-[#14243A] text-sm sm:text-base mb-0.5">Grow Together</h3>
              <p className="text-xs text-[#667085] leading-relaxed">Partner with WOLET for sustainable livelihood growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview (Image 2 - Different Colombo Lotus Tower & Cityscape) */}
      <section className="py-8 sm:py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto mobile-px sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              <span className="inline-block bg-[#0759A6]/10 text-[#0759A6] font-semibold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                About WOLET
              </span>
              <h2 className="fluid-section-title font-extrabold text-[#14243A]">
                A Smarter Way to Move Across Sri Lanka.
              </h2>
              <p className="text-[#667085] leading-relaxed text-sm sm:text-base max-w-xl">
                WOLET is a mobility platform connecting passengers with independent driver-partners across Sri Lanka. Building smarter mobility for tomorrow.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
                  <h3 className="font-bold text-[#14243A] text-sm">Our Vision</h3>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    To be Sri Lanka's most trusted and innovative mobility platform.
                  </p>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
                  <h3 className="font-bold text-[#14243A] text-sm">Our Mission</h3>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    To provide a convenient and transparent transport experience for everyone.
                  </p>
                </div>
              </div>

              <div className="pt-1">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center space-x-2 bg-[#FFD21F] hover:bg-[#f6c612] text-[#08264A] font-bold px-5 sm:px-6 min-h-[44px] sm:min-h-[46px] rounded-xl shadow-sm transition-all text-sm w-full sm:w-auto"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 sm:border-4 border-white aspect-[16/9] sm:aspect-[16/10] lg:aspect-[16/11] max-h-[210px] sm:max-h-none">
                <img
                  src={colomboLotusCityscapeImg}
                  alt="Colombo city infrastructure, Sri Lankan flag, and Lotus Tower"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section (Images 3, 4, 5) */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto mobile-px sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 space-y-2.5 sm:space-y-3">
            <span className="inline-block bg-[#0759A6]/10 text-[#0759A6] font-semibold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="fluid-section-title font-extrabold text-[#14243A]">
              Smart Mobility Solutions for Every Journey
            </h2>
            <p className="text-[#667085] text-sm sm:text-base">
              Explore our ride categories designed for comfortable daily commutes across Sri Lanka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-8">
            {/* Card 1: Passenger Rides (Image 4) */}
            <article className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="aspect-[16/9] sm:aspect-[16/10] max-h-[190px] sm:max-h-none overflow-hidden bg-slate-100">
                  <img
                    src={passengerRidesImg}
                    alt="Passenger Rides - Modern passenger car in Colombo"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-5 lg:p-6 space-y-1.5 sm:space-y-2">
                  <h3 className="text-lg lg:text-xl font-bold text-[#14243A]">Passenger Rides</h3>
                  <p className="text-sm text-[#667085] leading-relaxed">
                    Travel comfortably and safely across Sri Lanka with professional driver-partners.
                  </p>
                </div>
              </div>
              <div className="px-4 sm:px-5 lg:px-6 pb-3 sm:pb-4 lg:pb-6">
                <Link
                  to="/ride"
                  className="inline-flex items-center space-x-1.5 min-h-[44px] sm:min-h-[36px] text-[#0759A6] font-bold text-sm hover:text-[#08264A] transition-colors py-1.5"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </article>

            {/* Card 2: Tuk Tuk Rides (Image 3) */}
            <article className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="aspect-[16/9] sm:aspect-[16/10] max-h-[190px] sm:max-h-none overflow-hidden bg-slate-100">
                  <img
                    src={tuktukRidesImg}
                    alt="Tuk Tuk Rides - Authentic Sri Lankan three-wheeler"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-5 lg:p-6 space-y-1.5 sm:space-y-2">
                  <h3 className="text-lg lg:text-xl font-bold text-[#14243A]">Tuk Tuk Rides</h3>
                  <p className="text-sm text-[#667085] leading-relaxed">
                    A convenient, iconic local ride for everyone across busy city streets.
                  </p>
                </div>
              </div>
              <div className="px-4 sm:px-5 lg:px-6 pb-3 sm:pb-4 lg:pb-6">
                <Link
                  to="/services/tuktuk"
                  className="inline-flex items-center space-x-1.5 min-h-[44px] sm:min-h-[36px] text-[#0759A6] font-bold text-sm hover:text-[#08264A] transition-colors py-1.5"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </article>

            {/* Card 3: Bike Rides (Image 5) */}
            <article className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="aspect-[16/9] sm:aspect-[16/10] max-h-[190px] sm:max-h-none overflow-hidden bg-slate-100">
                  <img
                    src={bikeRidesImg}
                    alt="Bike Rides - Modern motorcycle in Colombo"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-5 lg:p-6 space-y-1.5 sm:space-y-2">
                  <h3 className="text-lg lg:text-xl font-bold text-[#14243A]">Bike Rides</h3>
                  <p className="text-sm text-[#667085] leading-relaxed">
                    Quick and flexible travel option to beat traffic and arrive promptly.
                  </p>
                </div>
              </div>
              <div className="px-4 sm:px-5 lg:px-6 pb-3 sm:pb-4 lg:pb-6">
                <Link
                  to="/ride"
                  className="inline-flex items-center space-x-1.5 min-h-[44px] sm:min-h-[36px] text-[#0759A6] font-bold text-sm hover:text-[#08264A] transition-colors py-1.5"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </article>
          </div>

          <div className="text-center mt-6 sm:mt-10">
            <Link
              to="/services"
              className="inline-flex items-center justify-center space-x-2 bg-[#FFD21F] hover:bg-[#f6c612] text-[#08264A] font-bold px-6 sm:px-8 min-h-[44px] sm:min-h-[48px] rounded-xl shadow-md transition-all text-sm w-full sm:w-auto"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Callout Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[#08264A] text-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto mobile-px sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <span className="inline-block bg-[#FFD21F] text-[#08264A] font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                Driver & Fleet Partnerships
              </span>
              <h2 className="fluid-section-title sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-tight">
                Your Road. Your Work. <span className="text-[#FFD21F]">Our Partners.</span>
              </h2>
              <p className="text-white/85 text-[15px] sm:text-lg leading-relaxed max-w-2xl">
                Join WOLET and be part of a smarter transport community with flexible schedules and dedicated driver-partner support.
              </p>

              <div className="space-y-2 sm:space-y-2.5 pt-1">
                <div className="flex items-start space-x-3 text-sm sm:text-base">
                  <CheckCircle className="w-5 h-5 text-[#FFD21F] shrink-0 mt-0.5" />
                  <span className="font-medium">Be part of a trusted Sri Lankan mobility brand</span>
                </div>
                <div className="flex items-start space-x-3 text-sm sm:text-base">
                  <CheckCircle className="w-5 h-5 text-[#FFD21F] shrink-0 mt-0.5" />
                  <span className="font-medium">Connect with passengers across urban & suburban hubs</span>
                </div>
                <div className="flex items-start space-x-3 text-sm sm:text-base">
                  <CheckCircle className="w-5 h-5 text-[#FFD21F] shrink-0 mt-0.5" />
                  <span className="font-medium">Work on your own terms with supportive onboarding</span>
                </div>
              </div>

              <div className="pt-1 sm:pt-2">
                <Link
                  to="/drive"
                  className="inline-flex items-center justify-center space-x-2 bg-[#FFD21F] hover:bg-[#f6c612] text-[#08264A] font-bold px-6 sm:px-7 min-h-[44px] sm:min-h-[48px] rounded-xl shadow-xl transition-all text-sm sm:text-base w-full sm:w-auto"
                >
                  <span>Join Our Partner Network</span>
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border sm:border-2 border-white/20 bg-white/5 p-1 sm:p-2">
                <div className="aspect-[16/9] sm:aspect-[4/3] max-h-[210px] sm:max-h-none w-full overflow-hidden rounded-xl sm:rounded-2xl">
                  <img
                    src={driverPartnerImg}
                    alt="Sri Lankan driver partner with three-wheeler and Colombo Lotus Tower"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-[50%_20%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
