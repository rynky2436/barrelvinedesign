import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, Wine, Palette } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Wine Barrel Head Engraving | Winery Decor | Barrel & Vine Designs",
  description:
    "Transform wine barrel heads into stunning decorative art with custom laser engraving. Perfect for wineries, tasting rooms, and wine enthusiasts in DC, MD & VA.",
  keywords:
    "wine barrel head engraving, barrel head art, winery decor, custom barrel heads, wine barrel signs, tasting room decor",
  openGraph: {
    title: "Custom Wine Barrel Head Engraving | Winery Decor | Barrel & Vine Designs",
    description:
      "Transform wine barrel heads into stunning decorative art with custom laser engraving. Perfect for wineries and wine enthusiasts.",
    images: [
      { url: "/images/winery-barrel-head.png", width: 1200, height: 630, alt: "Custom Wine Barrel Head Engraving" },
    ],
  },
}

const barrelHeadSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Wine Barrel Head Engraving Services",
  description: "Custom laser engraving on wine barrel heads for decorative art and winery branding",
  provider: {
    "@type": "LocalBusiness",
    name: "Barrel & Vine Designs",
  },
  areaServed: ["Washington DC", "Maryland", "Virginia"],
  serviceType: "Laser Engraving",
}

export default function WineBarrelHeadsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(barrelHeadSchema) }} />
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/winery-barrel-head.png"
              alt="Custom Wine Barrel Head Engraving"
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

            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Custom Wine Barrel Head Engraving</h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto">
              Transform Used Wine Barrels into Stunning Decorative Art
            </p>
            <p className="text-lg text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Give new life to your wine barrels with custom laser-engraved barrel heads. Perfect for winery decor,
              tasting room ambiance, or as memorable gifts for wine enthusiasts. Each piece tells a story of
              craftsmanship and tradition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-purple-800 hover:bg-purple-50 text-lg px-8 py-4 font-semibold"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-purple-800 bg-white hover:bg-purple-50 hover:text-purple-900 text-lg px-8 py-4"
                >
                  View Gallery
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
                Barrel Head Engraving Options
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                From simple logos to intricate artwork, we create barrel head masterpieces that capture your vision
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/winery-barrel-head.png"
                    alt="Winery Logo Barrel Heads"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Wine className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Winery Logo Designs</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Showcase your winery's brand with precision-engraved logos and branding elements on authentic barrel
                    heads.
                  </p>
                  <Link href="/contact">
                    <Button className="w-full bg-purple-700 hover:bg-purple-800">Get Quote</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/barrel-engravings.png"
                    alt="Custom Artwork Barrel Heads"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Palette className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Custom Artwork</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Transform your vision into reality with custom artwork, vineyard scenes, and personalized designs.
                  </p>
                  <Link href="/contact">
                    <Button className="w-full bg-purple-700 hover:bg-purple-800">Get Quote</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/cellar-door-signs.png"
                    alt="Commemorative Barrel Heads"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Award className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Commemorative Pieces</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Celebrate special vintages, anniversaries, or achievements with commemorative barrel head
                    engravings.
                  </p>
                  <Link href="/contact">
                    <Button className="w-full bg-purple-700 hover:bg-purple-800">Get Quote</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-stone-800 mb-4 font-playfair">Our Process</h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                From concept to completion, we ensure every barrel head meets our exacting standards
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-700">1</span>
                </div>
                <h3 className="text-lg font-semibold text-stone-800 mb-2">Design Consultation</h3>
                <p className="text-stone-600">We work with you to create the perfect design for your barrel head.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-700">2</span>
                </div>
                <h3 className="text-lg font-semibold text-stone-800 mb-2">Barrel Preparation</h3>
                <p className="text-stone-600">
                  Each barrel head is carefully prepared and sanded for optimal engraving.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-700">3</span>
                </div>
                <h3 className="text-lg font-semibold text-stone-800 mb-2">Precision Engraving</h3>
                <p className="text-stone-600">
                  Our laser technology creates detailed, lasting engravings with perfect precision.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-700">4</span>
                </div>
                <h3 className="text-lg font-semibold text-stone-800 mb-2">Finishing & Delivery</h3>
                <p className="text-stone-600">Final finishing touches and careful packaging for safe delivery.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-purple-800 to-purple-900">
          <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
              Ready to Create Your Barrel Head Masterpiece?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Transform your used wine barrels into stunning decorative art that tells your winery's story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-purple-800 hover:bg-purple-50 text-lg px-8 py-4 font-semibold"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
