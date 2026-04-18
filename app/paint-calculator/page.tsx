import type { Metadata } from "next";
import PaintCalculatorPage from "./PaintCalculatorPage";

export const metadata: Metadata = {
  title: "Paint Cost Calculator | Elite Finish",
  description:
    "Estimate interior painting costs with Elite Finish's paint cost calculator.",
};

export default function Page() {
  return <PaintCalculatorPage />;
}
