"use client";

import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useEffect, useState } from "react";
import { siteConfig } from "../siteConfig";
import { ContactQuoteForm } from "./ContactQuoteForm";

export default function GlobalContactWidget() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showQuotePrompt, setShowQuotePrompt] = useState(false);

  useEffect(() => {
    if (!showQuoteModal) {
      document.body.style.removeProperty("overflow");
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [showQuoteModal]);

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
    <>
      {showQuoteModal ? (
        <div className="fixed inset-0 z-[120] flex items-center justify-center px-3 py-3 sm:px-4 sm:py-8">
          <button
            type="button"
            aria-label="Close quote modal"
            className="absolute inset-0 bg-black/72 backdrop-blur-md"
            onClick={() => setShowQuoteModal(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-modal-title"
            aria-describedby="quote-modal-description"
            className="relative z-10 flex max-h-[calc(100vh-1.5rem)] w-full max-w-4xl flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#050505] shadow-[0_32px_120px_rgba(0,0,0,0.6)] sm:max-h-[calc(100vh-4rem)] sm:rounded-[2rem]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,128,128,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(245,166,35,0.18),transparent_28%)]" />
            <div className="relative overflow-y-auto px-4 py-5 sm:px-6 sm:py-8 md:px-10 md:py-10">
              <div className="mb-6 flex items-start justify-between gap-4 sm:mb-8">
                <div className="max-w-2xl">
                  <span className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-vibrant-accent sm:tracking-[0.3em]">
                    Get Quote
                  </span>
                  <h2
                    id="quote-modal-title"
                    className="pr-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl"
                  >
                    Request a Project Quote
                  </h2>
                  <p
                    id="quote-modal-description"
                    className="mt-3 max-w-xl text-sm font-medium leading-relaxed text-on-surface/65 sm:mt-4 md:text-base"
                  >
                    Share your project scope and our team will come back with a
                    tailored estimate for your property in Geelong and surrounding
                    areas.
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Close quote modal"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 sm:h-11 sm:w-11"
                  onClick={() => setShowQuoteModal(false)}
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <ContactQuoteForm
                formIdPrefix="global-quote-modal"
                status={status}
                statusMessage={statusMessage}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      ) : null}

      <div className="pointer-events-none fixed bottom-4 right-4 z-[90] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
        <div className="pointer-events-auto flex flex-col items-end gap-3">
          <div
            className={`relative origin-bottom-right overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(145deg,rgba(20,43,88,0.96),rgba(5,5,5,0.98))] shadow-[0_24px_80px_rgba(0,0,0,0.45)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              showQuotePrompt
                ? "max-h-[26rem] w-[min(21rem,calc(100vw-1.5rem))] scale-100 opacity-100"
                : "max-h-0 w-16 scale-90 opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,128,128,0.24),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(245,166,35,0.18),transparent_26%)]" />
            <div className="relative flex items-start justify-between gap-4 p-5">
              <div className="min-w-0">
                <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_12px_30px_rgba(0,0,0,0.22)]">
                  <Image
                    src={siteConfig.logoPath}
                    alt={siteConfig.businessName}
                    width={120}
                    height={48}
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <h3 className="text-[1.95rem] font-extrabold leading-none tracking-tight text-white sm:text-[2.05rem]">
                  Let&apos;s Talk!
                </h3>
                <p className="mt-3 max-w-[15rem] text-[1rem] leading-relaxed text-on-surface/70 sm:mt-4 sm:text-[1.05rem]">
                  Thanks for stopping by. For an obligation-free quote, leave your
                  details here and we will get back to you shortly.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close quote prompt"
                onClick={() => setShowQuotePrompt(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="relative border-t border-white/10 p-5 pt-4">
              <button
                type="button"
                onClick={() => {
                  setShowQuotePrompt(false);
                  setShowQuoteModal(true);
                }}
                className="w-full rounded-2xl bg-vibrant-accent px-5 py-3.5 text-center text-base font-bold uppercase tracking-[0.14em] text-navy shadow-[0_14px_34px_rgba(245,166,35,0.26)] transition-all hover:-translate-y-0.5 hover:bg-[#ffb94d] sm:py-4 sm:text-lg"
              >
                Leave Details
              </button>
            </div>
          </div>

          <button
            type="button"
            aria-label={showQuotePrompt ? "Hide quote options" : "Show quote options"}
            aria-expanded={showQuotePrompt}
            onClick={() => setShowQuotePrompt((open) => !open)}
            className="group flex items-center justify-end gap-3"
          >
            <span className="pointer-events-none hidden translate-x-2 rounded-lg bg-navy px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white opacity-0 shadow-xl transition-all group-hover:translate-x-0 group-hover:opacity-100 sm:block">
              Get Quote
            </span>
            <span className="flex h-16 min-w-16 items-center justify-center rounded-full bg-vibrant-accent px-5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-navy shadow-2xl shadow-vibrant-accent/30 transition-all group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-[#ffb94d]">
              {showQuotePrompt ? "Close" : "Get Quote"}
            </span>
          </button>
        </div>

        <Link
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message Elite Finish on WhatsApp"
          className="pointer-events-auto group flex items-center justify-end gap-3"
        >
          <span className="pointer-events-none hidden translate-x-2 rounded-lg bg-navy px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white opacity-0 shadow-xl transition-all group-hover:translate-x-0 group-hover:opacity-100 sm:block">
            WhatsApp
          </span>
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/30 transition-all group-hover:-translate-y-1 group-hover:scale-105 sm:h-16 sm:w-16">
            <svg
              aria-hidden="true"
              viewBox="0 0 32 32"
              className="h-7 w-7 fill-current sm:h-8 sm:w-8"
            >
              <path d="M16.04 3.2c-7.06 0-12.8 5.7-12.8 12.73 0 2.25.6 4.45 1.72 6.38L3.13 29l6.87-1.8a12.9 12.9 0 0 0 6.04 1.53c7.05 0 12.8-5.7 12.8-12.73 0-3.4-1.34-6.6-3.75-9.02A12.73 12.73 0 0 0 16.04 3.2Zm0 23.37c-1.9 0-3.77-.5-5.4-1.44l-.4-.23-4.08 1.07 1.09-3.96-.26-.41a10.5 10.5 0 0 1-1.6-5.67c0-5.83 4.78-10.57 10.65-10.57 2.85 0 5.52 1.1 7.53 3.1a10.5 10.5 0 0 1 3.12 7.54c0 5.83-4.78 10.57-10.65 10.57Zm5.84-7.9c-.32-.16-1.9-.93-2.2-1.04-.3-.1-.51-.16-.73.16-.21.32-.84 1.04-1.03 1.25-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.5.14-.65.15-.14.32-.38.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.99-2.37-.26-.62-.53-.54-.72-.55h-.62c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.68s1.16 3.1 1.32 3.32c.16.21 2.29 3.48 5.55 4.88.78.34 1.38.54 1.85.69.78.25 1.48.21 2.04.13.62-.09 1.9-.77 2.17-1.52.27-.75.27-1.39.19-1.52-.08-.13-.3-.21-.62-.37Z" />
            </svg>
          </span>
        </Link>

        <Link
          href={siteConfig.phoneHref}
          aria-label={`Call Elite Finish at ${siteConfig.phoneDisplay}`}
          className="pointer-events-auto group flex items-center justify-end gap-3"
        >
          <span className="pointer-events-none hidden translate-x-2 rounded-lg bg-navy px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white opacity-0 shadow-xl transition-all group-hover:translate-x-0 group-hover:opacity-100 sm:block">
            Call Now
          </span>
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white shadow-2xl shadow-navy/25 transition-all group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-vibrant-accent sm:h-16 sm:w-16">
            <span className="material-symbols-outlined text-[28px] sm:text-3xl">call</span>
          </span>
        </Link>
      </div>
    </>
  );
}
