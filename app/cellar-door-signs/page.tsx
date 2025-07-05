import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MapPin, Shield, Zap, Users, Star, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Cellar Door Signs | Winery Entrance Signage | Washington DC",
  description:
    "Professional cellar door signs and winery entrance signage with custom laser engraving. Serving wineries in Washington DC, Maryland & Virginia with premium wooden signs.",
  keywords:
    "cellar door signs, winery signage, entrance signs, laser engraved signs, Washington DC, Maryland, Virginia, wooden signs, winery entrance, custom signage",
  openGraph: {
    title: "Custom Cellar Door Signs | Barrel & Vine Designs",
    description: "Premium laser engraved cellar door signs for wineries across the DMV area",
    images: ["/images/winery-cellar-door-sign.png"],
  },
}

export default function CellarDoorSignsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-amber-900 via-stone-900 to-amber-800">
        <div className="absolute inset-0 bg-[url('/images/cellar-door-signs.png')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Custom Cellar Door Signs</h1>
              <p className="text-xl mb-8 text-amber-100 leading-relaxed">
                Welcome visitors with stunning cellar door signs that reflect your winery's character and heritage.
                Professional laser engraving services for wineries across Washington DC, Maryland, and Virginia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4">
                    Design Your Sign
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-amber-900 text-lg px-8 py-4 bg-transparent"
                  >
                    View Gallery
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/winery-cellar-door-sign.png"
                alt="Custom Laser Engraved Cellar Door Sign"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Signage Solutions */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4 font-playfair">Complete Signage Solutions</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              From elegant entrance signs to directional wayfinding, we create cohesive signage that guides and welcomes
              your guests
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Entrance Signs</h3>
                <p className="text-stone-600 mb-4">
                  Grand entrance signs that make a lasting first impression, featuring your winery name, logo, and
                  welcoming message.
                </p>
                <ul className="text-sm text-stone-500 space-y-1">
                  <li>• Multiple size options (24" to 72" wide)</li>
                  <li>• Weather-resistant materials</li>
                  <li>• Illumination options available</li>
                  <li>• Custom mounting solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Cellar Door Markers</h3>
                <p className="text-stone-600 mb-4">
                  Elegant door markers that identify your tasting room, cellar, and private areas with sophisticated
                  style.
                </p>
                <ul className="text-sm text-stone-500 space-y-1">
                  <li>• Premium hardwood construction</li>
                  <li>• Raised lettering options</li>
                  <li>• Brass accent hardware</li>
                  <li>• Indoor/outdoor rated</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Directional Signage</h3>
                <p className="text-stone-600 mb-4">
                  Guide visitors seamlessly through your property with coordinated directional signs for parking,
                  tastings, and facilities.
                </p>
                <ul className="text-sm text-stone-500 space-y-1">
                  <li>• Consistent design language</li>
                  <li>• Arrow and symbol integration</li>
                  <li>• Ground mount or post options</li>
                  <li>• ADA compliant designs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Heritage Plaques</h3>
                <p className="text-stone-600 mb-4">
                  Commemorate your winery's history and achievements with beautifully crafted heritage plaques and
                  historical markers.
                </p>
                <ul className="text-sm text-stone-500 space-y-1">
                  <li>• Historical timeline displays</li>
                  <li>• Award and recognition plaques</li>
                  <li>• Family legacy markers</li>
                  <li>• Bronze and wood combinations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Hours & Information</h3>
                <p className="text-stone-600 mb-4">
                  Keep visitors informed with elegant signs displaying hours, contact information, and important
                  notices.
                </p>
                <ul className="text-sm text-stone-500 space-y-1">
                  <li>• Changeable letter systems</li>
                  <li>• Digital integration options</li>
                  <li>• Multi-language capabilities</li>
                  <li>• Seasonal message updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Regulatory Signage</h3>
                <p className="text-stone-600 mb-4">
                  Ensure compliance while maintaining aesthetic appeal with professionally designed regulatory and
                  safety signage.
                </p>
                <ul className="text-sm text-stone-500 space-y-1">
                  <li>• TTB compliance signage</li>
                  <li>• Safety and emergency signs</li>
                  <li>• Accessibility markers</li>
                  <li>• Custom regulatory solutions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Materials & Craftsmanship */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/cellar-door-signs.png"
                alt="Premium Materials for Cellar Door Signs"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-stone-800 mb-6 font-playfair">
                Premium Materials & Expert Craftsmanship
              </h2>
              <p className="text-xl text-stone-600 mb-8">
                Every sign is crafted using the finest materials and time-tested techniques to ensure lasting beauty and
                durability.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Premium Hardwoods</h3>
                    <p className="text-stone-600">
                      Cedar, redwood, and reclaimed oak selected for beauty, durability, and weather resistance
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Advanced Laser Technology</h3>
                    <p className="text-stone-600">
                      Precision engraving with variable depth control for dimensional lettering and intricate designs
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Weather Protection</h3>
                    <p className="text-stone-600">
                      Marine-grade finishes and UV-resistant coatings that withstand harsh outdoor conditions
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Professional Installation</h3>
                    <p className="text-stone-600">
                      Complete installation services with proper mounting, leveling, and weatherproofing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4 font-playfair">Our Design & Installation Process</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              From initial consultation to final installation, we ensure every detail meets your expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Site Assessment</h3>
              <p className="text-stone-600">
                We visit your location to assess placement options, measure spaces, and understand your specific needs
                and aesthetic preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Design</h3>
              <p className="text-stone-600">
                Our designers create detailed mockups incorporating your branding, messaging, and style preferences with
                multiple revision rounds.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Precision Crafting</h3>
              <p className="text-stone-600">
                Expert craftsmen create your signs using premium materials and precision laser engraving for exceptional
                quality and detail.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Installation</h3>
              <p className="text-stone-600">
                Complete installation service with proper mounting, alignment, and finishing touches to ensure your
                signs look perfect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-20 bg-gradient-to-br from-amber-900 to-stone-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-playfair">
              The Business Impact of Professional Signage
            </h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Quality signage is an investment in your brand that pays dividends in customer experience and business
              growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl font-bold text-amber-400 mb-2">73%</div>
              <h3 className="text-xl font-bold mb-4">Improved Brand Recognition</h3>
              <p className="text-amber-100">
                Professional signage increases brand recognition and helps visitors remember your winery experience.
              </p>
            </div>

            <div className="text-center text-white">
              <div className="text-4xl font-bold text-amber-400 mb-2">45%</div>
              <h3 className="text-xl font-bold mb-4">Increased Foot Traffic</h3>
              <p className="text-amber-100">
                Clear, attractive signage draws more visitors and helps them navigate your property with confidence.
              </p>
            </div>

            <div className="text-center text-white">
              <div className="text-4xl font-bold text-amber-400 mb-2">89%</div>
              <h3 className="text-xl font-bold mb-4">Enhanced Perceived Value</h3>
              <p className="text-amber-100">
                Quality signage elevates the perceived value of your winery and justifies premium pricing for your
                products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4 font-playfair">Serving the DMV Wine Country</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Professional cellar door sign services throughout Washington DC, Maryland, and Virginia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Washington, D.C.</h3>
                <p className="text-stone-600 mb-4">
                  Serving urban wineries and tasting rooms throughout the District with professional signage solutions.
                </p>
                <ul className="text-sm text-stone-500 space-y-1">
                  <li>• Capitol Hill area wineries</li>
                  <li>• Georgetown tasting rooms</li>
                  <li>• Dupont Circle establishments</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Maryland</h3>
                <p className="text-stone-600 mb-4">
                  Supporting Maryland's growing wine industry with custom signage for vineyards and wineries statewide.
                </p>
                <ul className="text-sm text-stone-500 space-y-1">
                  <li>• Montgomery County vineyards</li>
                  <li>• Frederick County wineries</li>
                  <li>• Eastern Shore establishments</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Virginia</h3>
                <p className="text-stone-600 mb-4">
                  Partnering with Virginia's renowned wine country to create stunning signage that reflects regional
                  excellence.
                </p>
                <ul className="text-sm text-stone-500 space-y-1">
                  <li>• Loudoun County wine trail</li>
                  <li>• Fauquier County vineyards</li>
                  <li>• Northern Virginia wineries</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-800">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6 font-playfair">Ready to Welcome Guests in Style?</h2>
          <p className="text-xl text-stone-300 mb-8">
            Let's create stunning cellar door signs that reflect your winery's character and welcome visitors with
            elegance and professionalism.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4">
                Design Your Signs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-stone-800 text-lg px-8 py-4 bg-transparent"
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
