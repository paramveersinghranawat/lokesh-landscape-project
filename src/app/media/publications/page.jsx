import Link from 'next/link';

export const metadata = {
  title: 'Publications | Media Center | Lokesh Landscape',
  description: 'Whitepapers, annual reports, brochures, and technical documentation from Lokesh Landscape.',
};

const DOCS = [
  { title: 'Distribution Smart Grid Whitepaper 2025', type: 'Whitepaper',  size: '4.2 MB', pages: 32 },
  { title: 'Corporate Brochure 2025',                 type: 'Brochure',    size: '8.1 MB', pages: 24 },
  { title: 'ESG & Sustainability Report 2024',        type: 'ESG Report',  size: '7.8 MB', pages: 60 },
  { title: 'Annual Report 2024–25',                   type: 'Annual Rpt',  size: '12.4 MB', pages: 148 },
  { title: 'O&M Best Practices Manual',               type: 'Technical',   size: '3.1 MB', pages: 44 },
  { title: 'AMI & Smart Metering: A Case Study',      type: 'Case Study',  size: '2.6 MB', pages: 18 },
  { title: 'Investor Presentation Apr 2025',          type: 'Presentation', size: '5.3 MB', pages: 34 },
  { title: 'Rural Electrification Programme Report',  type: 'Report',      size: '3.7 MB', pages: 28 },
];

const typeColor = {
  'Whitepaper':    'bg-orange-50 text-orange-700 border-orange-100',
  'Brochure':      'bg-amber-50 text-amber-700 border-amber-100',
  'ESG Report':    'bg-emerald-50 text-emerald-700 border-emerald-100',
  'Annual Rpt':    'bg-blue-50 text-blue-700 border-blue-100',
  'Technical':     'bg-slate-50 text-slate-600 border-slate-200',
  'Case Study':    'bg-purple-50 text-purple-700 border-purple-100',
  'Presentation':  'bg-orange-50 text-orange-700 border-orange-100',
  'Report':        'bg-teal-50 text-teal-700 border-teal-100',
};

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

export default function PublicationsPage() {
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
            <span className="text-slate-700">Publications</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-9 bg-orange-600" />
            <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Publications</span>
          </div>
          <h1 className="font-[700] leading-[0.92] text-slate-900" style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)' }}>
            Reports &amp; <span className="text-orange-700">Documents</span>
          </h1>
          <p className="text-[15px] text-slate-500 mt-3">Download our whitepapers, annual reports, and technical brochures.</p>
        </div>
      </section>

      <section className="bg-slate-50 py-12 lg:py-16">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 gap-4">
            {DOCS.map((d, i) => (
              <a key={i} href="#"
                className="group flex items-center justify-between bg-white border border-slate-200 rounded-2xl px-6 py-5 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/50 hover:-translate-y-0.5 transition-all duration-200 no-underline" style={{ boxShadow: '0 2px 8px rgba(120,40,15,0.04)' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-700 flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                    </svg>
                  </div>
                  <div>
                    <span className={`inline-block text-[10px] font-[700] uppercase tracking-[1px] px-2 py-0.5 rounded-full border mb-1.5 ${typeColor[d.type]}`}>{d.type}</span>
                    <p className="text-[14px] font-[700] text-slate-800 group-hover:text-orange-800 transition-colors leading-snug">{d.title}</p>
                    <p className="text-[11px] text-slate-400 mt-1">{d.pages} pages · {d.size}</p>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-700 group-hover:bg-orange-700 group-hover:text-white group-hover:border-orange-700 transition-all duration-200 flex-shrink-0 ml-3">
                  <DownloadIcon />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
