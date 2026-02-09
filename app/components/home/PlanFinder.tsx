import { AiOutlineRobot, AiOutlineCalendar } from "react-icons/ai";

export default function PlanFinder() {
  return (
    <section className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 text-center">
          {/* HEADER */}
          <h2 className="text-[32px] md:text-[40px] font-semibold text-gray-900">
            Choose Your Perfect Travel Plan
          </h2>
          <p className="mt-4 text-[16px] md:text-[18px] text-gray-600 max-w-[720px] mx-auto">
            Compare all our SIM and eSIM packages. Find the best deal for your
            destination and stay connected worldwide.
          </p>

          {/* CARD */}
          <div className="mt-14 bg-gradient-to-r from-[#01728B] to-[#0995B3] rounded-2xl shadow-xl px-6 py-10 md:px-12 md:py-12">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
              {/* LEFT CONTENT */}
              <div className="flex items-start gap-4 text-white w-full lg:w-auto">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  {/* simple bot icon */}
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 8v4l3 3" />
                    <rect x="4" y="6" width="16" height="14" rx="2" />
                    <path d="M9 2h6" />
                  </svg>
                </div>

                <div className="text-left">
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
                    className="w-full bg-white/20 text-white placeholder-white/70
                         border border-white/30 rounded-xl px-4 py-3
                         outline-none focus:border-white"
                  />
                </div>

                {/* DURATION */}
                <div className="w-full lg:w-[260px] text-left">
                  <label className="block text-white text-[14px] mb-2">
                    How long is your trip?
                  </label>
                  <div className="relative">
                    <select
                      className="w-full bg-white/20 text-white
                           border border-white/30 rounded-xl px-4 py-3
                           appearance-none outline-none focus:border-white"
                    >
                      <option className="text-gray-800">Select duration</option>
                      <option className="text-gray-800">1–3 days</option>
                      <option className="text-gray-800">4–7 days</option>
                      <option className="text-gray-800">8–15 days</option>
                      <option className="text-gray-800">16–30 days</option>
                    </select>

                    {/* calendar icon */}
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white">
                      📅
                    </span>
                  </div>
                </div>

                {/* BUTTON */}
                <button
                  className="w-full lg:w-auto mt-2 lg:mt-6
                       bg-white text-[#01728B]
                       px-8 py-3 rounded-xl font-semibold
                       hover:bg-gray-100 transition"
                >
                  Find My Perfect Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
