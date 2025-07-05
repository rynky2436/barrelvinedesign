import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, Zap, Gift, Users, Wine } from "lucide-react"

export const metadata: Metadata = {
  title: "Laser Engraving Services | Custom Wood & Metal Engraving | Barrel & Vine Designs",
  description:
    "Professional laser engraving services in Washington DC, Maryland & Virginia. Custom wood engraving, metal engraving, acrylic cutting, and personalized gifts for businesses and individuals.",
  keywords:
    "laser engraving services, custom wood engraving, metal laser engraving, acrylic cutting, personalized gifts, corporate branding, Washington DC laser engraving",
  openGraph: {
    title: "Professional Laser Engraving Services | Barrel & Vine Designs",
    description:
      "Expert laser engraving services for wood, metal, acrylic and more. Serving Washington DC, Maryland & Virginia with custom engraving solutions.",
    images: [{ url: "/images/hero-background.png", width: 1200, height: 630, alt: "Laser Engraving Services" }],
  },
}

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Laser Engraving Services",
  description: "Professional laser engraving services for wood, metal, acrylic and various materials",
  provider: {
    "@type": "LocalBusiness",
    name: "Barrel & Vine Designs",
  },
  areaServed: ["Washington DC", "Maryland", "Virginia"],
  serviceType: "Laser Engraving",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Laser Engraving Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wood Laser Engraving",
          description: "Custom laser engraving on various wood types including hardwoods and bamboo",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Metal Laser Engraving",
          description: "Precision laser engraving on stainless steel, aluminum, and other metals",
        },
      },
    ],
  },
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-stone-800 via-amber-900 to-stone-900">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/images/hero-background.png"
              alt="Professional Laser Engraving Services"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

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

            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Professional Laser Engraving Services</h1>
            <p className="text-xl md:text-2xl text-amber-200 mb-8 max-w-3xl mx-auto">
              Custom Wood, Metal & Acrylic Engraving in Washington DC, Maryland & Virginia
            </p>
            <p className="text-lg text-stone-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              From corporate branding to personalized gifts, we provide precision laser engraving services on a wide
              variety of materials. Our state-of-the-art equipment and skilled craftsmen deliver exceptional results for
              every project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4 font-semibold">
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-stone-800 text-lg px-8 py-4 bg-transparent"
                >
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
                Our Laser Engraving Services
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Comprehensive laser engraving solutions for businesses and individuals across the DMV region
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Wood Engraving */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/winery-custom-wine-box.png"
                    alt="Wood Laser Engraving Services"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Gift className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Wood Laser Engraving</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Custom engraving on hardwoods, bamboo, plywood, and specialty woods. Perfect for signage, awards,
                    and decorative pieces.
                  </p>
                  <ul className="text-sm text-stone-600 mb-4 space-y-1">
                    <li>• Oak, maple, cherry, walnut</li>
                    <li>• Bamboo and eco-friendly options</li>
                    <li>• Custom cutting and shaping</li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-amber-700 hover:bg-amber-800">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Metal Engraving */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/brewery-bottle-opener.png"
                    alt="Metal Laser Engraving Services"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Award className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Metal Laser Engraving</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Precision engraving on stainless steel, aluminum, brass, and other metals for industrial and
                    decorative applications.
                  </p>
                  <ul className="text-sm text-stone-600 mb-4 space-y-1">
                    <li>• Stainless steel and aluminum</li>
                    <li>• Brass and copper options</li>
                    <li>• Industrial marking and tags</li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-amber-700 hover:bg-amber-800">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Acrylic Cutting */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/brewery-menu-board.png"
                    alt="Acrylic Laser Cutting Services"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Zap className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Acrylic Laser Cutting</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Precise cutting and engraving on acrylic sheets for signage, displays, and custom fabrication
                    projects.
                  </p>
                  <ul className="text-sm text-stone-600 mb-4 space-y-1">
                    <li>• Clear and colored acrylic</li>
                    <li>• Custom shapes and designs</li>
                    <li>• LED-compatible edge lighting</li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-amber-700 hover:bg-amber-800">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Corporate Branding */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/winery-cellar-door-sign.png"
                    alt="Corporate Branding Laser Engraving"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Users className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Corporate Branding</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Professional branding solutions including signage, awards, promotional items, and corporate gifts.
                  </p>
                  <ul className="text-sm text-stone-600 mb-4 space-y-1">
                    <li>• Office signage and nameplates</li>
                    <li>• Employee recognition awards</li>
                    <li>• Promotional merchandise</li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-amber-700 hover:bg-amber-800">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Personalized Gifts */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/custom-gift-boxes.png"
                    alt="Personalized Gift Laser Engraving"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Gift className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Personalized Gifts</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Custom engraved gifts for weddings, anniversaries, graduations, and special occasions.
                  </p>
                  <ul className="text-sm text-stone-600 mb-4 space-y-1">
                    <li>• Wedding and anniversary gifts</li>
                    <li>• Photo engraving on wood</li>
                    <li>• Custom jewelry boxes</li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-amber-700 hover:bg-amber-800">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Specialty Industries */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/winery-solutions.png"
                    alt="Specialty Industry Laser Engraving"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Wine className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Specialty Industries</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Specialized services for wineries, breweries, restaurants, and hospitality businesses.
                  </p>
                  <ul className="text-sm text-stone-600 mb-4 space-y-1">
                    <li>• Wine and brewery merchandise</li>
                    <li>• Restaurant menu boards</li>
                    <li>• Hotel and hospitality signage</li>
                  </ul>
                  <div className="flex gap-2">
                    <Link href="/winery" className="flex-1">
                      <Button className="w-full bg-purple-700 hover:bg-purple-800 text-sm">Winery</Button>
                    </Link>
                    <Link href="/microbrewery" className="flex-1">
                      <Button className="w-full bg-amber-700 hover:bg-amber-800 text-sm">Brewery</Button>
                    </Link>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Link href="/custom-wine-boxes" className="flex-1">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-xs">Wine Boxes</Button>
                    </Link>
                    <Link href="/brewery-tap-handles" className="flex-1">
                      <Button className="w-full bg-amber-600 hover:bg-amber-700 text-xs">Tap Handles</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Materials Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
                Materials We Work With
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Our advanced laser engraving equipment can handle a wide variety of materials with precision and quality
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">W</span>
                </div>
                <h3 className="font-bold text-stone-800 mb-2">Wood</h3>
                <p className="text-sm text-stone-600">Hardwoods, softwoods, bamboo, plywood</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">M</span>
                </div>
                <h3 className="font-bold text-stone-800 mb-2">Metal</h3>
                <p className="text-sm text-stone-600">Stainless steel, aluminum, brass, copper</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">A</span>
                </div>
                <h3 className="font-bold text-stone-800 mb-2">Acrylic</h3>
                <p className="text-sm text-stone-600">Clear, colored, specialty acrylics</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">+</span>
                </div>
                <h3 className="font-bold text-stone-800 mb-2">More</h3>
                <p className="text-sm text-stone-600">Leather, fabric, glass, stone</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-amber-800 to-stone-800">
          <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-amber-100 mb-8 leading-relaxed">
              Contact us today for a free consultation and quote. Our expert team is ready to bring your vision to life
              with precision laser engraving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-stone-800 hover:bg-stone-100 text-lg px-8 py-4 font-semibold"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+13017488360">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-stone-800 text-lg px-8 py-4 bg-transparent"
                >
                  Call (301) 748-8360
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
