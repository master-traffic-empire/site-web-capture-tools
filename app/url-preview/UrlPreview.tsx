"use client"

import { useState } from "react"
import { Search } from "lucide-react"

type Meta = {
  title: string
  description: string
  image: string
  logo: string
  publisher: string
  url: string
}

type MicrolinkResponse = {
  status: "success" | "fail"
  data?: Meta
}

export function UrlPreview() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [meta, setMeta] = useState<Meta | null>(null)

  const fetchPreview = async () => {
    setError("")
    setMeta(null)
    let candidate = url.trim()
    if (!candidate) {
      setError("Enter a URL to preview.")
      return
    }
    if (!/^https?:\/\//i.test(candidate)) candidate = `https://${candidate}`
    setLoading(true)
    try {
      const res = await fetch(
        `https://api.microlink.io/?url=${encodeURIComponent(candidate)}`,
      )
      const json = (await res.json()) as MicrolinkResponse
      if (json.status !== "success" || !json.data) {
        setError("Could not fetch metadata for that URL.")
        return
      }
      setMeta(json.data)
    } catch {
      setError("Network error — please try again.")
    } finally {
      setLoading(false)
    }
  }

  const host = (() => {
    try {
      return new URL(meta?.url ?? url).hostname
    } catch {
      return ""
    }
  })()

  return (
    <>
      <div className="card">
        <div className="field">
          <label htmlFor="url-input">URL to preview</label>
          <input
            id="url-input"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/article"
          />
        </div>
        <div className="btn-row">
          <button className="btn btn-primary" onClick={fetchPreview} disabled={loading}>
            <Search size={16} /> {loading ? "Fetching…" : "Preview"}
          </button>
        </div>
        {error && (
          <p style={{ color: "#B91C1C", marginTop: "0.75rem", fontSize: "0.9rem" }}>{error}</p>
        )}
        <p style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", marginTop: "1rem" }}>
          Metadata is fetched client-side via the <a href="https://microlink.io">Microlink</a> public API. The
          URL you enter is sent to their servers. See the <a href="/privacy">privacy page</a> for details.
        </p>
      </div>

      {meta && (
        <>
          <h2 style={{ marginTop: "2rem" }}>Google search preview</h2>
          <div
            style={{
              background: "#fff",
              border: "1px solid var(--color-border)",
              borderRadius: 8,
              padding: "1.25rem 1.5rem",
              margin: "0.75rem 0 1.5rem",
              fontFamily: "arial, sans-serif",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#202124" }}>
              {meta.logo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={meta.logo} alt="" style={{ width: 18, height: 18, borderRadius: 4 }} />
              )}
              <span>{meta.publisher || host}</span>
              <span style={{ color: "#5f6368" }}>· {meta.url || url}</span>
            </div>
            <a
              href={meta.url || url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", color: "#1a0dab", fontSize: 20, marginTop: 4, textDecoration: "none" }}
            >
              {meta.title || "(no title)"}
            </a>
            <p style={{ color: "#4d5156", fontSize: 14, margin: "4px 0 0", lineHeight: 1.5 }}>
              {meta.description || "(no description)"}
            </p>
          </div>

          <h2>Social card (Twitter / LinkedIn / Facebook)</h2>
          <div
            style={{
              background: "#fff",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              overflow: "hidden",
              margin: "0.75rem 0 1.5rem",
              maxWidth: 560,
            }}
          >
            {meta.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={meta.image}
                alt=""
                style={{ display: "block", width: "100%", height: 280, objectFit: "cover" }}
              />
            )}
            <div style={{ padding: "0.9rem 1rem" }}>
              <div style={{ fontSize: 12, color: "#64748B", textTransform: "uppercase" }}>{host}</div>
              <div style={{ fontWeight: 600, color: "#0F172A", margin: "0.15rem 0" }}>
                {meta.title || "(no title)"}
              </div>
              <div style={{ fontSize: 13, color: "#475569" }}>
                {meta.description || "(no description)"}
              </div>
            </div>
          </div>

          <h2>Raw OG tags</h2>
          <pre
            style={{
              background: "#0C1929",
              color: "#e2e8f0",
              padding: "1rem",
              borderRadius: 8,
              overflowX: "auto",
              fontSize: 13,
            }}
          >
{JSON.stringify(meta, null, 2)}
          </pre>
        </>
      )}
    </>
  )
}
