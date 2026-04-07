"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const VALUES = [
  {
    icon: "auto_awesome",
    title: "Uncompromising Quality",
    desc: "Every surface we touch reflects careful preparation, trade knowledge, and clean execution.",
  },
  {
    icon: "handshake",
    title: "Integrity in Every Stroke",
    desc: "Honest timelines, transparent pricing, and respectful communication from first consultation to final handover.",
  },
  {
    icon: "eco",
    title: "Sustainable Practice",
    desc: "We champion zero-VOC paints, responsible disposal, and eco-conscious coating systems that protect your family and our environment.",
  },
  {
    icon: "workspace_premium",
    title: "Experienced Craftsmanship",
    desc: "Experienced painters working together with modern products and disciplined systems to deliver finishes that last.",
  },
];

const STATS = [
  { value: "2024", label: "Company Established" },
  { value: "10+", label: "Years Combined Experience" },
  { value: "4.9★", label: "Google Rating" },
  { value: "100%", label: "MPA Accredited" },
];

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white text-on-surface selection:bg-vibrant-accent/30">
      <NavBar />

      <main className="pt-40">
        {/* ── Hero ── */}
        <header className="max-w-screen-2xl mx-auto px-8 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 animate-fade-in-up">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-teal-accent/5 rounded-full mb-8 border border-teal-accent/10">
                <span className="flex h-2 w-2 rounded-full bg-teal-accent animate-pulse" />
                <span className="text-teal-accent text-label text-[10px]">
                  Our Story
                </span>
              </div>
              <h1 className="text-6xl md:text-[5.5rem] font-headline leading-[0.95] mb-10 text-navy tracking-tighter">
                Founded in 2024
                <br />
                by{" "}
                <span className="text-vibrant-accent italic relative">
                  Experience.
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-vibrant-accent/20 rounded-full" />
                </span>
              </h1>
              <p className="text-xl text-on-surface-variant max-w-xl font-medium leading-relaxed mb-12">
                Elite Finish was formed when experienced painting professionals
                joined together to deliver premium residential, commercial, and
                specialty finishes across Geelong with an unshakeable commitment
                to quality.
              </p>
              <Link
                href="/contact"
                className="bg-navy text-white px-10 py-4 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-vibrant-accent hover:text-navy hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-3"
              >
                Work With Us{" "}
                <span className="material-symbols-outlined text-sm">east</span>
              </Link>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="w-full aspect-[4/5] relative rounded-3xl overflow-hidden shadow-[0_40px_80px_-15px_rgba(20,43,88,0.15)] animate-float">
                <Image
                  src="/7.jpeg"
                  alt="Elite Finish painting work"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-2xl hidden md:block">
                <p className="text-sm font-bold text-navy italic mb-1">
                  &ldquo;Quality starts with experienced people working together.&rdquo;
                </p>
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
                  — Elite Finish Team
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* ── Stats ── */}
        <section className="bg-navy py-20 scroll-reveal">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {STATS.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-4xl md:text-5xl font-headline text-vibrant-accent mb-3">
                    {value}
                  </div>
                  <p className="text-white/60 text-sm font-medium uppercase tracking-widest">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="py-32 max-w-screen-2xl mx-auto px-8 scroll-reveal">
          <div className="text-center mb-24">
            <span className="text-teal-accent text-label text-[10px] mb-4 block font-bold tracking-[0.2em]">
              What We Stand For
            </span>
            <h2 className="text-5xl md:text-6xl font-headline text-navy mb-6">
              Our Core Values
            </h2>
            <p className="max-w-2xl mx-auto text-on-surface-variant text-lg font-medium leading-relaxed">
              Four principles that guide every brushstroke from our 2024
              founding onward.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {VALUES.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="glass-card p-10 rounded-3xl hover:bg-white transition-colors duration-300 group"
              >
                <span className="material-symbols-outlined text-4xl text-vibrant-accent mb-6 block">
                  {icon}
                </span>
                <h3 className="text-2xl font-headline text-navy mb-4">
                  {title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed font-medium">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Story ── */}
        <section className="bg-surface-variant py-32 scroll-reveal">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <span className="text-teal-accent text-label text-[10px] mb-4 block font-bold tracking-[0.2em]">
                  Our Formation
                </span>
                <h2 className="text-5xl font-headline text-navy mb-8 leading-tight">
                  Built by an
                  <br />
                  Experienced Team.
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed font-medium mb-8">
                  In 2024, experienced painters and finishing specialists came
                  together to form Elite Finish. The company was built around a
                  shared standard: careful preparation, honest communication,
                  and finishes that hold up in real homes and businesses.
                </p>
                <p className="text-on-surface-variant text-lg leading-relaxed font-medium mb-12">
                  Today, the team brings that joined experience to Highton,
                  Grovedale, Geelong City, and the wider Greater Geelong region,
                  treating every surface as an opportunity to deliver lasting
                  value.
                </p>
                <Link
                  href="/portfolio"
                  className="text-navy font-bold text-xs tracking-widest uppercase flex items-center gap-4 group w-fit"
                >
                  <span className="w-12 h-12 rounded-full border border-navy/20 flex items-center justify-center group-hover:bg-navy group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </span>
                  View Our Work
                </Link>
              </div>
              <div className="relative h-[600px]">
                <div className="absolute inset-0 border-4 border-vibrant-accent/20 translate-x-6 translate-y-6 rounded-3xl" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden z-10">
                  <Image
                    src="/8.jpeg"
                    alt="Elite Finish surface finish"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className="py-32 max-w-screen-2xl mx-auto px-8 scroll-reveal">
          <div className="text-center mb-24">
            <span className="text-teal-accent text-label text-[10px] mb-4 block font-bold tracking-[0.2em]">
              Company Directors
            </span>
            <h2 className="text-5xl md:text-6xl font-headline text-navy">
              Our Team
            </h2>
          </div>
          <div className="mx-auto max-w-5xl">
            <div className="relative aspect-[1178/912] overflow-hidden rounded-3xl border border-outline/30 shadow-2xl">
              <Image
                src="/team.png"
                alt="Elite Finish team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {["Parampreet Singh", "Hardeep Kaler"].map((name) => (
                <div
                  key={name}
                  className="rounded-2xl border border-outline/30 bg-white p-8 text-center shadow-sm"
                >
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-vibrant-accent">
                    Director
                  </p>
                  <h3 className="text-3xl font-headline text-navy">{name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Accreditations ── */}
        <section className="bg-navy py-24 scroll-reveal">
          <div className="max-w-screen-2xl mx-auto px-8 text-center">
            <span className="text-vibrant-accent text-label text-[10px] mb-6 block font-bold tracking-[0.2em]">
              Recognised Excellence
            </span>
            <h2 className="text-4xl md:text-5xl font-headline text-white mb-8">
              Industry Accreditations
            </h2>
            <p className="text-white/60 max-w-xl mx-auto text-lg font-medium mb-16">
              Our commitment to the highest standards is recognised by
              Australia&apos;s leading industry bodies.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12">
              {[
                { icon: "verified", label: "Master Painters Association" },
                { icon: "workspace_premium", label: "Green Seal Certified" },
                { icon: "architecture", label: "AIA Trade Member" },
                { icon: "security", label: "Licensed & Insured" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-vibrant-accent text-2xl">
                      {icon}
                    </span>
                  </div>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest text-center max-w-[120px]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
