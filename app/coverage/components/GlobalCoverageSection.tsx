export default function GlobalCoverageSection() {
  return (
    <section className="bg-[#F4F6F7] py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div>

            <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-semibold text-gray-900 leading-tight">
              One eSIM. Every <br />
              Destination. Every Journey
            </h2>

            <p className="mt-6 text-[16px] md:text-[18px] text-gray-600 leading-relaxed max-w-[520px]">
              Connect seamlessly in 220+ countries with Tier-1 speed,
              security, and reliability. Backed by BT Wholesale and
              90+ global partners.
            </p>

          </div>

          {/* ================= RIGHT MAP ================= */}
          <div className="flex justify-center lg:justify-end">

            <img
              src="/world-map.png"
              alt="Global map showing coverage"
              className="w-full max-w-[650px] object-contain"
            />

          </div>

        </div>

      </div>
    </section>
  );
}
