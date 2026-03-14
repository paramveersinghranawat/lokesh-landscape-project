import Link from 'next/link';

export const metadata = {
  title: 'Engineering | Expertise | Lokesh Landscape',
  description: 'Electrical engineering excellence — HV/LV design, substation engineering, protection systems, and load-flow analysis.',
};

const ArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const CHECK_ITEMS = [
  'HV/LV substation design up to 400 kV',
  'Load flow, short circuit & protection studies',
  'SCADA & relay co-ordination engineering',
  'Cable route & tower design optimisation',
  'IEC/IS/CERC compliance engineering',
  'Renewable energy grid interconnection studies',
  'Power quality analysis & harmonic mitigation',
  'Asset lifecycle & condition assessment',
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-orange-600 flex-shrink-0">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function EngineeringPage() {
  return (
    <div>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1600')" }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/55 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />

        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-[12px] text-orange-300 font-[500] mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-orange-600">/</span>
            <Link href="/expertise" className="hover:text-white transition-colors">Expertise</Link>
            <span className="text-orange-600">/</span>
            <span className="text-white">Engineering</span>
          </div>
          <div className="max-w-[680px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-orange-400" />
              <span className="text-[11px] font-[700] text-orange-300 uppercase tracking-[3px]">Our Expertise</span>
            </div>
            <h1 className="text-white leading-[0.92] mb-6" style={{ fontSize: 'clamp(52px, 7vw, 82px)', fontWeight: 700 }}>
              Engineering<br /><span className="text-orange-400">Excellence</span>
            </h1>
            <p className="text-[16px] text-slate-300 leading-[1.8]">
              35+ years of electrical engineering expertise powering India's most complex distribution infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-9 bg-orange-600" />
                <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Capabilities</span>
              </div>
              <h2 className="font-[700] leading-[0.95] text-slate-900 mb-6" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
                End-to-End <span className="text-orange-700">Electrical Engineering</span>
              </h2>
              <p className="text-[15px] text-slate-500 leading-[1.85] mb-8">
                Our engineering teams deliver complete design, analysis, and documentation for power distribution assets from 11 kV to 400 kV. With in-house simulation capabilities and IEC/IS-compliant design workflows, we deliver projects right the first time.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {CHECK_ITEMS.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13.5px] font-[500] text-slate-700">
                    <CheckIcon />{item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="brand-btn-primary">Discuss a Project</Link>
            </div>
            <div className="relative">
              <div className="absolute top-0 left-0 w-7 h-7 border-t-[3px] border-l-[3px] border-orange-500 z-20" />
              <div className="absolute top-0 right-0 w-7 h-7 border-t-[3px] border-r-[3px] border-orange-500 z-20" />
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(15,40,120,0.12)' }}>
                <img src="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?auto=format&fit=crop&q=80&w=900"
                  alt="Engineering" className="w-full object-cover" style={{ height: '460px' }} />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-slate-100">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {[{ v: '3,200+', l: 'Substations' }, { v: '400 kV', l: 'Max Voltage' }, { v: '100,000 km+', l: 'Lines Designed' }, { v: 'ISO 9001', l: 'Certified' }].map(s => (
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
