"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const CATEGORIES = ["All Projects", "Residential", "Commercial", "Industrial", "Heritage"];

const PROJECTS = [
  {
    title: "The Obsidian Villa",
    category: "Residential",
    desc: "Achieving a mirror-like finish on custom concrete rendering for a seamless, monolithic aesthetic.",
    img: "/1.jpeg",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Aura Financial HQ",
    category: "Commercial",
    desc: "Large-scale acoustic wall treatments with pristine, eco-conscious coatings across 14 floors.",
    img: "/2.jpeg",
    aspect: "aspect-square",
  },
  {
    title: "Heritage Restoration",
    category: "Heritage",
    desc: "Precision hand-brush work restoring delicate 19th-century cornicing to original grandeur.",
    img: "/3(1).jpeg",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Techno Logistics Hub",
    category: "Industrial",
    desc: "High-durability slip-resistant epoxy finish with 15-year warranty for heavy machinery usage.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwhwpC8X9rB6-EAEOPwc8TcX9ffRNLyNSbOIYzIP-srvET6Z7AMnUP0XCvhInAH3sdHksPFOu_4ip2xF_m5Dkl3sViCDO0KzlVTjX6xbeW3Px40gi2085-IP5WZusXKn5DbmrjNn8UkWhzZYRmTji3te8ZhgcCe1kcJeCuj1CYzFa692x50fMueFETfO03K3kof-r95m8TEQdPvfWUecj8NgSXrFbbbK1Dc6yFJj-W1TVarT15QtJgKdjsMZKsL5TwV0Qz2Y_7lR8",
    aspect: "aspect-video",
  },
  {
    title: "The Sage Loft",
    category: "Residential",
    desc: "Creating a velvet-touch matte finish that resists fingerprints for elevated daily living.",
    img: "/5.jpeg",
    aspect: "aspect-square",
  },
  {
    title: "Urban Monolith",
    category: "Commercial",
    desc: "Weather-proof multi-textured exterior facade with a sharp architectural editorial edge.",
    img: "/6.jpeg",
    aspect: "aspect-[3/4]",
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("All Projects");

  const filtered =
    active === "All Projects"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  return (
    <div className="bg-white text-on-surface selection:bg-vibrant-accent/30">
      <NavBar />

      <main className="pt-40 pb-24">
        {/* Header */}
        <header className="max-w-screen-2xl mx-auto px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-8">
              <span className="text-teal-accent font-bold uppercase tracking-[0.3em] text-[11px] mb-6 block">
                Curated Works
              </span>
              <h1 className="text-6xl md:text-8xl font-headline text-navy leading-[1.05] tracking-tight">
                Mastery in Every <br />
                <span className="italic font-normal text-vibrant-accent">
                  Stroke &amp; Surface.
                </span>
              </h1>
            </div>
            <div className="md:col-span-4 pb-3">
              <p className="text-on-surface-variant text-xl leading-relaxed font-medium">
                Explore our selection of premium finishes across heritage
                estates, contemporary high-rises, and architectural icons.
              </p>
            </div>
          </div>
        </header>

        {/* Filter bar */}
        <section className="max-w-screen-2xl mx-auto px-8 mb-20">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-6 border-b border-outline pb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-bold uppercase tracking-widest text-[10px] transition-all ${
                  active === cat
                    ? "bg-vibrant-accent text-white px-6 py-2 rounded-full shadow-lg shadow-vibrant-accent/20"
                    : "text-on-surface-variant hover:text-teal-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Masonry grid */}
        <section className="max-w-screen-2xl mx-auto px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-10">
            {filtered.map((project) => (
              <div
                key={project.title}
                className="mb-12 group cursor-pointer break-inside-avoid transition-transform duration-[600ms] cubic-bezier-[0.16,1,0.3,1] hover:-translate-y-2"
              >
                <div className="bg-surface-variant rounded-xl overflow-hidden shadow-sm">
                  <div className={`relative ${project.aspect}`}>
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-[800ms] group-hover:scale-[1.05]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-headline text-navy">
                      {project.title}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-teal-accent px-3 py-1 bg-teal-accent/5 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-on-surface-variant text-base leading-relaxed font-medium">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* CTA */}
        <section className="mt-40 bg-surface-variant py-32">
          <div className="max-w-screen-2xl mx-auto px-8 text-center">
            <h2 className="text-5xl md:text-6xl font-headline mb-12 max-w-3xl mx-auto leading-tight text-navy">
              Ready to commission your next{" "}
              <span className="italic font-normal text-vibrant-accent">
                masterpiece?
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="bg-navy text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-teal-accent hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
