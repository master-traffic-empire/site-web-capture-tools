import type { Metadata } from "next"
import { siteConfig } from "@/site.config"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { HtmlToPdf } from "./HtmlToPdf"

export const metadata: Metadata = {
  title: "HTML to PDF — Render HTML and Save as PDF in Your Browser",
  description:
    "Paste a complete HTML document, preview it, and export as a PDF via the browser print dialog. Supports @media print CSS, page breaks, background graphics, and custom fonts.",
  alternates: { canonical: `${siteConfig.baseUrl}/html-to-pdf` },
  openGraph: {
    title: "HTML to PDF | CaptureKit",
    description: "Render HTML/CSS in the browser and save as PDF.",
    url: `${siteConfig.baseUrl}/html-to-pdf`,
  },
}

export default function HtmlToPdfPage() {
  return (
    <>
      <Header />
      <div className="page-header">
        <div className="container">
          <h1>HTML to PDF</h1>
          <p>
            Paste a complete HTML document, preview it, and export as a PDF using your browser&apos;s print
            dialog. Supports <code>@media print</code> CSS, page breaks, background graphics, and custom fonts.
          </p>
        </div>
      </div>

      <div className="tool-page">
        <div className="container">
          <HtmlToPdf />

          <div className="card" style={{ marginTop: "1.5rem" }}>
            <h2 style={{ marginTop: 0 }}>How it works</h2>
            <ol className="step-list">
              <li>Edit or paste a full HTML document on the left.</li>
              <li>The sandboxed preview renders live as you type.</li>
              <li>Click <b>Open &amp; print to PDF</b> — a new tab opens with your HTML and the print dialog.</li>
              <li>Choose <b>Save as PDF</b> as the destination and save.</li>
            </ol>
            <div className="info-box">
              Tip: use <code>@media print</code> CSS to hide navigation, reset margins, and force page breaks
              with <code>page-break-before: always</code>.
            </div>
          </div>

          <div className="prose">
            <h2>Use cases</h2>
            <ul>
              <li>Invoice generation — templated billing documents.</li>
              <li>Report creation — turn a dashboard HTML snapshot into a share-ready PDF.</li>
              <li>Certificate printing — personalized certificates at scale.</li>
              <li>Document archiving — save rendered reports with fixed layout.</li>
            </ul>
            <h2>Custom page sizes and margins</h2>
            <p>
              Include a <code>@page</code> rule in your CSS to control paper size and margins:
            </p>
            <pre style={{ background: "#0C1929", color: "#e2e8f0", padding: "1rem", borderRadius: 8, overflowX: "auto" }}>
{`@page {
  size: A4;
  margin: 20mm 16mm;
}`}
            </pre>
            <p>
              Need just an image? Try <a href="/html-to-image">HTML to Image</a> for a raster PNG export.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
