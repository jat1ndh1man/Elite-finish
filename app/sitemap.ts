import type { MetadataRoute } from "next";
import { siteConfig } from "./siteConfig";

const routes = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/portfolio", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  { path: "/process", priority: 0.6 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/terms-of-service", priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-04-07");

  return routes.map(({ path, priority }) => ({
    url: new URL(path, siteConfig.siteUrl).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
