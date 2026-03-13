export default function InclusionHero() {
  return (
    <section className="relative w-full h-[520px] md:h-[620px] overflow-hidden">

      {/* Background Image */}
      <img
        src="/acc-hero.png"
        alt="Inclusion"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* LEFT DARK GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#081E35]/95 via-[#081E35]/80 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 h-full flex items-center">

        <div className="max-w-[700px] text-white">

          {/* HEADING */}
          <h1 className="text-[34px] md:text-[48px] lg:text-[56px] font-semibold leading-tight">
            Designed for Everyone <br />
            — Inclusion Without Compromise
          </h1>

          {/* TEXT */}
          <p className="mt-6 text-[15px] md:text-[17px] text-white/90 leading-relaxed">
            At Zoiko Orbit, we’re committed to ensuring that every user —
            regardless of ability, geography, or device — can access our
            services with ease and confidence. We design and continuously test
            our platforms in accordance with WCAG 2.1 AA, the Americans with
            Disabilities Act (ADA), and the UK Equality Act 2010.
          </p>

        </div>
      </div>
    </section>
  );
}