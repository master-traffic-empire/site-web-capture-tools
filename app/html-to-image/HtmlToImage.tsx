"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Download, RefreshCw } from "lucide-react"

const DEFAULT_HTML = `<div style="width:600px;padding:48px;font-family:system-ui,sans-serif;
  background:linear-gradient(135deg,#0C4A6E,#0EA5E9);color:#fff;border-radius:16px;">
  <h1 style="font-size:40px;margin:0 0 12px;">Social card</h1>
  <p style="font-size:20px;opacity:0.9;margin:0;">
    Paste your HTML/CSS and export as PNG.
  </p>
</div>`

export function HtmlToImage() {
  const [html, setHtml] = useState(DEFAULT_HTML)
  const [rendering, setRendering] = useState(false)
  const [status, setStatus] = useState("")
  const previewRef = useRef<HTMLDivElement>(null)

  // srcdoc for the sandboxed iframe preview
  const srcdoc = useMemo(
    () => `<!doctype html><html><head><meta charset="utf-8">
      <style>body{margin:0;font-family:system-ui,sans-serif;}</style>
    </head><body>${html}</body></html>`,
    [html],
  )

  const download = async () => {
    if (!previewRef.current) return
    setRendering(true)
    setStatus("")
    try {
      // Render an off-screen clone because html2canvas can't render an iframe.
      const host = document.createElement("div")
      host.style.position = "fixed"
      host.style.left = "-99999px"
      host.style.top = "0"
      host.innerHTML = html
      document.body.appendChild(host)

      const mod = await import("html2canvas")
      const html2canvas = mod.default
      const canvas = await html2canvas(host, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
      })
      document.body.removeChild(host)

      const link = document.createElement("a")
      link.download = `capturekit-${Date.now()}.png`
      link.href = canvas.toDataURL("image/png")
      link.click()
      setStatus("Downloaded.")
    } catch (err) {
      console.error(err)
      setStatus("Rendering failed. Check your HTML / external images.")
    } finally {
      setRendering(false)
    }
  }

  useEffect(() => {
    if (!status) return
    const id = setTimeout(() => setStatus(""), 3000)
    return () => clearTimeout(id)
  }, [status])

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
      <div className="card" style={{ margin: 0 }}>
        <div className="field">
          <label htmlFor="html-input">HTML / CSS</label>
          <textarea
            id="html-input"
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            spellCheck={false}
          />
        </div>
        <div className="btn-row">
          <button className="btn btn-primary" onClick={download} disabled={rendering}>
            <Download size={16} /> {rendering ? "Rendering…" : "Download PNG"}
          </button>
          <button className="btn btn-outline" onClick={() => setHtml(DEFAULT_HTML)}>
            <RefreshCw size={16} /> Reset
          </button>
        </div>
        {status && (
          <p style={{ marginTop: "0.75rem", fontSize: "0.88rem", color: "var(--color-text-muted)" }}>
            {status}
          </p>
        )}
      </div>
      <div className="card" style={{ margin: 0 }}>
        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.35rem" }}>
          Live preview
        </label>
        <div className="preview-pane" ref={previewRef} style={{ padding: 0 }}>
          <iframe
            title="preview"
            srcDoc={srcdoc}
            sandbox="allow-same-origin"
            style={{ border: 0, width: "100%", minHeight: 260 }}
          />
        </div>
        <p style={{ marginTop: "0.75rem", fontSize: "0.82rem", color: "var(--color-text-muted)" }}>
          The preview runs in a sandboxed iframe. Scripts are disabled for safety — only HTML / CSS renders.
        </p>
      </div>
    </div>
  )
}
