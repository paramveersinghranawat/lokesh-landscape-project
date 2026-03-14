import Link from 'next/link';

export const metadata = {
  title: 'Solar Plant Implementation | Expertise | Lokesh Landscape',
  description: 'On-ground solar plant execution — utility-scale EPC, rooftop systems, grid interconnection, and O&M services across India.',
};

const ArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const CHECK_ITEMS = [
  'Utility-scale solar EPC up to 500 MW',
  'Rooftop & CPEX system installation',
  'DC string layout & AC collection design',
  'Grid interconnection & DISCOM approvals',
  'SCADA, inverter & tracker commissioning',
  'Shadow analysis & yield optimisation',
  'O&M contracts & performance monitoring',
  'Bifacial module & tracker integration',
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-orange-600 flex-shrink-0">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ─── Phase timeline ─── */
const PHASES = [
  {
    num: '01',
    title: 'Site Survey & Feasibility',
    desc: 'Topographic survey, soil testing, solar irradiation mapping, and shadow analysis to confirm plant viability.',
  },
  {
    num: '02',
    title: 'Design & Engineering',
    desc: 'Layout optimisation, electrical SLD, civil foundation design, and statutory drawing packages for approvals.',
  },
  {
    num: '03',
    title: 'Procurement & Logistics',
    desc: 'Tier-1 module & inverter sourcing, LSTK sub-contracting, and site mobilisation with safety induction.',
  },
  {
    num: '04',
    title: 'Construction & Installation',
    desc: 'Civil works, module mounting structure erection, DC cabling, inverter skid installation, and HT bay works.',
  },
  {
    num: '05',
    title: 'Commissioning & Grid Sync',
    desc: 'SCADA integration, protection relay setting, DISCOM synchronisation, and performance ratio verification.',
  },
  {
    num: '06',
    title: 'O&M & Monitoring',
    desc: '24×7 remote monitoring, preventive maintenance schedules, and annual energy yield reporting.',
  },
];

export default function SolarPlantPage() {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1600')",
          }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/60 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />

        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[12px] text-orange-300 font-[500] mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-orange-600">/</span>
            <Link href="/expertise" className="hover:text-white transition-colors">Expertise</Link>
            <span className="text-orange-600">/</span>
            <span className="text-white">Solar Plant Implementation</span>
          </div>

          <div className="max-w-[700px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-orange-400" />
              <span className="text-[11px] font-[700] text-orange-300 uppercase tracking-[3px]">Our Expertise</span>
            </div>
            <h1
              className="text-white leading-[0.92] mb-6"
              style={{ fontSize: 'clamp(48px, 6.5vw, 80px)', fontWeight: 700 }}
            >
              Solar Plant<br />
              <span className="text-orange-400">On-Ground</span> Execution
            </h1>
            <p className="text-[16px] text-slate-300 leading-[1.8]">
              End-to-end EPC delivery for utility-scale and rooftop solar — from feasibility to grid synchronisation and long-term O&M.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-9 bg-orange-600" />
                <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Capabilities</span>
              </div>
              <h2
                className="font-[700] leading-[0.95] text-slate-900 mb-6"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                Full-Spectrum <span className="text-orange-700">Solar EPC</span>
              </h2>
              <p className="text-[15px] text-slate-500 leading-[1.85] mb-8">
                Our on-ground teams execute solar projects from greenfield survey to final commissioning with zero compromise on quality or timelines. We manage every interface — civil, electrical, SCADA, and regulatory — under a single delivery framework.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {CHECK_ITEMS.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13.5px] font-[500] text-slate-700">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="brand-btn-primary">
                Discuss a Project
              </Link>
            </div>

            {/* Right image */}
            <div className="relative">
              <div className="absolute top-0 left-0 w-7 h-7 border-t-[3px] border-l-[3px] border-orange-500 z-20" />
              <div className="absolute top-0 right-0 w-7 h-7 border-t-[3px] border-r-[3px] border-orange-500 z-20" />
              <div
                className="rounded-2xl overflow-hidden"
                style={{ boxShadow: '0 20px 60px rgba(15,40,120,0.12)' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1566093097221-ac2335b09e70?auto=format&fit=crop&q=80&w=900"
                  alt="Solar plant installation"
                  className="w-full object-cover"
                  style={{ height: '460px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-transparent rounded-2xl" />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-5 -left-5 bg-white rounded-xl px-5 py-4 z-30"
                style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
              >
                <div className="text-[28px] font-[800] text-orange-700 leading-none">1.2 GW+</div>
                <div className="text-[10px] font-[600] text-slate-400 uppercase tracking-[1.5px] mt-1">
                  Capacity Installed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-white border-t border-slate-100">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {[
              { v: '1.2 GW+', l: 'Capacity Installed' },
              { v: '500 MW', l: 'Largest Single Plant' },
              { v: '18 States', l: 'Pan-India Presence' },
              { v: 'MNRE', l: 'Empanelled Agency' },
            ].map((s) => (
              <div
                key={s.l}
                className="py-8 px-4 text-center hover:bg-orange-50/40 transition-colors"
              >
                <div className="font-display text-[32px] font-[700] text-orange-800 leading-none">
                  {s.v}
                </div>
                <div className="text-[10px] font-[600] text-slate-400 uppercase tracking-[1.5px] mt-1.5">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHASE TIMELINE ─── */}
      <section className="bg-slate-50 py-20 lg:py-28 border-t border-slate-100">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          {/* Section header */}
          <div className="mb-14 max-w-[520px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-9 bg-orange-600" />
              <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">
                Delivery Process
              </span>
            </div>
            <h2
              className="font-[700] leading-[0.95] text-slate-900"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.7rem)' }}
            >
              How We Deliver <span className="text-orange-700">Every Project</span>
            </h2>
          </div>

          {/* Phase grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PHASES.map((phase) => (
              <div
                key={phase.num}
                className="bg-white rounded-2xl p-7 border border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Number */}
                <div className="text-[13px] font-[800] text-orange-400 tracking-[2px] mb-4 group-hover:text-orange-600 transition-colors">
                  {phase.num}
                </div>
                {/* Divider */}
                <div className="h-[2px] w-8 bg-orange-200 mb-4 group-hover:w-14 group-hover:bg-orange-500 transition-all duration-300" />
                <h3 className="text-[15px] font-[700] text-slate-900 mb-2">{phase.title}</h3>
                <p className="text-[13px] text-slate-500 leading-[1.75]">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA STRIP ─── */}
      <section className="relative py-16 overflow-hidden bg-orange-900">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950 via-orange-900 to-amber-900 opacity-80" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600" />
        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[11px] font-[700] text-orange-300 uppercase tracking-[3px] mb-2">
              Ready to commission?
            </p>
            <h3 className="text-white font-[700] text-[1.6rem] leading-tight">
              Let's Build Your Solar Plant
            </h3>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-orange-900 font-[700] text-[13px] uppercase tracking-[1px] px-7 py-3.5 rounded-lg hover:bg-orange-50 transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      {/* ─── BACK LINK ─── */}
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-8">
        <Link
          href="/expertise"
          className="inline-flex items-center gap-2 text-[12.5px] font-[700] text-orange-700 uppercase tracking-[0.8px] hover:text-orange-900 transition-colors"
        >
          <ArrowLeft /> Back to Expertise
        </Link>
      </div>
    </div>
  );
}