import Link from "next/link"
import { siteConfig } from "@/site.config"

const toolLinks = [
  { href: "/screenshot", label: "Screenshot" },
  { href: "/webpage-to-pdf", label: "Webpage to PDF" },
  { href: "/html-to-image", label: "HTML to Image" },
  { href: "/html-to-pdf", label: "HTML to PDF" },
  { href: "/url-preview", label: "URL Preview" },
  { href: "/bookmarklets", label: "Bookmarklets" },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>{siteConfig.name}</h4>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "#94a3b8" }}>
              {siteConfig.tagline}
            </p>
            <p style={{ marginTop: "0.75rem", fontSize: "0.85rem", color: "#94a3b8" }}>
              Part of the <a href="https://thicket.sh">Thicket</a> network of free utility tools.
            </p>
          </div>
          <div>
            <h4>Tools</h4>
            <div className="footer-links">
              {toolLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4>Site</h4>
            <div className="footer-links">
              <Link href="/about">About</Link>
              <Link href="/privacy">Privacy</Link>
              <a href="/llms.txt">llms.txt</a>
              <a href="/api/llm">JSON API</a>
              <a href="/sitemap.xml">Sitemap</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} {siteConfig.name}.</span>
          <span>{siteConfig.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
