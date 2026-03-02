export default function SupportHeroSection() {
  return (
    <section className="relative w-full h-[520px] md:h-[650px] overflow-hidden -mb-3">

      {/* Background Image */}
      <img
        src="/support-hero.png"
        alt="24/7 Expert Support"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Left Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto h-full px-6 lg:px-16 flex items-center">
        <div className="max-w-[720px] text-white">

          <h1 className="text-[32px] md:text-[44px] lg:text-[52px] font-semibold leading-tight">
            24/7 Expert Support — Wherever
            <br />
            You Are, Worldwide
          </h1>

          <p className="mt-6 text-[15px] md:text-[17px] text-white/90 leading-relaxed">
            The Zoiko Orbit Support Center is your dedicated hub for fast,
            intelligent, and reliable assistance — available 24/7, across
            every timezone. Whether you’re activating a personal eSIM for
            travel or managing a fleet of enterprise devices, our global team
            is here to ensure your connectivity remains seamless.
          </p>

        </div>
      </div>

    </section>
  );
}
