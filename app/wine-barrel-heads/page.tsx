import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, Clock, Palette, Shield, Star, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Wine Barrel Heads | Laser Engraved Winery Décor | Washington DC",
  description:
    "Transform wine barrel heads into stunning decorative pieces with custom laser engraving. Serving wineries in DC, Maryland & Virginia with premium barrel head personalization services.",
  keywords:
    "wine barrel heads, custom barrel engraving, winery décor, laser engraved barrels, Washington DC, Maryland, Virginia, barrel head art, wine barrel personalization",
  openGraph: {
    title: "Custom Wine Barrel Heads | Barrel & Vine Designs",
    description: "Premium laser engraved wine barrel heads for wineries across the DMV area",
    images: ["/images/winery-barrel-head.png"],
  },
}

export default function WineBarrelHeadsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-amber-900">
        <div className="absolute inset-0 bg-[url('/images/winery-barrel-head.png')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Custom Wine Barrel Heads</h1>
              <p className="text-xl mb-8 text-purple-100 leading-relaxed">
                Transform authentic wine barrel heads into stunning decorative masterpieces with precision laser
                engraving. Perfect for wineries, tasting rooms, and wine enthusiasts across Washington DC, Maryland, and
                Virginia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-purple-900 text-lg px-8 py-4 bg-transparent"
                  >
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/winery-barrel-head.png"
                alt="Custom Laser Engraved Wine Barrel Head"
                width={600}
                height={600}
                className="rounded-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4 font-playfair">Barrel Head Engraving Services</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              From winery logos to custom artwork, we transform barrel heads into unique pieces that tell your story
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Winery Logo Engraving</h3>
                <p className="text-stone-600 mb-4">
                  Professional reproduction of your winery's logo with precise detail and perfect proportions on
                  authentic barrel heads.
                </p>
                <ul className="text-sm text-stone-500 space-y-1">
                  <li>• High-resolution logo conversion</li>
                  <li>• Multiple size options available</li>
                  <li>• Perfect for tasting rooms</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Palette className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Custom Artwork</h3>
                <p className="text-stone-600 mb-4">
                  Transform your vision into reality with custom artwork, from vineyard landscapes to family crests and
                  commemorative designs.
                </p>
                <ul className="text-sm text-stone-500 space-y-1">
                  <li>• Original design creation</li>
                  <li>• Artwork adaptation services</li>
                  <li>• Unlimited revisions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Commemorative Pieces</h3>
                <p className="text-stone-600 mb-4">
                  Celebrate milestones, awards, and special occasions with personalized barrel heads that capture
                  important moments.
                </p>
                <ul className="text-sm text-stone-500 space-y-1">
                  <li>• Anniversary celebrations</li>
                  <li>• Award commemorations</li>
                  <li>• Special event markers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Family Crest Engraving</h3>
                <p className="text-stone-600 mb-4">
                  Honor your family heritage with detailed family crest engravings that showcase your winery's legacy
                  and tradition.
                </p>
                <ul className="text-sm text-stone-500 space-y-1">
                  <li>• Heraldic accuracy maintained</li>
                  <li>• Historical research included</li>
                  <li>• Premium finishing options</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Vintage Date Marking</h3>
                <p className="text-stone-600 mb-4">
                  Mark significant vintage years with elegant date engraving, perfect for displaying your most
                  celebrated harvests.
                </p>
                <ul className="text-sm text-stone-500 space-y-1">
                  <li>• Multiple font options</li>
                  <li>• Decorative border designs</li>
                  <li>• Weather-resistant finish</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Corporate Branding</h3>
                <p className="text-stone-600 mb-4">
                  Professional corporate branding solutions for wine distributors, restaurants, and hospitality
                  businesses.
                </p>
                <ul className="text-sm text-stone-500 space-y-1">
                  <li>• Brand guideline compliance</li>
                  <li>• Bulk order discounts</li>
                  <li>• Consistent quality assurance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4 font-playfair">Our Barrel Head Creation Process</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              From concept to completion, we ensure every barrel head meets our exacting standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Design Consultation</h3>
              <p className="text-stone-600">
                We work with you to understand your vision, brand requirements, and design preferences for your custom
                barrel head.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Barrel Selection</h3>
              <p className="text-stone-600">
                Choose from authentic wine barrel heads sourced from premium cooperages, ensuring quality wood and
                character.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Precision Engraving</h3>
              <p className="text-stone-600">
                Using state-of-the-art laser technology, we engrave your design with exceptional detail and consistency.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Finishing & Delivery</h3>
              <p className="text-stone-600">
                Final quality inspection, protective finishing application, and careful packaging for safe delivery to
                your location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Specifications */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-stone-800 mb-6 font-playfair">
                Premium Materials & Craftsmanship
              </h2>
              <p className="text-xl text-stone-600 mb-8">
                We use only the finest authentic wine barrel heads, sourced from premium cooperages and aged to
                perfection.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Authentic Oak Construction</h3>
                    <p className="text-stone-600">
                      French and American oak barrel heads with natural wine staining and character marks
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Precision Laser Technology</h3>
                    <p className="text-stone-600">
                      High-resolution engraving with 0.1mm accuracy for crisp, detailed results
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Protective Finishing</h3>
                    <p className="text-stone-600">
                      Food-safe, UV-resistant finishes that preserve the wood and engraving for years
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Custom Mounting Options</h3>
                    <p className="text-stone-600">
                      Wall mounting hardware, display stands, and custom installation solutions available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/barrel-engravings.png"
                alt="Wine Barrel Head Materials and Craftsmanship"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-amber-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-playfair">Why Choose Custom Barrel Heads?</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Enhance your winery's ambiance and brand presence with authentic, handcrafted décor
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Brand Enhancement</h3>
              <p className="text-purple-100">
                Strengthen your winery's visual identity with custom branded décor that tells your unique story.
              </p>
            </div>

            <div className="text-center text-white">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Authentic Character</h3>
              <p className="text-purple-100">
                Add genuine wine country charm with authentic barrel heads that showcase your commitment to tradition.
              </p>
            </div>

            <div className="text-center text-white">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Conversation Starters</h3>
              <p className="text-purple-100">
                Create memorable experiences for visitors with unique décor pieces that spark conversations and photo
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-800">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6 font-playfair">Ready to Create Your Custom Barrel Head?</h2>
          <p className="text-xl text-stone-300 mb-8">
            Let's discuss your vision and create a stunning barrel head that perfectly represents your winery's
            character and heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4">
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
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
