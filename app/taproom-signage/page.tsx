import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Eye, TrendingUp, Star, Award, Zap, Shield, Camera } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Taproom Signage | Brewery Interior Design | Washington DC",
  description:
    "Transform your taproom with custom laser-engraved signage. Menu boards, wall art, and branded décor for breweries in Washington DC, Maryland & Virginia.",
  keywords:
    "taproom signage, brewery interior design, menu boards, laser engraved signs, Washington DC, Maryland, Virginia, brewery décor, custom signage",
  openGraph: {
    title: "Custom Taproom Signage | Barrel & Vine Designs",
    description: "Premium laser engraved taproom signage for breweries across the DMV area",
    images: ["/images/brewery-taproom-sign.png"],
  },
}

export default function TaproomSignagePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800">
        <div className="absolute inset-0 bg-[url('/images/taproom-atmosphere-decor.png')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Custom Taproom Signage</h1>
              <p className="text-xl mb-8 text-amber-100 leading-relaxed">
                Transform your taproom into an immersive brand experience with custom laser-engraved signage. From menu
                boards to wall art, create an atmosphere that keeps customers engaged and coming back.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4">
                    Design Your Space
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-amber-900 text-lg px-8 py-4 bg-transparent"
                  >
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/brewery-taproom-sign.png"
                alt="Custom Laser Engraved Taproom Signage"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Signage Solutions */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4 font-playfair">Complete Taproom Signage Solutions</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Create a cohesive brand experience with custom signage that informs, entertains, and engages your
              customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Beer Menu Boards</h3>
                <p className="text-stone-600 mb-4">
                  Dynamic menu boards that showcase your current offerings with style, ABV, IBU, and tasting notes in an
                  elegant format.
                </p>
                <ul className="text-sm text-stone-500 space-y-1">
                  <li>• Changeable letter systems</li>
                  <li>• Magnetic beer name plates</li>
                  <li>• Chalkboard integration options</li>
                  <li>• Digital display compatibility</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Brand Story Displays</h3>
                <p className="text-stone-600 mb-4">
                  Tell your brewery's story with custom wall displays featuring your history, brewing process, and
                  company values.
                </p>
                <ul className="text-sm text-stone-500 space-y-1">
                  <li>• Timeline displays</li>
                  <li>• Founder story panels</li>
                  <li>• Brewing process illustrations</li>
                  <li>• Award and recognition walls</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Directional Signage</h3>
                <p className="text-stone-600 mb-4">
                  Guide customers through your space with clear, branded directional signs for restrooms, tours,
                  merchandise, and seating areas.
                </p>
                <ul className="text-sm text-stone-500 space-y-1">
                  <li>• Restroom indicators</li>
                  <li>• Tour starting points</li>
                  <li>• Merchandise area markers</li>
                  <li>• Seating section labels</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Eye className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Decorative Wall Art</h3>
                <p className="text-stone-600 mb-4">
                  Custom laser-engraved wall art that reinforces your brand identity and creates Instagram-worthy photo
                  opportunities.
                </p>
                <ul className="text-sm text-stone-500 space-y-1">
                  <li>• Logo wall installations</li>
                  <li>• Hop and grain artwork</li>
                  <li>• Local landmark tributes</li>
                  <li>• Custom quote displays</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Table & Bar Signage</h3>
                <p className="text-stone-600 mb-4">
                  Enhance the dining experience with custom table markers, bar rail signage, and service area
                  identifiers.
                </p>
                <ul className="text-sm text-stone-500 space-y-1">
                  <li>• Table number systems</li>
                  <li>• Reserved seating markers</li>
                  <li>• Bar rail branding</li>
                  <li>• Service counter signs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Event & Promotional Signs</h3>
                <p className="text-stone-600 mb-4">
                  Flexible signage solutions for events, promotions, and seasonal offerings that keep your messaging
                  fresh and relevant.
                </p>
                <ul className="text-sm text-stone-500 space-y-1">
                  <li>• Event announcement boards</li>
                  <li>• Happy hour specials</li>
                  <li>• Seasonal beer promotions</li>
                  <li>• Live music announcements</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Social Media Integration</h3>
                <p className="text-stone-600 mb-4">
                  Encourage social sharing with custom hashtag displays, photo opportunity markers, and check-in
                  prompts.
                </p>
                <ul className="text-sm text-stone-500 space-y-1">
                  <li>• Custom hashtag displays</li>
                  <li>• Photo backdrop signage</li>
                  <li>• Social media handles</li>
                  <li>• QR code integrations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Camera className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Interactive Displays</h3>
                <p className="text-stone-600 mb-4">
                  Engage customers with interactive elements like beer education displays, brewing ingredient showcases,
                  and tasting note guides.
                </p>
                <ul className="text-sm text-stone-500 space-y-1">
                  <li>• Hop variety displays</li>
                  <li>• Malt showcase boards</li>
                  <li>• Brewing process wheels</li>
                  <li>• Flavor profile guides</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Regulatory & Safety Signs</h3>
                <p className="text-stone-600 mb-4">
                  Maintain compliance while preserving your aesthetic with custom-designed regulatory and safety signage
                  that matches your brand.
                </p>
                <ul className="text-sm text-stone-500 space-y-1">
                  <li>• TTB required signage</li>
                  <li>• Occupancy limit displays</li>
                  <li>• Emergency exit markers</li>
                  <li>• Age verification reminders</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Value */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4 font-playfair">
              The Strategic Value of Professional Signage
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Quality signage is more than decoration—it's a strategic business tool that drives revenue and enhances
              customer experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                    $
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Increased Dwell Time</h3>
                    <p className="text-stone-600">
                      Engaging signage increases average customer dwell time by 18-25%, directly correlating to higher
                      per-customer spending and additional beer purchases.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                    📱
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Social Media Amplification</h3>
                    <p className="text-stone-600">
                      Instagram-worthy signage generates 40% more social media posts, extending your marketing reach
                      organically and attracting new customers through user-generated content.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                    🎯
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Operational Efficiency</h3>
                    <p className="text-stone-600">
                      Clear directional and informational signage reduces staff questions by 30%, allowing your team to
                      focus on service and sales rather than basic navigation assistance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                    ⭐
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Brand Differentiation</h3>
                    <p className="text-stone-600">
                      Professional signage elevates perceived value and helps differentiate your brewery from
                      competitors, justifying premium pricing and building brand loyalty.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/menu-boards.png"
                alt="Custom Brewery Menu Boards"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Technology */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/chalkboard-beer-boards.png"
                alt="Premium Signage Materials and Technology"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-stone-800 mb-6 font-playfair">Advanced Materials & Technology</h2>
              <p className="text-xl text-stone-600 mb-8">
                We combine traditional craftsmanship with cutting-edge technology to create signage that withstands the
                demands of busy taproom environments.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Commercial-Grade Materials</h3>
                    <p className="text-stone-600">
                      Food-safe, moisture-resistant materials designed for high-traffic commercial environments with
                      easy cleaning and maintenance
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Precision Laser Systems</h3>
                    <p className="text-stone-600">
                      State-of-the-art fiber and CO2 laser systems for consistent, high-resolution engraving on wood,
                      metal, and acrylic surfaces
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Modular Design Systems</h3>
                    <p className="text-stone-600">
                      Flexible signage systems that allow for easy updates, seasonal changes, and expansion as your
                      brewery grows
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Professional Installation</h3>
                    <p className="text-stone-600">
                      Complete installation services with proper mounting, electrical connections, and final positioning
                      for optimal visibility and impact
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Experience Enhancement */}
      <section className="py-20 bg-gradient-to-br from-amber-900 to-stone-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-playfair">Enhancing the Customer Experience</h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Every sign in your taproom contributes to the overall customer journey and brand experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Visual Hierarchy</h3>
              <p className="text-amber-100">
                Strategic placement and sizing guide customers naturally through your space, highlighting key areas and
                offerings.
              </p>
            </div>

            <div className="text-center text-white">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Storytelling</h3>
              <p className="text-amber-100">
                Transform your space into a narrative experience that educates customers about your brewing process and
                brand values.
              </p>
            </div>

            <div className="text-center text-white">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Social Engagement</h3>
              <p className="text-amber-100">
                Create natural photo opportunities that encourage social sharing and extend your brand reach beyond the
                taproom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-800">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6 font-playfair">Ready to Transform Your Taproom?</h2>
          <p className="text-xl text-stone-300 mb-8">
            Let's create a comprehensive signage solution that enhances your customer experience, drives revenue, and
            strengthens your brand presence in the DMV market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4">
                Design Your Space
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-stone-800 text-lg px-8 py-4 bg-transparent"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
