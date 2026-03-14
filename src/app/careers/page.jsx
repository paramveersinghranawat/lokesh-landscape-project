import Link from 'next/link';

export const metadata = {
  title: 'Careers | Lokesh Landscape',
  description: 'Join the Lokesh Landscape team — career opportunities in power distribution, engineering, technology, and more.',
};

const OPENINGS = [
  { title: 'Senior Electrical Engineer',     dept: 'Engineering',    loc: 'New Delhi',  type: 'Full-Time' },
  { title: 'Project Manager – Distribution', dept: 'Project Mgmt',  loc: 'Mumbai',     type: 'Full-Time' },
  { title: 'SCADA Systems Analyst',          dept: 'Technology',     loc: 'Bengaluru',  type: 'Full-Time' },
  { title: 'Smart Meter Technician',         dept: 'Field Ops',      loc: 'Jaipur',     type: 'Full-Time' },
  { title: 'ESG & Sustainability Lead',      dept: 'Sustainability', loc: 'New Delhi',  type: 'Full-Time' },
  { title: 'Chartered Accountant – Finance', dept: 'Finance',        loc: 'Gurugram',   type: 'Full-Time' },
];

const VALUES = [
  { icon: '⚡', title: 'Innovation First',   desc: 'We invest in smart grid technology, digital tools, and continuous learning to keep our teams and infrastructure ahead of the curve.' },
  { icon: '🤝', title: 'People Powered',    desc: 'Over 8,000 professionals drive our success. We prioritise safety, well-being, and professional growth at every level.' },
  { icon: '🌱', title: 'Sustainable Mission', desc: 'Work on projects that directly contribute to Indias clean energy transition and sustainable infrastructure. Your work has real impact.' },
  { icon: '📈', title: 'Grow With Us',       desc: 'Structured career paths, mentorship programmes, and global exposure — we build leaders from within.' },
];

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function CareersPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1600')" }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/55 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />

        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-[12px] text-orange-300 font-[500] mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-orange-600">/</span>
            <span className="text-white">Careers</span>
          </div>
          <div className="max-w-[700px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-orange-500" />
              <span className="text-[11px] font-[700] text-orange-300 uppercase tracking-[3px]">Join Our Team</span>
            </div>
            <h1 className="text-white leading-[0.92] mb-6" style={{ fontSize: 'clamp(52px, 7.5vw, 88px)', fontWeight: 700 }}>
              Power India's<br /><span className="text-orange-500">Energy Future</span>
            </h1>
            <p className="text-[16px] text-slate-300 leading-[1.8] max-w-[560px]">
              Join 8,000+ professionals working on some of India's most critical power infrastructure. Be part of a company that energises millions of lives every day.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#openings" className="brand-btn-primary">View Open Roles</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {[
              { v: '8,000+', l: 'Employees' },
              { v: '28+',    l: 'Work Locations' },
              { v: '35+',    l: 'Years of Growth' },
              { v: '4.4★',   l: 'Glassdoor Rating' },
            ].map(s => (
              <div key={s.l} className="py-8 px-4 text-center hover:bg-orange-50/40 transition-colors duration-150">
                <div className="font-display text-[36px] font-[700] text-orange-800 leading-none">{s.v}</div>
                <div className="text-[10px] font-[600] text-slate-400 uppercase tracking-[1.5px] mt-1.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Join Us ── */}
      <section className="bg-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />
        <div className="pointer-events-none absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full border border-slate-100 bg-slate-50/60" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-9 bg-orange-600" />
              <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Why Lokesh Landscape</span>
              <div className="h-px w-9 bg-orange-600" />
            </div>
            <h2 className="font-[700] leading-[0.92] text-slate-900" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)' }}>
              More Than a <span className="text-orange-700">Job</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-[16px] font-[700] text-slate-800 mb-2">{v.title}</h3>
                <p className="text-[13.5px] text-slate-500 leading-[1.75]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions ── */}
      <section id="openings" className="bg-slate-50 border-t border-slate-100 py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-9 bg-orange-600" />
              <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Open Positions</span>
            </div>
            <h2 className="font-[700] leading-[0.92] text-slate-900" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)' }}>
              Current <span className="text-orange-700">Openings</span>
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {OPENINGS.map((job, i) => (
              <div key={i}
                className="group flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-slate-200 rounded-2xl px-6 py-5 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/50 hover:-translate-y-0.5 transition-all duration-200"
                style={{ boxShadow: '0 2px 8px rgba(120,40,15,0.04)' }}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div>
                    <h3 className="text-[15px] font-[700] text-slate-800 group-hover:text-orange-800 transition-colors">{job.title}</h3>
                    <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                      <span className="text-[11px] font-[600] text-orange-600 bg-orange-50 border border-orange-100 px-2.5 py-0.5 rounded-full">{job.dept}</span>
                      <span className="text-[11px] text-slate-400 font-[500]">📍 {job.loc}</span>
                      <span className="text-[11px] text-slate-400 font-[500]">🕐 {job.type}</span>
                    </div>
                  </div>
                </div>
                <a href="#apply"
                  className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-br from-orange-800 to-orange-600 text-white text-[12px] font-[700] tracking-[0.7px] uppercase rounded-[7px] shadow-md shadow-orange-200 hover:-translate-y-[1px] transition-all duration-200 no-underline flex-shrink-0">
                  Apply Now <ArrowRight />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-[14px] text-slate-500 mb-4">Don't see your role? We're always looking for exceptional talent.</p>
            <a href="mailto:careers@lokeshlandscape.in" className="brand-btn-outline">Send Speculative Application</a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-br from-orange-900 to-orange-700 py-16 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '52px 52px' }} />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12 text-center">
          <p className="text-[10.5px] font-[700] text-orange-300 uppercase tracking-[3px] mb-3">Ready to Apply?</p>
          <h2 className="text-white font-[700] leading-none mb-4" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
            Let's Build India's Grid Together
          </h2>
          <p className="text-orange-200 text-[15px] mb-8 max-w-lg mx-auto">
            careers@lokeshlandscape.in · HR Helpline: +91 124 4567 890
          </p>
          <a href="mailto:careers@lokeshlandscape.in"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-orange-800 text-[13px] font-[700] tracking-[0.8px] uppercase rounded-[7px] shadow-md hover:bg-orange-50 hover:-translate-y-[2px] transition-all duration-200 no-underline">
            Get In Touch <ArrowRight />
          </a>
        </div>
      </section>
    </div>
  );
}
