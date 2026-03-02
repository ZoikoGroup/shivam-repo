export default function SolutionsBuiltForBusiness() {
  return (
    <section className="relative bg-[#F7FBFE] py-24 overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-gray-900">
            Solutions Built for Your Business.
          </h2>
          <p className="mt-3 text-[16px] text-gray-600">
            Scale from a few travelers to global workforce coverage—mix & match
            programs
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* CARD 1 */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/bu1.png"
                alt="Corporate Travel Data"
                className="w-full h-[250px] object-cover"
              />
            </div>

            <h3 className="mt-6 text-[18px] font-semibold text-gray-900">
              Corporate Travel Data
            </h3>

            <p className="mt-2 text-[15px] text-gray-600 leading-relaxed">
              Pre-trip provisioning, data pools, expense integration.
            </p>

            <a
              href="#"
              className="mt-4 inline-block text-[#0d7c92] text-[14px] font-medium hover:underline"
            >
              Learn More →
            </a>
          </div>

          {/* CARD 2 */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/bu2.png"
                alt="Remote Worker Data"
                className="w-full h-[250px] object-cover"
              />
            </div>

            <h3 className="mt-6 text-[18px] font-semibold text-gray-900">
              Remote Worker Data
            </h3>

            <p className="mt-2 text-[15px] text-gray-600 leading-relaxed">
              Always-on connectivity for distributed teams.
            </p>

            <a
              href="#"
              className="mt-4 inline-block text-[#0d7c92] text-[14px] font-medium hover:underline"
            >
              Learn More →
            </a>
          </div>

          {/* CARD 3 */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/bu3.png"
                alt="Bespoke Global Programs"
                className="w-full h-[250px] object-cover"
              />
            </div>

            <h3 className="mt-6 text-[18px] font-semibold text-gray-900">
              Bespoke Global Programs
            </h3>

            <p className="mt-2 text-[15px] text-gray-600 leading-relaxed">
              Tailored plans for industries like energy, consulting, etc.
            </p>

            <a
              href="#"
              className="mt-4 inline-block text-[#0d7c92] text-[14px] font-medium hover:underline"
            >
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
