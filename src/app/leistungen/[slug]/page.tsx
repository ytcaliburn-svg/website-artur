import { ViewTransition } from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle, Info } from "@phosphor-icons/react/dist/ssr"
import { Nav } from "@/components/site/nav"
import { Footer } from "@/components/site/footer"
import { PageTransition } from "@/components/site/page-transition"
import { Reveal } from "@/components/site/reveal"
import { Button } from "@/components/ui/button"
import { SERVICES, getService } from "@/lib/services-data"
import { siteConfig } from "@/lib/site-config"

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}

  const title = `${service.title}versicherung in Göttingen | ${siteConfig.name}`
  return {
    title,
    description: service.intro,
    openGraph: { title, description: service.intro },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageTransition>
        <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-16">
          <Link
            href="/#leistungen"
            transitionTypes={["nav-back"]}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Zurück zu allen Leistungen
          </Link>

          <div className="mt-8 grid items-center gap-12 pb-16 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div>
              <service.icon className="size-8 text-primary" weight="fill" />
              <h1 className="mt-4 text-4xl leading-[1.05] font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-muted-foreground md:text-lg">
                {service.intro}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  size="lg"
                  className="h-11 px-6 text-[0.95rem]"
                  nativeButton={false}
                  render={<Link href="/#kontakt" />}
                >
                  {siteConfig.ctaLabel}
                  <ArrowRight className="size-4" data-icon="inline-end" />
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-muted lg:aspect-[3/4]">
              <ViewTransition name={`service-image-${service.slug}`}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </ViewTransition>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-primary/[0.05] dark:bg-secondary/30">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Was abgedeckt ist
              </h2>
              <ul className="mt-6 space-y-4">
                {service.coverage.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-5 shrink-0 text-primary" weight="fill" />
                    <span className="text-base leading-relaxed text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-primary/15 bg-background p-6 sm:p-8">
                <Info className="size-6 text-primary" weight="fill" />
                <h2 className="mt-3 text-lg font-semibold">Gut zu wissen</h2>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {service.goodToKnow}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Andere Leistungen
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {otherServices.map((other, i) => (
              <Reveal key={other.slug} delay={i * 0.05}>
                <Link
                  href={`/leistungen/${other.slug}`}
                  transitionTypes={["nav-forward"]}
                  className="group relative flex h-48 flex-col justify-end overflow-hidden rounded-3xl transition-transform duration-300 ease-out hover:-translate-y-1"
                >
                  <ViewTransition name={`service-image-${other.slug}`}>
                    <Image
                      src={other.image}
                      alt={other.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 32vw, 90vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </ViewTransition>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  <div className="relative p-5">
                    <h3 className="text-base font-semibold text-white">{other.title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
        </PageTransition>
      </main>
      <Footer />
    </>
  )
}
