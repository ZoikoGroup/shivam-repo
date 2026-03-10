export default function PlugIntoSystems() {
  return (
    <section className="bg-[#ebf0f3] py-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-[28px] md:text-[34px] font-semibold text-gray-900">
            Plug Zoiko Orbit into the Systems You Already Use
          </h2>

          <p className="mt-3 text-[15px] text-gray-600">
            APIs, SSO, reporting feeds, and travel platform connectors accelerate rollout
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="rounded-xl overflow-hidden shadow-sm">
            <img
              src="/plug.png"
              alt="Plug into existing systems"
              className="w-full h-[380px] object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-[620px]">
            <h4 className="text-[16px] font-semibold text-gray-900 mb-4">
              Key Capability
            </h4>

            <ul className="space-y-3 text-[15px] text-gray-700 leading-relaxed list-disc list-inside">
              <li>REST + Webhook Events (activation, usage, thresholds)</li>
              <li>SSO (SAML / OAuth) for admin portal</li>
              <li>Multi-currency billing + cost center mapping</li>
              <li>Usage exports (CSV / API) to ERP & expense tools</li>
              <li>Policy-based auto provisioning via booking data</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
