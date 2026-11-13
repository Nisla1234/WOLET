import { useState } from 'react';
import { CheckCircle, ShieldCheck, Send, Clock } from 'lucide-react';
import driverPartnerImg from '../assets/images/driver-partner.png';

export default function Drive() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    district: 'Colombo',
    vehicleCategory: 'Car / Sedan',
    vehicleMake: '',
    vehicleModel: '',
    preference: 'Full-Time',
    message: '',
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.mobileNumber.trim() || !formData.emailAddress.trim()) {
      setError('Please fill in all required contact fields.');
      return;
    }
    if (!formData.consent) {
      setError('Please agree to the privacy consent to proceed.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-[#14243A]">
      {/* Hero Section */}
      <section className="bg-[#08264A] text-white py-7 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src={driverPartnerImg}
            alt="Driver partner with tuk-tuk and Lotus Tower"
            decoding="async"
            className="w-full h-full object-cover object-[50%_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08264A] via-[#08264A]/90 to-[#08264A]/55" />
        </div>

        <div className="max-w-7xl mx-auto mobile-px sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-2.5 sm:space-y-4">
            <h1 className="fluid-page-title font-extrabold tracking-tight">
              Join Our <span className="text-[#FFD21F]">Partner Network</span>
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed">
              Interested in becoming part of the WOLET driver-partner network? Get in touch to learn more about opportunities across Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* Why Drive & Form Section */}
      <section className="py-8 sm:py-14 lg:py-20 max-w-7xl mx-auto mobile-px sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Column: Partner Benefits & Image */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-8">
            <div className="space-y-2 sm:space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0759A6]">Partner Advantages</span>
              <h2 className="fluid-section-title font-extrabold text-[#14243A]">Why Drive with WOLET?</h2>
              <p className="text-[#667085] text-sm sm:text-base leading-relaxed">
                We are building a collaborative mobility community that values independent driver-partners with transparent terms, flexible hours, and dedicated support.
              </p>
            </div>

            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl border-2 sm:border-4 border-slate-100 aspect-[16/9] sm:aspect-[16/10] max-h-[200px] sm:max-h-none">
              <img
                src={driverPartnerImg}
                alt="Sri Lankan Driver Partner"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-[50%_20%]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
              <div className="flex items-start space-x-3 p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFD21F]/20 flex items-center justify-center text-[#0759A6] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#14243A] text-sm">Flexible Schedule</h3>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    Drive on your own terms—full-time or part-time, whenever it suits you.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFD21F]/20 flex items-center justify-center text-[#0759A6] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#14243A] text-sm">Trusted Community</h3>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    Be part of a professional Sri Lankan platform with dedicated partner support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Driver Enquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-lg sm:shadow-xl">
            <div className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0759A6]">Driver Onboarding</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#14243A]">Driver-Partner Application</h2>
              <p className="text-xs sm:text-sm text-[#667085]">Register your details to join the WOLET driver network.</p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-6 sm:p-8 rounded-2xl text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-emerald-900">Application Received!</h3>
                <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.fullName}. Our driver-partner onboarding team has received your submission and will reach out to {formData.mobileNumber} with next steps.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      mobileNumber: '',
                      emailAddress: '',
                      district: 'Colombo',
                      vehicleCategory: 'Car / Sedan',
                      vehicleMake: '',
                      vehicleModel: '',
                      preference: 'Full-Time',
                      message: '',
                      consent: false,
                    });
                  }}
                  className="bg-[#08264A] hover:bg-[#061c38] text-white font-bold px-6 min-h-[46px] rounded-xl text-sm transition-colors"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-rose-50 border border-rose-200 text-rose-700 p-3 rounded-xl text-xs sm:text-sm" role="alert">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="driver-full-name" className="block text-xs font-bold uppercase tracking-wider text-[#14243A]">
                      Full Name *
                    </label>
                    <input
                      id="driver-full-name"
                      type="text"
                      required
                      placeholder="e.g. Nuwan Perera"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full min-h-[46px] bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-base sm:text-sm text-[#14243A] focus:outline-none focus:ring-2 focus:ring-[#0759A6]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="driver-mobile" className="block text-xs font-bold uppercase tracking-wider text-[#14243A]">
                      Mobile Number *
                    </label>
                    <input
                      id="driver-mobile"
                      type="tel"
                      required
                      placeholder="+94 77 123 4567"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      className="w-full min-h-[46px] bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-base sm:text-sm text-[#14243A] focus:outline-none focus:ring-2 focus:ring-[#0759A6]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="driver-email" className="block text-xs font-bold uppercase tracking-wider text-[#14243A]">
                      Email Address *
                    </label>
                    <input
                      id="driver-email"
                      type="email"
                      required
                      placeholder="e.g. nuwan@example.com"
                      value={formData.emailAddress}
                      onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                      className="w-full min-h-[46px] bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-base sm:text-sm text-[#14243A] focus:outline-none focus:ring-2 focus:ring-[#0759A6]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="driver-district" className="block text-xs font-bold uppercase tracking-wider text-[#14243A]">
                      District *
                    </label>
                    <select
                      id="driver-district"
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full min-h-[46px] bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-base sm:text-sm text-[#14243A] focus:outline-none focus:ring-2 focus:ring-[#0759A6]"
                    >
                      <option value="Colombo">Colombo</option>
                      <option value="Gampaha">Gampaha</option>
                      <option value="Kalutara">Kalutara</option>
                      <option value="Other">Other District</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="driver-vehicle-category" className="block text-xs font-bold uppercase tracking-wider text-[#14243A]">
                      Vehicle Category
                    </label>
                    <select
                      id="driver-vehicle-category"
                      value={formData.vehicleCategory}
                      onChange={(e) => setFormData({ ...formData, vehicleCategory: e.target.value })}
                      className="w-full min-h-[46px] bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-base sm:text-sm text-[#14243A] focus:outline-none focus:ring-2 focus:ring-[#0759A6]"
                    >
                      <option value="Car / Sedan">Car / Sedan</option>
                      <option value="Tuk Tuk">Tuk Tuk</option>
                      <option value="Motorbike">Motorbike</option>
                      <option value="Van / SUV">Van / SUV</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="driver-vehicle-make" className="block text-xs font-bold uppercase tracking-wider text-[#14243A]">
                      Vehicle Make
                    </label>
                    <input
                      id="driver-vehicle-make"
                      type="text"
                      placeholder="e.g. Toyota"
                      value={formData.vehicleMake}
                      onChange={(e) => setFormData({ ...formData, vehicleMake: e.target.value })}
                      className="w-full min-h-[46px] bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-base sm:text-sm text-[#14243A] focus:outline-none focus:ring-2 focus:ring-[#0759A6]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="driver-vehicle-model" className="block text-xs font-bold uppercase tracking-wider text-[#14243A]">
                      Vehicle Model
                    </label>
                    <input
                      id="driver-vehicle-model"
                      type="text"
                      placeholder="e.g. Prius / Aqua"
                      value={formData.vehicleModel}
                      onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                      className="w-full min-h-[46px] bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-base sm:text-sm text-[#14243A] focus:outline-none focus:ring-2 focus:ring-[#0759A6]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="driver-preference" className="block text-xs font-bold uppercase tracking-wider text-[#14243A]">
                    Driving Preference
                  </label>
                  <select
                    id="driver-preference"
                    value={formData.preference}
                    onChange={(e) => setFormData({ ...formData, preference: e.target.value })}
                    className="w-full min-h-[46px] bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-base sm:text-sm text-[#14243A] focus:outline-none focus:ring-2 focus:ring-[#0759A6]"
                  >
                    <option value="Full-Time">Full-Time Driver</option>
                    <option value="Part-Time">Part-Time Driver</option>
                    <option value="Fleet Owner">Fleet Owner</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="driver-message" className="block text-xs font-bold uppercase tracking-wider text-[#14243A]">
                    Additional Message
                  </label>
                  <textarea
                    id="driver-message"
                    rows={2}
                    placeholder="Tell us about your driving experience or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-base sm:text-sm text-[#14243A] focus:outline-none focus:ring-2 focus:ring-[#0759A6]"
                  />
                </div>

                <label htmlFor="consent" className="flex items-start space-x-3 pt-2 min-h-[44px] cursor-pointer">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 w-5 h-5 text-[#0759A6] border-slate-300 rounded shrink-0"
                  />
                  <span className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    I consent to being contacted regarding WOLET driver-partner onboarding and updates. *
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full min-h-[44px] sm:min-h-[48px] flex items-center justify-center space-x-2 bg-[#FFD21F] hover:bg-[#f6c612] text-[#08264A] font-bold py-2.5 sm:py-3.5 px-6 rounded-xl shadow-lg transition-all text-sm"
                >
                  <span>Submit Application</span>
                  <Send className="w-4 h-4 shrink-0" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
