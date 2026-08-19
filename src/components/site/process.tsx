import { ChatCircleText, PenNib, SlidersHorizontal } from "@phosphor-icons/react/dist/ssr"
import { Reveal } from "@/components/site/reveal"

const STEPS = [
  {
    index: "01",
    icon: ChatCircleText,
    title: "Bedarf klären",
    body: "Ein kurzes Gespräch, telefonisch oder vor Ort, über bestehende Verträge und tatsächliche Lücken.",
  },
  {
    index: "02",
    icon: SlidersHorizontal,
    title: "Optionen vergleichen",
    body: "Ich zeige die passenden ARAG-Tarife inklusive Kosten und Leistungen, ohne Fachchinesisch.",
  },
  {
    index: "03",
    icon: PenNib,
    title: "Vertrag abschließen",
    body: "Sie entscheiden. Ich kümmere mich um die Kündigung alter Verträge und die komplette Abwicklung.",
  },
]

export function Process() {
  return (
    <section id="ablauf" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <h2 className="max-w-md text-4xl font-semibold tracking-tight md:text-5xl">
          So läuft die Zusammenarbeit ab
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-6">
        {STEPS.map((step, i) => (
          <Reveal key={step.index} delay={i * 0.07}>
            <div className="relative">
              <span className="font-mono text-6xl font-bold leading-none tracking-tight text-primary/15">
                {step.index}
              </span>
              <step.icon className="mt-2 size-6 text-primary" />
              <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
