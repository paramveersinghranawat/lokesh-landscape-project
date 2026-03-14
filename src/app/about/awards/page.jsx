import Link from 'next/link';
import { Award, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Awards & Recognition | Lokesh Landscape',
  description: 'Industry awards, certifications, and recognition for excellence in power infrastructure from Lokesh Landscape.',
};

const CERTS = ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018', 'OHSAS 18001', 'PGCIL Approved', 'BIS Certified'];

const AWARDS = [
  {
    year: '2025',
    items: [
      { title: 'Best Infrastructure Company',  body: 'India Power Awards 2025', desc: 'Recognised for excellence in project execution and contribution to India\'s energy transition goals.', highlight: true },
      { title: 'Smart Grid Innovation Award',  body: 'FICCI Energy Summit',      desc: 'For deploying India\'s largest neighbourhood-level AMI network with 3.8M smart meters.', highlight: false },
    ],
  },
  {
    year: '2023',
    items: [
      { title: 'EPC Company of the Year',      body: 'Power Line Awards',             desc: 'Top EPC contractor in the transmission & substation category for three consecutive years.', highlight: false },
      { title: 'CSR Excellence Award',         body: 'CII-ITC Sustainability Awards', desc: 'For skill development initiatives reaching 6,000+ youth in tribal regions of Jharkhand and Odisha.', highlight: false },
    ],
  },
  {
    year: '2022',
    items: [
      { title: 'Golden Peacock Award',              body: 'Institute of Directors', desc: 'Recognised for implementing best-in-class environment, health, and safety management systems.', highlight: false },
      { title: 'Project of the Year — Transmission', body: 'CIGRÉ India',          desc: 'For the 400 kV GIS substation at Navi Mumbai commissioned 60 days ahead of schedule.', highlight: false },
    ],
  },
  {
    year: '2020',
    items: [
      { title: 'Rural Electrification Award', body: 'Ministry of Power, GoI', desc: 'Presented for successful energisation of 4,200+ villages under DDUGJY.', highlight: false },
    ],
  },
];

const STATS = [
  { value: '18+',  label: 'Major Awards' },
  { value: '6',    label: 'Certifications' },
  { value: '2025', label: 'Most Recent Award' },
  { value: '35+',  label: 'Years of Excellence' },
];

