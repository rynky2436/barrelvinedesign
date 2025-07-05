import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Wine, DollarSign, Users, Star, Award, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Growlers & Glassware | Brewery Merchandise | Washington DC",
  description:
    "Premium custom growlers and branded glassware for breweries. Laser engraved merchandise that builds brand loyalty in Washington DC, Maryland & Virginia.",
  keywords:
    "custom growlers, brewery glassware, branded merchandise, laser engraved growlers, Washington DC, Maryland, Virginia, brewery marketing, craft beer merchandise",
  openGraph: {
    title: "Custom Growlers & Glassware | Barrel & Vine Designs",
    description: "Premium laser engraved growlers and glassware for breweries across the DMV area",
    images: ["/images/brewery-growler.png"],
  },
}

export default function GrowlersGlasswarePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-amber-900 via-amber-800 to-stone-900">
        <div className="absolute inset-0 bg-[url('/images/growlers.png')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Custom Growlers & Glassware</h1>
              <p className="text-xl mb-8 text-amber-100 leading-relaxed">
                Elevate your brewery's brand with premium custom growlers and laser-engraved glassware. Build customer
                loyalty and increase revenue with memorable merchandise that keeps your brand top-of-mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4">
                    Start Your Order
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-amber-900 text-lg px-8 py-4 bg-transparent"
                  >
                    View Catalog
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/brewery-growler.png"
                alt="Custom Laser Engraved Brewery Growler"
                width={600}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Collection */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4 font-playfair">
              Complete Glassware & Growler Collection
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              From classic growlers to specialty glassware, we offer everything you need to create a cohesive branded
              merchandise line
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Wine className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Classic Growlers</h3>
                <p className="text-stone-600 mb-4">
                  Traditional 64oz amber glass growlers with custom laser engraving. Perfect for take-home sales and
                  building customer loyalty.
                </p>
                <ul className="text-sm text-stone-500 space-y-1 mb-4">
                  <li>• 32oz and 64oz sizes available</li>
                  <li>• Swing-top or screw-cap options</li>
                  <li>• UV-protective amber glass</li>
                  <li>• Custom logo engraving included</li>
                </ul>
                <div className="text-amber-600 font-bold">Starting at $18.99</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Pint Glasses</h3>
                <p className="text-stone-600 mb-4">
                  High-quality 16oz pint glasses with precision laser etching. Ideal for taproom service and retail
                  merchandise.
                </p>
                <ul className="text-sm text-stone-500 space-y-1 mb-4">
                  <li>• Standard and nonic styles</li>
                  <li>• Dishwasher-safe construction</li>
                  <li>• Nucleated bottom options</li>
                  <li>• Bulk pricing available</li>
                </ul>
                <div className="text-amber-600 font-bold">Starting at $8.99</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Flight Glasses</h3>
                <p className="text-stone-600 mb-4">
                  Elegant 4oz tasting glasses perfect for beer flights and sampling experiences. Enhance your tasting
                  room presentation.
                </p>
                <ul className="text-sm text-stone-500 space-y-1 mb-4">
                  <li>• 4oz and 6oz options</li>
                  <li>• Stemmed and stemless designs</li>
                  <li>• Flight paddle sets available</li>
                  <li>• Custom flight arrangements</li>
                </ul>
                <div className="text-amber-600 font-bold">Starting at $6.99</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Specialty Glassware</h3>
                <p className="text-stone-600 mb-4">
                  Style-specific glasses for IPAs, stouts, wheat beers, and more. Enhance the drinking experience with
                  proper glassware.
                </p>
                <ul className="text-sm text-stone-500 space-y-1 mb-4">
                  <li>• IPA glasses with aroma enhancement</li>
                  <li>• Stout glasses with nitrogen cascade</li>
                  <li>• Wheat beer glasses with citrus rim</li>
                  <li>• Tulip glasses for Belgian styles</li>
                </ul>
                <div className="text-amber-600 font-bold">Starting at $12.99</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Growler Accessories</h3>
                <p className="text-stone-600 mb-4">
                  Complete the growler experience with custom carriers, koozies, and maintenance accessories that add
                  value and convenience.
                </p>
                <ul className="text-sm text-stone-500 space-y-1 mb-4">
                  <li>• Leather and canvas carriers</li>
                  <li>• Insulated growler koozies</li>
                  <li>• Replacement caps and gaskets</li>
                  <li>• Cleaning brush sets</li>
                </ul>
                <div className="text-amber-600 font-bold">Starting at $14.99</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <DollarSign className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Gift Sets</h3>
                <p className="text-stone-600 mb-4">
                  Curated gift sets combining growlers, glasses, and accessories. Perfect for holidays, corporate gifts,
                  and special occasions.
                </p>
                <ul className="text-sm text-stone-500 space-y-1 mb-4">
                  <li>• Growler + glass combinations</li>
                  <li>• Custom gift box packaging</li>
                  <li>• Corporate branding options</li>
                  <li>• Volume discount pricing</li>
                </ul>
                <div className="text-amber-600 font-bold">Starting at $39.99</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4 font-playfair">
              The Business Impact of Custom Merchandise
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Quality branded merchandise drives revenue, builds loyalty, and extends your marketing reach beyond the
              taproom
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    $
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Revenue Generation</h3>
                    <p className="text-stone-600">
                      Merchandise sales can account for 15-25% of total taproom revenue. Custom growlers and glassware
                      offer high-margin opportunities that complement your beer sales.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    ♥
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Customer Loyalty</h3>
                    <p className="text-stone-600">
                      Customers who purchase branded merchandise visit 40% more frequently and spend 30% more per visit.
                      Quality glassware creates emotional connections to your brand.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    📢
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Brand Awareness</h3>
                    <p className="text-stone-600">
                      Every branded glass or growler becomes a mobile advertisement. Customers using your merchandise at
                      home extend your brand reach to friends and family.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    🎯
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Competitive Advantage</h3>
                    <p className="text-stone-600">
                      Professional merchandise elevates your brewery's perceived value and helps differentiate from
                      competitors who offer generic or low-quality alternatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/brewery-flight-glasses.png"
                alt="Custom Brewery Flight Glasses"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Specifications */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/growler-carriers.png"
                alt="Premium Quality Growlers and Accessories"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-stone-800 mb-6 font-playfair">Premium Quality & Specifications</h2>
              <p className="text-xl text-stone-600 mb-8">
                We use only the highest quality materials and precision manufacturing to ensure your merchandise
                reflects your brewery's commitment to excellence.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Premium Glass Construction</h3>
                    <p className="text-stone-600">
                      Restaurant-quality glassware with consistent wall thickness and perfect clarity for optimal beer
                      presentation
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Precision Laser Engraving</h3>
                    <p className="text-stone-600">
                      Computer-controlled laser systems ensure consistent depth and crisp detail on every piece
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Dishwasher Safe Finishes</h3>
                    <p className="text-stone-600">
                      All engravings are sealed and tested for commercial dishwasher durability
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Quality Assurance</h3>
                    <p className="text-stone-600">
                      Every piece is individually inspected before packaging to ensure perfect quality
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Impact Stats */}
      <section className="py-20 bg-gradient-to-br from-amber-900 to-stone-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-playfair">Proven Revenue Impact</h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Data from our brewery partners shows the measurable impact of quality merchandise programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-5xl font-bold text-amber-400 mb-2">23%</div>
              <h3 className="text-xl font-bold mb-4">Average Revenue Increase</h3>
              <p className="text-amber-100">
                Breweries see an average 23% increase in total revenue after implementing comprehensive merchandise
                programs.
              </p>
            </div>

            <div className="text-center text-white">
              <div className="text-5xl font-bold text-amber-400 mb-2">67%</div>
              <h3 className="text-xl font-bold mb-4">Profit Margin</h3>
              <p className="text-amber-100">
                Custom merchandise typically maintains 60-70% profit margins, significantly higher than beer sales
                alone.
              </p>
            </div>

            <div className="text-center text-white">
              <div className="text-5xl font-bold text-amber-400 mb-2">40%</div>
              <h3 className="text-xl font-bold mb-4">Customer Retention</h3>
              <p className="text-amber-100">
                Customers who purchase merchandise return 40% more frequently than those who only buy beer.
              </p>
            </div>

            <div className="text-center text-white">
              <div className="text-5xl font-bold text-amber-400 mb-2">85%</div>
              <h3 className="text-xl font-bold mb-4">Gift Purchase Rate</h3>
              <p className="text-amber-100">
                85% of merchandise purchases are gifts, expanding your customer base through word-of-mouth marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volume Pricing */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4 font-playfair">Volume Pricing & Bulk Orders</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Maximize your investment with volume discounts and flexible ordering options designed for brewery
              operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-amber-600 mb-4">Starter</div>
                <div className="text-2xl font-bold mb-4">25-99 pieces</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-2" />
                    Standard pricing
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-2" />
                    2-week turnaround
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-2" />
                    Basic packaging
                  </li>
                </ul>
                <div className="text-lg font-bold text-stone-600">Perfect for new breweries</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-amber-600">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-amber-600 mb-4">Professional</div>
                <div className="text-2xl font-bold mb-4">100-499 pieces</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-2" />
                    15% volume discount
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-2" />
                    10-day turnaround
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-2" />
                    Premium packaging
                  </li>
                </ul>
                <div className="text-lg font-bold text-stone-600">Most popular choice</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-amber-600 mb-4">Enterprise</div>
                <div className="text-2xl font-bold mb-4">500+ pieces</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-2" />
                    25% volume discount
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-2" />
                    Priority production
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-2" />
                    Custom packaging options
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-2" />
                    Dedicated account manager
                  </li>
                </ul>
                <div className="text-lg font-bold text-stone-600">For established breweries</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-800">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6 font-playfair">Ready to Boost Your Merchandise Revenue?</h2>
          <p className="text-xl text-stone-300 mb-8">
            Let's create a custom merchandise program that drives revenue, builds loyalty, and extends your brand reach
            throughout the DMV area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4">
                Start Your Order
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-stone-800 text-lg px-8 py-4 bg-transparent"
              >
                Request Catalog
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
