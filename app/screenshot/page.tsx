import type { Metadata } from "next"
import { siteConfig } from "@/site.config"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export const metadata: Metadata = {
  title: "Screenshot Webpage — Capture Any Page with DevTools",
  description:
    "Capture any webpage as a full-page or visible-area screenshot using browser-native DevTools methods. Works in Chrome, Edge, Firefox, and mobile browsers. No server, no extensions.",
  alternates: { canonical: `${siteConfig.baseUrl}/screenshot` },
  openGraph: {
    title: "Screenshot Webpage | CaptureKit",
    description:
      "Capture any webpage using your browser's built-in DevTools screenshot methods.",
    url: `${siteConfig.baseUrl}/screenshot`,
  },
}

export default function ScreenshotPage() {
  return (
    <>
      <Header />
      <div className="page-header">
        <div className="container">
          <h1>Screenshot Webpage</h1>
          <p>
            Capture any webpage as a full-page or visible-area screenshot using browser-native DevTools. No
            extensions, no uploads. Works in Chrome, Edge, Firefox, Safari, and mobile browsers.
          </p>
        </div>
      </div>

      <div className="tool-page">
        <div className="container">
          <div className="card">
            <h2 style={{ marginTop: 0 }}>Full-Page Screenshot in Chrome / Edge</h2>
            <ol className="step-list">
              <li>Open the page you want to capture in Chrome or Edge.</li>
              <li>Open DevTools: press <b>F12</b> or <b>Ctrl+Shift+I</b> (Windows) / <b>Cmd+Option+I</b> (macOS).</li>
              <li>Open the Command Menu: <b>Ctrl+Shift+P</b> (Windows) / <b>Cmd+Shift+P</b> (macOS).</li>
              <li>Type <code>screenshot</code> and pick one of:
                <ul>
                  <li><b>Capture full size screenshot</b> — entire scrollable page</li>
                  <li><b>Capture screenshot</b> — just the visible viewport</li>
                  <li><b>Capture node screenshot</b> — a single selected element</li>
                </ul>
              </li>
              <li>Chrome saves the PNG straight to your Downloads folder.</li>
            </ol>
          </div>

          <div className="card">
            <h2 style={{ marginTop: 0 }}>Full-Page Screenshot in Firefox</h2>
            <ol className="step-list">
              <li>Right-click anywhere on the page and choose <b>Take Screenshot</b>.</li>
              <li>Pick <b>Save full page</b> or <b>Save visible</b>.</li>
              <li>Click <b>Download</b> to save the PNG locally.</li>
            </ol>
            <div className="info-box">
              Firefox also supports a keyboard shortcut — enable it in <code>about:preferences</code> → Browsing
              if the screenshot command is not already bound.
            </div>
          </div>

          <div className="card">
            <h2 style={{ marginTop: 0 }}>Screenshot a Webpage on iPhone / iPad (Safari)</h2>
            <ol className="step-list">
              <li>Open the page in Safari.</li>
              <li>Press <b>Side Button + Volume Up</b> (newer iPhones) or <b>Home + Side</b> (older).</li>
              <li>Tap the preview in the bottom-left corner, then tap <b>Full Page</b>.</li>
              <li>Tap <b>Done</b> → <b>Save PDF to Files</b> for a full-page capture of the article.</li>
            </ol>
          </div>

          <div className="card">
            <h2 style={{ marginTop: 0 }}>Screenshot on Android (Chrome)</h2>
            <ol className="step-list">
              <li>Open Chrome and load the page.</li>
              <li>Tap the three-dot menu → <b>Share</b> → <b>Long Screenshot</b> (Android 12+).</li>
              <li>Drag the handles to select how much of the page to include.</li>
              <li>Tap <b>Save</b> — the full-page PNG is stored in Photos.</li>
            </ol>
          </div>

          <div className="card">
            <h2 style={{ marginTop: 0 }}>Prefer a One-Click Button?</h2>
            <p>
              Drag the <a href="/bookmarklets"><b>Screenshot bookmarklet</b></a> to your bookmarks bar. Click it on any
              page and it will use <code>html2canvas</code> to rasterize the DOM, then auto-download a PNG. Entirely
              client-side — no server sees your page.
            </p>
            <p>
              Want to share a live preview link instead? Use the <a href="/url-preview"><b>URL Preview Generator</b></a>
              to see how the page looks in search and social cards.
            </p>
          </div>

          <div className="prose">
            <h2>Use cases</h2>
            <ul>
              <li>Documentation — capture UI states for guides and tutorials.</li>
              <li>Bug reports — include a full-page screenshot so developers can reproduce the issue.</li>
              <li>Content archiving — preserve articles before they disappear.</li>
              <li>Portfolio screenshots — capture projects at high resolution without third-party software.</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
