import { siteConfig } from "@/site.config"

const sections = [
  {
    title: "Capture Tools",
    items: [
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
          "Convert any URL to a PDF using the browser's native print engine.",
      },
    ],
  },
  {
    title: "HTML Render Tools",
    items: [
      {
        name: "HTML to Image",
        slug: "html-to-image",
        description: "Render HTML/CSS in the browser and export as an image.",
      },
      {
        name: "HTML to PDF",
        slug: "html-to-pdf",
        description: "Render a full HTML document and save as PDF.",
      },
    ],
  },
  {
    title: "Preview & Utilities",
    items: [
      {
        name: "URL Preview Generator",
        slug: "url-preview",
        description:
          "See how any URL appears in search results and social media.",
      },
      {
        name: "Browser Bookmarklets",
        slug: "bookmarklets",
        description:
          "One-click browser bookmarklets for screenshot, PDF, page info.",
      },
    ],
  },
]

export async function GET() {
  const body = `# ${siteConfig.name}
> ${siteConfig.tagline}

${siteConfig.name} is a free suite of web capture tools that run in your browser. No server uploads, no accounts required.

${sections
  .map(
    (section) => `## ${section.title}
${section.items
  .map(
    (item) =>
      `- [${item.name}](${siteConfig.baseUrl}/${item.slug}/index.md): ${item.description}`,
  )
  .join("\n")}`,
  )
  .join("\n\n")}

## Machine-Readable Endpoints
- JSON API: ${siteConfig.baseUrl}/api/llm
- Full dataset: ${siteConfig.baseUrl}/llms-full.txt
- Sitemap: ${siteConfig.baseUrl}/sitemap.xml
`

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  })
}
