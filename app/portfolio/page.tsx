import type { Metadata } from "next";
import PortfolioPage from "./PortfolioPage";

export const metadata: Metadata = {
  title: "Portfolio | Elite Finish - Masterful Surfaces",
  description:
    "Explore our curated works — premium finishes across heritage estates, contemporary high-rises, and architectural icons.",
};

export default function Page() {
  return <PortfolioPage />;
}
