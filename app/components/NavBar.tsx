"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "../siteConfig";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

function CallButton({
  className = "",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={siteConfig.phoneHref}
      onClick={onClick}
      aria-label={`Call now on ${siteConfig.phoneDisplay}`}
      className={`call-cta group relative overflow-hidden rounded-full border border-vibrant-accent/30 bg-white/90 px-4 py-2.5 text-navy shadow-[0_12px_30px_rgba(20,43,88,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-vibrant-accent hover:bg-vibrant-accent hover:text-navy hover:shadow-[0_18px_36px_rgba(245,166,35,0.28)] ${className}`}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative flex items-center gap-3">
        <span className="call-cta-icon flex h-9 w-9 items-center justify-center rounded-full bg-vibrant-accent text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
          <span className="material-symbols-outlined text-[18px]">call</span>
        </span>
        <span className="flex flex-col items-start leading-none">
          <span className="text-label text-[9px] tracking-[0.22em]">Call Now</span>
          <span className="mt-1 text-sm font-extrabold tracking-[0.08em]">
            {siteConfig.phoneDisplay}
          </span>
        </span>
      </span>
    </Link>
  );
}

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] glass-nav transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
      style={{
        backgroundColor: scrolled
          ? "rgba(255,255,255,0.95)"
          : "rgba(255,255,255,0.7)",
      }}
    >
      <div className="flex justify-between items-center w-full px-8 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="group flex shrink-0 items-center"
        >
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src={siteConfig.logoPath}
              alt={siteConfig.businessName}
              width={220}
              height={170}
              priority
              className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.02] md:h-16"
            />
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-navy transition-all duration-500 group-hover:w-full" />
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-12">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`text-label text-[10px] relative group ${
                  isActive
                    ? "text-navy font-bold"
                    : "text-on-surface-variant hover:text-navy transition-colors"
                }`}
              >
                <span className="relative z-10">{label}</span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-vibrant-accent transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <CallButton className="hidden sm:flex" />

          <Link
            href="/contact"
            className="bg-navy text-white px-8 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-navy/90 hover:shadow-[0_10px_20px_rgba(20,43,88,0.2)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 group hidden sm:flex items-center gap-2"
          >
            Request Quote
            <span className="material-symbols-outlined text-[14px] transition-transform group-hover:rotate-45">
              arrow_upward
            </span>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-outline/20 px-8 py-6 flex flex-col gap-5">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-label text-[11px] ${
                pathname === href ? "text-navy font-bold" : "text-on-surface-variant"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-navy text-white px-6 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase text-center"
          >
            Request Quote
          </Link>
          <CallButton
            onClick={() => setMenuOpen(false)}
            className="justify-center"
          />
        </div>
      )}
    </nav>
  );
}
