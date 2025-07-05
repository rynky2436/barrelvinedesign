import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Star, Award, Users, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Winery Solutions - Custom Laser Engraving | Barrel & Vine Design",
  description:
    "Premium laser engraving services for wineries in Washington DC, Maryland & Virginia. Custom wine boxes, barrel heads, cellar door signs, tasting boards & more. Call (240) 324-7110",
  keywords:
    "winery laser engraving, custom wine boxes, barrel heads, cellar door signs, wine accessories, Washington DC winery services",
}

export default function WineryPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-stone-100 pt-16 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
                Winery Solutions
              </h1>
              <p className="mt-6 text-xl text-stone-600 leading-relaxed">
                Elevate your winery's brand with our premium laser engraving services. From custom wine boxes to elegant
                barrel heads, we create memorable pieces that enhance your wine experience.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="tel:+12403247110">
                  <Button
                    size="lg"
                    className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 text-lg font-semibold"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Call (240) 324-7110
                  </Button>
                </a>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-amber-700 text-amber-700 hover:bg-amber-50 px-8 py-4 text-lg font-semibold bg-transparent"
                  >
                    <Mail className="mr-2 w-5 h-5" />
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/winery-solutions.png"
                alt="Custom laser engraved wine accessories and signage"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl">Our Winery Services</h2>
            <p className="mt-4 text-xl text-stone-600 max-w-3xl mx-auto">
              Comprehensive laser engraving solutions designed specifically for wineries, tasting rooms, and wine
              retailers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-stone-200">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Image
                    src="/images/winery-custom-wine-box.png"
                    alt="Custom laser engraved wine boxes"
                    width={300}
                    height={200}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">Custom Wine Boxes</h3>
                <p className="text-stone-600 mb-4">
                  Elegant wooden wine boxes with personalized laser engraving. Perfect for special occasions, corporate
                  gifts, and retail presentation.
                </p>
                <Link href="/custom-wine-boxes" className="text-amber-700 hover:text-amber-800 font-medium">
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-stone-200">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Image
                    src="/images/winery-barrel-head.png"
                    alt="Custom laser engraved wine barrel heads"
                    width={300}
                    height={200}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">Wine Barrel Heads</h3>
                <p className="text-stone-600 mb-4">
                  Transform wine barrel heads into stunning decorative pieces with custom laser engraving featuring your
                  winery's logo and branding.
                </p>
                <Link href="/wine-barrel-heads" className="text-amber-700 hover:text-amber-800 font-medium">
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-stone-200">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Image
                    src="/images/winery-cellar-door-sign.png"
                    alt="Custom laser engraved cellar door signs"
                    width={300}
                    height={200}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">Cellar Door Signs</h3>
                <p className="text-stone-600 mb-4">
                  Welcome visitors with beautifully crafted cellar door signs that reflect your winery's character and
                  create lasting first impressions.
                </p>
                <Link href="/cellar-door-signs" className="text-amber-700 hover:text-amber-800 font-medium">
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-stone-200">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Image
                    src="/images/winery-tasting-boards.png"
                    alt="Custom laser engraved wine tasting boards"
                    width={300}
                    height={200}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">Tasting Boards</h3>
                <p className="text-stone-600 mb-4">
                  Enhance your tasting experience with custom engraved tasting boards featuring wine information,
                  tasting notes, and your branding.
                </p>
                <div className="text-amber-700 hover:text-amber-800 font-medium">Available Now →</div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-stone-200">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Image
                    src="/images/winery-wine-accessories.png"
                    alt="Custom laser engraved wine accessories"
                    width={300}
                    height={200}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">Wine Accessories</h3>
                <p className="text-stone-600 mb-4">
                  Complete your wine service with custom engraved accessories including bottle openers, coasters, and
                  serving trays.
                </p>
                <div className="text-amber-700 hover:text-amber-800 font-medium">Available Now →</div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-stone-200">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Image
                    src="/images/winery-charcuterie-tools.png"
                    alt="Custom laser engraved charcuterie tools"
                    width={300}
                    height={200}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">Charcuterie Tools</h3>
                <p className="text-stone-600 mb-4">
                  Elevate your wine and food pairings with custom engraved charcuterie knives, cheese boards, and
                  serving utensils.
                </p>
                <div className="text-amber-700 hover:text-amber-800 font-medium">Available Now →</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl">Why Choose Our Winery Solutions?</h2>
            <p className="mt-4 text-xl text-stone-600 max-w-3xl mx-auto">
              We understand the wine industry and create products that enhance your brand and customer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Premium Quality</h3>
              <p className="text-stone-600">
                High-precision laser engraving on premium materials that reflect the quality of your wines.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Wine Industry Expertise</h3>
              <p className="text-stone-600">
                Deep understanding of winery needs and wine culture to create meaningful, functional pieces.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Custom Branding</h3>
              <p className="text-stone-600">
                Every piece is customized with your winery's logo, colors, and messaging for consistent branding.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Fast Turnaround</h3>
              <p className="text-stone-600">
                Quick production times to meet your seasonal needs and special event deadlines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl">Our Process</h2>
            <p className="mt-4 text-xl text-stone-600 max-w-3xl mx-auto">
              From concept to completion, we work closely with you to create the perfect pieces for your winery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Consultation</h3>
              <p className="text-stone-600">
                We discuss your vision, branding requirements, and specific needs to understand your goals.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Design & Approval</h3>
              <p className="text-stone-600">
                Our designers create custom artwork and provide proofs for your review and approval.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Production & Delivery</h3>
              <p className="text-stone-600">
                We carefully craft your pieces using precision laser engraving and deliver them ready to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Serving Wineries Throughout the Region</h2>
            <div className="flex items-center justify-center text-stone-600 mb-8">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Washington DC • Maryland • Virginia</span>
            </div>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              We proudly serve wineries, tasting rooms, and wine retailers throughout the Washington DC metropolitan
              area, including Maryland and Virginia wine regions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-700 to-amber-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">Ready to Enhance Your Winery?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our custom laser engraving services can elevate your winery's brand and customer
            experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+12403247110">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-stone-100 px-8 py-4 text-lg font-semibold">
                <Phone className="mr-2 w-5 h-5" />
                Call (240) 324-7110
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-700 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                <Mail className="mr-2 w-5 h-5" />
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
