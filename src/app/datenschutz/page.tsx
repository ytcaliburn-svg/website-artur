import type { Metadata } from "next"
import { Nav } from "@/components/site/nav"
import { Footer } from "@/components/site/footer"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `Datenschutz | ${siteConfig.name}`,
}

export default function DatenschutzPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl flex-1 px-4 py-20 sm:px-6">
      <p className="mb-8 text-sm text-muted-foreground">
        Entwurf auf Basis eines allgemeinen DSGVO-Musters. Bitte die
        markierten Angaben ergänzen und vor Veröffentlichung von einem
        Datenschutzbeauftragten oder Anwalt prüfen lassen, insbesondere im
        Hinblick auf die Verarbeitung von Gesundheits- und Vertragsdaten als
        Versicherungsmakler.
      </p>

      <h1 className="text-3xl font-semibold tracking-tight">
        Datenschutzerklärung
      </h1>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-base font-semibold text-foreground">
            1. Verantwortlicher
          </h2>
          <p className="mt-2">
            {siteConfig.name}
            <br />
            [Ladungsfähige Anschrift einfügen]
            <br />
            E-Mail: {siteConfig.email}
            <br />
            Telefon: {siteConfig.phoneDisplay}
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">
            2. Kontaktformular
          </h2>
          <p className="mt-2">
            Wenn Sie das Kontaktformular nutzen, verarbeiten wir die von
            Ihnen angegebenen Daten (Name, E-Mail-Adresse, optional
            Telefonnummer, Nachricht) ausschließlich zur Bearbeitung Ihrer
            Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
            (vorvertragliche Maßnahme) sowie, soweit Sie das Kontrollkästchen
            aktiviert haben, Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Die
            Daten werden gelöscht, sobald sie für die Bearbeitung Ihrer
            Anfrage nicht mehr erforderlich sind.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">
            3. Hosting
          </h2>
          <p className="mt-2">
            [Hosting-Anbieter, Serverstandort und ggf. Auftragsverarbeiter
            einfügen, sobald die Seite live geschaltet wird.]
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">
            4. Cookies und Analyse-Tools
          </h2>
          <p className="mt-2">
            Diese Website setzt aktuell keine Analyse- oder
            Marketing-Cookies ein. Sollten künftig Tools wie Webanalyse
            hinzukommen, wird diese Erklärung entsprechend ergänzt und, wo
            erforderlich, eine Einwilligung eingeholt.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">
            5. Ihre Rechte
          </h2>
          <p className="mt-2">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
            Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
            sowie ein Recht auf Datenübertragbarkeit und Widerspruch.
            Erteilte Einwilligungen können Sie jederzeit mit Wirkung für die
            Zukunft widerrufen. Zudem steht Ihnen ein Beschwerderecht bei
            der zuständigen Datenschutzaufsichtsbehörde zu.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">
            6. Datenverarbeitung im Rahmen der Versicherungsvermittlung
          </h2>
          <p className="mt-2">
            Kommt es im Rahmen der Beratung zu einer Vermittlung von
            ARAG-Versicherungsprodukten, verarbeiten wir die dafür
            erforderlichen Vertrags- und gegebenenfalls Gesundheitsdaten im
            Rahmen der gesetzlichen Vorgaben für Versicherungsmakler.
            [Details zur Datenweitergabe an die ARAG als Risikoträger und
            zur Rechtsgrundlage nach Art. 9 DSGVO ergänzen.]
          </p>
        </section>
      </div>
      </main>
      <Footer />
    </>
  )
}
