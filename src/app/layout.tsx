import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Artur Butsch | ARAG-Vertriebspartner in Göttingen";
const description =
  "Persönliche Versicherungsberatung in Göttingen als ARAG-Vertriebspartner: Rechtsschutz, Kranken- und Zahnzusatz, Unfall, Haftpflicht und mehr. Direkt, ehrlich, ohne Umwege.";

export const metadata: Metadata = {
  // TODO: auf die echte Domain setzen, sobald die Seite gehostet ist,
  // sonst lösen geteilte Links (WhatsApp, Facebook, ...) das Vorschaubild nicht auf.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://deine-domain.de"),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    locale: "de_DE",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-image.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: `${siteConfig.name} – ${siteConfig.tagline}`,
  image: "/images/og-image.jpg",
  telephone: siteConfig.phone.replace(/\s/g, ""),
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.addressLine1,
    addressLocality: "Göttingen",
    postalCode: "37073",
    addressCountry: "DE",
  },
  areaServed: "Göttingen",
  founder: {
    "@type": "Person",
    name: siteConfig.name,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          {children}
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
