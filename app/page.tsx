"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, Zap, Users, MapPin } from "lucide-react"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: "Premium Winery Branding &",
      subtitle: "Microbrewery Merchandise",
      description:
        "Serving wineries and craft breweries across Maryland, Virginia, and Washington, D.C. with bespoke laser engraving services that tell your unique story.",
    },
    {
      title: "Artisanal Craftsmanship &",
      subtitle: "Precision Laser Engraving",
      description:
        "Transform your brand with custom engraved pieces that reflect the quality and heritage of your establishment.",
    },
    {
      title: "Local Expertise &",
      subtitle: "Regional Excellence",
      description:
        "Deep understanding of the DMV wine and craft beer culture, delivering solutions that resonate with your local market.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-900 via-stone-900 to-amber-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-80">
          <Image src="/images/hero-background.png" alt="Hero Background" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
          {/* Prominent Logo */}
          <div className="mb-8">
            <Image
              src="/images/barrel-vine-logo.png"
              alt="Barrel & Vine Designs Logo"
              width={160}
              height={160}
              className="mx-auto filter brightness-0 invert mb-6"
              priority
            />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-playfair">Barrel & Vine Designs</h1>
            <p className="text-lg md:text-xl text-amber-300 mb-8">Custom Laser Engraving | Washington, D.C. Metro</p>
          </div>

          <div className="min-h-[200px] flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-playfair">
              {heroSlides[currentSlide].title}
              <span className="block text-amber-400">{heroSlides[currentSlide].subtitle}</span>
            </h2>
            <p className="text-lg md:text-xl mb-8 text-stone-200 max-w-4xl mx-auto leading-relaxed">
              {heroSlides[currentSlide].description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/winery">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4">
                View Winery Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-4 font-semibold"
              >
                Start Your Project
              </Button>
            </Link>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-amber-400" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
              Custom Laser Engraving Services
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Elevating brands through precision craftsmanship and artisanal attention to detail
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Winery Solutions */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-purple-900 to-purple-700">
                <Image src="/images/winery-solutions.png" alt="Winery Solutions" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <Award className="w-8 h-8 mb-2" />
                  <h3 className="text-2xl font-bold font-playfair">Winery Solutions</h3>
                  <p className="text-purple-200">Premium Branding & Custom Pieces</p>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Elevate your vintner's legacy with bespoke laser engraving that captures the essence of your terroir.
                  From elegant wine boxes to custom barrel heads, we craft pieces that reflect your winery's
                  distinguished heritage.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-stone-700">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                    Custom wine box engraving
                  </li>
                  <li className="flex items-center text-stone-700">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                    Barrel head personalization
                  </li>
                  <li className="flex items-center text-stone-700">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                    Tasting room signage & décor
                  </li>
                  <li className="flex items-center text-stone-700">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                    Award displays & plaques
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-stone-200">
                  <Link href="/custom-wine-boxes" className="text-purple-700 hover:text-purple-800 text-sm font-medium">
                    → View Custom Wine Boxes
                  </Link>
                </div>
                <Link href="/winery">
                  <Button className="w-full bg-purple-700 hover:bg-purple-800">
                    Explore Winery Solutions
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Brewery Solutions */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-amber-800 to-amber-600">
                <Image src="/images/brewery-solutions.png" alt="Brewery Solutions" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <Zap className="w-8 h-8 mb-2" />
                  <h3 className="text-2xl font-bold font-playfair">Microbrewery Solutions</h3>
                  <p className="text-amber-200">Custom Merchandise & Branding</p>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Stand out in the competitive craft beer landscape with distinctive laser-engraved merchandise that
                  tells your brewery's story. From tap handles to growlers, we help you create memorable brand
                  experiences.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-stone-700">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3" />
                    Custom tap handles & beer flights
                  </li>
                  <li className="flex items-center text-stone-700">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3" />
                    Branded growlers & glassware
                  </li>
                  <li className="flex items-center text-stone-700">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3" />
                    Taproom décor & signage
                  </li>
                  <li className="flex items-center text-stone-700">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3" />
                    Promotional merchandise
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-stone-200">
                  <Link href="/brewery-tap-handles" className="text-amber-700 hover:text-amber-800 text-sm font-medium">
                    → View Custom Tap Handles
                  </Link>
                </div>
                <Link href="/microbrewery">
                  <Button className="w-full bg-amber-700 hover:bg-amber-800">
                    Explore Brewery Solutions
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-amber-900 via-stone-900 to-amber-800 relative">
        <div className="absolute inset-0 bg-[url('/placeholder-kqo9m.png')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">The Craftworks Difference</h2>
            <p className="text-xl text-amber-200 max-w-3xl mx-auto">
              Combining traditional craftsmanship with cutting-edge laser technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-playfair">Artisanal Quality</h3>
              <p className="text-amber-100 leading-relaxed">
                Every piece is meticulously crafted with attention to detail that honors your brand's commitment to
                excellence.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-playfair">Local Expertise</h3>
              <p className="text-amber-100 leading-relaxed">
                Deep understanding of the DMV's wine and craft beer culture, serving Maryland, Virginia, and D.C.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-playfair">Partnership Approach</h3>
              <p className="text-amber-100 leading-relaxed">
                We work closely with you to understand your vision and bring it to life with precision and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-800 to-stone-800">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">Ready to Start Your Project?</h2>
          <p className="text-xl text-amber-100 mb-8 leading-relaxed">
            Let's discuss how our laser engraving expertise can bring your winery or brewery's vision to life in the DMV
            market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-stone-800 hover:bg-stone-100 text-lg px-8 py-4">
                Start Your Project
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-4 font-semibold"
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
