"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What Black Friday offers are available on global travel SIMs?",
      a: "Our Black Friday offers include exclusive discounts on global eSIM plans, bonus data, and special credits for select packages."
    },
    {
      q: "Do the Black Friday deals include eSIM data bundles?",
      a: "Yes, all Black Friday deals include discounted eSIM data bundles with instant activation."
    },
    {
      q: "Can I use these SIMs for Europe or Asia travel?",
      a: "Absolutely. Our global eSIMs work seamlessly across Europe, Asia, and 220+ countries worldwide."
    },
    {
      q: "How does instant eSIM activation work during the sale?",
      a: "Once you purchase, your eSIM is delivered instantly via email and can be activated in minutes."
    },
    {
      q: "Are global data plans discounted for the holidays?",
      a: "Yes, holiday-exclusive pricing applies to most global and regional plans."
    },
    {
      q: "Do the Black Friday offers apply to both new and existing users?",
      a: "Yes, both new and existing Zoiko Orbit users can take advantage of Black Friday deals."
    },
    {
      q: "How long will the Black Friday travel SIM sale last?",
      a: "The sale is available for a limited time only, ending shortly after Black Friday."
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* HEADER */}
        <h2 className="text-center text-[32px] md:text-[36px] font-semibold text-gray-800 mb-14">
          Frequently Asked Questions
        </h2>

        {/* FAQ LIST */}
        <div className="divide-y border-t">

          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="py-6">
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-[16px] md:text-[17px] text-gray-800">
                    {item.q}
                  </span>

                  <ChevronRight
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-[15px] text-gray-600 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
