import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Barrel & Vine Designs - Custom Laser Engraving | Washington, D.C. Metro",
  description:
    "Premium winery branding and microbrewery merchandise. Serving wineries and craft breweries across Maryland, Virginia, and Washington, D.C. with bespoke laser engraving services.",
  keywords:
    "laser engraving, winery branding, brewery merchandise, custom engraving, DMV, Washington DC, Maryland, Virginia, wine boxes, tap handles, barrel heads",
  authors: [{ name: "Barrel & Vine Designs" }],
  creator: "Barrel & Vine Designs",
  publisher: "Barrel & Vine Designs",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://barrelvinedesigns.com",
    siteName: "Barrel & Vine Designs",
    title: "Barrel & Vine Designs - Custom Laser Engraving | Washington, D.C. Metro",
    description:
      "Premium winery branding and microbrewery merchandise. Serving wineries and craft breweries across Maryland, Virginia, and Washington, D.C. with bespoke laser engraving services.",
    images: [
      {
        url: "/images/hero-background.png",
        width: 1200,
        height: 630,
        alt: "Barrel & Vine Designs - Custom Laser Engraving",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barrel & Vine Designs - Custom Laser Engraving | Washington, D.C. Metro",
    description:
      "Premium winery branding and microbrewery merchandise. Serving wineries and craft breweries across Maryland, Virginia, and Washington, D.C. with bespoke laser engraving services.",
    images: ["/images/hero-background.png"],
  },
  alternates: {
    canonical: "https://barrelvinedesigns.com",
  },
  generator: "v0.dev",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Barrel & Vine Designs",
  description:
    "Premium winery branding and microbrewery merchandise. Serving wineries and craft breweries across Maryland, Virginia, and Washington, D.C. with bespoke laser engraving services.",
  url: "https://barrelvinedesigns.com",
  telephone: "(301) 748-8360",
  email: "info@example.com",
  areaServed: {
    "@type": "Place",
    name: "Washington, D.C. Metro Area",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "38.9072",
    longitude: "-77.0369",
  },
  areaServed: [
    {
      "@type": "State",
      name: "Maryland",
    },
    {
      "@type": "State",
      name: "Virginia",
    },
    {
      "@type": "Place",
      name: "Washington, D.C.",
    },
  ],
  serviceType: ["Laser Engraving", "Custom Branding", "Winery Merchandise", "Brewery Merchandise"],
  openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
  image: "https://barrelvinedesigns.com/images/hero-background.png",
  logo: "https://barrelvinedesigns.com/images/barrel-vine-logo.png",
  sameAs: [],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="canonical" href="https://barrelvinedesigns.com" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#8B4513" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
