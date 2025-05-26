import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Wine, Package, Users, ArrowRight } from "lucide-react"

export default function WineryPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-stone-900 to-purple-800">
        <div className="absolute inset-0 bg-[url('/images/barrel-engravings.png')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
            Winery Branding
            <span className="block text-purple-300">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed">
            Elevate your vintner's legacy with bespoke laser engraving that captures the essence of your terroir
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4">
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
              Featured Winery Products
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Showcase your finest wines with custom engraved pieces that reflect your winery's heritage
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Wine Crates - Full Marketing Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/wine-crates.png" alt="Personalized Wine Crates" className="w-full h-auto" />
            </div>

            {/* Custom Gift Boxes - Full Marketing Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/custom-gift-boxes.png" alt="Custom Gift Boxes" className="w-full h-auto" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Barrel Engravings - Full Marketing Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/barrel-engravings.png" alt="Custom Barrel Engravings" className="w-full h-auto" />
            </div>

            {/* Cellar Door Signs - Full Marketing Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/cellar-door-signs.png" alt="Cellar Door Heritage Signs" className="w-full h-auto" />
            </div>
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
              From elegant serving pieces to functional accessories, we offer everything you need to enhance your winery
              experience
            </p>
          </div>

          {/* Additional Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img src="/images/charcuterie-knives.png" alt="Charcuterie Knives & Tools" className="w-full h-auto" />
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img src="/images/wine-accessories.png" alt="Wine Accessories" className="w-full h-auto" />
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img src="/images/tasting-boards.png" alt="Signature Tasting Boards" className="w-full h-auto" />
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img src="/images/wine-glassware.png" alt="Engraved Wine Glassware" className="w-full h-auto" />
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img src="/images/wine-beer-tags.png" alt="Wine/Beer Tags" className="w-full h-auto" />
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img src="/images/table-markers.png" alt="Table Markers" className="w-full h-auto" />
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img src="/images/utensil-holders.png" alt="Utensil Holders" className="w-full h-auto" />
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img src="/images/drink-tokens.png" alt="Drink Tokens" className="w-full h-auto" />
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-stone-50">
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
      <section className="py-24 bg-white">
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">Elevate Your Winery's Brand</h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Ready to create stunning pieces that reflect your winery's commitment to excellence? Let's bring your vision
            to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-stone-800 hover:bg-stone-100 text-lg px-8 py-4">
              Request Quote
            </Button>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-4 font-semibold">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
