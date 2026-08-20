import type { Icon } from "@phosphor-icons/react"
import {
  Bandaids,
  House,
  PawPrint,
  Scales,
  Tooth,
  Umbrella,
} from "@phosphor-icons/react/dist/ssr"

export type Service = {
  slug: string
  icon: Icon
  title: string
  body: string
  image: string
  imageAlt: string
  featured?: boolean
  intro: string
  coverage: string[]
  goodToKnow: string
}

export const SERVICES: Service[] = [
  {
    slug: "rechtsschutz",
    icon: Scales,
    title: "Rechtsschutz",
    body: "Recht bekommen, wenn es zählt: privat, beruflich, im Verkehr oder als Mieter, europaweit ohne Deckungsgrenze.",
    image: "/images/leistungen-rechtsschutz.png",
    imageAlt: "Familie vor ihrem Haus, im Gespräch mit Artur Butsch",
    featured: true,
    intro:
      "Ein Rechtsstreit kommt selten angekündigt: Ärger mit dem Vermieter, ein Streit nach einem Verkehrsunfall, eine ungerechtfertigte Kündigung. Die Rechtsschutzversicherung übernimmt die Kosten für Anwalt, Gericht und Gutachten, damit Sie sich wehren können, ohne selbst in Vorleistung zu gehen.",
    coverage: [
      "Privat-Rechtsschutz für Streitigkeiten im Alltag",
      "Verkehrs-Rechtsschutz für alle Wege, ob als Fahrer, Mitfahrer oder Fußgänger",
      "Wohnungs- und Mietrechtsschutz für Mieter und Vermieter",
      "Berufs- und Arbeitsrechtsschutz, etwa bei Kündigungsschutzklagen",
      "ARAG JuraCheck: Verträge und Dokumente online von Fachanwälten prüfen lassen",
    ],
    goodToKnow:
      "Nach Vertragsabschluss gilt in der Regel eine Wartezeit von drei Monaten, bevor neue Fälle mitversichert sind. Das verhindert, dass bereits absehbare Streitigkeiten rückwirkend versichert werden. Vorsätzlich begangene Straftaten sind grundsätzlich ausgeschlossen.",
  },
  {
    slug: "zahnzusatz",
    icon: Tooth,
    title: "Zahnzusatz",
    body: "Schließt Lücken der gesetzlichen Kasse bei Zahnersatz, Kieferorthopädie und professioneller Zahnreinigung.",
    image: "/images/leistungen-zahnzusatz.png",
    imageAlt: "Artur Butsch lächelt selbstbewusst in die Kamera",
    intro:
      "Die gesetzliche Krankenkasse übernimmt bei Zahnersatz meist nur einen Teil der Kosten. Eine Zahnzusatzversicherung schließt diese Lücke, damit hochwertiger Zahnersatz oder eine Zahnspange für die Kinder nicht zur finanziellen Belastung wird.",
    coverage: [
      "Zahnersatz wie Kronen, Brücken und Implantate",
      "Kieferorthopädie, auch für Erwachsene",
      "Professionelle Zahnreinigung",
      "Zuschüsse deutlich über den Kassenleistungen",
    ],
    goodToKnow:
      "Bei bereits laufenden Behandlungen oder fehlenden Zähnen vor Vertragsabschluss gelten meist Einschränkungen. Es lohnt sich, die Versicherung früh abzuschließen, bevor konkreter Bedarf entsteht.",
  },
  {
    slug: "hausrat",
    icon: House,
    title: "Hausrat",
    body: "Bewahrt Möbel, Elektronik und persönliche Gegenstände vor Feuer, Einbruch und Leitungswasser.",
    image: "/images/leistungen-hausrat.png",
    imageAlt: "Artur Butsch vor einem modernen Wohnhaus",
    intro:
      "Vom Wasserschaden nach einem geplatzten Rohr bis zum Einbruch: Die Hausratversicherung ersetzt den Wert Ihrer Möbel, Elektronik und persönlichen Gegenstände, wenn in der Wohnung etwas passiert.",
    coverage: [
      "Feuer, Blitzschlag und Explosion",
      "Einbruchdiebstahl und Vandalismus nach Einbruch",
      "Leitungswasser",
      "Sturm und Hagel",
      "Optional: Elementarschäden wie Hochwasser oder Starkregen",
      "Optional: Fahrraddiebstahl auch außerhalb der Wohnung",
    ],
    goodToKnow:
      "Die Versicherungssumme sollte zum tatsächlichen Wert Ihres Hausrats passen. Ist sie zu niedrig angesetzt, drohen im Schadenfall anteilige Kürzungen (Unterversicherung) — ein Punkt, den wir im Beratungsgespräch gemeinsam realistisch einschätzen.",
  },
  {
    slug: "unfall",
    icon: Bandaids,
    title: "Unfall",
    body: "Finanzielle Absicherung bei Unfällen im Alltag, Beruf und Freizeit, rund um die Uhr.",
    image: "/images/leistungen-unfall.png",
    imageAlt: "Artur Butsch im persönlichen Gespräch mit einer älteren Dame",
    intro:
      "Die gesetzliche Unfallversicherung greift nur bei Arbeits- und Wegeunfällen. Die private Unfallversicherung schützt Sie zusätzlich rund um die Uhr, auch beim Sport, im Haushalt oder in der Freizeit.",
    coverage: [
      "Invaliditätsleistung nach Unfällen",
      "Schutz bei Beruf, Freizeit, Sport und zuhause",
      "Übergangsleistung bei vorübergehender Beeinträchtigung",
      "Kosmetische Operationen nach unfallbedingten Verletzungen",
    ],
    goodToKnow:
      "Anders als viele annehmen, sind Freizeitunfälle über die gesetzliche Unfallversicherung nicht abgedeckt. Wer sich dagegen absichern will, braucht eine private Unfallversicherung.",
  },
  {
    slug: "haftpflicht",
    icon: Umbrella,
    title: "Haftpflicht",
    body: "Schützt Sie, wenn Sie versehentlich anderen einen Schaden zufügen, privat und beruflich.",
    image: "/images/leistungen-haftpflicht.png",
    imageAlt: "Artur Butsch hält schützend einen Regenschirm über eine Familie",
    intro:
      "Ein umgestoßenes Weinglas beim Besuch, ein Fahrradsturz mit fremdem Schaden: Schnell ist versehentlich etwas passiert. Die Privathaftpflicht übernimmt die Kosten, wenn Sie für einen Schaden bei anderen aufkommen müssen.",
    coverage: [
      "Personen-, Sach- und Vermögensschäden gegenüber Dritten",
      "Schlüsselverlust",
      "Gefälligkeitsschäden, etwa beim Helfen unter Freunden",
      "Optional: deliktunfähige Kinder mitversichert",
    ],
    goodToKnow:
      "Die Privathaftpflicht zählt zu den wichtigsten Versicherungen überhaupt, da Schadenersatzforderungen Dritter theoretisch unbegrenzt hoch ausfallen können. Ohne sie haften Sie mit Ihrem gesamten Vermögen.",
  },
  {
    slug: "tier",
    icon: PawPrint,
    title: "Tier",
    body: "Deckt OP- und Behandlungskosten für Hund und Katze ab, wenn es beim Tierarzt teuer wird.",
    image: "/images/leistungen-tier.png",
    imageAlt: "Artur Butsch mit Hund und Katze",
    intro:
      "Tierarztkosten können bei einer Operation oder chronischen Erkrankung schnell in die Tausende gehen. Eine OP-Kostenversicherung übernimmt diese Kosten, damit die Entscheidung für eine Behandlung nie am Geld scheitert.",
    coverage: [
      "OP-Kostenversicherung für Hund und Katze",
      "Tierärztliche Behandlungskosten bei Unfall und Krankheit",
      "Ergänzend: Tierhalterhaftpflicht für Hunde",
    ],
    goodToKnow:
      "Viele Tarife schließen bereits bestehende Erkrankungen bei Vertragsabschluss aus. Je jünger das Tier beim Abschluss, desto umfassender in der Regel der Schutz.",
  },
]

export function getService(slug: string) {
  return SERVICES.find((service) => service.slug === slug)
}
