export default function WhatWeOffer() {
  return (
    <section className="relative bg-[#F7FBFE] py-24 overflow-hidden">
      {/* Optional Grid Background */}
      {/* <img src="/grid.png" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" /> */}

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[30px] md:text-[36px] font-semibold text-gray-900">
            What We Offer
          </h2>
          <p className="mt-3 text-[15px] text-gray-600">
            Zoiko Orbit Support Center — always on, always with you.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 text-center justify-items-center">
          <OfferItem
            icon="/ota1.png"
            title="Embedded eSIM Solutions"
            desc="Offer data plans directly at checkout, post-booking, or via custom portals"
          />

          <OfferItem
            icon="/ota2.png"
            title="Flexible Integration"
            desc="API, widget, and plug-in options for mobile apps, CRM platforms, and confirmation emails"
          />

          <OfferItem
            icon="/ota3.png"
            title="Instant Delivery"
            desc="Secure QR codes or in-app activation — no hardware shipping, or wait times"
          />

          <OfferItem
            icon="/ota4.png"
            title="Multi-Tier Revenue Models"
            desc="Choose from affiliate, revenue share, white-label, or direct licensing model"
          />

          <OfferItem
            icon="/ota5.png"
            title="Real-Time Reporting"
            desc="Monitor transactions, redemptions, and commissions via your partner dashboard"
          />

          <OfferItem
            icon="/ota6.png"
            title="Global Customer Support"
            desc="24/7 enterprise-grade support with multilingual capabilities"
          />
        </div>
      </div>
    </section>
  );
}

/* ================= ITEM ================= */
function OfferItem({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="max-w-[260px]">
      {/* Icon Circle */}
      <div className="w-[88px] h-[88px] mx-auto rounded-full bg-[#0C7687] flex items-center justify-center mb-6">
        <img
          src={icon}
          alt={title}
          className="w-[88px] h-[88px] object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-[16px] font-semibold text-gray-900 mb-2">{title}</h3>

      {/* Description */}
      <p className="text-[14px] text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}
