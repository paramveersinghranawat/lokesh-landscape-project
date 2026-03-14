import Link from 'next/link';

export const metadata = {
  title: 'O&M Services | Expertise | Lokesh Landscape',
  description: 'Long-term operations and maintenance services for power distribution assets across India.',
};

const ArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const SERVICES = [
  { title: 'Preventive Maintenance', desc: 'Scheduled inspection, testing, and servicing of HV/LV equipment, transformers, and switchgear to maximise asset life.' },
  { title: 'Corrective Maintenance', desc: '24/7 emergency fault response with field crews deploying within 30 minutes for critical outage restoration.' },
  { title: 'Condition-Based Monitoring', desc: 'IoT-enabled continuous monitoring of asset health indicators to predict failures before they occur.' },
  { title: 'Vegetation Management', desc: 'Systematic right-of-way clearance and tree trimming programmes to reduce weather-related failures.' },
  { title: 'Safety & Compliance Audits', desc: 'Regular statutory inspections, arc flash studies, and safety audits ensuring full regulatory compliance.' },
  { title: 'Performance Reporting', desc: 'Monthly and quarterly SAIDI/SAIFI reports with actionable improvement recommendations.' },
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-orange-600 flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
);

export default function OmServicesPage() {
  return (
    <div>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1600')" }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/55 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />

        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-[12px] text-orange-300 font-[500] mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-orange-600">/</span>
            <Link href="/expertise" className="hover:text-white transition-colors">Expertise</Link>
            <span className="text-orange-600">/</span>
            <span className="text-white">O&M Services</span>
          </div>
          <div className="max-w-[680px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-orange-400" />
              <span className="text-[11px] font-[700] text-orange-300 uppercase tracking-[3px]">Operations & Maintenance</span>
            </div>
            <h1 className="text-white leading-[0.92] mb-6" style={{ fontSize: 'clamp(52px, 7vw, 82px)', fontWeight: 700 }}>
              Asset Lifecycle<br /><span className="text-orange-400">Excellence</span>
            </h1>
            <p className="text-[16px] text-slate-300 leading-[1.8]">
              Long-term O&M contracts that protect your distribution assets, reduce downtime, and ensure regulatory compliance across the entire asset lifecycle.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-t border-slate-100 py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-9 bg-orange-600" />
              <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">O&M Services</span>
            </div>
            <h2 className="font-[700] leading-[0.92] text-slate-900" style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)' }}>
              Complete <span className="text-orange-700">Maintenance Solutions</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <CheckIcon />
                  <h3 className="text-[15px] font-[700] text-slate-800">{s.title}</h3>
                </div>
                <p className="text-[13.5px] text-slate-500 leading-[1.75]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-slate-100">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {[{ v: '100,000 km+', l: 'Lines Maintained' }, { v: '3,200+', l: 'Substations' }, { v: '<30 min', l: 'Emergency Response' }, { v: '35+', l: 'Years Experience' }].map(s => (
              <div key={s.l} className="py-8 px-4 text-center hover:bg-orange-50/40 transition-colors">
                <div className="font-display text-[28px] font-[700] text-orange-800 leading-none">{s.v}</div>
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
