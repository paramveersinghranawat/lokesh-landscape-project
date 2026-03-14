"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "images/home-page/img-1.webp",
    tag: "Power Distribution",
    headline: ["Energising", "Every Home &", "Business"],
    subheadline:
      "Lokesh Landscape delivers safe, uninterrupted power distribution to millions of households and industries nationwide.",
    stat: { value: "99.98%", label: "Distribution Uptime" },
  },
  {
    id: 2,
    image: "images/home-page/img-2.webp",
    tag: "Smart Infrastructure",
    headline: ["Advanced", "Distribution", "Networks"],
    subheadline:
      "Intelligent metering, real-time monitoring and automated systems ensuring grid stability and peak efficiency.",
    stat: { value: "8M+", label: "Consumers Served" },
  },
  {
    id: 3,
    image: "images/home-page/img-3.webp",
    tag: "Sustainability",
    headline: ["Powering a", "Greener", "Tomorrow"],
    subheadline:
      "Integrating renewable energy sources into our distribution network for a cleaner, more sustainable future.",
    stat: { value: "35%", label: "Renewable Share" },
  },
];

const STATS = [
  { value: "35+", label: "Years of Excellence" },
  { value: "28+", label: "States Covered" },
  { value: "99.98%", label: "Reliability Index" },
  { value: "8,000+", label: "Skilled Workforce" },
  { value: "₹12,000 Cr", label: "Projects Delivered" },
  { value: "8 GW", label: "Distribution Capacity" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [busy, setBusy] = useState(false);
  const [tick, setTick] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const id = setInterval(() => {
      // Functional update to avoid stale closure on `current`
      setCurrent((c) => {
        const nextIdx = (c + 1) % slides.length;
        // manually trigger the fade transition state 
        setPrev(c);
        setBusy(true);
        setTick((t) => t + 1);
        setTimeout(() => {
          setPrev(null);
          setBusy(false);
        }, 900);
        return nextIdx;
      });
    }, 3000);
    return () => clearInterval(id);
  }, []); // Empty deps so the interval doesn't reset on every render

  // Manual navigation
  function go(idx) {
    if (busy || idx === current) return;
    setBusy(true);
    setPrev(current);
    setCurrent(idx);
    setTick((t) => t + 1);
    setTimeout(() => {
      setPrev(null);
      setBusy(false);
    }, 900);
  }

  const slide = slides[current];

  return (
    <>
  

      <div className="ptd-hero">

        <section
          className="ptd-hero-wrap relative overflow-hidden"
          style={{ height: "88vh", minHeight: "620px" }}
        >

          <div className="absolute top-0 left-0 right-0 h-[3px] z-30 bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />

          {slides.map((s, idx) => (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-[900ms] ${
                idx === current
                  ? "opacity-100 z-[2]"
                  : idx === prev
                  ? "opacity-0 z-[1]"
                  : "opacity-0 z-0"
              }`}
            >
              <div
                className={`absolute inset-0 bg-cover bg-center ${
                  idx === current ? "ptd-zoom" : ""
                }`}
                style={{ backgroundImage: `url(${s.image})` }}
              />
            </div>
          ))}

          <div className="absolute inset-0 z-[3] bg-black/60" />
          <div className="absolute inset-0 z-[3] bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 z-[3] bg-gradient-to-r from-orange-950/40 via-transparent to-transparent" />

          <div className="relative z-20 h-full flex flex-col justify-center max-w-[1320px] mx-auto px-6 lg:px-12">

            <div key={`tag-${tick}`} className="ptd-fade-up flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-orange-400" />
              <span className="text-[11px] font-[700] text-orange-300 uppercase tracking-[3px]">
                {slide.tag}
              </span>
            </div>

            <h1
              key={`h-${tick}`}
              className="ptd-fade-up text-white leading-[0.92] mb-6"
              style={{
                fontSize: "clamp(56px, 8vw, 92px)",
                fontWeight: 700,
                animationDelay: "0.05s",
              }}
            >
              {slide.headline[0]}
              <br />
              <span className="text-orange-500">{slide.headline[1]}</span>
              <br />
              {slide.headline[2]}
            </h1>

            <p
              key={`sub-${tick}`}
              className="ptd-fade-up text-[16px] text-slate-300 leading-[1.8] max-w-[560px] mb-8"
              style={{ animationDelay: "0.1s" }}
            >
              {slide.subheadline}
            </p>

            <div
              key={`cta-${tick}`}
              className="ptd-fade-up flex flex-wrap gap-3 items-center"
              style={{ animationDelay: "0.15s" }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-orange-800 to-orange-600
                  text-white text-[12.5px] font-[700] tracking-[0.8px] uppercase rounded-[7px]
                  shadow-md shadow-orange-900/40 hover:-translate-y-[2px] transition-all duration-200 no-underline"
              >
                Know More
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-white text-[12.5px] font-[700]
                  tracking-[0.8px] uppercase rounded-[7px] border border-white/30 hover:bg-white/10 transition-all duration-200 no-underline"
              >
                Contact
              </Link>
            </div>
          </div>

          <div
            key={`stat-${tick}`}
            className="ptd-fade-up absolute bottom-10 right-8 z-20 hidden lg:flex items-center gap-4 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              padding: "18px 26px",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-orange-600 text-white">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>

            <div>
              <p
                className="font-display text-white leading-none"
                style={{ fontSize: "2rem", fontWeight: 700 }}
              >
                {slide.stat.value}
              </p>

              <p className="text-[10px] font-[600] text-orange-300 uppercase tracking-[1.5px] mt-0.5">
                {slide.stat.label}
              </p>
            </div>
          </div>

          <button
            onClick={() => go((current - 1 + slides.length) % slides.length)}
            className="ptd-nav absolute left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full
              flex items-center justify-center text-white opacity-0 transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(8px)",
            }}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => go((current + 1) % slides.length)}
            className="ptd-nav absolute right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full
              flex items-center justify-center text-white opacity-0 transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(8px)",
            }}
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-orange-950/60 z-30">
            <div
              key={tick}
              className="ptd-progress h-full bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400 origin-left"
            />
          </div>
        </section>

        <section className="bg-white border-b border-slate-100">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-slate-100">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="py-8 px-4 text-center hover:bg-orange-50/40 transition-colors duration-150"
                >
                  <div className="font-display text-[36px] font-[700] text-orange-800 leading-none">
                    {s.value}
                  </div>
                  <div className="text-[10px] font-[600] text-slate-400 uppercase tracking-[1.5px] mt-1.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}