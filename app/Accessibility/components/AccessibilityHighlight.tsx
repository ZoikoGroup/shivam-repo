export default function AccessibilityHighlight() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1600px] mx-auto">

        {/* IMAGE + CARD WRAPPER */}
        <div className="relative overflow-hidden">

          {/* BACKGROUND IMAGE */}
          <img
            src="/acc-b.png"
            alt="Join us in redefining travel"
            className="w-full h-[420px] md:h-[480px] object-cover"
          />

          {/* OVERLAY CARD */}
          <div
            className="
              absolute
              right-6 md:right-10 lg:right-30
              top-86 -translate-y-26
              bg-[#0a7a8f]/70
              backdrop-blur-sm
              text-white
              rounded-2xl
              p-8 md:p-10
              max-w-[520px]
              shadow-xl
            "
          >
            <h3 className="text-[20px] md:text-[24px] font-semibold leading-snug">
            Zoiko Orbit Accessibility
            <br />
            — inclusion, engineered.
          </h3>

            <p className="mt-4 text-[14px] md:text-[16px] text-white/90 leading-relaxed">
            We believe digital freedom must be universal — and we welcome your
            feedback to ensure our platform remains open, equitable,
            and barrier-free
          </p>
          </div>
        </div>

      </div>
    </section>
  );
}
