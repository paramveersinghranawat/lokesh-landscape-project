import Link from 'next/link';
import CountUp from '../../components/CountUp';

export const metadata = {
  title: 'Investor Relations | Lokesh Landscape',
  description: 'Investor relations, financial reports, governance, and shareholder information for Lokesh Landscape Power Distribution.',
};

const FINANCIALS = [
  { year: 'FY 2024–25', revenue: '₹4,820 Cr', ebitda: '₹964 Cr', pat: '₹482 Cr', margin: '20%' },
  { year: 'FY 2023–24', revenue: '₹4,210 Cr', ebitda: '₹842 Cr', pat: '₹421 Cr', margin: '20%' },
  { year: 'FY 2022–23', revenue: '₹3,650 Cr', ebitda: '₹730 Cr', pat: '₹365 Cr', margin: '20%' },
  { year: 'FY 2021–22', revenue: '₹3,080 Cr', ebitda: '₹616 Cr', pat: '₹308 Cr', margin: '20%' },
];

const KEY_METRICS = [
  { display: null, end: 4820,  prefix: '₹', suffix: ' Cr',  label: 'FY25 Revenue' },
  { display: '20%',  end: null,                               label: 'EBITDA Margin' },
  { display: 'AAA',  end: null,                               label: 'Credit Rating' },
  { display: null, end: 18000, prefix: '₹', suffix: ' Cr',  label: 'Order Book' },
  { display: null, end: 35,    prefix: '',  suffix: '+',     label: 'Years Listed' },
  { display: null, end: 28,    prefix: '',  suffix: '+',     label: 'States Presence' },
];

const REPORTS = [
  { title: 'Annual Report 2024–25', type: 'Annual Report', size: '12.4 MB', href: '#' },
  { title: 'Q4 FY25 Results',       type: 'Quarterly Results', size: '2.1 MB', href: '#' },
  { title: 'Q3 FY25 Results',       type: 'Quarterly Results', size: '1.9 MB', href: '#' },
  { title: 'ESG Report 2024',       type: 'ESG Report',  size: '8.7 MB', href: '#' },
  { title: 'Annual Report 2023–24', type: 'Annual Report', size: '11.2 MB', href: '#' },
  { title: 'Investor Presentation Apr 2025', type: 'Presentation', size: '5.3 MB', href: '#' },
];

const GOVERNANCE = [
  { name: 'Rajesh K. Lokesh',   role: 'Chairman & Managing Director' },
  { name: 'Priya Sharma',       role: 'Non-Executive Independent Director' },
  { name: 'Arun Mehta',         role: 'Chief Financial Officer' },
  { name: 'Deepa R. Nair',      role: 'Company Secretary & Compliance Officer' },
];

const EVENTS = [
  { date: 'May 29, 2025', event: 'Q4 FY25 Board Meeting & Results' },
  { date: 'Jul 15, 2025', event: 'Annual General Meeting (AGM) 2025' },
  { date: 'Aug 12, 2025', event: 'Q1 FY26 Results' },
  { date: 'Nov 10, 2025', event: 'Q2 FY26 Results' },
];

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

