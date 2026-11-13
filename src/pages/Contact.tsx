import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import colomboLotusCityscapeImg from '../assets/images/colombo-lotus-cityscape.png';

export default function Contact() {
  const [passengerForm, setPassengerForm] = useState({ name: '', email: '', message: '' });
  const [partnerForm, setPartnerForm] = useState({ name: '', mobile: '', message: '' });

  const [passengerSubmitted, setPassengerSubmitted] = useState(false);
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);

  const handlePassengerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passengerForm.name.trim() && passengerForm.email.trim()) {
      setPassengerSubmitted(true);
    }
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (partnerForm.name.trim() && partnerForm.mobile.trim()) {
      setPartnerSubmitted(true);
    }
  };

  return (
    <div className="bg-white text-[#14243A]">
      {/* Cinematic Banner */}
      <section className="relative bg-[#08264A] text-white py-7 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={colomboLotusCityscapeImg}
            alt="Colombo skyline contact banner"
            decoding="async"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08264A] via-[#08264A]/90 to-[#08264A]/55" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto mobile-px sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-2.5 sm:space-y-4">
            <h1 className="fluid-page-title font-extrabold tracking-tight">
              Contact <span className="text-[#FFD21F]">Us</span>
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-white/90 font-medium">
              We're Here to Help. Reach out to our team in Colombo.
            </p>
          </div>
        </div>
      </section>

      {/* Responsive 1-col Mobile / 2-col Tablet / 3-col Desktop Contact Section */}
      <section className="py-8 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto mobile-px sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {/* Column 1: Get in Touch (Full-width top card on 768px-1023px tablet, 1/3 col on desktop) */}
            <div className="md:col-span-2 lg:col-span-1 bg-slate-50 p-4 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-lg sm:shadow-xl space-y-4 sm:space-y-6">
              <div className="space-y-1.5 sm:space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0759A6]">Support Hub</span>
                <h2 className="text-lg sm:text-2xl font-extrabold text-[#14243A]">Get in Touch</h2>
                <p className="text-[#667085] text-sm">Have a question or need support? Reach out to us.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4 text-sm text-slate-700">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#0759A6] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-[#14243A]">WOLET</span>
                    <span>No. 123, Galle Road, Colombo 03, Sri Lanka</span>
                  </div>
                </div>

                <a
                  href="mailto:info@wolet.lk"
                  className="flex items-center space-x-3 min-h-[44px] sm:min-h-[40px] hover:text-[#0759A6] transition-colors break-all"
                >
                  <Mail className="w-5 h-5 text-[#0759A6] shrink-0" />
                  <span>info@wolet.lk</span>
                </a>

                <a
                  href="tel:+94112345678"
                  className="flex items-center space-x-3 min-h-[44px] sm:min-h-[40px] hover:text-[#0759A6] transition-colors tabular-nums"
                >
                  <Phone className="w-5 h-5 text-[#0759A6] shrink-0" />
                  <span>+94 11 234 5678</span>
                </a>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-slate-200">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FFD21F]/15 border border-[#FFD21F]/40 text-xs sm:text-sm text-[#14243A] space-y-1">
                  <span className="font-bold block text-[#08264A]">Support Hours</span>
                  <span>Monday – Friday: 8:30 AM – 5:30 PM (IST)</span>
                </div>
              </div>
            </div>

            {/* Column 2: Passenger Enquiry */}
            <div className="bg-slate-50 p-4 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-lg sm:shadow-xl space-y-4 sm:space-y-6">
              <div className="space-y-1.5 sm:space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0759A6]">For Passengers</span>
                <h2 className="text-lg sm:text-2xl font-extrabold text-[#14243A]">Passenger Enquiry</h2>
                <p className="text-[#667085] text-sm">Send us your questions regarding rides and routes.</p>
              </div>

              {passengerSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-3">
                  <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h3 className="font-bold text-emerald-900">Message Sent!</h3>
                  <p className="text-xs sm:text-sm text-emerald-700">
                    Thank you. Our passenger support team will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setPassengerSubmitted(false);
                      setPassengerForm({ name: '', email: '', message: '' });
                    }}
                    className="min-h-[44px] inline-flex items-center justify-center px-4 text-xs sm:text-sm font-bold text-emerald-800 underline py-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePassengerSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label htmlFor="passenger-enquiry-name" className="block text-xs font-bold uppercase tracking-wider text-[#14243A]">
                      Your Name
                    </label>
                    <input
                      id="passenger-enquiry-name"
                      type="text"
                      required
                      placeholder="e.g. Nimasha Silva"
                      value={passengerForm.name}
                      onChange={(e) => setPassengerForm({ ...passengerForm, name: e.target.value })}
                      className="w-full min-h-[46px] bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-base sm:text-sm text-[#14243A] focus:outline-none focus:ring-2 focus:ring-[#0759A6]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="passenger-enquiry-email" className="block text-xs font-bold uppercase tracking-wider text-[#14243A]">
                      Email Address
                    </label>
                    <input
                      id="passenger-enquiry-email"
                      type="email"
                      required
                      placeholder="e.g. nimasha@example.com"
                      value={passengerForm.email}
                      onChange={(e) => setPassengerForm({ ...passengerForm, email: e.target.value })}
                      className="w-full min-h-[46px] bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-base sm:text-sm text-[#14243A] focus:outline-none focus:ring-2 focus:ring-[#0759A6]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="passenger-enquiry-message" className="block text-xs font-bold uppercase tracking-wider text-[#14243A]">
                      Message
                    </label>
                    <textarea
                      id="passenger-enquiry-message"
                      rows={3}
                      required
                      placeholder="How can we help you?"
                      value={passengerForm.message}
                      onChange={(e) => setPassengerForm({ ...passengerForm, message: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-base sm:text-sm text-[#14243A] focus:outline-none focus:ring-2 focus:ring-[#0759A6]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full min-h-[44px] sm:min-h-[48px] flex items-center justify-center space-x-2 bg-[#FFD21F] hover:bg-[#f6c612] text-[#08264A] font-bold py-2.5 sm:py-3 px-4 rounded-xl shadow-md transition-all text-sm"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 shrink-0" />
                  </button>
                </form>
              )}
            </div>

            {/* Column 3: Partner Enquiry */}
            <div className="bg-slate-50 p-4 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-lg sm:shadow-xl space-y-4 sm:space-y-6">
              <div className="space-y-1.5 sm:space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0759A6]">For Drivers & Fleets</span>
                <h2 className="text-lg sm:text-2xl font-extrabold text-[#14243A]">Partner Enquiry</h2>
                <p className="text-[#667085] text-sm">Inquire about joining our driver-partner network.</p>
              </div>

              {partnerSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-3">
                  <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h3 className="font-bold text-emerald-900">Enquiry Received!</h3>
                  <p className="text-xs sm:text-sm text-emerald-700">
                    Thank you. Our partnership team will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setPartnerSubmitted(false);
                      setPartnerForm({ name: '', mobile: '', message: '' });
                    }}
                    className="min-h-[44px] inline-flex items-center justify-center px-4 text-xs sm:text-sm font-bold text-emerald-800 underline py-2"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePartnerSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label htmlFor="partner-enquiry-name" className="block text-xs font-bold uppercase tracking-wider text-[#14243A]">
                      Full Name
                    </label>
                    <input
                      id="partner-enquiry-name"
                      type="text"
                      required
                      placeholder="e.g. Dinesh Kumara"
                      value={partnerForm.name}
                      onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                      className="w-full min-h-[46px] bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-base sm:text-sm text-[#14243A] focus:outline-none focus:ring-2 focus:ring-[#0759A6]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="partner-enquiry-mobile" className="block text-xs font-bold uppercase tracking-wider text-[#14243A]">
                      Mobile Number
                    </label>
                    <input
                      id="partner-enquiry-mobile"
                      type="tel"
                      required
                      placeholder="e.g. +94 71 987 6543"
                      value={partnerForm.mobile}
                      onChange={(e) => setPartnerForm({ ...partnerForm, mobile: e.target.value })}
                      className="w-full min-h-[46px] bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-base sm:text-sm text-[#14243A] focus:outline-none focus:ring-2 focus:ring-[#0759A6]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="partner-enquiry-message" className="block text-xs font-bold uppercase tracking-wider text-[#14243A]">
                      Message
                    </label>
                    <textarea
                      id="partner-enquiry-message"
                      rows={3}
                      required
                      placeholder="Tell us about your vehicle..."
                      value={partnerForm.message}
                      onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-base sm:text-sm text-[#14243A] focus:outline-none focus:ring-2 focus:ring-[#0759A6]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full min-h-[44px] sm:min-h-[48px] flex items-center justify-center space-x-2 bg-[#FFD21F] hover:bg-[#f6c612] text-[#08264A] font-bold py-2.5 sm:py-3 px-4 rounded-xl shadow-md transition-all text-sm"
                  >
                    <span>Send Enquiry</span>
                    <Send className="w-4 h-4 shrink-0" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
