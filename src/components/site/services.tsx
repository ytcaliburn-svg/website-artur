import Image from "next/image"
import {
  Bandaids,
  House,
  PawPrint,
  Scales,
  Tooth,
  Umbrella,
} from "@phosphor-icons/react/dist/ssr"
import { Reveal } from "@/components/site/reveal"
import { cn } from "@/lib/utils"

type Service = {
  icon: typeof Scales
  title: string
  body: string
  image?: string
  imageAlt?: string
  tint?: boolean
  featured?: boolean
}

const SERVICES: Service[] = [
  {
    icon: Scales,
    title: "Rechtsschutz",
    body: "Recht bekommen, wenn es zählt: privat, beruflich, im Verkehr oder als Mieter, europaweit ohne Deckungsgrenze.",
    image: "/images/leistungen-rechtsschutz.png",
    imageAlt: "Familie vor ihrem Haus, im Gespräch mit Artur Butsch",
    featured: true,
  },
  {
    icon: Tooth,
    title: "Zahnzusatz",
    body: "Schließt Lücken der gesetzlichen Kasse bei Zahnersatz, Kieferorthopädie und professioneller Zahnreinigung.",
    image: "/images/leistungen-zahnzusatz.png",
    imageAlt: "Artur Butsch lächelt selbstbewusst in die Kamera",
  },
  {
    icon: House,
    title: "Hausrat",
    body: "Bewahrt Möbel, Elektronik und persönliche Gegenstände vor Feuer, Einbruch und Leitungswasser.",
    image: "/images/leistungen-hausrat.png",
    imageAlt: "Artur Butsch vor einem modernen Wohnhaus",
  },
  {
    icon: Bandaids,
    title: "Unfall",
    body: "Finanzielle Absicherung bei Unfällen im Alltag, Beruf und Freizeit, rund um die Uhr.",
    image: "/images/leistungen-unfall.png",
    imageAlt: "Artur Butsch im persönlichen Gespräch mit einer älteren Dame",
  },
  {
    icon: Umbrella,
    title: "Haftpflicht",
    body: "Schützt Sie, wenn Sie versehentlich anderen einen Schaden zufügen, privat und beruflich.",
    image: "/images/leistungen-haftpflicht.png",
    imageAlt: "Artur Butsch hält schützend einen Regenschirm über eine Familie",
  },
  {
    icon: PawPrint,
    title: "Tier",
    body: "Deckt OP- und Behandlungskosten für Hund und Katze ab, wenn es beim Tierarzt teuer wird.",
    image: "/images/leistungen-tier.png",
    imageAlt: "Artur Butsch mit Hund und Katze",
  },
]

export function Services() {
  return (
    <section id="leistungen" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <h2 className="max-w-md text-4xl font-semibold tracking-tight md:text-5xl">
          ARAG-Versicherungen für Ihren Alltag
        </h2>
        <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-muted-foreground">
          Sechs Bausteine, mit denen sich die meisten privaten Risiken
          sinnvoll abdecken lassen. Ich stelle Ihnen daraus das passende
          Paket zusammen.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-flow-dense grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) =>
          service.image ? (
            <Reveal
              key={service.title}
              delay={i * 0.05}
              className={cn(
                service.featured && "sm:col-span-2 lg:col-span-2 lg:row-span-2"
              )}
            >
              <div
                className={cn(
                  "group relative flex h-full min-h-[19rem] flex-col justify-end overflow-hidden rounded-3xl transition-transform duration-300 ease-out hover:-translate-y-1",
                  service.featured && "lg:min-h-full"
                )}
              >
                <Image
                  src={service.image}
                  alt={service.imageAlt ?? service.title}
                  fill
                  sizes={
                    service.featured
                      ? "(min-width: 1024px) 60vw, 90vw"
                      : "(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 90vw"
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                <div className="relative p-6">
                  <service.icon
                    className={cn("text-white/90", service.featured ? "size-8" : "size-6")}
                  />
                  <h3
                    className={cn(
                      "mt-3 font-semibold text-white",
                      service.featured ? "text-2xl" : "text-lg"
                    )}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 leading-relaxed text-white/80",
                      service.featured ? "max-w-[46ch] text-base" : "max-w-[34ch] text-sm"
                    )}
                  >
                    {service.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ) : (
            <Reveal key={service.title} delay={i * 0.05}>
              <div
                className={cn(
                  "flex h-full min-h-[19rem] flex-col justify-center rounded-3xl border border-border/70 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/10",
                  service.tint && "border-primary/10 bg-primary/[0.06]"
                )}
              >
                <service.icon className="size-6 text-primary" />
                <h3 className="mt-3 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.body}
                </p>
              </div>
            </Reveal>
          )
        )}
      </div>
    </section>
  )
}
