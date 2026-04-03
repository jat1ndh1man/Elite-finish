"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const STEPS = [
  {
    num: "01",
    icon: "search",
    title: "Discovery & Consultation",
    duration: "Day 1",
    desc: "We begin with a comprehensive on-site visit. Our colour strategists assess your space, architecture, and lighting conditions to understand both the practical requirements and the aesthetic vision you want to achieve.",
    details: ["On-site walkthrough", "Colour & finish consultation", "Detailed written scope of works", "Fixed-price quotation within 48 hours"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa0_qpc3AN6n8oFksC2prE2jclgqh3QU6Na_RMs9Ds3iV5BFIGtZ1XwY18Elp2GaMlU5eb_GVoSDLTWfX7Op0dLCA52IqHSiekAqoZ9VmSS5dHYzK96On_moo-bzF9K2n4_HxW2zWBZAUJgcDDbMuZeWbE7iPE-zdlWUn6jTIK6ufpg9zMijUC_w0U-97WO5R1b4OOG5QCbcDgYoFgObkEw6emW8eh_MQm0sKxG5rX2Tc4nLYX9qgqOLyDnsbJ11hAwd-UwMMsKcA",
  },
  {
    num: "02",
    icon: "palette",
    title: "Colour Strategy & Material Selection",
    duration: "Week 1",
    desc: "Our colour consultants develop a bespoke palette tailored to your architecture. We produce physical sample boards, test patches, and material specifications — no guesswork, only certainty.",
    details: ["Bespoke colour board", "Physical test patches applied", "Zero-VOC & premium product curation", "Full material specification sheet"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrMnQK8rX3fIQWZrh5AylbsG12YONoybxVvM__OwC-m9UOOxbiCiuT8JtCumDxXVCCjKq2s_F9YFjflJR_7CKLVRugEvkg1Tbvd8Okzj-2xTcHqoQhaUiZDbCwYYFd61hX1XeBzOeQHyBNFdn7lv5Ri7J8DkW9KdbNwW64fqhgEzwmTcmQlfm5VMSHfrOssH5saqauPd1A0XMXYLe4xNc2fYpRVBRyP-Wr_rA2FmVCSXOaJZAxZpiPnGapPDdJatHc-DbIq5aQunI",
  },
  {
    num: "03",
    icon: "build",
    title: "Surface Preparation",
    duration: "Weeks 2–3",
    desc: "The foundation of any elite finish is meticulous preparation. We fill, sand, seal, and prime every surface with precision. This phase determines the quality of everything that follows — we never rush it.",
    details: ["Crack filling & skim coating", "Machine & hand sanding", "Specialist primers for each substrate", "Protection of all fixtures & furniture"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUuc3BvHUkTOK-TyHSBNNd7tBgSrFPS6KHMzoLPdXJ10cpbLeKge7qxElTTjxuMbq7FmMY5YWBYcV0VvBC6x8WMNzSi7lTAtuDTUNyr0yBcnbiiIn1Vxftp-7ESjkmcZRYKTRlAYCb7jHdOBxnMPgpeyXNJGNtPd4lqGOBRFEkFgbmiwKi3uRhEba5i1JbEbO_cDpQaeOwo9KJ9FWn33X_z9zLuKWK6fu4WQDjZ8cyFY9sLA0CPngefzvUVp26WKXDtDJrGk0yJqA",
  },
  {
    num: "04",
    icon: "format_paint",
    title: "Master Application",
    duration: "Weeks 3–5",
    desc: "Our master painters execute the application with precision tools, premium products, and time-honoured technique. Multiple coats, edge-to-edge consistency, and a watchful eye ensure the result exceeds expectations.",
    details: ["Multiple coat system", "Airless spray, roller & brush techniques", "Daily quality checks by senior craftsmen", "Full site clean at each session"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLUtibUfQq5otrfdGqz9s9yQu4BUcowgx1fY9bIftIjrDbptATZAaS7AqaoXWp0Eqe_yAfF_iHktMF4TMpDVngFEiIrVycAzaui7Hpo21A-gIJKK1CyRASZfQWFSUOORf9nGbKGVIP5W-V_pJBuVTuwG0FplGkH8DWSMQgQ86-pAzkcUCWjCIFapmRnSllVWRC0LRwogr2H26087yj2hB-ctnih30Xp3xKtCtTGu2JisJu3rXYsyzGevniu0ctsd3qZ-ugNcWJ3QE",
  },
  {
    num: "05",
    icon: "checklist",
    title: "Quality Inspection",
    duration: "Final Week",
    desc: "Before we consider a project complete, our lead craftsman conducts an exhaustive inspection across every surface. Any imperfection — however minor — is addressed before the client walkthrough.",
    details: ["Senior craftsman sign-off", "Client walkthrough & review", "Defect rectification guarantee", "Photography for warranty record"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOWkSyTJXu_dGLS6dyF7zfnF7VyKMJWOP0ByjsFGr0cvMoTg-Q88xfrxBtiGdaCPOn_ihwzygWZ495aaX8PFfwQe0tbHCTkLuK7Rgg8CPcE3-wfN23N4Hwq_H54vbE6emqu8R861y3Z2EkICTaCCnb2oB3kSBdIfXW05n8Wx7vnX2NdLEgZym6H-JX5hYiyvLpwuE0GQFUq5ReXYeRy_3XvG7MjYUMIp20uqDx6yW_tI4xtH3RMPFnXTyM9DPeJw5CzOTcSSlQW40",
  },
  {
    num: "06",
    icon: "workspace_premium",
    title: "Handover & Warranty",
    duration: "Project Close",
    desc: "We hand over a detailed care manual, warranty documentation, and leftover touch-up products. Our relationship doesn&apos;t end at project completion — we stand behind our work for years to come.",
    details: ["Care & maintenance guide", "5-year workmanship warranty", "Touch-up paint provided", "Priority scheduling for future work"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7mea_6IMIdEeEV-gkTMTjsSGzRkgA1IQFURgzZWy1_wdHME4ibzi51AF-bSfLVWU63MklEGoo1gCOzil8YDWkFxB-ElX38NUBYkmElP5V85JGOHBvs1ag2GdUMUKlgQ0OPeB-xH5wMge09z6ENpIbOWbKY0eNbcQuSIJHehw-Itr9dlfJWXiOgx6jPtSXmBNd7NAV8_5aaZ1m9UTRDJeAgmv4XpIiXmjBSpdVm52xR_chDGU9ly0zX-9YjDyBQS0_0HS-NsLZ8E8",
  },
];

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white text-on-surface selection:bg-vibrant-accent/30">
      <NavBar />

      <main className="pt-40">
        {/* ── Hero ── */}
        <header className="max-w-screen-2xl mx-auto px-8 mb-32 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-teal-accent/5 rounded-full mb-8 border border-teal-accent/10">
            <span className="flex h-2 w-2 rounded-full bg-teal-accent animate-pulse" />
            <span className="text-teal-accent text-label text-[10px]">
              Our Methodology
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <h1 className="text-6xl md:text-[5.5rem] font-headline leading-[0.95] text-navy tracking-tighter">
              Precision at
              <br />
              Every{" "}
              <span className="text-vibrant-accent italic relative">
                Stage.
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-vibrant-accent/20 rounded-full" />
              </span>
            </h1>
            <p className="text-xl text-on-surface-variant font-medium leading-relaxed pb-2">
              Six deliberate steps. Each one non-negotiable. From the first
              consultation to the final handover, our process is engineered to
              deliver a result that exceeds expectations — every time.
            </p>
          </div>
        </header>

        {/* ── Step Navigator (sticky) ── */}
        <div className="sticky top-20 z-50 bg-white/90 backdrop-blur-lg border-b border-outline/50 mb-0">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="flex overflow-x-auto gap-0 no-scrollbar">
              {STEPS.map((step, i) => (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(i)}
                  className={`flex items-center gap-3 px-6 py-5 text-label text-[10px] whitespace-nowrap border-b-2 transition-all ${
                    activeStep === i
                      ? "border-vibrant-accent text-navy font-bold"
                      : "border-transparent text-on-surface-variant hover:text-navy"
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                      activeStep === i
                        ? "bg-vibrant-accent text-white"
                        : "bg-outline/50 text-on-surface-variant"
                    }`}
                  >
                    {step.num}
                  </span>
                  {step.title.split(" ").slice(0, 2).join(" ")}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Steps ── */}
        <div className="max-w-screen-2xl mx-auto px-8">
          {STEPS.map((step, i) => (
            <section
              key={step.num}
              id={`step-${step.num}`}
              className="py-32 scroll-reveal border-b border-outline/30 last:border-0"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${
                  i % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Text */}
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-[10px] font-bold text-label text-vibrant-accent tracking-[0.2em]">
                      {step.num}
                    </span>
                    <span className="w-12 h-[1px] bg-outline" />
                    <span className="text-[10px] font-bold text-label text-on-surface-variant/50 tracking-[0.2em]">
                      {step.duration}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-3xl text-teal-accent mb-6 block">
                    {step.icon}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-headline text-navy mb-8 leading-tight">
                    {step.title}
                  </h2>
                  <p className="text-on-surface-variant text-lg leading-relaxed font-medium mb-10">
                    {step.desc}
                  </p>
                  <ul className="space-y-4">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-4">
                        <div className="w-5 h-5 rounded-full bg-vibrant-accent/10 flex items-center justify-center text-vibrant-accent shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[12px]">
                            check
                          </span>
                        </div>
                        <span className="text-sm font-medium text-on-surface-variant">
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Image */}
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative group magnetic-hover">
                    <Image
                      src={step.img}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-navy/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* ── CTA ── */}
        <section className="bg-navy py-32 scroll-reveal">
          <div className="max-w-screen-2xl mx-auto px-8 text-center">
            <span className="text-vibrant-accent text-label text-[10px] mb-6 block font-bold tracking-[0.2em]">
              Ready to Begin?
            </span>
            <h2 className="text-5xl md:text-6xl font-headline text-white mb-8 max-w-2xl mx-auto leading-tight">
              Start Your Project Today
            </h2>
            <p className="text-white/60 text-lg font-medium mb-16 max-w-xl mx-auto">
              Book a free consultation and receive a detailed, fixed-price quote
              within 48 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-vibrant-accent text-navy px-12 py-5 rounded-full font-extrabold text-[11px] tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 hover:-translate-y-1"
            >
              Book a Free Consultation
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
