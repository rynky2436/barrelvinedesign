import type React from "react"
import type { Metadata } from "next"
import { Inter, Lora } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const lora = Lora({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lora" })

export const metadata: Metadata = {
  title: "Barrel & Vine Designs - Custom Engraving for Wineries & Breweries",
  description:
    "Specializing in custom laser engraved products for wineries and breweries, including wine boxes, barrel heads, tap handles, and signage.",
  keywords:
    "laser engraving, custom wine boxes, brewery tap handles, winery products, Washington DC, Maryland, Virginia",
  authors: [{ name: "Barrel & Vine Designs" }],
  creator: "Barrel & Vine Designs",
  publisher: "Barrel & Vine Designs",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://barrelvinedesigns.com",
    siteName: "Barrel & Vine Designs",
    title: "Barrel & Vine Designs - Custom Laser Engraving",
    description:
      "Premium laser engraving services for wineries and breweries in the DMV area. Custom products that enhance your brand.",
    images: [
      {
        url: "/images/hero-background.png",
        width: 1200,
        height: 630,
        alt: "Barrel & Vine Designs",
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
  telephone: "240-324-7110",
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
      <body className={`${inter.variable} ${lora.variable} font-sans antialiased bg-gray-50 text-gray-800`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
