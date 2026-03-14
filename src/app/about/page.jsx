import Link from 'next/link';

export const metadata = {
  title: 'About Us | Lokesh Landscape',
  description: 'Learn about Lokesh Landscape — India\'s trusted power distribution company since 1989.',
};

const STATS = [
  { value: '35+',        label: 'Years of Excellence' },
  { value: '28+',        label: 'States Served' },
  { value: '99.98%',     label: 'Grid Reliability' },
  { value: '5,000+',     label: 'Skilled Workforce' },
  { value: '₹18,000 Cr', label: 'Projects Executed' },
  { value: '12 GW',      label: 'Installed Capacity' },
];

const SUB_PAGES = [
  {
    href: '/about/leadership',
    title: 'Leadership',
    desc: 'Meet the experienced executives steering Lokesh Landscape towards a sustainable energy future.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    href: '/about/vision-mission',
    title: 'Vision & Mission',
    desc: 'Our strategic vision to power every corner of India and the mission that drives us every day.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
  {
    href: '/about/history',
    title: 'History',
    desc: 'Three and a half decades of milestones — from our founding in 1989 to the grid of tomorrow.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 3v5h5"/><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/>
      </svg>
    ),
  },
  {
    href: '/about/awards',
    title: 'Awards & Recognition',
    desc: 'Industry accolades and certifications that reflect our commitment to quality and excellence.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <div>

        {/* ── Hero ── */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: "url(images/about-page/about-2.webp)" }} />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />

          <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[12px] text-orange-300 font-[500] mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-orange-600">/</span>
              <span className="text-white">About Us</span>
            </div>

            <div className="max-w-[680px]">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-orange-400" />
                <span className="text-[11px] font-[700] text-orange-300 uppercase tracking-[3px]">Who We Are</span>
              </div>
              <h1 className="text-[64px] lg:text-[80px] font-[700] text-white leading-[0.92] mb-6">
                Powering Landscapes<br /><span className="text-orange-500">Since 1989</span>
              </h1>
              <p className="text-[16px] text-slate-300 leading-[1.8] max-w-[580px]">
                Lokesh Landscape is one of India's most trusted power distribution companies — designing, building, operating, and maintaining power assets across 28+ states for over three decades.
              </p>
            </div>
          </div>
        </section>

        {/* ── Stats strip ── */}
        <section className="bg-white border-b border-slate-100">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-slate-100">
              {STATS.map(s => (
                <div key={s.label} className="py-8 px-4 text-center hover:bg-orange-50/40 transition-colors duration-150">
                  <div className="text-[36px] font-[700] text-orange-800 leading-none">{s.value}</div>
                  <div className="text-[10px] font-[600] text-slate-400 uppercase tracking-[1.5px] mt-1.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Company overview ── */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(15,40,120,0.12)]">
                  <img
                    src="images/about-page/about.webp"
                    alt="Lokesh Landscape control room"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-900/25 to-transparent" />
                </div>
                {['top-0 left-0 border-t-[3px] border-l-[3px]','top-0 right-0 border-t-[3px] border-r-[3px]'].map((c,i) => (
                  <div key={i} className={`absolute ${c} w-7 h-7 border-orange-500`} />
                ))}
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="h-px w-9 bg-orange-600" />
                  <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Our Story</span>
                </div>
                <h2 className="text-[48px] lg:text-[58px] font-[700] leading-[0.95] text-slate-900">
                  Built on <span className="text-orange-700">Trust,</span><br />Driven by <span className="text-orange-700">Purpose</span>
                </h2>
                <p className="text-[15px] text-slate-500 leading-[1.85]">
                  Established in 1989, Lokesh Landscape began as a regional EPC contractor and has since grown into a pan-India power infrastructure leader. Our journey spans high-voltage transmission corridors, urban distribution networks, smart metering deployments, and rural electrification programmes.
                </p>
                <p className="text-[15px] text-slate-500 leading-[1.85]">
                  Today, with a workforce of over 5,000 professionals, we execute complex projects across the entire power value chain — always on time, always within budget, and always beyond expectation.
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <Link href="/about/history" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-orange-800 to-orange-600 text-white text-[12.5px] font-[700] tracking-[0.8px] uppercase rounded-[7px] shadow-md shadow-orange-200 hover:-translate-y-[2px] transition-all duration-200">
                    View Our History
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Sub-pages navigation cards ── */}
        <section className="bg-slate-50 py-16 lg:py-20 border-t border-slate-100">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-9 bg-orange-600" />
                <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Explore More</span>
                <div className="h-px w-9 bg-orange-600" />
              </div>
              <h2 className="text-[44px] lg:text-[54px] font-[700] text-slate-900 leading-none">
                Learn More <span className="text-orange-700">About Us</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {SUB_PAGES.map(p => (
                <Link key={p.href} href={p.href}
                  className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/60 hover:-translate-y-1 transition-all duration-200 flex flex-col gap-4">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-700 group-hover:bg-orange-700 group-hover:text-white group-hover:border-orange-700 transition-all duration-200">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-[700] text-slate-800 group-hover:text-orange-800 transition-colors mb-1.5">{p.title}</h3>
                    <p className="text-[13px] text-slate-500 leading-[1.7]">{p.desc}</p>
                  </div>
                  <div className="mt-auto inline-flex items-center gap-1.5 text-[12px] font-[700] text-orange-700 uppercase tracking-[0.8px]">
                    Read More
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
