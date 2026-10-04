import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "", "/biologia-pau", "/filosofia-pau", "/literatura-pau", "/historia-pau",
    "/legal/aviso-legal", "/legal/privacidad", "/legal/cookies", "/legal/condiciones",
  ];
  return pages.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : path.startsWith("/legal") ? 0.3 : 0.9,
  }));
}
