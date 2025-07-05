import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MapPin, Eye, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Cellar Door Signs & Winery Signage | Barrel & Vine Designs",
  description:
    "Professional laser-engraved cellar door signs and winery signage in DC, MD & VA. Create welcoming entrances that reflect your winery's character and quality.",
  keywords:
    "cellar door signs, winery signage, custom wine signs, tasting room signs, vineyard signs, winery entrance signs",
}

export default function CellarDoorSignsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/winery-cellar-door-sign.png"
            alt="Custom Cellar Door Signs"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">
            Custom Cellar Door Signs & Winery Signage
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Create Welcoming Entrances That Reflect Your Winery's Character
          </p>
          <p className="text-lg text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            First impressions matter. Our custom cellar door signs and winery signage create an inviting atmosphere that
            welcomes guests and showcases your brand's commitment to quality and craftsmanship.
          </p>
        </div>
      </section>

      {/* Sign Types Grid */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
              Winery Signage Solutions
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              From elegant entrance signs to detailed directional signage, we create pieces that enhance your visitor
              experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/cellar-door-signs.png"
                  alt="Cellar Door Entrance Signs"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <MapPin className="w-6 h-6 mb-2" />
                  <h3 className="text-xl font-bold">Cellar Door Signs</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-stone-600 mb-4">
                  Elegant entrance signs that welcome visitors to your tasting room with style and sophistication.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-purple-700 hover:bg-purple-800">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/cellar-door-signs.png"
                  alt="Directional Winery Signs"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Eye className="w-6 h-6 mb-2" />
                  <h3 className="text-xl font-bold">Directional Signs</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-stone-600 mb-4">
                  Guide visitors through your property with clear, beautifully crafted directional signage.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-purple-700 hover:bg-purple-800">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/winery-solutions.png" alt="Tasting Room Signs" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Users className="w-6 h-6 mb-2" />
                  <h3 className="text-xl font-bold">Tasting Room Signs</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-stone-600 mb-4">
                  Interior signage that enhances the tasting experience with wine information and branding elements.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-purple-700 hover:bg-purple-800">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Materials & Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-stone-800 mb-6 font-playfair">
                Premium Materials & Craftsmanship
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Our cellar door signs are crafted from premium materials designed to withstand the elements while
                maintaining their beauty for years to come. Each sign is a testament to quality and attention to detail.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">Weather-Resistant Materials</h3>
                    <p className="text-stone-600">
                      Premium hardwoods and weather-resistant finishes ensure your signs look great in all conditions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">Precision Laser Engraving</h3>
                    <p className="text-stone-600">
                      Advanced laser technology creates crisp, detailed engravings that capture every nuance of your
                      design.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">Custom Sizing & Mounting</h3>
                    <p className="text-stone-600">
                      Signs are custom-sized for your space and include professional mounting hardware and installation
                      guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/winery-cellar-door-sign.png"
                alt="Premium Cellar Door Sign Materials"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
            Create Your Perfect Winery Entrance
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Let us help you design signage that welcomes guests and showcases your winery's unique character.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-purple-800 hover:bg-purple-50 text-lg px-8 py-4 font-semibold">
                Get Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+13017488360">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-800 text-lg px-8 py-4 bg-transparent"
              >
                Call (301) 748-8360
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
