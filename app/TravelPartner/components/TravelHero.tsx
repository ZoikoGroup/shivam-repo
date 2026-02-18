export default function PartnerHero() {
  return (
    <section
      className="relative w-full min-h-[calc(105vh-90px)] overflow-hidden bg-white"
    >
      {/* Background Image */}
      <img
        src="/Tr-hero.png" 
        alt="Global eSIM partnership"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-15 lg:px-28 flex items-center min-h-[calc(100vh-90px)]">
        <div className="max-w-[720px] text-white">
          <h1 className="text-[32px] md:text-[44px] lg:text-[54px] font-semibold leading-tight">
            Grow Your Business with <br />
            Global eSIM Connectivity
          </h1>

          <p className="mt-5 text-[16px] md:text-[18px] text-white/90 leading-relaxed max-w-[640px]">
            Seamless eSIM solutions for travel agencies, OTAs,
            tour operators, and distributors.
          </p>

          <button
            className="
              mt-8 bg-[#4B6FBF] hover:bg-[#3f61aa] transition text-white px-8py-4 rounded-xl text-[16px]font-semibold"
          >
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
}