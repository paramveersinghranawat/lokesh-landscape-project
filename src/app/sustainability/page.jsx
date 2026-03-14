import Link from 'next/link';
import {
  Sun, Wind, Droplets, Leaf, TreePine, Zap,
  Target, TrendingUp, Shield, ArrowRight, CheckCircle2, Globe
} from 'lucide-react';
import CountUp from '../../components/CountUp';

export const metadata = {
  title: 'Sustainability | Lokesh Landscape',
  description:
    "Lokesh Landscape's commitment to a greener grid — renewable integration, carbon neutrality, and environmental stewardship across India.",
};

/* ─── DATA ────────────────────────────────────────────────── */

const HERO_STATS = [
  { display: null, end: 40,   suffix: '%',  label: 'Renewable Share by 2030' },
  { display: null, end: 12,   suffix: ' GW', label: 'Clean Capacity Added'   },
  { display: 'Net Zero',      suffix: '',   label: 'Target by 2045'          },
  { display: null, end: 8200, prefix: '₹', suffix: ' Cr', label: 'Green Investment' },
];

const PILLARS = [
  {
    Icon: Sun,
    title: "Solar Integration",
    desc: "Connecting utility-scale solar parks to the national grid with smart inverter technology and real-time curtailment controls.",
    stat: "6.4 GW", statLabel: "Solar Capacity",
  },
  {
    Icon: Wind,
    title: "Wind Energy",
    desc: "Onshore and offshore wind corridor development spanning coastal and high-altitude regions across 14 states.",
    stat: "4.1 GW", statLabel: "Wind Capacity",
  },
  {
    Icon: Droplets,
    title: "Hydro & Storage",
    desc: "Pumped-storage hydro projects enabling grid-scale energy storage, balancing intermittent renewable supply.",
    stat: "1.5 GW", statLabel: "Storage Capacity",
  },
  {
    Icon: Zap,
    title: "Grid Efficiency",
    desc: "Advanced SCADA and AI-driven demand response cuts transmission losses and optimises dispatch across zones.",
    stat: "18%", statLabel: "Loss Reduction",
  },
  {
    Icon: TreePine,
    title: "Carbon Offsetting",
    desc: "Afforestation partnerships and verified carbon credits across right-of-way corridors and degraded land parcels.",
    stat: "2.3 M", statLabel: "Trees Planted",
  },
  {
    Icon: Globe,
    title: "Community Impact",
    desc: "Rural electrification with solar microgrids and clean cooking energy programmes reaching 1.2 million households.",
    stat: "1.2 M", statLabel: "Households Powered",
  },
];

const TIMELINE = [
  { year: '2018', title: 'Green Grid Initiative Launched', desc: 'Lokesh Landscape commits to 20% renewable share and forms dedicated Clean Energy division.' },
  { year: "2020", title: "First Solar Corridor Commissioned", desc: "800 MW Rajasthan Solar Corridor goes live — the company's largest single renewable project." },
  { year: "2022", title: "Net-Zero Roadmap Published", desc: "Science-based targets set for Scope 1, 2 & 3 emissions with 2045 net-zero deadline." },
  { year: "2024", title: "10 GW Milestone Achieved", desc: "Cumulative renewable capacity crosses 10 GW — five years ahead of original schedule." },
  { year: "2026", title: "Green Bond ₹4,000 Cr Raised", desc: "India's largest green bond issuance by a transmission company funds offshore wind projects." },
  { year: "2030", title: "40% Renewable Target (Goal)", desc: "Targeting 40% of national grid energy from renewables with full smart grid enablement." },
];

const CERTIFICATIONS = [
  { name: "ISO 14001:2015",      desc: "Environmental Management System"   },
  { name: "GRI Standards",       desc: "Sustainability Reporting"           },
  { name: "SBTi Aligned",        desc: "Science Based Targets Initiative"  },
  { name: "CDP A-Rating",        desc: "Climate Disclosure Project"         },
  { name: "GRIHA 5-Star",        desc: "Green Rating for Infrastructure"    },
  { name: "MSCI ESG AA",         desc: "ESG Rating"                         },
];

const SDG_GOALS = [
  { num: "7",  label: "Affordable & Clean Energy",     color: "#FCC30B" },
  { num: "9",  label: "Industry, Innovation & Infra",  color: "#FD6925" },
  { num: "11", label: "Sustainable Cities",            color: "#FD9D24" },
  { num: "13", label: "Climate Action",                color: "#3F7E44" },
  { num: "17", label: "Partnerships for the Goals",    color: "#19486A" },
];

/* ─── PAGE ────────────────────────────────────────────────── */

