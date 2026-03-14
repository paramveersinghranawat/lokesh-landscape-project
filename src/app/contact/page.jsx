"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone, Mail, MapPin, Clock, ArrowRight,
  CheckCircle2, ChevronDown, Zap, Building2, Users, HeadphonesIcon
} from "lucide-react";

/* ─── DATA ─────────────────────────────────────────────────── */

const OFFICES = [
  {
    city: "New Delhi",
    type: "Corporate Headquarters",
    address: "Lokesh Tower, Sector 44, Gurugram, Haryana 122003",
    phone: "+91 124 4567 800",
    email: "hq@lokeshlandscape.in",
    hours: "Mon – Fri, 09:00 – 18:00 IST",
  },
  {
    city: "Mumbai",
    type: "Western Region Office",
    address: "12th Floor, Bandra-Kurla Complex, Mumbai, Maharashtra 400051",
    phone: "+91 22 6789 1000",
    email: "mumbai@lokeshlandscape.in",
    hours: "Mon – Fri, 09:00 – 18:00 IST",
  },
  {
    city: "Chennai",
    type: "Southern Region Office",
    address: "TIDEL Park, Taramani, Chennai, Tamil Nadu 600113",
    phone: "+91 44 2345 6700",
    email: "chennai@lokeshlandscape.in",
    hours: "Mon – Fri, 09:00 – 18:00 IST",
  },
];

const DEPARTMENTS = [
  { Icon: Zap,             label: "Grid Operations & Emergency", value: "operations"  },
  { Icon: Building2,       label: "Business Development",        value: "business"    },
  { Icon: Users,           label: "Careers & HR",               value: "careers"     },
  { Icon: HeadphonesIcon,  label: "Customer Support",           value: "support"     },
  { Icon: Mail,            label: "Media & Press",              value: "media"       },
  { Icon: CheckCircle2,    label: "Regulatory Affairs",         value: "regulatory"  },
];

