import { NextResponse } from "next/server"
import { Resend } from "resend"
import { siteConfig } from "@/lib/site-config"

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.message !== "string" ||
    !body.name.trim() ||
    !body.email.trim() ||
    !body.message.trim() ||
    !body.consent
  ) {
    return NextResponse.json(
      { error: "Bitte alle Pflichtfelder ausfüllen." },
      { status: 400 }
    )
  }

  const { name, email, message } = body
  const phone: string | null = body.phone?.trim() || null

  if (!process.env.RESEND_API_KEY) {
    console.warn(
      "RESEND_API_KEY fehlt. Anfrage wird nur geloggt, nicht zugestellt."
    )
    console.log("Neue Kontaktanfrage:", { name, email, phone, message })
    return NextResponse.json({ ok: true })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "Kontaktformular <onboarding@resend.dev>",
    to: process.env.CONTACT_FORM_TO_EMAIL ?? siteConfig.email,
    replyTo: email,
    subject: `Neue Anfrage von ${name}`,
    text: [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      phone ? `Telefon: ${phone}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  })

  if (error) {
    console.error("Resend-Fehler:", error)
    return NextResponse.json(
      { error: "Zustellung fehlgeschlagen." },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
