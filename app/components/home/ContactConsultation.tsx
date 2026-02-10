"use client";

export default function ContactConsultation() {
  return (
    <section className="relative bg-white py-24 pb-0 overflow-x-hidden overflow-hidden">
      <div className="max-w-[1600px] mx-auto -mt-9 mb-10">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* ================= LEFT IMAGE ================= */}
          <div className="w-full lg:w-fit overflow-hidden h-[260px] sm:h-[360px] lg:h-[520px]">
            <img
              src="/pic5.png" // replace with your image
              alt="Global Travel"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* ================= RIGHT FORM CARD ================= */}
          <div className="relative lg:absolute mx-auto lg:mx-0 mt-10 lg:mt-10 lg:ml-190 bg-white rounded-2xl shadow-2xl w-full max-w-[580px] lg:w-2xl p-8 md:p-10 lg:p-12 overflow-hidden">
            <h2 className="text-[26px] md:text-[28px] font-semibold text-gray-900 leading-snug">
              Let’s Transform Your <br />
              Global Travel & Mobility Program.
            </h2>


.00
            <p className="mt-3 text-[14px] text-gray-600 -mb-3">
              Share a few details and our specialists will respond within 24
              hours
            </p>

            <form className="mt-8 space-y-5">
              {/* Names */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="First Name *" placeholder="Enter First Name" />
                <Input label="Last Name *" placeholder="Enter Last Name" />
              </div>

              {/* Email / Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Phone (Intl friendly)"
                  placeholder="Enter Phone Number"
                />
                <Select label="Country / Region *"
                options={[
                  "USA",
                  "India",
                  "Europe",
                  "Canada",
                  "France",
                  "Other",
                ]} />
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
              <label className=" flex items-start gap-2 text-[13px] text-gray-600">
                <input type="checkbox" className="mt-1 accent-[#00718A]" />I
                agree to be contacted by Zoiko Orbit regarding partner
                opportunities.
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="
    relative z-30
    w-full mt-3
    bg-[#00718A]
    hover:bg-[#43b9ce]
    active:scale-[0.98]
    text-white
    py-3
    rounded-lg
    cursor-pointer
    text-[14px]
    font-semibold
    transition
  "
              >
                Submit & Schedule a Consultation
              </button>
            </form>
          </div>
        </div>

        {/* ================= WORLD MAP ================= */}
        <div className="mt-16 opacity-60 hidden lg:block">
          <img
            src="/pic6.png"
            alt="map"
            className="w-[420px] mx-auto lg:ml-35"
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
      <label className="block text-[12px] text-gray-500 mb-1">{label}</label>
      <input
        placeholder={placeholder}
        className="
          w-full bg-[#eeeeee] rounded-lg px-4 py-3
          text-[14px] text-gray-800 outline-none
          border border-transparent
          focus:border-[#00718A] focus:bg-white
        "
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
      <label className="block text-[12px]  text-gray-500 mb-1">{label}</label>
      <select
        className="
          w-full bg-[#eeeeee] rounded-lg px-4 py-3
          text-[14px] text-gray-800 outline-none
          border border-transparent
          focus:border-[#00718A] focus:bg-white
        "
      >
        <option className="text-gray-500">Select Option</option>
        {options.map((opt) => (
          <option className="text-gray-800" key={opt}>
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
      <label className="block text-[12px] text-gray-500 mb-1">{label}</label>
      <textarea
        placeholder={placeholder}
        className="
    relative z-10
    w-full h-[120px] resize-none
    bg-[#eeeeee] rounded-lg px-4 py-3
    text-[14px] text-gray-800 outline-none
    border border-transparent
    focus:border-[#00718A] focus:bg-white
  "
      />
    </div>
  );
}
