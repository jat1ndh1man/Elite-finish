import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { siteConfig } from "../siteConfig";

export const metadata: Metadata = {
  title: "Terms of Service | Elite Finish",
  description:
    "Website terms and service enquiry conditions for Elite Finish Painting Service.",
};

const sections = [
  {
    title: "Website Use",
    body: [
      "You may use this website to learn about our services, view portfolio examples, and contact us about a project.",
      "You must not misuse the website, attempt to interfere with its security, submit false or misleading information, or use the website for unlawful purposes.",
    ],
  },
  {
    title: "Quotes And Project Enquiries",
    body: [
      "Submitting a form or contacting us does not create a binding contract. A project starts only when the scope, pricing, timing, and any required terms are agreed by both parties.",
      "Any estimate or quote may depend on site access, surface condition, product availability, project complexity, and information provided by you.",
    ],
  },
  {
    title: "Content And Portfolio Images",
    body: [
      "Website content is provided for general information and may be updated without notice.",
      "Images, copy, branding, and layout materials on this website belong to Elite Finish Painting Service or the relevant rights holder and must not be copied or reused without permission.",
    ],
  },
  {
    title: "Third Party Links",
    body: [
      "This website may link to third-party services such as maps, phone, email, or messaging platforms.",
      "Those services are controlled by their own providers and may be subject to their own terms and privacy practices.",
    ],
  },
  {
    title: "Liability",
    body: [
      "We aim to keep website information accurate and available, but we do not guarantee that the website will always be uninterrupted, error-free, or complete.",
      "To the extent permitted by law, we are not responsible for loss arising from your use of, or inability to use, this website.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="bg-white text-on-surface selection:bg-vibrant-accent/20">
      <NavBar />

      <main className="mx-auto max-w-4xl px-6 pb-24 pt-40 lg:px-8">
        <div className="mb-14">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.25em] text-teal-accent">
            Legal
          </span>
          <h1 className="mb-6 text-5xl font-headline leading-tight text-navy md:text-6xl">
            Terms of Service
          </h1>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
            Last updated: 7 April 2026
          </p>
        </div>

        <div className="space-y-10 text-base leading-relaxed text-on-surface-variant">
          <p>
            These Terms of Service apply to your use of the {siteConfig.shortName}{" "}
            website and any enquiry you submit through it.
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
            <h2 className="text-2xl font-headline text-navy">Contact</h2>
            <p>
              Questions about these terms can be sent to{" "}
              <Link href={siteConfig.emailHref} className="font-bold text-teal-accent">
                {siteConfig.email}
              </Link>{" "}
              or raised by phone on{" "}
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
