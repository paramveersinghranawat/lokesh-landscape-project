'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Zap, ChevronDown, ArrowRight, Phone, Mail, Linkedin, Twitter, Youtube, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us', href: '/about',
    dropdown: [
      { label: 'Company',              href: '/about' },
      { label: 'Leadership',           href: '/about/leadership' },
      { label: 'Vision & Mission',     href: '/about/vision-mission' },
      { label: 'History',              href: '/about/history' },
      { label: 'Awards & Recognition', href: '/about/awards' },
    ],
  },
  {
    label: 'Expertise', href: '/expertise',
    dropdown: [
      { label: 'Engineering',        href: '/expertise/engineering' },
     { label: 'Solar',        href: '/expertise/solar' },
      { label: 'Project Management', href: '/expertise/project-management' },
      { label: 'Technology',         href: '/expertise/technology' },
      { label: 'O&M Services',       href: '/expertise/om-services' },
    ],
  },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Investors',     href: '/investors' },
  { label: 'CSR',           href: '/csr' },
  {
    label: 'Media Center', href: '/media',
    dropdown: [
      { label: 'News & Press',  href: '/media/news' },
      { label: 'Photo Gallery', href: '/media/gallery' },
      { label: 'Videos',        href: '/media/videos' },
      { label: 'Publications',  href: '/media/publications' },
    ],
  },
  { label: 'Careers', href: '/careers' },
];

