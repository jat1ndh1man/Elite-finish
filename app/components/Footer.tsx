import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../siteConfig";

export default function Footer() {
  const contactItems = [
    {
      icon: "call",
      text: siteConfig.phoneDisplay,
      href: siteConfig.phoneHref,
    },
    {
      icon: "mail",
      text: siteConfig.email,
      href: siteConfig.emailHref,
    },
    {
      icon: "location_on",
      text: siteConfig.addressSingleLine,
      href: siteConfig.mapsHref,
    },
  ];

  return (
    <footer className="bg-navy text-white pt-32 pb-16 mt-40">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 pb-20 border-b border-white/5">
          {/* Brand */}
          <div className="space-y-8">
            <Link href="/" className="block w-fit">
              <div className="rounded-[1.75rem] border border-white/15 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-4 shadow-[0_24px_60px_-18px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
                <Image
                  src="/Elite-finish-logo.jpeg"
                  alt={siteConfig.businessName}
                  width={320}
                  height={246}
                  className="h-24 w-auto object-contain"
                />
              </div>
            </Link>
            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-vibrant-accent">
                Elite Finish Painting Service
              </p>
              <p className="text-sm text-white/55 leading-relaxed font-medium max-w-sm">
              Crafting exceptional architectural spaces with a joined team of
              experienced painting professionals. Master Painters Association
              Accredited.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              {contactItems.map(({ icon, href, text }) => (
                <Link
                  key={icon}
                  href={href}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] hover:border-white/25 hover:bg-white hover:text-navy transition-all duration-300"
                  aria-label={text}
                >
                  <span className="material-symbols-outlined text-[20px]">{icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div className="space-y-8">
            <p className="text-[10px] font-bold text-label text-vibrant-accent tracking-widest">
              Expertise
            </p>
            <ul className="space-y-5 text-sm font-semibold">
              {[
                { label: "Residential", href: "/services#residential" },
                { label: "Commercial", href: "/services#commercial" },
                { label: "Industrial", href: "/services#industrial" },
                { label: "Artisan Finishes", href: "/services#specialty" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/40 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    {label}
                    <span className="w-0 h-[1px] bg-vibrant-accent group-hover:w-4 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-8">
            <p className="text-[10px] font-bold text-label text-vibrant-accent tracking-widest">
              Company
            </p>
            <ul className="space-y-5 text-sm font-semibold">
              {[
                { label: "Our Story", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/40 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <p className="text-[10px] font-bold text-label text-vibrant-accent tracking-widest">
              Contact
            </p>
            <div className="space-y-6 text-sm font-medium">
              {contactItems.map(({ icon, text, href }) => (
                <Link
                  key={icon}
                  href={href}
                  className="flex items-center gap-4 text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-vibrant-accent text-[18px]">
                    {icon}
                  </span>
                  {text}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-white/20 font-bold tracking-widest uppercase">
            © 2024 ELITE FINISH. All Rights Reserved.
          </p>
          <div className="flex gap-10 text-[10px] text-white/20 font-bold tracking-widest uppercase">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="hover:text-vibrant-accent transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
