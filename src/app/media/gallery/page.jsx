import Link from 'next/link';

export const metadata = {
  title: 'Photo Gallery | Media Center | Lokesh Landscape',
  description: 'High-resolution images of our power distribution projects, field teams, and operational infrastructure.',
};

const PHOTOS = [
  { title: 'Rajasthan 220kV Substation',  cat: 'Substations', img: 'https://images.unsplash.com/photo-1541888081622-632001eb7097?q=80&w=800&auto=format&fit=crop' },
  { title: 'Smart Meter Installation',    cat: 'Technology',  img: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=800&auto=format&fit=crop' },
  { title: 'Solar Farm Integration',      cat: 'Renewables',  img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop' },
  { title: 'HV Transmission Tower',       cat: 'Network',     img: 'https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?q=80&w=800&auto=format&fit=crop' },
  { title: 'Control Room Operations',     cat: 'Operations',  img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop' },
  { title: 'Rural Electrification Drive', cat: 'Community',   img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop' },
  { title: 'Field Maintenance Crew',      cat: 'Operations',  img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop' },
  { title: 'Urban Distribution Network',  cat: 'Network',     img: 'https://images.unsplash.com/photo-1531745526756-a3840885d4bc?q=80&w=800&auto=format&fit=crop' },
  { title: 'Award Ceremony 2025',         cat: 'Events',      img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop' },
];

export default function GalleryPage() {
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
            <span className="text-slate-700">Photo Gallery</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-9 bg-orange-600" />
            <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Photo Gallery</span>
          </div>
          <h1 className="font-[700] leading-[0.92] text-slate-900" style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)' }}>
            From the <span className="text-orange-700">Field</span>
          </h1>
          <p className="text-[15px] text-slate-500 mt-3">180+ high-resolution images from our projects across India.</p>
        </div>
      </section>

      <section className="bg-slate-50 py-12 lg:py-16">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {PHOTOS.map((p, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-video bg-slate-200"
                style={{ boxShadow: '0 4px 20px rgba(120,40,15,0.08)', gridRow: i === 0 || i === 4 ? 'span 1' : '' }}>
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] font-[700] text-orange-300 uppercase tracking-[1.5px]">{p.cat}</span>
                  <p className="text-[14px] font-[700] text-white leading-snug">{p.title}</p>
                </div>
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-[700] uppercase tracking-[1px] px-2 py-0.5 rounded-full bg-orange-600 text-white">{p.cat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
