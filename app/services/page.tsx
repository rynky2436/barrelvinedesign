import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Phone, Mail, MapPin, Zap, Award, Users, Palette } from "lucide-react"

export const metadata: Metadata = {
  title: "Laser Engraving Services for Wineries & Breweries | Barrel & Vine Designs",
  description:
    "Professional laser engraving services in Washington DC, Maryland & Virginia. Custom wine boxes, tap handles, barrel heads, and brewery accessories. Call (240) 324-7110.",
  keywords:
    "laser engraving, custom wine boxes, tap handles, barrel heads, brewery accessories, winery products, Washington DC, Maryland, Virginia",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/service-cards-layout.png"
            alt="Laser Engraving Services"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Professional Laser Engraving Services</h1>
          <p className="text-xl md:text-2xl text-amber-200 mb-8 max-w-3xl mx-auto">
            Elevate Your Winery & Brewery with Custom Laser-Engraved Products
          </p>
          <p className="text-lg text-amber-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            From elegant wine boxes to distinctive tap handles, we specialize in creating premium laser-engraved
            products that enhance your brand and delight your customers throughout Washington DC, Maryland, and
            Virginia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-amber-800 hover:bg-amber-50 text-lg px-8 py-4 font-semibold">
                Get Your Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="tel:+12403247110">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-800 text-lg px-8 py-4 font-semibold bg-transparent"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call (240) 324-7110
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
              Our Specialized Services
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              We offer comprehensive laser engraving solutions tailored specifically for wineries and breweries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Winery Services */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/images/winery-solutions.png"
                  alt="Winery Laser Engraving Services"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Winery Solutions</h3>
                  <p className="text-amber-200">Premium products for wine enthusiasts</p>
                </div>
              </div>
              <CardContent className="p-8">
                <ul className="space-y-3 text-stone-600 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3" />
                    Custom Wine Boxes & Gift Sets
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3" />
                    Wine Barrel Heads & Decorative Pieces
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3" />
                    Cellar Door Signs & Branding
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3" />
                    Tasting Room Accessories
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3" />
                    Wine Accessories & Tools
                  </li>
                </ul>
                <Link href="/winery">
                  <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white">
                    Explore Winery Services
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Brewery Services */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/images/brewery-solutions.png"
                  alt="Brewery Laser Engraving Services"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Brewery Solutions</h3>
                  <p className="text-amber-200">Distinctive products for craft breweries</p>
                </div>
              </div>
              <CardContent className="p-8">
                <ul className="space-y-3 text-stone-600 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3" />
                    Custom Tap Handles & Beer Hardware
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3" />
                    Growlers & Glassware Engraving
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3" />
                    Taproom Signage & Decor
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3" />
                    Flight Paddles & Serving Accessories
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3" />
                    Brewery Merchandise & Gifts
                  </li>
                </ul>
                <Link href="/microbrewery">
                  <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white">
                    Explore Brewery Services
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
              Why Choose Barrel & Vine Designs?
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              We combine craftsmanship, technology, and industry expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">Precision Technology</h3>
              <p className="text-stone-600">
                State-of-the-art laser engraving equipment ensures perfect detail and consistency in every piece.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">Industry Expertise</h3>
              <p className="text-stone-600">
                Deep understanding of winery and brewery needs, from branding to functionality requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">Personal Service</h3>
              <p className="text-stone-600">
                Dedicated support from concept to completion, ensuring your vision becomes reality.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">Custom Design</h3>
              <p className="text-stone-600">
                Tailored solutions that reflect your unique brand identity and aesthetic preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
              Serving the Greater DC Area
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Professional laser engraving services throughout Washington DC, Maryland, and Virginia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg">
              <MapPin className="w-12 h-12 text-amber-700 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-stone-800 mb-2">Washington DC</h3>
              <p className="text-stone-600">
                Serving wineries, breweries, and businesses throughout the District of Columbia.
              </p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <MapPin className="w-12 h-12 text-amber-700 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-stone-800 mb-2">Maryland</h3>
              <p className="text-stone-600">
                Professional services for Maryland wineries and breweries, from Montgomery County to the Eastern Shore.
              </p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <MapPin className="w-12 h-12 text-amber-700 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-stone-800 mb-2">Virginia</h3>
              <p className="text-stone-600">
                Serving Northern Virginia's thriving wine and craft beer industry with premium engraving services.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-br from-stone-800 to-stone-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Ready to Get Started?</h2>
          <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your laser engraving needs and receive a personalized quote for your project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-4 font-semibold">
                Request Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="tel:+12403247110">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-stone-800 text-lg px-8 py-4 font-semibold bg-transparent"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call (240) 324-7110
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center text-stone-300">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>info@barrelvinedesigns.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Washington DC Metro Area</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
