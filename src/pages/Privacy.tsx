const sectionClass = "space-y-3";
const headingClass = "text-xl sm:text-2xl font-bold text-[#10243D] pt-5";
const subheadingClass = "text-base font-bold text-[#10243D] pt-2";
const paragraphClass = "text-slate-700 leading-relaxed";
const listClass = "list-disc pl-6 space-y-2 text-slate-700 leading-relaxed";

export default function Privacy() {
  return (
    <div className="bg-white text-[#10243D] py-8 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto mobile-px sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        <header className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0759A6]">Legal</span>
          <h1 className="fluid-page-title font-extrabold text-[#10243D]">Privacy Policy</h1>
          <p className="text-slate-500 text-sm">WOLET App Service</p>
          <p className="text-slate-500 text-sm">Last Updated: November 16, 2026</p>
        </header>

        <section className={sectionClass}>
          <p className={paragraphClass}>
            Operated by Ryzite (Pvt) Ltd under the WOLET brand in Sri Lanka. We respect your privacy and are committed to protecting the personal data of our riders and driver-partners ("Users," "you") across Sri Lanka. This Privacy Policy explains how we collect, use, store, disclose, and safeguard your information when you use our mobile application (the "App") and website.
          </p>
          <p className={paragraphClass}>
            By downloading, registering, or using WOLET, you acknowledge this Privacy Policy and the practices described in it.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>1. Information We Collect</h2>
          <p className={paragraphClass}>We collect personal and technical information to connect passengers and drivers, process rides, and support safety and service operations.</p>
          <h3 className={subheadingClass}>Information You Provide Directly</h3>
          <ul className={listClass}>
            <li><strong>Account Details:</strong> Full name, mobile phone number (including Sri Lankan +94 format), email address, and preferred name or title.</li>
            <li><strong>Profile and Identity Data (Drivers):</strong> National Identity Card (NIC) number, driving licence number, vehicle registration details, insurance policy information, profile photo, and bank account details for earnings settlements.</li>
            <li><strong>Payment Information:</strong> Credit/debit card details, mobile wallet information, or cash transaction preferences, as applicable to the payment methods offered.</li>
            <li><strong>Customer Support:</strong> Messages, feedback, call records or logs, and complaints that you provide or generate when contacting our support team.</li>
          </ul>
          <h3 className={subheadingClass}>Information Collected Automatically</h3>
          <ul className={listClass}>
            <li><strong>Precise Location Data:</strong> Real-time GPS location of passengers and drivers, when location permission is enabled, to calculate routes, match rides, provide estimated arrival times (ETA), and support trip safety. Background location is used only where the App requests and the device permits that access.</li>
            <li><strong>Usage and Device Data:</strong> App logs, device hardware and network information, operating system, crash reports, and app interaction history.</li>
            <li><strong>Communication Data:</strong> Call and SMS metadata, where applicable to an in-app or number-masking communication feature. This may include details such as time and duration, but not message content unless you provide it to us.</li>
          </ul>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>2. How We Use Your Information</h2>
          <ul className={listClass}>
            <li><strong>Ride-Hailing and Matching:</strong> Pair passengers with nearby drivers, calculate fares, and show estimated arrival times.</li>
            <li><strong>Payments and Settlements:</strong> Process cashless payments where supported, and calculate cash-trip commissions and driver earnings or payouts.</li>
            <li><strong>Safety and Security:</strong> Support live trips, investigate disputes, prevent fraud, and verify driver credentials in line with applicable Sri Lankan requirements.</li>
            <li><strong>Customer Support:</strong> Resolve ride issues, lost-and-found queries, complaints, and account update requests.</li>
            <li><strong>Service Improvements and Communications:</strong> Provide transaction receipts, service announcements, and promotional offers by SMS, email, or push notification. You may opt out of promotional communications where an opt-out option is provided.</li>
          </ul>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>3. How We Share Your Information</h2>
          <p className={paragraphClass}>We share personal information when reasonably necessary to operate WOLET, provide a requested ride, protect users, or comply with applicable law.</p>
          <h3 className={subheadingClass}>Between Matched Users</h3>
          <ul className={listClass}>
            <li><strong>Passengers may see:</strong> The matched driver's name, profile photo, contact details made available for the trip, vehicle type, registration number, and trip-related live location.</li>
            <li><strong>Drivers may see:</strong> The passenger's name, pickup and drop-off points, and contact details made available for the trip.</li>
          </ul>
          <h3 className={subheadingClass}>Service Partners and Processors</h3>
          <p className={paragraphClass}>We may share relevant information with payment gateways, cloud hosting providers, communications providers, and insurance partners where needed to deliver the service, process payments, or support ride and driver safety.</p>
          <h3 className={subheadingClass}>Legal and Law Enforcement Authorities</h3>
          <p className={paragraphClass}>We may disclose information when required by applicable Sri Lankan law, a valid court order, or a lawful government request, including in connection with safety incidents, accidents, or criminal investigations.</p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>4. Data Security</h2>
          <p className={paragraphClass}>We use reasonable technical and organizational measures designed to protect personal information, which may include:</p>
          <ul className={listClass}>
            <li>Encryption of data in transit using HTTPS/TLS where supported.</li>
            <li>Access restrictions intended to limit employee and service-provider access to personal data to those who need it for their work.</li>
            <li>Payment security measures provided by our payment processors. Where tokenization is supported, payment tokens are used instead of storing full card details on WOLET systems.</li>
          </ul>
          <p className={paragraphClass}>No method of electronic storage or transmission is completely secure, and we cannot guarantee absolute security.</p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>5. Data Retention</h2>
          <p className={paragraphClass}>We retain personal data for as long as your account is active or as reasonably necessary to provide the service, resolve disputes, maintain security, and meet applicable Sri Lankan legal, tax, or regulatory obligations. If you request account deletion, we will take appropriate steps to delete or anonymize information that we no longer need, while retaining or archiving records where legally required.</p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>6. Your Rights and Choices</h2>
          <ul className={listClass}>
            <li><strong>Access and Update:</strong> You can view and edit available profile details through the App settings or contact our support team for assistance.</li>
            <li><strong>Location Permissions:</strong> You can manage GPS permissions through your phone's operating system settings. Disabling location access may prevent some ride-hailing features from working.</li>
            <li><strong>Account Deletion:</strong> You can request account closure and deletion of eligible personal data by contacting our support team. Some records may need to be retained where required by law or for legitimate service and safety purposes.</li>
            <li><strong>Promotional Messages:</strong> You can opt out of promotional communications using the opt-out method provided in the message, where available. Essential service and transaction messages may still be sent.</li>
          </ul>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>7. Children's Privacy</h2>
          <p className={paragraphClass}>The WOLET App is not intended for anyone under 18 years of age, and we do not knowingly collect personal data from children.</p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>8. Changes to This Privacy Policy</h2>
          <p className={paragraphClass}>We may revise this Privacy Policy periodically. If we make significant changes, we will take reasonable steps to notify users through in-app alerts, push notifications, SMS, or another appropriate channel before the changes take effect, where practicable.</p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>9. Contact Us</h2>
          <p className={paragraphClass}>If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact WOLET:</p>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3 text-sm text-slate-700">
            <p><strong className="text-[#10243D]">Company:</strong> Ryzite (Pvt) Ltd (WOLET)</p>
            <p><strong className="text-[#10243D]">Address:</strong> No. 123, Galle Road, Colombo 03, Sri Lanka</p>
            <p><strong className="text-[#10243D]">Email:</strong> <a className="text-[#0759A6] underline" href="mailto:info@wolet.lk">info@wolet.lk</a></p>
            <p><strong className="text-[#10243D]">Phone / WhatsApp:</strong> <a className="text-[#0759A6] underline" href="https://wa.me/94776926922" target="_blank" rel="noreferrer">077 692 6922</a></p>
          </div>
        </section>

        <div className="border-t border-slate-200 pt-8 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10243D]">WOLET යෙදුම් සේවාව සඳහා පෞද්ගලිකත්ව ප්‍රතිපත්තිය</h2>
          <p className="text-slate-500 text-sm">අවසන් වරට යාවත්කාලීන කළේ: 2026 නොවැම්බර් 16</p>
          <p className={paragraphClass}>මෙහෙයවනු ලබන්නේ: ශ්‍රී ලංකාවේ WOLET සන්නාමය යටතේ ක්‍රියාත්මක වන Ryzite (Pvt) Ltd විසිනි.</p>
          <p className={paragraphClass}>අපි ඔබගේ පෞද්ගලිකත්වයට ගරු කරන අතර, ශ්‍රී ලංකාව පුරා සිටින අපගේ මගීන්ගේ සහ රියදුරු-හවුල්කරුවන්ගේ ("පරිශීලකයින්", "ඔබ") පුද්ගලික දත්ත ආරක්ෂා කිරීමට කැපවී සිටිමු. ඔබ අපගේ ජංගම දුරකථන යෙදුම ("යෙදුම") සහ වෙබ් අඩවිය භාවිතා කරන විට ඔබගේ තොරතුරු රැස් කරන, භාවිතා කරන, ගබඩා කරන, හෙළිදරව් කරන සහ ආරක්ෂා කරන ආකාරය මෙම ප්‍රතිපත්තියෙන් පැහැදිලි කෙරේ.</p>
          <p className={paragraphClass}>WOLET බාගත කිරීමෙන්, ලියාපදිංචි වීමෙන් හෝ භාවිතා කිරීමෙන්, මෙම ප්‍රතිපත්තියේ විස්තර කර ඇති ක්‍රියාපටිපාටි පිළිබඳව ඔබ දැනුවත් වන අතර ඒවාට අදාළ වන නීති සහ යෙදුම් කොන්දේසි අනුව එකඟ වේ.</p>

          <h3 className={headingClass}>1. අප රැස් කරන තොරතුරු</h3>
          <p className={paragraphClass}>මගීන් සහ රියදුරන් සම්බන්ධ කිරීමට, ගමන් වාර සැකසීමට සහ සේවා ආරක්ෂාවට සහාය වීමට අපි පුද්ගලික සහ තාක්ෂණික තොරතුරු රැස් කරන්නෙමු.</p>
          <h4 className={subheadingClass}>ඔබ සෘජුවම ලබා දෙන තොරතුරු</h4>
          <ul className={listClass}>
            <li><strong>ගිණුම් විස්තර:</strong> සම්පූර්ණ නම, ශ්‍රී ලංකාවේ +94 ආකෘතිය ඇතුළත් ජංගම දුරකථන අංකය, විද්‍යුත් තැපැල් ලිපිනය සහ කැමති නම හෝ පදවි නාමය.</li>
            <li><strong>පැතිකඩ සහ අනන්‍යතා දත්ත (රියදුරන් සඳහා):</strong> ජාතික හැඳුනුම්පත් (NIC) අංකය, රියදුරු බලපත්‍ර අංකය, වාහන ලියාපදිංචි විස්තර, රක්ෂණ ඔප්පු පිළිබඳ තොරතුරු, පැතිකඩ ඡායාරූපය සහ ඉපැයීම් පියවීම් සඳහා බැංකු ගිණුම් විස්තර.</li>
            <li><strong>ගෙවීම් තොරතුරු:</strong> අදාළ ගෙවීම් ක්‍රම අනුව ක්‍රෙඩිට්/ඩෙබිට් කාඩ්පත් විස්තර, ජංගම පසුම්බි තොරතුරු හෝ මුදල් ගනුදෙනු ප්‍රමුඛතා.</li>
            <li><strong>පාරිභෝගික සහාය:</strong> ඔබ අපගේ සහාය කණ්ඩායම අමතන විට ලබා දෙන පණිවිඩ, ප්‍රතිචාර, ඇමතුම් වාර්තා හෝ ලොග් සහ පැමිණිලි.</li>
          </ul>
          <h4 className={subheadingClass}>ස්වයංක්‍රීයව රැස් කරන තොරතුරු</h4>
          <ul className={listClass}>
            <li><strong>නිශ්චිත ස්ථාන දත්ත:</strong> ස්ථාන අවසර සක්‍රීය කර ඇති විට, මාර්ග ගණනය කිරීමට, ගමන් වාර ගැලපීමට, ළඟා වීමට ගතවන ඇස්තමේන්තුගත කාලය (ETA) පෙන්වීමට සහ ගමන් ආරක්ෂාවට සහාය වීමට මගීන්ගේ සහ රියදුරන්ගේ තත්‍ය කාලීන GPS ස්ථානය. යෙදුම ඉල්ලා සිටින සහ දුරකථනය අවසර දෙන අවස්ථාවලදී පමණක් පසුබිම් ස්ථාන දත්ත භාවිතා කෙරේ.</li>
            <li><strong>භාවිතය සහ උපාංග දත්ත:</strong> යෙදුම් ලොග්, උපාංගයේ දෘඪාංග/ජාල තොරතුරු, මෙහෙයුම් පද්ධතිය, බිඳවැටීම් වාර්තා සහ යෙදුම සමඟ අන්තර්ක්‍රියා කළ ඉතිහාසය.</li>
            <li><strong>සන්නිවේදන දත්ත:</strong> යෙදුම තුළ හෝ අංක ආවරණය කරන සන්නිවේදන විශේෂාංගයක් භාවිතා කරන විට අදාළ වන ඇමතුම් සහ SMS පාර-දත්ත. මෙයට වේලාව සහ කාලසීමාව වැනි තොරතුරු ඇතුළත් විය හැකි නමුත්, ඔබ අපට ලබා නොදෙන්නේ නම් පණිවිඩ අන්තර්ගතය ඇතුළත් නොවේ.</li>
          </ul>

          <h3 className={headingClass}>2. අප ඔබගේ තොරතුරු භාවිතා කරන ආකාරය</h3>
          <ul className={listClass}>
            <li><strong>කුලී රථ සේවා සහ ගැලපීම:</strong> අසල සිටින රියදුරන් සමඟ මගීන් සම්බන්ධ කිරීමට, ගාස්තු ගණනය කිරීමට සහ ළඟා වීමට අපේක්ෂිත කාලය (ETA) පෙන්වීමට.</li>
            <li><strong>ගෙවීම් සහ පියවීම්:</strong> සහාය දක්වන අවස්ථාවල මුදල් රහිත ගෙවීම් සැකසීමට හෝ මුදල් ගමන් සඳහා කොමිස් මුදල් සහ රියදුරු ඉපැයීම්/ගෙවීම් ගණනය කිරීමට.</li>
            <li><strong>ආරක්ෂාව සහ රැකවරණය:</strong> සජීවී ගමන් වාර සඳහා සහාය වීමට, ආරවුල් විමර්ශනය කිරීමට, වංචා වැළැක්වීමට සහ අදාළ ශ්‍රී ලාංකික අවශ්‍යතාවලට අනුකූලව රියදුරු සුදුසුකම් තහවුරු කිරීමට.</li>
            <li><strong>පාරිභෝගික සහාය:</strong> ගමන් වාර ගැටළු, නැතිවූ සහ හමුවූ භාණ්ඩ පිළිබඳ විමසීම්, පැමිණිලි සහ ගිණුම් යාවත්කාලීන කිරීම් විසඳීමට.</li>
            <li><strong>සේවා වැඩිදියුණු කිරීම් සහ සන්නිවේදනය:</strong> ගනුදෙනු රිසිට්පත්, සේවා නිවේදන සහ ප්‍රවර්ධන දීමනා SMS, විද්‍යුත් තැපෑල හෝ push notification මගින් ලබා දීමට. ලබා දී ඇති අවස්ථාවලදී ප්‍රවර්ධන පණිවිඩවලින් ඉවත් විය හැක.</li>
          </ul>

          <h3 className={headingClass}>3. අප ඔබගේ තොරතුරු බෙදා ගන්නා ආකාරය</h3>
          <p className={paragraphClass}>WOLET සේවාව පවත්වාගෙන යාමට, ඉල්ලා ඇති ගමන සැපයීමට, පරිශීලකයින් ආරක්ෂා කිරීමට හෝ අදාළ නීතිවලට අනුකූල වීමට සාධාරණව අවශ්‍ය වූ විට අපි පුද්ගලික තොරතුරු බෙදා ගනිමු.</p>
          <h4 className={subheadingClass}>ගැලපෙන පරිශීලකයින් අතර</h4>
          <ul className={listClass}>
            <li><strong>මගීන්ට පෙනිය හැකි දේ:</strong> ගැලපූ රියදුරුගේ නම, පැතිකඩ ඡායාරූපය, ගමන සඳහා ලබා දෙන සම්බන්ධතා විස්තර, වාහන වර්ගය, ලියාපදිංචි අංකය සහ ගමනට අදාළ සජීවී ස්ථානය.</li>
            <li><strong>රියදුරන්ට පෙනිය හැකි දේ:</strong> මගියාගේ නම, මගියා නංවා ගන්නා සහ බස්සවන ස්ථාන සහ ගමන සඳහා ලබා දෙන සම්බන්ධතා විස්තර.</li>
          </ul>
          <h4 className={subheadingClass}>සේවා හවුල්කරුවන් සහ දත්ත සැකසුම්කරුවන්</h4>
          <p className={paragraphClass}>සේවාව සැපයීමට, ගෙවීම් සැකසීමට හෝ ගමන් සහ රියදුරු ආරක්ෂාවට සහාය වීමට අවශ්‍ය විට ගෙවීම් ද්වාර, cloud hosting සපයන්නන්, සන්නිවේදන සපයන්නන් සහ රක්ෂණ හවුල්කරුවන් සමඟ අදාළ තොරතුරු බෙදා ගත හැක.</p>
          <h4 className={subheadingClass}>නීතිමය සහ නීතිය ක්‍රියාත්මක කරන බලධාරීන්</h4>
          <p className={paragraphClass}>ආරක්ෂක සිදුවීම්, අනතුරු හෝ අපරාධ විමර්ශන සම්බන්ධයෙන් අදාළ ශ්‍රී ලාංකික නීතියක්, වලංගු අධිකරණ නියෝගයක් හෝ නීත්‍යානුකූල රජයේ ඉල්ලීමක් අනුව අපි තොරතුරු හෙළි කළ හැක.</p>

          <h3 className={headingClass}>4. දත්ත ආරක්ෂාව</h3>
          <p className={paragraphClass}>පුද්ගලික තොරතුරු ආරක්ෂා කිරීමට සාධාරණ තාක්ෂණික සහ ආයතනික ක්‍රියාමාර්ග භාවිතා කිරීමට අපි කටයුතු කරමු. ඒවාට පහත දෑ ඇතුළත් විය හැක:</p>
          <ul className={listClass}>
            <li>සහාය දක්වන අවස්ථාවල HTTPS/TLS භාවිතයෙන් ගමන් කරන දත්ත සංකේතනය කිරීම.</li>
            <li>වැඩ කටයුතු සඳහා අවශ්‍ය පුද්ගලයින්ට පමණක් පුද්ගලික දත්ත වෙත ප්‍රවේශය සීමා කිරීම.</li>
            <li>අපගේ ගෙවීම් සැකසුම්කරුවන් විසින් සපයන ගෙවීම් ආරක්ෂණ ක්‍රියාමාර්ග. Tokenization පහසුකම සහාය දක්වන විට සම්පූර්ණ කාඩ්පත් විස්තර වෙනුවට ගෙවීම් tokens භාවිතා කෙරේ.</li>
          </ul>
          <p className={paragraphClass}>ඉලෙක්ට්‍රොනික ගබඩා කිරීමේ හෝ සම්ප්‍රේෂණය කිරීමේ කිසිදු ක්‍රමයක් සම්පූර්ණයෙන්ම ආරක්ෂිත නොවන බැවින් නිරපේක්ෂ ආරක්ෂාව සහතික කළ නොහැක.</p>

          <h3 className={headingClass}>5. දත්ත රඳවා තබා ගැනීම</h3>
          <p className={paragraphClass}>ඔබගේ ගිණුම සක්‍රීයව පවතින තාක් කල් හෝ සේවාව සැපයීමට, ආරවුල් විසඳීමට, ආරක්ෂාව පවත්වා ගැනීමට සහ අදාළ ශ්‍රී ලාංකික නීතිමය, බදු හෝ නියාමන බැඳීම් ඉටු කිරීමට සාධාරණව අවශ්‍ය වන තාක් කල් අපි පුද්ගලික දත්ත රඳවා තබා ගනිමු. ගිණුම මකා දැමීම ඉල්ලා සිටින විට, තවදුරටත් අවශ්‍ය නොවන තොරතුරු මකා දැමීමට හෝ නිර්නාමික කිරීමට සුදුසු පියවර ගන්නෙමු. නීතියෙන් රඳවා තබා ගැනීමට අවශ්‍ය වාර්තා එසේ රඳවා තබා ගත හැක.</p>

          <h3 className={headingClass}>6. ඔබගේ අයිතිවාසිකම් සහ තේරීම්</h3>
          <ul className={listClass}>
            <li><strong>ප්‍රවේශ වීම සහ යාවත්කාලීන කිරීම:</strong> යෙදුමේ සැකසුම් තුළින් ලබා ගත හැකි පැතිකඩ විස්තර බැලීමට සහ සංස්කරණය කිරීමට හෝ සහාය සඳහා අපගේ කණ්ඩායම අමතන්න.</li>
            <li><strong>ස්ථාන අවසර:</strong> ඔබගේ දුරකථනයේ මෙහෙයුම් පද්ධති සැකසුම් හරහා GPS අවසර කළමනාකරණය කළ හැක. ස්ථාන ප්‍රවේශය අක්‍රිය කිරීමෙන් ඇතැම් කුලී රථ සේවා විශේෂාංග ක්‍රියා නොකළ හැක.</li>
            <li><strong>ගිණුම මකා දැමීම:</strong> අපගේ සහාය කණ්ඩායම සම්බන්ධ කර ගිණුම වසා දැමීම සහ මකා දැමීමට සුදුසු පුද්ගලික දත්ත මකා දැමීම ඉල්ලා සිටිය හැක. නීතියෙන් හෝ සේවා/ආරක්ෂක අවශ්‍යතා සඳහා ඇතැම් වාර්තා රඳවා තබා ගැනීමට සිදුවිය හැක.</li>
            <li><strong>ප්‍රවර්ධන පණිවිඩ:</strong> ලබා දී ඇති අවස්ථාවල පණිවිඩයේ සඳහන් ක්‍රමය භාවිතයෙන් ප්‍රවර්ධන පණිවිඩවලින් ඉවත් විය හැක. අත්‍යවශ්‍ය සේවා සහ ගනුදෙනු පණිවිඩ තවදුරටත් එවිය හැක.</li>
          </ul>

          <h3 className={headingClass}>7. ළමුන්ගේ පෞද්ගලිකත්වය</h3>
          <p className={paragraphClass}>WOLET යෙදුම වයස අවුරුදු 18 ට අඩු පුද්ගලයින් සඳහා අදහස් කර නොමැති අතර, අපි දැනුවත්ව ළමුන්ගෙන් පුද්ගලික දත්ත රැස් නොකරන්නෙමු.</p>

          <h3 className={headingClass}>8. මෙම පෞද්ගලිකත්ව ප්‍රතිපත්තියේ වෙනස්කම්</h3>
          <p className={paragraphClass}>මෙම ප්‍රතිපත්තිය වරින් වර සංශෝධනය කළ හැක. සැලකිය යුතු වෙනස්කම් සිදු කළහොත්, හැකි අවස්ථාවලදී ඒවා ක්‍රියාත්මක වීමට පෙර යෙදුම තුළ දැනුම්දීම්, push notifications, SMS හෝ වෙනත් සුදුසු ක්‍රමයක් මගින් පරිශීලකයින් දැනුවත් කිරීමට සාධාරණ පියවර ගන්නෙමු.</p>

          <h3 className={headingClass}>9. අප අමතන්න</h3>
          <p className={paragraphClass}>මෙම පෞද්ගලිකත්ව ප්‍රතිපත්තිය හෝ ඔබගේ පුද්ගලික දත්ත සම්බන්ධයෙන් ප්‍රශ්න, ගැටළු හෝ ඉල්ලීම් ඇත්නම්, කරුණාකර WOLET අමතන්න:</p>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3 text-sm text-slate-700">
            <p><strong className="text-[#10243D]">ආයතනය:</strong> Ryzite (Pvt) Ltd (WOLET)</p>
            <p><strong className="text-[#10243D]">ලිපිනය:</strong> No. 123, Galle Road, Colombo 03, Sri Lanka</p>
            <p><strong className="text-[#10243D]">විද්‍යුත් තැපෑල:</strong> <a className="text-[#0759A6] underline" href="mailto:info@wolet.lk">info@wolet.lk</a></p>
            <p><strong className="text-[#10243D]">දුරකථන / WhatsApp:</strong> <a className="text-[#0759A6] underline" href="https://wa.me/94776926922" target="_blank" rel="noreferrer">077 692 6922</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
