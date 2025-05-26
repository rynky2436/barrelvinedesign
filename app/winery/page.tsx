"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, Wine, Gift, Users } from "lucide-react"

export default function WineryPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/winery-solutions.png" alt="Winery Background" fill className="object-cover" />
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

          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Winery Solutions</h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Premium Branding & Custom Laser Engraving for Distinguished Wineries
          </p>
          <p className="text-lg text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Elevate your vintner's legacy with bespoke laser engraving that captures the essence of your terroir. From
            elegant wine boxes to custom barrel heads, we craft pieces that reflect your winery's distinguished
            heritage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-purple-800 hover:bg-purple-50 text-lg px-8 py-4 font-semibold">
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
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
              Winery Product Showcase
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Discover our premium laser engraving solutions designed specifically for wineries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Custom Wine Boxes */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/winery-custom-wine-box.png"
                  alt="Custom Wine Box"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Gift className="w-6 h-6 mb-2" />
                  <h3 className="text-lg font-bold">Custom Wine Boxes</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-stone-600 mb-4">
                  Elegant wooden wine boxes with personalized laser engraving for special occasions and corporate gifts.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-purple-700 hover:bg-purple-800">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Barrel Heads */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/winery-barrel-head.png"
                  alt="Barrel Head Engraving"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Wine className="w-6 h-6 mb-2" />
                  <h3 className="text-lg font-bold">Barrel Head Engraving</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-stone-600 mb-4">
                  Transform wine barrel heads into stunning decorative pieces with custom logos and designs.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-purple-700 hover:bg-purple-800">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Cellar Door Signs */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/winery-cellar-door-sign.png"
                  alt="Cellar Door Sign"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Award className="w-6 h-6 mb-2" />
                  <h3 className="text-lg font-bold">Cellar Door Signs</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-stone-600 mb-4">
                  Professional signage for your tasting room and cellar door with elegant laser-engraved details.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-purple-700 hover:bg-purple-800">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Wine Accessories */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/winery-wine-accessories.png"
                  alt="Wine Accessories"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Users className="w-6 h-6 mb-2" />
                  <h3 className="text-lg font-bold">Wine Accessories</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-stone-600 mb-4">
                  Custom engraved wine accessories including bottle openers, stoppers, and serving tools.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-purple-700 hover:bg-purple-800">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Tasting Boards */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/winery-tasting-boards.png"
                  alt="Tasting Boards"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Gift className="w-6 h-6 mb-2" />
                  <h3 className="text-lg font-bold">Tasting Boards</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-stone-600 mb-4">
                  Elegant wooden tasting boards with custom engraving for wine flights and cheese pairings.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-purple-700 hover:bg-purple-800">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Luxury Gift Boxes */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/winery-luxury-gift-box.png"
                  alt="Luxury Gift Box"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Award className="w-6 h-6 mb-2" />
                  <h3 className="text-lg font-bold">Luxury Gift Boxes</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-stone-600 mb-4">
                  Premium gift boxes with sophisticated laser engraving for special wine collections.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-purple-700 hover:bg-purple-800">Get Started</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-stone-800 mb-6 font-playfair">Winery Branding Excellence</h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Our laser engraving services help wineries create distinctive brand experiences that resonate with wine
                enthusiasts. From intimate tasting rooms to grand cellar doors, we craft pieces that tell your unique
                story.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">Custom Wine Box Engraving</h3>
                    <p className="text-stone-600">
                      Elegant wooden boxes with personalized designs for special releases and corporate gifts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">Barrel Head Personalization</h3>
                    <p className="text-stone-600">
                      Transform used barrel heads into stunning wall art and decorative pieces.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">Tasting Room Signage & Décor</h3>
                    <p className="text-stone-600">
                      Professional signage and decorative elements that enhance your tasting room experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">Award Displays & Plaques</h3>
                    <p className="text-stone-600">
                      Showcase your achievements with custom engraved award displays and recognition plaques.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/winery-wine-glasses.png"
                alt="Wine Glasses"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
            Ready to Elevate Your Winery?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Let's create custom laser-engraved pieces that reflect the quality and heritage of your winery. Contact us
            today to discuss your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-purple-800 hover:bg-purple-50 text-lg px-8 py-4 font-semibold">
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
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
