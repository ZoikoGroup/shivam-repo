export default function JourneyPromo() {
  return (
    <section className="relative bg-gradient-to-br from-[#01728B] to-[#0995B3] py-28">
        <div className="max-w-[1600px] mx-auto px-15 lg:px-29 -mt-16 -mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT IMAGE CARD */}
            <div className="relative bg-[#cfe3f1] rounded-2xl shadow-xl max-w-[560px]">

              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="/pic4.png"
                  alt="Zoiko Orbit Journey"
                  className="w-full h-[520px] object-fill"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="text-white max-w-[640px]">
              <span
                className="inline-block bg-[#FFB44C] text-[#004d5f]
                         text-[13px] font-semibold px-5 py-2 rounded-full mb-6"
              >
                BLACK FRIDAY 2025
              </span>

              <h2 className="text-[40px] md:text-[48px] font-semibold leading-tight">
                Be Ready for <br />
                Every Journey <br />
                <span className="text-[#FFB44C]">Powered by Zoiko Orbit</span>
              </h2>

              <p className="mt-6 text-[16px] leading-relaxed opacity-95 max-w-[560px]">
                This Black Friday, unlock unbeatable savings on global
                connectivity. Travel smarter, stay connected effortlessly, and
                experience freedom wherever you go. 🌍⚡
              </p>

              {/* CTA BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-6">
                <button
                  className="bg-gradient-to-r from-[#FFB44C] to-[#FFA23A]
                             text-white px-8 py-4 rounded-full
                             text-[16px] font-semibold hover:opacity-90 transition"
                >
                  Activate Your Orbit eSIM
                </button>

                <button
                  className="border-2 border-white/70 text-white
                             px-8 py-4 rounded-full
                             text-[16px] font-semibold
                             hover:bg-white hover:text-[#00718A] transition"
                >
                  Partner with Us
                </button>
              </div>

              {/* STATS */}
              <div className="mt-14 grid grid-cols-3 gap-10 text-center lg:text-left">
                <div>
                  <p className="text-[#FFB44C] text-[28px] font-bold">190+</p>
                  <p className="text-[13px] uppercase tracking-wide opacity-80">
                    Countries Connected
                  </p>
                </div>

                <div>
                  <p className="text-[#FFB44C] text-[28px] font-bold">5M+</p>
                  <p className="text-[13px] uppercase tracking-wide opacity-80">
                    Travelers Served
                  </p>
                </div>

                <div>
                  <p className="text-[#FFB44C] text-[28px] font-bold">24/7</p>
                  <p className="text-[13px] uppercase tracking-wide opacity-80">
                    Global Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
