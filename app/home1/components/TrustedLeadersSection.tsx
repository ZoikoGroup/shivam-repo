export default function TrustedLeadersSection() {
  return (
    <section className="bg-[#F6F7F9] py-20">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-[28px] md:text-[32px] font-semibold text-gray-800">
          Trusted by global leaders in travel & telecoms
        </h2>

        {/* Logos */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {[
            { src: "/tg1.png", alt: "Global Travel Alliance" },
            { src: "/tg2.png", alt: "Orange" },
            { src: "/tg3.png", alt: "WWF" },
            { src: "/tg4.png", alt: "Alliance Airlines" },
          ].map((logo, i) => (
            <div
              key={i}
              className="bg-white rounded-xl px-8 py-5 shadow-sm flex items-center justify-center min-w-[180px]"
            >
              <img src={logo.src} alt={logo.alt} className="h-8 object-contain" />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-200" />

        {/* CTA Card */}
        <div className="mt-12">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#01728B] to-[#0995B3] p-10 md:p-14 text-center">

            {/* Decorative outlines */}
            <div className="absolute left-6 top-6 w-20 h-20 border border-white/20 rounded-xl" />
            <div className="absolute right-6 bottom-6 w-24 h-24 border border-white/20 rounded-xl" />

            {/* Content */}
            <h3 className="text-white text-[26px] md:text-[32px] font-semibold leading-snug">
              Connect your journey. <br /> Empower your business
            </h3>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a href="/plans"><button className="px-8 h-[48px] rounded-lg bg-white text-[#1F4FA3] font-medium hover:bg-gray-100 transition">
                Get Your eSIM
              </button></a>

              <a href="/PartnerWithUs"><button className="px-8 h-[48px] rounded-lg border border-white text-white font-medium hover:bg-white/10 transition">
                Partner with Us
              </button></a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
