"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Camera } from "lucide-react"
import { siteConfig } from "@/site.config"

const navLinks = [
  { href: "/screenshot", label: "Screenshot" },
  { href: "/webpage-to-pdf", label: "To PDF" },
  { href: "/html-to-image", label: "HTML→Image" },
  { href: "/html-to-pdf", label: "HTML→PDF" },
  { href: "/url-preview", label: "URL Preview" },
  { href: "/bookmarklets", label: "Bookmarklets" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="header-logo">
          <Camera size={20} />
          {siteConfig.name}
        </Link>
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`header-nav ${open ? "open" : ""}`}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
