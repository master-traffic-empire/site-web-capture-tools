import type { Metadata } from "next"
import { siteConfig } from "@/site.config"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { WebpageToPdf } from "./WebpageToPdf"

export const metadata: Metadata = {
  title: "Webpage to PDF — Convert Any URL to PDF in Your Browser",
  description:
    "Convert any URL to a PDF using the browser's native print engine. Opens the page and triggers the print dialog. Supports background graphics, custom margins, and page scaling.",
  alternates: { canonical: `${siteConfig.baseUrl}/webpage-to-pdf` },
  openGraph: {
    title: "Webpage to PDF | CaptureKit",
    description: "Convert any URL to a PDF using the browser's print engine.",
    url: `${siteConfig.baseUrl}/webpage-to-pdf`,
  },
}

export default function WebpageToPdfPage() {
  return (
    <>
      <Header />
      <div className="page-header">
        <div className="container">
          <h1>Webpage to PDF</h1>
          <p>
            Convert any URL to a PDF using your browser&apos;s native print engine. No software install, no server
            uploads, no account required.
          </p>
        </div>
      </div>

      <div className="tool-page">
        <div className="container">
          <WebpageToPdf />

          <div className="card">
            <h2 style={{ marginTop: 0 }}>How it works</h2>
            <ol className="step-list">
              <li>Enter the URL you want to save as a PDF.</li>
              <li>Click <b>Open in new tab</b> — your browser loads the page normally.</li>
              <li>Press <b>Ctrl+P</b> (Windows) or <b>Cmd+P</b> (macOS) on the new tab.</li>
              <li>Set the destination to <b>Save as PDF</b> and click <b>Save</b>.</li>
            </ol>
            <div className="info-box">
              <b>Why a new tab?</b> The browser must own the print dialog — it cannot let a third-party page
              print another site&apos;s content without user consent. This is a fundamental security boundary, not
              something we can bypass.
            </div>
          </div>

          <div className="card">
            <h2 style={{ marginTop: 0 }}>Tips for a clean PDF</h2>
            <ul>
              <li>In the print dialog, check <b>Background graphics</b> to preserve colored backgrounds.</li>
              <li>Use <b>More settings → Paper size</b> to match A4 or US Letter as needed.</li>
              <li>Use <b>Scale → Custom</b> (e.g. 90 %) to shrink wide layouts onto one page.</li>
              <li>Turn on <b>Headers and footers</b> only if you want the URL + page number printed.</li>
            </ul>
          </div>

          <div className="prose">
            <h2>Use cases</h2>
            <ul>
              <li>Archiving articles before they disappear from the web.</li>
              <li>Saving receipts and order confirmations.</li>
              <li>Offline reading on a Kindle or tablet.</li>
              <li>Report generation — convert a dashboard snapshot into a share-ready file.</li>
            </ul>
            <p>
              If you have your own HTML you want to convert, use the{" "}
              <a href="/html-to-pdf">HTML to PDF tool</a> — it renders your markup directly in the browser and
              triggers the print dialog without navigating away.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
