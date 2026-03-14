'use client';

import Link from 'next/link';

/* ── Icons ── */
const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] text-white">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

/* ── Data ── */
const FOOTER_COLS = [
  {
    heading: 'Company',
    links: [
      { label: 'About Us',             href: '/about' },
      { label: 'Leadership',           href: '/about#leadership' },
      { label: 'Vision & Mission',     href: '/about#vision' },
      { label: 'Awards & Recognition', href: '/about#awards' },
      { label: 'Careers',              href: '/careers' },
    ],
  },
  {
    heading: 'Business Units',
    links: [
      { label: 'Transmission',          href: '/business/transmission' },
      { label: 'Distribution',          href: '/business/distribution' },
      { label: 'Smart Grid & AMI',      href: '/business/smart-grid' },
      { label: 'Rural Electrification', href: '/business/rural' },
      { label: 'Renewable Integration', href: '/business/renewable' },
    ],
  },
  {
    heading: 'Expertise',
    links: [
      { label: 'Engineering & PMC', href: '/expertise/engineering' },
      { label: 'Technology & SCADA', href: '/expertise/technology' },
      { label: 'O&M Services',      href: '/expertise/om' },
      { label: 'Quality Assurance', href: '/expertise/qa' },
      { label: 'Sustainability',    href: '/sustainability' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'News & Press',         href: '/media/news' },
      { label: 'Photo Gallery',        href: '/media/gallery' },
      { label: 'Publications',         href: '/media/publications' },
      { label: 'Investor Relations',   href: '/investors' },
      { label: 'CSR',                  href: '/csr' },
    ],
  },
];

const CONTACT_ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.37a16 16 0 0 0 6 6l1.27-.85a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 15.92z"/>
      </svg>
    ),
    label: '1800-LKL-POWER',
    sub: 'Mon – Sat, 9 AM – 6 PM IST',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'info@lokeshlandscape.in',
    sub: 'We reply within 24 hours',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'New Delhi, India',
    sub: 'Operations across 28+ States',
  },
];

const SOCIAL = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
      </svg>
    ),
  },
];

/* ── Footer ── */
export default function Footer() {
  return (
    <>
      {/* All footer styles (.ft-link, .ft-social) are defined globally in globals.css */}

      <footer className="ft-root bg-gradient-to-b from-orange-950 to-[#0f172a] relative overflow-hidden">

        {/* ── matching top accent bar (same as navbar + sections) ── */}
        <div className="h-[3px] w-full bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />

        {/* ── subtle grid overlay ── */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{
          backgroundImage: 'linear-gradient(rgba(148,163,184,1) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,1) 1px,transparent 1px)',
          backgroundSize: '52px 52px',
        }} />

        {/* ══════════════════════════════════════
            TOP: CTA BAND
        ══════════════════════════════════════ */}
        <div className="relative border-b border-white/[0.08]">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-9 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <p className="text-[10.5px] font-[700] text-orange-300 uppercase tracking-[3px] mb-1.5">
                Partner With Us
              </p>
              <h3 className="font-display text-[34px] md:text-[40px] font-[700] text-white leading-none tracking-wide">
                Let's Power Your Landscape Together
              </h3>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-[10px] bg-white text-orange-800 text-[12.5px] font-[700] tracking-[0.8px] uppercase rounded-[7px] shadow-md hover:bg-orange-50 hover:-translate-y-[2px] transition-all duration-200">
                Contact Our Team <ArrowRight />
              </Link>
              <Link href="/about"
                className="inline-flex items-center gap-2 px-6 py-[10px] border border-white/25 hover:border-white/55 bg-white/8 hover:bg-white/12 text-white text-[12.5px] font-[700] tracking-[0.8px] uppercase rounded-[7px] hover:-translate-y-[2px] transition-all duration-200">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            MAIN BODY
        ══════════════════════════════════════ */}
        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-12 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_200px] gap-12 xl:gap-16">

            {/* ── Brand column ── */}
            <div className="flex flex-col gap-6">
              {/* Logo — same markup as Navbar */}
              <Link href="/" className="flex items-center gap-3 select-none w-fit group">
                <div className="w-[38px] h-[38px] rounded-[8px] bg-gradient-to-br from-orange-700 to-orange-500 flex items-center justify-center shadow-md shadow-orange-900/50 group-hover:-translate-y-0.5 transition-transform duration-200">
                  <BoltIcon />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-display text-[22px] font-bold tracking-wide text-white uppercase">
                    Lokesh Landscape
                  </span>
                  <span className="text-[9px] font-semibold tracking-[2.2px] text-orange-300 uppercase mt-[1px]">
                    Power Distribution Co.
                  </span>
                </div>
              </Link>

              <p className="text-[13.5px] text-slate-400 leading-[1.8] max-w-[240px]">
                Lokesh Landscape – a trusted name in power distribution, delivering safe and reliable electricity to homes, businesses, and industries across India since 1989.
              </p>

              {/* ISO badges */}
              <div>
                <p className="text-[9.5px] font-[700] text-slate-500 uppercase tracking-[2px] mb-2">Certifications</p>
                <div className="flex flex-wrap gap-1.5">
                  {['ISO 9001', 'ISO 14001', 'ISO 45001', 'OHSAS 18001'].map(c => (
                    <span key={c}
                      className="text-[10px] font-[600] text-orange-300 border border-orange-700/60 bg-orange-900/30 rounded px-2 py-0.5 tracking-[0.4px]">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="text-[9.5px] font-[700] text-slate-500 uppercase tracking-[2px] mb-2">Follow Us</p>
                <div className="flex gap-2">
                  {SOCIAL.map(s => (
                    <a key={s.label} href={s.href} aria-label={s.label} className="ft-social">{s.icon}</a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Nav link columns ── */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {FOOTER_COLS.map(col => (
                <div key={col.heading}>
                  <h4 className="text-[10.5px] font-[700] text-white uppercase tracking-[2.5px] mb-5 pb-3 border-b border-white/[0.1]">
                    {col.heading}
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {col.links.map(lnk => (
                      <li key={lnk.label}>
                        <Link href={lnk.href} className="ft-link">{lnk.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* ── Contact column ── */}
            <div>
              <h4 className="text-[10.5px] font-[700] text-white uppercase tracking-[2.5px] mb-5 pb-3 border-b border-white/[0.1]">
                Contact
              </h4>
              <div className="flex flex-col gap-5">
                {CONTACT_ITEMS.map(item => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-800/60 border border-orange-700/40 flex items-center justify-center text-orange-300 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[13px] font-[600] text-slate-200 leading-snug">{item.label}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            BOTTOM BAR
        ══════════════════════════════════════ */}
        <div className="relative border-t border-white/[0.07]">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[11.5px] text-slate-500">
              © {new Date().getFullYear()} Lokesh Landscape Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((t, i, arr) => (
                <span key={t} className="flex items-center gap-4">
                  <Link href="#" className="text-[11.5px] text-slate-500 hover:text-slate-300 transition-colors duration-150 font-[500]">
                    {t}
                  </Link>
                  {i < arr.length - 1 && <span className="w-px h-3 bg-slate-700" />}
                </span>
              ))}
            </div>
          </div>
        </div>

      </footer>
    </>
  );
}
