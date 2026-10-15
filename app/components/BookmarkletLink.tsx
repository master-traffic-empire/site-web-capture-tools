"use client"

// The drag-to-bookmarks-bar button. It needs onClick to swallow an accidental click on a
// `javascript:` href, and an event handler cannot be passed from a Server Component — that
// is what broke the prerender of /bookmarklets on 2026-10-15, the first time this repo was
// ever built from a clean tree. Isolating the handler here keeps the page itself SSR.
export function BookmarkletLink({ name, href }: { name: string; href: string }) {
  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a className="bookmarklet" href={href} draggable={true} onClick={(e) => e.preventDefault()}>
      {name}
    </a>
  )
}
