"use client";

import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const news = [
  {
    id: 1,
    category: "Infrastructure",
    title: "New Distribution Substation Commissioned in Rajasthan",
    summary: "Lokesh Landscape's ₹290 Cr substation project in Jaipur district will improve power reliability for 4.5 lakh consumers and reduce outage time by 60%.",
    date: "Mar 05, 2026",
    image: "images/news-page/news-1.webp",
  },
  {
    id: 2,
    category: "Renewables",
    title: "Solar Net Metering Programme Expands to 5 New States",
    summary: "Our net metering initiative now covers 15 states, enabling 200,000+ households to feed surplus solar energy into the distribution grid.",
    date: "Feb 18, 2026",
    image: "images/news-page/news-1.webp",
  },
  {
    id: 3,
    category: "Maintenance",
    title: "Smart Meter Rollout Completes for Delhi & NCR Region",
    summary: "Over 1.2 million advanced smart meters installed across Delhi-NCR, enabling real-time monitoring, automated billing, and faster fault detection.",
    date: "Feb 02, 2026",
    image: "images/news-page/news-2.webp",
  },
];

const categoryColor = {
  Infrastructure: "bg-orange-50 text-orange-700 border-orange-100",
  Renewables: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Maintenance: "bg-amber-50 text-amber-700 border-amber-100",
};

export default function NewsUpdates() {
  const [featured, ...rest] = news;

  return (
    <>
      {/* All .news-card styles are defined globally in globals.css */}

      <section id="news" className="relative bg-white overflow-hidden">

        {/* top accent */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />

        {/* dot grid */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 opacity-30"
          style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "18px 18px" }} />

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12 py-20 lg:py-28">

          {/* header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-9 bg-orange-600" />
                <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">
                  Latest Updates
                </span>
              </div>

              <h2 className="font-[700] leading-[0.92] text-slate-900"
                style={{ fontSize: "clamp(2.6rem, 4.5vw, 3.8rem)" }}>
                News &amp; <span className="text-orange-700">Announcements</span>
              </h2>
            </div>

            <Link href="#all-news"
              className="inline-flex items-center gap-2 px-6 py-3 self-start sm:self-auto
                text-orange-800 text-[12.5px] font-[700] tracking-[0.8px] uppercase
                border border-orange-200 rounded-[7px] bg-white
                hover:bg-orange-50 hover:border-orange-400 transition-all duration-200 no-underline group">
              View All News
              <ArrowRight size={14} className="news-arrow" />
            </Link>
          </div>

          {/* grid */}
          <div className="grid lg:grid-cols-5 gap-5">

            {/* featured */}
            <article className="news-card lg:col-span-3 relative group bg-white border border-slate-200
              rounded-2xl overflow-hidden hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50
              hover:-translate-y-1 transition-all duration-300 flex flex-col"
              style={{ boxShadow: "0 4px 24px rgba(120,40,15,0.06)" }}>

              <div className="relative overflow-hidden h-64 lg:h-72 flex-shrink-0">
                <img src={featured.image} alt={featured.title}
                  className="news-img w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className={`text-[10px] font-[700] uppercase tracking-[1.5px] px-3 py-1 rounded-full border ${categoryColor[featured.category]}`}>
                    {featured.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white/80 text-[12px] font-[500]">
                  <Calendar size={13} />
                  {featured.date}
                </div>
              </div>

              <div className="flex flex-col flex-1 p-7 gap-4">
                <h3 className="font-[700] leading-[1.05] text-slate-900 group-hover:text-orange-800 transition-colors"
                  style={{ fontSize: "clamp(1.5rem, 2vw, 1.9rem)" }}>
                  {featured.title}
                </h3>

                <p className="text-[14px] text-slate-500 leading-[1.8] flex-1">
                  {featured.summary}
                </p>

                <div className="pt-5 border-t border-slate-100 mt-auto flex items-center justify-between">
                  <Link href={`#news-${featured.id}`}
                    className="inline-flex items-center gap-1.5 text-[12px] font-[700] text-orange-700 uppercase tracking-[0.8px] no-underline">
                    Read More
                    <ArrowRight size={13} className="news-arrow" />
                  </Link>

                  <span className="text-[10px] font-[600] text-slate-400 uppercase tracking-[1.5px]">
                    Featured
                  </span>
                </div>
              </div>

              <span className="news-bar" />
            </article>

            {/* right cards */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {rest.map((item) => (
                <article key={item.id}
                  className="news-card relative group bg-white border border-slate-200 rounded-2xl overflow-hidden
                    hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1
                    transition-all duration-300 flex flex-col"
                  style={{ boxShadow: "0 4px 24px rgba(120,40,15,0.06)" }}>

                  <div className="relative overflow-hidden h-40 flex-shrink-0">
                    <img src={item.image} alt={item.title}
                      className="news-img w-full h-full object-cover" />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3">
                      <span className={`text-[10px] font-[700] uppercase tracking-[1.5px] px-2.5 py-1 rounded-full border ${categoryColor[item.category]}`}>
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/80 text-[11px] font-[500]">
                      <Calendar size={11} />
                      {item.date}
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-5 gap-3">
                    <h3 className="text-[15px] font-[700] text-slate-800 group-hover:text-orange-800 transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-[13px] text-slate-500 leading-[1.75] line-clamp-2 flex-1">
                      {item.summary}
                    </p>

                    <div className="pt-4 border-t border-slate-100 mt-auto">
                      <Link href={`#news-${item.id}`}
                        className="inline-flex items-center gap-1.5 text-[11px] font-[700] text-orange-700 uppercase tracking-[0.8px] no-underline">
                        Read More
                        <ArrowRight size={12} className="news-arrow" />
                      </Link>
                    </div>
                  </div>

                  <span className="news-bar" />
                </article>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-2xl border border-orange-100 bg-gradient-to-r from-orange-50 to-white
            flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-6"
            style={{ boxShadow: "0 4px 24px rgba(120,40,15,0.06)" }}>

            <div>
              <p className="font-display text-[1.4rem] font-[700] text-orange-800 leading-none mb-1">
                Stay Updated with Lokesh Landscape
              </p>

              <p className="text-[13px] text-slate-500">
                Subscribe to our newsletter for distribution network updates, project news, and policy announcements.
              </p>
            </div>

            <Link href="#subscribe"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3
                bg-gradient-to-br from-orange-800 to-orange-600
                text-white text-[12.5px] font-[700] tracking-[0.8px] uppercase
                rounded-[7px] shadow-md shadow-orange-200
                hover:-translate-y-[2px] transition-all duration-200 no-underline">
              Subscribe Now
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}