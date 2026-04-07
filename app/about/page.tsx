import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About | Elite Finish - Masterful Surfaces",
  description:
    "Established in 2024 by experienced painting professionals with an unshakeable commitment to quality.",
};

export default function Page() {
  return <AboutPage />;
}
