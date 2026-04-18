import { siteConfig } from "@/site.config"

const tools = [
  {
    name: "Screenshot Webpage",
    slug: "screenshot",
    description:
      "Capture any webpage as a screenshot using browser-native DevTools methods.",
  },
  {
    name: "Webpage to PDF",
    slug: "webpage-to-pdf",
    description:
      "Convert any URL to PDF using the browser's native print engine.",
  },
  {
    name: "HTML to Image",
    slug: "html-to-image",
    description:
      "Render HTML/CSS live in the browser and export as an image.",
  },
  {
    name: "HTML to PDF",
    slug: "html-to-pdf",
    description:
      "Render a full HTML document and save as PDF via the browser print dialog.",
  },
  {
    name: "URL Preview",
    slug: "url-preview",
    description:
      "Preview how any URL appears in search results and social media (OG tags, title, image).",
  },
  {
    name: "Browser Bookmarklets",
    slug: "bookmarklets",
    description:
      "One-click browser bookmarklets for screenshot, PDF, page info, and link highlighting.",
  },
]

export async function GET() {
  return Response.json(
    {
      site: {
        name: siteConfig.name,
        url: siteConfig.baseUrl,
        description: siteConfig.description,
      },
      tools: tools.map((t) => ({
        name: t.name,
        url: `${siteConfig.baseUrl}/${t.slug}`,
        description: t.description,
      })),
      totalTools: tools.length,
      lastUpdated: new Date().toISOString(),
    },
    {
      headers: {
        "Cache-Control": "public, max-age=3600",
        "Access-Control-Allow-Origin": "*",
      },
    },
  )
}
