import type { Metadata } from "next"
import { Nav } from "@/components/site/nav"
import { Footer } from "@/components/site/footer"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `Impressum | ${siteConfig.name}`,
}

export default function ImpressumPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl flex-1 px-4 py-20 sm:px-6">
      <p className="mb-8 text-sm text-muted-foreground">
        Bitte vor Veröffentlichung von einem Anwalt oder Steuerberater
        prüfen lassen, insbesondere ob eine USt-IdNr. anzugeben ist und ob
        die Angaben zum Verantwortlichen der ARAG-Geschäftsstelle korrekt
        zugeordnet sind.
      </p>

      <h1 className="text-3xl font-semibold tracking-tight">Impressum</h1>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-base font-semibold text-foreground">
            Angaben gemäß § 5 TMG
          </h2>
          <p className="mt-2">
            {siteConfig.name}
            <br />
            {siteConfig.officeName}
            <br />
            {siteConfig.addressLine1}
            <br />
            {siteConfig.addressLine2}
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">Kontakt</h2>
          <p className="mt-2">
            Mobil: {siteConfig.phoneDisplay}
            <br />
            Telefon: {siteConfig.landlineDisplay}
            <br />
            Fax: {siteConfig.faxDisplay}
            <br />
            E-Mail: {siteConfig.email}
            <br />
            Web:{" "}
            <a
              href={siteConfig.website}
              className="underline underline-offset-3 hover:text-foreground"
            >
              {siteConfig.website}
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">
            Berufsbezeichnung und berufsrechtliche Angaben
          </h2>
          <p className="mt-2">
            Berufsbezeichnung: {siteConfig.legalStatus}, verliehen in der
            Bundesrepublik Deutschland.
          </p>
          <p className="mt-2">
            Zuständige Aufsichtsbehörde: DIHK | Deutsche Industrie- und
            Handelskammer, Breite Straße 29, 10178 Berlin, Telefon 0 180 6
            00 58 50 (20 Cent/Min. aus dem deutschen Festnetz, höchstens 60
            Cent/Min. aus Mobilfunknetzen).
          </p>
          <p className="mt-2">
            Eintragung im Versicherungsvermittlerregister unter der
            Registrierungsnummer {siteConfig.ihkRegisterNumber}, prüfbar
            unter{" "}
            <a
              href="https://www.vermittlerregister.info"
              className="underline underline-offset-3 hover:text-foreground"
            >
              www.vermittlerregister.info
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">
            Umsatzsteuer-Identifikationsnummer
          </h2>
          <p className="mt-2">
            [USt-IdNr. gemäß § 27a UStG einfügen, falls vorhanden]
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p className="mt-2">
            {siteConfig.name}, Anschrift wie oben.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">
            Schlichtungsstelle
          </h2>
          <p className="mt-2">
            Versicherungsombudsmann e.V., Postfach 08 06 32, 10006 Berlin
            <br />
            Telefon: 0 18 04 22 44 24, Fax: 0 18 04 22 44 25 (höchstens 60
            Cent/Min. aus Mobilfunknetzen)
            <br />
            E-Mail:{" "}
            <a
              href="mailto:beschwerde@versicherungsombudsmann.de"
              className="underline underline-offset-3 hover:text-foreground"
            >
              beschwerde@versicherungsombudsmann.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">
            EU-Streitschlichtung
          </h2>
          <p className="mt-2">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              className="underline underline-offset-3 hover:text-foreground"
            >
              ec.europa.eu/consumers/odr
            </a>
            . Wir sind nicht verpflichtet und nicht bereit, an einem
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>
      </div>
      </main>
      <Footer />
    </>
  )
}
