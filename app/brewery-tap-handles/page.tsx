import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Beer, Zap, Award, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Brewery Tap Handles | Craft Beer Tap Handle Manufacturing | DC, MD, VA",
  description:
    "Custom laser engraved brewery tap handles for craft breweries in Washington DC, Maryland & Virginia. Unique wooden tap handles with brewery logos and beer names. Professional tap handle manufacturing.",
  keywords:
    "custom brewery tap handles, craft beer tap handles, wooden tap handles, brewery tap handle manufacturing, laser engraved tap handles, DC MD VA breweries",
  openGraph: {
    title: "Custom Brewery Tap Handles | Craft Beer Tap Handle Manufacturing",
    description:
      "Professional custom tap handle manufacturing for craft breweries. Laser engraved wooden tap handles with brewery branding in Washington DC, Maryland & Virginia.",
    images: [{ url: "/images/brewery-tap-handle.png", width: 1200, height: 630, alt: "Custom Brewery Tap Handles" }],
  },
}

const tapHandleSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Custom Brewery Tap Handles",
  description: "Custom laser engraved wooden tap handles for craft breweries",
  brand: {
    "@type": "Brand",
    name: "Barrel & Vine Designs",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Barrel & Vine Designs",
  },
}

export default function BreweryTapHandlesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tapHandleSchema) }} />
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/brewery-tap-handle.png"
              alt="Custom Brewery Tap Handle Manufacturing"
              fill
              className="object-cover"
              priority
            />
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

            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">
              Custom Brewery Tap Handles & Craft Beer Tap Handle Manufacturing
            </h1>
            <p className="text-xl md:text-2xl text-amber-200 mb-8 max-w-3xl mx-auto">
              Professional Wooden Tap Handles with Laser Engraving in Washington DC, Maryland & Virginia
            </p>
            <p className="text-lg text-amber-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Make your craft brewery stand out with distinctive custom tap handles that showcase your brand
              personality. Our laser engraved wooden tap handles are crafted from premium materials and designed to make
              a lasting impression on your customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-amber-800 hover:bg-amber-50 text-lg px-8 py-4 font-semibold">
                  Get Custom Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-amber-800 bg-white hover:bg-amber-50 hover:text-amber-900 text-lg px-8 py-4"
                >
                  View Design Gallery
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Tap Handle Styles */}
        <section className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
                Custom Tap Handle Styles
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Choose from our collection of tap handle designs or create a completely custom shape for your brewery
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Classic Wooden Handle */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/brewery-tap-handle.png"
                    alt="Classic Wooden Tap Handle with Brewery Logo"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Beer className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Classic Wooden Handle</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Traditional wooden tap handle design with laser engraved brewery logo and beer name. Perfect for any
                    taproom aesthetic.
                  </p>
                  <ul className="text-sm text-stone-600 mb-4 space-y-1">
                    <li>• Premium hardwood construction</li>
                    <li>• Standard tap handle threading</li>
                    <li>• Custom logo and text engraving</li>
                    <li>• Multiple wood finish options</li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-amber-700 hover:bg-amber-800">Get Quote</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Unique Shaped Handles */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/unique-tap-handles.png"
                    alt="Unique Shaped Custom Tap Handles"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Zap className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Unique Shaped Handles</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Custom shaped tap handles designed to match your brewery's personality and beer themes. Stand out
                    from the competition.
                  </p>
                  <ul className="text-sm text-stone-600 mb-4 space-y-1">
                    <li>• Custom shape design and cutting</li>
                    <li>• Beer-themed shapes available</li>
                    <li>• Logo integration into shape</li>
                    <li>• Conversation starter designs</li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-amber-700 hover:bg-amber-800">Get Quote</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Chalkboard Tap Handles */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/chalkboard-beer-boards.png"
                    alt="Chalkboard Style Tap Handles"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Award className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Chalkboard Style</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Innovative chalkboard tap handles that allow you to change beer names and information as your taps
                    rotate.
                  </p>
                  <ul className="text-sm text-stone-600 mb-4 space-y-1">
                    <li>• Writable chalkboard surface</li>
                    <li>• Permanent logo engraving</li>
                    <li>• Easy to update beer names</li>
                    <li>• Includes chalk and eraser</li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-amber-700 hover:bg-amber-800">Get Quote</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* LED Illuminated Handles */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/brewery-tap-handle.png"
                    alt="LED Illuminated Tap Handles"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Zap className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">LED Illuminated</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Eye-catching LED illuminated tap handles that make your taps glow and draw attention to featured
                    beers.
                  </p>
                  <ul className="text-sm text-stone-600 mb-4 space-y-1">
                    <li>• Built-in LED lighting system</li>
                    <li>• Multiple color options</li>
                    <li>• Low voltage operation</li>
                    <li>• Easy installation and maintenance</li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-amber-700 hover:bg-amber-800">Get Quote</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Seasonal/Rotating Handles */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/brewery-tap-handle.png"
                    alt="Seasonal Rotating Tap Handles"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Users className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Seasonal Collection</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Seasonal tap handle sets that rotate with your beer offerings throughout the year. Keep your taproom
                    fresh and exciting.
                  </p>
                  <ul className="text-sm text-stone-600 mb-4 space-y-1">
                    <li>• Spring, summer, fall, winter themes</li>
                    <li>• Holiday-specific designs</li>
                    <li>• Bulk pricing for sets</li>
                    <li>• Storage solutions included</li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-amber-700 hover:bg-amber-800">Get Quote</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Branded Handle Sets */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/brewery-tap-handle.png"
                    alt="Complete Branded Tap Handle Sets"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Award className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Complete Handle Sets</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Complete tap handle sets for new breweries or taproom renovations. Consistent branding across all
                    your taps.
                  </p>
                  <ul className="text-sm text-stone-600 mb-4 space-y-1">
                    <li>• 6, 12, 24+ handle sets available</li>
                    <li>• Consistent design theme</li>
                    <li>• Volume pricing discounts</li>
                    <li>• Coordinated taproom branding</li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-amber-700 hover:bg-amber-800">Get Quote</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-stone-800 mb-6 font-playfair">Custom Design Process</h2>
                <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                  Our collaborative design process ensures your tap handles perfectly represent your brewery's brand and
                  beer offerings. From concept to installation, we work with you every step of the way.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-2">Consultation & Concept</h3>
                      <p className="text-stone-600">
                        We discuss your brewery's brand, beer styles, and taproom aesthetic to develop initial concepts.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-2">Design & Mockups</h3>
                      <p className="text-stone-600">
                        Our designers create detailed mockups showing exactly how your tap handles will look.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-2">Production & Quality Control</h3>
                      <p className="text-stone-600">
                        Precision laser engraving and finishing with rigorous quality control at every step.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-2">Delivery & Installation Support</h3>
                      <p className="text-stone-600">
                        Fast delivery with installation guidance to get your new tap handles up and pouring.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/brewery-tap-handle.png"
                alt="Custom Tap Handle Design Process"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Materials & Specifications */}
        <section className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
                Materials & Specifications
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Premium materials and professional specifications ensure your tap handles perform beautifully for years
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">W</span>
                </div>
                <h3 className="font-bold text-stone-800 mb-2">Premium Woods</h3>
                <p className="text-sm text-stone-600">Oak, maple, cherry, walnut, bamboo options</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">T</span>
                </div>
                <h3 className="font-bold text-stone-800 mb-2">Standard Threading</h3>
                <p className="text-sm text-stone-600">3/8"-16 UNC standard tap handle threading</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">F</span>
                </div>
                <h3 className="font-bold text-stone-800 mb-2">Finish Options</h3>
                <p className="text-sm text-stone-600">Natural, stained, painted, weathered finishes</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">D</span>
                </div>
                <h3 className="font-bold text-stone-800 mb-2">Durability</h3>
                <p className="text-sm text-stone-600">Commercial grade construction for heavy use</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-amber-800 to-amber-900">
          <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
              Ready to Create Your Custom Tap Handles?
            </h2>
            <p className="text-xl text-amber-100 mb-8 leading-relaxed">
              Let's design tap handles that make your brewery unforgettable. Contact us today for a free consultation
              and custom quote for your tap handle project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-amber-800 hover:bg-amber-50 text-lg px-8 py-4 font-semibold">
                  Get Custom Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+13017488360">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-amber-800 text-lg px-8 py-4 bg-transparent"
                >
                  Call (301) 748-8360
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
