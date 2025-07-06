import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Award, Users, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Winery Solutions - Custom Laser Engraving | Barrel & Vine Designs",
  description:
    "Premium laser engraving services for wineries in Washington DC, Maryland & Virginia. Custom wine boxes, barrel heads, cellar door signs, tasting boards & wine accessories.",
  keywords:
    "winery laser engraving, custom wine boxes, wine barrel heads, cellar door signs, tasting boards, wine accessories, winery branding, Washington DC wineries, Maryland wineries, Virginia wineries",
  openGraph: {
    title: "Winery Solutions - Custom Laser Engraving | Barrel & Vine Designs",
    description:
      "Premium laser engraving services for wineries in Washington DC, Maryland & Virginia. Custom wine boxes, barrel heads, cellar door signs, tasting boards & wine accessories.",
    images: ["/images/winery-solutions.png"],
  },
}

export default function WineryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Premium Winery Solutions</h1>
              <p className="text-xl text-gray-700 mb-8">
                Elevate your winery's brand with our custom laser engraving services. From elegant wine boxes to
                stunning barrel heads, we create memorable pieces that enhance your wine experience.
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
                  href="#services"
                  className="inline-flex items-center px-6 py-3 border-2 border-amber-600 text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/winery-solutions.png"
                alt="Custom winery laser engraving services"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Winery Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive laser engraving solutions designed specifically for wineries, from custom packaging to
              decorative pieces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Custom Wine Boxes */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/images/winery-custom-wine-box.png"
                alt="Custom wine box with laser engraving"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Wine Boxes</h3>
                <p className="text-gray-600 mb-4">
                  Elegant wooden wine boxes with personalized laser engraving. Perfect for special occasions, corporate
                  gifts, and retail packaging.
                </p>
                <Link
                  href="/custom-wine-boxes"
                  className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Wine Barrel Heads */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/images/winery-barrel-head.png"
                alt="Custom wine barrel head engraving"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Wine Barrel Heads</h3>
                <p className="text-gray-600 mb-4">
                  Transform wine barrel heads into stunning decorative pieces with custom laser engraving. Perfect for
                  tasting rooms and home decor.
                </p>
                <Link
                  href="/wine-barrel-heads"
                  className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Cellar Door Signs */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/images/winery-cellar-door-sign.png"
                alt="Custom cellar door sign"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cellar Door Signs</h3>
                <p className="text-gray-600 mb-4">
                  Welcome visitors with custom cellar door signs featuring your winery's branding and personality.
                </p>
                <Link
                  href="/cellar-door-signs"
                  className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Tasting Boards */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/images/winery-tasting-boards.png"
                alt="Custom wine tasting boards"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tasting Boards</h3>
                <p className="text-gray-600 mb-4">
                  Enhance your wine tasting experience with custom engraved tasting boards and serving platters.
                </p>
                <Link
                  href="/tasting-boards"
                  className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Wine Accessories */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/images/winery-wine-accessories.png"
                alt="Custom wine accessories"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Wine Accessories</h3>
                <p className="text-gray-600 mb-4">
                  Complete your wine service with custom bottle openers, wine stoppers, and other branded accessories.
                </p>
                <Link
                  href="/wine-accessories"
                  className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Charcuterie Tools */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/images/winery-charcuterie-tools.png"
                alt="Custom charcuterie tools"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Charcuterie Tools</h3>
                <p className="text-gray-600 mb-4">
                  Elevate your wine and cheese pairings with custom engraved charcuterie knives and serving tools.
                </p>
                <Link
                  href="/charcuterie-tools"
                  className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Winery Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the wine industry and create products that enhance your brand and customer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                High-quality materials and precision laser engraving ensure lasting beauty and durability.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Wine Industry Expertise</h3>
              <p className="text-gray-600">
                We specialize in winery products and understand your unique branding and functional needs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Design</h3>
              <p className="text-gray-600">
                Every piece is customized to reflect your winery's unique brand and aesthetic.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">Quick production times to meet your seasonal needs and special events.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we make the process simple and collaborative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Consultation & Design</h3>
              <p className="text-gray-600">
                We discuss your vision, brand requirements, and create custom designs that perfectly represent your
                winery.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Precision Crafting</h3>
              <p className="text-gray-600">
                Using state-of-the-art laser engraving technology, we create your custom pieces with exceptional detail
                and quality.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Delivery</h3>
              <p className="text-gray-600">
                Each piece is carefully inspected and packaged for safe delivery to your winery, ready to impress your
                customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serving Wineries Across the DMV</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve wineries throughout Washington D.C., Maryland, and Virginia with premium laser engraving
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Washington D.C.</h3>
              <p className="text-gray-600">Urban wineries and wine bars in the nation's capital</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Maryland</h3>
              <p className="text-gray-600">Wineries throughout Maryland's wine regions and counties</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Virginia</h3>
              <p className="text-gray-600">Virginia's renowned wine country and emerging wine regions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Elevate Your Winery's Brand?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and custom quote. Let's create something beautiful for your winery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="tel:240-324-7110"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-amber-600 transition-colors"
            >
              Call (240) 324-7110
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
