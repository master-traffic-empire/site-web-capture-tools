import { siteConfig } from "@/site.config"

const tools = [
  {
    name: "Screenshot Webpage",
    slug: "screenshot",
    summary:
      "Capture any webpage as a full-page or visible-area screenshot using browser-native DevTools methods. Works in Chrome, Edge, Firefox, and mobile browsers. No server required, no extensions needed.",
    useCases: [
      "Documentation",
      "Bug reports",
      "Content archiving",
      "Portfolio screenshots",
    ],
  },
  {
    name: "Webpage to PDF",
    slug: "webpage-to-pdf",
    summary:
      "Convert any URL to a PDF using the browser's native print engine. Opens the page in a new tab and triggers the print dialog. Supports background graphics, custom margins, and page scaling.",
    useCases: [
      "Archiving articles",
      "Saving receipts",
      "Offline reading",
      "Report generation",
    ],
  },
  {
    name: "HTML to Image",
    slug: "html-to-image",
    summary:
      "Paste HTML and CSS into the live editor, preview in real-time, then screenshot or download. Supports inline styles, embedded <style> tags, and external fonts loaded in the browser.",
    useCases: [
      "Social media cards",
      "Email template preview",
      "Certificate generation",
      "og:image creation",
    ],
  },
  {
    name: "HTML to PDF",
    slug: "html-to-pdf",
    summary:
      "Paste a complete HTML document, preview it, and export as a PDF via the browser print dialog. Supports @media print CSS, page breaks, background graphics, and custom fonts.",
    useCases: [
      "Invoice generation",
      "Report creation",
      "Certificate printing",
      "Document archiving",
    ],
  },
  {
    name: "URL Preview Generator",
    slug: "url-preview",
    summary:
      "See how any URL appears in Google search results and social media cards (Twitter, LinkedIn). Displays og:title, og:description, og:image, favicon, and canonical URL via the Microlink API.",
    useCases: [
      "SEO auditing",
      "Social media preview testing",
      "OG tag debugging",
      "Link sharing",
    ],
  },
  {
    name: "Browser Bookmarklets",
    slug: "bookmarklets",
    summary:
      "Six browser bookmarklets: screenshot (html2canvas), print to PDF, show page metadata, copy title+URL as Markdown, highlight all links, show viewport size. Drag to bookmarks bar to install.",
    useCases: [
      "Developer workflows",
      "Content research",
      "Quality assurance",
      "Web inspection",
    ],
    includes: [
      "Screenshot (html2canvas)",
      "Print to PDF",
      "Show Page Info",
      "Copy Title + URL",
      "Highlight Links",
      "Show Viewport Size",
    ],
  },
]

export async function GET() {
  const body = `# ${siteConfig.name} — Full Dataset
> ${siteConfig.tagline}

Base URL: ${siteConfig.baseUrl}
Total tools: ${tools.length}
Category: ${siteConfig.category}

---

${tools
  .map(
    (t) => `## ${t.name}
URL: ${siteConfig.baseUrl}/${t.slug}

${t.summary}

Use cases: ${t.useCases.join(", ")}${t.includes ? `\nIncludes: ${t.includes.join(", ")}` : ""}

---`,
  )
  .join("\n\n")}

## Machine-Readable Endpoints
- JSON API: ${siteConfig.baseUrl}/api/llm
- llms.txt: ${siteConfig.baseUrl}/llms.txt
- Sitemap: ${siteConfig.baseUrl}/sitemap.xml
`

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  })
}
