export default function SeamlessIntegration() {
  return (
    <section className="bg-[#EAF4FB] py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img
              src="/se.png" 
              alt="Seamless Integration"
              className="w-full h-[420px] object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-[32px] md:text-[40px] font-semibold text-gray-900 leading-tight">
              Seamless Integration <br />
              with Your Existing Systems
            </h2>

            <p className="mt-4 text-[16px] text-gray-600 leading-relaxed max-w-[540px]">
              Zoiko Orbit APIs and connectors easily integrate with ERP,
              travel management, and reporting tools.
            </p>

            <div className="mt-8">
              <h3 className="text-[18px] font-semibold text-gray-900 mb-4">
                API: Plug & Play
              </h3>

              <ul className="space-y-3 text-[15px] text-gray-600">
                <li>• REST API with real-time activation and reporting.</li>
                <li>• SSO & secure admin portals.</li>
                <li>• Multi-currency billing and cost center mapping.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
