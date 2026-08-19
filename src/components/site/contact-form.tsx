"use client"

import { useState, type FormEvent } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  message: "",
  consent: false,
}

export function ContactForm() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)

    const promise = fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then((res) => {
      if (!res.ok) throw new Error("Anfrage fehlgeschlagen")
      return res.json()
    })

    toast.promise(promise, {
      loading: "Wird gesendet...",
      success: () => {
        setForm(EMPTY_FORM)
        return "Nachricht gesendet. Ich melde mich innerhalb eines Werktags."
      },
      error: "Das hat leider nicht geklappt. Bitte versuchen Sie es erneut.",
    })

    try {
      await promise
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            autoComplete="name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-Mail</Label>
          <Input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            autoComplete="email"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Telefon (optional)</Label>
        <Input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          autoComplete="tel"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Nachricht</Label>
        <Textarea
          id="message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
        />
      </div>

      <div className="flex items-start gap-2.5">
        <Checkbox
          id="consent"
          required
          checked={form.consent}
          onCheckedChange={(checked) =>
            setForm((f) => ({ ...f, consent: checked === true }))
          }
        />
        <Label htmlFor="consent" className="text-sm font-normal text-muted-foreground">
          Ich habe die{" "}
          <a href="/datenschutz" className="underline underline-offset-3 hover:text-foreground">
            Datenschutzerklärung
          </a>{" "}
          gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung
          dieser Anfrage einverstanden.
        </Label>
      </div>

      <Button type="submit" size="lg" disabled={submitting} className="h-11 w-full sm:w-auto sm:px-8">
        Nachricht senden
      </Button>
    </form>
  )
}
