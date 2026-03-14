import Link from 'next/link';

export const metadata = {
  title: 'Media Center | Lokesh Landscape',
  description: 'News, press releases, photos, videos, and publications from Lokesh Landscape Power Distribution.',
};

const LATEST_NEWS = [
  { category: 'Infrastructure', title: 'New Distribution Substation Commissioned in Rajasthan', date: 'Mar 05, 2026', image: 'https://images.unsplash.com/photo-1541888081622-632001eb7097?q=80&w=600&auto=format&fit=crop', href: '/media/news' },
  { category: 'Renewables',    title: 'Solar Net Metering Programme Expands to 5 New States', date: 'Feb 18, 2026', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop', href: '/media/news' },
  { category: 'Technology',   title: 'Smart Meter Rollout Completes for Delhi & NCR Region',  date: 'Feb 02, 2026', image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=600&auto=format&fit=crop', href: '/media/news' },
];

const categoryColor = {
  Infrastructure: 'bg-orange-50 text-orange-700 border-orange-100',
  Renewables:     'bg-emerald-50 text-emerald-700 border-emerald-100',
  Technology:     'bg-amber-50 text-amber-700 border-amber-100',
};

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const MEDIA_SECTIONS = [
  { title: 'News & Press', href: '/media/news', desc: 'Corporate announcements, project updates, and press releases.', count: '24 articles', emoji: '📰' },
  { title: 'Photo Gallery', href: '/media/gallery', desc: 'High-resolution images of our projects, teams, and operations.', count: '180+ photos', emoji: '📷' },
  { title: 'Videos', href: '/media/videos', desc: 'Project walk-throughs, corporate films, and technical animations.', count: '32 videos', emoji: '🎬' },
  { title: 'Publications', href: '/media/publications', desc: 'Whitepapers, brochures, and technical documentation.', count: '15 documents', emoji: '📄' },
];

export default function MediaPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1600')" }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/55 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />

        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-[12px] text-orange-300 font-[500] mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-orange-600">/</span>
            <span className="text-white">Media Center</span>
          </div>
          <div className="max-w-[680px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-orange-400" />
              <span className="text-[11px] font-[700] text-orange-300 uppercase tracking-[3px]">Media Center</span>
            </div>
            <h1 className="text-white leading-[0.92] mb-6" style={{ fontSize: 'clamp(52px, 7vw, 82px)', fontWeight: 700 }}>
              Stories From<br /><span className="text-orange-400">The Grid</span>
            </h1>
            <p className="text-[16px] text-slate-300 leading-[1.8]">
              News, milestones, photography, and publications from India's leading power distribution company.
            </p>
          </div>
        </div>
      </section>

      {/* ── Media Sections ── */}
      <section className="bg-slate-50 border-b border-slate-100 py-16">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MEDIA_SECTIONS.map((s, i) => (
              <Link key={i} href={s.href}
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3 no-underline">
                <div className="text-3xl">{s.emoji}</div>
                <div>
                  <h3 className="text-[16px] font-[700] text-slate-800 group-hover:text-orange-800 transition-colors">{s.title}</h3>
                  <p className="text-[12px] font-[600] text-orange-500 mt-0.5">{s.count}</p>
                  <p className="text-[13px] text-slate-500 leading-[1.7] mt-2">{s.desc}</p>
                </div>
                <div className="flex items-center gap-1.5 text-[12px] font-[700] text-orange-700 uppercase tracking-[0.8px] mt-auto">
                  Browse <ArrowRight />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest News ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-9 bg-orange-600" />
                <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Latest Updates</span>
              </div>
              <h2 className="font-[700] leading-[0.92] text-slate-900" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)' }}>
                Recent <span className="text-orange-700">News</span>
              </h2>
            </div>
            <Link href="/media/news" className="hidden sm:inline-flex items-center gap-2 px-6 py-3 border border-orange-200 text-orange-800 text-[12.5px] font-[700] tracking-[0.8px] uppercase rounded-[7px] bg-white hover:bg-orange-50 hover:border-orange-400 transition-all duration-200 no-underline">
              All News <ArrowRight />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {LATEST_NEWS.map((n, i) => (
              <Link key={i} href={n.href}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1 transition-all duration-300 flex flex-col no-underline" style={{ boxShadow: '0 4px 24px rgba(120,40,15,0.06)' }}>
                <div className="relative overflow-hidden h-44">
                  <img src={n.image} alt={n.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                  <span className={`absolute top-3 left-3 text-[10px] font-[700] uppercase tracking-[1.5px] px-2.5 py-1 rounded-full border ${categoryColor[n.category]}`}>{n.category}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[11px] text-slate-400 font-[500] mb-2">{n.date}</p>
                  <h3 className="text-[15px] font-[700] text-slate-800 group-hover:text-orange-800 transition-colors leading-snug">{n.title}</h3>
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-[700] text-orange-700 uppercase tracking-[0.8px]">
                    Read More <ArrowRight />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
