import { ImageResponse } from "next/og"
import { siteConfig } from "@/site.config"

export const runtime = "edge"
export const alt = "CaptureKit — Screenshot any webpage, convert to PDF"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0C4A6E 0%, #0EA5E9 50%, #0C4A6E 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#F59E0B",
            marginBottom: 24,
          }}
        >
          {siteConfig.domain}
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            marginBottom: 28,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: 500,
            lineHeight: 1.25,
            color: "rgba(255,255,255,0.92)",
            maxWidth: 980,
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: 16,
            fontSize: 22,
            color: "rgba(255,255,255,0.82)",
          }}
        >
          <span>Screenshot</span>
          <span>·</span>
          <span>PDF</span>
          <span>·</span>
          <span>HTML render</span>
          <span>·</span>
          <span>URL preview</span>
          <span>·</span>
          <span>Bookmarklets</span>
        </div>
      </div>
    ),
    size,
  )
}
