import Link from 'next/link';

export const metadata = {
  title: 'Vision & Mission | Lokesh Landscape',
  description: 'Our vision and mission to power every corner of India with reliable, modern, and sustainable energy infrastructure.',
};

const PILLARS = [
  { icon: '⚡', title: 'Reliable Energy Delivery',  desc: 'Maintain 99.98%+ grid uptime through robust infrastructure, advanced monitoring, and rapid response capabilities.' },
  { icon: '🛡️', title: 'Safety & Compliance',       desc: 'Zero-LTI safety culture across all operations, meeting or exceeding PGCIL, CERC, and international standards.' },
  { icon: '🌱', title: 'Sustainable Practices',      desc: 'Integrate renewable energy, reduce carbon footprint, and contribute to India\'s Net Zero 2070 commitment.' },
  { icon: '🤝', title: 'Community Impact',           desc: 'Empower rural communities, create local employment, and invest in skills development through our CSR initiatives.' },
  { icon: '💡', title: 'Technology Leadership',      desc: 'Deploy cutting-edge SCADA, AMI, and AI-driven grid management tools to lead India\'s smart energy transition.' },
  { icon: '🏆', title: 'Operational Excellence',     desc: 'Deliver projects on time and within budget through rigorous QA/QC, proactive risk management, and expert PMC.' },
];

const VALUES = ['Integrity', 'Safety', 'Excellence', 'Innovation', 'Sustainability', 'Accountability'];

const ArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

export default function VisionMissionPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1400')" }} />
        <div className="absolute inset-0 bg-black/62" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/50 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />

        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-[12px] text-orange-300 font-[500] mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-orange-500">/</span>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <span className="text-orange-500">/</span>
            <span className="text-white">Vision & Mission</span>
          </div>
          <div className="max-w-[680px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-orange-400" />
              <span className="text-[11px] font-[700] text-orange-300 uppercase tracking-[3px]">Our Direction</span>
            </div>
            <h1 className="h-hero mb-6">
              Vision &amp;<br /><span className="text-orange-500">Mission</span>
            </h1>
            <p className="text-[16px] text-slate-300 leading-[1.8] max-w-[560px]">
              Every decision at Lokesh Landscape is guided by a clear vision and a mission-driven approach to power infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission Cards ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-6">

          {/* Vision */}
          <div className="relative bg-gradient-to-br from-orange-900 to-orange-700 rounded-2xl p-10 overflow-hidden" style={{ boxShadow: '0 8px 32px rgba(154,52,18,0.25)' }}>
            <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-orange-600/20 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 to-orange-800" />
            <div className="relative">
              <div className="text-[10.5px] font-[700] text-orange-300 uppercase tracking-[3px] mb-4">Our Vision</div>
              <h2 className="font-display text-[2.6rem] font-[700] text-white leading-tight mb-4">
                A Power-Secure India
              </h2>
              <p className="text-[15px] text-orange-100 leading-[1.85]">
                To be India's most trusted and innovative power infrastructure partner — enabling universal, reliable, and affordable electricity access, and leading the transition to a sustainable energy future.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="relative bg-slate-50 border border-orange-100 rounded-2xl p-10 overflow-hidden" style={{ boxShadow: '0 4px 24px rgba(154,52,18,0.06)' }}>
            <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-orange-50/60 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />
            <div className="relative">
              <div className="text-[10.5px] font-[700] text-orange-600 uppercase tracking-[3px] mb-4">Our Mission</div>
              <h2 className="font-display text-[2.6rem] font-[700] text-slate-900 leading-tight mb-4">
                Excellence at Every Volt
              </h2>
              <p className="text-[15px] text-slate-600 leading-[1.85]">
                To design, build, and operate world-class power infrastructure — with uncompromising safety standards, technological innovation, and a deep commitment to community welfare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission Pillars ── */}
      <section className="bg-slate-50 border-t border-slate-100 py-16 lg:py-20">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-9 bg-orange-600" />
              <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">What Guides Us</span>
              <div className="h-px w-9 bg-orange-600" />
            </div>
            <h2 className="h-section">
              Our Mission <span className="text-orange-700">Pillars</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PILLARS.map(p => (
              <div key={p.title}
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-[15.5px] font-[700] text-slate-800 mb-2 group-hover:text-orange-800 transition-colors">{p.title}</h3>
                <p className="text-[13.5px] text-slate-500 leading-[1.75]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values Strip ── */}
      <section className="bg-white border-t border-slate-100 py-10">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center gap-3 justify-center">
            <span className="text-[11px] font-[700] text-slate-400 uppercase tracking-[2.5px] mr-2">Core Values:</span>
            {VALUES.map(v => (
              <span key={v} className="inline-flex items-center gap-1.5 px-4 py-2 bg-orange-50 border border-orange-100 rounded-full text-[12.5px] font-[600] text-orange-700">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-600 flex-shrink-0" />
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Back ── */}
      <div className="bg-slate-50 border-t border-slate-100 py-6">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <Link href="/about" className="inline-flex items-center gap-2 text-[13px] font-[700] text-orange-700 hover:text-orange-900 transition-colors uppercase tracking-[0.8px]">
            <ArrowLeft /> Back to About Us
          </Link>
        </div>
      </div>
    </div>
  );
}
