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
          <Image src="/images/hero-background.png" alt="Workshop Background" fill className="object-cover" />
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
            Crafting Excellence Through Precision & Passion
          </p>
          <p className="text-lg text-stone-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Creating custom laser engraving solutions for wineries and breweries across the DMV region with artisanal
            quality and unwavering attention to detail.
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
                We started as a small workshop with a passion for precision and a love for the craft. What began as a
                fascination with the intersection of traditional craftsmanship and modern laser technology has evolved
                into a trusted partnership with some of the finest wineries and breweries in the DMV region.
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Over the years, we've honed our skills and expanded our capabilities, but our core mission remains
                unchanged: to provide exceptional laser engraving services that honor the artistry and dedication of our
                clients' craft.
              </p>
            </div>

            <div className="relative">
              <Image
                src="/images/winery-custom-wine-box.png"
                alt="Custom Wine Box"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">Our Values</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              The principles that guide every project and partnership
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 text-center overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Precision</h3>
                <p className="text-stone-600 leading-relaxed">
                  We are committed to delivering accurate and flawless results every time, ensuring each piece meets the
                  highest standards of quality and craftsmanship.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 text-center overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Quality</h3>
                <p className="text-stone-600 leading-relaxed">
                  We use only the finest materials and the latest laser technology to ensure superior quality that
                  reflects the excellence of your brand.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 text-center overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Partnership</h3>
                <p className="text-stone-600 leading-relaxed">
                  We prioritize our clients' needs and strive to exceed expectations, building lasting relationships
                  based on trust and mutual respect.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-amber-900 via-stone-900 to-amber-800 relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200&query=dark+wood+workshop+tools')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">Why Choose Us</h2>
            <p className="text-xl text-amber-200 max-w-3xl mx-auto">
              What sets us apart in the world of custom laser engraving
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-playfair">Local Expertise</h3>
              <p className="text-amber-100 leading-relaxed">
                Deep understanding of the DMV's wine and craft beer culture, serving Maryland, Virginia, and D.C. with
                regional insight.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-playfair">Cutting-Edge Technology</h3>
              <p className="text-amber-100 leading-relaxed">
                State-of-the-art laser engraving equipment combined with traditional craftsmanship techniques for
                superior results.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-playfair">Collaborative Approach</h3>
              <p className="text-amber-100 leading-relaxed">
                We work closely with you throughout the entire process, from initial concept to final delivery, ensuring
                your vision comes to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-stone-800 to-amber-900">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">Let's Create Together</h2>
          <p className="text-xl text-amber-100 mb-8 leading-relaxed">
            Ready to work with a team that understands your craft and shares your commitment to excellence? We'd love to
            hear about your vision and bring it to life.
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
                className="border-white text-white hover:bg-white hover:text-stone-800 text-lg px-8 py-4"
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
