export default function Refund() {
  return (
    <div className="bg-white text-[#10243D] py-8 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto mobile-px sm:px-6 lg:px-8 space-y-5 sm:space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0759A6]">Legal</span>
          <h1 className="fluid-page-title font-extrabold text-[#10243D]">Refund Policy</h1>
          <p className="text-slate-500 text-sm">WOLET Mobility Platform — Payment & Refund Guidelines</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-sm text-slate-700 leading-relaxed">
          <p>
            This website serves as WOLET's informational and enquiry portal; no online financial transactions or card payments are processed directly through these web enquiry forms.
          </p>

          <h3 className="text-xl font-bold text-[#10243D] pt-4">1. Ride Payment & Refund Guidelines</h3>
          <p>
            Applicable fare adjustments, digital payment reversals, and refund eligibility for trips arranged through the WOLET mobile application follow Sri Lankan consumer protection standards and applicable payment partner policies.
          </p>

          <h3 className="text-xl font-bold text-[#10243D] pt-4">2. Contact</h3>
          <p>
            For questions regarding payments or refund policies, please reach out to info@wolet.lk.
          </p>
        </div>
      </div>
    </div>
  );
}
