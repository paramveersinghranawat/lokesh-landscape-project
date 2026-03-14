import Link from 'next/link';

export const metadata = {
  title: 'Leadership | Lokesh Landscape',
  description: 'Meet the experienced leadership team driving India\'s power infrastructure forward at Lokesh Landscape.',
};

const LEADERS = [
  { name: 'Rajiv Sharma',   title: 'Chairman & Managing Director', bio: '40+ years in power sector. Former Chairman of PGCIL. Visionary behind Lokesh Landscape\'s Smart Grid transformation.', initials: 'RS' },
  { name: 'Priya Menon',    title: 'Chief Executive Officer',       bio: 'IIT Delhi alumna and Harvard Business School graduate. Led revenue growth from ₹5,000 Cr to ₹18,000 Cr in 8 years.', initials: 'PM' },
  { name: 'Anil Gupta',     title: 'Chief Operating Officer',       bio: '30+ years in EPC project execution. Responsible for delivery of 400+ substation projects across India.', initials: 'AG' },
  { name: 'Sunita Rao',     title: 'Chief Financial Officer',        bio: 'Chartered Accountant with 25 years of infrastructure finance. Spearheaded our ₹3,200 Cr green bond issuance.', initials: 'SR' },
  { name: 'Dr. Vikram Joshi', title: 'Chief Technology Officer',    bio: 'PhD in Power Systems from IISc. Leads R&D in SCADA, AMI, and AI-based predictive grid management.', initials: 'VJ' },
  { name: 'Meera Kapoor',   title: 'Chief Human Resources Officer', bio: '20 years in talent development. Oversees our 8,000+ workforce across 28 states.', initials: 'MK' },
];

const ArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

export default function LeadershipPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about-page/leadership.webp')" }} />
        <div className="absolute inset-0 bg-black/62" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/50 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />

        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-[12px] text-orange-300 font-[500] mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-orange-500">/</span>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <span className="text-orange-500">/</span>
            <span className="text-white">Leadership</span>
          </div>
          <div className="max-w-[680px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-orange-400" />
              <span className="text-[11px] font-[700] text-orange-300 uppercase tracking-[3px]">Our People</span>
            </div>
            <h1 className="h-hero mb-6">
              Leadership<br /><span className="text-orange-500">Team</span>
            </h1>
            <p className="text-[16px] text-slate-300 leading-[1.8] max-w-[560px]">
              Decades of experience in power infrastructure, finance, and technology — united by a single goal: a reliable, modern grid for every Indian.
            </p>
          </div>
        </div>
      </section>

      {/* ── Leaders Grid ── */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-9 bg-orange-600" />
              <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Executive Team</span>
              <div className="h-px w-9 bg-orange-600" />
            </div>
            <h2 className="h-section">
              Meet Our <span className="text-orange-700">Leaders</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {LEADERS.map(l => (
              <div key={l.name}
                className="group relative bg-white border border-slate-200 rounded-2xl p-7 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-[60px] h-[60px] rounded-xl bg-gradient-to-br from-orange-800 to-orange-600 flex items-center justify-center shadow-md shadow-orange-200/60 flex-shrink-0">
                    <span className="font-display text-[22px] font-[700] text-white">{l.initials}</span>
                  </div>
                  <div>
                    <h3 className="text-[16px] font-[700] text-slate-900 group-hover:text-orange-800 transition-colors leading-snug">{l.name}</h3>
                    <p className="text-[12px] font-[600] text-orange-600 mt-0.5">{l.title}</p>
                  </div>
                </div>
                <div className="h-px bg-slate-100 mb-4" />
                <p className="text-[13.5px] text-slate-500 leading-[1.75]">{l.bio}</p>
                {/* bottom bar */}
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Back ── */}
      <div className="bg-white border-t border-slate-100 py-6">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <Link href="/about" className="inline-flex items-center gap-2 text-[13px] font-[700] text-orange-700 hover:text-orange-900 transition-colors uppercase tracking-[0.8px]">
            <ArrowLeft /> Back to About Us
          </Link>
        </div>
      </div>
    </div>
  );
}
