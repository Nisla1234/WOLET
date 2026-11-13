import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Target, Heart, Eye } from 'lucide-react';
import colomboLotusHeroImg from '../assets/images/colombo-lotus-hero.png';
import colomboLotusCityscapeImg from '../assets/images/colombo-lotus-cityscape.png';

export default function About() {
  return (
    <div className="bg-white text-[#14243A]">
      {/* Hero Banner */}
      <section className="relative bg-[#08264A] text-white py-7 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={colomboLotusHeroImg}
            alt="Colombo cityscape and Lotus Tower"
            decoding="async"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08264A] via-[#08264A]/90 to-[#08264A]/55" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto mobile-px sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-2.5 sm:space-y-4">
            <h1 className="fluid-page-title font-extrabold tracking-tight">
              About <span className="text-[#FFD21F]">WOLET</span>
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-white/90 font-medium">
              A Smarter Way to Move Across Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content + Vision & Mission Section */}
      <section className="py-8 sm:py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto mobile-px sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <span className="inline-block bg-[#0759A6]/10 text-[#0759A6] font-semibold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="fluid-section-title font-extrabold text-[#14243A]">
                Pioneering Next-Generation Mobility in Sri Lanka
              </h2>
              <p className="text-[#667085] leading-relaxed text-sm sm:text-base">
                WOLET is a mobility platform connecting passengers with independent driver-partners across Sri Lanka. Building smarter mobility for tomorrow.
              </p>

              {/* Vision & Mission Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 pt-1">
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 sm:space-y-2 shadow-sm">
                  <div className="flex items-center space-x-2.5 text-[#08264A] font-bold">
                    <span className="w-8 h-8 rounded-lg bg-[#FFD21F]/30 flex items-center justify-center text-[#08264A] shrink-0">
                      <Eye className="w-4 h-4" />
                    </span>
                    <span className="text-sm uppercase tracking-wider">Our Vision</span>
                  </div>
                  <p className="text-sm sm:text-base font-medium text-[#14243A] sm:pl-10 lg:pl-10">
                    To be Sri Lanka's most trusted and innovative mobility platform.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 sm:space-y-2 shadow-sm">
                  <div className="flex items-center space-x-2.5 text-[#08264A] font-bold">
                    <span className="w-8 h-8 rounded-lg bg-[#FFD21F]/30 flex items-center justify-center text-[#08264A] shrink-0">
                      <Target className="w-4 h-4" />
                    </span>
                    <span className="text-sm uppercase tracking-wider">Our Mission</span>
                  </div>
                  <p className="text-sm sm:text-base font-medium text-[#14243A] sm:pl-10 lg:pl-10">
                    To provide a convenient and transparent transport experience for everyone.
                  </p>
                </div>
              </div>

              <div className="pt-1">
                <Link
                  to="/drive"
                  className="inline-flex items-center justify-center space-x-2 bg-[#FFD21F] hover:bg-[#f6c612] text-[#08264A] font-bold px-6 sm:px-7 min-h-[44px] sm:min-h-[48px] rounded-xl shadow-md transition-all text-sm w-full sm:w-auto"
                >
                  <span>Join Our Partner Network</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-slate-100 aspect-[16/9] sm:aspect-[16/10] lg:aspect-[4/3] max-h-[210px] sm:max-h-none">
                <img
                  src={colomboLotusCityscapeImg}
                  alt="Colombo Lotus Tower, Sri Lankan cityscape, and modern urban infrastructure"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-8 sm:py-14 lg:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto mobile-px sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2 sm:space-y-3">
            <span className="inline-block bg-[#0759A6]/10 text-[#0759A6] font-semibold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
              Our Core Values
            </span>
            <h2 className="fluid-section-title font-extrabold text-[#14243A]">
              What Drives WOLET Forward
            </h2>
            <p className="text-[#667085] text-sm sm:text-base">
              Our foundational principles guide every journey, partnership, and technological advancement we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg border border-slate-200 space-y-3 sm:space-y-4">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#FFD21F]/20 flex items-center justify-center text-[#0759A6]">
                <ShieldCheck className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#14243A]">Safety First</h3>
              <p className="text-[#667085] text-sm leading-relaxed">
                We prioritize passenger and driver security through clear verification standards, respectful community guidelines, and responsive support.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg border border-slate-200 space-y-3 sm:space-y-4">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#FFD21F]/20 flex items-center justify-center text-[#0759A6]">
                <Heart className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#14243A]">Community Empowered</h3>
              <p className="text-[#667085] text-sm leading-relaxed">
                Empowering independent driver-partners with respectful collaboration and transparent opportunities.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg border border-slate-200 space-y-3 sm:space-y-4">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#FFD21F]/20 flex items-center justify-center text-[#0759A6]">
                <Target className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#14243A]">Transparent Innovation</h3>
              <p className="text-[#667085] text-sm leading-relaxed">
                Clearing away complexity with intuitive digital experiences and clear communication at every step.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
