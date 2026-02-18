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
      "Seamless connectivity everywhere I've traveled — plus I'm helping save animals. Best travel choice I've made all year.",
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
  {
    name: "Maria Garcia",
    location: "Madrid, Spain",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60",
    rating: 5,
    message:
      "Perfect for my business trips across Europe. Easy setup and reliable connection everywhere I go.",
  },
  {
    name: "David Chen",
    location: "Singapore",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60",
    rating: 5,
    message:
      "Great service and competitive pricing. The customer support team is always helpful and responsive.",
  },
];

export default function CustomerFeedback() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate how many cards to show based on screen size
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // Desktop: 3 cards
      if (window.innerWidth >= 768) return 2;  // Tablet: 2 cards
      return 1; // Mobile: 1 card
    }
    return 3;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  // Update cards per view on window resize
  useState(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setCardsPerView(getCardsPerView());
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  });

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  // Get visible testimonials
  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  return (
    <section className="relative bg-[#f4f7fb] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* DOTS DECORATION (behind buttons) */}
      <img
        src="/dots.png"
        alt=""
        className="pointer-events-none absolute -top-6 right-0 lg:right-16 w-[100px] lg:w-[140px] opacity-40 z-0 hidden md:block"
      />

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-14">
          <div>
            <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-semibold text-gray-900">
              Our Customer Feedback
            </h2>
            <p className="mt-2 text-[14px] sm:text-[15px] md:text-[16px] text-gray-600">
              Don't take our word for it. Trust our customers
            </p>
          </div>

          {/* NAV BUTTONS */}
          <div className="flex gap-3 self-start lg:self-auto">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-white transition disabled:opacity-50 disabled:cursor-not-allowed text-[13px] sm:text-[14px]"
            >
              <FiChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous</span>
            </button>
            <button
              onClick={next}
              disabled={currentIndex === maxIndex}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg border border-gray-300 text-gray-900 hover:bg-white transition disabled:opacity-50 disabled:cursor-not-allowed text-[13px] sm:text-[14px]"
            >
              <span className="hidden sm:inline">Next</span>
              <FiChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CARDS CONTAINER */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {visibleTestimonials.map((item, i) => (
              <div
                key={currentIndex + i}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-[14px] sm:text-[15px]">
                        {item.name}
                      </p>
                      <p className="text-[12px] sm:text-[13px] text-gray-500">
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1 text-[#2f4f9e] self-start sm:self-auto">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <FaStar
                        key={idx}
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                          idx < item.rating ? "" : "opacity-30"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed">
                  {item.message}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PAGINATION DOTS */}
        <div className="mt-8 sm:mt-10 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex ? "bg-gray-800 w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}