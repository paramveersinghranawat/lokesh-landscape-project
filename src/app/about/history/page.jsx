import Link from 'next/link';

export const metadata = {
  title: 'Our History | Lokesh Landscape',
  description: 'The journey of Lokesh Landscape — from a regional EPC contractor in 1989 to India\'s trusted power infrastructure leader.',
};

const TIMELINE = [
  { year: '1989', title: 'Founded in New Delhi',        desc: 'Lokesh Landscape incorporated with a vision to modernise India\'s electricity distribution network. First project: 11/0.4 kV rural distribution in Uttar Pradesh.', highlight: true },
  { year: '1995', title: 'EHV Transmission Entry',      desc: 'Secured first 132 kV substation contract in Rajasthan, marking our entry into the high-voltage transmission segment.', highlight: false },
  { year: '2000', title: 'Pan-India Expansion',         desc: 'Opened regional offices in Mumbai, Chennai, Kolkata, and Bhopal. Workforce crossed 500 professionals.', highlight: false },
  { year: '2003', title: 'Public Listing on BSE',       desc: 'Listed on Bombay Stock Exchange, raising ₹320 Cr to fund infrastructure expansion and equipment procurement.', highlight: true },
  { year: '2008', title: 'RGGVY Rural Electrification', desc: 'Awarded landmark RGGVY contract to electrify 1,200 villages in Jharkhand and Chhattisgarh under government initiative.', highlight: false },
  { year: '2011', title: '10 GW Installed Milestone',   desc: 'Cumulative installed capacity managed crosses 10 GW — a landmark in our transmission journey.', highlight: true },
  { year: '2015', title: 'Smart Grid Pilot',            desc: 'Launched India\'s first neighbourhood-level AMI pilot in Pune with 50,000 smart meters.', highlight: false },
  { year: '2019', title: 'Smart Grid ERA & RDSS',       desc: 'Awarded six RDSS packages worth ₹8,400 Cr across UP, Bihar, and Odisha. Smart meter deployment crosses 1 million units.', highlight: true },
  { year: '2021', title: 'Renewable Integration',      desc: 'New business vertical for solar and wind grid evacuation, BESS installations, and green hydrogen corridor projects.', highlight: false },
  { year: '2025', title: 'National Footprint',          desc: 'Operates across all 28 Indian states. Revenue exceeds ₹18,000 Cr. Workforce: 8,000+ professionals.', highlight: true },
];

const ArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

export default function HistoryPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1400')" }} />
        <div className="absolute inset-0 bg-black/62" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/50 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />

        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-[12px] text-orange-300 font-[500] mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-orange-500">/</span>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <span className="text-orange-500">/</span>
            <span className="text-white">History</span>
          </div>
          <div className="max-w-[680px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-orange-400" />
              <span className="text-[11px] font-[700] text-orange-300 uppercase tracking-[3px]">35 Years of Impact</span>
            </div>
            <h1 className="h-hero mb-6">
              Our <span className="text-orange-500">Journey</span>
            </h1>
            <p className="text-[16px] text-slate-300 leading-[1.8] max-w-[560px]">
              From a single substation project in 1989 to India's most trusted power infrastructure company — a timeline of milestones that define who we are.
            </p>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[80px] top-0 bottom-0 w-px bg-gradient-to-b from-orange-600 via-orange-200 to-transparent hidden md:block" />

            <div className="flex flex-col gap-0">
              {TIMELINE.map((item) => (
                <div key={item.year} className="relative flex gap-6 md:gap-10 items-start group pb-10 last:pb-0">

                  {/* Year column */}
                  <div className="flex-shrink-0 w-[72px] text-right hidden md:block pt-1">
                    <span className="font-display text-[22px] font-[700] text-orange-700 leading-none">{item.year}</span>
                  </div>

                  {/* Dot */}
                  <div className="relative flex-shrink-0 hidden md:flex items-start justify-center w-[18px] mt-1.5">
                    <div className={`w-[14px] h-[14px] rounded-full border-2 border-orange-600 z-10 transition-colors duration-200 ${item.highlight ? 'bg-orange-600' : 'bg-white'} group-hover:bg-orange-600`} />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 rounded-2xl p-6 border transition-all duration-200 hover:shadow-lg ${item.highlight ? 'bg-orange-50 border-orange-100' : 'bg-slate-50 border-slate-200 hover:border-orange-100'}`}>
                    <div className="md:hidden text-[13px] font-[700] text-orange-700 mb-1">{item.year}</div>
                    <h3 className="text-[16px] font-[700] text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-[13.5px] text-slate-500 leading-[1.75]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
