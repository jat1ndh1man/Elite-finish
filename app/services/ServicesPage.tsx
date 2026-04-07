"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const serviceNavItems = [
  { label: "Residential", href: "#residential", id: "residential", num: "01" },
  { label: "Commercial", href: "#commercial", id: "commercial", num: "02" },
  { label: "Artisan Finishes", href: "#specialty", id: "specialty", num: "03" },
  { label: "Industrial Floor", href: "#industrial", id: "industrial", num: "04" },
];

const artisanCards = [
  {
    title: "Wood Graining",
    desc: "Reproducing the warmth of rare hardwoods on any surface with hand-painted precision.",
    img: "/3.jpeg",
    alt: "Wood grain finish",
  },
  {
    title: "Marbling",
    desc: "Ethereal stone effects including Carrara and Nero Marquina mineral textures.",
    img: "/3(1).jpeg",
    alt: "Marble finish",
  },
  {
    title: "Textured Glazing",
    desc: "Dimensional depth through rag rolling and contemporary metallic washes.",
    img: "/6.jpeg",
    alt: "Plaster texture",
  },
];

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState("residential");

  useEffect(() => {
    // Scroll-reveal via IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: [0.15, 0.35, 0.6], rootMargin: "-25% 0px -45% 0px" }
    );

    serviceNavItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });

    return () => {
      observer.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="selection:bg-vibrant-accent/30 bg-white text-on-surface">
      <NavBar />

      {/* ── Main ── */}
      <main className="pt-40">
        {/* Hero */}
        <header className="px-8 max-w-screen-2xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left copy */}
            <div className="lg:col-span-7 animate-fade-in-up">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-teal-accent/5 rounded-full mb-8 border border-teal-accent/10">
                <span className="flex h-2 w-2 rounded-full bg-teal-accent animate-pulse" />
                <span className="text-teal-accent text-label text-[10px]">
                  Services &amp; Expertise
                </span>
              </div>
              <h1 className="text-6xl md:text-[5.5rem] font-headline leading-[0.95] mb-10 text-navy tracking-tighter">
                Mastering the
                <br />
                Art of{" "}
                <span className="text-vibrant-accent italic relative">
                  Atmosphere.
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-vibrant-accent/20 rounded-full" />
                </span>
              </h1>
              <p className="text-xl text-on-surface-variant max-w-xl font-medium leading-relaxed mb-12">
                From heritage conservation to avant-garde industrial textures,
                we curate surfaces that define architectural value and
                professional excellence.
              </p>
              <div className="flex items-center gap-8">
                <Link
                  href="/portfolio"
                  className="group flex items-center gap-4 text-navy font-bold hover:gap-6 transition-all"
                >
                  <span className="w-12 h-12 rounded-full border border-outline flex items-center justify-center group-hover:bg-navy group-hover:text-white transition-all">
                    <span className="material-symbols-outlined">
                      expand_more
                    </span>
                  </span>
                  <span className="text-label text-xs tracking-widest">
                    Explore Categories
                  </span>
                </Link>
              </div>
            </div>

            {/* Right image */}
            <div className="lg:col-span-5 relative">
              <div className="w-full aspect-[4/5] relative rounded-3xl overflow-hidden shadow-[0_40px_80px_-15px_rgba(20,43,88,0.15)] animate-float">
                <Image
                  src="/5.jpeg"
                  alt="High-end painting tools"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-2xl max-w-[200px] hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <span className="material-symbols-outlined text-vibrant-accent">
                    verified
                  </span>
                  <span className="text-xs font-bold text-navy">
                    MPA Accredited
                  </span>
                </div>
                <p className="text-[10px] text-on-surface-variant font-medium leading-tight">
                  Setting the gold standard in premium finishes since 2024.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* ── Body grid: sidebar + content ── */}
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Sticky side nav */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-40 space-y-12">
              <nav className="flex flex-col space-y-2">
                <p className="text-label text-[10px] text-on-surface-variant/50 mb-4 px-2 tracking-[0.2em]">
                  Quick Jump
                </p>
                {serviceNavItems.map(({ label, href, id, num }) => {
                  const active = activeSection === id;

                  return (
                    <Link
                      key={label}
                      href={href}
                      className={`group flex items-center justify-between p-3 rounded-xl hover:bg-surface-variant transition-all text-base ${
                        active
                          ? "text-navy font-bold"
                          : "text-on-surface-variant font-medium hover:text-navy"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`w-1 h-1 rounded-full bg-vibrant-accent transition-all ${
                            active
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                          }`}
                        />
                        <span>{label}</span>
                      </div>
                      <span
                        className={`text-[10px] text-label ${
                          active ? "text-vibrant-accent" : "text-on-surface-variant/40"
                        }`}
                      >
                        {num}
                      </span>
                    </Link>
                  );
                })}
              </nav>

              {/* CTA card */}
              <div className="pt-8 border-t border-outline/50">
                <div className="p-8 bg-navy rounded-3xl relative overflow-hidden text-white shadow-2xl group cursor-pointer transition-all hover:shadow-navy/20">
                  <div className="absolute -right-6 -top-6 w-32 h-32 bg-vibrant-accent rounded-full opacity-10 group-hover:scale-110 transition-transform duration-700" />
                  <h4 className="text-xl font-headline mb-4 relative z-10">
                    Need Expert Advice?
                  </h4>
                  <p className="text-xs text-white/70 mb-8 leading-relaxed relative z-10">
                    Schedule a site walk-through with our master consultants.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-navy px-6 py-3 rounded-full font-bold text-xs hover:bg-vibrant-accent hover:shadow-lg transition-all relative z-10"
                  >
                    Consult Now{" "}
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* Service sections */}
          <div className="lg:col-span-9 space-y-56">
            {/* 01 — Residential */}
            <section id="residential" className="scroll-mt-40 scroll-reveal">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <div className="order-2 md:order-1">
                  <span className="text-teal-accent text-label text-[10px] mb-4 block font-bold tracking-[0.2em]">
                    01 — INTERIOR &amp; EXTERIOR
                  </span>
                  <h2 className="text-5xl font-headline mb-8 text-navy leading-tight">
                    Residential
                    <br />
                    Mastery
                  </h2>
                  <p className="text-on-surface-variant mb-10 text-lg leading-relaxed font-medium">
                    We treat your home as a living gallery. From heritage timber
                    restoration to contemporary zero-VOC interior finishes, our
                    craftsmen ensure every brushstroke adds lasting value.
                  </p>
                  <div className="space-y-5 mb-12">
                    {[
                      {
                        title: "Heritage Restoration",
                        desc: "Expert care for timber and period details.",
                      },
                      {
                        title: "Zero-VOC Finishes",
                        desc: "Premium, eco-friendly luxury paints.",
                      },
                    ].map(({ title, desc }) => (
                      <div key={title} className="flex items-start gap-4 group">
                        <div className="w-6 h-6 rounded-full bg-vibrant-accent/10 flex items-center justify-center text-vibrant-accent transition-colors group-hover:bg-vibrant-accent group-hover:text-white shrink-0">
                          <span className="material-symbols-outlined text-[14px]">
                            check
                          </span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-navy">{title}</h4>
                          <p className="text-xs text-on-surface-variant/70">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/portfolio"
                    className="bg-navy text-white px-10 py-4 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-vibrant-accent hover:text-navy hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-3"
                  >
                    View Showcase{" "}
                    <span className="material-symbols-outlined text-sm">east</span>
                  </Link>
                </div>
                <div className="order-1 md:order-2">
                  <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative group magnetic-hover">
                    <Image
                      src="/1.jpeg"
                      alt="Luxury living room"
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-navy/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </div>
              </div>
            </section>

            {/* 02 — Commercial */}
            <section id="commercial" className="scroll-mt-40 scroll-reveal">
              <div className="bg-surface-variant p-8 md:p-16 lg:p-24 rounded-[3.5rem] relative overflow-hidden border border-outline/50 group">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/40 rounded-full blur-3xl -mr-64 -mt-64 transition-transform duration-1000 group-hover:scale-110" />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
                  <div className="lg:col-span-5">
                    <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl ring-[12px] ring-white/50 group-hover:ring-white transition-all duration-500 relative">
                      <Image
                        src="/2.jpeg"
                        alt="Office lobby"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <span className="text-teal-accent text-label text-[10px] mb-4 block font-bold tracking-[0.2em]">
                      02 — SCALE &amp; EFFICIENCY
                    </span>
                    <h2 className="text-5xl font-headline mb-8 text-navy leading-tight">
                      Commercial
                      <br />
                      &amp; Industrial
                    </h2>
                    <p className="text-on-surface-variant mb-12 text-lg leading-relaxed font-medium">
                      Delivering high-performance coating solutions for corporate
                      offices and retail flagships. We prioritize minimal
                      disruption with maximum longevity.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                      {[
                        {
                          tag: "Corporate",
                          title: "High-Traffic Precision",
                          desc: "Durable finishes designed for heavy usage environments.",
                        },
                        {
                          tag: "Logistics",
                          title: "Protective Barriers",
                          desc: "Specialized coatings for warehouse and industrial safety.",
                        },
                      ].map(({ tag, title, desc }) => (
                        <div
                          key={tag}
                          className="p-8 glass-card rounded-2xl hover:bg-white transition-colors duration-300"
                        >
                          <p className="text-[10px] text-label text-teal-accent mb-4">
                            {tag}
                          </p>
                          <h4 className="text-base font-bold text-navy mb-2">{title}</h4>
                          <p className="text-xs text-on-surface-variant/70 leading-relaxed">
                            {desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 03 — Artisan */}
            <section id="specialty" className="scroll-mt-40 scroll-reveal">
              <div className="flex flex-col items-center text-center mb-24">
                <span className="text-teal-accent text-label text-[10px] mb-4 block font-bold tracking-[0.2em]">
                  03 — ARTISANSHIP
                </span>
                <h2 className="text-5xl md:text-6xl font-headline mb-8 text-navy">
                  The Master&apos;s Hand
                </h2>
                <p className="max-w-2xl text-on-surface-variant text-lg font-medium leading-relaxed">
                  Centuries-old techniques reimagined for modern luxury. Our
                  master artisans create depth and texture through meticulous
                  hand-layered finishes.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {artisanCards.map(({ title, desc, img, alt }) => (
                  <Link key={title} href="/portfolio" className="group block cursor-pointer">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-8 shadow-xl border border-outline/30 relative">
                      <Image
                        src={img}
                        alt={alt}
                        fill
                        className="object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <h3 className="text-2xl font-headline mb-4 text-navy transition-colors group-hover:text-vibrant-accent">
                      {title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-medium">
                      {desc}
                    </p>
                    <span className="text-vibrant-accent font-bold text-[10px] tracking-widest uppercase flex items-center gap-2">
                      Explore{" "}
                      <span className="w-8 h-[1px] bg-vibrant-accent/30 group-hover:w-12 transition-all" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* 04 — Industrial Floor */}
            <section id="industrial" className="scroll-mt-40 scroll-reveal">
              <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[3.5rem] bg-navy text-white shadow-[0_40px_80px_rgba(20,43,88,0.3)] relative">
                {/* Left: copy */}
                <div className="p-12 md:p-24 lg:p-20 relative flex flex-col justify-center">
                  <div className="absolute -top-10 -left-10 opacity-5 pointer-events-none">
                    <span className="material-symbols-outlined text-[300px]">
                      format_paint
                    </span>
                  </div>
                  <span className="text-vibrant-accent text-label text-[10px] mb-6 block font-bold tracking-[0.2em]">
                    04 — PERFORMANCE
                  </span>
                  <h2 className="text-4xl md:text-5xl font-headline mb-8 text-white leading-tight">
                    Industrial
                    <br />
                    Floor Finishes
                  </h2>
                  <p className="text-white/60 mb-12 text-lg leading-relaxed font-medium">
                    Engineered for the intersection of aesthetics and utility.
                    From high-gloss epoxy resins to heavy-duty polyurethane
                    systems.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
                    {[
                      {
                        icon: "floor",
                        title: "Resin Systems",
                        desc: "Hygienic and impact-resistant solutions.",
                      },
                      {
                        icon: "warning",
                        title: "Safety Marking",
                        desc: "OSHA-compliant paths and graphics.",
                      },
                    ].map(({ icon, title, desc }) => (
                      <div key={title} className="space-y-3">
                        <span className="material-symbols-outlined text-vibrant-accent text-3xl">
                          {icon}
                        </span>
                        <h4 className="font-bold text-base text-white">{title}</h4>
                        <p className="text-xs text-white/50 leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Right: image */}
                <div className="relative h-full min-h-[500px] overflow-hidden group">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwhwpC8X9rB6-EAEOPwc8TcX9ffRNLyNSbOIYzIP-srvET6Z7AMnUP0XCvhInAH3sdHksPFOu_4ip2xF_m5Dkl3sViCDO0KzlVTjX6xbeW3Px40gi2085-IP5WZusXKn5DbmrjNn8UkWhzZYRmTji3te8ZhgcCe1kcJeCuj1CYzFa692x50fMueFETfO03K3kof-r95m8TEQdPvfWUecj8NgSXrFbbbK1Dc6yFJj-W1TVarT15QtJgKdjsMZKsL5TwV0Qz2Y_7lR8"
                    alt="Industrial floor"
                    fill
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-navy/20 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-40" />
                  <div className="absolute inset-0 border-[24px] border-white/5 pointer-events-none" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
