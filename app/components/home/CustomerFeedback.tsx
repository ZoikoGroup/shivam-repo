"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Testimonial = {
  name: string;
  location: string;
  image: string;
  rating: number;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah Thompson",
    location: "New York, USA",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60",
    rating: 5,
    message:
      "Seamless connectivity everywhere I’ve traveled — plus I'm helping save animals. Best travel choice I've made all year.",
  },
  {
    name: "James Fielding",
    location: "London, UK",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60",
    rating: 5,
    message:
      "Zoiko Orbit integrated effortlessly into our agency's portfolio. Clients love that it combines tech with a mission.",
  },
  {
    name: "Nkechi Okafor",
    location: "Lagos, Nigeria",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60",
    rating: 4,
    message:
      "From Lagos to Dubai, my eSIM worked instantly. Proud to support a brand that helps animal shelters.",
  },
];

export default function CustomerFeedback() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-[#f4f7fb] py-24 overflow-hidden">
      {/* HEADER */}

      {/* DOTS DECORATION (behind buttons) */}
      <img
        src="/dots.png"
        alt=""
        className="mt-10 mr-16 pointer-events-none absolute -top-6 right-0 w-[140px] opacity-40 z-0 hidden lg:block"/>

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-14">
          <div>
            <h2 className="text-[32px] md:text-[38px] font-semibold text-gray-900">
              Our Customer Feedback
            </h2>
            <p className="mt-2 text-[16px] text-gray-600">
              Don’t take our word for it. Trust our customers
            </p>
          </div>

          {/* NAV BUTTONS */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-white transition"
            >
              <FiChevronLeft />
              Previous
            </button>
            <button
              onClick={next}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-900 hover:bg-white transition"
            >
              Next
              <FiChevronRight />
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <p className="font-semibold text-gray-900 text-[15px]">
                    {item.name} — {item.location}
                  </p>
                </div>

                <div className="flex gap-1 text-[#2f4f9e]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <FaStar
                      key={idx}
                      className={idx < item.rating ? "" : "opacity-30"}
                    />
                  ))}
                </div>
              </div>

              <p className="text-[14px] text-gray-600 leading-relaxed">
                {item.message}
              </p>
            </div>
          ))}
        </div>

        {/* PAGINATION DOTS */}
        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-gray-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
