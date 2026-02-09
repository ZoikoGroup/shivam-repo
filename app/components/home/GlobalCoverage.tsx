export default function GlobalCoverage() {
  return (
    <section className="bg-white py-24">
        <div className="max-w-[1600px] mx-auto px-9 lg:px-30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div className="max-w-[520px]">
              <h2 className="text-[36px] md:text-[44px] font-semibold text-gray-800">
                Global Coverage
              </h2>

              <p className="mt-3 text-[18px] text-[#00718A] font-medium">
                Seamless Connectivity in 220+ Countries
              </p>

              <p className="mt-4 text-[16px] text-gray-600 leading-relaxed">
                Stay connected wherever you go—no need to swap SIMs or face
                roaming shocks.
              </p>

              <button
                className="mt-8 bg-[#00718A] hover:bg-[#0a8fa6]
                     text-white px-8 py-4 rounded-xl
                     text-[16px] font-semibold transition"
              >
                Get Your eSIM
              </button>
            </div>

            {/* RIGHT MAP CARD */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
              <img
                src="/pic3.png"
                alt="Global Coverage Map"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
  );
}
