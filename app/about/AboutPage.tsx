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
    desc: "Every surface we touch reflects decades of mastery. We never cut corners — only sharp, precise edges.",
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
    title: "Legacy Craftsmanship",
    desc: "Techniques passed through generations, elevated by modern innovation — ensuring every finish stands the test of time.",
  },
];

const TEAM = [
  {
    name: "Marcus Elliot",
    role: "Master Painter & Founder",
    since: "Est. 1979",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCO8Y865uJL8M_M6jzYG0IItCKeYllj_O8KBiu3lJbjCGfzDeQrKuLCtls6_UDym0mKin2n8XUDwZOUuprrb9m4Qvde0xEeaJMR-s2VXMBVsMFbsRCOyErnFZ51sXoUJFa5wcjywZDP5eyuFuh0CO6K1YESTvqPnO_IyvioTFFhzpFERNTMg1AhdHhBPobtUjXDQv5S7Ejc2rIHfOZq1s76-MoIOYkNUwMhN2nHUrfz5YbAgelHyu_N7cBwyCw0AVrGOXm1trWuXH0",
  },
  {
    name: "Sophia Vane",
    role: "Head of Colour Strategy",
    since: "12 years",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUuc3BvHUkTOK-TyHSBNNd7tBgSrFPS6KHMzoLPdXJ10cpbLeKge7qxElTTjxuMbq7FmMY5YWBYcV0VvBC6x8WMNzSi7lTAtuDTUNyr0yBcnbiiIn1Vxftp-7ESjkmcZRYKTRlAYCb7jHdOBxnMPgpeyXNJGNtPd4lqGOBRFEkFgbmiwKi3uRhEba5i1JbEbO_cDpQaeOwo9KJ9FWn33X_z9zLuKWK6fu4WQDjZ8cyFY9sLA0CPngefzvUVp26WKXDtDJrGk0yJqA",
  },
  {
    name: "James Okoro",
    role: "Lead Industrial Specialist",
    since: "8 years",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwhwpC8X9rB6-EAEOPwc8TcX9ffRNLyNSbOIYzIP-srvET6Z7AMnUP0XCvhInAH3sdHksPFOu_4ip2xF_m5Dkl3sViCDO0KzlVTjX6xbeW3Px40gi2085-IP5WZusXKn5DbmrjNn8UkWhzZYRmTji3te8ZhgcCe1kcJeCuj1CYzFa692x50fMueFETfO03K3kof-r95m8TEQdPvfWUecj8NgSXrFbbbK1Dc6yFJj-W1TVarT15QtJgKdjsMZKsL5TwV0Qz2Y_7lR8",
  },
];

const STATS = [
  { value: "45+", label: "Years of Mastery" },
  { value: "1,200+", label: "Projects Completed" },
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
                Forty-Five Years
                <br />
                of{" "}
                <span className="text-vibrant-accent italic relative">
                  Excellence.
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-vibrant-accent/20 rounded-full" />
                </span>
              </h1>
              <p className="text-xl text-on-surface-variant max-w-xl font-medium leading-relaxed mb-12">
                Founded in 1979 by master craftsman Marcus Elliot, Elite Finish
                has grown from a two-man operation to one of Australia&apos;s
                most respected architectural painting studios — built on an
                unshakeable commitment to quality.
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO8Y865uJL8M_M6jzYG0IItCKeYllj_O8KBiu3lJbjCGfzDeQrKuLCtls6_UDym0mKin2n8XUDwZOUuprrb9m4Qvde0xEeaJMR-s2VXMBVsMFbsRCOyErnFZ51sXoUJFa5wcjywZDP5eyuFuh0CO6K1YESTvqPnO_IyvioTFFhzpFERNTMg1AhdHhBPobtUjXDQv5S7Ejc2rIHfOZq1s76-MoIOYkNUwMhN2nHUrfz5YbAgelHyu_N7cBwyCw0AVrGOXm1trWuXH0"
                  alt="Master painter Marcus Elliot"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-2xl hidden md:block">
                <p className="text-sm font-bold text-navy italic mb-1">
                  &ldquo;Quality is not an act — it is a habit.&rdquo;
                </p>
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
                  — Marcus Elliot, Founder
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
              Four principles that have guided every brushstroke for
              forty-five years.
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
                  Our Heritage
                </span>
                <h2 className="text-5xl font-headline text-navy mb-8 leading-tight">
                  Built on Two
                  <br />
                  Generations of Craft.
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed font-medium mb-8">
                  In 1979, Marcus Elliot left a corporate painting firm to
                  pursue something more meaningful — a studio where artistry
                  and precision were never sacrificed for speed. What started
                  as a residential service in Melbourne grew into a national
                  reputation for excellence.
                </p>
                <p className="text-on-surface-variant text-lg leading-relaxed font-medium mb-12">
                  Today, his son Daniel leads the next generation of
                  craftspeople, carrying the same founding ethos: every surface
                  is an opportunity to create something extraordinary.
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
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtvGNQ7WLP06WE9btGltAvhJ1n4f-ZiUDhLfAbE7XKuyCpSFVs6E1RU_iAlKdwVaHeh-Ce2l5W4_VVCL6SnJwc-aNw7WLXUbwrOMczi9j4yt1rxzohyaB2GswzU7Hq-Xy2gOibkOstEZ_3_e2kjlficxGAXjE-x_foRbZx7cIHAkKHObXDxow2h1jThZY4cYmsmCPIhyTTAf6_cVdNpORvD7rqYYMRh1YOfgK4Vt-VPRi2LdoEuxZGuy-H6HteOZd13XjvWKF9G24"
                    alt="Master painter at work"
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
              The People Behind the Craft
            </span>
            <h2 className="text-5xl md:text-6xl font-headline text-navy">
              Meet the Masters
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TEAM.map(({ name, role, since, img }) => (
              <div key={name} className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-8 shadow-xl border border-outline/30 relative magnetic-hover">
                  <Image
                    src={img}
                    alt={name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    sizes="33vw"
                  />
                  <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-2xl font-headline text-navy mb-1">
                  {name}
                </h3>
                <p className="text-on-surface-variant font-medium text-sm mb-2">
                  {role}
                </p>
                <span className="text-vibrant-accent font-bold text-[10px] tracking-widest uppercase">
                  {since}
                </span>
              </div>
            ))}
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
