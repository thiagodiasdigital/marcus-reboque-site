import type { MetadataRoute } from "next";
import { absoluteUrl, isIndexable } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexable()) {
    return [];
  }

  const routes = [
    "/",
    "/servicos",
    "/areas-atendidas",
    "/sobre",
    "/avaliacoes",
    "/contato",
    "/guias",
  ] as const;

  return routes.map((route, index) => ({
      url: absoluteUrl(route),
      lastModified: new Date("2026-06-21"),
      changeFrequency: index === 0 ? "monthly" : "yearly",
      priority: index === 0 ? 1 : 0.7,
    })) satisfies MetadataRoute.Sitemap;
}
