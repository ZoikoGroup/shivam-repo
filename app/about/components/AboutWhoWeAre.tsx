export default function AboutWhoWeAre() {
  return (
    <section className="relative bg-white py-28">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT IMAGES ================= */}
          <div className="relative">

            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/we1.png" // landmarks image
                alt="Global connectivity"
                className="w-full h-[420px] object-cover"
              />
            </div>

            {/* Floating Image */}
            <div
              className="
                absolute
                -bottom-12
                right-12
                bg-white
                rounded-2xl
                shadow-2xl
                border
                max-w-[360px]
              "
            >
              <img
                src="/we2.png" // phone + eSIM image
                alt="eSIM on phone"
                className="w-full h-[220px] object-cover rounded-xl"
              />
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="max-w-[640px]">
            <h2 className="text-[30px] md:text-[36px] font-semibold text-gray-900">
              Who We Are
            </h2>

            <p className="mt-6 text-[16px] text-gray-700 leading-relaxed">
              Zoiko Orbit™ is the premier global travel connectivity platform
              under Zoiko Communications Group Inc., part of the dynamic Zoiko
              Group — a diversified multinational enterprise spanning
              telecommunications, fintech, healthcare, technology, and consumer
              brands.
            </p>

            <p className="mt-5 text-[16px] text-gray-700 leading-relaxed">
              Born from the robust telecom foundation of Zoiko Mobile, we draw
              on decades of engineering world-class networks. Yet as a proud
              brand in the Zoiko family, we also carry forward something deeper:
              a shared promise to uplift lives and protect the remarkable
              diversity of our world.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
