"use client";

import Link from "next/link";
import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const ROOM_FIELDS = [
  {
    key: "smallBed",
    label: "Small Bedrooms",
    helper: "Ideal for compact bedrooms, study-bedrooms, and smaller sleeping spaces.",
    max: 10,
    unit: "rooms",
    rate: 700,
  },
  {
    key: "largeBed",
    label: "Large Bedrooms",
    helper: "For master bedrooms and larger sleeping zones with more wall area.",
    max: 8,
    unit: "rooms",
    rate: 900,
  },
  {
    key: "living",
    label: "Living & Dining Rooms",
    helper: "Open-plan living zones, lounges, and combined dining areas.",
    max: 8,
    unit: "areas",
    rate: 700,
  },
  {
    key: "kitchen",
    label: "Kitchens",
    helper: "Higher-use spaces with more detailed cutting-in and finishing.",
    max: 5,
    unit: "areas",
    rate: 1300,
  },
  {
    key: "bathroom",
    label: "Bathrooms",
    helper: "Bathrooms, ensuites, and wet areas requiring moisture-aware prep.",
    max: 6,
    unit: "areas",
    rate: 200,
  },
  {
    key: "laundry",
    label: "Laundries",
    helper: "Utility areas and service rooms.",
    max: 4,
    unit: "areas",
    rate: 500,
  },
  {
    key: "toilet",
    label: "Toilets",
    helper: "Powder rooms and separate toilet spaces.",
    max: 4,
    unit: "areas",
    rate: 400,
  },
] as const;

const EXTRA_FIELDS = [
  {
    key: "doors",
    label: "Doors",
    helper: "Include full door painting and trim touch-ups where needed.",
    max: 20,
    unit: "doors",
    rate: 100,
  },
  {
    key: "windowFrames",
    label: "Window Frames",
    helper: "Timber, aluminium, or detailed internal frame repainting.",
    max: 30,
    unit: "frames",
    rate: 70,
  },
  {
    key: "doorFrames",
    label: "Door Frames",
    helper: "Architraves and frame-only woodwork around internal doors.",
    max: 20,
    unit: "frames",
    rate: 90,
  },
] as const;

const PAINT_QUALITY_OPTIONS = [
  {
    value: 1,
    label: "Standard",
    detail: "1.00x",
    description: "Reliable, cost-conscious system for a clean refresh.",
  },
  {
    value: 1.15,
    label: "Premium",
    detail: "1.15x",
    description: "Higher-grade paint system with stronger finish retention.",
  },
  {
    value: 1.3,
    label: "Luxury",
    detail: "1.30x",
    description: "Top-tier coating choice for a more refined final look.",
  },
] as const;

const WOODWORK_OPTIONS = [
  {
    value: 1,
    label: "Minimal Woodwork",
    detail: "1.00x",
    description: "Standard trim involvement only.",
  },
  {
    value: 1.1,
    label: "Moderate Woodwork",
    detail: "1.10x",
    description: "Noticeable trim, skirting, and frame detail.",
  },
  {
    value: 1.2,
    label: "Detailed Woodwork",
    detail: "1.20x",
    description: "High-detail timber and trim surfaces throughout.",
  },
] as const;

const CONDITION_OPTIONS = [
  {
    value: 1,
    label: "Good Condition",
    detail: "1.00x",
    description: "Straight repaint with light prep.",
  },
  {
    value: 1.15,
    label: "Average Condition",
    detail: "1.15x",
    description: "Moderate filling, sanding, and patching required.",
  },
  {
    value: 1.3,
    label: "Poor Condition",
    detail: "1.30x",
    description: "Extensive prep and surface correction likely.",
  },
] as const;

type RoomFieldKey = (typeof ROOM_FIELDS)[number]["key"];
type ExtraFieldKey = (typeof EXTRA_FIELDS)[number]["key"];

type CountState = Record<RoomFieldKey | ExtraFieldKey, number>;

const INITIAL_COUNTS: CountState = {
  smallBed: 0,
  largeBed: 0,
  living: 0,
  kitchen: 0,
  bathroom: 0,
  laundry: 0,
  toilet: 0,
  doors: 0,
  windowFrames: 0,
  doorFrames: 0,
};

type EstimateState = {
  counts: CountState;
  paintQuality: number;
  woodwork: number;
  condition: number;
  ceiling: boolean;
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(value);
}

function CalculatorSlider({
  id,
  label,
  helper,
  value,
  max,
  unit,
  onChange,
}: {
  id: string;
  label: string;
  helper: string;
  value: number;
  max: number;
  unit: string;
  onChange: (nextValue: number) => void;
}) {
  const progress = `${(value / max) * 100}%`;

  return (
    <div className="rounded-[2rem] border border-outline/70 bg-white p-6 shadow-[0_24px_60px_-28px_rgba(20,43,88,0.18)]">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <label htmlFor={id} className="block text-2xl font-extrabold text-navy">
            {label}
          </label>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-on-surface-variant">
            {helper}
          </p>
        </div>
        <div className="inline-flex min-w-32 items-center justify-center rounded-2xl border border-outline bg-surface-variant px-5 py-4 text-xl font-bold text-navy">
          {value} {unit}
        </div>
      </div>

      <input
        id={id}
        type="range"
        min="0"
        max={max}
        step="1"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="calculator-range h-3 w-full cursor-pointer appearance-none rounded-full bg-outline/60"
        style={{
          background: `linear-gradient(90deg, #F5A623 0%, #F5A623 ${progress}, rgba(226,232,240,0.95) ${progress}, rgba(226,232,240,0.95) 100%)`,
        }}
      />

      <div className="mt-4 flex items-center justify-between text-sm font-medium text-on-surface-variant">
        <span>0 {unit}</span>
        <span>{max} {unit}</span>
      </div>
    </div>
  );
}

