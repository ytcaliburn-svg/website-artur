import type { MetadataRoute } from "next"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://deine-domain.de"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/impressum`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/datenschutz`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ]
}
