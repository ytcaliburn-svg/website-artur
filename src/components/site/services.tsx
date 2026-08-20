import { ViewTransition } from "react"
import Image from "next/image"
import Link from "next/link"
import { Reveal } from "@/components/site/reveal"
import { SERVICES } from "@/lib/services-data"
import { cn } from "@/lib/utils"

export function Services() {
  return (
    <section id="leistungen" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <h2 className="max-w-md text-4xl font-semibold tracking-tight md:text-5xl">
          ARAG-Versicherungen für Ihren Alltag
        </h2>
        <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-muted-foreground">
          Sechs Bausteine, mit denen sich die meisten privaten Risiken
          sinnvoll abdecken lassen. Klicken Sie auf einen Baustein für mehr
          Details, oder ich stelle Ihnen daraus das passende Paket zusammen.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-flow-dense grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <Reveal
            key={service.slug}
            delay={i * 0.05}
            className={cn(
              service.featured && "sm:col-span-2 lg:col-span-2 lg:row-span-2"
            )}
          >
            <Link
              href={`/leistungen/${service.slug}`}
              transitionTypes={["nav-forward"]}
              className={cn(
                "group relative flex h-full min-h-[19rem] flex-col justify-end overflow-hidden rounded-3xl transition-transform duration-300 ease-out hover:-translate-y-1",
                service.featured && "lg:min-h-full"
              )}
            >
              <ViewTransition name={`service-image-${service.slug}`}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes={
                    service.featured
                      ? "(min-width: 1024px) 60vw, 90vw"
                      : "(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 90vw"
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </ViewTransition>
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
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