function MultiplierCard({
  title,
  options,
  value,
  onChange,
}: {
  title: string;
  options: readonly {
    value: number;
    label: string;
    detail: string;
    description: string;
  }[];
  value: number;
  onChange: (nextValue: number) => void;
}) {
  return (
    <div className="rounded-[2rem] border border-outline/70 bg-white p-6 shadow-[0_24px_60px_-28px_rgba(20,43,88,0.18)]">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-navy">{title}</p>
      <div className="grid gap-3">
        {options.map((option) => {
          const isActive = value === option.value;

          return (
            <button
              key={`${title}-${option.label}`}
              type="button"
              onClick={() => onChange(option.value)}
              className={`rounded-[1.5rem] border px-4 py-4 text-left transition-all duration-300 ${
                isActive
                  ? "border-navy bg-navy text-white shadow-[0_16px_35px_-18px_rgba(20,43,88,0.8)]"
                  : "border-outline bg-surface-variant text-on-surface hover:-translate-y-0.5 hover:border-vibrant-accent/60 hover:bg-white"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-base font-extrabold">{option.label}</p>
                  <p
                    className={`mt-1 text-sm leading-relaxed ${
                      isActive ? "text-white/75" : "text-on-surface-variant"
                    }`}
                  >
                    {option.description}
                  </p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] ${
                    isActive
                      ? "bg-white/12 text-vibrant-accent"
                      : "bg-navy/6 text-navy"
                  }`}
                >
                  {option.detail}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function PaintCalculatorPage() {
  const [estimate, setEstimate] = useState<EstimateState>({
    counts: INITIAL_COUNTS,
    paintQuality: PAINT_QUALITY_OPTIONS[0].value,
    woodwork: WOODWORK_OPTIONS[0].value,
    condition: CONDITION_OPTIONS[0].value,
    ceiling: false,
  });

  const roomCost = ROOM_FIELDS.reduce((total, field) => {
    return total + estimate.counts[field.key] * field.rate;
  }, 0);

  const extrasCost = EXTRA_FIELDS.reduce((total, field) => {
    return total + estimate.counts[field.key] * field.rate;
  }, 0);

  const subtotal = roomCost + extrasCost;
  const adjustedBase =
    subtotal * estimate.paintQuality * estimate.woodwork * estimate.condition;
  const finalPrice = estimate.ceiling ? adjustedBase * 1.2 : adjustedBase;

  function updateCount(key: keyof CountState, nextValue: number) {
    setEstimate((current) => ({
      ...current,
      counts: {
        ...current.counts,
        [key]: nextValue,
      },
    }));
  }

  return (
    <div className="bg-white text-on-surface selection:bg-vibrant-accent/20">
      <NavBar />

      <main className="overflow-hidden pt-28">
        <section className="relative border-b border-outline/60 bg-[radial-gradient(circle_at_top_left,_rgba(0,128,128,0.12),_transparent_34%),linear-gradient(180deg,#ffffff_0%,#f7fafc_100%)]">
          <div className="mx-auto max-w-screen-2xl px-6 py-20 md:px-8 md:py-24">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-vibrant-accent/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-navy">
                <span className="h-2 w-2 rounded-full bg-vibrant-accent" />
                Home Paint Estimate
              </div>
              <h1 className="max-w-5xl text-5xl font-extrabold leading-[0.98] tracking-tight text-navy md:text-7xl">
                Paint cost calculator built around your room count, finishes, and
                prep level.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
                Adjust the room quantities, extras, and project conditions to get a
                fast guide price. This estimate follows the room and multiplier logic
                you specified.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-8 px-6 py-12 md:px-8 xl:grid-cols-[minmax(0,1.3fr)_minmax(360px,0.7fr)]">
          <div className="space-y-6">
            {ROOM_FIELDS.map((field) => (
              <CalculatorSlider
                key={field.key}
                id={field.key}
                label={field.label}
                helper={field.helper}
                value={estimate.counts[field.key]}
                max={field.max}
                unit={field.unit}
                onChange={(nextValue) => updateCount(field.key, nextValue)}
              />
            ))}

            <div className="rounded-[2rem] border border-outline/70 bg-white p-6 shadow-[0_24px_60px_-28px_rgba(20,43,88,0.18)]">
              <div className="mb-6">
                <p className="text-2xl font-extrabold text-navy">Extras</p>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                  Add detailed joinery and frame counts to capture extra finishing work.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {EXTRA_FIELDS.map((field) => (
                  <label
                    key={field.key}
                    className="rounded-[1.5rem] border border-outline bg-surface-variant p-4"
                  >
                    <span className="block text-sm font-bold text-navy">{field.label}</span>
                    <span className="mt-1 block min-h-12 text-sm leading-relaxed text-on-surface-variant">
                      {field.helper}
                    </span>
                    <input
                      type="number"
                      min="0"
                      max={field.max}
                      value={estimate.counts[field.key]}
                      onChange={(event) =>
                        updateCount(
                          field.key,
                          Math.max(0, Math.min(field.max, Number(event.target.value) || 0))
                        )
                      }
                      className="mt-4 w-full rounded-xl border border-outline bg-white px-4 py-3 text-base font-bold text-navy outline-none transition-colors focus:border-teal-accent"
                    />
                    <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.16em] text-on-surface-variant">
                      Up to {field.max} {field.unit}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <MultiplierCard
                title="Paint Quality"
                options={PAINT_QUALITY_OPTIONS}
                value={estimate.paintQuality}
                onChange={(nextValue) =>
                  setEstimate((current) => ({ ...current, paintQuality: nextValue }))
                }
              />
              <MultiplierCard
                title="Woodwork"
                options={WOODWORK_OPTIONS}
                value={estimate.woodwork}
                onChange={(nextValue) =>
                  setEstimate((current) => ({ ...current, woodwork: nextValue }))
                }
              />
              <MultiplierCard
                title="Condition"
                options={CONDITION_OPTIONS}
                value={estimate.condition}
                onChange={(nextValue) =>
                  setEstimate((current) => ({ ...current, condition: nextValue }))
                }
              />
            </div>

            <label className="flex items-center justify-between gap-6 rounded-[2rem] border border-outline/70 bg-white p-6 shadow-[0_24px_60px_-28px_rgba(20,43,88,0.18)]">
              <div>
                <p className="text-xl font-extrabold text-navy">Include ceilings</p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-on-surface-variant">
                  If ceilings are included, the final estimate is multiplied by 1.2.
                </p>
              </div>
              <span className="inline-flex items-center gap-3">
                <span
                  className={`text-xs font-bold uppercase tracking-[0.16em] ${
                    estimate.ceiling ? "text-teal-accent" : "text-on-surface-variant"
                  }`}
                >
                  {estimate.ceiling ? "Yes" : "No"}
                </span>
                <span className="relative inline-flex items-center justify-center">
                  <input
                    type="checkbox"
                    checked={estimate.ceiling}
                    onChange={(event) =>
                      setEstimate((current) => ({
                        ...current,
                        ceiling: event.target.checked,
                      }))
                    }
                    className="peer h-6 w-6 cursor-pointer appearance-none rounded-md border-2 border-outline bg-white transition-all duration-200 checked:border-teal-accent checked:bg-teal-accent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-accent/20"
                  />
                  <span
                    className="pointer-events-none absolute text-sm font-black text-white opacity-0 transition-opacity duration-200 peer-checked:opacity-100"
                  >
                    ✓
                  </span>
                </span>
              </span>
            </label>
          </div>

          <aside className="xl:sticky xl:top-32 xl:self-start">
            <div className="overflow-hidden rounded-[2.25rem] bg-navy p-8 text-white shadow-[0_32px_80px_-30px_rgba(20,43,88,0.65)] md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-vibrant-accent">
                Total Painting Cost
              </p>
              <p className="mt-5 text-5xl font-extrabold tracking-tight md:text-6xl">
                {formatCurrency(finalPrice)}
              </p>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-white/72">
                Estimated total based on room costs, extras, selected finish level,
                woodwork, condition, and optional ceiling work.
              </p>

              <div className="mt-10 space-y-4 rounded-[1.75rem] border border-white/10 bg-white/6 p-6">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-white/70">Room Cost</span>
                  <span className="font-bold">{formatCurrency(roomCost)}</span>
                </div>
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-white/70">Extras Cost</span>
                  <span className="font-bold">{formatCurrency(extrasCost)}</span>
                </div>
                <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4 text-sm">
                  <span className="text-white/70">Subtotal</span>
                  <span className="font-bold">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-white/70">Paint Quality</span>
                  <span className="font-bold">{estimate.paintQuality.toFixed(2)}x</span>
                </div>
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-white/70">Woodwork</span>
                  <span className="font-bold">{estimate.woodwork.toFixed(2)}x</span>
                </div>
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-white/70">Condition</span>
                  <span className="font-bold">{estimate.condition.toFixed(2)}x</span>
                </div>
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-white/70">Ceilings</span>
                  <span className="font-bold">{estimate.ceiling ? "1.20x" : "No"}</span>
                </div>
              </div>

              <div className="mt-10 space-y-6">
                <div>
                  <p className="text-3xl font-extrabold leading-tight">
                    Guide price only.
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-white/72">
                    Final pricing may change based on access, surface preparation,
                    coatings chosen, and the condition found onsite.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-4 text-center text-sm font-extrabold uppercase tracking-[0.14em] text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-vibrant-accent"
                >
                  Book a Site Visit
                </Link>
              </div>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}
