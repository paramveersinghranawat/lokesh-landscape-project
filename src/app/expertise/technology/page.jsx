import Link from 'next/link';

export const metadata = {
  title: 'Technology & SCADA | Expertise | Lokesh Landscape',
  description: 'Advanced SCADA, DMS, OMS and smart grid technology solutions for modern power distribution.',
};

const ArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const TECHS = [
  { name: 'SCADA Systems', desc: 'Real-time monitoring and control of the distribution network with sub-second response times and 99.99% system availability.' },
  { name: 'Distribution Management System (DMS)', desc: 'Intelligent load balancing, voltage regulation, and fault isolation for optimum grid performance.' },
  { name: 'Outage Management System (OMS)', desc: 'Automated outage detection, crew dispatch, and restoration workflows reducing SAIDI by up to 40%.' },
  { name: 'Advanced Metering Infrastructure', desc: '1.2M+ smart meters deployed with two-way communication for remote reading, tamper detection, and demand response.' },
  { name: 'GIS Network Mapping', desc: 'Full geospatial asset registry of our 100,000 km+ distribution network enabling precise fault location.' },
  { name: 'Cybersecurity & OT Hardening', desc: 'IEC 62351-compliant security architecture protecting critical distribution assets from cyber threats.' },
];

export default function TechnologyPage() {
  return (
    <div>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=1600')" }} />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/55 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />

        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-[12px] text-orange-300 font-[500] mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-orange-600">/</span>
            <Link href="/expertise" className="hover:text-white transition-colors">Expertise</Link>
            <span className="text-orange-600">/</span>
            <span className="text-white">Technology</span>
          </div>
          <div className="max-w-[680px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-orange-400" />
              <span className="text-[11px] font-[700] text-orange-300 uppercase tracking-[3px]">Digital Grid</span>
            </div>
            <h1 className="text-white leading-[0.92] mb-6" style={{ fontSize: 'clamp(52px, 7vw, 82px)', fontWeight: 700 }}>
              Smart Grid<br /><span className="text-orange-400">Technology</span>
            </h1>
            <p className="text-[16px] text-slate-300 leading-[1.8]">
              Deploying cutting-edge SCADA, DMS, and AMI solutions that make our grid more intelligent, resilient, and efficient.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-t border-slate-100 py-20 lg:py-28">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-9 bg-orange-600" />
              <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Technology Stack</span>
            </div>
            <h2 className="font-[700] leading-[0.92] text-slate-900" style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)' }}>
              Intelligent Systems for a <span className="text-orange-700">Smarter Grid</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TECHS.map((t, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-white font-display text-[16px] font-[700] mb-4">{i + 1}</div>
                <h3 className="text-[15px] font-[700] text-slate-800 mb-2">{t.name}</h3>
                <p className="text-[13.5px] text-slate-500 leading-[1.75]">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-slate-100">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {[{ v: '1.2M+', l: 'Smart Meters' }, { v: '99.98%', l: 'Grid Uptime' }, { v: '<30s', l: 'Fault Detection' }, { v: '40%', l: 'SAIDI Reduction' }].map(s => (
              <div key={s.l} className="py-8 px-4 text-center hover:bg-orange-50/40 transition-colors">
                <div className="font-display text-[32px] font-[700] text-orange-800 leading-none">{s.v}</div>
                <div className="text-[10px] font-[600] text-slate-400 uppercase tracking-[1.5px] mt-1.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-8">
        <Link href="/expertise" className="inline-flex items-center gap-2 text-[12.5px] font-[700] text-orange-700 uppercase tracking-[0.8px] hover:text-orange-900 transition-colors">
          <ArrowLeft /> Back to Expertise
        </Link>
      </div>
    </div>
  );
}
