import { siteConfig } from "@/site.config"
import type { MetadataRoute } from "next"

const TOOL_SLUGS = [
  "screenshot",
  "webpage-to-pdf",
  "html-to-image",
  "html-to-pdf",
  "url-preview",
  "bookmarklets",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ]

  const toolRoutes: MetadataRoute.Sitemap = TOOL_SLUGS.map((slug) => ({
    url: `${siteConfig.baseUrl}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const infoRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${siteConfig.baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ]

  return [...staticRoutes, ...toolRoutes, ...infoRoutes]
}
