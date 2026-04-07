"use client";

import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="bg-white text-on-surface">
      <NavBar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 bg-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10" />
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
              <span className="inline-flex items-center gap-2 bg-navy/5 text-navy border border-navy/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                <span className="w-2 h-2 rounded-full bg-vibrant-accent animate-pulse" />
                Excellence Since 2024
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-navy leading-[1.05] mb-8 tracking-tight">
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
                  className="bg-white border border-outline text-navy px-10 py-5 rounded-xl font-bold text-base hover:bg-surface-variant transition-all transform hover:-translate-y-1"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Accreditation Ticker */}
        <section className="bg-surface-variant py-8 border-y border-outline/50">
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
        </section>

        {/* Services Section */}
        <section className="py-32 bg-white">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-extrabold text-navy mb-6 tracking-tight">
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
                <span className="font-bold uppercase text-xs tracking-widest text-navy">
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
                  src="/4(1).jpeg"
                  alt="Industrial warehouse epoxy floor"
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
                  <h2 className="text-5xl md:text-6xl font-extrabold text-navy mb-8 leading-tight tracking-tight">
                    Formed by <br />
                    <span className="text-vibrant-accent">Expertise.</span>
                  </h2>
                  <div className="space-y-12">
                    <div className="flex gap-8 items-start">
                      <div className="text-5xl font-extrabold text-teal-accent">10+</div>
                      <div>
                        <h4 className="font-bold text-xl text-navy mb-2">
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
                        <h4 className="font-bold text-xl text-navy mb-2">Geelong Focus</h4>
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
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="absolute bottom-8 right-8 z-20 glass-card p-8 rounded-xl border border-white/20 shadow-2xl max-w-xs">
                  <p className="font-medium text-navy text-xl italic mb-4 leading-relaxed">
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
        <section className="py-32 bg-white">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
            <div className="text-center mb-24">
              <span className="font-bold text-xs uppercase tracking-[0.4em] text-vibrant-accent mb-4 block">
                Client Voices
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-navy tracking-tight">
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
                    <p className="text-navy/80 leading-relaxed text-lg mb-8 font-medium italic">
                      &ldquo;{quote}&rdquo;
                    </p>
                  </div>
                  <div>
                    <p className="font-extrabold text-navy text-lg">{name}</p>
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

      {/* Floating Contact FAB */}
      <Link
        href="/contact"
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-vibrant-accent text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform group relative"
      >
        <span className="material-symbols-outlined text-3xl">chat_bubble</span>
        <span className="absolute right-20 bg-navy text-white px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Inquire Now
        </span>
      </Link>
    </div>
  );
}
