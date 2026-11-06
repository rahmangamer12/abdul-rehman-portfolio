import type { MetadataRoute } from "next";
import { SITE_URL, caseStudies } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/services", "/skills", "/about", "/contact", "/cv"];
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...caseStudies.map((c) => ({ url: `${SITE_URL}/work/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
