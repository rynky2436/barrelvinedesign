"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Zap, Beer, Gift, Users } from "lucide-react"

export default function MicrobreweryPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-amber-800 via-amber-700 to-amber-600">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/brewery-solutions.png" alt="Brewery Background" fill className="object-cover" />
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

          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Microbrewery Solutions</h1>
          <p className="text-xl md:text-2xl text-amber-200 mb-8 max-w-3xl mx-auto">
            Custom Merchandise & Branding for Craft Breweries
          </p>
          <p className="text-lg text-amber-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Stand out in the competitive craft beer landscape with distinctive laser-engraved merchandise that tells
            your brewery's story. From tap handles to growlers, we help you create memorable brand experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-amber-800 hover:bg-amber-50 text-lg px-8 py-4 font-semibold">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-amber-800 bg-white hover:bg-amber-50 hover:text-amber-900 text-lg px-8 py-4"
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
              Brewery Product Showcase
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Discover our premium laser engraving solutions designed specifically for craft breweries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tap Handles */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/brewery-tap-handle.png"
                  alt="Custom Tap Handle"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Beer className="w-6 h-6 mb-2" />
                  <h3 className="text-lg font-bold">Custom Tap Handles</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-stone-600 mb-4">
                  Distinctive wooden tap handles with laser-engraved brewery logos and beer names.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-amber-700 hover:bg-amber-800">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Growlers */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/brewery-growler.png"
                  alt="Branded Growler"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Gift className="w-6 h-6 mb-2" />
                  <h3 className="text-lg font-bold">Branded Growlers</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-stone-600 mb-4">
                  Custom laser-engraved growlers and glassware for take-home beer sales.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-amber-700 hover:bg-amber-800">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Flight Glasses */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/brewery-flight-glasses.png"
                  alt="Flight Glasses"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Zap className="w-6 h-6 mb-2" />
                  <h3 className="text-lg font-bold">Beer Flight Sets</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-stone-600 mb-4">
                  Custom flight paddles and glasses for beer tasting experiences in your taproom.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-amber-700 hover:bg-amber-800">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Taproom Signs */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/brewery-taproom-sign.png"
                  alt="Taproom Sign"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Users className="w-6 h-6 mb-2" />
                  <h3 className="text-lg font-bold">Taproom Signage</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-stone-600 mb-4">
                  Professional laser-engraved signs and décor for your taproom and brewery space.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-amber-700 hover:bg-amber-800">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Bottle Openers */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/brewery-bottle-opener.png"
                  alt="Bottle Opener"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Gift className="w-6 h-6 mb-2" />
                  <h3 className="text-lg font-bold">Bottle Openers</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-stone-600 mb-4">
                  Custom wooden bottle openers with laser-engraved brewery branding for merchandise.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-amber-700 hover:bg-amber-800">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Taproom Utensil Holders */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/brewery-utensil-holder.png"
                  alt="Utensil Holder"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Beer className="w-6 h-6 mb-2" />
                  <h3 className="text-lg font-bold">Taproom Utensil Holders</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-stone-600 mb-4">
                  Functional and branded utensil holders for your taproom dining experience.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-amber-700 hover:bg-amber-800">Get Started</Button>
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
              <h2 className="text-4xl font-bold text-stone-800 mb-6 font-playfair">Craft Beer Branding Excellence</h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Our laser engraving services help craft breweries create distinctive brand experiences that connect with
                beer enthusiasts. From intimate taprooms to large-scale production facilities, we craft pieces that
                showcase your brewing passion.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">Custom Tap Handles & Beer Flights</h3>
                    <p className="text-stone-600">
                      Distinctive tap handles and flight paddles that showcase your beer varieties.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">Branded Growlers & Glassware</h3>
                    <p className="text-stone-600">
                      Custom engraved growlers and glasses for take-home sales and taproom service.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">Taproom Décor & Signage</h3>
                    <p className="text-stone-600">
                      Professional signage and decorative elements that enhance your taproom atmosphere.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">Promotional Merchandise</h3>
                    <p className="text-stone-600">
                      Custom bottle openers, coasters, and branded accessories for retail and events.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/brewery-serving-tray.png"
                alt="Brewery Serving Tray"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-800 to-amber-900">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
            Ready to Elevate Your Brewery?
          </h2>
          <p className="text-xl text-amber-100 mb-8 leading-relaxed">
            Let's create custom laser-engraved merchandise that tells your brewery's story and connects with craft beer
            enthusiasts. Contact us today to discuss your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-amber-800 hover:bg-amber-50 text-lg px-8 py-4 font-semibold">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-amber-800 bg-white hover:bg-amber-50 hover:text-amber-900 text-lg px-8 py-4"
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
