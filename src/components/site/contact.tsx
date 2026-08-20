import Image from "next/image"
import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/dist/ssr"
import { ContactForm } from "@/components/site/contact-form"
import { Reveal } from "@/components/site/reveal"
import { siteConfig } from "@/lib/site-config"

export function Contact() {
  return (
    <section
      id="kontakt"
      className="border-t border-border bg-gradient-to-b from-primary/[0.09] to-transparent dark:from-primary/[0.06]"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Sprechen wir über Ihren Schutz
          </h2>
          <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-muted-foreground">
            Schreiben Sie kurz Ihr Anliegen. Ich melde mich persönlich
            zurück, meist innerhalb eines Werktags.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
            >
              <Phone className="size-5 text-primary" />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
            >
              <EnvelopeSimple className="size-5 text-primary" />
              {siteConfig.email}
            </a>
            <div className="flex items-center gap-3 text-sm text-foreground">
              <MapPin className="size-5 text-primary" />
              {siteConfig.addressLine1}, {siteConfig.addressLine2}
            </div>
          </div>

          <div className="relative mt-8 hidden aspect-[4/3] w-full max-w-sm overflow-hidden rounded-3xl sm:block">
            <Image
              src="/images/extra-telefonat.png"
              alt="Artur Butsch am Telefon"
              fill
              sizes="(min-width: 1024px) 30vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08} className="rounded-3xl border border-primary/15 bg-secondary/30 p-6 shadow-xl shadow-primary/10 sm:p-8">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