export default function InvestorsPage() {
  return (
    <div>

      {/* ── Hero ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('images/investor-page/img-1.webp" }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/60 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />

        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-[12px] text-orange-300 font-[500] mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-orange-600">/</span>
            <span className="text-white">Investor Relations</span>
          </div>

          <div className="max-w-[720px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-orange-400" />
              <span className="text-[11px] font-[700] text-orange-300 uppercase tracking-[3px]">Investor Relations</span>
            </div>
            <h1 className="text-white leading-[0.92] mb-6"
              style={{ fontSize: 'clamp(52px, 7.5vw, 88px)', fontWeight: 700 }}>
              Powering Growth,<br />
              <span className="text-orange-500">Delivering Value</span>
            </h1>
            <p className="text-[16px] text-slate-300 leading-[1.8] max-w-[580px]">
              Transparent reporting, strong governance, and consistent returns for our shareholders and capital partners.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#reports" className="brand-btn-primary">Download Reports</a>
              <a href="#financials" className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white text-[12.5px] font-[700] tracking-[0.8px] uppercase rounded-[7px] hover:bg-white/10 transition-all duration-200 no-underline">
                View Financials
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Metrics ── */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-slate-100">
            {KEY_METRICS.map((m) => (
              <div key={m.label} className="py-8 px-4 text-center hover:bg-orange-50/40 transition-colors duration-150">
                <div className="font-display text-[32px] font-[700] text-orange-800 leading-none">
                  {m.display ? m.display : <CountUp end={m.end} prefix={m.prefix} suffix={m.suffix} />}
                </div>
                <div className="text-[10px] font-[600] text-slate-400 uppercase tracking-[1.5px] mt-1.5">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Financial Performance ── */}
      <section id="financials" className="bg-slate-50 border-b border-slate-100 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />
        <div className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full border border-slate-200 bg-white/60" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-9 bg-orange-600" />
              <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Financials</span>
            </div>
            <h2 className="font-[700] leading-[0.92] text-slate-900" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)' }}>
              Financial <span className="text-orange-700">Performance</span>
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white" style={{ boxShadow: '0 4px 24px rgba(120,40,15,0.06)' }}>
            <table className="w-full text-left" style={{ fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr className="bg-gradient-to-r from-orange-800 to-orange-600 text-white">
                  {['Fiscal Year', 'Revenue', 'EBITDA', 'PAT', 'EBITDA Margin'].map(h => (
                    <th key={h} className="px-6 py-4 text-[11px] font-[700] uppercase tracking-[1.5px]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FINANCIALS.map((row, i) => (
                  <tr key={i} className="border-t border-slate-100 hover:bg-orange-50/40 transition-colors duration-150">
                    <td className="px-6 py-4 text-[14px] font-[700] text-slate-800">{row.year}</td>
                    <td className="px-6 py-4 text-[14px] font-[600] text-orange-800">{row.revenue}</td>
                    <td className="px-6 py-4 text-[14px] text-slate-600">{row.ebitda}</td>
                    <td className="px-6 py-4 text-[14px] text-slate-600">{row.pat}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 bg-orange-50 border border-orange-100 text-orange-700 text-[11px] font-[700] rounded-full">{row.margin}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Reports & Downloads ── */}
      <section id="reports" className="bg-white py-20 lg:py-28 relative overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 opacity-20"
          style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '18px 18px' }} />

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-9 bg-orange-600" />
              <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Reports</span>
            </div>
            <h2 className="font-[700] leading-[0.92] text-slate-900" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)' }}>
              Reports &amp; <span className="text-orange-700">Downloads</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {REPORTS.map((r, i) => (
              <a key={i} href={r.href}
                className="group flex items-center justify-between bg-white border border-slate-200 rounded-2xl px-6 py-5 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/50 hover:-translate-y-0.5 transition-all duration-200 no-underline">
                <div>
                  <span className="inline-block text-[10px] font-[700] uppercase tracking-[1.5px] text-orange-600 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full mb-2">{r.type}</span>
                  <p className="text-[14px] font-[700] text-slate-800 group-hover:text-orange-800 transition-colors leading-snug">{r.title}</p>
                  <p className="text-[11px] text-slate-400 mt-1">{r.size}</p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-700 group-hover:bg-orange-700 group-hover:text-white group-hover:border-orange-700 transition-all duration-200 flex-shrink-0 ml-3">
                  <DownloadIcon />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Governance + Events ── */}
      <section className="bg-slate-50 border-t border-slate-100 py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Board */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-9 bg-orange-600" />
                <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Governance</span>
              </div>
              <h2 className="font-[700] leading-[0.92] text-slate-900 mb-8" style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)' }}>
                Board &amp; <span className="text-orange-700">Leadership</span>
              </h2>
              <div className="flex flex-col gap-3">
                {GOVERNANCE.map((g, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl px-5 py-4 hover:border-orange-200 hover:shadow-md transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-800 to-orange-600 flex items-center justify-center text-white font-[700] text-[14px] flex-shrink-0">
                      {g.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </div>
                    <div>
                      <p className="text-[14px] font-[700] text-slate-800">{g.name}</p>
                      <p className="text-[12px] text-slate-500 mt-0.5">{g.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-9 bg-orange-600" />
                <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Calendar</span>
              </div>
              <h2 className="font-[700] leading-[0.92] text-slate-900 mb-8" style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)' }}>
                Investor <span className="text-orange-700">Events</span>
              </h2>
              <div className="flex flex-col gap-3">
                {EVENTS.map((e, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl px-5 py-4 hover:border-orange-200 hover:shadow-md transition-all duration-200">
                    <div className="flex-shrink-0 w-14 text-center">
                      <div className="text-[10px] font-[700] text-orange-600 uppercase tracking-[1px]">{e.date.split(' ')[0]}</div>
                      <div className="text-[24px] font-[700] text-slate-800 leading-none">{e.date.split(' ')[1].replace(',', '')}</div>
                      <div className="text-[10px] font-[600] text-slate-400">{e.date.split(' ')[2]}</div>
                    </div>
                    <div className="h-10 w-px bg-orange-100 flex-shrink-0" />
                    <p className="text-[14px] font-[600] text-slate-700">{e.event}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-br from-orange-900 to-orange-700 py-16 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '52px 52px' }} />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[10.5px] font-[700] text-orange-300 uppercase tracking-[3px] mb-2">Get in Touch</p>
            <h2 className="text-white font-[700] leading-none" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
              Investor Relations Team
            </h2>
            <p className="text-orange-200 text-[14px] mt-2">ir@lokeshlandscape.in · +91 124 4567 888</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a href="mailto:ir@lokeshlandscape.in"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-orange-800 text-[12.5px] font-[700] tracking-[0.8px] uppercase rounded-[7px] shadow-md hover:bg-orange-50 hover:-translate-y-[2px] transition-all duration-200 no-underline">
              Email IR Team
            </a>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white text-[12.5px] font-[700] tracking-[0.8px] uppercase rounded-[7px] hover:bg-white/10 transition-all duration-200 no-underline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
