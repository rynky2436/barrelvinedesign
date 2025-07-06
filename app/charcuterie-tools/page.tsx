import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Phone, Award, Heart, Shield, Sparkles, Leaf, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Charcuterie Tools | Laser Engraved Cheese Boards & Knives | Barrel & Vine Designs",
  description:
    "Premium custom charcuterie tools with laser engraving. Cheese boards, knives, serving utensils, and more. Perfect for wineries and gourmet events. Starting at $12. Washington D.C.",
  keywords:
    "custom charcuterie tools, laser engraved cheese boards, charcuterie knives, serving utensils, wine pairing tools, Washington DC",
}

const tools = [
  { name: "Cheese Knives", description: "Perfectly balanced for slicing a variety of cheeses." },
  { name: "Serving Spatulas", description: "For soft cheeses, dips, and spreads." },
  { name: "Charcuterie Forks", description: "Ideal for picking up cured meats and pickles." },
  { name: "Honey Dippers", description: "A touch of sweetness for your board." },
  { name: "Small Serving Bowls", description: "For olives, nuts, and other accompaniments." },
  { name: "Complete Tool Sets", description: "Curated sets for the ultimate serving experience." },
]

export default function CharcuterieTools() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-gray-900">
              Engraved Charcuterie Tools
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-700">
              Elevate your wine and cheese pairings with custom-branded charcuterie tools that exude sophistication.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Create Your Custom Set
            </Link>
          </div>
        </div>
        <div className="absolute top-0 right-0 h-full w-1/2 hidden lg:block">
          <Image
            src="/images/charcuterie-knives.png"
            alt="A set of custom engraved charcuterie tools"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-bl-full"
          />
        </div>
      </section>

      {/* Tools Grid */}
      <main className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-gray-900">The Perfect Pairing for Your Wines</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our custom-engraved charcuterie tools are designed to complement your tasting experience and enhance your
              brand's image.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <div key={tool.name} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800">{tool.name}</h3>
                <p className="mt-2 text-gray-600">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Premium Materials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Materials</h2>
            <p className="text-lg text-gray-600">We use only the finest materials for durability and elegance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Hardwoods</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Walnut</li>
                  <li>• Cherry</li>
                  <li>• Maple</li>
                  <li>• Bamboo</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">High-Grade Steel</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Stainless steel blades</li>
                  <li>• Rust-resistant</li>
                  <li>• Dishwasher safe</li>
                  <li>• Professional grade</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Food-Safe Finishes</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Mineral oil</li>
                  <li>• Beeswax blend</li>
                  <li>• FDA approved</li>
                  <li>• Natural protection</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Hardware</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Brass accents</li>
                  <li>• Leather wraps</li>
                  <li>• Custom handles</li>
                  <li>• Magnetic holders</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Sparkles className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Materials</h3>
              <p className="text-gray-600">
                We use high-quality stainless steel and a variety of woods to create tools that are both beautiful and
                functional.
              </p>
            </div>
            <div className="p-6">
              <Heart className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Enhance the Experience</h3>
              <p className="text-gray-600">
                A cohesive set of branded tools shows attention to detail and enhances the perceived value of your
                offerings.
              </p>
            </div>
            <div className="p-6">
              <Shield className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Built to Last</h3>
              <p className="text-gray-600">
                Our tools are designed for commercial use in a busy tasting room environment, ensuring longevity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wine Pairing Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Perfect for Wine Pairings</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our charcuterie tools are specifically designed to enhance wine and cheese experiences, making them
                perfect for wineries, wine bars, and gourmet events.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Enhanced Presentation</h4>
                    <p className="text-gray-600">Beautiful tools that complement your wine service</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Functional Design</h4>
                    <p className="text-gray-600">Tools designed for optimal cheese and meat preparation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Brand Recognition</h4>
                    <p className="text-gray-600">Custom engraving promotes your winery or restaurant</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Memorable Experience</h4>
                    <p className="text-gray-600">Quality tools create lasting impressions for guests</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/winery-tasting-boards.png"
                alt="Wine and cheese pairing with custom tools"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Care & Maintenance</h2>
            <p className="text-lg text-gray-600">Keep your charcuterie tools in perfect condition with proper care</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Wood Care</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <span>Hand wash with mild soap and warm water</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <span>Dry immediately after washing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <span>Apply mineral oil monthly to maintain finish</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <span>Store in dry, well-ventilated area</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Steel Care</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <span>Dishwasher safe or hand wash</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <span>Dry thoroughly to prevent water spots</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <span>Sharpen knives as needed</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <span>Store in protective sleeves or blocks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="bg-gray-800 text-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-6">
              <Leaf className="mx-auto h-12 w-12 text-green-400" />
              <h3 className="mt-4 text-xl font-semibold">Sustainable Materials</h3>
              <p className="mt-2 text-gray-300">
                Crafted from high-quality, sustainable woods and durable stainless steel for a premium feel and
                long-lasting use.
              </p>
            </div>
            <div className="p-6">
              <Heart className="mx-auto h-12 w-12 text-red-400" />
              <h3 className="mt-4 text-xl font-semibold">Enhance the Experience</h3>
              <p className="mt-2 text-gray-300">
                Branded tools make your tasting room or events more memorable, encouraging social sharing and brand
                loyalty.
              </p>
            </div>
            <div className="p-6">
              <ShieldCheck className="mx-auto h-12 w-12 text-blue-400" />
              <h3 className="mt-4 text-xl font-semibold">Dishwasher Safe Options</h3>
              <p className="mt-2 text-gray-300">
                We offer a range of tools with dishwasher-safe properties, ensuring easy cleanup for your staff and
                customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-amber-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Elevate Your Charcuterie Experience?</h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us today for a custom quote on your charcuterie tools and accessories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="tel:240-324-7110"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
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
