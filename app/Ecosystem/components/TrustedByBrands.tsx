export default function TrustedByBrands() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-16">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-[32px] md:text-[38px] font-semibold text-gray-900">
            Trusted by Leading Travel & Mobility Brands.
          </h2>
          <p className="mt-3 text-[16px] text-gray-600 max-w-[760px] mx-auto">
            See how agencies, OTAs, and loyalty programs increase ancillary revenue
            and traveler satisfaction with Zoiko Orbit™.
          </p>
        </div>

        {/* ================= FIRST CASE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-10">

          {/* IMAGE COLLAGE */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-[480px] md:w-[490px]">

              <img
                src="/trust1.png"   // upload main image
                alt="Airline passenger"
                className="rounded-xl shadow-lg"
              />

            </div>
          </div>

          {/* TEXT */}
          <div>
            <h3 className="text-[20px] font-semibold text-gray-900 mb-4">
              Boosting Ancillary Revenue for a Major Airline
            </h3>

            <p className="text-[15px] text-gray-700 leading-relaxed">
              A prominent global airline was seeking innovative ways to enhance its
              passenger experience while simultaneously driving new ancillary revenue
              streams. By integrating Zoiko Orbit’s eSIM solutions directly into their
              booking and check-in flows, they provided travelers with instant,
              seamless mobile connectivity from the moment they booked their flight.
            </p>

            <p className="mt-4 text-[15px] text-gray-700 leading-relaxed">
              This not only improved customer satisfaction by eliminating the hassle
              of sourcing local SIMs but also created a significant new revenue
              channel for the airline, showcasing the power of integrated travel
              solutions.
            </p>
          </div>
        </div>

        {/* ================= SECOND CASE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* TEXT */}
          <div className="order-2 lg:order-1">
            <h3 className="text-[20px] font-semibold text-gray-900 mb-4">
              Elevating Customer Loyalty for a Global Hotel Group
            </h3>

            <p className="text-[15px] text-gray-700 leading-relaxed">
              A leading international hotel group aimed to deepen its relationship
              with guests and boost loyalty program engagement. By partnering with
              Zoiko Orbit, they offered exclusive, discounted eSIM plans to their
              loyalty members.
            </p>

            <p className="mt-4 text-[15px] text-gray-700 leading-relaxed">
              Providing unparalleled global connectivity as a premium perk
              differentiated their loyalty program, added tangible value for their
              most frequent travelers, and reinforced the hotel group’s commitment to
              a truly connected and compassionate travel experience.
            </p>
          </div>

          {/* IMAGE COLLAGE */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-[480px] md:w-[490px]">

              <img
                src="/trust2.png"
                alt="Hotel loyalty example"
                className="rounded-xl shadow-lg"
              />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
