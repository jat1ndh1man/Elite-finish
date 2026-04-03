import type { Metadata } from "next";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: "Elite Finish | Premium Professional Painting Services",
  description: "Premium painting and surface finishing services in Geelong.",
};

export default function Page() {
  return <HomePage />;
}
