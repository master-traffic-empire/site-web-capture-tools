import type { Metadata } from "next"
import { siteConfig } from "@/site.config"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { BookmarkletLink } from "../components/BookmarkletLink"

export const metadata: Metadata = {
  title: "Browser Bookmarklets — One-Click Screenshot, PDF, and Page Tools",
  description:
    "Six free browser bookmarklets: screenshot (html2canvas), print to PDF, show page metadata, copy title+URL as Markdown, highlight all links, show viewport size. Drag to your bookmarks bar to install.",
  alternates: { canonical: `${siteConfig.baseUrl}/bookmarklets` },
  openGraph: {
    title: "Browser Bookmarklets | CaptureKit",
    description: "One-click tools you can drag to your bookmarks bar.",
    url: `${siteConfig.baseUrl}/bookmarklets`,
  },
}

// Each bookmarklet is a minified javascript: href. Keep them short + self-contained.
const screenshotBm = `javascript:(function(){var s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';s.onload=function(){html2canvas(document.body).then(function(c){var a=document.createElement('a');a.href=c.toDataURL('image/png');a.download='screenshot-'+Date.now()+'.png';a.click();});};document.body.appendChild(s);})();`

const printBm = `javascript:(function(){window.print();})();`

const pageInfoBm = `javascript:(function(){var m={title:document.title,url:location.href,ogTitle:(document.querySelector('meta[property=\\'og:title\\']')||{}).content||'',ogDesc:(document.querySelector('meta[property=\\'og:description\\']')||{}).content||'',ogImage:(document.querySelector('meta[property=\\'og:image\\']')||{}).content||'',canonical:(document.querySelector('link[rel=\\'canonical\\']')||{}).href||'',description:(document.querySelector('meta[name=\\'description\\']')||{}).content||''};var w=window.open('','_blank');w.document.write('<pre style=\\'font:14px/1.5 system-ui;padding:24px;\\'>'+Object.keys(m).map(function(k){return k+': '+(m[k]||'(none)');}).join('\\n')+'</pre>');w.document.close();})();`

const copyMdBm = `javascript:(function(){var t='['+document.title+']('+location.href+')';navigator.clipboard.writeText(t).then(function(){alert('Copied: '+t);});})();`

const highlightLinksBm = `javascript:(function(){var s=document.createElement('style');s.textContent='a{outline:2px solid #F59E0B!important;background:rgba(245,158,11,0.15)!important;}';document.head.appendChild(s);})();`

const viewportBm = `javascript:(function(){var d=document.createElement('div');d.textContent=window.innerWidth+' x '+window.innerHeight+' (DPR '+window.devicePixelRatio+')';d.style.cssText='position:fixed;z-index:99999;top:12px;right:12px;background:#0C4A6E;color:#fff;padding:8px 14px;border-radius:8px;font:14px system-ui;box-shadow:0 6px 18px rgba(0,0,0,0.25);';document.body.appendChild(d);setTimeout(function(){d.remove();},4000);})();`

const bookmarklets: { name: string; description: string; href: string }[] = [
  {
    name: "Screenshot (html2canvas)",
    description:
      "Click on any page to rasterize the full DOM to a PNG and download it instantly. Uses html2canvas loaded from a CDN.",
    href: screenshotBm,
  },
  {
    name: "Print to PDF",
    description:
      "Opens the browser print dialog on the current page. Choose \"Save as PDF\" as the destination.",
    href: printBm,
  },
  {
    name: "Show Page Info",
    description:
      "Opens a new tab with the page's title, canonical URL, description, and Open Graph tags — handy for SEO audits.",
    href: pageInfoBm,
  },
  {
    name: "Copy Title + URL as Markdown",
    description:
      "Copies \u00A0[Page title](https://example.com)\u00A0 to your clipboard. Great for note-taking apps and blog posts.",
    href: copyMdBm,
  },
  {
    name: "Highlight All Links",
    description:
      "Injects a CSS rule that outlines every link on the page so you can audit nav structure and hidden anchors.",
    href: highlightLinksBm,
  },
  {
    name: "Show Viewport Size",
    description:
      "Pops up a small overlay with the current viewport width, height, and devicePixelRatio — useful when testing responsive layouts.",
    href: viewportBm,
  },
]

export default function BookmarkletsPage() {
  return (
    <>
      <Header />
      <div className="page-header">
        <div className="container">
          <h1>Browser Bookmarklets</h1>
          <p>
            Six one-click tools you can install by dragging to your bookmarks bar. All JavaScript runs locally
            in your browser — nothing is sent to a server.
          </p>
        </div>
      </div>

      <div className="tool-page">
        <div className="container">
          <div className="info-box">
            <b>How to install:</b> make sure your bookmarks bar is visible ( <b>Ctrl+Shift+B</b> on Windows,{" "}
            <b>Cmd+Shift+B</b> on macOS), then <b>drag each orange button</b> onto the bar. Click it on any page
            to activate the bookmarklet.
          </div>

          <ul className="bookmarklet-list" style={{ marginTop: "1.5rem" }}>
            {bookmarklets.map((bm) => (
              <li key={bm.name} className="bookmarklet-item">
                <h3>{bm.name}</h3>
                <p>{bm.description}</p>
                <BookmarkletLink name={bm.name} href={bm.href} />
              </li>
            ))}
          </ul>

          <div className="prose" style={{ marginTop: "2rem" }}>
            <h2>Why bookmarklets?</h2>
            <p>
              Unlike browser extensions, bookmarklets require no install permission and cannot access other
              tabs, your history, or your cookies. Each one is a single <code>javascript:</code> URL stored as
              a favorite. You can see the source by right-clicking the button and picking <b>Edit</b>.
            </p>
            <h2>Use cases</h2>
            <ul>
              <li>Developer workflows — quickly inspect OG tags or viewport dimensions without DevTools.</li>
              <li>Content research — grab title + URL as Markdown and drop into a notes app.</li>
              <li>QA — print any page to PDF for archiving a bug reproduction.</li>
              <li>Visual debugging — highlight every link to review site nav structure.</li>
            </ul>
            <p>
              Prefer full tool pages? See <a href="/screenshot">Screenshot Webpage</a>,{" "}
              <a href="/webpage-to-pdf">Webpage to PDF</a>, and <a href="/url-preview">URL Preview</a>.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
