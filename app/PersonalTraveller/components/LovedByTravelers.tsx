export default function LovedByTravelers() {
  return (
    <section className="relative bg-[#F7FBFE] py-12 md:py-16 lg:py-22 px-4 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* MOBILE: Card first | DESKTOP: Grid layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center lg:px-40">

          {/* ===== RIGHT CARD (TOP ON MOBILE) ===== */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end w-full">
            
            {/* Main Review Card */}
            <div className="bg-white rounded-2xl shadow-xl w-[320px] sm:w-[340px] overflow-hidden relative z-10">
              
              <img
                src="/lo1.jpg"
                alt="Traveler review"
                className="w-full h-[190px] object-cover rounded-t-2xl"
              />

              <div className="p-5">
                <h4 className="font-semibold text-gray-900 text-[15px] leading-snug">
                  Loved how simple activation was. <br />
                  No SIM swaps!
                </h4>

                <p className="mt-2 text-[13px] text-gray-500">
                  20 July 2025 | Erick Peters
                </p>

                {/* ACTIONS */}
                <div className="flex items-center gap-4 mt-4 text-gray-400 text-sm">
                  <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">❤️</span>
                  <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">💬</span>
                  <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">↗</span>
                </div>

                <p className="mt-4 text-[13px] text-gray-500">
                  122 people viewed
                </p>
              </div>
            </div>

            {/* Floating Trustpilot Badge */}
            <div className="absolute z-10 bottom-6 right-0 translate-x-15 rotate-5 bg-white shadow-lg rounded-xl px-4 py-3 text-md border border-gray-200">
              <p className="font-semibold text-gray-800 mb-1">Excellent</p>
              <p className="text-green-600 text-[14px]">★★★★★ Trustpilot</p>
              <p className="text-gray-400 text-[11px]">Based on 4,556 reviews</p>
            </div>
          </div>

          {/* ===== LEFT CONTENT ===== */}
          <div className="order-2 lg:order-1 text-left lg:text-left max-w-[520px]">
            <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-gray-900 leading-tight">
              Loved by <br className="hidden sm:block" /> Travelers Everywhere.
            </h2>

            <p className="mt-5 text-[15px] text-gray-600 leading-relaxed">
              Zoiko Orbit™ has earned the trust of global travelers who value
              simplicity, speed, and reliability. Real experiences, real
              journeys—here’s a glimpse of `what they love most.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
