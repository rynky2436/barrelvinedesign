"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, Users, Heart, Target, Zap, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-stone-800 via-amber-900 to-stone-900">
        <div className="absolute inset-0 opacity-30">
          <Image src="/images/about-hero.png" alt="Laser Engraving in Action" fill className="object-cover" />
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

          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">About Us</h1>
          <p className="text-xl md:text-2xl text-amber-200 mb-8 max-w-3xl mx-auto">
            Celebrating Character & Craftsmanship
          </p>
          <p className="text-lg text-stone-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Your trusted partner for premium laser engraving services in the Washington, D.C. area, specializing in
            custom solutions for craft beverage businesses.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-stone-800 mb-6 font-playfair">Our Story</h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Welcome to Barrels & Vines Design, your trusted partner for premium laser engraving services in the
                Washington, D.C. area. We specialize in creating custom, high-quality engraved products for
                microbreweries, wineries, distilleries, and other craft-focused businesses looking to elevate their
                brand.
              </p>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Our studio was founded with one simple mission: to celebrate the character and craftsmanship behind
                every barrel, every vine, and every pour. From custom tap handles and engraved wine crates to branded
                barware and promotional items, we help local and regional businesses bring their identity to life—one
                beautifully engraved piece at a time.
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                At Barrels & Vines Design, we combine cutting-edge laser engraving technology with an artisan's touch.
                Every project is crafted with precision, care, and a deep appreciation for the industries we serve.
                Whether you're a small craft brewery, a boutique winery, or a startup distillery, we offer tailored
                solutions that make your brand unforgettable.
              </p>
            </div>

            <div className="relative">
              <Image
                src="/images/about-hero.png"
                alt="Laser Engraving Process"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">Our Mission</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Supporting the vibrant craft beverage community with exceptional engraving services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 text-center overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Precision Craftsmanship</h3>
                <p className="text-stone-600 leading-relaxed">
                  Every project is crafted with precision, care, and a deep appreciation for the industries we serve.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 text-center overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Premium Quality</h3>
                <p className="text-stone-600 leading-relaxed">
                  We combine cutting-edge laser engraving technology with an artisan's touch for superior results.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 text-center overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Creative Partnership</h3>
                <p className="text-stone-600 leading-relaxed">
                  You're getting a creative collaborator who understands your story and your audience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Regional Focus Section */}
      <section className="py-24 bg-gradient-to-br from-amber-900 via-stone-900 to-amber-800 relative">
        <div className="absolute inset-0 bg-[url('/images/hero-background.png')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">Serving the DMV Region</h2>
            <p className="text-xl text-amber-200 max-w-3xl mx-auto">
              Proud to support the vibrant beverage scene in Washington, D.C., Maryland, and Virginia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-playfair">Local Expertise</h3>
              <p className="text-amber-100 leading-relaxed">
                Deep understanding of the DMV's craft beverage culture and community needs.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-playfair">Tailored Solutions</h3>
              <p className="text-amber-100 leading-relaxed">
                Custom solutions for craft breweries, boutique wineries, and startup distilleries.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-playfair">Brand Identity</h3>
              <p className="text-amber-100 leading-relaxed">
                Helping businesses bring their identity to life with beautifully engraved pieces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-stone-800 to-amber-900">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">Let's Create Something Bold</h2>
          <p className="text-xl text-amber-100 mb-8 leading-relaxed">
            Ready to create something bold, beautiful, and uniquely yours? We'd love to collaborate with you and bring
            your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-stone-800 hover:bg-stone-100 text-lg px-8 py-4 font-semibold">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-stone-800 text-lg px-8 py-4 bg-transparent"
              >
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
