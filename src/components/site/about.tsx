import Image from "next/image"
import { Reveal } from "@/components/site/reveal"

export function About() {
  return (
    <section id="ueber-mich" className="border-t border-border/70 bg-secondary/30">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-muted lg:order-2">
          <Image
            src="/images/about-portrait.png"
            alt="Portrait von Artur Butsch"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={0.08} className="lg:order-1">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Konzentriert auf einen Versicherer, den ich wirklich kenne
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Die meisten Makler vertreten ein Dutzend Gesellschaften und
              kennen keine davon wirklich im Detail. Ich habe mich bewusst
              für die andere Richtung entschieden: ausschließlich ARAG,
              dafür mit voller Tiefe.
            </p>
            <p>
              Das heißt, ich kenne die Tarife, die Ausschlüsse und die
              Nachlassmöglichkeiten und kann Ihnen ehrlich sagen, was zu
              Ihrer Situation passt, auch wenn die Antwort manchmal
              „kein zusätzlicher Vertrag&rdquo; lautet.
            </p>
          </div>
          <p className="mt-6 text-sm font-medium text-foreground">
            Artur Butsch
          </p>
          <p className="text-sm text-muted-foreground">
            Eingetragener Versicherungsmakler, §34d GewO
          </p>
        </Reveal>
      </div>
    </section>
  )
}
