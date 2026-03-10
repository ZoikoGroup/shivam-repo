export default function InstantAnswersHero() {
  return (
    <section className="relative w-full h-[420px] md:h-[520px] lg:h-[580px] overflow-hidden">

      {/* Background Image */}
      <img
        src="/faq-hero.png"
        alt="Instant Answers"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Left Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto h-full px-6 lg:px-16 flex items-center">
        <div className="max-w-[620px] text-white">

          <h1 className="text-[30px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-semibold leading-tight">
            Instant Answers <br />
            — Anytime, Anywhere
          </h1>

          <p className="mt-6 text-[14px] sm:text-[15px] md:text-[17px] text-white/85 leading-relaxed">
            Access clear, verified answers to the most frequently asked
            questions about Zoiko Orbit’s global eSIM platform.
            Our intelligent knowledge base is built to deliver immediate
            clarity for both personal and enterprise users.
          </p>

        </div>
      </div>

    </section>
  );
}
