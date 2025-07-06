import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Award, Users, Phone, Mail } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Custom Wine Tasting Boards - Laser Engraved | Barrel & Vine Designs",
  description:
    "Premium custom wine tasting boards and serving platters with laser engraving. Perfect for wineries, tasting rooms, and wine enthusiasts in Washington DC, Maryland & Virginia.",
  keywords:
    "wine tasting boards, custom serving platters, laser engraved tasting boards, winery tasting boards, wine serving boards, charcuterie boards, Washington DC wine accessories",
  openGraph: {
    title: "Custom Wine Tasting Boards - Laser Engraved | Barrel & Vine Designs",
    description:
      "Premium custom wine tasting boards and serving platters with laser engraving. Perfect for wineries, tasting rooms, and wine enthusiasts.",
    images: ["/images/winery-tasting-boards.png"],
  },
}

export default function TastingBoardsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Custom Wine Tasting Boards</h1>
              <p className="text-xl text-gray-700 mb-8">
                Enhance your wine tasting experience with beautifully crafted, custom laser-engraved tasting boards and
                serving platters. Perfect for wineries, tasting rooms, and wine enthusiasts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
                >
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="tel:240-324-7110"
                  className="inline-flex items-center px-6 py-3 border-2 border-amber-600 text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (240) 324-7110
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/winery-tasting-boards.png"
                alt="Custom laser engraved wine tasting boards"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Tasting Board Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our custom tasting boards combine functionality with elegant design to create memorable wine experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Materials</h3>
              <p className="text-gray-600">
                Crafted from high-quality hardwoods including oak, walnut, and cherry for durability and beauty.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Engraving</h3>
              <p className="text-gray-600">
                Personalized laser engraving with your winery logo, wine information, tasting notes, or custom designs.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multiple Sizes</h3>
              <p className="text-gray-600">
                Available in various sizes from individual tasting boards to large serving platters for groups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tasting Board Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our popular designs or create something completely custom for your winery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Individual Tasting Boards</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  Perfect for wine flights and individual tastings
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  Includes spaces for multiple wine glasses
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  Custom engraving with wine names and tasting notes
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  Available in 12" x 8" and 16" x 10" sizes
                </li>
              </ul>
              <div className="text-2xl font-bold text-amber-600 mb-4">Starting at $45</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Large Serving Platters</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  Ideal for group tastings and events
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  Accommodates multiple wine glasses and appetizers
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  Custom branding and decorative elements
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  Available in 20" x 14" and 24" x 16" sizes
                </li>
              </ul>
              <div className="text-2xl font-bold text-amber-600 mb-4">Starting at $85</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Customization Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make your tasting boards uniquely yours with our extensive customization options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Wood Types</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Oak</li>
                <li>Walnut</li>
                <li>Cherry</li>
                <li>Maple</li>
                <li>Bamboo</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Engraving Options</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Winery Logos</li>
                <li>Wine Names</li>
                <li>Tasting Notes</li>
                <li>Custom Graphics</li>
                <li>Decorative Borders</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Finishes</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Natural Oil</li>
                <li>Food-Safe Lacquer</li>
                <li>Matte Finish</li>
                <li>Glossy Finish</li>
                <li>Distressed Look</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Add-Ons</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Wine Glass Holders</li>
                <li>Cheese Knife Slots</li>
                <li>Napkin Holders</li>
                <li>Bottle Openers</li>
                <li>Custom Packaging</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From design to delivery, we ensure every tasting board meets our high standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Design Consultation</h3>
              <p className="text-gray-600">
                We work with you to create the perfect design that matches your brand and functional needs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Material Selection</h3>
              <p className="text-gray-600">
                Choose from premium hardwoods and finishes that complement your winery's aesthetic.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Precision Crafting</h3>
              <p className="text-gray-600">
                Our skilled craftsmen create and engrave each board with attention to detail and quality.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Delivery</h3>
              <p className="text-gray-600">
                Each board is carefully inspected and packaged for safe delivery to your location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Enhance Your Wine Tastings?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and custom quote for your tasting boards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get Free Quote
            </Link>
            <Link
              href="tel:240-324-7110"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-amber-600 transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (240) 324-7110
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
