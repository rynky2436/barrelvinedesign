import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Award, Users, Clock, Phone, Mail } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Custom Wine Accessories - Laser Engraved | Barrel & Vine Designs",
  description:
    "Premium custom wine accessories with laser engraving. Bottle openers, wine stoppers, corkscrews, and more for wineries in Washington DC, Maryland & Virginia.",
  keywords:
    "custom wine accessories, laser engraved bottle openers, wine stoppers, corkscrews, wine tools, winery accessories, branded wine accessories, Washington DC wine accessories",
  openGraph: {
    title: "Custom Wine Accessories - Laser Engraved | Barrel & Vine Designs",
    description:
      "Premium custom wine accessories with laser engraving. Bottle openers, wine stoppers, corkscrews, and more for wineries.",
    images: ["/images/winery-wine-accessories.png"],
  },
}

export default function WineAccessoriesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Custom Wine Accessories</h1>
              <p className="text-xl text-gray-700 mb-8">
                Complete your wine service with premium custom-engraved accessories. From elegant bottle openers to
                personalized wine stoppers, we create functional pieces that showcase your brand.
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
                src="/images/winery-wine-accessories.png"
                alt="Custom laser engraved wine accessories"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Wine Accessory Collection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your wine service with our comprehensive collection of custom-engraved accessories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bottle Openers */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/images/bottle-openers.png"
                alt="Custom laser engraved bottle openers"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Bottle Openers</h3>
                <p className="text-gray-600 mb-4">
                  Premium wooden and metal bottle openers with custom laser engraving. Perfect for retail sales and
                  promotional gifts.
                </p>
                <div className="text-amber-600 font-semibold">Starting at $15</div>
              </div>
            </div>

            {/* Wine Stoppers */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/images/wine-accessories.png"
                alt="Custom wine stoppers"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Wine Stoppers</h3>
                <p className="text-gray-600 mb-4">
                  Elegant wine stoppers with custom engraving. Available in wood, metal, and combination materials.
                </p>
                <div className="text-amber-600 font-semibold">Starting at $12</div>
              </div>
            </div>

            {/* Corkscrews */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/images/wine-glassware.png"
                alt="Custom corkscrews"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Corkscrews</h3>
                <p className="text-gray-600 mb-4">
                  Professional-grade corkscrews with custom engraving on wooden handles. Essential for any wine service.
                </p>
                <div className="text-amber-600 font-semibold">Starting at $25</div>
              </div>
            </div>

            {/* Wine Aerators */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/images/coasters.png"
                alt="Custom wine aerators"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Wine Aerators</h3>
                <p className="text-gray-600 mb-4">
                  Premium wine aerators with custom engraved wooden bases. Enhance the wine tasting experience.
                </p>
                <div className="text-amber-600 font-semibold">Starting at $35</div>
              </div>
            </div>

            {/* Wine Charms */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/images/wine-beer-tags.png"
                alt="Custom wine charms"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Wine Charms</h3>
                <p className="text-gray-600 mb-4">
                  Decorative wine glass charms with custom engraving. Perfect for wine tastings and events.
                </p>
                <div className="text-amber-600 font-semibold">Starting at $8</div>
              </div>
            </div>

            {/* Wine Pourers */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/images/serving-trays.png"
                alt="Custom wine pourers"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Wine Pourers</h3>
                <p className="text-gray-600 mb-4">
                  Professional wine pourers with custom engraved wooden handles for precise pouring and presentation.
                </p>
                <div className="text-amber-600 font-semibold">Starting at $18</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Wine Accessories?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality craftsmanship meets functional design in every piece we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Materials</h3>
              <p className="text-gray-600">
                High-quality woods, metals, and finishes ensure durability and elegant appearance.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Branding</h3>
              <p className="text-gray-600">
                Every piece can be personalized with your winery logo, name, or custom design.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bulk Pricing</h3>
              <p className="text-gray-600">
                Competitive pricing for bulk orders, perfect for retail sales and promotional events.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Turnaround</h3>
              <p className="text-gray-600">
                Fast production times to meet your inventory needs and special event deadlines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Bulk Pricing Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Save more when you order in larger quantities. Perfect for retail inventory and events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Starter Pack</h3>
              <div className="text-3xl font-bold text-amber-600 mb-4">25-49 pieces</div>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>10% discount</li>
                <li>Mix and match products</li>
                <li>Custom packaging available</li>
                <li>2-week delivery</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-8 rounded-lg text-center border-2 border-amber-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Business Pack</h3>
              <div className="text-3xl font-bold text-amber-600 mb-4">50-99 pieces</div>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>15% discount</li>
                <li>Free custom packaging</li>
                <li>Priority production</li>
                <li>10-day delivery</li>
              </ul>
              <div className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Wholesale Pack</h3>
              <div className="text-3xl font-bold text-amber-600 mb-4">100+ pieces</div>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>20% discount</li>
                <li>Free shipping</li>
                <li>Dedicated account manager</li>
                <li>7-day delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Enhance Your Wine Service?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and custom quote for your wine accessories.
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
