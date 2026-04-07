"use client";

import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { siteConfig } from "../siteConfig";

const CONTACT_METHODS = [
  {
    icon: "call",
    label: "Direct Line",
    value: siteConfig.phoneDisplay,
    accent: "bg-navy",
    href: siteConfig.phoneHref,
  },
  {
    icon: "mail",
    label: "Email Inquiry",
    value: siteConfig.email,
    accent: "bg-teal-accent",
    href: siteConfig.emailHref,
  },
  {
    icon: "location_on",
    label: "Studio Address",
    value: siteConfig.addressSingleLine,
    accent: "bg-vibrant-accent",
    href: siteConfig.mapsHref,
  },
];

const SERVICE_REGIONS = siteConfig.serviceRegions;

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    const result = (await response.json().catch(() => null)) as { message?: string } | null;

    if (!response.ok) {
      setStatus("error");
      setStatusMessage(result?.message ?? "Unable to send your request right now.");
      return;
    }

    form.reset();
    setStatus("success");
    setStatusMessage(result?.message ?? "Your request has been sent.");
  }

  return (
    <div className="bg-white text-on-surface selection:bg-vibrant-accent/20">
      <NavBar />

      <main className="pt-28">
        <section className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-16 px-6 py-16 lg:grid-cols-12 lg:px-8">
          <div className="space-y-10 lg:col-span-5">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-teal-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-teal-accent">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-accent" />
                Contact & Consultation
              </div>
              <h1 className="max-w-xl text-5xl font-extrabold leading-[1.05] tracking-tight text-navy md:text-6xl">
                Elevate your <span className="text-teal-accent">vision</span> to
                reality.
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-on-surface-variant">
                From refined residential repaints to demanding commercial work,
                our Geelong-based team delivers premium finishes built to last.
              </p>
            </div>

            <div className="space-y-4">
              {CONTACT_METHODS.map((method) => (
                <Link
                  key={method.label}
                  href={method.href}
                  className="group flex items-center gap-5 rounded-2xl border border-transparent p-4 transition-all hover:border-outline hover:bg-surface-variant hover:shadow-xl hover:shadow-navy/5"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl text-white transition-transform group-hover:scale-110 ${method.accent}`}
                  >
                    <span className="material-symbols-outlined">{method.icon}</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                      {method.label}
                    </p>
                    <p className="text-lg font-bold text-navy">{method.value}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="rounded-3xl border border-outline bg-white p-6 shadow-[0_20px_50px_-12px_rgba(20,43,88,0.08)]">
              <h2 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-navy">
                <span className="material-symbols-outlined text-sm">schedule</span>
                Studio Hours
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-on-surface-variant">Weekdays</span>
                  <span className="font-bold text-navy">08:00 - 18:00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-on-surface-variant">Saturday</span>
                  <span className="font-bold text-navy">09:00 - 14:00</span>
                </div>
                <div className="flex items-center justify-between border-t border-outline pt-2">
                  <span className="text-xs italic text-on-surface-variant">Sunday</span>
                  <span className="rounded bg-surface-variant px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-on-surface-variant">
                    By Appointment
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div
              id="contact-form"
              className="rounded-[2rem] border border-outline bg-white p-8 shadow-[0_20px_50px_-12px_rgba(20,43,88,0.08)] md:p-12"
            >
              <div className="mb-10">
                <h2 className="mb-2 text-3xl font-extrabold text-navy">
                  Request a Project Quote
                </h2>
                <p className="text-sm text-on-surface-variant">
                  Share your project scope and our team will come back with a
                  tailored estimate for your property in Geelong and surrounding
                  areas.
                </p>
              </div>

              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="full-name"
                      className="block text-xs font-bold uppercase tracking-[0.2em] text-navy"
                    >
                      Full Name
                    </label>
                    <input
                      id="full-name"
                      name="fullName"
                      type="text"
                      required
                      placeholder="Julian Vane"
                      className="w-full border-0 border-b-2 border-outline bg-surface-variant px-0 py-3 text-on-surface placeholder:text-on-surface-variant/50 focus:border-teal-accent focus:outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-[0.2em] text-navy"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full border-0 border-b-2 border-outline bg-surface-variant px-0 py-3 text-on-surface placeholder:text-on-surface-variant/50 focus:border-teal-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold uppercase tracking-[0.2em] text-navy"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="0401 550 823"
                      className="w-full border-0 border-b-2 border-outline bg-surface-variant px-0 py-3 text-on-surface placeholder:text-on-surface-variant/50 focus:border-teal-accent focus:outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="project-type"
                      className="block text-xs font-bold uppercase tracking-[0.2em] text-navy"
                    >
                      Project Type
                    </label>
                    <select
                      id="project-type"
                      name="projectType"
                      className="w-full cursor-pointer border-0 border-b-2 border-outline bg-surface-variant px-0 py-3 text-on-surface focus:border-teal-accent focus:outline-none"
                      defaultValue="Residential Painting"
                    >
                      <option>Residential Painting</option>
                      <option>Commercial Services</option>
                      <option>Heritage Restoration</option>
                      <option>Industrial Coatings</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="project-location"
                      className="block text-xs font-bold uppercase tracking-[0.2em] text-navy"
                    >
                      Project Location
                    </label>
                    <input
                      id="project-location"
                      name="projectLocation"
                      type="text"
                      placeholder="e.g. Highton, VIC"
                      className="w-full border-0 border-b-2 border-outline bg-surface-variant px-0 py-3 text-on-surface placeholder:text-on-surface-variant/50 focus:border-teal-accent focus:outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="timeline"
                      className="block text-xs font-bold uppercase tracking-[0.2em] text-navy"
                    >
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="w-full cursor-pointer border-0 border-b-2 border-outline bg-surface-variant px-0 py-3 text-on-surface focus:border-teal-accent focus:outline-none"
                      defaultValue="Immediate"
                    >
                      <option>Immediate</option>
                      <option>1-3 Months</option>
                      <option>Next Season</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="project-description"
                    className="block text-xs font-bold uppercase tracking-[0.2em] text-navy"
                  >
                    Project Description
                  </label>
                  <textarea
                    id="project-description"
                    name="projectDescription"
                    rows={4}
                    required
                    placeholder="Tell us about your project vision..."
                    className="w-full resize-none border-0 border-b-2 border-outline bg-surface-variant px-0 py-3 text-on-surface placeholder:text-on-surface-variant/50 focus:border-teal-accent focus:outline-none"
                  />
                </div>

                {statusMessage ? (
                  <p
                    className={`rounded-xl px-4 py-3 text-sm font-bold ${
                      status === "success"
                        ? "bg-teal-accent/10 text-teal-accent"
                        : "bg-vibrant-accent/10 text-vibrant-accent"
                    }`}
                  >
                    {statusMessage}
                  </p>
                ) : null}

                <div className="flex flex-col gap-6 border-t border-outline pt-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-teal-accent"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      verified_user
                    </span>
                    MPA Accredited Master Painters
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full rounded-xl bg-gradient-to-r from-vibrant-accent to-[#ea580c] px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-vibrant-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-vibrant-accent/40 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
                  >
                    {status === "sending" ? "Sending..." : "Submit Request"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="border-y border-outline bg-surface-variant py-24">
          <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
            <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-teal-accent">
                  Service Regions
                </span>
                <h2 className="mb-4 text-4xl font-extrabold text-navy">
                  Elite Craft Across Greater Geelong
                </h2>
                <p className="leading-relaxed text-on-surface-variant">
                  Based in Bell Post Hill, we service homes and commercial sites
                  across Geelong and surrounding suburbs with dependable
                  scheduling and detail-focused workmanship.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {SERVICE_REGIONS.map((region) => (
                  <span
                    key={region}
                    className="rounded-full border border-outline bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-navy"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[2rem] border border-outline shadow-sm">
              <div className="relative h-[420px] w-full">
                <Image
                  src="/4(2).jpeg"
                  alt="Elite Finish service area project in Greater Geelong"
                  fill
                  className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-navy/5" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute h-12 w-12 animate-ping rounded-full bg-vibrant-accent/20" />
                    <div className="relative z-10 h-4 w-4 rounded-full border-2 border-white bg-vibrant-accent shadow-lg" />
                    <div className="absolute top-full mt-3 whitespace-nowrap rounded-lg border border-outline bg-white px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.15em] text-navy shadow-xl">
                      Bell Post Hill Studio
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-outline bg-white px-6 py-5">
              <p className="max-w-2xl text-sm font-medium text-on-surface-variant">
                Prefer a direct conversation? Call us directly or use the form to
                arrange a site visit at your home or business.
              </p>
              <Link
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:bg-navy/90"
              >
                Call the Studio
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-8 right-8 z-[60] flex flex-col gap-3">
        <Link
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message Elite Finish on WhatsApp"
          className="group flex items-center justify-end gap-3"
        >
          <span className="pointer-events-none translate-x-2 rounded-lg bg-navy px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white opacity-0 shadow-xl transition-all group-hover:translate-x-0 group-hover:opacity-100">
            WhatsApp
          </span>
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/30 transition-all group-hover:-translate-y-1 group-hover:scale-105">
            <svg
              aria-hidden="true"
              viewBox="0 0 32 32"
              className="h-8 w-8 fill-current"
            >
              <path d="M16.04 3.2c-7.06 0-12.8 5.7-12.8 12.73 0 2.25.6 4.45 1.72 6.38L3.13 29l6.87-1.8a12.9 12.9 0 0 0 6.04 1.53c7.05 0 12.8-5.7 12.8-12.73 0-3.4-1.34-6.6-3.75-9.02A12.73 12.73 0 0 0 16.04 3.2Zm0 23.37c-1.9 0-3.77-.5-5.4-1.44l-.4-.23-4.08 1.07 1.09-3.96-.26-.41a10.5 10.5 0 0 1-1.6-5.67c0-5.83 4.78-10.57 10.65-10.57 2.85 0 5.52 1.1 7.53 3.1a10.5 10.5 0 0 1 3.12 7.54c0 5.83-4.78 10.57-10.65 10.57Zm5.84-7.9c-.32-.16-1.9-.93-2.2-1.04-.3-.1-.51-.16-.73.16-.21.32-.84 1.04-1.03 1.25-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.5.14-.65.15-.14.32-.38.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.99-2.37-.26-.62-.53-.54-.72-.55h-.62c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.68s1.16 3.1 1.32 3.32c.16.21 2.29 3.48 5.55 4.88.78.34 1.38.54 1.85.69.78.25 1.48.21 2.04.13.62-.09 1.9-.77 2.17-1.52.27-.75.27-1.39.19-1.52-.08-.13-.3-.21-.62-.37Z" />
            </svg>
          </span>
        </Link>

        <Link
          href={siteConfig.phoneHref}
          aria-label={`Call Elite Finish at ${siteConfig.phoneDisplay}`}
          className="group flex items-center justify-end gap-3"
        >
          <span className="pointer-events-none translate-x-2 rounded-lg bg-navy px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white opacity-0 shadow-xl transition-all group-hover:translate-x-0 group-hover:opacity-100">
            Call Now
          </span>
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy text-white shadow-2xl shadow-navy/25 transition-all group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-vibrant-accent">
            <span className="material-symbols-outlined text-3xl">call</span>
          </span>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
