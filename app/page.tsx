import { siteConfig } from "@/site.config"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { ToolGrid } from "./components/ToolGrid"
import { Zap, Lock, Globe, Wrench, UserX, ShieldCheck } from "lucide-react"

export default function Home() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="container">
          <h1>{siteConfig.name}</h1>
          <p className="tagline">{siteConfig.tagline}</p>
          <p className="subtitle">
            6 free web capture tools. Screenshot webpages, convert to PDF, render HTML — all in your browser.
          </p>
        </div>
      </section>

      <div className="trust-bar">
        <span className="trust-bar-item"><Wrench size={16} /> 6 Free Tools</span>
        <span className="trust-bar-item"><UserX size={16} /> No Uploads to Server</span>
        <span className="trust-bar-item"><ShieldCheck size={16} /> Works Instantly</span>
        <span className="trust-bar-item"><Globe size={16} /> Any Website</span>
      </div>

      <section className="section">
        <div className="container">
          <h2>All Tools</h2>
          <p className="section-intro">
            Capture the web — screenshots, PDFs, HTML rendering, and link previews.
          </p>
          <ToolGrid />
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="container">
          <h2>Why {siteConfig.name}?</h2>
          <div className="feature-grid" style={{ marginTop: "1.5rem" }}>
            <div className="feature-card">
              <Lock size={22} className="feature-icon" />
              <div>
                <h3>Privacy-First</h3>
                <p>Most tools run entirely in your browser using native APIs. Your URLs and content never leave your device.</p>
              </div>
            </div>
            <div className="feature-card">
              <Zap size={22} className="feature-icon" />
              <div>
                <h3>No Setup Required</h3>
                <p>No account, no software install, no browser extension needed. Open any tool and start using it in seconds.</p>
              </div>
            </div>
            <div className="feature-card">
              <Globe size={22} className="feature-icon" />
              <div>
                <h3>Works on Any Site</h3>
                <p>Screenshot or PDF any public webpage, or render your own HTML/CSS. Built for developers, marketers, and content creators.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
