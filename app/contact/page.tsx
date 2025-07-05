import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Clock, MapPin, ArrowRight, Award, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Barrel & Vine Designs - Get Your Custom Laser Engraving Quote | (240) 324-7110",
  description:
    "Contact Barrel & Vine Designs for custom laser engraving services in Washington DC, Maryland & Virginia. Call (240) 324-7110 for a free consultation and quote.",
  keywords:
    "contact laser engraving, custom engraving quote, laser engraving consultation, DMV laser engraving services",
  openGraph: {
    title: "Contact Barrel & Vine Designs - Get Your Custom Laser Engraving Quote",
    description:
      "Contact Barrel & Vine Designs for custom laser engraving services in Washington DC, Maryland & Virginia. Call (240) 324-7110 for a free consultation.",
    images: [{ url: "/images/hero-background.png", width: 1200, height: 630, alt: "Contact Barrel & Vine Designs" }],
  },
}

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Barrel & Vine Designs",
    telephone: "(240) 324-7110",
    email: "info@barrelvinedesigns.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Washington",
      addressRegion: "DC",
      addressCountry: "US",
    },
    openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
  },
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-stone-800 via-amber-900 to-stone-900">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/images/hero-background.png"
              alt="Contact Barrel & Vine Designs"
              fill
              className="object-cover"
            />
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

            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Get Started</h1>
            <p className="text-xl md:text-2xl text-amber-200 mb-8 max-w-3xl mx-auto">
              Ready to Bring Your Vision to Life?
            </p>
            <p className="text-lg text-stone-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Contact us today for a free consultation and custom quote. We're here to help you create something
              extraordinary that reflects your brand's unique character and quality.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">Contact Information</h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Multiple ways to reach us for your custom laser engraving needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Phone */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 text-center overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Call Us</h3>
                  <p className="text-stone-600 mb-4">Ready to discuss your project?</p>
                  <a
                    href="tel:+12403247110"
                    className="text-amber-700 hover:text-amber-800 font-semibold text-lg transition-colors"
                  >
                    (240) 324-7110
                  </a>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 text-center overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Email Us</h3>
                  <p className="text-stone-600 mb-4">Send us your project details</p>
                  <a
                    href="mailto:info@barrelvinedesigns.com"
                    className="text-amber-700 hover:text-amber-800 font-semibold transition-colors"
                  >
                    info@barrelvinedesigns.com
                  </a>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 text-center overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Business Hours</h3>
                  <div className="text-stone-600 space-y-1">
                    <p>Monday - Friday</p>
                    <p className="font-semibold">9:00 AM - 6:00 PM</p>
                    <p>Saturday</p>
                    <p className="font-semibold">10:00 AM - 4:00 PM</p>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 text-center overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Service Area</h3>
                  <div className="text-stone-600 space-y-1">
                    <p>Washington, D.C.</p>
                    <p>Maryland</p>
                    <p>Virginia</p>
                    <p className="text-sm text-amber-700 font-semibold mt-2">DMV Metro Area</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Project Process */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">Our Process</h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                From initial consultation to final delivery, we make the process simple and collaborative
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 text-center overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Consultation</h3>
                  <p className="text-stone-600 leading-relaxed">
                    We discuss your vision, requirements, and timeline. Share your ideas, and we'll provide expert
                    guidance on materials and design options.
                  </p>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 text-center overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Design & Quote</h3>
                  <p className="text-stone-600 leading-relaxed">
                    We create detailed design mockups and provide a comprehensive quote. You'll see exactly what your
                    finished piece will look like before we begin.
                  </p>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 text-center overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Creation & Delivery</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Our skilled craftsmen bring your vision to life with precision laser engraving. We ensure quality at
                    every step and deliver your finished pieces on time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Quick Links */}
        <section className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">Our Services</h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Explore our specialized laser engraving solutions for your industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Winery Services */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-48">
                  <Image src="/images/winery-solutions.png" alt="Winery Solutions" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Award className="w-6 h-6 mb-2" />
                    <h3 className="text-xl font-bold font-playfair">Winery Solutions</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Custom wine boxes, barrel heads, tasting room signage, and award displays for distinguished
                    wineries.
                  </p>
                  <a href="/winery">
                    <Button className="w-full bg-purple-700 hover:bg-purple-800">
                      Explore Winery Services
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Brewery Services */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-48">
                  <Image src="/images/brewery-solutions.png" alt="Brewery Solutions" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Users className="w-6 h-6 mb-2" />
                    <h3 className="text-xl font-bold font-playfair">Brewery Solutions</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Custom tap handles, growlers, flight glasses, and taproom merchandise for craft breweries.
                  </p>
                  <a href="/microbrewery">
                    <Button className="w-full bg-amber-700 hover:bg-amber-800">
                      Explore Brewery Services
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-amber-800 to-stone-800">
          <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-amber-100 mb-8 leading-relaxed">
              Don't wait to bring your vision to life. Contact us today for a free consultation and discover how our
              laser engraving expertise can elevate your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+12403247110">
                <Button
                  size="lg"
                  className="bg-white text-stone-800 hover:bg-stone-100 text-lg px-8 py-4 font-semibold"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call (240) 324-7110
                </Button>
              </a>
              <a href="mailto:info@barrelvinedesigns.com">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-stone-800 text-lg px-8 py-4 bg-transparent"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Send Email
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
