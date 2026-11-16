import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowLeft } from 'lucide-react';

const whatsappUrl = 'https://wa.me/94776926922';

export default function DriverSubscriptionPolicy() {
  return (
    <div className="bg-white text-[#14243A]">
      <section className="bg-[#0143B0] text-white py-10 sm:py-14">
        <div className="max-w-5xl mx-auto mobile-px sm:px-6 lg:px-8 space-y-3">
          <span className="inline-block rounded-full bg-[#FFD21F] text-[#0143B0] px-3 py-1 text-xs font-bold uppercase tracking-wider">WOLET Driver Partners</span>
          <h1 className="fluid-page-title font-extrabold">Driver Subscription & Refund Policy</h1>
          <p className="text-white/90">රියදුරු දායකත්ව සහ මුදල් ආපසු ගෙවීමේ ප්‍රතිපත්තිය</p>
          <p className="text-sm text-white/80">English and Sinhala</p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto mobile-px sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
        <section className="space-y-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#0759A6]">English version</p>
            <h2 className="text-2xl font-extrabold text-[#0143B0] mt-1">Driver Subscription & Refund Policy</h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">This policy outlines the terms and conditions regarding driver subscription payments, cancellations, and refunds. By subscribing to the WOLET driver platform, you agree to the terms stated below.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            <article className="rounded-2xl border border-[#0143B0]/15 bg-[#0143B0]/5 p-5">
              <p className="text-sm font-semibold text-slate-600">Daily Plan</p><p className="text-3xl font-extrabold text-[#0143B0] mt-1">Rs. 99</p><p className="text-xs text-slate-500">Valid for 1 day / 24 hours</p>
            </article>
            <article className="rounded-2xl border border-[#0143B0]/15 bg-[#0143B0]/5 p-5">
              <p className="text-sm font-semibold text-slate-600">Weekly Plan</p><p className="text-3xl font-extrabold text-[#0143B0] mt-1">Rs. 675</p><p className="text-xs text-slate-500">Valid for 7 consecutive days</p>
            </article>
            <article className="rounded-2xl border border-[#0143B0]/15 bg-[#0143B0]/5 p-5">
              <p className="text-sm font-semibold text-slate-600">Monthly Plan</p><p className="text-3xl font-extrabold text-[#0143B0] mt-1">Rs. 2,820</p><p className="text-xs text-slate-500">Valid for 30 consecutive days</p>
            </article>
          </div>
          <p className="text-xs text-slate-500">All fees are inclusive of applicable taxes unless stated otherwise.</p>

          <div className="space-y-5 text-sm leading-7 text-slate-700">
            <section><h3 className="text-lg font-bold text-[#0143B0]">1. Subscription Plans and Fees</h3><p>To access the WOLET driver platform and accept ride requests, drivers must maintain an active subscription. The subscription tiers and validity periods are shown above.</p></section>
            <section><h3 className="text-lg font-bold text-[#0143B0]">2. Accepted Payment Methods</h3><p>Drivers must pay the required subscription fee in advance to activate their account.</p><ul className="list-disc pl-5"><li><b>Authorized Payment Gateways:</b> Credit/debit cards, bank apps, online money transfer apps or other digital payment options integrated within the app or website.</li><li><b>Direct Bank Deposit:</b> Direct transfer to the official WOLET bank account. Drivers using direct deposit must upload a valid payment receipt/slip for verification before the subscription is activated.</li></ul></section>
            <section><h3 className="text-lg font-bold text-[#0143B0]">3. General Refund Rules</h3><ul className="list-disc pl-5 space-y-2"><li><b>Used Days are Non-Refundable:</b> Once a subscription is paid and activated, fees for any days on which the app service has already been used are strictly non-refundable.</li><li><b>Unused Future Days:</b> Drivers may request a refund for unused future days remaining on an active weekly or monthly subscription.</li><li><b>Partial Refund Calculation:</b> If approved, the refund is calculated on a pro-rata basis, deducting the cost of days already used or elapsed at the standard daily rate, plus applicable payment gateway processing fees and government-imposed taxes.</li></ul></section>
            <section><h3 className="text-lg font-bold text-[#0143B0]">4. Disputes and Service Complaints</h3><p>If you experience technical issues, unsatisfactory service, or billing discrepancies:</p><ol className="list-decimal pl-5 space-y-2"><li><b>Submit a Complaint:</b> Submit a formal dispute or refund request through the WOLET <Link className="text-[#0759A6] underline font-semibold" to="/contact">Contact Us page</Link> or contact Driver Support using the details below.</li><li><b>Provide Details:</b> Include your registered driver ID, payment receipt/transaction reference, and a clear description of the issue.</li><li><b>Review and Investigation:</b> WOLET will review app usage logs and the number of completed hires (rides) during the disputed period to assess the claim.</li><li><b>Resolution:</b> Depending on the investigation, suitable action may include a full refund, partial refund, or subscription credit extension.</li></ol></section>
            <section><h3 className="text-lg font-bold text-[#0143B0]">5. Refund Processing Timeline</h3><p>Once a refund request or dispute is reviewed and approved, WOLET will notify you via SMS or email. Approved refunds will be processed to the original payment method or designated bank account within <b>7 to 14 business days</b>.</p></section>
            <section><h3 className="text-lg font-bold text-[#0143B0]">6. Contact Us</h3><p>For questions regarding your subscription or assistance submitting a refund request, contact the WOLET Driver Support Team:</p><p><b>Phone / WhatsApp:</b> 077 692 6922<br/><b>Email:</b> info@wolet.lk<br/><b>Website:</b> wolet-tau.vercel.app</p></section>
          </div>
        </section>

        <div className="border-t border-slate-200" />

        <section className="space-y-5" lang="si">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#0759A6]">සිංහල අනුවාදය</p>
            <h2 className="text-2xl font-extrabold text-[#0143B0] mt-1">රියදුරු දායකත්ව සහ මුදල් ආපසු ගෙවීමේ ප්‍රතිපත්තිය</h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">රියදුරු දායකත්ව (Subscription) ගෙවීම්, අවලංගු කිරීම් සහ මුදල් ආපසු ගෙවීම් (Refunds) පිළිබඳ නියමයන් සහ කොන්දේසි මෙම ප්‍රතිපත්තිය මගින් විස්තර කෙරේ. WOLET යෙදුම සඳහා දායක වීමෙන්, ඔබ පහත සඳහන් කොන්දේසිවලට එකඟ වේ.</p>
          </div>
          <div className="rounded-2xl bg-[#0143B0]/5 border border-[#0143B0]/15 p-4 sm:p-5 text-sm leading-7">
            <p><b>දෛනික සැලසුම:</b> රු. 99.00 (දින 1ක් / පැය 24ක්)</p>
            <p><b>සතිපතා සැලසුම:</b> රු. 675.00 (අඛණ්ඩව දින 7ක්)</p>
            <p><b>මාසික සැලසුම:</b> රු. 2,820.00 (අඛණ්ඩව දින 30ක්)</p>
            <p className="text-xs text-slate-500 mt-2">වෙනත් ආකාරයකින් සඳහන් කර නොමැති නම්, සියලුම ගාස්තු සඳහා අදාළ බදු ඇතුළත් වේ.</p>
          </div>
          <div className="space-y-5 text-sm leading-7 text-slate-700">
            <section><h3 className="text-lg font-bold text-[#0143B0]">1. දායකත්ව සැලසුම් සහ ගාස්තු</h3><p>WOLET රියදුරු යෙදුමට පිවිසීමට සහ ගමන් ඇණවුම් (Ride requests) භාර ගැනීමට, රියදුරන් සක්‍රීය දායකත්වයක් පවත්වා ගත යුතුය. දායකත්ව සැලසුම්වල මිල ගණන් සහ වලංගු කාලසීමාව ඉහත දක්වා ඇත.</p></section>
            <section><h3 className="text-lg font-bold text-[#0143B0]">2. පිළිගත් ගෙවීම් ක්‍රම</h3><p>ගිණුම සක්‍රීය කර ගැනීම සඳහා රියදුරන් අදාළ දායකත්ව ගාස්තුව කල්තියා ගෙවිය යුතුය.</p><ul className="list-disc pl-5"><li><b>බලයලත් ගෙවීම් ද්වාර:</b> යෙදුම හෝ වෙබ් අඩවිය තුළ ඇති ක්‍රෙඩිට්/ඩෙබිට් කාඩ්පත්, බැංකු යෙදුම්, මාර්ගගත මුදල් හුවමාරු යෙදුම් හෝ වෙනත් ඩිජිටල් ගෙවීම් විකල්ප.</li><li><b>සෘජු බැංකු තැන්පතු:</b> WOLET නිල බැංකු ගිණුමට සෘජුවම මුදල් බැර කිරීම. මෙය භාවිතා කරන රියදුරන්, දායකත්වය සක්‍රීය කිරීමට පෙර සත්‍යාපනය සඳහා වලංගු ගෙවීම් රිසිට්පතක්/ස්ලිප් පතක් උඩුගත කළ යුතුය.</li></ul></section>
            <section><h3 className="text-lg font-bold text-[#0143B0]">3. මුදල් ආපසු ගෙවීමේ සාමාන්‍ය නීති</h3><ul className="list-disc pl-5 space-y-2"><li><b>භාවිතා කළ දින සඳහා මුදල් ආපසු ගෙවනු නොලැබේ:</b> දායකත්වයක් ගෙවා සක්‍රීය කළ පසු, යෙදුම් සේවාව භාවිතා කර ඇති දින සඳහා ගෙවූ ගාස්තු ආපසු ගෙවනු නොලැබේ.</li><li><b>භාවිතා නොකළ ඉදිරි දින:</b> සක්‍රීය සතිපතා හෝ මාසික දායකත්වයක ඉතිරිව ඇති, තවමත් භාවිතා නොකළ ඉදිරි දින සඳහා රියදුරන්ට මුදල් ආපසු ඉල්ලා සිටිය හැක.</li><li><b>අර්ධ මුදල් ආපසු ගෙවීම් ගණනය කිරීම:</b> අනුමත වුවහොත්, සම්මත දෛනික ගාස්තුවට අනුව භාවිතා කළ හෝ ගතවූ දිනවල පිරිවැය, අදාළ ගෙවීම් ද්වාර සැකසුම් ගාස්තු සහ රජය විසින් පනවන ලද බදු අඩු කිරීමෙන් පසු ඉතිරි මුදල සමානුපාතික පදනමක් මත ගණනය කෙරේ.</li></ul></section>
            <section><h3 className="text-lg font-bold text-[#0143B0]">4. ආරවුල් සහ සේවා පැමිණිලි</h3><p>තාක්ෂණික ගැටලු, අසතුටුදායක සේවාවක් හෝ බිල්පත් ගෙවීම් සම්බන්ධ දෝෂයක් ඇති වුවහොත්:</p><ol className="list-decimal pl-5 space-y-2"><li><b>පැමිණිල්ලක් ඉදිරිපත් කරන්න:</b> WOLET <Link className="text-[#0759A6] underline font-semibold" to="/contact">අප අමතන්න පිටුව</Link> හරහා හෝ පහත Driver Support සම්බන්ධතා මගින් පැමිණිල්ලක් හෝ මුදල් ආපසු ගෙවීමේ ඉල්ලීමක් ඉදිරිපත් කරන්න.</li><li><b>විස්තර ලබා දෙන්න:</b> ඔබගේ ලියාපදිංචි රියදුරු හැඳුනුම්පත් අංකය (Driver ID), ගෙවීම් රිසිට්පත/ගනුදෙනු යොමු අංකය සහ ගැටලුව පිළිබඳ පැහැදිලි විස්තරයක් ඇතුළත් කරන්න.</li><li><b>සමාලෝචනය සහ විමර්ශනය:</b> ඉල්ලීමේ වලංගුභාවය තීරණය කිරීම සඳහා WOLET කණ්ඩායම අදාළ කාලසීමාවේ යෙදුම් භාවිත දත්ත සහ සම්පූර්ණ කළ ගමන් වාර ගණන ඇගයීමට ලක් කරනු ඇත.</li><li><b>විසඳුම:</b> විමර්ශනය මත පදනම්ව සම්පූර්ණ මුදල් ආපසු ගෙවීමක්, අර්ධ මුදල් ආපසු ගෙවීමක් හෝ දායකත්ව කාලය දීර්ඝ කිරීමක් සිදු විය හැකිය.</li></ol></section>
            <section><h3 className="text-lg font-bold text-[#0143B0]">5. මුදල් ආපසු ගෙවීමේ ක්‍රියාවලි කාලසීමාව</h3><p>ඉල්ලීමක් හෝ පැමිණිල්ලක් සමාලෝචනය කර අනුමත කළ පසු, WOLET විසින් SMS/WhatsApp පණිවිඩයක් හෝ විද්‍යුත් තැපෑලක් මගින් දැනුම් දෙනු ඇත. අනුමත මුදල් ආපසු ගෙවීම් ව්‍යාපාරික දින <b>7 සිට 14</b> දක්වා කාලයක් ඇතුළත මුල් ගෙවීම් ක්‍රමයට හෝ නම් කරන ලද බැංකු ගිණුමට බැර කරනු ලැබේ.</p></section>
            <section><h3 className="text-lg font-bold text-[#0143B0]">6. අප අමතන්න</h3><p>දායකත්වය හෝ මුදල් ආපසු ගෙවීමේ ඉල්ලීමක් සම්බන්ධයෙන් සහාය අවශ්‍ය නම් අපගේ රියදුරු සහාය කණ්ඩායම අමතන්න:</p><p><b>දුරකථන / WhatsApp:</b> 077 692 6922<br/><b>විද්‍යුත් තැපෑල:</b> info@wolet.lk<br/><b>වෙබ් අඩවිය:</b> wolet-tau.vercel.app</p></section>
          </div>
        </section>

        <div className="rounded-2xl bg-[#0143B0] text-white p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div><h2 className="font-bold text-lg">Need help with your subscription?</h2><p className="text-sm text-white/85">Our Driver Support Team is ready to assist.</p></div>
          <div className="flex flex-col sm:flex-row gap-2">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white px-4 py-3 min-h-[44px] font-bold text-sm"><MessageCircle className="w-4 h-4"/> WhatsApp</a>
            <a href="tel:+94776926922" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFD21F] text-[#0143B0] px-4 py-3 min-h-[44px] font-bold text-sm"><Phone className="w-4 h-4"/> Call 077 692 6922</a>
          </div>
        </div>
        <Link to="/drive" className="inline-flex items-center gap-2 text-[#0759A6] font-semibold text-sm"><ArrowLeft className="w-4 h-4"/> Back to Drive with WOLET</Link>
      </main>
    </div>
  );
}
