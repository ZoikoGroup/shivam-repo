export default function SupportHighlightSection() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* Background Image */}
      <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px]">
        <img
          src="/support-bg.png" 
          alt="Support"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Teal Content Overlay */}
        <div
            className="
              absolute
              right-6 md:right-10 lg:right-35
              top-82 -translate-y-26
              bg-[#0a7a8f]/70
              backdrop-blur-sm
              text-white
              rounded-2xl
              p-8 md:p-10
              max-w-[420px]
              shadow-xl
            "
          >

          <p className="text-white text-[16px] sm:text-[18px] leading-relaxed max-w-[520px]">
            Designed for travelers, teams, and businesses alike — the Support Center brings together
            human expertise and intelligent automation to keep you connected without compromise.
          </p>

        </div>
      </div>
    </section>
  );
}