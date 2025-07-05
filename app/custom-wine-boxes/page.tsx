import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Gift, Award, Heart, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Wine Boxes | Personalized Wine Box Engraving | Washington DC, MD, VA",
  description:
    "Custom laser engraved wine boxes for weddings, corporate gifts, and special occasions. Premium wooden wine boxes with personalized engraving in Washington DC, Maryland & Virginia.",
  keywords:
    "custom wine boxes, personalized wine box engraving, wedding wine boxes, corporate wine gifts, laser engraved wine boxes, wooden wine boxes DC MD VA",
  openGraph: {
    title: "Custom Wine Boxes | Personalized Wine Box Engraving | Barrel & Vine Designs",
    description:
      "Premium custom wine boxes with laser engraving for weddings, corporate gifts, and special occasions. Serving Washington DC, Maryland & Virginia.",
    images: [{ url: "/images/winery-custom-wine-box.png", width: 1200, height: 630, alt: "Custom Wine Box Engraving" }],
  },
}

const wineBoxSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Custom Wine Boxes",
  description: "Personalized laser engraved wine boxes for special occasions and corporate gifts",
  brand: {
    "@type": "Brand",
    name: "Barrel & Vine Designs",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Barrel & Vine Designs",
  },
}

export default function CustomWineBoxesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(wineBoxSchema) }} />
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/winery-custom-wine-box.png"
              alt="Custom Wine Box Engraving Services"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
            <div className="mb-8">
              <Image
                src="/images/barrel-vine-logo.png"
                alt="Barrel & Vine Designs Logo"
                width={120}
                height={120}
                className="mx-auto filter brightness-0 invert mb-6"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">
              Custom Wine Boxes & Personalized Wine Box Engraving
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto">
              Premium Wooden Wine Boxes with Laser Engraving in Washington DC, Maryland & Virginia
            </p>
            <p className="text-lg text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Create memorable gifts and lasting impressions with our custom laser engraved wine boxes. Perfect for
              weddings, anniversaries, corporate gifts, and special occasions. Each box is crafted from premium wood and
              personalized with your unique design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-purple-800 hover:bg-purple-50 text-lg px-8 py-4 font-semibold"
                >
                  Get Custom Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-purple-800 bg-white hover:bg-purple-50 hover:text-purple-900 text-lg px-8 py-4"
                >
                  View Design Options
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Wine Box Types */}
        <section className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
                Custom Wine Box Collection
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Choose from our selection of premium wooden wine boxes, each customizable with laser engraving
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Single Bottle Box */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/winery-custom-wine-box.png"
                    alt="Single Bottle Wine Box with Custom Engraving"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Gift className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Single Bottle Box</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Elegant single bottle wine box perfect for wedding gifts, anniversaries, and personal celebrations.
                  </p>
                  <ul className="text-sm text-stone-600 mb-4 space-y-1">
                    <li>• Premium hardwood construction</li>
                    <li>• Custom laser engraving</li>
                    <li>• Hinged lid with magnetic closure</li>
                    <li>• Velvet interior lining</li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-purple-700 hover:bg-purple-800">Get Quote</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Double Bottle Box */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/winery-luxury-gift-box.png"
                    alt="Double Bottle Wine Box with Personalized Engraving"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Award className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Double Bottle Box</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Sophisticated double bottle presentation box ideal for corporate gifts and special wine collections.
                  </p>
                  <ul className="text-sm text-stone-600 mb-4 space-y-1">
                    <li>• Holds two standard wine bottles</li>
                    <li>• Sliding lid or hinged design</li>
                    <li>• Custom divider with engraving</li>
                    <li>• Optional wine accessories compartment</li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-purple-700 hover:bg-purple-800">Get Quote</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Wedding Wine Box */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/custom-gift-boxes.png"
                    alt="Wedding Wine Box with Custom Engraving"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Heart className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Wedding Wine Box</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Romantic wedding wine box ceremony sets with custom engraving for couples to open on anniversaries.
                  </p>
                  <ul className="text-sm text-stone-600 mb-4 space-y-1">
                    <li>• Names and wedding date engraving</li>
                    <li>• Love letter compartment</li>
                    <li>• Anniversary wine storage</li>
                    <li>• Rustic or elegant finish options</li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-purple-700 hover:bg-purple-800">Get Quote</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Corporate Wine Box */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/winery-luxury-gift-box.png"
                    alt="Corporate Wine Gift Box with Logo Engraving"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Star className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Corporate Gift Box</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Professional corporate wine gift boxes with company logo engraving for client appreciation and
                    employee recognition.
                  </p>
                  <ul className="text-sm text-stone-600 mb-4 space-y-1">
                    <li>• Company logo laser engraving</li>
                    <li>• Bulk order discounts available</li>
                    <li>• Premium presentation quality</li>
                    <li>• Custom messaging options</li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-purple-700 hover:bg-purple-800">Get Quote</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Wine Crate Style */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/wine-crates.png"
                    alt="Wine Crate Style Box with Custom Branding"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Gift className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Wine Crate Style</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Rustic wine crate style boxes with sliding lids, perfect for vintage-themed gifts and winery
                    branding.
                  </p>
                  <ul className="text-sm text-stone-600 mb-4 space-y-1">
                    <li>• Authentic crate construction</li>
                    <li>• Sliding wooden lid</li>
                    <li>• Rope handles available</li>
                    <li>• Vintage-style branding</li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-purple-700 hover:bg-purple-800">Get Quote</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Multi-Bottle Display */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/wine-accessories.png"
                    alt="Multi-Bottle Wine Display Box"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Award className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Multi-Bottle Display</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Large capacity wine display boxes for collections, wine tastings, and special events.
                  </p>
                  <ul className="text-sm text-stone-600 mb-4 space-y-1">
                    <li>• Holds 6, 12, or more bottles</li>
                    <li>• Individual bottle compartments</li>
                    <li>• Display window options</li>
                    <li>• Custom interior layouts</li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-purple-700 hover:bg-purple-800">Get Quote</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Customization Options */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-stone-800 mb-6 font-playfair">Customization Options</h2>
                <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                  Make your wine box truly unique with our extensive customization options. From wood selection to
                  engraving designs, we help you create the perfect personalized wine box for any occasion.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-2">Wood Selection</h3>
                      <p className="text-stone-600">
                        Choose from premium hardwoods including oak, maple, cherry, walnut, and bamboo options.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-2">Engraving Designs</h3>
                      <p className="text-stone-600">
                        Custom text, logos, monograms, wedding dates, company branding, and artistic designs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-2">Interior Options</h3>
                      <p className="text-stone-600">
                        Velvet lining, foam inserts, custom dividers, and accessory compartments.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-2">Finishing Touches</h3>
                      <p className="text-stone-600">
                        Natural, stained, or painted finishes with hardware options and personalized nameplates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/winery-custom-wine-box.png"
                  alt="Custom Wine Box Engraving Process"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Occasions Section */}
        <section className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
                Perfect for Every Occasion
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Our custom wine boxes make memorable gifts for life's most important moments
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-stone-800 mb-2">Weddings</h3>
                <p className="text-sm text-stone-600">
                  Wedding ceremony wine boxes, bridal party gifts, anniversary celebrations
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-stone-800 mb-2">Corporate</h3>
                <p className="text-sm text-stone-600">Client appreciation, employee recognition, business milestones</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-stone-800 mb-2">Special Events</h3>
                <p className="text-sm text-stone-600">Birthdays, graduations, retirements, housewarming gifts</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-stone-800 mb-2">Holidays</h3>
                <p className="text-sm text-stone-600">Christmas, Valentine's Day, Father's Day, Mother's Day gifts</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-purple-800 to-purple-900">
          <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
              Create Your Custom Wine Box Today
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Ready to create a memorable gift that will be treasured for years to come? Contact us for a free
              consultation and custom quote for your personalized wine box.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-purple-800 hover:bg-purple-50 text-lg px-8 py-4 font-semibold"
                >
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
    </>
  )
}
