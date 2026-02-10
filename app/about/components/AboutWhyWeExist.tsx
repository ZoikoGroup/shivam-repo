export default function AboutWhyWeExist() {
  return (
    <section className="bg-[#EEF6FB] py-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-[900px] mx-auto mb-20">
          <h2 className="text-[30px] md:text-[36px] font-semibold text-gray-900">
            Why We Exist
          </h2>

          <p className="mt-4 text-[16px] text-gray-600 leading-relaxed">
            In an age where travelers cross borders more than ever, staying
            connected should be effortless. Yet too often, it’s complicated,
            costly, or unreliable. We created Zoiko Orbit to change that.
          </p>
        </div>

        {/* ================= MISSION BLOCK ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">

          {/* IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-[#00718A]/30">
            <img
              src="/why1.png"
              alt="Traveler at airport"
              className="w-full h-[380px] object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="max-w-[640px]">
            <h3 className="text-[22px] font-semibold text-gray-900 mb-4">
              Our mission is clear:
            </h3>

            <p className="text-[16px] text-gray-700 leading-relaxed italic">
              “To give travelers — and the entire travel ecosystem — instant,
              secure, seamless mobile connectivity across 220+ countries,
              backed by Tier-1 infrastructure, transparent pricing, and
              unmatched global support.”
            </p>

            <p className="mt-5 text-[16px] text-gray-700 leading-relaxed">
              Every Zoiko Orbit purchase supports animal shelters, wildlife
              sanctuaries, and conservation initiatives worldwide — helping
              protect endangered species and preserve habitats for generations
              to come.
            </p>
          </div>
        </div>

        {/* ================= NATURE & SAFARIS BLOCK ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div className="max-w-[640px]">
            <h3 className="text-[26px] font-semibold text-gray-900 leading-snug">
              A Unique Focus
              <br />
              on Nature & Safaris
            </h3>

            <p className="mt-4 text-[16px] text-gray-700 leading-relaxed">
              We’re especially proud to stand with travelers who explore the
              natural wonders of our planet.
            </p>

            <p className="mt-4 text-[16px] text-gray-700 leading-relaxed">
              Those headed on safaris or wildlife expeditions receive exclusive
              Zoiko Orbit discounts, plus the knowledge that part of every
              purchase directly funds global efforts to care for and protect
              the very creatures they’ve journeyed to see.
            </p>
          </div>

          {/* IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/why2.png"
              alt="Safari traveler"
              className="w-full h-[380px] object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
