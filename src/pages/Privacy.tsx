export default function Privacy() {
  return (
    <div className="bg-white text-[#10243D] py-8 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto mobile-px sm:px-6 lg:px-8 space-y-5 sm:space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0759A6]">Legal</span>
          <h1 className="fluid-page-title font-extrabold text-[#10243D]">Privacy Policy</h1>
          <p className="text-slate-500 text-sm">WOLET Mobility Platform — Privacy Notice</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-sm text-slate-700 leading-relaxed">
          <p>
            At WOLET, we respect your privacy and are committed to protecting any personal information you share with us across Sri Lanka.
          </p>

          <h3 className="text-xl font-bold text-[#10243D] pt-4">1. Information We Collect</h3>
          <p>
            When you submit enquiry forms or use location search on our website, we process details such as your name, mobile number, email address, district, pickup/destination selection, and vehicle preferences to facilitate communication and driver-partner onboarding.
          </p>

          <h3 className="text-xl font-bold text-[#10243D] pt-4">2. Use of Information</h3>
          <p>
            Your information is used solely for communicating regarding WOLET services, reviewing driver-partner applications, and providing customer support. We do not sell or lease your personal information to third parties.
          </p>

          <h3 className="text-xl font-bold text-[#10243D] pt-4">3. Data Security</h3>
          <p>
            We implement appropriate administrative and technical safeguards to protect your personal data against unauthorized access or disclosure.
          </p>

          <h3 className="text-xl font-bold text-[#10243D] pt-4">4. Contact Us</h3>
          <p>
            If you have questions regarding our privacy practices, please contact us at info@wolet.lk.
          </p>
        </div>
      </div>
    </div>
  );
}
