export default function AboutJoinUs() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1600px] mx-auto">

        {/* IMAGE + CARD WRAPPER */}
        <div className="relative overflow-hidden">

          {/* BACKGROUND IMAGE */}
          <img
            src="/join.png"
            alt="Join us in redefining travel"
            className="w-full h-[420px] md:h-[480px] object-cover"
          />

          {/* OVERLAY CARD */}
          <div
            className="
              absolute
              right-6 md:right-10 lg:right-16
              top-1/2 -translate-y-26
              bg-[#0a7a8f]/70
              backdrop-blur-sm
              text-white
              rounded-2xl
              p-8 md:p-10
              max-w-[520px]
              shadow-xl
            "
          >
            <h3 className="text-[22px] md:text-[24px] font-semibold mb-4">
              Join Us in Redefining Travel
            </h3>

            <p className="text-[14px] md:text-[15px] leading-relaxed text-white/90">
              Whether you’re planning your next international adventure,
              managing a retail chain seeking premium travel products,
              or operating a travel agency or insurance platform eager
              to integrate instant global connectivity — Zoiko Orbit
              is here to help you succeed.
            </p>

            <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed text-white/90">
              Together, we can build a world where you’re always connected,
              and where every trip leaves a legacy of care, compassion,
              and a better tomorrow.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
