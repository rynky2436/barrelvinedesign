import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Menu, MapPin, Users, Palette, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Taproom Signage & Brewery Interior Signs | Barrel & Vine Designs",
  description:
    "Professional taproom signage and brewery interior signs in DC, MD & VA. Menu boards, directional signs, and decorative elements that enhance your brewery atmosphere.",
  keywords:
    "taproom signage, brewery signs, menu boards, beer boards, brewery interior signs, taproom decor, craft brewery signage",
}

export default function TaproomSignagePage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/brewery-taproom-sign.png"
            alt="Custom Taproom Signage"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">
            Custom Taproom Signage & Brewery Interior Signs
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 mb-8 max-w-3xl mx-auto">
            Create an Authentic Brewery Atmosphere with Professional Signage
          </p>
          <p className="text-lg text-amber-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your taproom into an immersive brand experience with custom signage that guides, informs, and
            delights your customers. From beer menus to decorative elements, every sign tells your story.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-amber-800 hover:bg-amber-50 text-lg px-8 py-4 font-semibold">
                Design Your Signage
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Signage Types */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
              Taproom Signage Solutions
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              From functional menu boards to decorative elements, we create signage that enhances your taproom
              experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/brewery-menu-board.png"
                  alt="Beer Menu Boards"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Menu className="w-6 h-6 mb-2" />
                  <h3 className="text-lg font-bold">Beer Menu Boards</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-stone-600 mb-4">
                  Custom beer menu boards that showcase your current offerings with style and easy readability.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/chalkboard-beer-boards.png"
                  alt="Chalkboard Beer Boards"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Palette className="w-6 h-6 mb-2" />
                  <h3 className="text-lg font-bold">Chalkboard Signs</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-stone-600 mb-4">
                  Traditional chalkboard signs perfect for daily specials, events, and rotating beer selections.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/taproom-atmosphere-decor.png"
                  alt="Taproom Atmosphere Decor"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Users className="w-6 h-6 mb-2" />
                  <h3 className="text-lg font-bold">Directional Signs</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-stone-600 mb-4">
                  Guide customers through your space with clear, branded directional and informational signage.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
              Why Choose Professional Taproom Signage?
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Quality signage is an investment in your brand and customer experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">Brand Consistency</h3>
              <p className="text-stone-600">
                Maintain your brand identity throughout your taproom with cohesive signage design.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">Customer Experience</h3>
              <p className="text-stone-600">
                Help customers navigate your space and discover your offerings with clear, attractive signage.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">Space Optimization</h3>
              <p className="text-stone-600">
                Maximize your taproom layout with strategic placement of informational and decorative signs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">Atmosphere Creation</h3>
              <p className="text-stone-600">
                Set the mood and tell your story through thoughtfully designed decorative signage elements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-stone-800 to-stone-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Ready to Transform Your Taproom?</h2>
          <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your taproom signage needs and create a cohesive brand experience for your customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-4 font-semibold">
                Get Your Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="tel:+12403247110">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-stone-800 text-lg px-8 py-4 font-semibold bg-transparent"
              >
                Call (240) 324-7110
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
