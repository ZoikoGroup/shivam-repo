"use client";

export default function ContactConsultation() {
  return (
    <section className="relative bg-white py-12 md:py-16 lg:py-24 lg:pb-2 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-0 lg:-mt-9">
        <div className="relative lg:min-h-[600px]">
          {/* ================= LEFT IMAGE ================= */}
          <div className="w-full h-[280px] sm:h-[360px] lg:h-[520px] rounded-2xl lg:rounded-none overflow-hidden lg:overflow-visible">
            <img
              src="/pic5.png"
              alt="Global Travel"
              className="w-full h-full lg:absolute lg:inset-0 lg:w-full lg:h-full object-cover"
            />
          </div>

          {/* ================= RIGHT FORM CARD ================= */}
          <div className="relative lg:absolute lg:top-10 lg:left-[48%] xl:left-[53%] bg-white rounded-2xl shadow-2xl w-full max-w-[580px] mx-auto p-6 sm:p-8 md:p-10 lg:p-12 mt-6 lg:mt-0 z-10">
            <h2 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-gray-900 leading-snug">
              Let's Transform Your <br className="hidden sm:block" />
              Global Travel & Mobility Program.
            </h2>
            <p className="mt-3 text-[13px] sm:text-[14px] text-gray-600">
              Share a few details and our specialists will respond within 24
              hours
            </p>

            <form className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
              {/* Names */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="First Name *" placeholder="Enter First Name" />
                <Input label="Last Name *" placeholder="Enter Last Name" />
              </div>

              {/* Email / Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Business Email *"
                  placeholder="Enter Work Email"
                />
                <Input
                  label="Company / Organization *"
                  placeholder="Enter Company/Organization Name"
                />
              </div>

              {/* Phone / Country */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Phone (Intl friendly)"
                  placeholder="Enter Phone Number"
                />
                <Select
                  label="Country / Region *"
                  options={[
                    "USA",
                    "India",
                    "Europe",
                    "Canada",
                    "France",
                    "Other",
                  ]}
                />
              </div>

              {/* Inquiry */}
              <Select
                label="Inquiry Type *"
                options={[
                  "Corporate Travel",
                  "Remote Workforce",
                  "Bulk Deployment",
                  "Security Review",
                  "Integration",
                  "Other",
                ]}
              />

              {/* Message */}
              <Textarea label="Message" placeholder="Enter your message..." />

              {/* Checkbox */}
              <label className="flex items-start gap-2 text-[12px] sm:text-[13px] text-gray-600 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="mt-0.5 sm:mt-1 w-4 h-4 accent-[#00718A] cursor-pointer flex-shrink-0" 
                />
                <span>
                  I agree to be contacted by Zoiko Orbit regarding partner
                  opportunities.
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="w-full mt-3 bg-[#00718A] hover:bg-[#43b9ce] active:scale-[0.98] text-white py-3 sm:py-3.5 rounded-lg text-[14px] sm:text-[15px] font-semibold transition-all"
              >
                Submit & Schedule a Consultation
              </button>
            </form>
          </div>
        </div>

        {/* ================= WORLD MAP ================= */}
        <div className="mt-12 md:mt-16 lg:mt-16 opacity-50 md:opacity-60 hidden lg:block mb-10">
          <img
            src="/pic6.png"
            alt="map"
            className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[420px] mx-auto lg:ml-8 xl:ml-16"
          />
        </div>
      </div>
    </section>
  );
}

/* ================= INPUT ================= */
function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="block text-[11px] sm:text-[12px] text-gray-500 mb-1.5 font-medium">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="w-full bg-[#eeeeee] rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-gray-800 placeholder:text-gray-400 outline-none border border-transparent focus:border-[#00718A] focus:bg-white transition-all"
      />
    </div>
  );
}

/* ================= SELECT ================= */
function Select({
  label,
  options = [],
}: {
  label: string;
  options?: string[];
}) {
  return (
    <div>
      <label className="block text-[11px] sm:text-[12px] text-gray-500 mb-1.5 font-medium">
        {label}
      </label>
      <select
        className="w-full bg-[#eeeeee] rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-gray-800 outline-none border border-transparent focus:border-[#00718A] focus:bg-white transition-all appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3cpath%20fill%3D%22%23333%22%20d%3D%22M10.293%203.293L6%207.586%201.707%203.293A1%201%200%2000.293%204.707l5%205a1%201%200%20001.414%200l5-5a1%201%200%2010-1.414-1.414z%22%2F%3E%3c%2Fsvg%3E')] bg-[length:16px] bg-[right_0.75rem_center] bg-no-repeat pr-10"
      >
        <option className="text-gray-500">Select Option</option>
        {options.map((opt) => (
          <option className="text-gray-800" key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

/* ================= TEXTAREA ================= */
function Textarea({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="block text-[11px] sm:text-[12px] text-gray-500 mb-1.5 font-medium">
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        className="w-full h-[100px] sm:h-[120px] resize-none bg-[#eeeeee] rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-gray-800 placeholder:text-gray-400 outline-none border border-transparent focus:border-[#00718A] focus:bg-white transition-all"
      />
    </div>
  );
}