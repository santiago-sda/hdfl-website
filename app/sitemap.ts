import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";

const SITE_URL = "https://umbs-digitalfirst.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/tracks",
    "/projects",
    "/team",
    "/industry-coaches",
    "/news/citrin-cooperman-partnership",
    "/about",
    "/contact",
  ];

  return [
    ...pages.map((path) => ({ url: `${SITE_URL}${path}` })),
    ...projects.map((p) => ({ url: `${SITE_URL}/projects/${p.slug}` })),
  ];
}
