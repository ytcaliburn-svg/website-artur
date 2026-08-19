import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/site/reveal"

const FAQS = [
  {
    q: "Kostet die Beratung etwas?",
    a: "Nein. Meine Vergütung erfolgt über die ARAG, nicht über Sie. Die Beratung ist für Sie kostenfrei und unverbindlich.",
  },
  {
    q: "Warum arbeiten Sie nur mit einem Versicherer zusammen?",
    a: "Weil ich die ARAG-Produkte dadurch besser kenne als jeder Generalist. Passt ARAG nicht zu Ihrer Situation, sage ich Ihnen das ehrlich.",
  },
  {
    q: "Was passiert mit meinem alten Vertrag?",
    a: "Ich übernehme die Kündigung und den Wechsel für Sie, damit während des Wechsels keine Deckungslücke entsteht.",
  },
  {
    q: "Bin ich an einen Vertrag mit Ihnen gebunden?",
    a: "Nein. Sie können die Maklervollmacht jederzeit formlos widerrufen.",
  },
  {
    q: "Wie schnell bekomme ich eine Antwort?",
    a: "In der Regel innerhalb eines Werktags, telefonisch oder per E-Mail.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <h2 className="max-w-md text-4xl font-semibold tracking-tight md:text-5xl">
          Häufige Fragen
        </h2>
      </Reveal>

      <Reveal delay={0.08} className="mt-10 max-w-2xl">
        <Accordion>
          {FAQS.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger className="text-base">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  )
}
