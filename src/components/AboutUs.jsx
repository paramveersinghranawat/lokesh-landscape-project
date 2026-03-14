"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import CountUp from "./CountUp";

const STATS = [
  { end: 100000, suffix: " km+",      label: "Distribution Network" },
  { end: 3200,   suffix: "+",          label: "Substations Managed"  },
  { end: 28,     suffix: "+ States",   label: "Operations Span"      },
  { end: 35,     suffix: "+ Yrs",      label: "Years Experience"     },
];

const CHECKLIST = [
  "24/7 Distribution Network Monitoring & Control",
  "Seamless Renewable Energy Integration",
  "Advanced Infrastructure Upgrades & Smart Metering",
];

export default function AboutUs() {
  return (
    <>
      <section id="about" className="relative bg-white overflow-hidden">

        {/* top accent */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400 z-10" />

        <div className="pointer-events-none absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full
          border border-slate-100 bg-slate-50/60" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12 pt-20 pb-0">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

            {/* LEFT */}
            <div className="order-2 lg:order-1 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-9 bg-orange-600" />
                <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">
                  Who We Are
                </span>
              </div>

              <h2
                className="font-[700] leading-[0.92] text-slate-900 mb-6"
                style={{ fontSize: "clamp(2.6rem, 4.5vw, 3.8rem)" }}
              >
                Committed to<br />
                <span className="text-orange-700">Reliable Power</span><br />
                Distribution
              </h2>

              <div className="space-y-4 text-[15px] text-slate-500 leading-[1.85] mb-8">
                <p>
                  Lokesh Landscape is one of India&apos;s most trusted names in power distribution.
                  We operate and maintain an extensive distribution network spanning 28+ states,
                  delivering safe, uninterrupted electricity to homes, businesses, and industries
                  across the country.
                </p>
                <p>
                  With over 35 years of operational expertise, our mission is straightforward:
                  provide sustainable, reliable, and affordable power to every consumer we serve.
                </p>
              </div>

              <ul className="space-y-3 mb-10">
                {CHECKLIST.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14px] font-[600] text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3
                    bg-gradient-to-br from-orange-800 to-orange-600
                    text-white text-[12.5px] font-[700] tracking-[0.8px] uppercase
                    rounded-[7px] shadow-md shadow-orange-200
                    hover:-translate-y-[2px] transition-all duration-200 no-underline"
                >
                  Learn More About Us
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute top-0 left-0 w-7 h-7 border-t-[3px] border-l-[3px] border-orange-500 z-20" />
              <div className="absolute top-0 right-0 w-7 h-7 border-t-[3px] border-r-[3px] border-orange-500 z-20" />
              <div className="absolute bottom-32 left-0 w-7 h-7 border-b-[3px] border-l-[3px] border-orange-500 z-20" />
              <div className="absolute bottom-32 right-0 w-7 h-7 border-b-[3px] border-r-[3px] border-orange-500 z-20" />

              <div
                className="absolute -bottom-4 -right-4 w-full rounded-2xl border-2 border-orange-100 hidden lg:block"
                style={{ height: "calc(100% - 112px)" }}
              />

              <div
                className="rounded-2xl overflow-hidden relative z-10 group"
                style={{ boxShadow: "0 20px 60px rgba(154,52,18,0.15)" }}
              >
                <img
                  src="images/about-page/about.webp"
                  alt="Lokesh Landscape power substation"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ height: "460px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/25 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* STATS BAR */}
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 pt-8 pb-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {STATS.map((s, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-5 text-center shadow-sm hover:shadow-md hover:border-orange-100 transition-all duration-200">
                <div className="font-display text-[28px] lg:text-[32px] font-[700] text-orange-800 leading-none">
                  <CountUp end={s.end} suffix={s.suffix} />
                </div>
                <div className="text-[10px] font-[600] text-slate-400 uppercase tracking-[1.5px] mt-1.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}