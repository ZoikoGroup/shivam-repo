export default function PlatformIncludes() {
  return (
    <section className="relative bg-[#F7FBFE] py-24 overflow-hidden">

      {/* Optional Grid Background */}
      {/* <div className="absolute inset-0 opacity-30 pointer-events-none">
        <img
          src="/grid-bg.png"   // optional grid background
          alt="grid"
          className="w-full h-full object-cover"
        />
      </div> */}

      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-12">

        {/* Heading */}
        <h2 className="text-center text-[30px] md:text-[38px] font-semibold text-gray-800 mb-16">
          Our platform includes
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-8 text-center">

          <Feature icon="/acc1.png" text="Full support for screen readers across mobile and desktop" />
          <Feature icon="/acc2.png" text="High-contrast mode, adjustable font sizes, and visual hierarchy tools" />
          <Feature icon="/acc3.png" text="Keyboard-only navigation for all critical functions" />
          <Feature icon="/acc4.png" text="Captions and transcripts on all video content" />

          <Feature icon="/acc5.png" text="Submit and track service requests through your AI text and semantic markup in MyZoiko portal" />
          <Feature icon="/acc6.png" text="Clean, simplified layouts for neurodiverse users" />
          <Feature icon="/acc7.png" text="Accessibility-tested dashboards for enterprise and reseller accounts" />
          <Feature icon="/acc8.png" text="An open feedback channel at accessibility@zoikoorbit.com" />

        </div>

      </div>
    </section>
  );
}

function Feature({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="max-w-[240px] mx-auto">

      {/* ICON */}
      <div className="w-[90px] h-[90px] mx-auto rounded-full bg-[#0C7687] flex items-center justify-center mb-5">
        <img
          src={icon}
          alt="feature"
          className="w-[90px] h-[90px] object-contain"
        />
      </div>

      {/* TEXT */}
      <p className="text-[14px] text-gray-600 leading-relaxed">
        {text}
      </p>

    </div>
  );
}