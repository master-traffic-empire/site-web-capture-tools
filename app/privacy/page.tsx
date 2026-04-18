import type { Metadata } from "next"
import { siteConfig } from "@/site.config"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export const metadata: Metadata = {
  title: "Privacy Policy — CaptureKit",
  description:
    "CaptureKit privacy policy. Most tools run entirely in your browser. No personal data is collected. Analytics can be disabled with ?_internal=1.",
  alternates: { canonical: `${siteConfig.baseUrl}/privacy` },
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <div className="page-header">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last updated: March 2026</p>
        </div>
      </div>

      <div className="tool-page">
        <div className="container">
          <div className="prose">
            <h2>Data Collection</h2>
            <p>
              CaptureKit does not collect, store, or transmit any personal data. All tool processing happens
              in your browser.
            </p>

            <h2>URL Preview Tool</h2>
            <p>
              The <a href="/url-preview">URL Preview</a> tool fetches Open Graph metadata via the{" "}
              <a href="https://microlink.io">Microlink API</a>. The URL you enter is sent to Microlink&apos;s
              servers to retrieve metadata. No other data is shared. See{" "}
              <a href="https://microlink.io/privacy">Microlink&apos;s privacy policy</a>.
            </p>

            <h2>Analytics</h2>
            <p>
              We use Google Analytics 4 (GA4) to understand how tools are used in aggregate. GA4 collects
              anonymized usage data. Append <code>?_internal=1</code> to any URL to disable tracking for that
              session.
            </p>

            <h2>Contact</h2>
            <p>
              For privacy questions, contact us via <a href="https://thicket.sh">thicket.sh</a>.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
