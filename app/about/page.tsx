import type { Metadata } from "next"
import { siteConfig } from "@/site.config"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export const metadata: Metadata = {
  title: "About CaptureKit",
  description:
    "CaptureKit is a free suite of six browser-based web capture tools — screenshots, PDFs, HTML rendering, URL previews, and bookmarklets — that all run locally in your browser.",
  alternates: { canonical: `${siteConfig.baseUrl}/about` },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="page-header">
        <div className="container">
          <h1>About CaptureKit</h1>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>

      <div className="tool-page">
        <div className="container">
          <div className="prose">
            <p>{siteConfig.description}</p>

            <h2>Our Tools</h2>
            <ul>
              <li>
                <a href="/screenshot"><b>Screenshot Webpage</b></a> — Capture any page using browser-native DevTools
                methods. No server, no extension.
              </li>
              <li>
                <a href="/webpage-to-pdf"><b>Webpage to PDF</b></a> — Print any URL to PDF with full CSS rendering via
                the browser print engine.
              </li>
              <li>
                <a href="/html-to-image"><b>HTML to Image</b></a> — Render HTML/CSS live and export as a screenshot or
                download.
              </li>
              <li>
                <a href="/html-to-pdf"><b>HTML to PDF</b></a> — Render a full HTML document and save it as a PDF via
                the browser print dialog.
              </li>
              <li>
                <a href="/url-preview"><b>URL Preview</b></a> — See how any URL looks in search results and social
                media shares (OG tags, title, image).
              </li>
              <li>
                <a href="/bookmarklets"><b>Browser Bookmarklets</b></a> — One-click tools for screenshot, PDF, page
                info, and link highlighting.
              </li>
            </ul>

            <h2>Privacy</h2>
            <p>
              Most CaptureKit tools run entirely in your browser. No content is uploaded to our servers. For
              the URL Preview tool, metadata is fetched via a third-party API (Microlink) to retrieve OG tags.
              See our <a href="/privacy">privacy page</a> for details.
            </p>

            <h2>Part of the Thicket Network</h2>
            <p>
              CaptureKit is part of the <a href="https://thicket.sh">Thicket</a> network of free utility tools.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