export default function AwardsPage() {
  return (
    <div>

      {/* ── Hero ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1400')" }} />
        <div className="absolute inset-0 bg-black/62" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/50 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />

        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-[12px] text-orange-300 font-[500] mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-orange-500">/</span>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <span className="text-orange-500">/</span>
            <span className="text-white">Awards & Recognition</span>
          </div>
          <div className="max-w-[680px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-orange-400" />
              <span className="text-[11px] font-[700] text-orange-300 uppercase tracking-[3px]">Industry Recognition</span>
            </div>
            <h1 className="h-hero mb-6">
              Awards &amp;<br /><span className="text-orange-500">Recognition</span>
            </h1>
            <p className="text-[16px] text-slate-300 leading-[1.8] max-w-[560px]">
              Our commitment to quality, safety, and innovation has been recognised by government bodies, industry associations, and international standards organisations.
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {STATS.map((s, i) => (
              <div key={i} className="py-8 px-4 text-center hover:bg-orange-50/40 transition-colors duration-150">
                <div className="font-display text-[36px] font-[700] text-orange-800 leading-none">{s.value}</div>
                <div className="text-[10px] font-[600] text-slate-400 uppercase tracking-[1.5px] mt-1.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="bg-slate-50 border-b border-slate-100 py-14 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full border border-slate-200 bg-white/60" />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="lg:w-56 flex-shrink-0">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-9 bg-orange-600" />
                <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Standards</span>
              </div>
              <h2 className="h-sub">
                Our<br /><span className="text-orange-700">Certifications</span>
              </h2>
            </div>
            <div className="hidden lg:block w-px self-stretch bg-slate-200" />
            <div className="flex flex-wrap gap-3">
              {CERTS.map(c => (
                <span key={c}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-orange-200 rounded-full text-[12px] font-[700] text-orange-700 hover:bg-orange-600 hover:border-orange-600 hover:text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-orange-200 transition-all duration-200 cursor-default">
                  <CheckCircle2 size={13} className="flex-shrink-0" />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Awards by Year ── */}
      <section className="bg-white py-20 lg:py-28 relative overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 opacity-25"
          style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
        <div className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full border border-slate-100 bg-slate-50/60" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-9 bg-orange-600" />
                <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Award History</span>
              </div>
              <h2 className="h-section">
                A Legacy of<br /><span className="text-orange-700">Excellence</span>
              </h2>
            </div>
            <p className="text-[15px] text-slate-500 leading-[1.85] lg:max-w-md lg:ml-auto">
              From government ministries to international engineering bodies, Lokesh Landscape has consistently been singled out for technical leadership, community impact, and sustainable operations.
            </p>
          </div>

          <div className="flex flex-col gap-14">
            {AWARDS.map(group => (
              <div key={group.year}>
                {/* Year heading */}
                <div className="flex items-center gap-5 mb-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl flex-shrink-0 bg-gradient-to-br from-orange-800 to-orange-600 text-white"
                    style={{ boxShadow: '0 4px 18px rgba(154,52,18,0.28)' }}>
                    <span className="font-display font-[700] leading-none text-[1.6rem]">{group.year}</span>
                  </div>
                  <div className="flex-1 h-px bg-slate-100" />
                  <span className="text-[11px] font-[600] text-slate-400 uppercase tracking-[1.5px] flex-shrink-0">
                    {group.items.length} Award{group.items.length > 1 ? 's' : ''}
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {group.items.map(a => a.highlight ? (
                    /* Featured card */
                    <div key={a.title}
                      className="relative col-span-1 sm:col-span-2 bg-gradient-to-br from-orange-900 to-orange-700 border border-orange-700 rounded-2xl p-8 overflow-hidden hover:-translate-y-1 transition-all duration-300"
                      style={{ boxShadow: '0 8px 32px rgba(154,52,18,0.30)' }}>
                      <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
                      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-6">
                        <div className="w-14 h-14 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-white flex-shrink-0">
                          <Award size={26} />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span className="text-[10px] font-[700] bg-white/20 text-white uppercase tracking-[1.5px] px-2.5 py-1 rounded-full border border-white/20">Featured Award</span>
                            <span className="text-[11px] font-[700] text-orange-300 uppercase tracking-[0.8px]">{a.body}</span>
                          </div>
                          <h3 className="font-display font-[700] text-white leading-tight mb-2" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>{a.title}</h3>
                          <p className="text-[14px] text-orange-100 leading-[1.75]">{a.desc}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Standard card */
                    <div key={a.title}
                      className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col gap-5"
                      style={{ boxShadow: '0 4px 24px rgba(154,52,18,0.05)' }}>
                      <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-700 group-hover:bg-orange-700 group-hover:text-white group-hover:border-orange-700 transition-all duration-300 flex-shrink-0">
                        <Award size={20} />
                      </div>
                      <div className="h-px bg-slate-100" />
                      <div className="flex flex-col gap-2 flex-1">
                        <p className="text-[11px] font-[700] text-orange-600 uppercase tracking-[1px]">{a.body}</p>
                        <h3 className="text-[16px] font-[700] text-slate-800 group-hover:text-orange-800 transition-colors leading-snug">{a.title}</h3>
                        <p className="text-[13.5px] text-slate-500 leading-[1.75]">{a.desc}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-[12px] font-[700] text-orange-700 uppercase tracking-[0.8px]">
                        Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                      {/* bottom sweep bar */}
                      <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400 group-hover:w-full transition-all duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-orange-50 border-t border-orange-100 py-14">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="rounded-2xl border border-orange-100 bg-gradient-to-r from-orange-50 to-white flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-7"
            style={{ boxShadow: '0 4px 24px rgba(154,52,18,0.07)' }}>
            <div>
              <p className="font-display text-[1.6rem] font-[700] text-orange-800 leading-none mb-1">Recognised. Trusted. Proven.</p>
              <p className="text-[13.5px] text-slate-500 leading-[1.7]">Explore our full history, leadership team, and vision for India's energy future.</p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link href="/about" className="brand-btn-primary">About Lokesh Landscape <ArrowRight size={14} /></Link>
              <Link href="/contact" className="brand-btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Back ── */}
      <div className="bg-white border-t border-slate-100 py-6">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <Link href="/about" className="inline-flex items-center gap-2 text-[13px] font-[700] text-orange-700 hover:text-orange-900 transition-colors uppercase tracking-[0.8px]">
            <ArrowLeft size={16} /> Back to About Us
          </Link>
        </div>
      </div>
    </div>
  );
}