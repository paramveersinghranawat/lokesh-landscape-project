import Link from 'next/link';

export const metadata = {
  title: 'Project Management | Expertise | Lokesh Landscape',
  description: 'World-class project management and PMC services for power distribution projects across India.',
};

const ArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const CHECK_ITEMS = [
  'End-to-end EPC project management',
  'Scope, schedule & cost baseline control',
  'Multi-agency coordination across 28 states',
  'Risk register and mitigation planning',
  'Quality management systems (ISO 9001)',
  'Regulatory liaison & utility co-ordination',
  'Commissioning and handover management',
  'Post-commissioning performance monitoring',
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-orange-600 flex-shrink-0">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function ProjectManagementPage() {
  return (
    <div>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1600')" }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/55 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />

        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-[12px] text-orange-300 font-[500] mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-orange-600">/</span>
            <Link href="/expertise" className="hover:text-white transition-colors">Expertise</Link>
            <span className="text-orange-600">/</span>
            <span className="text-white">Project Management</span>
          </div>
          <div className="max-w-[680px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-orange-400" />
              <span className="text-[11px] font-[700] text-orange-300 uppercase tracking-[3px]">Our Expertise</span>
            </div>
            <h1 className="text-white leading-[0.92] mb-6" style={{ fontSize: 'clamp(52px, 7vw, 82px)', fontWeight: 700 }}>
              Project<br /><span className="text-orange-400">Management</span>
            </h1>
            <p className="text-[16px] text-slate-300 leading-[1.8]">
              Delivering India's most complex power infrastructure projects — on time, within scope, and within budget.
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
                <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">PMC Services</span>
              </div>
              <h2 className="font-[700] leading-[0.95] text-slate-900 mb-6" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
                From Contract to <span className="text-orange-700">Commissioning</span>
              </h2>
              <p className="text-[15px] text-slate-500 leading-[1.85] mb-8">
                Our PMC teams have successfully delivered over ₹12,000 Cr worth of power distribution projects. We combine rigorous project controls with deep domain knowledge to ensure every project exceeds expectations.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {CHECK_ITEMS.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13.5px] font-[500] text-slate-700">
                    <CheckIcon />{item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="brand-btn-primary">Engage Our PMC Team</Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(15,40,120,0.12)' }}>
                <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=900"
                  alt="Project Management" className="w-full object-cover" style={{ height: '460px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-slate-100">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {[{ v: '₹12,000 Cr', l: 'Projects Delivered' }, { v: '98%', l: 'On-Time Rate' }, { v: '28+', l: 'States Active' }, { v: '500+', l: 'Projects Completed' }].map(s => (
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
