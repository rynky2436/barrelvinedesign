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
    "Premium laser engraving services for wineries, breweries & distilleries in Washington DC, Maryland & Virginia. Custom wine boxes, tap handles, barrel heads & branded merchandise.",
  keywords:
    "laser engraving Washington DC, custom wine barrel engraving, brewery merchandise Maryland, winery branding Virginia, tap handles DMV, wine box engraving, barrel head personalization",
  authors: [{ name: "Barrel & Vine Designs" }],
  creator: "Barrel & Vine Designs",
  publisher: "Barrel & Vine Designs",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://barrelvinedesigns.com",
    siteName: "Barrel & Vine Designs",
    title: "Custom Laser Engraving for Wineries & Breweries | Barrel & Vine Designs",
    description:
      "Premium laser engraving services for wineries, breweries & distilleries in Washington DC, Maryland & Virginia. Custom wine boxes, tap handles, barrel heads & branded merchandise.",
    images: [
      {
        url: "/images/hero-background.png",
        width: 1200,
        height: 630,
        alt: "Barrel & Vine Designs - Custom Laser Engraving Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Laser Engraving for Wineries & Breweries | Barrel & Vine Designs",
    description:
      "Premium laser engraving services for wineries, breweries & distilleries in Washington DC, Maryland & Virginia. Custom wine boxes, tap handles, barrel heads & branded merchandise.",
    images: ["/images/hero-background.png"],
  },
  alternates: {
    canonical: "https://barrelvinedesigns.com",
  },
  generator: "Next.js",
  viewport: "width=device-width, initial-scale=1",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://barrelvinedesigns.com/#organization",
  name: "Barrel & Vine Designs",
  alternateName: "Barrels & Vines Design",
  description:
    "Premium laser engraving services for wineries, breweries & distilleries in Washington DC, Maryland & Virginia. Custom wine boxes, tap handles, barrel heads & branded merchandise.",
  url: "https://barrelvinedesigns.com",
  telephone: "(301) 748-8360",
  email: "info@barrelvinedesigns.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Washington",
    addressRegion: "DC",
    addressCountry: "US",
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
  serviceType: [
    "Laser Engraving",
    "Custom Wine Box Engraving",
    "Brewery Merchandise",
    "Winery Branding",
    "Tap Handle Manufacturing",
    "Barrel Head Personalization",
  ],
  openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
  image: "https://barrelvinedesigns.com/images/hero-background.png",
  logo: {
    "@type": "ImageObject",
    url: "https://barrelvinedesigns.com/images/barrel-vine-logo.png",
    width: 400,
    height: 400,
  },
  sameAs: [],
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Laser Engraving Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Wine Box Engraving",
          description: "Elegant wooden wine boxes with personalized laser engraving",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brewery Tap Handles",
          description: "Custom laser-engraved tap handles for craft breweries",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Barrel Head Personalization",
          description: "Transform wine barrel heads into custom decorative pieces",
        },
      },
    ],
  },
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
        <meta name="theme-color" content="#92400e" />
        <meta name="google-site-verification" content="your-verification-code-here" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
