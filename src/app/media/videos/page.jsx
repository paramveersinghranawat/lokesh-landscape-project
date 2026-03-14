import Link from 'next/link';

export const metadata = {
  title: 'Videos | Media Center | Lokesh Landscape',
  description: 'Corporate films, project walkthroughs, and technical videos from Lokesh Landscape.',
};

const VIDEOS = [
  { title: 'Lokesh Landscape — Corporate Overview 2025', cat: 'Corporate', duration: '4:32', thumb: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop' },
  { title: 'Smart Grid Journey: Delhi-NCR AMI Deployment', cat: 'Case Study', duration: '7:14', thumb: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=800&auto=format&fit=crop' },
  { title: 'How a 220 kV Substation is Built', cat: 'Technical', duration: '12:08', thumb: 'https://images.unsplash.com/photo-1541888081622-632001eb7097?q=80&w=800&auto=format&fit=crop' },
  { title: 'Renewable Integration: Connecting Solar to the Grid', cat: 'Technical', duration: '9:45', thumb: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop' },
  { title: 'Rural Electrification Success Stories', cat: 'Community', duration: '6:22', thumb: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop' },
  { title: 'India Power Awards 2025 — Highlights', cat: 'Events', duration: '3:15', thumb: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop' },
];

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

export default function VideosPage() {
  return (
    <div>
      <section className="relative py-16 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />
        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-[12px] text-orange-600 font-[500] mb-6">
            <Link href="/" className="hover:text-orange-800 transition-colors">Home</Link>
            <span className="text-orange-300">/</span>
            <Link href="/media" className="hover:text-orange-800 transition-colors">Media Center</Link>
            <span className="text-orange-300">/</span>
            <span className="text-slate-700">Videos</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-9 bg-orange-600" />
            <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Video Library</span>
          </div>
          <h1 className="font-[700] leading-[0.92] text-slate-900" style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)' }}>
            Watch &amp; <span className="text-orange-700">Learn</span>
          </h1>
          <p className="text-[15px] text-slate-500 mt-3">32 corporate films, technical demonstrations, and community stories.</p>
        </div>
      </section>

      <section className="bg-slate-50 py-12 lg:py-16">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VIDEOS.map((v, i) => (
              <div key={i} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer" style={{ boxShadow: '0 4px 20px rgba(120,40,15,0.05)' }}>
                <div className="relative overflow-hidden h-44">
                  <img src={v.thumb} alt={v.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-900/40 group-hover:scale-110 transition-transform duration-300 pl-0.5">
                      <PlayIcon />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[11px] font-[600] px-2 py-0.5 rounded">{v.duration}</div>
                  <span className="absolute top-3 left-3 text-[10px] font-[700] uppercase tracking-[1px] px-2.5 py-1 rounded-full bg-orange-600 text-white">{v.cat}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-[14.5px] font-[700] text-slate-800 group-hover:text-orange-800 transition-colors leading-snug">{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
