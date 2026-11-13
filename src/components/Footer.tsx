import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#08264A] text-white pt-9 sm:pt-14 lg:pt-16 pb-7 sm:pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto mobile-px sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 mb-7 sm:mb-12">
          {/* Brand Info */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD21F] rounded-lg">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-wider text-[#FFD21F]">
                WOLET
              </span>
              <span className="block text-[10px] uppercase tracking-widest font-bold text-white/80 mt-0.5">
                Your Smart Transit Partner
              </span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed max-w-sm">
              WOLET is a mobility platform connecting passengers with independent driver-partners across Sri Lanka. Building smarter mobility for tomorrow.
            </p>
            <div className="pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-1.5 min-h-[44px] sm:min-h-[32px] text-xs font-bold text-[#FFD21F] hover:text-white transition-colors py-1"
              >
                <span>Connect with WOLET Support</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3.5">
            <h3 className="text-[#FFD21F] font-semibold text-base tracking-wide">Navigation</h3>
            <ul className="space-y-1 sm:space-y-2 text-sm">
              <li>
                <Link to="/" className="inline-flex items-center min-h-[44px] min-w-[44px] sm:min-h-[36px] sm:min-w-0 text-white/85 hover:text-[#FFD21F] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/ride" className="inline-flex items-center min-h-[44px] min-w-[44px] sm:min-h-[36px] sm:min-w-0 text-white/85 hover:text-[#FFD21F] transition-colors">
                  Ride
                </Link>
              </li>
              <li>
                <Link to="/services" className="inline-flex items-center min-h-[44px] min-w-[44px] sm:min-h-[36px] sm:min-w-0 text-white/85 hover:text-[#FFD21F] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/drive" className="inline-flex items-center min-h-[44px] min-w-[44px] sm:min-h-[36px] sm:min-w-0 text-white/85 hover:text-[#FFD21F] transition-colors">
                  Drive with WOLET
                </Link>
              </li>
              <li>
                <Link to="/about" className="inline-flex items-center min-h-[44px] min-w-[44px] sm:min-h-[36px] sm:min-w-0 text-white/85 hover:text-[#FFD21F] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Explore */}
          <div className="space-y-3.5">
            <h3 className="text-[#FFD21F] font-semibold text-base tracking-wide">Support</h3>
            <ul className="space-y-1 sm:space-y-2 text-sm">
              <li>
                <Link to="/contact" className="inline-flex items-center min-h-[44px] min-w-[44px] sm:min-h-[36px] sm:min-w-0 text-white/85 hover:text-[#FFD21F] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/help" className="inline-flex items-center min-h-[44px] min-w-[44px] sm:min-h-[36px] sm:min-w-0 text-white/85 hover:text-[#FFD21F] transition-colors">
                  Help / FAQs
                </Link>
              </li>
              <li>
                <Link to="/services/tuktuk" className="inline-flex items-center min-h-[44px] min-w-[44px] sm:min-h-[36px] sm:min-w-0 text-white/85 hover:text-[#FFD21F] transition-colors">
                  Tuk Tuk Rides
                </Link>
              </li>
              <li>
                <Link to="/drive" className="inline-flex items-center min-h-[44px] min-w-[44px] sm:min-h-[36px] sm:min-w-0 text-white/85 hover:text-[#FFD21F] transition-colors">
                  Driver Onboarding
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-3.5">
            <h3 className="text-[#FFD21F] font-semibold text-base tracking-wide">Get in Touch</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm text-white/85">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#FFD21F] shrink-0 mt-1" />
                <span>No. 123, Galle Road, Colombo 03, Sri Lanka</span>
              </li>
              <li>
                <a
                  href="tel:+94112345678"
                  className="inline-flex items-center space-x-3 min-h-[44px] sm:min-h-[36px] hover:text-[#FFD21F] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FFD21F] shrink-0" />
                  <span className="tabular-nums">+94 11 234 5678</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@wolet.lk"
                  className="inline-flex items-center space-x-3 min-h-[44px] sm:min-h-[36px] hover:text-[#FFD21F] transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#FFD21F] shrink-0" />
                  <span>info@wolet.lk</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/70 gap-4">
          <p className="text-center md:text-left">© WOLET. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 sm:gap-x-6 gap-y-1 sm:gap-y-2">
            <Link to="/terms" className="inline-flex items-center min-h-[44px] sm:min-h-0 px-1.5 sm:px-0 sm:py-1 hover:text-[#FFD21F] transition-colors whitespace-nowrap">
              Terms and Conditions
            </Link>
            <Link to="/privacy" className="inline-flex items-center min-h-[44px] sm:min-h-0 px-1.5 sm:px-0 sm:py-1 hover:text-[#FFD21F] transition-colors whitespace-nowrap">
              Privacy Policy
            </Link>
            <Link to="/refund" className="inline-flex items-center min-h-[44px] sm:min-h-0 px-1.5 sm:px-0 sm:py-1 hover:text-[#FFD21F] transition-colors whitespace-nowrap">
              Refund Policy
            </Link>
            <Link to="/cancellation" className="inline-flex items-center min-h-[44px] sm:min-h-0 px-1.5 sm:px-0 sm:py-1 hover:text-[#FFD21F] transition-colors whitespace-nowrap">
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
