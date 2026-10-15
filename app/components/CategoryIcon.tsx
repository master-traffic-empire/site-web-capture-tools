// base-site/components/CategoryCard.tsx imports this path from every site, so a shared site
// must provide it even when it renders no category cards of its own (2026-10-15: its absence
// was the only thing standing between this repo and a build). Same shim as qr-tools et al.
export function CategoryIcon({ name, size = 24 }: { name: string; size?: number }) {
  return <span style={{ fontSize: size }}>{name}</span>
}
