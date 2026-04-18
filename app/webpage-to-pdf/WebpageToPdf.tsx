"use client"

import { useState } from "react"
import { ExternalLink, Printer } from "lucide-react"

export function WebpageToPdf() {
  const [url, setUrl] = useState("")
  const [error, setError] = useState("")

  const openForPrint = () => {
    setError("")
    let candidate = url.trim()
    if (!candidate) {
      setError("Please enter a URL first.")
      return
    }
    if (!/^https?:\/\//i.test(candidate)) {
      candidate = `https://${candidate}`
    }
    try {
      const parsed = new URL(candidate)
      const win = window.open(parsed.toString(), "_blank", "noopener,noreferrer")
      if (!win) {
        setError("Your browser blocked the popup. Allow popups and try again.")
        return
      }
      // Most sites block cross-origin .print() calls for security.
      // So we open the URL and prompt the user to press Ctrl/Cmd+P.
    } catch {
      setError("That does not look like a valid URL.")
    }
  }

  return (
    <div className="card">
      <div className="field">
        <label htmlFor="url-input">Webpage URL</label>
        <input
          id="url-input"
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com/article"
        />
      </div>
      {error && (
        <p style={{ color: "#B91C1C", margin: "0.5rem 0 1rem", fontSize: "0.9rem" }}>{error}</p>
      )}
      <div className="btn-row">
        <button className="btn btn-primary" onClick={openForPrint}>
          <ExternalLink size={16} /> Open in new tab
        </button>
      </div>
      <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", marginTop: "1rem" }}>
        After the page loads, press <b>Ctrl+P</b> (Windows) or <b>Cmd+P</b> (macOS) and choose{" "}
        <b>Save as PDF</b> as the destination.
      </p>

      <div className="info-box" style={{ marginTop: "1.5rem" }}>
        <Printer size={16} style={{ display: "inline", marginRight: 6, verticalAlign: -2 }} />
        Cross-origin browser policies prevent us from printing a third-party page for you. The
        browser must be in control of the print dialog for security reasons, which is why we open
        the URL in a new tab instead of embedding it.
      </div>
    </div>
  )
}
