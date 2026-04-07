import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { siteConfig } from "../siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy | Elite Finish",
  description:
    "How Elite Finish Painting Service collects, uses, and protects personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "We collect information you choose to share with us, including your name, phone number, email address, project location, project type, timeline, and project description.",
      "We may also receive basic technical information from your browser or device when you use this website, such as pages visited, form submission time, and diagnostic information needed to keep the website working.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "We use personal information to respond to enquiries, prepare quotes, schedule consultations, provide painting and finishing services, manage customer records, and improve our customer experience.",
      "We do not sell personal information.",
    ],
  },
  {
    title: "Sharing Information",
    body: [
      "We may share information with service providers who help us operate the website, manage email, host data, process enquiries, or deliver customer support.",
      "We may also disclose information if required by law, to protect our rights, or to resolve a customer request or dispute.",
    ],
  },
  {
    title: "Storage And Security",
    body: [
      "We take reasonable steps to protect personal information from misuse, interference, loss, unauthorised access, modification, or disclosure.",
      "No website or email system is completely secure, so please avoid sending sensitive information through the contact form unless we ask for it.",
    ],
  },
  {
    title: "Access And Correction",
    body: [
      "You can ask us to access, update, or correct the personal information we hold about you.",
      "You can also contact us if you have a privacy concern or want us to stop using your information for a specific purpose.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white text-on-surface selection:bg-vibrant-accent/20">
      <NavBar />

      <main className="mx-auto max-w-4xl px-6 pb-24 pt-40 lg:px-8">
        <div className="mb-14">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.25em] text-teal-accent">
            Legal
          </span>
          <h1 className="mb-6 text-5xl font-headline leading-tight text-navy md:text-6xl">
            Privacy Policy
          </h1>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
            Last updated: 7 April 2026
          </p>
        </div>

        <div className="space-y-10 text-base leading-relaxed text-on-surface-variant">
          <p>
            This Privacy Policy explains how {siteConfig.businessName} collects,
            uses, stores, and protects personal information when you visit our
            website, contact us, or request a quote.
          </p>

          {sections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="text-2xl font-headline text-navy">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <section className="space-y-4">
            <h2 className="text-2xl font-headline text-navy">Contact Us</h2>
            <p>
              For privacy questions or correction requests, contact us at{" "}
              <Link href={siteConfig.emailHref} className="font-bold text-teal-accent">
                {siteConfig.email}
              </Link>{" "}
              or call{" "}
              <Link href={siteConfig.phoneHref} className="font-bold text-teal-accent">
                {siteConfig.phoneDisplay}
              </Link>
              .
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
