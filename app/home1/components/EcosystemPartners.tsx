"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const cards = [
  {
    title: "Retailers & Dealers",
    bullets: [
      "High-margin products, Custom POS kits",
      "Staff training & marketing toolkits.",
    ],
    cta: "Become an Authorised Dealer",
    img: "https://images.unsplash.com/photo-1556741533-974f8e62a92d?w=800&q=80",
  },
  {
    title: "Travel Agencies & OTAs",
    bullets: [
      "API & white-label integrations",
      "Add eSIM to every booking.",
    ],
    cta: "Integrate Zoiko Orbit",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
  },
  {
    title: "Travel Insurance Providers",
    bullets: [
      "Bundle eSIM into travel insurance.",
      "Global activation dashboards.",
    ],
    cta: "Offer Seamless Coverage",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
  },
  {
    title: "Airlines & Loyalty Programs",
    bullets: [
      "Enhance passenger connectivity",
      "Increase ancillary revenue streams.",
    ],
    cta: "Explore Airline Integrations",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
  },
  {
    title: "Hotels & Hospitality",
    bullets: [
      "Offer guests instant connectivity.",
      "Premium amenity, zero hardware.",
    ],
    cta: "Partner with Us",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  },
];

export default function EcosystemPartners() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [cardWidth, setCardWidth] = useState(380);

  // Calculate how many cards are visible & card width based on container size
  const updateLayout = useCallback(() => {
    if (!scrollRef.current) return;
    const containerWidth = scrollRef.current.clientWidth;

    let visible: number;
    let cw: number;

    if (containerWidth < 480) {
      visible = 1;
      cw = containerWidth - 32;
    } else if (containerWidth < 768) {
      visible = 1.2;
      cw = containerWidth * 0.82;
    } else if (containerWidth < 1024) {
      visible = 2;
      cw = (containerWidth - 48) / 2;
    } else {
      visible = 3;
      cw = (containerWidth - 48) / 3;
    }

    setVisibleCount(Math.floor(visible));
    setCardWidth(Math.floor(cw));
  }, []);

  useEffect(() => {
    updateLayout();
    const ro = new ResizeObserver(updateLayout);
    if (scrollRef.current) ro.observe(scrollRef.current);
    return () => ro.disconnect();
  }, [updateLayout]);

  // Total scrollable "pages" = total cards - visible cards + 1
  const dotCount = Math.max(1, cards.length - visibleCount + 1);

  const scrollToIndex = useCallback(
    (index: number) => {
      if (!scrollRef.current) return;
      const clamped = Math.max(0, Math.min(index, dotCount - 1));
      setActiveIndex(clamped);
      scrollRef.current.scrollTo({
        left: clamped * (cardWidth + 16),
        behavior: "smooth",
      });
    },
    [cardWidth, dotCount]
  );

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const index = Math.round(scrollRef.current.scrollLeft / (cardWidth + 16));
    setActiveIndex(Math.min(index, dotCount - 1));
  }, [cardWidth, dotCount]);

  return (
    <section className="bg-[#F0F6F8] px-4 sm:px-6 md:px-12 py-12">
      <div className="max-w-[1400px] mx-auto">

        {/* Header row */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#0C4A5E]">
            Ecosystem Partners
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scrollToIndex(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="px-3 sm:px-4 py-2 rounded-md border border-gray-300 text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              ‹ Previous
            </button>
            <button
              onClick={() => scrollToIndex(activeIndex + 1)}
              disabled={activeIndex >= dotCount - 1}
              className="px-3 sm:px-4 py-2 rounded-md border border-gray-300 text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              Next ›
            </button>
          </div>
        </div>

        {/* Cards — scrollbar hidden */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onScroll={handleScroll}
        >
          <style>{`
            .eco-scroll::-webkit-scrollbar { display: none; }
          `}</style>

          {cards.map((card, i) => (
            <div
              key={i}
              className="eco-scroll relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer"
              style={{ width: `${cardWidth}px`, height: "500px" }}
            >
              {/* Background image */}
              <img
                src={card.img}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Teal gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,80,90,0.95) 0%, rgba(10,100,110,0.75) 45%, rgba(20,120,130,0.35) 75%, transparent 100%)",
                }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-[18px] sm:text-[20px] font-bold mb-3 leading-snug">
                  {card.title}
                </h3>
                <ul className="space-y-1 mb-4">
                  {card.bullets.map((b, idx) => (
                    <li key={idx} className="text-[13px] sm:text-[14px] text-white/90">
                      • {b}
                    </li>
                  ))}
                </ul>
                <p className="text-[13px] sm:text-[14px] font-bold text-white">
                  {card.cta} →
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Dynamic dot indicators — one dot per scrollable position ── */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: activeIndex === i ? "28px" : "8px",
                height: "8px",
                backgroundColor: activeIndex === i ? "#0C7687" : "#b0cdd5",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}