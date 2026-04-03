import type { Metadata } from "next";
import ServicesPage from "./ServicesPage";

export const metadata: Metadata = {
  title: "Services | Elite Finish - Masterful Surfaces",
  description:
    "From heritage conservation to avant-garde industrial textures — premium painting and surface finishing services.",
};

export default function Page() {
  return <ServicesPage />;
}
