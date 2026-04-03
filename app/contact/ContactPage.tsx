import Image from "next/image";
import Link from "next/link";
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

              <form className="space-y-8">
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
                      type="text"
                      placeholder="Julian Vane"
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
                      type="text"
                      placeholder="e.g. Sandy Bay, TAS"
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
                    rows={4}
                    placeholder="Tell us about your project vision..."
                    className="w-full resize-none border-0 border-b-2 border-outline bg-surface-variant px-0 py-3 text-on-surface placeholder:text-on-surface-variant/50 focus:border-teal-accent focus:outline-none"
                  />
                </div>

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
                    className="w-full rounded-xl bg-gradient-to-r from-vibrant-accent to-[#ea580c] px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-vibrant-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-vibrant-accent/40 md:w-auto"
                  >
                    Submit Request
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv4cKa_rQOSfWrXcvH-2h0rYG4ugE50VnGJMKbWDmU2kvgvaYohNXhE1H8xStSfTJ59qxotQ23f75yeHs6T79LvTk7PnPSRguelltaAgFfDsjmGlp9KE7SFUlXn878dcnmICjySKx2BgyeYPGKG7BIlAavJYNWtad_WRvlQLb2Ni_WKXX-ScQUosg9xVmkYBX9WViRXdP1UgAPs5V303wIq05qpDuzXL2eXOdRbv1g0q155U0Y0Xm4nplB3o62L4OxwwizI_MzJqQ"
                  alt="Map showing Elite Finish service regions in Greater Geelong"
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

      <Footer />
    </div>
  );
}
