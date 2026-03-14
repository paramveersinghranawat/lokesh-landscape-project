import Link from 'next/link';

export const metadata = {
  title: 'Our Expertise | Lokesh Landscape',
  description: 'Engineering excellence, smart technology, and world-class project management in power distribution across India.',
};

const AREAS = [
  {
    href: '/expertise/engineering',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    title: 'Engineering',
    desc: 'End-to-end electrical engineering covering HV/LV design, load flow analysis, substation engineering, and protection schemes with IEC/IS compliance.',
    stat: '3,200+', statLabel: 'Substations Built',
  },
  {
    href: '/expertise/project-management',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: 'Project Management',
    desc: 'Rigorous PMC capabilities from contract sign-off to commissioning — on-time, within budget, with full regulatory compliance across 28 states.',
    stat: '₹12,000 Cr', statLabel: 'Projects Delivered',
  },
  {
    href: '/expertise/technology',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Technology & SCADA',
    desc: 'State-of-the-art SCADA, DMS, and OMS systems enabling real-time grid visibility, automated fault isolation, and predictive maintenance.',
    stat: '99.98%', statLabel: 'Grid Uptime',
  },
  {
    href: '/expertise/om-services',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'O&M Services',
    desc: 'Long-term operations & maintenance contracts ensuring asset longevity, safety compliance, and peak performance across the distribution lifecycle.',
    stat: '100,000 km+', statLabel: 'Lines Maintained',
  },
];

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function ExpertisePage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1495704907664-81f74a7efd9b?auto=format&fit=crop&q=80&w=1600')" }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/55 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />

        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-[12px] text-orange-300 font-[500] mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-orange-600">/</span>
            <span className="text-white">Expertise</span>
          </div>
          <div className="max-w-[700px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-orange-400" />
              <span className="text-[11px] font-[700] text-orange-300 uppercase tracking-[3px]">What We Do</span>
            </div>
            <h1 className="text-white leading-[0.92] mb-6" style={{ fontSize: 'clamp(52px, 7.5vw, 88px)', fontWeight: 700 }}>
              35 Years of<br /><span className="text-orange-400">Technical Edge</span>
            </h1>
            <p className="text-[16px] text-slate-300 leading-[1.8] max-w-[560px]">
              From high-voltage substation design to last-mile smart metering, our expertise spans the complete power distribution value chain.
            </p>
          </div>
        </div>
      </section>

      {/* ── Expertise Cards ── */}
      <section className="bg-slate-50 border-t border-slate-100 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="mb-14 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-9 bg-orange-600" />
              <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Core Capabilities</span>
              <div className="h-px w-9 bg-orange-600" />
            </div>
            <h2 className="font-[700] leading-[0.92] text-slate-900" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)' }}>
              Our Areas of <span className="text-orange-700">Expertise</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {AREAS.map((area, i) => (
              <Link key={i} href={area.href}
                className="group bg-white border border-slate-200 rounded-2xl p-8 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5 no-underline relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-700 group-hover:bg-orange-700 group-hover:text-white group-hover:border-orange-700 transition-all duration-300">
                    {area.icon}
                  </div>
                  <div className="text-right">
                    <p className="font-display text-[1.6rem] font-[700] text-orange-800 leading-none">{area.stat}</p>
                    <p className="text-[10px] font-[600] text-slate-400 uppercase tracking-[1.5px] mt-0.5">{area.statLabel}</p>
                  </div>
                </div>
                <div className="h-px bg-slate-100" />
                <div>
                  <h3 className="text-[18px] font-[700] text-slate-800 group-hover:text-orange-800 transition-colors mb-2">{area.title}</h3>
                  <p className="text-[14px] text-slate-500 leading-[1.75]">{area.desc}</p>
                </div>
                <div className="flex items-center gap-1.5 text-[12px] font-[700] text-orange-700 uppercase tracking-[0.8px] mt-auto">
                  Learn More <ArrowRight />
                </div>
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400 group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-br from-orange-900 to-orange-700 py-16 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '52px 52px' }} />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[10.5px] font-[700] text-orange-300 uppercase tracking-[3px] mb-2">Partner With Us</p>
            <h2 className="text-white font-[700] leading-none" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
              Ready to Solve Your Power Challenges?
            </h2>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-orange-800 text-[12.5px] font-[700] tracking-[0.8px] uppercase rounded-[7px] shadow-md hover:bg-orange-50 hover:-translate-y-[2px] transition-all duration-200 no-underline">
              Contact Us <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
