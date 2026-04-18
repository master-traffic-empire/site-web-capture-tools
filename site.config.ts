// site.config.ts — CaptureKit browser capture tools
import type { SiteConfig } from "@base/types"

export const siteConfig: SiteConfig = {
  slug: "web-capture-tools",
  name: "CaptureKit",
  tagline: "Screenshot any webpage, convert to PDF — free browser tools",
  description:
    "Free web capture tools: screenshot any webpage, convert URLs to PDF, render HTML to image or PDF, preview URL metadata, and handy browser bookmarklets. All tools run in your browser — private and instant.",
  domain: "capture.thicket.sh",
  baseUrl: "https://capture.thicket.sh",
  category: "utility",

  primaryKeyword: "web capture tools",
  targetKeywords: [
    "web capture tools",
    "screenshot webpage online",
    "convert webpage to pdf",
    "html to image converter",
    "html to pdf online",
    "url preview generator",
    "browser bookmarklets",
    "webpage screenshot tool",
    "web page to pdf free",
    "capture website screenshot",
    "online web tools",
  ],
  twitterHandle: "",

  colors: {
    primary: "#0C4A6E",
    secondary: "#D97706",
    accent: "#F59E0B",
    surface: "#F0F9FF",
    surfaceDark: "#0C1929",
    text: "#0F172A",
    textMuted: "#475569",
    border: "#BAE6FD",
  },

  fonts: {
    display: "Inter",
    body: "Inter",
    mono: "JetBrains Mono",
  },

  gaMeasurementId: "G-E0CF8H2DGH",

  itemsPerPage: 24,
  featuredCount: 6,

  geo: {
    llmsTxtEnabled: true,
    llmsFullTxtEnabled: true,
    mdRoutesEnabled: true,
    structuredApiEnabled: true,
  },

  blog: {
    enabled: false,
    basePath: "/blog",
  },

  monetization: {
    adsenseEnabled: false,
    adsenseClientId: "",
    affiliateEnabled: false,
  },
}
