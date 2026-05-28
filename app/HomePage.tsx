"use client";

import { startTransition, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const FIRST_VISIT_MODAL_KEY = "elite-finish-home-help-modal-seen";

const HOME_HELP_OPTIONS = [
  {
    href: "/contact",
    label: "Contact Us",
    title: "Speak with the team",
    description: "Ask a question, share your project details, or request a callback.",
  },
  {
    href: "/contact",
    label: "Get Estimate",
    title: "Request a quote",
    description: "Send your project scope and we will prepare the next steps.",
  },
  {
    href: "/portfolio",
    label: "Portfolio",
    title: "See recent work",
    description: "Review completed painting projects and finish quality.",
  },
  {
    href: "/about",
    label: "About Us",
    title: "Learn about Elite Finish",
    description: "Read about the team, experience, and local service focus.",
  },
] as const;

const PROJECT_GALLERY = [
  {
    src: "/internet-exterior-1.jpg",
    alt: "Freshly finished modern home exterior",
    eyebrow: "Exterior Renewal",
    title: "Street-facing finishes that hold their tone and sharpness.",
    description:
      "Careful preparation, weather-aware scheduling, and premium exterior systems create durable first impressions for Geelong homes.",
  },
  {
    src: "/internet-interior-1.jpg",
    alt: "Light-filled interior room with refined wall finishes",
    eyebrow: "Interior Refinement",
    title: "Clean interior colour work that changes how a room feels.",
    description:
      "From bright family spaces to quiet retreat rooms, we align colour, light, and surface quality to lift the entire interior.",
  },
  {
    src: "/internet-kitchen-1.jpg",
    alt: "Contemporary kitchen with crisp painted walls and trim",
    eyebrow: "High-use Living",
    title: "Kitchens, living zones, and circulation spaces finished for everyday use.",
    description:
      "These high-traffic areas need crisp cut lines, washable coatings, and a finish that still feels tailored rather than purely utilitarian.",
  },
  {
    src: "/internet-home-1.jpg",
    alt: "Curated residential exterior with architectural details",
    eyebrow: "Architectural Detail",
    title: "A stronger visual identity built through trim, texture, and contrast.",
    description:
      "We use restrained palettes and disciplined detailing to give facades depth, rhythm, and a more premium presence from the street.",
  },
] as const;

export default function HomePage() {
  const [showHelpModal, setShowHelpModal] = useState(false);

  useEffect(() => {
    try {
      const hasSeenModal = window.localStorage.getItem(FIRST_VISIT_MODAL_KEY);

      if (!hasSeenModal) {
        window.localStorage.setItem(FIRST_VISIT_MODAL_KEY, "true");
        startTransition(() => {
          setShowHelpModal(true);
        });
      }
    } catch {
      startTransition(() => {
        setShowHelpModal(true);
      });
    }
  }, []);

  useEffect(() => {
    if (!showHelpModal) {
      document.body.style.removeProperty("overflow");
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [showHelpModal]);

  return (
    <div className="bg-black text-on-surface">
      {showHelpModal ? (
        <div className="fixed inset-0 z-[120] flex items-center justify-center px-4 py-8">
          <button
            type="button"
            aria-label="Close help options"
            className="absolute inset-0 bg-black/72 backdrop-blur-md"
            onClick={() => setShowHelpModal(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="home-help-modal-title"
            aria-describedby="home-help-modal-description"
            className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#050505] shadow-[0_32px_120px_rgba(0,0,0,0.6)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,128,128,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(245,166,35,0.18),transparent_28%)]" />
            <div className="relative px-6 py-8 md:px-10 md:py-10">
              <div className="mb-8 flex items-start justify-between gap-6">
                <div className="max-w-2xl">
                  <span className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-vibrant-accent">
                    Welcome
                  </span>
                  <h2
                    id="home-help-modal-title"
                    className="text-3xl font-extrabold tracking-tight text-white md:text-5xl"
                  >
                    How can we help you?
                  </h2>
                  <p
                    id="home-help-modal-description"
                    className="mt-4 max-w-xl text-sm font-medium leading-relaxed text-on-surface/65 md:text-base"
                  >
                    Choose the page that matches what you need and we will take you
                    straight there.
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Close welcome modal"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
                  onClick={() => setShowHelpModal(false)}
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {HOME_HELP_OPTIONS.map(({ href, label, title, description }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setShowHelpModal(false)}
                    className="group rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-vibrant-accent/40 hover:bg-white/[0.05]"
                  >
                    <span className="mb-4 inline-flex rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-teal-accent">
                      {label}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white">{title}</h3>
                    <p className="mt-3 max-w-md text-sm font-medium leading-relaxed text-on-surface/65">
                      {description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-vibrant-accent">
                      Open page
                      <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-on-surface/45">
                  This welcome prompt is shown once on the first home visit.
                </p>
                <button
                  type="button"
                  onClick={() => setShowHelpModal(false)}
                  className="rounded-full border border-white/12 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-[0.24em] text-white transition-colors hover:bg-white/10"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <NavBar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent z-10" />
            <Image
              src="/8.jpeg"
              alt="Elite Finish painting project detail"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-20 max-w-screen-2xl mx-auto px-6 md:px-12 w-full">
            <div className="max-w-3xl">
              <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                <span className="w-2 h-2 rounded-full bg-vibrant-accent animate-pulse" />
                Excellence Since 2024
              </span>
              <h1 className="mb-8 text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl">
                Masterstroke <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-accent to-vibrant-accent">
                  Quality.
                </span>
              </h1>
              <p className="text-on-surface/70 text-lg md:text-xl mb-12 max-w-xl leading-relaxed font-medium">
                Elevating Geelong&apos;s architectural landscape through precision
                planning, experienced workmanship, and contemporary finishes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-vibrant-accent text-white px-10 py-5 rounded-xl font-bold text-base hover:shadow-2xl hover:shadow-vibrant-accent/30 transition-all transform hover:-translate-y-1"
                >
                  Request for Quote
                </Link>
                <Link
                  href="/portfolio"
                  className="rounded-xl border border-white/12 bg-white/5 px-10 py-5 text-base font-bold text-white transition-all transform hover:-translate-y-1 hover:bg-surface-variant"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Accreditation Ticker */}
        {/* <section className="bg-surface-variant py-8 border-y border-outline/50">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 opacity-80">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-teal-accent text-4xl">verified</span>
              <div>
                <p className="font-bold text-[10px] uppercase tracking-widest text-navy/60">
                  Accredited Member
                </p>
                <p className="font-bold text-lg text-navy">Master Painters Association</p>
              </div>
            </div>
            <div className="hidden md:block h-8 w-px bg-outline" />
            <p className="text-xs font-bold tracking-widest text-navy/80 text-center uppercase">
              Certified Quality Assurance • Geelong Region • Licensed &amp; Insured
            </p>
            <div className="hidden md:block h-8 w-px bg-outline" />
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-vibrant-accent text-lg"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <span className="font-bold text-sm text-navy">4.9/5 Google Rating</span>
            </div>
          </div>
        </section> */}

        {/* Services Section */}
        <section className="bg-black py-32">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <div className="max-w-2xl">
                <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                  Curated Surface{" "}
                  <span className="text-teal-accent italic font-normal">Solutions</span>
                </h2>
                <p className="text-on-surface/60 text-lg font-medium leading-relaxed">
                  From heritage restoration to industrial innovation, we treat every
                  surface as a canvas of architectural value.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-vibrant-accent rounded-full" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">
                  Service Index 2024
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Residential — large card */}
              <div className="md:col-span-8 group relative overflow-hidden h-[600px] rounded-2xl bg-surface-variant">
                <Image
                  src="/1.jpeg"
                  alt="Luxury modern interior"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <span className="font-bold text-xs uppercase tracking-widest text-vibrant-accent mb-4 block">
                    01 / Residential
                  </span>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                    Architectural Estates
                  </h3>
                  <p className="text-white/80 max-w-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 font-medium">
                    Premium interior and exterior finishes for Geelong&apos;s most distinguished homes.
                  </p>
                </div>
              </div>

              {/* Specialty — small card */}
              <div className="md:col-span-4 group relative overflow-hidden h-[600px] rounded-2xl bg-surface-variant">
                <Image
                  src="/3.jpeg"
                  alt="Decorative Venetian plaster"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <span className="font-bold text-xs uppercase tracking-widest text-vibrant-accent mb-4 block">
                    02 / Artisan
                  </span>
                  <h3 className="text-3xl font-extrabold text-white mb-4">Specialty Finishes</h3>
                  <p className="text-white/80 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 font-medium">
                    Master wood graining, marbling, and French washes.
                  </p>
                </div>
              </div>

              {/* Commercial */}
              <div className="md:col-span-6 group relative overflow-hidden h-[500px] rounded-2xl bg-surface-variant">
                <Image
                  src="/2.jpeg"
                  alt="Modern corporate office lobby"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <span className="font-bold text-xs uppercase tracking-widest text-vibrant-accent mb-4 block">
                    03 / Enterprise
                  </span>
                  <h3 className="text-3xl font-extrabold text-white mb-4">Commercial Space</h3>
                  <p className="text-white/80 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 font-medium">
                    Large scale projects delivered with boutique precision.
                  </p>
                </div>
              </div>

              {/* Industrial */}
              <div className="md:col-span-6 group relative overflow-hidden h-[500px] rounded-2xl bg-surface-variant">
                <Image
                  src="/internet-home-1.jpg"
                  alt="Modern residential exterior finish"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <span className="font-bold text-xs uppercase tracking-widest text-vibrant-accent mb-4 block">
                    04 / Performance
                  </span>
                  <h3 className="text-3xl font-extrabold text-white mb-4">Industrial Coating</h3>
                  <p className="text-white/80 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 font-medium">
                    Epoxy flooring and protective finishes for harsh environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Gallery */}
        <section className="bg-[#050505] py-32">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
            <div className="mb-20 max-w-3xl">
              <span className="mb-5 block text-xs font-bold uppercase tracking-[0.35em] text-teal-accent">
                Visual Direction
              </span>
              <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                More spaces, more finish detail, more proof in the visuals.
              </h2>
              <p className="text-lg font-medium leading-relaxed text-on-surface/65">
                We expanded the homepage with additional residential imagery to show
                the type of rooms, facades, and design outcomes our work supports.
                The focus stays on clarity, durability, and a polished architectural feel.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {PROJECT_GALLERY.map(({ src, alt, eyebrow, title, description }) => (
                <article
                  key={src}
                  className="group overflow-hidden rounded-[2rem] border border-outline/60 bg-surface-variant shadow-[0_24px_60px_-24px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_32px_70px_-24px_rgba(0,0,0,0.45)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent" />
                  </div>
                  <div className="space-y-4 p-8">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-vibrant-accent">
                      {eyebrow}
                    </span>
                    <h3 className="max-w-xl text-2xl font-extrabold leading-tight text-white">
                      {title}
                    </h3>
                    <p className="max-w-2xl text-base font-medium leading-relaxed text-on-surface/65">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Experience / Heritage Section */}
        <section className="py-32 bg-surface-variant overflow-hidden relative">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              {/* Left: copy */}
              <div className="relative">
                <div className="absolute -top-16 -left-12 text-[12rem] font-extrabold text-navy/5 leading-none select-none">
                  2024
                </div>
                <div className="relative z-10 pt-10">
                  <h2 className="mb-8 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
                    Formed by <br />
                    <span className="text-vibrant-accent">Expertise.</span>
                  </h2>
                  <div className="space-y-12">
                    <div className="flex gap-8 items-start">
                      <div className="text-5xl font-extrabold text-teal-accent">10+</div>
                      <div>
                        <h4 className="mb-2 text-xl font-bold text-white">
                          Years Combined Experience
                        </h4>
                        <p className="text-on-surface/60 font-medium leading-relaxed">
                          Experienced painting professionals joined together in 2024 to bring
                          disciplined preparation, premium products, and reliable project delivery
                          to Geelong homes and businesses.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-8 items-start">
                      <div className="text-5xl font-extrabold text-teal-accent">Local</div>
                      <div>
                        <h4 className="mb-2 text-xl font-bold text-white">Geelong Focus</h4>
                        <p className="text-on-surface/60 font-medium leading-relaxed">
                          From family homes to commercial spaces, our work is focused on Highton,
                          Grovedale, Geelong City, and the wider Greater Geelong region.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: image */}
              <div className="relative h-[500px] lg:h-[700px]">
                <div className="absolute inset-0 border-4 border-vibrant-accent/20 translate-x-6 translate-y-6 rounded-2xl" />
                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/5.jpeg"
                    alt="Elite Finish team workmanship"
                    fill
                    className="object-cover duration-700"
                  />
                </div>
                <div className="absolute bottom-8 right-8 z-20 glass-card p-8 rounded-xl border border-white/20 shadow-2xl max-w-xs">
                  <p className="mb-4 text-xl font-medium italic leading-relaxed text-white">
                    &ldquo;Quality starts with the people on site.&rdquo;
                  </p>
                  <p className="font-bold text-xs uppercase tracking-widest text-vibrant-accent">
                    — Elite Finish Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-black py-32">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
            <div className="text-center mb-24">
              <span className="font-bold text-xs uppercase tracking-[0.4em] text-vibrant-accent mb-4 block">
                Client Voices
              </span>
              <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                The Elite <span className="text-teal-accent">Experience</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "The repaint was organised, tidy, and finished with sharp lines throughout the home. The team kept us informed from prep through to handover.",
                  name: "Residential Client",
                  role: "Highton",
                },
                {
                  quote:
                    "Our commercial repaint was completed with minimal disruption to trading. The finish looks clean, durable, and professional.",
                  name: "Business Owner",
                  role: "Geelong City",
                },
                {
                  quote:
                    "They helped with colour selection and delivered exactly what was quoted. The exterior now looks fresh and well protected.",
                  name: "Homeowner",
                  role: "Grovedale",
                },
                {
                  quote:
                    "Preparation was handled properly before any paint went on. That attention to the early work made the final result stand out.",
                  name: "Residential Client",
                  role: "Geelong City",
                },
                {
                  quote:
                    "The crew worked around our schedule and left the site clean each day. Communication was clear and the finish was consistent.",
                  name: "Property Manager",
                  role: "Highton",
                },
                {
                  quote:
                    "Reliable, respectful, and detail-focused. The rooms feel brighter and the trims have a crisp finish.",
                  name: "Homeowner",
                  role: "Grovedale",
                },
              ].map(({ quote, name, role }) => (
                <div
                  key={`${name}-${role}-${quote}`}
                  className="bg-surface-variant p-10 rounded-2xl border border-outline/10 flex flex-col justify-between hover:border-vibrant-accent/30 transition-all duration-500 hover:shadow-xl group"
                >
                  <div>
                    <div className="flex text-vibrant-accent mb-8">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className="material-symbols-outlined"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <p className="mb-8 text-lg font-medium italic leading-relaxed text-white/80">
                      &ldquo;{quote}&rdquo;
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-extrabold text-white">{name}</p>
                    <p className="font-bold text-[10px] uppercase tracking-widest text-on-surface/50">
                      {role}
                    </p>
                  </div>
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
