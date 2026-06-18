import type { MetadataRoute } from "next";
import { absoluteUrl, isIndexable } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexable()) {
    return [];
  }

  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date("2026-06-18"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
