"use client"

import { useState } from "react"
import Link from "next/link"
import { List, X } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { LogoMark } from "@/components/site/logo-mark"
import { siteConfig } from "@/lib/site-config"

const LINKS = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#ueber-mich", label: "Über mich" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/#faq", label: "FAQ" },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark className="size-8" />
          <span className="text-sm font-semibold tracking-tight">
            Artur Butsch
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button size="sm" nativeButton={false} render={<Link href="/#kontakt" />}>
            {siteConfig.ctaLabel}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          className="flex size-9 items-center justify-center rounded-lg text-foreground transition-transform active:scale-95 lg:hidden"
        >
          {open ? <X className="size-5" /> : <List className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/70 px-4 pb-5 lg:hidden">
          <nav className="flex flex-col gap-1 pt-3">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button
            size="sm"
            className="mt-3 w-full"
            nativeButton={false}
            render={<Link href="/#kontakt" onClick={() => setOpen(false)} />}
          >
            {siteConfig.ctaLabel}
          </Button>
        </div>
      )}
    </header>
  )
}