export default function SustainabilityPage() {
  return (
    <div>

        {/* ══════════════════════════════════════════
            1. HERO
        ══════════════════════════════════════════ */}
        <section className="relative overflow-hidden" style={{ minHeight: "82vh" }}>
          <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(images/enviroment-3-page/img-1.webp)" }} />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-950/40 via-transparent to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-[3px] z-30 bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />

          <div className="relative z-20 max-w-[1320px] mx-auto px-6 lg:px-12 flex flex-col justify-center h-full"
            style={{ paddingTop: "100px", paddingBottom: "80px" }}>

            <div className="flex items-center gap-2 text-[12px] text-orange-300 font-[500] mb-10">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-orange-500">/</span>
              <span className="text-white">Sustainability</span>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-orange-400" />
              <span className="text-[11px] font-[700] text-orange-300 uppercase tracking-[3px]">Our Green Commitment</span>
            </div>

            {/* headline */}
            <h1 className="h-hero mb-6">
              Powering India.<br />
              <span className="text-orange-500">Protecting</span><br />
              the Planet.
            </h1>

            <p className="text-[16px] text-slate-300 leading-[1.8] max-w-[560px] mb-10">
              Lokesh Landscape is committed to building a grid that powers tomorrow without costing the Earth.
              Our sustainability strategy integrates clean energy, operational efficiency, and community
              resilience across every kilometre of our network.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="#pillars" className="brand-btn-primary">
                Explore Our Strategy <ArrowRight size={14} />
              </Link>
              <Link href="#report"
                className="inline-flex items-center gap-2 px-6 py-3
                  text-white text-[12.5px] font-[700] tracking-[0.8px] uppercase
                  border border-white/30 rounded-[7px]
                  hover:bg-white/10 transition-all duration-200 no-underline">
                Download ESG Report
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-16 rounded-2xl overflow-hidden border border-white/10"
              style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)' }}>
              {HERO_STATS.map((s, i) => (
                <div key={i} className="py-6 px-5 text-center hover:bg-white/5 transition-colors">
                  <p className="font-display text-white font-[700] leading-none mb-1" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}>
                    {s.display ? s.display : <CountUp end={s.end} prefix={s.prefix || ''} suffix={s.suffix} />}
                  </p>
                  <p className="text-[10px] font-[600] text-orange-300/80 uppercase tracking-[1.5px]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════
            2. PROGRESS METRICS
        ══════════════════════════════════════════ */}
        <section className="bg-white border-b border-slate-100 py-16 lg:py-20 relative">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />

          <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* left: heading */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-9 bg-orange-600" />
                  <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">2030 Progress</span>
                </div>
                <h2 className="h-section mb-6">
                  Tracking Our<br /><span className="text-orange-700">Climate Targets</span>
                </h2>
                <p className="text-[15px] text-slate-500 leading-[1.85] mb-8">
                  We publish transparent progress data against our science-based targets annually.
                  Every metric below is independently verified under the GRI framework.
                </p>
                <ul className="space-y-3">
                  {[
                    "Independently audited annual sustainability reports",
                    "Real-time carbon monitoring across all substations",
                    "Third-party ESG ratings reviewed bi-annually",
                  ].map((t, i) => (
                    <li key={i} className="flex items-center gap-3 text-[14px] font-[600] text-slate-700">
                      <CheckCircle2 size={18} className="text-orange-600 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* right: progress bars */}
              <div className="flex flex-col gap-6">
                {[
                  { label: "Renewable Energy Share",      current: 28,  target: 40,  unit: "%" },
                  { label: "Carbon Intensity Reduction",  current: 42,  target: 60,  unit: "%" },
                  { label: "Transmission Loss Reduction", current: 18,  target: 25,  unit: "%" },
                  { label: "Green Certified Substations", current: 61,  target: 100, unit: "%" },
                  { label: "EV Charging Network Nodes",   current: 340, target: 1000, unit: " nodes" },
                ].map((bar, i) => {
                  const pct = Math.round((bar.current / bar.target) * 100);
                  return (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[13px] font-[600] text-slate-700">{bar.label}</span>
                        <span className="text-[12px] font-[700] text-orange-700">
                          {bar.current}{bar.unit} <span className="text-slate-400 font-[400]">/ {bar.target}{bar.unit}</span>
                        </span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-orange-700 to-amber-500"
                          style={{ width: `${pct}%`, transition: 'width 1.4s cubic-bezier(0.4,0,0.2,1)', animationDelay: `${i * 0.15}s` }} />
                      </div>
                      <div className="mt-1 text-right text-[10px] text-slate-400 font-[500]">{pct}% of target</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════
            3. SIX PILLARS
        ══════════════════════════════════════════ */}
        <section id="pillars" className="bg-slate-50 border-b border-slate-100 py-20 lg:py-28 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full border border-slate-200 bg-white/60" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 w-[360px] h-[360px] rounded-full border border-slate-100 bg-white/40" />

          <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="h-px w-9 bg-orange-600" />
                <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Our Approach</span>
                <div className="h-px w-9 bg-orange-600" />
              </div>
              <h2 className="h-section mb-4">
                Six Pillars of <span className="text-orange-700">Sustainable Action</span>
              </h2>
              <p className="text-[15px] text-slate-500 leading-[1.8] max-w-2xl mx-auto">
                Our sustainability strategy rests on six interconnected pillars that guide investment,
                operations, and community engagement across the entire Lokesh Landscape network.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PILLARS.map((p, i) => (
                <div key={i}
                  className="group relative bg-white border border-slate-200 rounded-2xl p-7 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col gap-5"
                  style={{ boxShadow: '0 4px 24px rgba(154,52,18,0.05)' }}>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-700 group-hover:bg-orange-700 group-hover:text-white group-hover:border-orange-700 transition-all duration-300">
                      <p.Icon size={22} />
                    </div>
                    <div className="text-right">
                      <p className="font-display text-[1.5rem] font-[700] text-orange-800 leading-none">{p.stat}</p>
                      <p className="text-[10px] font-[600] text-slate-400 uppercase tracking-[1.5px] mt-0.5">{p.statLabel}</p>
                    </div>
                  </div>
                  <div className="h-px bg-slate-100" />
                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="text-[16px] font-[700] text-slate-800 group-hover:text-orange-800 transition-colors">{p.title}</h3>
                    <p className="text-[13.5px] text-slate-500 leading-[1.75]">{p.desc}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px] font-[700] text-orange-700 uppercase tracking-[0.8px]">
                    Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400 group-hover:w-full transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════
            4. JOURNEY TIMELINE
        ══════════════════════════════════════════ */}
        <section className="bg-white border-b border-slate-100 py-20 lg:py-28">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* left: sticky heading + image */}
              <div className="lg:sticky lg:top-24">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-9 bg-orange-600" />
                  <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Our Journey</span>
                </div>
                <h2 className="h-section mb-6">
                  A Decade of<br /><span className="text-orange-700">Green Milestones</span>
                </h2>
                <p className="text-[15px] text-slate-500 leading-[1.85] mb-8">
                  From our first renewable commitment in 2018 to raising India's largest green bond,
                  every milestone reflects our resolve to lead the clean energy transition.
                </p>

                <div className="relative rounded-2xl overflow-hidden"
                  style={{ boxShadow: "0 20px 60px rgba(15,80,30,0.1)" }}>
                  {/* corner brackets */}
                  <div className="absolute top-0 left-0 w-7 h-7 border-t-[3px] border-l-[3px] border-orange-500 z-10" />
                  <div className="absolute top-0 right-0 w-7 h-7 border-t-[3px] border-r-[3px] border-orange-500 z-10" />
                  <img
                    src="images/enviroment-page/enviroment-1.webp"
                    alt="Solar field"
                    className="w-full object-cover"
                    style={{ height: "320px" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-900/25 to-transparent" />
                </div>
              </div>

              {/* right: timeline */}
              <div className="relative pl-12">
                <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-slate-200" />
                <div className="flex flex-col gap-0">
                  {TIMELINE.map((ev, i) => (
                    <div key={i} className="relative flex gap-5 pb-10 group">
                      <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center flex-shrink-0 relative z-10 group-hover:border-orange-500 group-hover:bg-orange-50 transition-all duration-200">
                        <span className="font-display text-[0.85rem] font-[700] text-slate-400 group-hover:text-orange-600">{ev.year.slice(2)}</span>
                      </div>
                      <div className="pt-1.5 flex flex-col gap-1">
                        <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[2px]">{ev.year}</span>
                        <h3 className="text-[15px] font-[700] text-slate-800 group-hover:text-orange-800 transition-colors leading-snug">{ev.title}</h3>
                        <p className="text-[13px] text-slate-500 leading-[1.75]">{ev.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════
            5. CERTIFICATIONS + SDG ALIGNMENT
        ══════════════════════════════════════════ */}
        <section className="bg-slate-50 border-b border-slate-100 py-20 lg:py-28 overflow-hidden relative">
          <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full border border-slate-100 bg-white/40" />

          <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16">

              {/* Certifications */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-9 bg-orange-600" />
                  <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Standards & Ratings</span>
                </div>
                <h2 className="h-sub mb-8">
                  Certified <span className="text-orange-700">Excellence</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {CERTIFICATIONS.map((c, i) => (
                    <div key={i}
                      className="bg-white border border-slate-200 rounded-xl p-5 hover:border-orange-200 hover:shadow-md hover:shadow-orange-100/50 transition-all duration-200 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-700 flex-shrink-0">
                        <Shield size={18} />
                      </div>
                      <div>
                        <p className="text-[13px] font-[700] text-slate-800">{c.name}</p>
                        <p className="text-[11px] text-slate-400 font-[500] mt-0.5">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SDG alignment */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-9 bg-orange-600" />
                  <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">UN SDG Alignment</span>
                </div>
                <h2 className="h-sub mb-4">
                  Global Goals,<br /><span className="text-orange-700">Local Action</span>
                </h2>
                <p className="text-[15px] text-slate-500 leading-[1.85] mb-8">
                  Our sustainability strategy is aligned with five of the UN's Sustainable Development
                  Goals, with KPIs mapped and reported annually.
                </p>
                <div className="flex flex-wrap gap-4">
                  {SDG_GOALS.map((g, i) => (
                    <div key={i} className="sdg-badge rounded-2xl overflow-hidden cursor-default"
                      style={{ background: g.color, width: "100px", height: "100px",
                        display: "flex", flexDirection: "column", alignItems: "center",
                        justifyContent: "center", padding: "12px", gap: "6px" }}>
                      <span style={{ fontFamily: "'Teko', sans-serif", fontSize: "2rem",
                        fontWeight: 700, color: "#fff", lineHeight: 1 }}>{g.num}</span>
                      <span style={{ fontSize: "0.58rem", fontWeight: 700, color: "rgba(255,255,255,0.85)",
                        textTransform: "uppercase", letterSpacing: "0.06em", textAlign: "center",
                        lineHeight: 1.3 }}>{g.label}</span>
                    </div>
                  ))}
                </div>

                {/* ESG report CTA */}
                <div id="report"
                  className="mt-10 rounded-2xl border border-orange-100 bg-gradient-to-r from-orange-50 to-white flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5"
                  style={{ boxShadow: '0 4px 24px rgba(154,52,18,0.06)' }}>
                  <div>
                    <p className="font-display text-[1.3rem] font-[700] text-orange-800 leading-none mb-1">FY 2025–26 ESG Report</p>
                    <p className="text-[12px] text-slate-500">GRI-aligned · 148 pages · PDF</p>
                  </div>
                  <Link href="#" className="brand-btn-primary">Download <ArrowRight size={13} /></Link>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════
            6. STATS STRIP
        ══════════════════════════════════════════ */}
        <section className="bg-white border-b border-slate-100">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100">
              {[
                { v: '12 GW', l: 'Clean Capacity Added' }, { v: '2.3 M', l: 'Trees Planted' },
                { v: '₹8,200 Cr', l: 'Green Investment' }, { v: 'Net Zero', l: 'Target 2045' },
              ].map((s, i) => (
                <div key={i} className="py-8 px-4 text-center hover:bg-orange-50/40 transition-colors duration-150">
                  <div className="font-display text-[36px] font-[700] text-orange-800 leading-none">{s.v}</div>
                  <div className="text-[10px] font-[600] text-slate-400 uppercase tracking-[1.5px] mt-1.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════
            7. CTA BANNER
        ══════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-20 lg:py-24">
          <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1800&auto=format&fit=crop')" }} />
          <div className="absolute inset-0 bg-orange-950/85" />
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />

          <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-9 bg-orange-400" />
              <span className="text-[11px] font-[700] text-orange-300 uppercase tracking-[3px]">Join the Mission</span>
              <div className="h-px w-9 bg-orange-400" />
            </div>
            <h2 className="font-display font-[700] text-white leading-[0.92] mb-6" style={{ fontSize: 'clamp(2.6rem, 5vw, 4.5rem)' }}>
              Partner With Us for a<br /><span className="text-orange-400">Greener Grid</span>
            </h2>
            <p className="text-[16px] text-slate-300 leading-[1.8] max-w-2xl mx-auto mb-10">
              Whether you are a renewable developer, an industrial consumer, or a civic body, Lokesh Landscape
              offers partnership frameworks to accelerate your clean energy transition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="brand-btn-primary">Get In Touch <ArrowRight size={14} /></Link>
              <Link href="/about" className="inline-flex items-center gap-2 px-8 py-3.5 text-white text-[12.5px] font-[700] tracking-[0.8px] uppercase border border-white/30 rounded-[7px] hover:bg-white/10 transition-all duration-200 no-underline">
                About Lokesh Landscape
              </Link>
            </div>
          </div>
        </section>

    </div>
  );
}