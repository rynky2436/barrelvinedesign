import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Wine, Package, Users, ArrowRight, Star, Gift } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Winery Branding Solutions | Custom Laser Engraving | Barrel & Vine Designs",
  description:
    "Elevate your vintner's legacy with bespoke laser engraving for wineries. Custom wine boxes, barrel heads, tasting room décor, and premium branding solutions in the DMV area.",
  keywords:
    "winery branding, wine box engraving, barrel head engraving, tasting room décor, wine accessories, custom wine merchandise, DMV wineries",
  openGraph: {
    title: "Winery Branding Solutions | Custom Laser Engraving | Barrel & Vine Designs",
    description:
      "Elevate your vintner's legacy with bespoke laser engraving for wineries. Custom wine boxes, barrel heads, tasting room décor, and premium branding solutions in the DMV area.",
    images: ["/images/winery-solutions.png"],
  },
  alternates: {
    canonical: "https://barrelvinedesigns.com/winery",
  },
}

export default function WineryPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-stone-900 to-purple-800">
        <div className="absolute inset-0 bg-[url('/images/barrel-engravings-cropped.png')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
            Winery Branding
            <span className="block text-purple-300">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed">
            Elevate your vintner's legacy with bespoke laser engraving that captures the essence of your terroir
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4">
              Commission Your Vision
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
              Premium Winery Products
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Showcase your finest wines with custom engraved pieces that reflect your winery's heritage and elevate
              your brand presence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Wine Crates */}
            <Card className="border-0 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src="/images/winery-custom-wine-box.png"
                  alt="Custom Laser Engraved Wine Boxes for Premium Winery Branding"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Featured</div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Gift className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-stone-800 font-playfair">Personalized Wine Crates</h3>
                </div>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Elevate your wine packaging with custom laser-engraved wooden wine crates. Perfect for premium bottle
                  presentations, corporate gifts, and special wine releases. Each crate features precision engraving of
                  your winery logo, vintage year, and custom messaging.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Premium hardwood construction
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Custom logo engraving
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Gift-ready presentation
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Multiple size options
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Commission Wine Crates
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Custom Gift Boxes */}
            <Card className="border-0 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src="/images/winery-luxury-gift-box.png"
                  alt="Luxury Custom Gift Boxes with Laser Engraving for Wineries"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Premium</div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Package className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-stone-800 font-playfair">Luxury Gift Boxes</h3>
                </div>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Impress clients and wine enthusiasts with elegant laser-engraved gift boxes. Ideal for wine club
                  memberships, corporate gifts, and special occasions. Features sophisticated design elements and
                  premium finishing.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Elegant presentation
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Corporate branding
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Premium materials
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Custom sizing available
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Commission Gift Boxes
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Barrel Engravings */}
            <Card className="border-0 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src="/images/winery-barrel-head.png"
                  alt="Custom Wine Barrel Head Engravings for Tasting Room Decor"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Signature</div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-stone-800 font-playfair">Barrel Head Engravings</h3>
                </div>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Transform wine barrels into stunning tasting room centerpieces with custom laser engravings. Perfect
                  for displaying your winery's heritage, vintage collections, and brand story. Each piece becomes a
                  conversation starter and brand ambassador.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Authentic wine barrels
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Detailed logo work
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Vintage year marking
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Wall-ready mounting
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Commission Barrel Art
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Cellar Door Signs */}
            <Card className="border-0 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src="/images/winery-cellar-door-sign.png"
                  alt="Custom Cellar Door Heritage Signs for Winery Entrances"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Heritage</div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Wine className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-stone-800 font-playfair">Cellar Door Heritage Signs</h3>
                </div>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Welcome visitors with distinguished laser-engraved entrance signage that reflects your winery's
                  terroir and unique character. Weather-resistant materials ensure lasting beauty for outdoor
                  installations.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Weather-resistant finish
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Custom typography
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Heritage design elements
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Professional installation
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Commission Signage
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Products Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
              Complete Winery Accessories
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              From elegant serving pieces to functional accessories, enhance every aspect of your winery experience with
              custom laser engraving
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Charcuterie Knives */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/winery-charcuterie-tools.png"
                  alt="Custom Engraved Charcuterie Knives and Wine Tasting Tools"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-stone-800 mb-2 font-playfair">Charcuterie Tools</h3>
                <p className="text-stone-600 text-sm mb-4">
                  Sophisticated custom-engraved knives and tools for wine presentations and charcuterie boards.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-purple-600 font-semibold">Premium Quality</span>
                  <Link href="/contact">
                    <Button size="sm" variant="ghost" className="text-purple-600 hover:text-purple-700">
                      Commission
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Wine Accessories */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/winery-wine-accessories.png"
                  alt="Custom Laser Engraved Wine Accessories and Tools"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-stone-800 mb-2 font-playfair">Wine Accessories</h3>
                <p className="text-stone-600 text-sm mb-4">
                  Add elegance with custom-engraved wine openers, stoppers, and essential wine accessories.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-purple-600 font-semibold">Essential Tools</span>
                  <Link href="/contact">
                    <Button size="sm" variant="ghost" className="text-purple-600 hover:text-purple-700">
                      Commission
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Tasting Boards */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/winery-tasting-boards.png"
                  alt="Custom Wine Tasting Boards for Winery Experiences"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-stone-800 mb-2 font-playfair">Tasting Boards</h3>
                <p className="text-stone-600 text-sm mb-4">
                  Enhance wine tasting experiences with elegant custom-engraved serving boards and platters.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-purple-600 font-semibold">Tasting Room</span>
                  <Link href="/contact">
                    <Button size="sm" variant="ghost" className="text-purple-600 hover:text-purple-700">
                      Commission
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Wine Glassware */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/winery-wine-glasses.png"
                  alt="Custom Engraved Wine Glasses with Winery Logos"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-stone-800 mb-2 font-playfair">Wine Glassware</h3>
                <p className="text-stone-600 text-sm mb-4">
                  Custom-engraved wine glasses featuring your logo as memorable souvenirs and branded merchandise.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-purple-600 font-semibold">Branded Gifts</span>
                  <Link href="/contact">
                    <Button size="sm" variant="ghost" className="text-purple-600 hover:text-purple-700">
                      Commission
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Wine Tags */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/winery-bottle-tags.png"
                  alt="Custom Laser Engraved Wine Bottle Tags for Special Releases"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-stone-800 mb-2 font-playfair">Wine Bottle Tags</h3>
                <p className="text-stone-600 text-sm mb-4">
                  Distinguish special releases and limited editions with elegant laser-engraved bottle tags.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-purple-600 font-semibold">Special Releases</span>
                  <Link href="/contact">
                    <Button size="sm" variant="ghost" className="text-purple-600 hover:text-purple-700">
                      Commission
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Table Markers */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/winery-table-markers.png"
                  alt="Custom Table Markers for Winery Tasting Rooms"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-stone-800 mb-2 font-playfair">Table Markers</h3>
                <p className="text-stone-600 text-sm mb-4">
                  Sophisticated table markers and reserved signs for organized and elegant tasting room service.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-purple-600 font-semibold">Service Excellence</span>
                  <Link href="/contact">
                    <Button size="sm" variant="ghost" className="text-purple-600 hover:text-purple-700">
                      Commission
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Utensil Holders */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/winery-utensil-holders.png"
                  alt="Custom Laser Engraved Utensil Holders for Wineries"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-stone-800 mb-2 font-playfair">Utensil Holders</h3>
                <p className="text-stone-600 text-sm mb-4">
                  Rustic dining accessories that organize utensils while reinforcing your winery's brand charm.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-purple-600 font-semibold">Functional Design</span>
                  <Link href="/contact">
                    <Button size="sm" variant="ghost" className="text-purple-600 hover:text-purple-700">
                      Commission
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Drink Tokens */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/winery-event-tokens.png"
                  alt="Custom Engraved Drink Tokens for Winery Events"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-stone-800 mb-2 font-playfair">Event Tokens</h3>
                <p className="text-stone-600 text-sm mb-4">
                  Custom-engraved promotional tokens that add a branded touch to special winery events and tastings.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-purple-600 font-semibold">Event Marketing</span>
                  <Link href="/contact">
                    <Button size="sm" variant="ghost" className="text-purple-600 hover:text-purple-700">
                      Commission
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
              Complete Winery Services
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              From intimate tastings to grand celebrations, we create pieces that honor your winery's heritage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Wine className="w-12 h-12 text-purple-600 mb-6" />
                <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Wine Box Engraving</h3>
                <p className="text-stone-600 mb-6">
                  Custom engraved wine boxes that showcase your premium bottles with elegance and sophistication.
                </p>
                <ul className="space-y-2 text-stone-600">
                  <li>• Personalized designs</li>
                  <li>• Premium wood selection</li>
                  <li>• Gift presentation ready</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-purple-600 mb-6" />
                <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Barrel Head Art</h3>
                <p className="text-stone-600 mb-6">
                  Transform wine barrels into stunning display pieces that tell your winery's unique story.
                </p>
                <ul className="space-y-2 text-stone-600">
                  <li>• Custom logo engraving</li>
                  <li>• Vintage year marking</li>
                  <li>• Tasting room displays</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Package className="w-12 h-12 text-purple-600 mb-6" />
                <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Tasting Room Décor</h3>
                <p className="text-stone-600 mb-6">
                  Create an immersive experience with custom signage and decorative elements.
                </p>
                <ul className="space-y-2 text-stone-600">
                  <li>• Welcome signs</li>
                  <li>• Menu boards</li>
                  <li>• Wall art installations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-purple-600 mb-6" />
                <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Award Displays</h3>
                <p className="text-stone-600 mb-6">
                  Showcase your accolades with custom engraved plaques and trophy displays.
                </p>
                <ul className="space-y-2 text-stone-600">
                  <li>• Competition awards</li>
                  <li>• Recognition plaques</li>
                  <li>• Achievement displays</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Wine className="w-12 h-12 text-purple-600 mb-6" />
                <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Corporate Gifts</h3>
                <p className="text-stone-600 mb-6">
                  Elegant corporate gifts that represent your winery's commitment to excellence.
                </p>
                <ul className="space-y-2 text-stone-600">
                  <li>• Executive gift sets</li>
                  <li>• Client appreciation</li>
                  <li>• Event commemoratives</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-purple-600 mb-6" />
                <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Custom Projects</h3>
                <p className="text-stone-600 mb-6">
                  Unique, one-of-a-kind pieces designed specifically for your winery's vision.
                </p>
                <ul className="space-y-2 text-stone-600">
                  <li>• Bespoke designs</li>
                  <li>• Special occasions</li>
                  <li>• Limited editions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">Our Winery Process</h2>
            <p className="text-xl text-stone-600">
              From concept to completion, we ensure every detail reflects your brand
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Consultation</h3>
              <p className="text-stone-600">
                We discuss your vision, brand identity, and specific requirements for your winery.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Design</h3>
              <p className="text-stone-600">
                Our team creates custom designs that capture your winery's essence and heritage.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Crafting</h3>
              <p className="text-stone-600">
                Precision laser engraving brings your design to life with exceptional attention to detail.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Delivery</h3>
              <p className="text-stone-600">
                Your finished pieces are carefully packaged and delivered ready for display or gifting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-800 to-stone-800">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
            Commission Your Winery's Legacy
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Ready to create stunning pieces that reflect your winery's commitment to excellence? Let's bring your vision
            to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-stone-800 hover:bg-stone-100 text-lg px-8 py-4">
                Commission Now
              </Button>
            </Link>
            <Link href="/microbrewery">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-4 font-semibold"
              >
                View Brewery Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
