import Link from "next/link"
import { LogoMark } from "@/components/site/logo-mark"
import { siteConfig } from "@/lib/site-config"

const NAV_LINKS = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#ueber-mich", label: "Über mich" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#kontakt", label: "Kontakt" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <LogoMark className="size-8" />
              <span className="text-sm font-semibold tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Unabhängiger Versicherungsmakler, ausschließlich für
              ARAG-Produkte.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            <Link
              href="/impressum"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Datenschutz
            </Link>
          </nav>
        </div>

        <p className="mt-10 border-t border-border/70 pt-6 text-xs text-muted-foreground">
          © {year} {siteConfig.name}. Vermittlung ausschließlich für
          ARAG-Produkte gemäß § 34d Abs. 1 GewO.
        </p>
      </div>
    </footer>
  )
}
