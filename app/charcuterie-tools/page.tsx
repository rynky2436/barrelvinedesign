import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Award, Users, Clock, Phone, Mail } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Custom Charcuterie Tools - Laser Engraved | Barrel & Vine Designs",
  description:
    "Premium custom charcuterie tools and cheese boards with laser engraving. Perfect for wineries, restaurants, and wine enthusiasts in Washington DC, Maryland & Virginia.",
  keywords:
    "custom charcuterie tools, laser engraved cheese boards, charcuterie knives, serving utensils, wine pairing tools, custom cheese boards, Washington DC charcuterie",
  openGraph: {
    title: "Custom Charcuterie Tools - Laser Engraved | Barrel & Vine Designs",
    description:
      "Premium custom charcuterie tools and cheese boards with laser engraving. Perfect for wineries, restaurants, and wine enthusiasts.",
    images: ["/images/winery-charcuterie-tools.png"],
  },
}

export default function CharcuterieToolsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Custom Charcuterie Tools</h1>
              <p className="text-xl text-gray-700 mb-8">
                Elevate your wine and cheese pairings with beautifully crafted, custom-engraved charcuterie tools and
                serving pieces. Perfect for wineries, restaurants, and wine enthusiasts.
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
                src="/images/winery-charcuterie-tools.png"
                alt="Custom laser engraved charcuterie tools"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Charcuterie Tool Collection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete your wine and cheese service with our premium collection of custom-engraved charcuterie tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cheese Boards */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/images/charcuterie-knives.png"
                alt="Custom laser engraved cheese boards"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cheese Boards</h3>
                <p className="text-gray-600 mb-4">
                  Premium hardwood cheese boards with custom laser engraving. Available in various sizes for individual
                  servings to large gatherings.
                </p>
                <div className="text-amber-600 font-semibold">Starting at $35</div>
              </div>
            </div>

            {/* Cheese Knives */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/images/winery-charcuterie-tools.png"
                alt="Custom cheese knives"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cheese Knives</h3>
                <p className="text-gray-600 mb-4">
                  Professional-grade cheese knives with custom engraved wooden handles. Perfect for different cheese
                  types and textures.
                </p>
                <div className="text-amber-600 font-semibold">Starting at $22</div>
              </div>
            </div>

            {/* Serving Utensils */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/images/utensil-holders.png"
                alt="Custom serving utensils"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Serving Utensils</h3>
                <p className="text-gray-600 mb-4">
                  Complete utensil sets including spreaders, forks, and spoons with custom engraved handles.
                </p>
                <div className="text-amber-600 font-semibold">Starting at $18</div>
              </div>
            </div>

            {/* Charcuterie Sets */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/images/serving-trays.png"
                alt="Custom charcuterie sets"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete Sets</h3>
                <p className="text-gray-600 mb-4">
                  All-in-one charcuterie sets including board, knives, and serving utensils in custom presentation
                  boxes.
                </p>
                <div className="text-amber-600 font-semibold">Starting at $85</div>
              </div>
            </div>

            {/* Meat Slicers */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/images/tasting-boards.png"
                alt="Custom meat slicers"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Meat Slicers</h3>
                <p className="text-gray-600 mb-4">
                  Precision meat slicing tools with custom engraved handles for perfect charcuterie preparation.
                </p>
                <div className="text-amber-600 font-semibold">Starting at $28</div>
              </div>
            </div>

            {/* Olive Picks */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/images/table-markers.png"
                alt="Custom olive picks"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Specialty Picks</h3>
                <p className="text-gray-600 mb-4">
                  Decorative picks and markers with custom engraving for olives, cheeses, and other charcuterie items.
                </p>
                <div className="text-amber-600 font-semibold">Starting at $12</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Materials & Finishes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our selection of high-quality materials and finishes to create the perfect charcuterie tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wood Types</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Walnut</li>
                <li>Cherry</li>
                <li>Maple</li>
                <li>Oak</li>
                <li>Bamboo</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Steel Options</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Stainless Steel</li>
                <li>Carbon Steel</li>
                <li>Damascus Steel</li>
                <li>Ceramic Blades</li>
                <li>Titanium Coating</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Finishes</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Food-Safe Oil</li>
                <li>Lacquer Finish</li>
                <li>Wax Coating</li>
                <li>Natural Finish</li>
                <li>Distressed Look</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Engraving</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Logo Engraving</li>
                <li>Text Personalization</li>
                <li>Custom Graphics</li>
                <li>Decorative Patterns</li>
                <li>Date & Names</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect Pairings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perfect for Wine Pairings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our charcuterie tools are designed to enhance the wine and food pairing experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Enhance Your Wine Experience</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-xl">•</span>
                  <span>Properly cut cheeses to complement wine flavors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-xl">•</span>
                  <span>Slice meats to the perfect thickness for wine pairing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-xl">•</span>
                  <span>Create beautiful presentations that enhance the tasting experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-xl">•</span>
                  <span>Maintain food safety with proper serving utensils</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-xl">•</span>
                  <span>Impress guests with professional-quality tools</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/images/wine-accessories.png"
                alt="Wine and charcuterie pairing"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Care & Maintenance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keep your charcuterie tools in perfect condition with proper care and maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Daily Care</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Hand wash with mild soap</li>
                <li>• Dry immediately after washing</li>
                <li>• Avoid soaking in water</li>
                <li>• Store in dry location</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Monthly Maintenance</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Apply food-safe oil to wood</li>
                <li>• Sharpen knife blades as needed</li>
                <li>• Check for loose handles</li>
                <li>• Deep clean with vinegar solution</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-term Care</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Sand and refinish annually</li>
                <li>• Replace worn components</li>
                <li>• Professional sharpening service</li>
                <li>• Proper storage solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Elevate Your Charcuterie Service?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and custom quote for your charcuterie tools.
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
