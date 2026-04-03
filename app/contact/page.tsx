import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact | Elite Finish - Masterful Surfaces",
  description:
    "Book a consultation with Elite Finish Painting Service in Bell Post Hill, Geelong.",
};

export default function Page() {
  return <ContactPage />;
}
