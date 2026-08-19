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
        Entwurf. Bitte die markierten Angaben ergänzen und vor
        Veröffentlichung rechtlich prüfen lassen (Pflichtangaben nach § 5
        TMG und § 11a Abs. 1 VersVermV).
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
            [Ladungsfähige Anschrift einfügen]
            <br />
            {siteConfig.addressLine1}, {siteConfig.addressLine2}
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">Kontakt</h2>
          <p className="mt-2">
            Telefon: {siteConfig.phoneDisplay}
            <br />
            E-Mail: {siteConfig.email}
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">
            Berufsbezeichnung und berufsrechtliche Angaben
          </h2>
          <p className="mt-2">
            Berufsbezeichnung: Versicherungsmakler (§ 34d Abs. 1 GewO),
            verliehen in der Bundesrepublik Deutschland.
          </p>
          <p className="mt-2">
            Zuständige Aufsichtsbehörde: [Zuständige IHK einfügen]
          </p>
          <p className="mt-2">
            Eintragung im Versicherungsvermittlerregister unter der
            Registrierungsnummer [Registrierungsnummer einfügen],
            prüfbar unter{" "}
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