function DesktopDropdown({ items, visible }) {
  return (
    <div className={`absolute top-full left-0 min-w-[220px] bg-white rounded-b-xl z-50
      border-x border-b border-slate-100 origin-top
      transition-all duration-200
      ${visible
        ? 'opacity-100 translate-y-0 pointer-events-auto shadow-[0_20px_40px_rgba(120,40,0,0.10)]'
        : 'opacity-0 -translate-y-2 pointer-events-none shadow-none'
      }`}>
      <div className="h-[3px] w-full bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />
      <div className="py-2">
        {items.map((item) => (
          <Link key={item.label} href={item.href}
            className="flex items-center justify-between px-4 py-[10px] text-[13px] font-[500]
              text-slate-600 hover:text-orange-700 hover:bg-orange-50/60 transition-colors duration-150 group">
            <span>{item.label}</span>
            <ArrowRight size={12} className="text-slate-300 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all duration-150" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [scrolled,       setScrolled]       = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* prevent body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const openDrop  = (label) => { clearTimeout(closeTimer.current); setActiveDropdown(label); };
  const closeDrop = ()      => { closeTimer.current = setTimeout(() => setActiveDropdown(null), 130); };
  const toggleMobile = (label) => setMobileExpanded(prev => prev === label ? null : label);

  return (
    <>
      {/* All navbar styles are defined globally in globals.css */}

      <div className="ptd-nav sticky top-0 z-[100] w-full">

        {/* ── Top ribbon (desktop only) ── */}
        <div className="hidden md:flex items-center justify-between px-8 py-[5px]
          bg-gradient-to-r from-orange-900 via-orange-700 to-amber-500">
          <div className="flex items-center gap-5">
            <a href="tel:18005550199"
              className="flex items-center gap-1.5 text-[11px] text-orange-100 hover:text-white transition-colors font-[500]">
              <Phone size={11} /> 1800-LKL-POWER
            </a>
            <span className="w-px h-3 bg-orange-600" />
            <a href="mailto:info@lokeshlandscape.in"
              className="flex items-center gap-1.5 text-[11px] text-orange-100 hover:text-white transition-colors font-[500]">
              <Mail size={11} /> info@lokeshlandscape.in
            </a>
          </div>
          <div className="flex items-center gap-4">
            {[
              { label: 'LinkedIn', Icon: Linkedin },
              { label: 'Twitter',  Icon: Twitter  },
              { label: 'YouTube',  Icon: Youtube  },
            ].map(({ label, Icon }) => (
              <a key={label} href="#" aria-label={label}
                className="text-orange-300 hover:text-white transition-colors duration-150">
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>

        {/* ── Main nav ── */}
        <nav className={`bg-white/97 backdrop-blur-md border-b border-slate-200 transition-shadow duration-300
          ${scrolled ? 'shadow-[0_6px_32px_rgba(120,40,0,0.12)]' : 'shadow-[0_2px_8px_rgba(120,40,0,0.05)]'}`}>

          {/* 3px accent bar */}
          <div className="h-[3px] w-full bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />

          <div className="max-w-[1320px] mx-auto px-6 flex items-center justify-between h-[68px] gap-4">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group select-none shrink-0">
              <div className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center
                bg-gradient-to-br from-orange-800 to-orange-500
                shadow-md shadow-orange-200
                group-hover:-translate-y-0.5 group-hover:shadow-lg group-hover:shadow-orange-300
                transition-all duration-200">
                <Zap size={20} className="text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="ptd-teko text-[22px] font-bold tracking-wide text-slate-900 uppercase leading-tight">
                  Lokesh Landscape
                </span>
                <span className="text-[9px] font-semibold tracking-[2.2px] text-orange-600 uppercase mt-[1px]">
                  Power Distribution Co.
                </span>
              </div>
            </Link>

            {/* Desktop links */}
            <ul className="hidden lg:flex items-center gap-0 flex-1 justify-center">
              {NAV_LINKS.map(({ label, href, dropdown }) => (
                <li key={label} className="relative"
                  onMouseEnter={() => dropdown && openDrop(label)}
                  onMouseLeave={() => dropdown && closeDrop()}>
                  <Link href={href}
                    className="nlnk relative flex items-center gap-0.5 px-3.5 py-[24px]
                      text-[13.5px] font-[600] text-slate-700 hover:text-orange-700
                      transition-colors duration-200 whitespace-nowrap">
                    {label}
                    {dropdown && (
                      <ChevronDown size={12} className={`ml-0.5 transition-transform duration-200 text-slate-400
                        ${activeDropdown === label ? 'rotate-180 text-orange-600' : ''}`} />
                    )}
                  </Link>
                  {dropdown && <DesktopDropdown items={dropdown} visible={activeDropdown === label} />}
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <div className="w-px h-7 bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
              <Link href="/contact"
                className="cta-shine relative overflow-hidden inline-flex items-center gap-2
                  px-5 py-[10px] rounded-[8px]
                  bg-gradient-to-br from-orange-700 to-orange-500
                  hover:from-orange-800 hover:to-orange-600
                  text-white text-[12px] font-[700] tracking-[0.7px] uppercase
                  shadow-md shadow-orange-200 hover:shadow-lg hover:shadow-orange-300
                  hover:-translate-y-[2px] active:translate-y-0 transition-all duration-200">
                <span className="relative z-10">Contact Us</span>
                <ArrowRight size={13} className="relative z-10" />
              </Link>
            </div>

            {/* Hamburger */}
            <button onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu"
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg
                hover:bg-orange-50 active:bg-orange-100 transition-colors duration-150 shrink-0">
              {menuOpen
                ? <X size={22} className="text-slate-700" />
                : <Menu size={22} className="text-slate-700" />
              }
            </button>
          </div>

          {/* ══════════════════════════════════════
              MOBILE MENU — was completely missing!
          ══════════════════════════════════════ */}
          {menuOpen && (
            <div className="mob-menu lg:hidden bg-white border-t border-slate-100
              max-h-[calc(100vh-120px)] overflow-y-auto
              shadow-[0_20px_40px_rgba(120,40,0,0.10)]">

              {/* mobile quick contact */}
              <div className="flex items-center justify-between px-5 py-3
                bg-gradient-to-r from-orange-900 to-orange-700">
                <a href="tel:18005550199"
                  className="flex items-center gap-1.5 text-[11px] text-orange-200 font-[500]">
                  <Phone size={11} /> 1800-LKL-POWER
                </a>
                <a href="mailto:info@lokeshlandscape.in"
                  className="flex items-center gap-1.5 text-[11px] text-orange-200 font-[500]">
                  <Mail size={11} /> info@lokeshlandscape.in
                </a>
              </div>

              {/* nav items */}
              <div className="px-4 py-2">
                {NAV_LINKS.map(({ label, href, dropdown }) => (
                  <div key={label} className="border-b border-slate-100 last:border-none">

                    {/* row: link + expand button */}
                    <div className="flex items-center min-h-[50px]">
                      <Link href={href}
                        className="flex-1 py-3 text-[14px] font-[600] text-slate-800 hover:text-orange-700
                          transition-colors duration-150"
                        onClick={() => { if (!dropdown) setMenuOpen(false); }}>
                        {label}
                      </Link>

                      {dropdown && (
                        <button
                          onClick={() => toggleMobile(label)}
                          aria-label={`Toggle ${label}`}
                          aria-expanded={mobileExpanded === label}
                          className="flex items-center justify-center w-10 h-10 rounded-lg
                            hover:bg-orange-50 active:bg-orange-100 transition-colors duration-150
                            text-slate-400 hover:text-orange-600 shrink-0">
                          <ChevronDown size={16}
                            className={`transition-transform duration-250
                              ${mobileExpanded === label ? 'rotate-180 text-orange-600' : ''}`} />
                        </button>
                      )}
                    </div>

                    {/* smooth accordion */}
                    {dropdown && (
                      <div className={`mob-acc-body ${mobileExpanded === label ? 'open' : ''}`}>
                        <div className="mob-acc-inner">
                          <div className="pb-3 pl-3">
                            <div className="border-l-2 border-orange-100 pl-3 flex flex-col gap-0.5">
                              {dropdown.map((item) => (
                                <Link key={item.label} href={item.href}
                                  className="flex items-center gap-2.5 py-2.5 px-2 rounded-lg
                                    text-[13px] font-[500] text-slate-600 hover:text-orange-700
                                    hover:bg-orange-50/60 transition-colors duration-150"
                                  onClick={() => setMenuOpen(false)}>
                                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* mobile CTA */}
              <div className="px-4 pb-5 pt-1">
                <Link href="/contact"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-[8px]
                    bg-gradient-to-br from-orange-700 to-orange-500
                    text-white text-[13px] font-[700] tracking-[0.6px] uppercase
                    shadow-md shadow-orange-200 active:scale-[0.98] transition-transform"
                  onClick={() => setMenuOpen(false)}>
                  Contact Us <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}