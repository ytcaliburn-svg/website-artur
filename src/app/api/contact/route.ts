import { NextResponse } from "next/server"

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

  // TODO: Anfrage tatsächlich zustellen, z.B. per E-Mail-Service
  // (Resend, Postmark) an Artur Butsch weiterleiten oder in ein CRM
  // schreiben. Aktuell wird die Anfrage nur geloggt.
  console.log("Neue Kontaktanfrage:", {
    name: body.name,
    email: body.email,
    phone: body.phone ?? null,
    message: body.message,
  })

  return NextResponse.json({ ok: true })
}
