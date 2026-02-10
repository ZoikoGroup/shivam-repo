"use client";

import PlanFinder from "../components/home/PlanFinder";
import { Check, Calendar, Search } from "lucide-react";

export default function PlansPage() {
  return (
    <main className="bg-[#f6f9fc] min-h-screen">

      <PlanFinder />

      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-[1400px] mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
        {/* ========== FILTERS ========== */}
        <aside className="bg-[#E7F2FB] rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-4">Filter Plans</h3>

          <Filter title="Region">
            <Checkbox label="Europe (30 countries)" checked />
            <Checkbox label="Asia Pacific (15 countries)" />
            <Checkbox label="Americas (25 countries)" />
            <Checkbox label="Africa & Middle East" />
            <Checkbox label="Global (200+ countries)" />
          </Filter>

          <Filter title="Data Allowance">
            <Checkbox label="1–5 GB" />
            <Checkbox label="6–10 GB" />
            <Checkbox label="11–20 GB" />
            <Checkbox label="Unlimited" />
          </Filter>

          <Filter title="Type">
            <Checkbox label="Both pSIM & eSIM" checked />
            <Checkbox label="eSIM Only" />
            <Checkbox label="Physical SIM" />
          </Filter>

          <Filter title="Duration">
            <Checkbox label="1–8 days" checked />
            <Checkbox label="8–15 days" />
            <Checkbox label="15–30 days" />
          </Filter>
        </aside>

        {/* ========== PLANS ========== */}
        <div>
          {/* HEADER */}
          <div className="bg-white rounded-xl p-5 mb-6 flex justify-between items-center shadow-sm ">
            <div>
              <h4 className="font-semibold text-gray-900">4 plans found</h4>
              <p className="text-sm text-gray-500">
                Perfect for your travel needs
              </p>
            </div>
            <select className="border rounded-lg px-3 py-2 text-sm text-gray-400 ">
              <option>Most Popular</option>
            </select>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <Plan
              title="Orbit Explore"
              price="$06"
              badge="MOST POPULAR"
              sold="150 SOLD TODAY"
              features={[
                "30 Europe & UK countries",
                "2GB high-speed data",
                "Instant activation",
                "No calls & SMS",
              ]}
              accent="blue"
            />

            <Plan
              title="Orbit Explore"
              price="$13"
              sold="89 SOLD TODAY"
              features={[
                "30 Europe & UK countries",
                "7GB high-speed data",
                "5G network ready",
                "24/7 support",
              ]}
            />

            <Plan
              title="Orbit Wild"
              price="$20"
              badge="PREMIUM"
              sold="43 SOLD TODAY"
              features={[
                "30 Europe & UK countries",
                "15GB high-speed data",
                "Premium network priority",
                "Concierge support",
              ]}
              accent="orange"
            />

            <Plan
              title="Orbit Roam"
              price="$30"
              sold="67 SOLD TODAY"
              features={[
                "30 Europe & UK countries",
                "30GB high-speed data",
                "Instant QR activation",
                "Hotspot enabled",
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function Plan({ title, price, badge, sold, features, accent = "gray" }: any) {
  return (
    <div
      className={`bg-white rounded-xl border-2 p-6 border shadow-sm
      ${accent === "blue" && "border-[#00718A]"}
      ${accent === "orange" && "border-orange-400"}`}
    >
      <div className="flex gap-2 mb-3">
        {badge && (
          <span
            className={`text-xs px-3 py-1 rounded-full font-semibold
            ${accent === "orange" ? "bg-orange-400 text-white" : "bg-[#00718A] text-white"}`}
          >
            {badge}
          </span>
        )}
        <span className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full font-semibold">
          {sold}
        </span>
      </div>

      <div className="flex justify-between mb-4">
        <h3 className="font-semibold">{title}</h3>
        <div className="text-right">
          <span className="text-2xl font-bold text-[#00718A]">{price}</span>
          <p className="text-xs text-gray-500">/8 days</p>
        </div>
      </div>

      <ul className="space-y-3 text-sm">
        {features.map((f: string) => (
          <li key={f} className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#00718A]" />
            {f}
          </li>
        ))}
      </ul>

      <button
        className={`mt-5 w-full py-3 rounded-lg font-semibold text-white
          ${accent === "orange" ? "bg-orange-400 hover:bg-orange-500" : "bg-[#00718A] hover:bg-[#005e72]"}`}
      >
        Buy Now →
      </button>
    </div>
  );
}

function Filter({ title, children }: any) {
  return (
    <div className="mb-6">
      <h4 className="text-sm font-semibold mb-3">{title}</h4>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function Checkbox({ label, checked }: any) {
  return (
    <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
      <input
        type="checkbox"
        defaultChecked={checked}
        className="accent-[#00718A]"
      />
      {label}
    </label>
  );
}
