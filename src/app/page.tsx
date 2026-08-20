import { Nav } from "@/components/site/nav"
import { PageTransition } from "@/components/site/page-transition"
import { Hero } from "@/components/site/hero"
import { TrustBar } from "@/components/site/trust-bar"
import { Services } from "@/components/site/services"
import { About } from "@/components/site/about"
import { Process } from "@/components/site/process"
import { Testimonials } from "@/components/site/testimonials"
import { Faq } from "@/components/site/faq"
import { Contact } from "@/components/site/contact"
import { Footer } from "@/components/site/footer"

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageTransition>
          <Hero />
          <TrustBar />
          <Services />
          <About />
          <Process />
          <Testimonials />
          <Faq />
          <Contact />
        </PageTransition>
      </main>
      <Footer />
    </>
  )
}
