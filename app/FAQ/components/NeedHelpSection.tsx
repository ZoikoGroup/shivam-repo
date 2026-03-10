export default function NeedHelpSection() {
  return (
    <section className="relative bg-[#f5f5f5] py-24 overflow-hidden">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative">

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* LEFT IMAGE */}
          <div className="relative h-[420px] lg:h-[520px]">
            <img
              src="/faq1.png"
              alt="Support Help"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* RIGHT FLOATING CARD */}
          <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 bg-white rounded-2xl shadow-xl w-full lg:max-w-[560px] p-8 md:p-10">

            {/* Heading */}
            <h2 className="text-[30px] md:text-[34px] font-semibold text-[#0C7687]">
              Need More Help?
            </h2>

            <p className="text-gray-600 mt-2 mb-6 text-[15px]">
              Chat live with our experts or explore the full Knowledge Base.
            </p>

            <div className="border-t mb-8" />

            {/* OPTIONS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

              {/* CHAT */}
              <div className="text-center sm:text-left">

                <div className="w-[72px] h-[72px] mx-auto sm:mx-0 rounded-full bg-[#0C7687] flex items-center justify-center mb-4">
                  <img
                    src="/faq2.png"
                    alt="Chat"
                    className="w-[60px]"
                  />
                </div>

                <p className="text-[14px] text-gray-600 leading-relaxed">
                  Chat live with our multilingual support agents anytime, anywhere
                </p>

                <button className="mt-3 text-[#0C7687] font-medium cursor-pointer">
                  Chat Now →
                </button>

              </div>

              {/* VIDEO */}
              <div className="text-center sm:text-left">

                <div className="w-[72px] h-[72px] mx-auto sm:mx-0 rounded-full bg-[#0C7687] flex items-center justify-center mb-4">
                  <img
                    src="/faq3.png"
                    alt="Video"
                    className="w-[60px]"
                  />
                </div>

                <p className="text-[14px] text-gray-600 leading-relaxed">
                  Watch quick-start video tutorials and browse our self-service library
                </p>

                <button className="mt-3 text-[#0C7687] font-medium cursor-pointer">
                  Watch Now →
                </button>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
