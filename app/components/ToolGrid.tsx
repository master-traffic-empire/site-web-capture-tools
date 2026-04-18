import Link from "next/link"
import { Camera, FileDown, Image as ImageIcon, FileText, Link2, Bookmark } from "lucide-react"

const tools = [
  {
    slug: "screenshot",
    name: "Screenshot Webpage",
    description:
      "Capture any webpage as a screenshot using your browser's built-in tools. Instant, no server needed.",
    Icon: Camera,
  },
  {
    slug: "webpage-to-pdf",
    name: "Webpage to PDF",
    description:
      "Convert any URL to a PDF file using your browser's native print engine. Works on any site.",
    Icon: FileDown,
  },
  {
    slug: "html-to-image",
    name: "HTML to Image",
    description:
      "Paste HTML and CSS, render it live in the browser, and download as a PNG image.",
    Icon: ImageIcon,
  },
  {
    slug: "html-to-pdf",
    name: "HTML to PDF",
    description:
      "Render HTML/CSS in the browser and generate a PDF — great for email templates and mockups.",
    Icon: FileText,
  },
  {
    slug: "url-preview",
    name: "URL Preview",
    description:
      "See how any URL appears in search results and social media — Open Graph tags, title, description, favicon.",
    Icon: Link2,
  },
  {
    slug: "bookmarklets",
    name: "Browser Bookmarklets",
    description:
      "One-click browser bookmarklets for screenshot, print-to-PDF, page info, and more. Drag to bookmarks bar.",
    Icon: Bookmark,
  },
]

export function ToolGrid() {
  return (
    <div className="tool-grid">
      {tools.map(({ slug, name, description, Icon }) => (
        <Link key={slug} href={`/${slug}`} className="tool-card">
          <span className="tool-card-icon">
            <Icon size={22} />
          </span>
          <h3>{name}</h3>
          <p>{description}</p>
          <span className="arrow">Open tool →</span>
        </Link>
      ))}
    </div>
  )
}
