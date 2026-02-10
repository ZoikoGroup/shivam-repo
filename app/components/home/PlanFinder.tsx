import { AiOutlineRobot, AiOutlineCalendar } from "react-icons/ai";

export default function PlanFinder() {
  return (
    <>
      {/* ================= HEADER STRIP ================= */}
      <section className="w-full bg-[#EDF6FC]">
        <div className="max-w-[1400px] mx-auto px-6 py-16 text-center">
          <h2 className="text-[28px] md:text-[32px] font-semibold text-[#2B2B2B]">
            Choose Your Perfect Travel Plan
          </h2>

          <p className="mt-3 text-[14px] md:text-[15px] text-[#6B7280] max-w-[620px] mx-auto leading-relaxed">
            Compare all our SIM and eSIM packages. Find the best deal for your
            destination and stay connected worldwide.
          </p>
        </div>
      </section>

      {/* ================= AI PLAN FINDER CARD ================= */}
      <section className="bg-white py-14 shadow-2xl">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-gradient-to-r from-[#01728B] to-[#0995B3] rounded-2xl shadow-xl px-6 py-10 md:px-12 md:py-12">

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">

              {/* LEFT INFO */}
              <div className="flex items-start gap-4 text-white w-full lg:w-auto">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <AiOutlineRobot className="w-7 h-7 text-white" />
                </div>

                <div>
                  <h3 className="text-[22px] font-semibold">AI Plan Finder</h3>
                  <p className="text-white/90 text-[15px] mt-1">
                    Let our AI suggest the perfect plan for your trip
                  </p>
                </div>
              </div>

              {/* INPUTS + CTA */}
              <div className="flex flex-col lg:flex-row items-center gap-5 w-full">

                {/* DESTINATION */}
                <div className="w-full lg:w-[300px] text-left">
                  <label className="block text-white text-[14px] mb-2">
                    Where are you traveling?
                  </label>
                  <input
                    type="text"
                    placeholder="Enter destination or country"
                    className="
                      w-full bg-white/20 text-white placeholder-white/70
                      border border-white/30 rounded-xl px-4 py-3
                      outline-none focus:border-white
                    "
                  />
                </div>

                {/* DURATION */}
                <div className="w-full lg:w-[260px] text-left">
                  <label className="block text-white text-[14px] mb-2">
                    How long is your trip?
                  </label>

                  <div className="relative">
                    <select
                      className="
                        w-full bg-white/20 text-white
                        border border-white/30 rounded-xl px-4 py-3
                        appearance-none outline-none focus:border-white
                      "
                    >
                      <option className="text-gray-800">Select duration</option>
                      <option className="text-gray-800">1–3 days</option>
                      <option className="text-gray-800">4–7 days</option>
                      <option className="text-gray-800">8–15 days</option>
                      <option className="text-gray-800">16–30 days</option>
                    </select>

                    <AiOutlineCalendar className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-lg pointer-events-none" />
                  </div>
                </div>

                {/* CTA */}
                <button
                  className="
                    w-full lg:w-auto mt-2 lg:mt-6
                    bg-white text-[#01728B]
                    px-8 py-3 rounded-xl font-semibold
                    hover:bg-gray-100 transition
                  "
                >
                  Find My Perfect Plan
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
