import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Custom Brewery Tap Handles & Microbrewery Merchandise | Barrel & Vine Designs",
  description:
    "Premium laser engraving services for craft breweries in DC, MD & VA. Custom tap handles, growlers, flight glasses & taproom signage. Elevate your brewery brand.",
  keywords:
    "brewery tap handles, craft brewery merchandise, custom growlers, beer flight glasses, taproom signage, brewery branding DMV",
  openGraph: {
    title: "Custom Brewery Tap Handles & Microbrewery Merchandise | Barrel & Vine Designs",
    description:
      "Premium laser engraving services for craft breweries in DC, MD & VA. Custom tap handles, growlers, flight glasses & taproom signage.",
    images: [
      { url: "/images/brewery-solutions.png", width: 1200, height: 630, alt: "Custom Brewery Merchandise Services" },
    ],
  },
}

const brewerySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Microbrewery Laser Engraving Services",
  description:
    "Custom laser engraving services for craft breweries including tap handles, growlers, and taproom merchandise",
  provider: {
    "@type": "LocalBusiness",
    name: "Barrel & Vine Designs",
  },
  areaServed: ["Washington DC", "Maryland", "Virginia"],
  serviceType: "Laser Engraving",
  offers: [
    {
      "@type": "Offer",
      name: "Custom Tap Handles",
      description: "Distinctive wooden tap handles with laser-engraved brewery logos and beer names",
    },
    {
      "@type": "Offer",
      name: "Branded Growlers",
      description: "Custom laser-engraved growlers and glassware for take-home beer sales",
    },
  ],
}

export default function Microbrewery() {
  return (
    <div className="container mx-auto py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(brewerySchema) }} />
      <h1 className="text-3xl font-bold mb-6 text-center">Microbrewery Laser Engraving Services</h1>
      <p className="mb-8 text-center">
        Elevate your brewery brand with our premium laser engraving services. We specialize in custom tap handles,
        growlers, flight glasses, and taproom signage.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Tap Handles */}
        <div className="shadow-md rounded-md overflow-hidden">
          <Image
            src="/images/tap-handles.jpg"
            alt="Custom Brewery Tap Handles - Distinctive wooden tap handles with laser-engraved logos"
            width={600}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Custom Tap Handles</h2>
            <p className="text-gray-700">
              Distinctive wooden tap handles with laser-engraved brewery logos and beer names.
            </p>
          </div>
        </div>

        {/* Growlers */}
        <div className="shadow-md rounded-md overflow-hidden">
          <Image
            src="/images/growlers.jpg"
            alt="Branded Growlers - Custom laser-engraved growlers for take-home beer sales"
            width={600}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Branded Growlers</h2>
            <p className="text-gray-700">Custom laser-engraved growlers and glassware for take-home beer sales.</p>
          </div>
        </div>

        {/* Flight Glasses */}
        <div className="shadow-md rounded-md overflow-hidden">
          <Image
            src="/images/flight-glasses.jpg"
            alt="Beer Flight Glasses - Custom flight paddles and glasses for beer tasting experiences"
            width={600}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Flight Glasses</h2>
            <p className="text-gray-700">Custom flight paddles and glasses for beer tasting experiences.</p>
          </div>
        </div>

        {/* Taproom Signage */}
        <div className="shadow-md rounded-md overflow-hidden">
          <Image
            src="/images/taproom-signage.jpg"
            alt="Taproom Signage - Professional laser-engraved signs and décor for brewery spaces"
            width={600}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Taproom Signage</h2>
            <p className="text-gray-700">Professional laser-engraved signs and décor for brewery spaces.</p>
          </div>
        </div>

        {/* Bottle Openers */}
        <div className="shadow-md rounded-md overflow-hidden">
          <Image
            src="/images/bottle-openers.jpg"
            alt="Custom Bottle Openers - Wooden bottle openers with laser-engraved brewery branding"
            width={600}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Bottle Openers</h2>
            <p className="text-gray-700">Wooden bottle openers with laser-engraved brewery branding.</p>
          </div>
        </div>

        {/* Utensil Holders */}
        <div className="shadow-md rounded-md overflow-hidden">
          <Image
            src="/images/utensil-holders.jpg"
            alt="Taproom Utensil Holders - Functional and branded utensil holders for taproom dining"
            width={600}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Utensil Holders</h2>
            <p className="text-gray-700">Functional and branded utensil holders for taproom dining.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
