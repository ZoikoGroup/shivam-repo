export default function ConnectingHearts() {
  return (
    <section className="bg-[#f7f9fa] py-20 px-13">
        <div className="max-w-[1600px] mx-auto px- lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT IMAGE */}
            <div className="flex justify-start">
              <div className="relative w-[420px] md:w-[480px] lg:w-[520px] h-[360px] md:h-[420px] lg:h-[480px] overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/pic2.png"
                  alt="Connecting Hearts Across the Globe"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="max-w-[620px]">
              <h2 className="text-[34px] md:text-[40px] lg:text-[44px] font-semibold text-gray-900 leading-tight">
                Connecting Hearts <br /> Across the Globe
              </h2>

              <p className="mt-6 text-[16px] md:text-[18px] text-gray-600 leading-relaxed">
                Whether it&apos;s a family reunion for Thanksgiving or a
                business trip that connects cultures, every journey matters.
                Zoiko Orbit ensures you stay connected to what matters most,
                wherever your travels take you.
              </p>

              {/* QUOTE CARD */}
              <div className="mt-10 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#00718A]">
                <p className="text-[16px] md:text-[17px] text-[#005f73] italic leading-relaxed">
                  &quot;Gratitude has no borders. Every connection tells a story
                  of human experience.&quot;
                </p>

                <p className="mt-4 text-[15px] text-gray-500 font-medium">
                  — Sarah M., Digital Nomad from Barcelona
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
