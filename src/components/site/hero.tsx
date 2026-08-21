"use client"

import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { ArrowRight, ShieldCheck } from "@phosphor-icons/react"
import { AiImageTag } from "@/components/site/ai-image-tag"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

const EASE_OUT = [0.23, 1, 0.32, 1] as const

export function Hero() {
  const reduce = useReducedMotion()
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 40])

  return (
    <section id="top" className="overflow-hidden pt-10 sm:pt-16 lg:pt-20">
      <div
        ref={sectionRef}
        className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24"
      >
        <div>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="text-5xl leading-[1.05] font-semibold tracking-tight text-balance md:text-6xl lg:text-7xl"
          >
            Schutz für <em className="italic text-primary">Ihr</em> Leben.
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASE_OUT }}
            className="mt-5 max-w-[46ch] text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Als ARAG-Vertriebspartner berate ich Sie persönlich zu
            Rechtsschutz, Kranken- und Zahnzusatz, Unfall und Haftpflicht,
            ganz ohne Fachchinesisch.
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: EASE_OUT }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button
              size="lg"
              className="h-11 px-6 text-[0.95rem]"
              nativeButton={false}
              render={<Link href="/#kontakt" />}
            >
              {siteConfig.ctaLabel}
              <ArrowRight className="size-4" data-icon="inline-end" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 px-6 text-[0.95rem]"
              nativeButton={false}
              render={<Link href="/#leistungen" />}
            >
              Leistungen ansehen
            </Button>
          </motion.div>
        </div>

        <motion.div
          style={{ y: parallaxY }}
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT }}
          className="relative"
        >
          {/* soft decorative accent behind the photo, on-brand blue, not a neon glow */}
          <motion.div
            aria-hidden
            initial={reduce ? false : { opacity: 0, scale: 0.85 }}
            animate={
              reduce
                ? { opacity: 1, scale: 1 }
                : { opacity: 1, scale: [1, 1.06, 1] }
            }
            transition={
              reduce
                ? { duration: 0.9, ease: EASE_OUT }
                : {
                    opacity: { duration: 0.9, ease: EASE_OUT },
                    scale: {
                      duration: 6,
                      delay: 0.9,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }
            }
            className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-primary/15 blur-2xl"
          />

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-muted lg:aspect-[3/4]">
            <Image
              src="/images/hero-beratung.png"
              alt="Artur Butsch im Beratungsgespräch mit einer Kundin"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <AiImageTag className="right-3 top-3" />
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={
              reduce
                ? { opacity: 1, y: 0 }
                : { opacity: 1, y: [0, -8, 0] }
            }
            transition={
              reduce
                ? { duration: 0.5, delay: 0.5, ease: EASE_OUT }
                : {
                    opacity: { duration: 0.5, delay: 0.5, ease: EASE_OUT },
                    y: {
                      duration: 4,
                      delay: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }
            }
            className="absolute -bottom-5 left-5 flex items-center gap-2.5 rounded-2xl border border-border/70 bg-background/90 px-4 py-3 shadow-lg shadow-foreground/10 backdrop-blur-md sm:left-8"
          >
            <ShieldCheck className="size-5 shrink-0 text-primary" weight="fill" />
            <span className="text-sm font-medium">Exklusiver ARAG-Partner</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
