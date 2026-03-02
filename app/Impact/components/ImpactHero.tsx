export default function ImpactHero() {
  return (
    <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden">

      {/* Background Image */}
      <img
        src="/impact-hero.png"
        alt="Protecting Our Planet"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Left Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto h-full px-6 lg:px-16 flex items-center">
        <div className="max-w-[650px] text-white">

          <h1 className="text-[34px] md:text-[48px] lg:text-[56px] font-semibold leading-tight">
            Every Connection <br />
            Protects Our Planet.
          </h1>

          <p className="mt-6 text-[16px] md:text-[18px] text-white/90 leading-relaxed">
            A portion of every plan supports wildlife and habitats worldwide.
          </p>

        </div>
      </div>

    </section>
  );
}