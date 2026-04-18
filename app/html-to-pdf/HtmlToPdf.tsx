"use client"

import { useMemo, useState } from "react"
import { Printer, RefreshCw } from "lucide-react"

const DEFAULT_HTML = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Invoice #1042</title>
  <style>
    body { font-family: system-ui, sans-serif; padding: 48px; color: #111; }
    h1 { color: #0C4A6E; margin: 0 0 8px; }
    table { width: 100%; border-collapse: collapse; margin-top: 32px; }
    th, td { padding: 10px 8px; border-bottom: 1px solid #e5e7eb; text-align: left; }
    th { background: #F0F9FF; color: #0C4A6E; font-size: 12px; text-transform: uppercase; }
    @media print { body { padding: 24px; } }
  </style>
</head>
<body>
  <h1>Invoice #1042</h1>
  <p>Issued March 29, 2026 · Due April 12, 2026</p>
  <table>
    <thead><tr><th>Item</th><th>Qty</th><th>Price</th></tr></thead>
    <tbody>
      <tr><td>CaptureKit subscription</td><td>1</td><td>$0.00</td></tr>
      <tr><td>Coffee</td><td>12</td><td>$48.00</td></tr>
    </tbody>
  </table>
</body>
</html>`

export function HtmlToPdf() {
  const [html, setHtml] = useState(DEFAULT_HTML)
  const [status, setStatus] = useState("")

  const srcdoc = useMemo(() => html, [html])

  const openAndPrint = () => {
    setStatus("")
    try {
      const win = window.open("", "_blank", "noopener,noreferrer,width=900,height=1000")
      if (!win) {
        setStatus("Popup was blocked. Allow popups and try again.")
        return
      }
      win.document.open()
      win.document.write(html)
      win.document.close()
      // Give the browser a tick to render fonts/images
      setTimeout(() => {
        try {
          win.focus()
          win.print()
        } catch {
          /* user cancelled */
        }
      }, 350)
    } catch (err) {
      console.error(err)
      setStatus("Something went wrong — check your HTML.")
    }
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
      <div className="card" style={{ margin: 0 }}>
        <div className="field">
          <label htmlFor="html-input">HTML document</label>
          <textarea
            id="html-input"
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            spellCheck={false}
            style={{ minHeight: 320 }}
          />
        </div>
        <div className="btn-row">
          <button className="btn btn-primary" onClick={openAndPrint}>
            <Printer size={16} /> Open & print to PDF
          </button>
          <button className="btn btn-outline" onClick={() => setHtml(DEFAULT_HTML)}>
            <RefreshCw size={16} /> Reset
          </button>
        </div>
        {status && (
          <p style={{ marginTop: "0.75rem", fontSize: "0.88rem", color: "#B91C1C" }}>{status}</p>
        )}
      </div>
      <div className="card" style={{ margin: 0 }}>
        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.35rem" }}>
          Live preview
        </label>
        <div className="preview-pane" style={{ padding: 0 }}>
          <iframe
            title="preview"
            srcDoc={srcdoc}
            sandbox="allow-same-origin"
            style={{ border: 0, width: "100%", minHeight: 420 }}
          />
        </div>
        <p style={{ marginTop: "0.75rem", fontSize: "0.82rem", color: "var(--color-text-muted)" }}>
          The preview is a sandboxed iframe. When you click <b>Open &amp; print to PDF</b>, the same HTML opens in a
          new tab and the browser&apos;s print dialog appears.
        </p>
      </div>
    </div>
  )
}
