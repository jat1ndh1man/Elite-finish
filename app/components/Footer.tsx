import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-32 pb-16 mt-40">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 pb-20 border-b border-white/5">
          {/* Brand */}
          <div className="space-y-10">
            <Link href="/" className="text-2xl font-headline tracking-tighter text-white block">
              ELITE<span className="text-vibrant-accent">FINISH</span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed font-medium max-w-xs">
              Crafting exceptional architectural spaces with professional
              excellence for over 45 years. Master Painters Association
              Accredited.
            </p>
            <div className="flex space-x-4">
              {["public", "share", "mail"].map((icon) => (
                <Link
                  key={icon}
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-navy transition-all duration-300"
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
                { label: "Process", href: "/process" },
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
              {[
                { icon: "call", text: "+1 (555) 890 2341" },
                { icon: "mail", text: "hello@elitefinish.com" },
                { icon: "location_on", text: "44 Artisan Way, Melbourne VIC" },
              ].map(({ icon, text }) => (
                <p
                  key={icon}
                  className="flex items-center gap-4 text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-vibrant-accent text-[18px]">
                    {icon}
                  </span>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-white/20 font-bold tracking-widest uppercase">
            © 2024 ELITE FINISH. All Rights Reserved.
          </p>
          <div className="flex gap-10 text-[10px] text-white/20 font-bold tracking-widest uppercase">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                className="hover:text-vibrant-accent transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
