export default function TravelConnectivitySection() {
  return (
    <section className="relative bg-[#F5F7F8] overflow-hidden py-24">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

        {/* LEFT CONTENT */}
        <div className="max-w-[560px] md:text-center">

          <h2 className="text-[30px] sm:text-[36px] lg:text-[42px] font-semibold text-[#0C7687] leading-tight">
            Power every itinerary <br />
            with frictionless global <br />
            connectivity.
          </h2>

          <p className="mt-6 text-[16px] text-gray-700 leading-relaxed">
            Zoiko Orbit enables Online Travel Agencies (OTAs), booking platforms,
            metasearch engines, and digital tour operators to embed eSIM activation
            into their customer journey — seamlessly, securely, and profitably.
          </p>

          <p className="mt-6 text-[16px] text-gray-700 leading-relaxed">
            Our infrastructure spans 220+ countries and territories, giving your
            travellers reliable mobile data from the moment they arrive — without
            roaming shocks, SIM swaps, or connectivity gaps.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">

          <img
            src="/ota-hero.png"
            alt="Global travel connectivity"
            className="w-[320px] sm:w-[480px] lg:w-[680px] object-contain"
          />

        </div>

      </div>

    </section>
  );
}