"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { siteConfig } from "../siteConfig";
import { ContactQuoteForm } from "../components/ContactQuoteForm";

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
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.addressSingleLine)}&z=15&output=embed`;

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
    <div className="bg-black text-on-surface selection:bg-vibrant-accent/20">
      <NavBar />

      <main className="pt-28">
        <section className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-16 px-6 py-16 lg:grid-cols-12 lg:px-8">
          <div className="space-y-10 lg:col-span-5">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-teal-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-teal-accent">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-accent" />
                Contact & Consultation
              </div>
              <h1 className="max-w-xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
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
                  className="group flex items-center gap-5 rounded-2xl border border-outline/50 bg-black p-4 transition-all hover:border-outline hover:bg-[#0a0a0a] hover:shadow-xl hover:shadow-navy/5"
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
                    <p className="text-lg font-bold text-white">{method.value}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="rounded-3xl border border-outline bg-black p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)]">
              <h2 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
                <span className="material-symbols-outlined text-sm">schedule</span>
                Studio Hours
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-on-surface-variant">Weekdays</span>
                  <span className="font-bold text-white">08:00 - 18:00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-on-surface-variant">Saturday</span>
                  <span className="font-bold text-white">09:00 - 14:00</span>
                </div>
                <div className="flex items-center justify-between border-t border-outline pt-2">
                  <span className="text-xs italic text-on-surface-variant">Sunday</span>
                  <span className="rounded bg-[#111111] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-on-surface-variant">
                    By Appointment
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div
              id="contact-form"
              className="rounded-[2rem] border border-outline bg-black p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] md:p-12"
            >
              <div className="mb-10">
                <h2 className="mb-2 text-3xl font-extrabold text-white">
                  Request a Project Quote
                </h2>
                <p className="text-sm text-on-surface-variant">
                  Share your project scope and our team will come back with a
                  tailored estimate for your property in Geelong and surrounding
                  areas.
                </p>
              </div>

              <ContactQuoteForm
                formIdPrefix="contact-page"
                status={status}
                statusMessage={statusMessage}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </section>

        <section className="border-y border-outline bg-black py-24">
          <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
            <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-teal-accent">
                  Service Regions
                </span>
                <h2 className="mb-4 text-4xl font-extrabold text-white">
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
                    className="rounded-full border border-outline bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-outline bg-black shadow-sm">
              <div className="relative h-[420px] w-full">
                <iframe
                  title="Elite Finish studio location map"
                  src={MAP_EMBED_SRC}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="pointer-events-none absolute inset-x-6 bottom-6 flex justify-start">
                  <div className="max-w-sm rounded-2xl border border-outline bg-black/85 p-5 shadow-xl backdrop-blur">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-accent">
                      Bell Post Hill Studio
                    </p>
                    <p className="mt-2 text-lg font-extrabold text-white">
                      {siteConfig.addressLine1}
                    </p>
                    <p className="text-sm text-on-surface-variant">
                      {siteConfig.addressLine2}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-outline bg-black px-6 py-5">
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

      <Footer />
    </div>
  );
}
