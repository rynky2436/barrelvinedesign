"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-stone-800 via-amber-900 to-stone-900">
        <div className="absolute inset-0 opacity-30">
          <Image src="/images/hero-background.png" alt="Contact Background" fill className="object-cover" />
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

          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Bring Your Vision to Life</h1>
          <p className="text-lg md:text-xl text-stone-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Ready to start your custom laser engraving project? We'd love to help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4 font-playfair">Let's Discuss Your Project</h2>
            <p className="text-xl text-stone-600">
              Call us today to discuss your custom laser engraving needs and get a free consultation.
            </p>
          </div>

          <Card className="bg-white shadow-xl border-0 max-w-2xl mx-auto">
            <CardContent className="p-12 text-center">
              <h3 className="text-2xl font-bold text-stone-800 mb-6 font-playfair">Ready to Get Started?</h3>
              <p className="text-stone-600 mb-8 leading-relaxed text-lg">
                Contact us today to discuss your project and get a free quote. We're here to help bring your winery or
                brewery's vision to life.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center justify-center space-x-4">
                  <Phone className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <span className="text-stone-700 text-lg font-medium">(301) 748-8360</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <Mail className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <span className="text-stone-700 text-lg">info@barrelvinedesigns.com</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <span className="text-stone-700 text-lg">Washington, D.C. Metro</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <Clock className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <div className="text-stone-700 text-lg">
                    <div>Mon-Fri: 9AM-6PM</div>
                    <div>Sat: 10AM-4PM</div>
                  </div>
                </div>
              </div>

              <a href="tel:+13017488360" className="block">
                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-xl py-6 font-semibold"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  Call Now: (301) 748-8360
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4 font-playfair">Service Areas</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Proudly serving wineries and craft breweries throughout the DMV region
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">DC</span>
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">Washington, D.C.</h3>
                <p className="text-stone-600">Serving the nation's capital and surrounding areas</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">MD</span>
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">Maryland</h3>
                <p className="text-stone-600">Throughout Maryland's wine and brewery regions</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">VA</span>
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">Virginia</h3>
                <p className="text-stone-600">Across Virginia's renowned wine country</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4 font-playfair">How We Work</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Our streamlined process ensures your project is completed to perfection
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-2">Consultation</h3>
              <p className="text-stone-600">We discuss your vision and requirements over the phone</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-2">Design</h3>
              <p className="text-stone-600">Custom design creation and approval process</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-2">Production</h3>
              <p className="text-stone-600">Precision laser engraving and finishing</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-2">Delivery</h3>
              <p className="text-stone-600">Quality inspection and timely delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-800 to-stone-800">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
            Let's Bring Your Vision to Life
          </h2>
          <p className="text-xl text-amber-100 mb-8 leading-relaxed">
            Whether you're a winery looking for elegant branding or a brewery seeking distinctive merchandise, we're
            here to help create something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13017488360">
              <Button size="lg" className="bg-white text-stone-800 hover:bg-stone-100 text-lg px-8 py-4 font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
            <a href="mailto:info@barrelvinedesigns.com">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-stone-800 text-lg px-8 py-4"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
