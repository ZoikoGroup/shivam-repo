export default function AboutHero() {
  return (
    <section
      className=" relative w-full min-h-[420px] h-[calc(100vh-80px)] max-h-[640px] overflow-hidden">
      {/* Background Image */}
      <img
        src="/abouthero.png"
        alt="Traveler connected with nature"
        className="
          absolute inset-0
          w-full h-full
          object-cover object-center
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-black/75
          via-black/45
          to-black/10
        "
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto h-full px-6 lg:px-16 flex items-center">
        <div className="max-w-[720px] text-white">
          <h1 className="text-[30px] md:text-[42px] lg:text-[52px] font-semibold leading-tight">
            Your World. Always Connected.
            <br />
            Always Compassionate.
          </h1>

          <p className="mt-5 text-[15px] md:text-[17px] text-white/90 leading-relaxed">
            At Zoiko Orbit, we believe travel is more than movement — it’s about
            meaningful connections to people, cultures, and the planet.
          </p>

          <p className="mt-3 text-[15px] md:text-[17px] text-white/90 leading-relaxed">
            We keep you connected everywhere you go while supporting a more
            compassionate world.
          </p>
        </div>
      </div>
    </section>
  );
}
