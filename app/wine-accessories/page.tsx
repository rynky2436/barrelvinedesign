import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Star, Phone, Package, Gift, Truck } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Wine Accessories | Laser Engraved Bottle Openers & Wine Tools | Barrel & Vine Designs",
  description:
    "Premium custom wine accessories with laser engraving. Bottle openers, wine stoppers, corkscrews, and more. Perfect for wineries and wine events. Starting at $8. Washington D.C.",
  keywords:
    "custom wine accessories, laser engraved bottle openers, wine stoppers, corkscrews, winery merchandise, Washington DC",
}

const accessories = [
  { name: "Corkscrews", image: "/images/wine-accessories.png" },
  { name: "Wine Stoppers", image: "/images/winery-wine-accessories.png" },
  { name: "Bottle Openers", image: "/images/brewery-bottle-opener.png" },
  { name: "Aerators & Pourers", image: "/images/wine-accessories.png" },
  { name: "Foil Cutters", image: "/images/winery-wine-accessories.png" },
  { name: "Gift Sets", image: "/images/winery-luxury-gift-box.png" },
]

export default function WineAccessories() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-24 sm:py-32 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-amber-400">
            Branded Wine Accessories
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto text-gray-300">
            Complete your winery's experience with custom-engraved accessories that customers will love and use.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Design Your Accessories
          </Link>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-gray-900">A Tool for Every Occasion</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of high-quality accessories, ready for your custom branding.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-8">
            {accessories.map((item) => (
              <div key={item.name} className="group relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:opacity-75 transition-opacity"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-lg sm:text-xl font-bold text-center px-2">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volume Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Volume Pricing</h2>
            <p className="text-lg text-gray-600">
              Save more with larger orders - perfect for events, corporate gifts, and retail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <Package className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">25-49 Pieces</h3>
              <p className="text-3xl font-bold text-amber-600 mb-4">10% Off</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Perfect for small events</li>
                <li>• Custom engraving included</li>
                <li>• 7-10 day turnaround</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center border-2 border-amber-600">
              <Package className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">50-99 Pieces</h3>
              <p className="text-3xl font-bold text-amber-600 mb-4">15% Off</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Great for corporate gifts</li>
                <li>• Premium packaging options</li>
                <li>• 10-14 day turnaround</li>
              </ul>
              <div className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4">
                Most Popular
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <Package className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100+ Pieces</h3>
              <p className="text-3xl font-bold text-amber-600 mb-4">20% Off</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Ideal for retail inventory</li>
                <li>• Custom packaging available</li>
                <li>• 14-21 day turnaround</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Customization */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Materials & Customization</h2>
            <p className="text-lg text-gray-600">Choose from premium materials and endless customization options</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Premium Materials</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Stainless Steel</h4>
                    <p className="text-gray-600">Durable, rust-resistant, and dishwasher safe</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Premium Hardwoods</h4>
                    <p className="text-gray-600">Walnut, cherry, maple, and bamboo options</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Zinc Alloy</h4>
                    <p className="text-gray-600">Heavy-duty construction with premium feel</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Acrylic</h4>
                    <p className="text-gray-600">Modern, colorful options for contemporary designs</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Customization Options</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-amber-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Logo Engraving</h4>
                    <p className="text-gray-600">Precise laser engraving of your company logo</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-amber-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Custom Text</h4>
                    <p className="text-gray-600">Names, dates, messages, or wine information</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-amber-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Color Options</h4>
                    <p className="text-gray-600">Various finishes and color combinations available</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-amber-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Packaging</h4>
                    <p className="text-gray-600">Custom boxes, pouches, and presentation options</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Gift className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Perfect for Retail</h3>
              <p className="text-gray-600">
                Increase your revenue with a line of high-quality, branded merchandise your customers will love.
              </p>
            </div>
            <div className="p-6">
              <Star className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Corporate Gifting</h3>
              <p className="text-gray-600">
                Create memorable corporate gifts and wine club packages with custom accessories.
              </p>
            </div>
            <div className="p-6">
              <Truck className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Bulk Orders & Fast Turnaround</h3>
              <p className="text-gray-600">
                Whether you need a small batch or a large order for an event, we offer competitive pricing and efficient
                production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-amber-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Your Custom Wine Accessories?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact us today for a custom quote and bring your wine accessory vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="tel:240-324-7110"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
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
