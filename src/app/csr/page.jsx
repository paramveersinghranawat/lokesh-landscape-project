import Link from 'next/link';
import { Zap, Users, Leaf, HeartPulse, BookOpen, Globe, CheckCircle2, ArrowRight, Calendar } from 'lucide-react';
import CountUp from '../../components/CountUp';

export const metadata = {
  title: 'CSR | Lokesh Landscape',
  description: 'Lokesh Landscape Corporate Social Responsibility — empowering communities, advancing sustainability, and building India\'s future.',
};

const IMPACT_STATS = [
  { end: 4200,  suffix: '+',    label: 'Villages Electrified'   },
  { end: 6000,  suffix: '+',    label: 'Youth Trained Annually' },
  { end: 120,   prefix: '₹', suffix: ' Cr', label: 'CSR Investment (5 yrs)' },
  { end: 28,    suffix: '+',    label: 'States Impacted'        },
];

const PILLARS = [
  { Icon: Zap,       title: 'Rural Electrification',    stat: '4,200+',  statLabel: 'Villages Lit',    img: 'images/csr-page/csr-1.webp', desc: 'Under DDUGJY and RDSS, we have energised 4,200+ villages, connecting millions of households to reliable electricity for the first time.', initiatives: ['Village lighting programmes', 'Solar micro-grids for tribal hamlets', 'Last-mile connectivity drives', 'Free-of-cost domestic connections'] },
  { Icon: Users,     title: 'Skill Development',        stat: '6,000+',  statLabel: 'Trained/Year',    img: 'images/csr-page/csr-6.webp', desc: 'Through Skill Centres across Jharkhand, Odisha, and UP, we train 6,000+ youth annually in electrical trades under PMKVY.', initiatives: ['Electrical wiring & metering trades', 'PGCIL-certified lineman training', 'Women electrician programme', 'Entrepreneurship incubation'] },
  { Icon: Leaf,      title: 'Environment',              stat: '1 Lakh',  statLabel: 'Trees Planted',   img: 'images/csr-page/csr-7.webp', desc: 'We minimise our ecological footprint through green construction, tree plantation drives, and e-waste recycling partnerships.', initiatives: ['1 lakh trees planted 2020–2024', 'ISO 14001 certified operations', 'Zero liquid discharge at sites', 'Renewable energy at all offices'] },
  { Icon: HeartPulse,title: 'Healthcare',               stat: '80,000+', statLabel: 'Patients/Year',   img: 'images/csr-page/csr-4.webp', desc: 'Mobile health units and free medical camps serve remote communities in project districts, reaching 80,000+ patients annually.', initiatives: ['Mobile health van in 6 districts', 'Free eye & dental camps', 'Maternal & child health support', 'Health insurance for contract workers'] },
  { Icon: BookOpen,  title: 'Education',                stat: '120+',    statLabel: 'Smart Classrooms', img: 'images/csr-page/csr-3.webp', desc: 'Scholarships, smart classrooms, and e-libraries in 120+ government schools across our project regions.', initiatives: ['120+ smart classrooms installed', '1,200 STEM scholarships/year', 'Digital literacy camps', 'School infrastructure upgrades'] },
  { Icon: Globe,     title: 'Women Empowerment',        stat: '12,000+', statLabel: 'Women Supported', img: 'images/csr-page/csr-5.webp', desc: 'Our Shakti programme supports SHG formation, micro-credit access, and livelihood skill training for 12,000+ rural women.', initiatives: ['SHG formation & credit linkage', 'Tailoring & handicraft training', 'Ration shop management by SHGs', 'Leadership development camps'] },
];

