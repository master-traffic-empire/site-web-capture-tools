import { NextRequest } from "next/server"
import { siteConfig } from "@/site.config"

export const dynamic = "force-dynamic"

const TOOL_DESCRIPTIONS: Record<string, string> = {
  screenshot:
    "Capture any webpage as a screenshot using browser-native DevTools methods.",
  "webpage-to-pdf":
    "Convert any URL to PDF using the browser's native print engine.",
  "html-to-image":
    "Render HTML/CSS live in the browser and export as an image.",
  "html-to-pdf":
    "Render a full HTML document and save as PDF via the browser print dialog.",
  "url-preview":
    "Preview how any URL appears in search results and social media (OG tags, title, image).",
  bookmarklets:
    "One-click browser bookmarklets for screenshot, PDF, page info, and link highlighting.",
  about: "About CaptureKit — free browser-based web capture tools.",
  privacy: "Privacy policy — most CaptureKit tools run entirely in your browser.",
}

export async function GET(request: NextRequest) {
  const rawPath = request.nextUrl.searchParams.get("path") || "/index.md"
  const segments = rawPath.split("/").filter(Boolean)
  const lastSegment = segments[segments.length - 1] ?? "index"
  const slug = lastSegment.replace(/\.md$/, "")

  const pageTitle =
    slug === "index"
      ? siteConfig.name
      : slug
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase())

  const pageUrl = `${siteConfig.baseUrl}${rawPath.replace(/\.md$/, "")}`
  const toolDescription = TOOL_DESCRIPTIONS[slug] ?? siteConfig.tagline

  const markdown = `---
title: "${pageTitle} — ${siteConfig.name}"
site: "${siteConfig.name}"
domain: "${siteConfig.domain}"
url: "${pageUrl}"
description: "${toolDescription.replace(/"/g, "'")}"
category: "${siteConfig.category}"
---

# ${pageTitle} — ${siteConfig.name}

> ${toolDescription}

${siteConfig.description}

**Full page:** [${pageUrl}](${pageUrl})

## LLM Resources

- [JSON API](${siteConfig.baseUrl}/api/llm) — Machine-readable site data
- [Site Index](${siteConfig.baseUrl}/llms.txt) — Full site overview in markdown
- [Complete Content](${siteConfig.baseUrl}/llms-full.txt) — All content in plain text
`

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  })
}
