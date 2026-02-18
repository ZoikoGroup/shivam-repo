"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Search, User, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submenu, setSubmenu] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [showMyOrbit, setShowMyOrbit] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({ name: "English", code: "us" });
  const pathname = usePathname();

  const toggleSubmenu = (name: string) => {
    setSubmenu(submenu === name ? null : name);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-[#00718A]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="font-sans flex items-center justify-between h-[70px] lg:h-[90px]">
          {/* LEFT SECTION */}
          <div className="flex items-center gap-4 lg:gap-14">
            {/* LOGO */}
            <Link href="#" className="flex-shrink-0">
              <img
                src="https://zoikoorbit.com/wp-content/uploads/2025/07/Group-1597883151.png"
                alt="Zoiko Orbit"
                className="h-10 w-auto lg:h-17 lg:w-37"
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden xl:flex items-center gap-9 text-white text-[18px] font-normal py-[13px]">
              <Link
                href="/"
                className={`hover:opacity-60 transition-all ${
                  isActive("/")
                    ? "font-semibold text-[20px] scale-110"
                    : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`hover:opacity-60 transition-all ${
                  isActive("/about")
                    ? "font-semibold text-[20px] scale-110"
                    : ""
                }`}
              >
                About Us
              </Link>

              {/* SOLUTIONS */}
              <div className="relative group">
                <button
                  className={`flex items-center gap-1.5 hover:opacity-60 transition-all ${
                    ["/PersonalTraveller", "/Enterprise", "/Ecosystem"].includes(
                      pathname
                    )
                      ? "font-semibold text-[20px]"
                      : ""
                  }`}
                >
                  Solutions
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                <div className="absolute left-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-lg py-2 w-[240px]">
                    {[
                      {
                        label: "For Personal Travelers",
                        href: "/PersonalTraveller",
                      },
                      { label: "For Enterprises", href: "/Enterprise" },
                      { label: "For Ecosystem Partners", href: "/Ecosystem" },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={`block px-5 py-2.5 text-gray-700 text-[14px] hover:bg-[#0d7c92] hover:text-white transition-colors ${
                          isActive(item.href)
                            ? "bg-[#0d7c92] text-white font-semibold"
                            : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/plans"
                className={`hover:opacity-60 transition-all ${
                  isActive("/plans")
                    ? "font-semibold text-[20px] scale-110"
                    : ""
                }`}
              >
                Plans
              </Link>

              {/* ECOSYSTEM */}
              <div className="relative group">
                <button
                  className={`flex items-center gap-1.5 hover:opacity-60 transition-all ${
                    [
                      "/Traveller",
                      "/BusinessAndEnterprises",
                      "/TravelPartner",
                      "/Impact",
                    ].includes(pathname)
                      ? "font-semibold text-[20px]"
                      : ""
                  }`}
                >
                  Ecosystem Partners
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                <div className="absolute left-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-lg py-2 w-[240px]">
                    {[
                      { label: "Travelers", href: "/Traveller" },
                      {
                        label: "Businesses & Enterprises",
                        href: "/BusinessAndEnterprises",
                      },
                      {
                        label: "Travel Partners & Agencies",
                        href: "/TravelPartner",
                      },
                      { label: "Our Impact", href: "/Impact" },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={`block px-5 py-2.5 text-gray-700 text-[14px] hover:bg-[#0d7c92] hover:text-white transition-colors ${
                          isActive(item.href)
                            ? "bg-[#0d7c92] text-white font-semibold"
                            : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/Support"
                className={`hover:opacity-60 transition-all ${
                  isActive("/Support")
                    ? "font-semibold text-[20px] scale-110"
                    : ""
                }`}
              >
                Support
              </Link>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-3 lg:gap-7">
            {/* SEARCH */}
            <div className="relative">
              <button
                onClick={() => setShowSearch((prev) => !prev)}
                className="text-white hover:opacity-60 p-2"
                aria-label="Search"
              >
                <Search className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>

              {showSearch && (
                <div className="absolute right-0 top-full mt-3 z-50">
                  <div className="bg-white rounded-lg shadow-xl px-4 py-3 w-[260px]">
                    <input
                      type="text"
                      placeholder="Search…"
                      autoFocus
                      className="w-full text-[14px] text-gray-800 placeholder-gray-400 outline-none border border-gray-200 rounded-lg px-3 py-2 focus:border-[#00718A]"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* MY ORBIT - Desktop only */}
            <div className="relative hidden lg:block">
              <button 
                onClick={() => setShowMyOrbit(!showMyOrbit)}
                className="flex items-center gap-3 bg-white text-[#00718A] px-5 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <User className="w-5 h-5 text-[#00718A]" />
                <span className="text-[16px] font-medium">My Orbit</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showMyOrbit ? 'rotate-180' : ''}`} />
              </button>

              {showMyOrbit && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowMyOrbit(false)} />
                  <div className="absolute right-0 top-full mt-2 z-50">
                    <div className="bg-white rounded-lg shadow-lg py-2 w-[180px]">
                      <Link
                        href="/SignInForm"
                        className="block px-5 py-2.5 text-gray-700 text-[14px] hover:bg-[#00718A] hover:text-white transition-colors"
                        onClick={() => setShowMyOrbit(false)}
                      >
                        Sign In
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* LANGUAGE - Desktop only */}
            <div className="relative hidden lg:block">
              <button 
                onClick={() => setShowLanguage(!showLanguage)}
                className="flex items-center gap-2 text-white hover:opacity-80"
              >
                <img
                  src={`https://flagcdn.com/w40/${selectedLanguage.code}.png`}
                  className="w-6 h-4 object-cover"
                  alt={selectedLanguage.name}
                />
                <span className="text-[18px] font-semibold">
                  {selectedLanguage.code === 'us' ? 'EN' : 
                   selectedLanguage.code === 'sa' ? 'AR' :
                   selectedLanguage.code === 'nl' ? 'NL' :
                   selectedLanguage.code === 'fr' ? 'FR' :
                   selectedLanguage.code === 'de' ? 'DE' :
                   selectedLanguage.code === 'it' ? 'IT' :
                   selectedLanguage.code === 'pt' ? 'PT' :
                   selectedLanguage.code === 'es' ? 'ES' :
                   selectedLanguage.code === 'in' ? 'HI' :
                   selectedLanguage.code === 'jp' ? 'JA' :
                   selectedLanguage.code === 'kr' ? 'KO' :
                   selectedLanguage.code === 'cn' ? 'ZH' :
                   selectedLanguage.code === 'ru' ? 'RU' : 'EN'}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showLanguage ? 'rotate-180' : ''}`} />
              </button>

              {showLanguage && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowLanguage(false)} />
                  <div className="absolute right-0 top-full mt-3 z-50">
                    <div className="bg-white rounded-xl shadow-xl py-2 w-[200px] max-h-[260px] overflow-y-auto">
                      {[
                        ["English", "us"],
                        ["Arabic", "sa"],
                        ["Dutch", "nl"],
                        ["French", "fr"],
                        ["German", "de"],
                        ["Italian", "it"],
                        ["Portuguese", "pt"],
                        ["Spanish", "es"],
                        ["Hindi", "in"],
                        ["Japanese", "jp"],
                        ["Korean", "kr"],
                        ["Chinese", "cn"],
                        ["Russian", "ru"],
                      ].map(([name, code]) => (
                        <button
                          key={name}
                          onClick={() => {
                            setSelectedLanguage({ name, code });
                            setShowLanguage(false);
                          }}
                          className={`w-full flex items-center gap-3 px-5 py-2.5 text-gray-800 text-[14px] font-medium hover:bg-[#0d7c92] hover:text-white transition-colors ${
                            selectedLanguage.code === code ? 'bg-[#0d7c92] text-white' : ''
                          }`}
                        >
                          <img
                            src={`https://flagcdn.com/w40/${code}.png`}
                            className="w-6 h-4 object-cover"
                            alt={name}
                          />
                          {name}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* HAMBURGER - Mobile only */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden text-white p-2 transition"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="xl:hidden fixed inset-0 top-[70px] bg-black/30 z-40" onClick={() => setMobileOpen(false)}>
            <div 
              className="absolute left-0 top-0 h-full w-[85%] max-w-[380px] bg-white overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Home */}
              <Link
                href="/"
                className={`block px-6 py-4 text-[16px] text-gray-800 hover:bg-gray-50 ${
                  isActive("/") ? "font-semibold bg-gray-100" : ""
                }`}
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>

              {/* About */}
              <Link
                href="/about"
                className={`block px-6 py-4 text-[16px] text-gray-800 hover:bg-gray-50 ${
                  isActive("/about") ? "font-semibold bg-gray-100" : ""
                }`}
                onClick={() => setMobileOpen(false)}
              >
                About Us
              </Link>

              {/* SOLUTIONS */}
              <button
                onClick={() => toggleSubmenu("solutions")}
                className={`w-full flex items-center justify-between px-6 py-4 text-[16px] text-gray-800 hover:bg-gray-50 ${
                  ["/PersonalTraveller", "/Enterprise", "/Ecosystem"].includes(
                    pathname
                  )
                    ? "font-semibold bg-gray-100"
                    : ""
                }`}
              >
                Solutions
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    submenu === "solutions" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {submenu === "solutions" && (
                <div className="bg-gray-50">
                  {[
                    { label: "For Personal Travelers", href: "/PersonalTraveller" },
                    { label: "For Enterprises", href: "/Enterprise" },
                    { label: "For Ecosystem Partners", href: "/Ecosystem" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`block pl-10 pr-6 py-3 text-[15px] text-gray-700 hover:bg-gray-100 ${
                        isActive(item.href)
                          ? "font-semibold bg-gray-100"
                          : ""
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Coverage */}
              <Link
                href="/coverage"
                className={`block px-6 py-4 text-[16px] text-gray-800 hover:bg-gray-50 ${
                  isActive("/coverage") ? "font-semibold bg-gray-100" : ""
                }`}
                onClick={() => setMobileOpen(false)}
              >
                Coverage
              </Link>

              {/* Plans */}
              <Link
                href="/plans"
                className={`block px-6 py-4 text-[16px] text-gray-800 hover:bg-gray-50 ${
                  isActive("/plans") ? "font-semibold bg-gray-100" : ""
                }`}
                onClick={() => setMobileOpen(false)}
              >
                Plans
              </Link>

              {/* ECOSYSTEM */}
              <button
                onClick={() => toggleSubmenu("ecosystem")}
                className={`w-full flex items-center justify-between px-6 py-4 text-[16px] text-gray-800 hover:bg-gray-50 ${
                  [
                    "/Traveller",
                    "/BusinessAndEnterprises",
                    "/TravelPartner",
                    "/Impact",
                  ].includes(pathname)
                    ? "font-semibold bg-gray-100"
                    : ""
                }`}
              >
                Ecosystem Partners
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    submenu === "ecosystem" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {submenu === "ecosystem" && (
                <div className="bg-gray-50">
                  {[
                    { label: "Travelers", href: "/Traveller" },
                    {
                      label: "Businesses & Enterprises",
                      href: "/BusinessAndEnterprises",
                    },
                    {
                      label: "Travel Partners & Agencies",
                      href: "/TravelPartner",
                    },
                    { label: "Our Impact", href: "/Impact" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`block pl-10 pr-6 py-3 text-[15px] text-gray-700 hover:bg-gray-100 ${
                        isActive(item.href)
                          ? "font-semibold bg-gray-100"
                          : ""
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Support */}
              <Link
                href="/Support"
                className={`block px-6 py-4 text-[16px] text-gray-800 hover:bg-gray-50 ${
                  isActive("/Support") ? "font-semibold bg-gray-100" : ""
                }`}
                onClick={() => setMobileOpen(false)}
              >
                Support
              </Link>

              {/* MY ORBIT - Mobile */}
              <div className="px-6 py-6">
                <button
                  onClick={() => toggleSubmenu("myorbit")}
                  className="w-full flex items-center justify-between py-3 px-4 bg-[#00718A] text-white rounded-lg font-medium text-[15px]"
                >
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    <span>My Orbit</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      submenu === "myorbit" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {submenu === "myorbit" && (
                  <div className="mt-2">
                    <Link
                      href="/SignInForm"
                      className="block px-4 py-3 text-[15px] text-gray-700 hover:bg-gray-100 rounded"
                      onClick={() => setMobileOpen(false)}
                    >
                      Sign In
                    </Link>
                  </div>
                )}
              </div>

              {/* LANGUAGE - Mobile */}
              <div className="px-6 py-6">
                <button
                  onClick={() => toggleSubmenu("language")}
                  className="w-full flex items-center justify-between py-3 px-4 bg-gray-100 rounded-lg text-gray-800 font-medium text-[15px]"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={`https://flagcdn.com/w40/${selectedLanguage.code}.png`}
                      className="w-6 h-4 object-cover"
                      alt={selectedLanguage.name}
                    />
                    <span>{selectedLanguage.name}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      submenu === "language" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {submenu === "language" && (
                  <div className="mt-2 space-y-1">
                    {[
                      ["English", "us"],
                      ["Arabic", "sa"],
                      ["Dutch", "nl"],
                      ["French", "fr"],
                      ["German", "de"],
                      ["Italian", "it"],
                      ["Portuguese", "pt"],
                      ["Spanish", "es"],
                      ["Hindi", "in"],
                      ["Japanese", "jp"],
                      ["Korean", "kr"],
                      ["Chinese", "cn"],
                      ["Russian", "ru"],
                    ].map(([name, code]) => (
                      <button
                        key={name}
                        onClick={() => {
                          setSelectedLanguage({ name, code });
                          setSubmenu(null);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-[15px] text-gray-700 hover:bg-gray-100 rounded ${
                          selectedLanguage.code === code ? 'bg-gray-100 font-semibold' : ''
                        }`}
                      >
                        <img
                          src={`https://flagcdn.com/w40/${code}.png`}
                          className="w-6 h-4 object-cover"
                          alt={name}
                        />
                        {name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}