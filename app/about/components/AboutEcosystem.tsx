import { CheckCircle } from "lucide-react";

export default function AboutEcosystem() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">

        {/* ================= POWERING ECOSYSTEM ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">

          {/* IMAGE */}
          <div className="relative">
            <img
              src="/power.png"
              alt="Global travel ecosystem"
              className="w-full max-w-[520px] h-[460px] object-cover rounded-2xl"
            />
          </div>

          {/* CONTENT */}
          <div className="max-w-[720px]">
            <h2 className="text-[30px] md:text-[36px] font-semibold text-gray-900 leading-tight">
              Powering a Global
              <br />
              Travel Ecosystem
            </h2>

            <p className="mt-4 text-[16px] text-gray-700 leading-relaxed">
              Zoiko Orbit is more than just a travel SIM. We’re a critical
              partner to the entire travel industry, seamlessly integrating
              global connectivity into:
            </p>

            <ul className="mt-6 space-y-4 text-[16px] text-gray-700">
              <li className="flex gap-3">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span>
                  <strong>Retailers & Duty-Free Networks:</strong> Premium travel
                  essentials that drive foot traffic and loyalty.
                </span>
              </li>

              <li className="flex gap-3">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span>
                  <strong>Travel Agencies & OTAs:</strong> Embedded eSIM solutions
                  alongside flights, hotels, and excursions.
                </span>
              </li>

              <li className="flex gap-3">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span>
                  <strong>Travel Insurance Providers:</strong> Bundled policies
                  with instant global mobile service.
                </span>
              </li>

              <li className="flex gap-3">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span>
                  <strong>Airlines & Loyalty Programs:</strong> Connectivity at
                  booking or check-in.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= WHAT SETS US APART ================= */}
        <div>
          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[38px] font-semibold text-gray-900">
              What Sets Us Apart
            </h2>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 text-center">

            {/* CARD 1 */}
            <div className="max-w-[360px] mx-auto">
              <img
                src="/what1.png"
                alt="Engineered for Global Trust"
                className="mx-auto w-[72px] h-[72px] object-contain mb-6"
              />
              <h3 className="text-[18px] font-semibold text-gray-900 mb-3">
                Engineered for Global Trust
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                Our eSIM platform runs on Tier-1 carrier partnerships across
                220+ countries, safeguarded by PCI DSS and GDPR standards.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="max-w-[360px] mx-auto">
              <img
                src="/what2.png"
                alt="Built to Give Back"
                className="mx-auto w-[72px] h-[72px] object-contain mb-6"
              />
              <h3 className="text-[18px] font-semibold text-gray-900 mb-3">
                Built to Give Back
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                Every Zoiko Orbit purchase supports animal rescue centers,
                wildlife rehabilitation, and conservation programs worldwide.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="max-w-[360px] mx-auto">
              <img
                src="/what3.png"
                alt="Part of the Zoiko Promise"
                className="mx-auto w-[72px] h-[72px] object-contain mb-6"
              />
              <h3 className="text-[18px] font-semibold text-gray-900 mb-3">
                Part of the Zoiko Promise
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                As part of Zoiko Group, we uphold excellence, innovation, and
                meaningful impact for a better world.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
