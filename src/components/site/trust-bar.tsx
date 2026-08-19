import { HandCoins, PhoneCall, ShieldCheck } from "@phosphor-icons/react/dist/ssr"
import { Reveal } from "@/components/site/reveal"

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Unabhängige Beratung",
    body: "Ich vertrete Sie, nicht den Konzern. Jede Empfehlung passt zu Ihrer Situation, nicht zu einer Vertriebsquote.",
  },
  {
    icon: HandCoins,
    title: "Exklusiver ARAG-Partner",
    body: "Volle Produkttiefe eines der größten Rechtsschutzversicherer Europas, ohne Vergleichsportal-Umwege.",
  },
  {
    icon: PhoneCall,
    title: "Persönlich erreichbar",
    body: "Direkter Kontakt zu mir, ohne Callcenter oder Warteschleife, auch nach Vertragsabschluss.",
  },
]

export function TrustBar() {
  return (
    <section className="border-y border-border/70 bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 md:gap-8">
        {PILLARS.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 0.06}>
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <pillar.icon className="size-5 text-primary" weight="fill" />
              </span>
              <div>
                <h3 className="text-sm font-semibold">{pillar.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
