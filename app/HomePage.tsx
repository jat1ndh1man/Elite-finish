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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtvGNQ7WLP06WE9btGltAvhJ1n4f-ZiUDhLfAbE7XKuyCpSFVs6E1RU_iAlKdwVaHeh-Ce2l5W4_VVCL6SnJwc-aNw7WLXUbwrOMczi9j4yt1rxzohyaB2GswzU7Hq-Xy2gOibkOstEZ_3_e2kjlficxGAXjE-x_foRbZx7cIHAkKHObXDxow2h1jThZY4cYmsmCPIhyTTAf6_cVdNpORvD7rqYYMRh1YOfgK4Vt-VPRi2LdoEuxZGuy-H6HteOZd13XjvWKF9G24"
              alt="Cinematic close-up of a master painter"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-20 max-w-screen-2xl mx-auto px-6 md:px-12 w-full">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-navy/5 text-navy border border-navy/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                <span className="w-2 h-2 rounded-full bg-vibrant-accent animate-pulse" />
                Excellence Since 1979
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-navy leading-[1.05] mb-8 tracking-tight">
                Masterstroke <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-accent to-vibrant-accent">
                  Quality.
                </span>
              </h1>
              <p className="text-on-surface/70 text-lg md:text-xl mb-12 max-w-xl leading-relaxed font-medium">
                Elevating Geelong&apos;s architectural landscape through precision
                engineering, legacy craftsmanship, and contemporary finishes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-vibrant-accent text-white px-10 py-5 rounded-xl font-bold text-base hover:shadow-2xl hover:shadow-vibrant-accent/30 transition-all transform hover:-translate-y-1"
                >
                  Request a Consult
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUuc3BvHUkTOK-TyHSBNNd7tBgSrFPS6KHMzoLPdXJ10cpbLeKge7qxElTTjxuMbq7FmMY5YWBYcV0VvBC6x8WMNzSi7lTAtuDTUNyr0yBcnbiiIn1Vxftp-7ESjkmcZRYKTRlAYCb7jHdOBxnMPgpeyXNJGNtPd4lqGOBRFEkFgbmiwKi3uRhEba5i1JbEbO_cDpQaeOwo9KJ9FWn33X_z9zLuKWK6fu4WQDjZ8cyFY9sLA0CPngefzvUVp26WKXDtDJrGk0yJqA"
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLUtibUfQq5otrfdGqz9s9yQu4BUcowgx1fY9bIftIjrDbptATZAaS7AqaoXWp0Eqe_yAfF_iHktMF4TMpDVngFEiIrVycAzaui7Hpo21A-gIJKK1CyRASZfQWFSUOORf9nGbKGVIP5W-V_pJBuVTuwG0FplGkH8DWSMQgQ86-pAzkcUCWjCIFapmRnSllVWRC0LRwogr2H26087yj2hB-ctnih30Xp3xKtCtTGu2JisJu3rXYsyzGevniu0ctsd3qZ-ugNcWJ3QE"
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBepp8N0YNp1_P2x9qWQIyuM-Dv7OmEhozLiya5dJOQKv7eWJ2ynx_OaXxdDThWp8bV5cejv52W3jGyVsAUjz3RNv_5sa0kHI51uOTMdhCAt9NykqBp78HkniULBwQjB7blW5P-QiCoAH9BKdxW_NDq7bA0z9o1YFtxm33m57ljsEUmU8S6Q147yn1inHFIL8vmcJ4mJhhNo-VwM5n_YMNibRAOtx81Fq5DD6Paf0qAyoccppZUflaNSMWllgcI9wnY15MQaq1Yyz0"
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLSedNYbzPxFCYnu3oRzPdsK_uZLV4WMIcO_SCC8B3frMsSCNLrLGiQEWw6aFkl8BN5v4zWBrRS5PPt_rCPPewSt9y-jJ4RchyoFgVuwzEbQEX3fe-gcpi8lQ9XP_ChUPPV-p95ZnUDBkh5TwAxdcbKEAqFl2i0AmY5N9lxdmGR4jyTzhj-k6zw8c1LxQ7Jx80dBRy8hSmlga-VOZ_QeyBGBhV8pq-12Q5M-gMKIOYqAv-WtdWH5ygB_VutfrOoRT8HCHl6F0zOaE"
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
                  45
                </div>
                <div className="relative z-10 pt-10">
                  <h2 className="text-5xl md:text-6xl font-extrabold text-navy mb-8 leading-tight tracking-tight">
                    A Legacy of <br />
                    <span className="text-vibrant-accent">Expertise.</span>
                  </h2>
                  <div className="space-y-12">
                    <div className="flex gap-8 items-start">
                      <div className="text-5xl font-extrabold text-teal-accent">45+</div>
                      <div>
                        <h4 className="font-bold text-xl text-navy mb-2">
                          Years Combined Experience
                        </h4>
                        <p className="text-on-surface/60 font-medium leading-relaxed">
                          Spanning two generations of master craftsmen in the Geelong region, we
                          bring a level of knowledge that cannot be taught—only earned through
                          decades of practice.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-8 items-start">
                      <div className="text-5xl font-extrabold text-teal-accent">1.2k</div>
                      <div>
                        <h4 className="font-bold text-xl text-navy mb-2">Projects Completed</h4>
                        <p className="text-on-surface/60 font-medium leading-relaxed">
                          From heritage cottages in Battery Point to state-of-the-art industrial
                          facilities, our portfolio is a testament to Geelong&apos;s growth.
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
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO8Y865uJL8M_M6jzYG0IItCKeYllj_O8KBiu3lJbjCGfzDeQrKuLCtls6_UDym0mKin2n8XUDwZOUuprrb9m4Qvde0xEeaJMR-s2VXMBVsMFbsRCOyErnFZ51sXoUJFa5wcjywZDP5eyuFuh0CO6K1YESTvqPnO_IyvioTFFhzpFERNTMg1AhdHhBPobtUjXDQv5S7Ejc2rIHfOZq1s76-MoIOYkNUwMhN2nHUrfz5YbAgelHyu_N7cBwyCw0AVrGOXm1trWuXH0"
                    alt="Master painter portrait"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="absolute bottom-8 right-8 z-20 glass-card p-8 rounded-xl border border-white/20 shadow-2xl max-w-xs">
                  <p className="font-medium text-navy text-xl italic mb-4 leading-relaxed">
                    &ldquo;Quality is not an act, it is a habit.&rdquo;
                  </p>
                  <p className="font-bold text-xs uppercase tracking-widest text-vibrant-accent">
                    — Lead Craftsman
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
                    "Their attention to detail on our heritage restoration was unmatched. They respected the history while providing a modern, durable finish.",
                  name: "Julian Sterling",
                  role: "Residential Client, Sandy Bay",
                },
                {
                  quote:
                    "Professionalism at its peak. The commercial project was completed ahead of schedule with zero compromise on the quality of the finish.",
                  name: "Sarah Chen",
                  role: "Project Manager, Geelong CBD",
                },
                {
                  quote:
                    "The colour consultation process helped us see possibilities we hadn't considered. The result is transformative for our boutique hotel.",
                  name: "Marcus Thorne",
                  role: "Director, Heritage Heights",
                },
              ].map(({ quote, name, role }) => (
                <div
                  key={name}
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
