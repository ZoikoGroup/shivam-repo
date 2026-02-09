export default function BlackFridayHero() {
  return (
    <section className="relative bg-gradient-to-r from-[#01728B] to-[#0995B3] py-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        <div className="px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div className="text-white max-w-[640px]">
            <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-semibold leading-tight">
              Stay Connected. <br />
              Stay Ahead{" "}
              <span className="text-[#FFB44C]">Wherever You Are</span>
            </h2>

            <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed opacity-95">
              Join millions of smart travelers who trust Zoiko Orbit for
              seamless global connectivity. This Black Friday, unlock exclusive
              savings and power your journeys with instant eSIM access.
            </p>

            {/* ================= OFFER CARD ================= */}
            <div className="mt-6 bg-white/10 backdrop-blur rounded-2xl p-6 max-w-[460px]">
              <span className="inline-block bg-[#F9A13C] text-white text-[13px] font-semibold px-5 py-2 rounded-full mb-5">
                LIMITED TIME BLACK FRIDAY OFFER
              </span>

              <div className="flex items-start gap-5">
                <div className="text-[#FFB44C] text-[38px] font-bold leading-none">
                  25% <br /> OFF
                </div>

                <p className="text-[15px] leading-relaxed mt-1">
                  All Global eSIM Plans + Free
                  <br />
                  BookingOrbit Credits
                </p>
              </div>
            </div>

            {/* ================= CTA BUTTONS ================= */}
            <div className="mt-8 flex flex-wrap gap-5">
              <button className="bg-gradient-to-r from-[#FFB44C] to-[#FFA23A] text-white px-7 py-3.5 rounded-full text-[15px] font-semibold hover:opacity-90 transition">
                Get Your Black Friday Deal
              </button>

              <button className="border-2 border-white/70 text-white px-7 py-3.5 rounded-full text-[15px] font-semibold hover:bg-white hover:text-[#00718A] transition">
                Partner with Us
              </button>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="md:items-center relative flex justify-around">
            <div className=" relative w-[420px] md:w-[480px] lg:w-[520px] h-[360px] md:h-[420px] lg:h-[480px] overflow-hidden rounded-xl shadow-2xl">
              <img
                src="/pic.png"
                alt="Travelers using eSIM"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
