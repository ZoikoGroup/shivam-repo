export default function SeamlessIntegration() {
  return (
    <section className="bg-[#EEF6FB] py-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img
              src="/se1.png" 
              alt="Seamless integration with existing systems"
              className="w-full h-[420px] object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-[620px]">
            <h2 className="text-[30px] md:text-[36px] font-semibold text-gray-900 leading-tight">
              Seamless Integration <br />
              with Your Existing Systems
            </h2>

            <p className="mt-4 text-[16px] text-gray-600 leading-relaxed">
              Zoiko Orbit APIs and connectors easily integrate with ERP,
              travel management, and reporting tools.
            </p>

            <h4 className="mt-6 text-[16px] font-semibold text-gray-900">
              API: Plug &amp; Play
            </h4>

            <ul className="mt-4 space-y-3 text-[15px] text-gray-700 list-disc list-inside">
              <li>REST API with real-time activation and reporting.</li>
              <li>SSO &amp; secure admin portals.</li>
              <li>Multi-currency billing and cost center mapping.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
