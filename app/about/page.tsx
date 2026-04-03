import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About | Elite Finish - Masterful Surfaces",
  description:
    "45 years of mastery, two generations of craft, and an unshakeable commitment to quality.",
};

export default function Page() {
  return <AboutPage />;
}
