import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Beer, Gift, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Growlers & Brewery Glassware | Laser Engraving | Barrel & Vine Designs",
  description:
    "Custom laser-engraved growlers and brewery glassware in DC, MD & VA. Perfect for craft breweries, taprooms, and beer enthusiasts. Premium quality and branding.",
  keywords:
    "custom growlers, brewery glassware, laser engraved growlers, craft beer glasses, brewery merchandise, custom beer glasses",
  openGraph: {
    title: "Custom Growlers & Brewery Glassware | Laser Engraving | Barrel & Vine Designs",
    description:
      "Custom laser-engraved growlers and brewery glassware perfect for craft breweries and beer enthusiasts.",
    images: [
      { url: "/images/brewery-growler.png", width: 1200, height: 630, alt: "Custom Growlers and Brewery Glassware" },
    ],
  },
}

export default function GrowlersGlasswarePage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/brewery-growler.png"
            alt="Custom Growlers and Brewery Glassware"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <div className="mb-8">
            <Image
              src="/images/barrel-vine-logo.png"
              alt="Barrel & Vine Designs Logo"
              width={120}
              height={120}
              className="mx-auto filter brightness-0 invert mb-6"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Custom Growlers & Brewery Glassware</h1>
          <p className="text-xl md:text-2xl text-amber-200 mb-8 max-w-3xl mx-auto">
            Premium Laser-Engraved Glassware for Craft Breweries
          </p>
          <p className="text-lg text-amber-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Extend your brewery's brand beyond the taproom with custom laser-engraved growlers and glassware. Perfect
            for take-home sales, merchandise, and creating lasting connections with your customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-amber-800 hover:bg-amber-50 text-lg px-8 py-4 font-semibold">
                Get Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
              Brewery Glassware Collection
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              From classic growlers to specialty glassware, we create pieces that showcase your brewery's brand
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/brewery-growler.png"
                  alt="Custom Laser Engraved Growlers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Beer className="w-6 h-6 mb-2" />
                  <h3 className="text-lg font-bold">Custom Growlers</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-stone-600 mb-4">
                  64oz and 32oz growlers with precision laser engraving. Perfect for take-home beer sales and brewery
                  branding.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-amber-700 hover:bg-amber-800">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/brewery-flight-glasses.png"
                  alt="Beer Flight Glasses"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Users className="w-6 h-6 mb-2" />
                  <h3 className="text-lg font-bold">Flight Glasses & Paddles</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-stone-600 mb-4">
                  Custom flight paddles and glasses for beer tasting experiences that enhance your taproom offerings.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-amber-700 hover:bg-amber-800">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/growlers.png"
                  alt="Pint Glasses and Beer Mugs"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Gift className="w-6 h-6 mb-2" />
                  <h3 className="text-lg font-bold">Pint Glasses & Mugs</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-stone-600 mb-4">
                  Classic pint glasses and beer mugs with custom laser engraving for taproom service and promotional
                  merchandise.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-amber-700 hover:bg-amber-800">Get Started</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-800 to-amber-900">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
            Ready to Elevate Your Brewery Brand?
          </h2>
          <p className="text-xl text-amber-100 mb-8 leading-relaxed">
            Let's create custom laser-engraved pieces that reflect the quality and character of your craft brewery.
            Contact us today to discuss your vision and enhance your brand presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-amber-800 hover:bg-amber-50 text-lg px-8 py-4 font-semibold">
                Get Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
