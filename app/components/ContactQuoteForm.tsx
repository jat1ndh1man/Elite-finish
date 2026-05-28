"use client";

import type { FormEvent } from "react";

export function ContactQuoteForm({
  formIdPrefix,
  status,
  statusMessage,
  onSubmit,
}: {
  formIdPrefix: string;
  status: "idle" | "sending" | "success" | "error";
  statusMessage: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}) {
  return (
    <form className="space-y-8" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor={`${formIdPrefix}-full-name`}
            className="block text-xs font-bold uppercase tracking-[0.2em] text-white"
          >
            Full Name
          </label>
          <input
            id={`${formIdPrefix}-full-name`}
            name="fullName"
            type="text"
            required
            placeholder="Julian Vane"
            className="w-full border-0 border-b-2 border-outline bg-black px-0 py-3 text-on-surface placeholder:text-on-surface-variant/70 focus:border-teal-accent focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor={`${formIdPrefix}-email`}
            className="block text-xs font-bold uppercase tracking-[0.2em] text-white"
          >
            Email Address
          </label>
          <input
            id={`${formIdPrefix}-email`}
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full border-0 border-b-2 border-outline bg-black px-0 py-3 text-on-surface placeholder:text-on-surface-variant/70 focus:border-teal-accent focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor={`${formIdPrefix}-phone`}
            className="block text-xs font-bold uppercase tracking-[0.2em] text-white"
          >
            Phone Number
          </label>
          <input
            id={`${formIdPrefix}-phone`}
            name="phone"
            type="tel"
            required
            placeholder="0401 550 823"
            className="w-full border-0 border-b-2 border-outline bg-black px-0 py-3 text-on-surface placeholder:text-on-surface-variant/70 focus:border-teal-accent focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor={`${formIdPrefix}-project-type`}
            className="block text-xs font-bold uppercase tracking-[0.2em] text-white"
          >
            Project Type
          </label>
          <select
            id={`${formIdPrefix}-project-type`}
            name="projectType"
            className="w-full cursor-pointer border-0 border-b-2 border-outline bg-black px-0 py-3 text-on-surface focus:border-teal-accent focus:outline-none"
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
            htmlFor={`${formIdPrefix}-project-location`}
            className="block text-xs font-bold uppercase tracking-[0.2em] text-white"
          >
            Project Location
          </label>
          <input
            id={`${formIdPrefix}-project-location`}
            name="projectLocation"
            type="text"
            placeholder="e.g. Highton, VIC"
            className="w-full border-0 border-b-2 border-outline bg-black px-0 py-3 text-on-surface placeholder:text-on-surface-variant/70 focus:border-teal-accent focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor={`${formIdPrefix}-timeline`}
            className="block text-xs font-bold uppercase tracking-[0.2em] text-white"
          >
            Timeline
          </label>
          <select
            id={`${formIdPrefix}-timeline`}
            name="timeline"
            className="w-full cursor-pointer border-0 border-b-2 border-outline bg-black px-0 py-3 text-on-surface focus:border-teal-accent focus:outline-none"
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
          htmlFor={`${formIdPrefix}-project-description`}
          className="block text-xs font-bold uppercase tracking-[0.2em] text-white"
        >
          Project Description
        </label>
        <textarea
          id={`${formIdPrefix}-project-description`}
          name="projectDescription"
          rows={4}
          required
          placeholder="Tell us about your project vision..."
          className="w-full resize-none border-0 border-b-2 border-outline bg-black px-0 py-3 text-on-surface placeholder:text-on-surface-variant/70 focus:border-teal-accent focus:outline-none"
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
  );
}
