"use client";

export default function BlackFridayHero() {
  return (
    <section className="relative bg-gradient-to-r from-[#01728B] to-[#0995B3] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div className="text-white max-w-[640px] mx-auto lg:mx-0 px-2 sm:px-0">
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-semibold leading-tight">
              Stay Connected. <br />
              Stay Ahead{" "}
              <span className="text-[#FFB44C]">Wherever You Are</span>
            </h2>

            <p className="mt-4 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed opacity-95">
              Join millions of smart travelers who trust Zoiko Orbit for
              seamless global connectivity. This Black Friday, unlock exclusive
              savings and power your journeys with instant eSIM access.
            </p>

            {/* ================= OFFER CARD ================= */}
            <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 w-full max-w-[460px]">
              <span className="inline-block bg-[#F9A13C] text-white text-[12px] sm:text-[13px] font-semibold px-4 sm:px-5 py-2 rounded-full mb-4 sm:mb-5">
                LIMITED TIME BLACK FRIDAY OFFER
              </span>

              <div className="flex items-start gap-4 sm:gap-5">
                <div className="text-[#FFB44C] text-[32px] sm:text-[38px] font-bold leading-none flex-shrink-0">
                  25% <br /> OFF
                </div>

                <p className="text-[14px] sm:text-[15px] leading-relaxed mt-1">
                  All Global eSIM Plans + Free
                  <br />
                  BookingOrbit Credits
                </p>
              </div>
            </div>

            {/* ================= CTA BUTTONS ================= */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 md:gap-5">
              <button className="w-full sm:w-auto bg-gradient-to-r from-[#FFB44C] to-[#FFA23A] text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-[14px] sm:text-[15px] font-semibold hover:opacity-90 transition shadow-lg">
                Get Your Black Friday Deal
              </button>

              <button className="w-full sm:w-auto border-2 border-white/70 text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-[14px] sm:text-[15px] font-semibold hover:bg-white hover:text-[#00718A] transition">
                Partner with Us
              </button>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative flex justify-center lg:justify-end items-center mt-8 lg:mt-0 px-2 sm:px-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px] aspect-[4/3] rounded-xl shadow-2xl overflow-hidden">
              <img
                src="/pic.png"
                alt="Travelers using eSIM"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}