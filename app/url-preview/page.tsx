import type { Metadata } from "next"
import { siteConfig } from "@/site.config"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { UrlPreview } from "./UrlPreview"

export const metadata: Metadata = {
  title: "URL Preview Generator — See Search & Social Cards for Any URL",
  description:
    "Preview how any URL appears in Google search results and social media cards (Twitter, LinkedIn, Facebook). Shows og:title, og:description, og:image, favicon, and canonical URL.",
  alternates: { canonical: `${siteConfig.baseUrl}/url-preview` },
  openGraph: {
    title: "URL Preview Generator | CaptureKit",
    description: "Preview search and social cards for any URL.",
    url: `${siteConfig.baseUrl}/url-preview`,
  },
}

export default function UrlPreviewPage() {
  return (
    <>
      <Header />
      <div className="page-header">
        <div className="container">
          <h1>URL Preview Generator</h1>
          <p>
            See how any URL appears in Google search results and on Twitter, LinkedIn, and Facebook. Displays
            og:title, og:description, og:image, favicon, and canonical URL via the Microlink API.
          </p>
        </div>
      </div>

      <div className="tool-page">
        <div className="container">
          <UrlPreview />

          <div className="card" style={{ marginTop: "1.5rem" }}>
            <h2 style={{ marginTop: 0 }}>How it works</h2>
            <p>
              We call <a href="https://microlink.io">Microlink</a>&apos;s public API from your browser to fetch
              Open Graph metadata. Your URL is sent to Microlink&apos;s servers — not ours — so we never see what
              you preview.
            </p>
          </div>

          <div className="prose">
            <h2>Use cases</h2>
            <ul>
              <li>SEO auditing — confirm titles and descriptions match what you set.</li>
              <li>Social preview testing — check that og:image crops well on Twitter and LinkedIn.</li>
              <li>OG tag debugging — verify changes to meta tags propagated after a deploy.</li>
              <li>Link sharing confidence — preview before you post.</li>
            </ul>
            <h2>Tips for better previews</h2>
            <ul>
              <li>og:image must be at least 1200×630 px and under 5 MB for LinkedIn.</li>
              <li>Twitter prefers 2:1 aspect ratio for large image cards.</li>
              <li>Keep og:title under 60 characters and og:description under 155.</li>
              <li>Include a canonical URL to prevent duplicate previews of the same content.</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