const STORIES = [
  { title: 'Skill Centre Opens in Jharkhand Tribal Belt',   date: 'Jan 29, 2025', tag: 'Skill Development',    desc: 'Our newest skill development centre in Khunti, Jharkhand will train 600 youth annually in electrical trades under PMKVY.',           img: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=700' },
  { title: 'Lokesh Landscape Lights Up 200 Villages in Odisha', date: 'Nov 14, 2024', tag: 'Rural Electrification', desc: 'Under the RDSS programme, we energised 200 remote villages in Kandhamal and Kalahandi districts within a single quarter.', img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=700' },
  { title: 'Shakti Programme Empowers 2,000 Women',            date: 'Sep 05, 2024', tag: 'Women Empowerment',   desc: '2,000 women from self-help groups completed livelihood skill training under our Shakti programme in Uttar Pradesh.',              img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=700' },
];

export default function CSRPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ minHeight: '80vh' }}>
        <div className="absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: "url('/images/csr-page/csr-2.webp')" }}
 />
        <div className="absolute inset-0 bg-black/58" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/45 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[3px] z-30 bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />

        <div className="relative z-20 max-w-[1320px] mx-auto px-6 lg:px-12 flex flex-col justify-center"
          style={{ paddingTop: '96px', paddingBottom: '72px', minHeight: '80vh' }}>
          <div className="flex items-center gap-2 text-[12px] text-orange-300 font-[500] mb-10">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-orange-500">/</span>
            <span className="text-white">CSR</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-orange-400" />
                <span className="text-[11px] font-[700] text-orange-300 uppercase tracking-[3px]">Corporate Social Responsibility</span>
              </div>
              <h1 className="h-hero mb-6">
                Powering<br />Communities,<br /><span className="text-orange-400">Changing Lives</span>
              </h1>
              <p className="text-[16px] text-slate-300 leading-[1.8] max-w-[500px] mb-10">
                At Lokesh Landscape, social responsibility is woven into every project and every life we touch across India's most underserved regions.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="#pillars" className="brand-btn-primary">
                  Our Initiatives <ArrowRight size={14} />
                </Link>
                <Link href="#report" className="inline-flex items-center gap-2 px-6 py-3 text-white text-[12.5px] font-[700] tracking-[0.8px] uppercase border border-white/30 rounded-[7px] hover:bg-white/10 transition-all duration-200 no-underline">
                  Download CSR Report
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {IMPACT_STATS.map((s, i) => (
                <div key={i} className="rounded-2xl p-6 text-center hover:scale-[1.02] transition-transform duration-200"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', backdropFilter: 'blur(14px)' }}>
                  <p className="font-display font-[700] text-white leading-none mb-1.5" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
                    <CountUp end={s.end} prefix={s.prefix || ''} suffix={s.suffix} />
                  </p>
                  <p className="text-[10px] font-[700] text-orange-300 uppercase tracking-[2px]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {[{ end: 2, suffix: '%+', label: 'Net Profit to CSR' }, { end: 120, prefix: '₹', suffix: ' Cr', label: '5-Year Investment' }, { end: 80000, suffix: '+', label: 'Healthcare Patients/Yr' }, { end: 1200, suffix: '', label: 'STEM Scholarships/Yr' }].map((s, i) => (
              <div key={i} className="py-8 px-4 text-center hover:bg-orange-50/40 transition-colors duration-150">
                <div className="font-display text-[36px] font-[700] text-orange-800 leading-none">
                  <CountUp end={s.end} prefix={s.prefix || ''} suffix={s.suffix} />
                </div>
                <div className="text-[10px] font-[600] text-slate-400 uppercase tracking-[1.5px] mt-1.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Commitment Banner ── */}
      <section className="relative overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: "url('/images/csr-page/csr-2.webp')" }}
          />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(124,45,18,0.97) 0%, rgba(194,65,12,0.93) 60%, rgba(251,146,60,0.85) 100%)' }} />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-9 bg-orange-200" />
                <span className="text-[11px] font-[700] text-orange-200 uppercase tracking-[3px]">Our Commitment</span>
              </div>
              <h2 className="font-display font-[700] text-white leading-[0.92] mb-4" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}>
                2% of Net Profit<br /><span className="text-amber-300">Invested in Communities</span>
              </h2>
              <p className="text-[15px] text-orange-100 leading-[1.85]">
                Lokesh Landscape allocates a minimum of 2% of average net profits (as mandated by Section 135 of the Companies Act) to CSR — and consistently exceeds this threshold through voluntary community investments.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[{ label: 'Allocated to Rural Development', pct: 42 }, { label: 'Skill & Education Programmes', pct: 28 }, { label: 'Healthcare Initiatives', pct: 18 }, { label: 'Environment & Sustainability', pct: 12 }].map((item, i) => (
                <div key={i} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)' }}>
                  <p className="font-display text-white font-[700] leading-none mb-1" style={{ fontSize: '1.9rem' }}>{item.pct}%</p>
                  <p className="text-[11px] text-orange-100 leading-[1.5] font-[500]">{item.label}</p>
                  <div className="mt-2.5 h-1 rounded-full bg-white/20 overflow-hidden">
                    <div className="h-full rounded-full bg-amber-300" style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Six Pillars ── */}
      <section id="pillars" className="bg-slate-50 border-b border-slate-100 py-20 lg:py-28 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full border border-slate-200 bg-white/60" />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-9 bg-orange-600" />
                <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Our Focus Areas</span>
              </div>
              <h2 className="h-section">
                Six Pillars of<br /><span className="text-orange-700">Community Impact</span>
              </h2>
            </div>
            <p className="text-[15px] text-slate-500 leading-[1.85] lg:max-w-md lg:ml-auto">
              Our strategy is built around six focus areas aligned with the UN Sustainable Development Goals and India's national priorities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {PILLARS.map((p, i) => (
              <div key={i} className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: '0 4px 24px rgba(154,52,18,0.05)' }}>
                <div className="relative overflow-hidden h-40 flex-shrink-0">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-transparent to-transparent" />
                  <div className="absolute bottom-3 right-3 text-right">
                    <p className="font-display text-white font-[700] leading-none" style={{ fontSize: '1.4rem' }}>{p.stat}</p>
                    <p className="text-[9px] font-[600] text-white/75 uppercase tracking-[1.2px]">{p.statLabel}</p>
                  </div>
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/90 border border-white/60 flex items-center justify-center text-orange-700 group-hover:bg-orange-700 group-hover:text-white group-hover:border-orange-700 transition-all duration-300">
                    <p.Icon size={18} />
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-4">
                  <div>
                    <h3 className="text-[16px] font-[700] text-slate-800 group-hover:text-orange-800 transition-colors mb-2">{p.title}</h3>
                    <p className="text-[13px] text-slate-500 leading-[1.75]">{p.desc}</p>
                  </div>
                  <div className="h-px bg-slate-100" />
                  <ul className="flex flex-col gap-2">
                    {p.initiatives.map((item, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-[12.5px] text-slate-600 font-[500]">
                        <CheckCircle2 size={13} className="text-orange-600 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-1.5 text-[12px] font-[700] text-orange-700 uppercase tracking-[0.8px] mt-1">
                    Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent Stories ── */}
      <section className="bg-white border-b border-slate-100 py-20 lg:py-28 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-32 w-[440px] h-[440px] rounded-full border border-slate-200 bg-white/60" />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-9 bg-orange-600" />
                <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">In Action</span>
              </div>
              <h2 className="h-section">
                Recent <span className="text-orange-700">Stories</span>
              </h2>
            </div>
            <Link href="#" className="brand-btn-outline self-start md:self-auto">All Stories <ArrowRight size={13} /></Link>
          </div>

          <div className="grid lg:grid-cols-5 gap-5">
            <article className="group lg:col-span-3 relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1 transition-all duration-300 flex flex-col" style={{ boxShadow: '0 4px 24px rgba(154,52,18,0.06)' }}>
              <div className="relative overflow-hidden flex-shrink-0 h-64 lg:h-72">
                <img src={STORIES[0].img} alt={STORIES[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-2 bg-orange-600 text-white text-[10px] font-[700] uppercase tracking-[1.5px] px-3 py-1 rounded-full">{STORIES[0].tag}</span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white/80 text-[12px] font-[500]">
                  <Calendar size={13} /> {STORIES[0].date}
                </div>
              </div>
              <div className="flex flex-col flex-1 p-7 gap-4">
                <h3 className="font-display font-[700] leading-tight text-slate-900 group-hover:text-orange-800 transition-colors" style={{ fontSize: 'clamp(1.5rem, 2vw, 1.9rem)' }}>{STORIES[0].title}</h3>
                <p className="text-[14px] text-slate-500 leading-[1.8] flex-1">{STORIES[0].desc}</p>
                <div className="pt-5 border-t border-slate-100">
                  <Link href="#" className="inline-flex items-center gap-1.5 text-[12px] font-[700] text-orange-700 uppercase tracking-[0.8px] no-underline">
                    Read More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400 group-hover:w-full transition-all duration-500" />
            </article>

            <div className="lg:col-span-2 flex flex-col gap-5">
              {STORIES.slice(1).map((s, i) => (
                <article key={i} className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1 transition-all duration-300 flex flex-col" style={{ boxShadow: '0 4px 24px rgba(154,52,18,0.06)' }}>
                  <div className="relative overflow-hidden flex-shrink-0 h-40">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 bg-orange-600 text-white text-[10px] font-[700] uppercase tracking-[1.2px] px-2.5 py-0.5 rounded-full">{s.tag}</span>
                    </div>
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/80 text-[11px] font-[500]">
                      <Calendar size={11} /> {s.date}
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-5 gap-3">
                    <h3 className="text-[15px] font-[700] text-slate-800 group-hover:text-orange-800 transition-colors leading-snug">{s.title}</h3>
                    <p className="text-[13px] text-slate-500 leading-[1.75] flex-1 line-clamp-2">{s.desc}</p>
                    <div className="pt-4 border-t border-slate-100">
                      <Link href="#" className="inline-flex items-center gap-1.5 text-[11px] font-[700] text-orange-700 uppercase tracking-[0.8px] no-underline">
                        Read More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400 group-hover:w-full transition-all duration-500" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="report" className="bg-orange-50 border-t border-orange-100 py-14">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="rounded-2xl border border-orange-100 bg-gradient-to-r from-orange-50 to-white flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-7"
            style={{ boxShadow: '0 4px 24px rgba(154,52,18,0.07)' }}>
            <div>
              <p className="font-display text-[1.7rem] font-[700] text-orange-800 leading-none mb-1">Partner With Us on CSR</p>
              <p className="text-[14px] text-slate-500 leading-[1.7]">We welcome collaborations with NGOs, government bodies, and corporates to amplify community impact.</p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link href="/contact" className="brand-btn-primary">Get in Touch <ArrowRight size={14} /></Link>
              <Link href="#" className="brand-btn-outline">Download CSR Report</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}