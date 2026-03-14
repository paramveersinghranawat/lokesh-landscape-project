import Link from 'next/link';

export const metadata = {
  title: 'News & Press | Media Center | Lokesh Landscape',
  description: 'Latest news, press releases, and corporate announcements from Lokesh Landscape Power Distribution.',
};

const NEWS = [
  { id: 1, category: 'Infrastructure', title: 'New 220 kV Distribution Substation Commissioned in Rajasthan', summary: 'The ₹290 Cr Jaipur district project will improve power reliability for 4.5 lakh consumers and reduce outage time by 60%.', date: 'Mar 05, 2026', image: 'https://images.unsplash.com/photo-1541888081622-632001eb7097?q=80&w=800&auto=format&fit=crop' },
  { id: 2, category: 'Renewables',     title: 'Solar Net Metering Programme Expands to 5 New States', summary: 'Our net metering initiative now covers 15 states, enabling 200,000+ households to feed surplus solar energy into the distribution grid.', date: 'Feb 18, 2026', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop' },
  { id: 3, category: 'Technology',     title: 'Smart Meter Rollout Completes for Delhi & NCR Region', summary: 'Over 1.2 million advanced smart meters installed across Delhi-NCR, enabling real-time monitoring and automated billing.', date: 'Feb 02, 2026', image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=800&auto=format&fit=crop' },
  { id: 4, category: 'Awards',         title: 'Lokesh Landscape Wins "Distribution Company of the Year" 2025', summary: 'Recognised at the India Power Awards for our smart grid innovation and best-in-class consumer reliability metrics.', date: 'Jan 20, 2026', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop' },
  { id: 5, category: 'Sustainability', title: 'Green Bonds Issued to Fund ₹1,500 Cr Renewable Integration', summary: 'India\'s first distribution-sector green bond issuance, reinforcing our commitment to clean energy infrastructure.', date: 'Jan 08, 2026', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop' },
  { id: 6, category: 'Infrastructure', title: 'Rural Electrification Programme Reaches 500 Villages in MP', summary: 'Under PM Saubhagya, Lokesh Landscape connects half a million rural consumers in Madhya Pradesh to the grid.', date: 'Dec 15, 2025', image: 'https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?q=80&w=800&auto=format&fit=crop' },
];

const catColor = {
  Infrastructure: 'bg-orange-50 text-orange-700 border-orange-100',
  Renewables:     'bg-emerald-50 text-emerald-700 border-emerald-100',
  Technology:     'bg-amber-50 text-amber-700 border-amber-100',
  Awards:         'bg-purple-50 text-purple-700 border-purple-100',
  Sustainability: 'bg-green-50 text-green-700 border-green-100',
};

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function NewsPage() {
  const [featured, ...rest] = NEWS;
  return (
    <div>
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1600')" }} />
        <div className="absolute inset-0 bg-white/90" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />
        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-[12px] text-orange-600 font-[500] mb-6">
            <Link href="/" className="hover:text-orange-800 transition-colors">Home</Link>
            <span className="text-orange-300">/</span>
            <Link href="/media" className="hover:text-orange-800 transition-colors">Media Center</Link>
            <span className="text-orange-300">/</span>
            <span className="text-slate-700">News & Press</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-9 bg-orange-600" />
            <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">News & Press</span>
          </div>
          <h1 className="font-[700] leading-[0.92] text-slate-900" style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)' }}>
            Latest <span className="text-orange-700">Announcements</span>
          </h1>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          {/* featured */}
          <article className="group grid lg:grid-cols-5 gap-0 bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1 transition-all duration-300 mb-8" style={{ boxShadow: '0 4px 24px rgba(120,40,15,0.06)' }}>
            <div className="lg:col-span-3 relative overflow-hidden h-64 lg:h-auto">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-transparent" />
              <span className={`absolute top-4 left-4 text-[10px] font-[700] uppercase tracking-[1.5px] px-3 py-1 rounded-full border ${catColor[featured.category]}`}>{featured.category}</span>
            </div>
            <div className="lg:col-span-2 p-7 lg:p-10 flex flex-col">
              <span className="text-[10.5px] font-[700] uppercase tracking-[2px] text-orange-600 mb-2">Featured</span>
              <p className="text-[11px] text-slate-400 font-[500] mb-3">{featured.date}</p>
              <h2 className="font-[700] leading-[1.05] text-slate-900 group-hover:text-orange-800 transition-colors mb-4" style={{ fontSize: 'clamp(1.4rem, 2vw, 1.8rem)' }}>{featured.title}</h2>
              <p className="text-[14px] text-slate-500 leading-[1.8] flex-1">{featured.summary}</p>
              <div className="mt-6 flex items-center gap-1.5 text-[12px] font-[700] text-orange-700 uppercase tracking-[0.8px]">Read Full Story <ArrowRight /></div>
            </div>
          </article>

          {/* grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map(n => (
              <article key={n.id} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/50 hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: '0 4px 24px rgba(120,40,15,0.04)' }}>
                <div className="relative overflow-hidden h-44">
                  <img src={n.image} alt={n.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                  <span className={`absolute top-3 left-3 text-[10px] font-[700] uppercase tracking-[1.5px] px-2.5 py-1 rounded-full border ${catColor[n.category]}`}>{n.category}</span>
                </div>
                <div className="p-5">
                  <p className="text-[10.5px] text-slate-400 font-[500] mb-2">{n.date}</p>
                  <h3 className="text-[14.5px] font-[700] text-slate-800 group-hover:text-orange-800 transition-colors leading-snug mb-3">{n.title}</h3>
                  <p className="text-[13px] text-slate-500 leading-[1.75] line-clamp-2">{n.summary}</p>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-[700] text-orange-700 uppercase tracking-[0.8px]">
                    Read More <ArrowRight />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
