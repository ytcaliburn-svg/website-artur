import { Quotes } from "@phosphor-icons/react/dist/ssr"
import { Reveal } from "@/components/site/reveal"

/**
 * Placeholder quotes for layout purposes only.
 * Replace with real, consented customer reviews before this page goes live.
 */
const QUOTES = [
  {
    quote:
      "Endlich jemand, der mir in normalem Deutsch erklärt hat, welchen Rechtsschutz ich wirklich brauche.",
    name: "Sabine Krohn",
    role: "Kundin, Privatrechtsschutz",
  },
  {
    quote:
      "Die Kündigung meiner alten Zahnzusatzversicherung hat er komplett für mich übernommen.",
    name: "Torsten Albrecht",
    role: "Kunde, Zahnzusatzversicherung",
  },
  {
    quote:
      "Kein Verkaufsdruck, eine klare Empfehlung und schnelle Antworten auf jede Frage.",
    name: "Claudia Reinke",
    role: "Kundin, Hausratversicherung",
  },
]

export function Testimonials() {
  return (
    <section className="border-t border-border bg-primary/[0.05] dark:bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal>
          <h2 className="max-w-md text-4xl font-semibold tracking-tight md:text-5xl">
            Was Kunden zurückmelden
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {QUOTES.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.06}>
              <figure className="flex h-full flex-col rounded-3xl border border-border/70 bg-background p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/10">
                <Quotes className="size-7 text-primary" weight="fill" />
                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-foreground">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-medium text-foreground">
                    {item.name}
                  </span>
                  <span className="block text-muted-foreground">
                    {item.role}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
