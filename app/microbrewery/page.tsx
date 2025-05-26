import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Beer, Zap, Package, Users, ArrowRight, Target } from "lucide-react"

export default function MicrobreweryPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-900 via-stone-900 to-amber-800">
        <div className="absolute inset-0 bg-[url('/images/tap-handles.png')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
            Microbrewery
            <span className="block text-amber-300">Merchandise</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-100 leading-relaxed">
            Stand out in the competitive craft beer landscape with distinctive laser-engraved merchandise
          </p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4">
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
              Featured Brewery Products
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Create memorable brand experiences that resonate with craft beer enthusiasts
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Tap Handles - Full Marketing Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/tap-handles.png" alt="Custom Tap Handles" className="w-full h-auto" />
            </div>

            {/* Unique Tap Handles - Full Marketing Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/unique-tap-handles.png"
                alt="Tap Handles in Unique Materials"
                className="w-full h-auto"
              />
            </div>

            {/* Flight Paddles - Full Marketing Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/flight-paddles.png" alt="Branded Flight Paddles" className="w-full h-auto" />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Growlers - Full Marketing Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/growlers.png" alt="Personalized Growlers" className="w-full h-auto" />
            </div>

            {/* Growler Carriers - Full Marketing Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/growler-carriers.png" alt="Growler Carriers" className="w-full h-auto" />
            </div>

            {/* Flight Glasses - Full Marketing Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/flight-glasses.png" alt="Flight Glasses" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Products Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
              Complete Brewery Solutions
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              From promotional items to functional taproom accessories, we provide everything to enhance your brewery's
              brand presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img src="/images/chalkboard-beer-boards.png" alt="Chalkboard Beer Boards" className="w-full h-auto" />
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img
                src="/images/taproom-atmosphere-decor.png"
                alt="Taproom Atmosphere Décor"
                className="w-full h-auto"
              />
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img src="/images/drink-tokens.png" alt="Drink Tokens" className="w-full h-auto" />
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img src="/images/bottle-openers.png" alt="Promotional Items" className="w-full h-auto" />
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img src="/images/coasters.png" alt="Slate & Wooden Coasters" className="w-full h-auto" />
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img src="/images/serving-trays.png" alt="Custom Serving Trays" className="w-full h-auto" />
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img src="/images/menu-boards.png" alt="Taproom Menu Boards" className="w-full h-auto" />
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img src="/images/wine-beer-tags.png" alt="Beer Tags" className="w-full h-auto" />
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
              Complete Brewery Solutions
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              From tap handles to growlers, we help you create memorable brand experiences that resonate with craft beer
              enthusiasts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Beer className="w-12 h-12 text-amber-600 mb-6" />
                <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Custom Tap Handles</h3>
                <p className="text-stone-600 mb-6">
                  Eye-catching tap handles that make your beers stand out at the bar and tell your brewery's story.
                </p>
                <ul className="space-y-2 text-stone-600">
                  <li>• Unique designs per beer</li>
                  <li>• Durable materials</li>
                  <li>• Brand consistency</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Package className="w-12 h-12 text-amber-600 mb-6" />
                <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Branded Glassware</h3>
                <p className="text-stone-600 mb-6">
                  Custom engraved pint glasses, growlers, and flight boards that enhance the drinking experience.
                </p>
                <ul className="space-y-2 text-stone-600">
                  <li>• Pint glasses & mugs</li>
                  <li>• Growlers & crowlers</li>
                  <li>• Tasting flight boards</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Zap className="w-12 h-12 text-amber-600 mb-6" />
                <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Taproom Décor</h3>
                <p className="text-stone-600 mb-6">
                  Create an immersive taproom experience with custom signage and decorative elements.
                </p>
                <ul className="space-y-2 text-stone-600">
                  <li>• Beer menu boards</li>
                  <li>• Welcome signs</li>
                  <li>• Wall art & displays</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-amber-600 mb-6" />
                <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Promotional Items</h3>
                <p className="text-stone-600 mb-6">
                  Memorable promotional merchandise that keeps your brewery top-of-mind with customers.
                </p>
                <ul className="space-y-2 text-stone-600">
                  <li>• Bottle openers</li>
                  <li>• Coasters & bar mats</li>
                  <li>• Event giveaways</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-amber-600 mb-6" />
                <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Event Merchandise</h3>
                <p className="text-stone-600 mb-6">
                  Special edition pieces for festivals, releases, and brewery events that create lasting memories.
                </p>
                <ul className="space-y-2 text-stone-600">
                  <li>• Festival exclusives</li>
                  <li>• Release commemoratives</li>
                  <li>• Anniversary pieces</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Beer className="w-12 h-12 text-amber-600 mb-6" />
                <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Custom Projects</h3>
                <p className="text-stone-600 mb-6">
                  Unique, brewery-specific pieces that capture your brand's personality and brewing philosophy.
                </p>
                <ul className="space-y-2 text-stone-600">
                  <li>• Bespoke designs</li>
                  <li>• Limited editions</li>
                  <li>• Signature pieces</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
              Why Craft Breweries Choose Us
            </h2>
            <p className="text-xl text-stone-600">
              Understanding the craft beer culture and what makes your brewery unique
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-stone-800 mb-6 font-playfair">Craft Beer Expertise</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mt-2 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-2">Industry Knowledge</h4>
                    <p className="text-stone-600">
                      Deep understanding of craft beer culture and what resonates with beer enthusiasts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mt-2 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-2">Brand Differentiation</h4>
                    <p className="text-stone-600">
                      Help your brewery stand out in a crowded market with distinctive merchandise.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mt-2 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-2">Quality Materials</h4>
                    <p className="text-stone-600">
                      Durable, food-safe materials that maintain their appearance through heavy use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-stone-100 p-8 rounded-lg">
              <div className="bg-[url('/images/tap-handles.png')] bg-cover bg-center h-64 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">Our Brewery Process</h2>
            <p className="text-xl text-stone-600">
              From concept to taproom, we ensure every piece reflects your brewery's character
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Discovery</h3>
              <p className="text-stone-600">We learn about your brewery's story, beer styles, and target audience.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Creative</h3>
              <p className="text-stone-600">
                Custom designs that capture your brewery's personality and brewing philosophy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Production</h3>
              <p className="text-stone-600">
                Precision laser engraving using materials built for the demands of brewery environments.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Installation</h3>
              <p className="text-stone-600">
                Ready-to-use pieces delivered and installed in your taproom or distributed to accounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-800 to-stone-800">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">Brew Up Something Special</h2>
          <p className="text-xl text-amber-100 mb-8 leading-relaxed">
            Ready to create merchandise that tells your brewery's story and connects with craft beer enthusiasts? Let's
            craft something memorable together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-stone-800 hover:bg-stone-100 text-lg px-8 py-4">
              Get Started
            </Button>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-4 font-semibold">
              See Examples
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
