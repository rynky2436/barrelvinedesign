"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

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

      {/* Contact Form Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-8 font-playfair">Start Your Project</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-stone-700 text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-stone-700 text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-stone-700 text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-4 font-semibold"
                >
                  Get Started
                </Button>
              </form>
            </div>

            {/* Contact Information Card */}
            <div>
              <Card className="bg-white shadow-xl border-0 h-fit">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-stone-800 mb-4 font-playfair">Ready to Get Started?</h2>
                  <p className="text-stone-600 mb-8 leading-relaxed">
                    Contact us today to discuss your project and get a free quote.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span className="text-stone-700">info@barrelvinedesigns.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span className="text-stone-700">Washington, D.C. Metro</span>
                    </div>
                  </div>

                  <a href="tel:+13017488360" className="block">
                    <Button
                      size="lg"
                      className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-4 font-semibold"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now: (301) 748-8360
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-24 bg-white">
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
              <p className="text-stone-600">We discuss your vision and requirements</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-2">Design</h3>
              <p className="text-stone-600">Custom design creation and approval</p>
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
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-stone-800 text-lg px-8 py-4"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