const FAQS = [
  {
    q: "How do I report a power outage or grid emergency?",
    a: "For immediate emergencies, call our 24/7 control room on 1800-LOKESH-GRID (toll-free). Our field teams are dispatched within 30 minutes for critical faults.",
  },
  {
    q: "How can I apply for a new industrial or commercial connection?",
    a: "Submit an application through the Customer Portal or contact your regional office. Our team will conduct a feasibility study within 5 business days.",
  },
  {
    q: "Does Lokesh Landscape partner with renewable energy developers?",
    a: "Yes — we actively seek partnerships with solar, wind, and hydro developers for grid-interconnection. Contact our Business Development team to begin discussions.",
  },
  {
    q: "Where can I access the latest ESG or financial reports?",
    a: "All investor and sustainability reports are available in the Investor Relations section of our website. You can also request a hard copy by emailing ir@lokeshlandscape.in.",
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */

export default function ContactPage() {
  const [openFaq, setOpenFaq]     = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm]           = useState({
    name: "", email: "", phone: "", company: "", department: "", message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <div>

        {/* ══════════════════════════════════════════
            1. HERO
        ══════════════════════════════════════════ */}
        <section className="relative overflow-hidden" style={{ minHeight: "52vh" }}>
          <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(images/contact-page/hero-contact.webp)" }} />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-950/50 via-transparent to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-[3px] z-30 bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />

          <div className="relative z-20 max-w-[1320px] mx-auto px-6 lg:px-12 flex flex-col justify-center"
            style={{ paddingTop: "96px", paddingBottom: "72px" }}>

            {/* breadcrumb */}
            <div className="flex items-center gap-2 text-[12px] text-orange-300 font-[500] mb-10">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-orange-600">/</span>
              <span className="text-white">Contact Us</span>
            </div>

            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-orange-400" />
              <span className="text-[11px] font-[700] text-orange-300 uppercase tracking-[3px]">Get In Touch</span>
            </div>

            <h1 className="font-[700] text-white leading-[0.92] mb-6 font-display"
              style={{ fontSize: "clamp(52px, 7.5vw, 88px)" }}>
              We're Here to<br />
              <span className="text-orange-500">Help You</span>
            </h1>

            <p className="text-[16px] text-slate-300 leading-[1.8] max-w-[520px]">
              Whether you're reporting a fault, exploring a partnership, or seeking a new connection —
              our regional teams are ready to respond within one business day.
            </p>
          </div>
        </section>


        {/* ══════════════════════════════════════════
            2. QUICK CONTACT STRIP
        ══════════════════════════════════════════ */}
        <section className="bg-white border-b border-slate-100 relative">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400" />
          <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              {[
                {
                  Icon: Phone, label: "24/7 Emergency Hotline",
                  value: "1800-LOKESH-GRID", sub: "Toll-free · Always on",
                  href: "tel:1800LOKESHGRID",
                },
                {
                  Icon: Mail, label: "General Enquiries",
                  value: "info@lokeshlandscape.in", sub: "Reply within 1 business day",
                  href: "mailto:info@lokeshlandscape.in",
                },
                {
                  Icon: MapPin, label: "Head Office",
                  value: "Gurugram, Haryana", sub: "Lokesh Tower, Sector 44",
                  href: "#offices",
                },
              ].map((item, i) => (
                <a key={i} href={item.href}
                  className="group flex items-center gap-4 py-7 px-6 hover:bg-orange-50/40 transition-colors duration-150 no-underline">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-700
                    group-hover:bg-orange-700 group-hover:text-white group-hover:border-orange-700 transition-all duration-200 flex-shrink-0">
                    <item.Icon size={20} />
                  </div>
                  <div>
                    <p className="text-[11px] font-[600] text-slate-400 uppercase tracking-[1.5px] mb-0.5">{item.label}</p>
                    <p className="text-[14px] font-[700] text-slate-800 group-hover:text-orange-800 transition-colors">{item.value}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{item.sub}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════
            3. FORM + SIDEBAR
        ══════════════════════════════════════════ */}
        <section className="bg-slate-50 border-b border-slate-100 py-20 lg:py-28 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full border border-slate-200 bg-white/60" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 w-[360px] h-[360px] rounded-full border border-slate-100 bg-white/40" />

          <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-5 gap-12 xl:gap-16">

              {/* ── SIDEBAR ── */}
              <div className="lg:col-span-2 flex flex-col gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-px w-9 bg-orange-600" />
                    <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Departments</span>
                  </div>
                  <h2 className="font-[700] leading-[0.92] text-slate-900 mb-4 font-display"
                    style={{ fontSize: "clamp(2.2rem, 3.5vw, 3rem)" }}>
                    Who Would You<br /><span className="text-orange-700">Like to Reach?</span>
                  </h2>
                  <p className="text-[14px] text-slate-500 leading-[1.85]">
                    Select the relevant department in the form so your query reaches
                    the right team without delay.
                  </p>
                </div>

                {/* department tiles */}
                <div className="grid grid-cols-1 gap-3">
                  {DEPARTMENTS.map((d, i) => (
                    <div key={i}
                      className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3.5
                        hover:border-orange-200 hover:shadow-md hover:shadow-orange-100/50 transition-all duration-200 cursor-default">
                      <div className="w-9 h-9 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-700 flex-shrink-0">
                        <d.Icon size={16} />
                      </div>
                      <span className="text-[13px] font-[600] text-slate-700">{d.label}</span>
                    </div>
                  ))}
                </div>

                {/* response SLA card */}
                <div className="bg-gradient-to-br from-orange-800 to-orange-600 rounded-2xl p-6 text-white"
                  style={{ boxShadow: "0 8px 32px rgba(234,88,12,0.25)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <Clock size={20} className="text-orange-200" />
                    <span className="text-[11px] font-[700] uppercase tracking-[2px] text-orange-200">Response Times</span>
                  </div>
                  {[
                    { type: "Grid Emergency",     time: "< 30 minutes" },
                    { type: "Technical Support",  time: "< 4 hours"    },
                    { type: "General Enquiry",    time: "1 business day"},
                    { type: "Partnership Query",  time: "2 business days"},
                  ].map((r, i) => (
                    <div key={i} className={`flex items-center justify-between py-3 ${i < 3 ? "border-b border-white/10" : ""}`}>
                      <span className="text-[13px] text-orange-100 font-[500]">{r.type}</span>
                      <span className="text-[12px] font-[700] text-white bg-white/15 px-2.5 py-1 rounded-full">{r.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── FORM ── */}
              <div className="lg:col-span-3">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-10"
                  style={{ boxShadow: "0 4px 32px rgba(234,88,12,0.07)" }}>

                  {submitted ? (
                    /* success state */
                    <div className="flex flex-col items-center text-center py-10 gap-5">
                      <div className="w-16 h-16 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center">
                        <CheckCircle2 size={32} className="text-orange-700" />
                      </div>
                      <div>
                        <h3 className="font-[700] text-slate-900 mb-2 font-display"
                          style={{ fontSize: "2rem" }}>Message Sent!</h3>
                        <p className="text-[14px] text-slate-500 leading-[1.8] max-w-sm">
                          Thank you for reaching out to Lokesh Landscape. Our team will respond within
                          one business day.
                        </p>
                      </div>
                      <button onClick={() => { setSubmitted(false); setForm({ name:"",email:"",phone:"",company:"",department:"",message:"" }); }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-orange-800 to-orange-600
                          text-white text-[12.5px] font-[700] tracking-[0.8px] uppercase rounded-[7px]
                          shadow-md shadow-orange-200 hover:-translate-y-[2px] transition-all duration-200">
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-px w-9 bg-orange-600" />
                          <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Contact Form</span>
                        </div>
                        <h2 className="font-[700] leading-[0.95] text-slate-900 font-display"
                          style={{ fontSize: "clamp(1.9rem, 3vw, 2.6rem)" }}>
                          Send Us a <span className="text-orange-700">Message</span>
                        </h2>
                      </div>

                      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] font-[600] text-slate-600 uppercase tracking-[0.8px]">Full Name *</label>
                            <input name="name" required value={form.name} onChange={handleChange}
                              placeholder="Rajesh Kumar" className="ptd-input" />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] font-[600] text-slate-600 uppercase tracking-[0.8px]">Email Address *</label>
                            <input name="email" type="email" required value={form.email} onChange={handleChange}
                              placeholder="rajesh@company.in" className="ptd-input" />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] font-[600] text-slate-600 uppercase tracking-[0.8px]">Phone Number</label>
                            <input name="phone" value={form.phone} onChange={handleChange}
                              placeholder="+91 98765 43210" className="ptd-input" />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] font-[600] text-slate-600 uppercase tracking-[0.8px]">Company / Organisation</label>
                            <input name="company" value={form.company} onChange={handleChange}
                              placeholder="Company Name" className="ptd-input" />
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5 relative">
                          <label className="text-[12px] font-[600] text-slate-600 uppercase tracking-[0.8px]">Department *</label>
                          <div className="relative">
                            <select name="department" required value={form.department} onChange={handleChange}
                              className="ptd-input pr-10">
                              <option value="">Select a department…</option>
                              {DEPARTMENTS.map((d) => (
                                <option key={d.value} value={d.value}>{d.label}</option>
                              ))}
                            </select>
                            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[12px] font-[600] text-slate-600 uppercase tracking-[0.8px]">Message *</label>
                          <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                            placeholder="Tell us how we can help you…"
                            className="ptd-input resize-none" />
                        </div>

                        <div className="flex items-start gap-3 text-[12px] text-slate-500">
                          <input type="checkbox" required id="consent" className="mt-0.5 accent-orange-700 flex-shrink-0" />
                          <label htmlFor="consent" className="leading-[1.6] cursor-pointer">
                            I agree to Lokesh Landscape's <a href="#" className="text-orange-700 font-[600] hover:underline">Privacy Policy</a> and
                            consent to being contacted regarding my enquiry.
                          </label>
                        </div>

                        <button type="submit"
                          className="brand-btn-primary w-full py-3.5 mt-1 justify-center">
                          Submit Enquiry
                          <ArrowRight size={15} />
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════
            4. OFFICES
        ══════════════════════════════════════════ */}
        <section id="offices" className="bg-white border-b border-slate-100 py-20 lg:py-28 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full border border-slate-100 bg-slate-50/60" />

          <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="h-px w-9 bg-orange-600" />
                <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Our Offices</span>
                <div className="h-px w-9 bg-orange-600" />
              </div>
              <h2 className="font-[700] leading-[0.92] text-slate-900 mb-4 font-display"
                style={{ fontSize: "clamp(2.4rem, 4vw, 3.4rem)" }}>
                Regional <span className="text-orange-700">Presence</span> Across India
              </h2>
              <p className="text-[15px] text-slate-500 leading-[1.8] max-w-xl mx-auto">
                With offices in every major region, our teams are always close to the communities and
                infrastructure they serve.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {OFFICES.map((o, i) => (
                <div key={i}
                  className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-orange-200 hover:shadow-lg hover:-translate-y-[3px] transition-all duration-300"
                  style={{ boxShadow: "0 4px 24px rgba(234,88,12,0.06)" }}>

                  {/* header band */}
                  <div className="bg-gradient-to-br from-orange-800 to-orange-600 px-6 py-5">
                    <p className="text-[11px] font-[700] text-orange-200 uppercase tracking-[2px] mb-1">{o.type}</p>
                    <h3 className="font-[700] text-white leading-none font-display"
                      style={{ fontSize: "2rem" }}>{o.city}</h3>
                  </div>

                  {/* details */}
                  <div className="px-6 py-6 flex flex-col gap-4">
                    {[
                      { Icon: MapPin, text: o.address },
                      { Icon: Phone,  text: o.phone   },
                      { Icon: Mail,   text: o.email   },
                      { Icon: Clock,  text: o.hours   },
                    ].map((row, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-700 flex-shrink-0 mt-0.5">
                          <row.Icon size={14} />
                        </div>
                        <span className="text-[13px] text-slate-600 leading-[1.6] font-[500]">{row.text}</span>
                      </div>
                    ))}
                  </div>

                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-orange-800 via-orange-500 to-amber-400 rounded-b opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════
            5. MAP PLACEHOLDER
        ══════════════════════════════════════════ */}
        <section className="bg-slate-100 border-b border-slate-200 relative" style={{ height: "380px" }}>
          <div className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: "url(images/contact-page/map-contact.webp)" }} />          <div className="absolute inset-0 bg-orange-950/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-orange-400" />
              <span className="text-[11px] font-[700] text-orange-300 uppercase tracking-[3px]">Office Locations</span>
              <div className="h-px w-8 bg-orange-400" />
            </div>
            <p className="text-white font-[700] font-display" style={{ fontSize: "2.2rem" }}>
              28+ States · 3 Regional Offices · 1 HQ
            </p>
            <Link href="https://maps.google.com" target="_blank"
              className="inline-flex items-center gap-2 px-6 py-2.5
                bg-white/10 border border-white/30 text-white
                text-[12px] font-[700] tracking-[0.8px] uppercase rounded-[7px]
                hover:bg-white/20 transition-all duration-200 no-underline backdrop-blur-sm">
              <MapPin size={14} /> Open in Google Maps
            </Link>
          </div>
        </section>


        {/* ══════════════════════════════════════════
            6. FAQs
        ══════════════════════════════════════════ */}
        <section className="bg-white py-20 lg:py-28 relative overflow-hidden">
          <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 opacity-25"
            style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "18px 18px" }} />

          <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* left heading */}
              <div className="lg:sticky lg:top-24">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-9 bg-orange-600" />
                  <span className="text-[11px] font-[700] text-orange-600 uppercase tracking-[3px]">Quick Answers</span>
                </div>
                <h2 className="font-[700] leading-[0.92] text-slate-900 mb-6 font-display"
                  style={{ fontSize: "clamp(2.4rem, 4vw, 3.4rem)" }}>
                  Frequently Asked<br /><span className="text-orange-700">Questions</span>
                </h2>
                <p className="text-[15px] text-slate-500 leading-[1.85] mb-8">
                  Can't find what you need? Reach our support team at{" "}
                  <a href="mailto:support@lokeshlandscape.in" className="text-orange-700 font-[600] hover:underline">
                    support@lokeshlandscape.in
                  </a>
                </p>

                {/* emergency card */}
                <div className="bg-gradient-to-br from-orange-800 to-orange-600 rounded-2xl p-6 text-white"
                  style={{ boxShadow: "0 8px 32px rgba(234,88,12,0.25)" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center">
                      <Phone size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[11px] font-[700] text-orange-200 uppercase tracking-[1.5px]">Grid Emergency</p>
                      <p className="text-[18px] font-[700] leading-none font-display" style={{ fontSize: "1.8rem" }}>
                        1800-LOKESH-GRID
                      </p>
                    </div>
                  </div>
                  <p className="text-[12px] text-orange-200 leading-[1.6]">
                    Toll-free · Available 24 hours · 7 days a week<br />
                    Field response within 30 minutes for critical faults.
                  </p>
                </div>
              </div>

              {/* right: accordion */}
              <div className="flex flex-col gap-3">
                {FAQS.map((faq, i) => (
                  <div key={i}
                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
                    style={{ boxShadow: openFaq === i ? "0 8px 24px rgba(234,88,12,0.08)" : "0 2px 8px rgba(0,0,0,0.04)" }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                      style={{ borderBottom: openFaq === i ? "1px solid #e2e8f0" : "none" }}>
                      <span className="text-[14px] font-[700] text-slate-800 leading-snug">{faq.q}</span>
                      <ChevronDown size={18}
                        className={`faq-chevron text-orange-600 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-[200px] py-4" : "max-h-0 py-0"}`}>
                      <p className="text-[13.5px] text-slate-500 leading-[1.8] px-6">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════
            7. STATS STRIP
        ══════════════════════════════════════════ */}
        <section className="bg-white border-t border-slate-100">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100">
              {[
                { v: "35+",   l: "Years of Excellence" },
                { v: "28+",   l: "States Served"        },
                { v: "< 30m", l: "Emergency Response"   },
                { v: "5,000+",l: "Skilled Workforce"    },
              ].map((s, i) => (
                <div key={i} className="py-8 px-4 text-center hover:bg-orange-50/40 transition-colors duration-150">
                  <div className="text-[36px] font-[700] text-orange-800 leading-none font-display">{s.v}</div>
                  <div className="text-[10px] font-[600] text-slate-400 uppercase tracking-[1.5px] mt-1.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}