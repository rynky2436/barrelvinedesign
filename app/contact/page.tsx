import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Barrel & Vine Designs - Get Your Custom Laser Engraving Quote | (301) 748-8360",
  description:
    "Contact Barrel & Vine Designs for custom laser engraving services in Washington DC, Maryland & Virginia. Call (301) 748-8360 for a free consultation and quote.",
  keywords:
    "contact laser engraving, custom engraving quote, laser engraving consultation, DMV laser engraving services",
  openGraph: {
    title: "Contact Barrel & Vine Designs - Get Your Custom Laser Engraving Quote",
    description:
      "Contact Barrel & Vine Designs for custom laser engraving services in Washington DC, Maryland & Virginia. Call (301) 748-8360 for a free consultation.",
    images: [{ url: "/images/hero-background.png", width: 1200, height: 630, alt: "Contact Barrel & Vine Designs" }],
  },
}

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Barrel & Vine Designs",
    telephone: "(301) 748-8360",
    email: "info@barrelvinedesigns.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Washington",
      addressRegion: "DC",
      addressCountry: "US",
    },
    openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
  },
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <h1>Contact Us</h1>
      <p>
        Contact Barrel & Vine Designs for custom laser engraving services in Washington DC, Maryland & Virginia. Call
        (301) 748-8360 for a free consultation and quote.
      </p>
    </>
  )
}
