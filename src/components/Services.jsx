"use client";

import Link from "next/link";
import { Zap, Home, Cpu, Sun, Building2, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Power Distribution",
    desc: "Safe and efficient distribution of electricity to residential, commercial, and industrial consumers across our network.",
    Icon: Zap,
    stat: "33 kV",
    statLabel: "Distribution Voltage",
  },
  {
    title: "Last-Mile Connectivity",
    desc: "Ensuring every home and business receives consistent, quality electricity through our extensive last-mile network.",
    Icon: Home,
    stat: "8M+",
    statLabel: "Consumers",
  },
  {
    title: "Smart Metering & AMI",
    desc: "Advanced metering infrastructure providing real-time consumption data, automated billing, and demand-side management.",
    Icon: Cpu,
    stat: "99.95%",
    statLabel: "Meter Accuracy",
  },
  {
    title: "Renewable Integration",
    desc: "Connecting rooftop solar, wind, and distributed energy resources seamlessly into the distribution grid.",
    Icon: Sun,
    stat: "8 GW",
    statLabel: "Capacity Managed",
  },
  {
    title: "Substation Development",
    desc: "Building and modernising distribution substations to enhance reliability, safety, and capacity for future demand.",
    Icon: Building2,
    stat: "3,200+",
    statLabel: "Substations",
  },
  {
    title: "Safety & Compliance",
    desc: "Operating with the highest safety standards and regulatory compliance to protect consumers and our workforce.",
    Icon: ShieldCheck,
    stat: "ISO 9001",
    statLabel: "Certified",
  },
];

export default function Services() {
  return (
    <>
      {/* All .svc-card styles are defined globally in globals.css */}

      <section id="services" className="relative bg-slate-50 border-y border-slate-100 overflow-hidden">

        {/* top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />

        {/* background decoration */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full
          border border-slate-200 bg-white/60" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[360px] h-[360px] rounded-full
          border border-slate-100 bg-white/40" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12 py-20 lg:py-28">

          {/* Section header */}
          <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-9 bg-orange-600" />
                <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">
                  Our Expertise
                </span>
              </div>

              <h2 className="font-[700] leading-[0.92] text-slate-900"
                style={{ fontSize: "clamp(2.6rem, 4.5vw, 3.8rem)" }}>
                Power Distribution<br />
                <span className="text-orange-700">Solutions</span>
              </h2>
            </div>

            <div className="lg:max-w-md lg:ml-auto">
              <p className="text-[15px] text-slate-500 leading-[1.85] mb-6">
                From high-voltage substations to last-mile consumer connections, Lokesh Landscape
                delivers integrated power distribution services that keep modern life running.
              </p>

              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3
                  bg-gradient-to-br from-orange-800 to-orange-600
                  text-white text-[12.5px] font-[700] tracking-[0.8px] uppercase
                  rounded-[7px] shadow-md shadow-orange-200
                  hover:-translate-y-[2px] transition-all duration-200 no-underline">
                Get In Touch
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <div key={i}
                className="svc-card group relative bg-white border border-slate-200 rounded-2xl p-7
                  hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50
                  hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col gap-5">

                <div className="flex items-start justify-between">
                  <div className="svc-icon-wrap w-12 h-12 rounded-xl bg-orange-50 border border-orange-100
                    flex items-center justify-center text-orange-700 transition-all duration-300">
                    <svc.Icon size={22} />
                  </div>

                  <div className="text-right">
                    <p className="font-display text-[1.5rem] font-[700] text-orange-800 leading-none">
                      {svc.stat}
                    </p>
                    <p className="text-[10px] font-[600] text-slate-400 uppercase tracking-[1.5px] mt-0.5">
                      {svc.statLabel}
                    </p>
                  </div>
                </div>

                <div className="h-px bg-slate-100" />

                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-[16px] font-[700] text-slate-800 group-hover:text-orange-800 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-[13.5px] text-slate-500 leading-[1.75]">{svc.desc}</p>
                </div>

                <div className="flex items-center gap-1.5 text-[12px] font-[700] text-orange-700 uppercase tracking-[0.8px]">
                  Learn More
                  <svg className="svc-arrow w-3 h-3" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>

                <span className="svc-bar" />
              </div>
            ))}
          </div>

          {/* Bottom stats */}
          <div className="mt-14 bg-white border border-slate-200 rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 4px 24px rgba(120,40,15,0.06)" }}>

            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100">
              {[
                { v: "35+", l: "Years of Excellence" },
                { v: "₹12,000 Cr", l: "Projects Delivered" },
                { v: "8,000+", l: "Skilled Workforce" },
                { v: "100,000 km+", l: "Distribution Lines" },
              ].map((s, i) => (
                <div key={i} className="py-7 px-6 text-center hover:bg-orange-50/40 transition-colors duration-150">
                  <div className="font-display text-[2rem] font-[700] text-orange-800 leading-none">{s.v}</div>
                  <div className="text-[10px] font-[600] text-slate-400 uppercase tracking-[1.5px] mt-1.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}