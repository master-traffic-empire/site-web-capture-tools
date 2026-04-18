import type { Metadata } from "next"
import { siteConfig } from "@/site.config"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { HtmlToImage } from "./HtmlToImage"

export const metadata: Metadata = {
  title: "HTML to Image — Render HTML and Download as PNG",
  description:
    "Paste HTML and CSS into the live editor, preview in real-time, then download as a PNG image. Supports inline styles, embedded <style> tags, and external fonts.",
  alternates: { canonical: `${siteConfig.baseUrl}/html-to-image` },
  openGraph: {
    title: "HTML to Image | CaptureKit",
    description: "Render HTML/CSS in the browser and export as an image.",
    url: `${siteConfig.baseUrl}/html-to-image`,
  },
}

export default function HtmlToImagePage() {
  return (
    <>
      <Header />
      <div className="page-header">
        <div className="container">
          <h1>HTML to Image</h1>
          <p>
            Paste HTML and CSS, preview live in the browser, and export as a PNG. Ideal for social media
            cards, certificates, og:image generation, and email template mockups.
          </p>
        </div>
      </div>

      <div className="tool-page">
        <div className="container">
          <HtmlToImage />

          <div className="card" style={{ marginTop: "1.5rem" }}>
            <h2 style={{ marginTop: 0 }}>How it works</h2>
            <p>
              Your HTML is rendered in a sandboxed iframe preview. When you click <b>Download PNG</b>, the same
              markup is rendered off-screen and rasterized with{" "}
              <a href="https://github.com/niklasvh/html2canvas">html2canvas</a>, producing a 2x-resolution PNG
              that downloads directly from your browser. Nothing is uploaded to a server.
            </p>
          </div>

          <div className="prose">
            <h2>Tips for clean renders</h2>
            <ul>
              <li>
                Use explicit widths (e.g. <code>width: 1200px</code>) so the rasterized image has predictable
                dimensions.
              </li>
              <li>
                For custom fonts, load them with a Google Fonts <code>&lt;link&gt;</code> tag inside the HTML — the
                off-screen renderer waits for fonts to load before rasterizing.
              </li>
              <li>
                External images must allow CORS for <code>html2canvas</code> to capture them, otherwise they render
                blank.
              </li>
              <li>
                Inline styles are the most reliable. Embedded <code>&lt;style&gt;</code> tags also work.
              </li>
            </ul>
            <h2>Use cases</h2>
            <ul>
              <li>Social media cards — generate Twitter/LinkedIn/Facebook share images.</li>
              <li>Email template previews — render transactional emails for review.</li>
              <li>Certificate generation — personalize names and dates, export as PNG.</li>
              <li>og:image creation — dynamic Open Graph previews for your site.</li>
            </ul>
            <p>
              Need a PDF instead? Use the <a href="/html-to-pdf">HTML to PDF tool</a>.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
