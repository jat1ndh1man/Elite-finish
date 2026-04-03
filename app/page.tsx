import type { Metadata } from "next";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: "Elite Finish | Premium Professional Painting Services",
  description: "Elevating architectural spaces through precision craftsmanship since 1979.",
};

export default function Page() {
  return <HomePage />;
}
