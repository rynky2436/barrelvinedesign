import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Beer, Zap, Package, Users, ArrowRight, Target, Star, Utensils } from "lucide-react"
import Link from "next/link"

export default function MicrobreweryPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-900 via-stone-900 to-amber-800">
        <div className="absolute inset-0 bg-[url('/images/tap-handles-cropped.png')] bg-cover bg-center opacity-30" />
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
            Commission Your Vision
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
              Premium Brewery Products
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Create memorable brand experiences that resonate with craft beer enthusiasts and elevate your brewery's
              presence
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Tap Handles */}
            <Card className="border-0 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src="/images/tap-handles-cropped.png"
                  alt="Custom Brewery Tap Handles with Laser Engraving"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Signature</div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Beer className="w-6 h-6 text-amber-600 mr-3" />
                  <h3 className="text-2xl font-bold text-stone-800 font-playfair">Custom Tap Handles</h3>
                </div>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Make your brewery unforgettable with unique, custom-engraved tap handles. Each handle tells your
                  beer's story and creates instant brand recognition at the bar.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Unique beer-specific designs
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Durable materials
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Brand consistency
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Bar-ready installation
                  </div>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Commission Tap Handles
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Unique Tap Handles */}
            <Card className="border-0 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src="/images/unique-tap-handles-cropped.png"
                  alt="Premium Tap Handles in Unique Materials - Resin, Metal, Acrylic"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Premium</div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Zap className="w-6 h-6 text-amber-600 mr-3" />
                  <h3 className="text-2xl font-bold text-stone-800 font-playfair">Premium Material Handles</h3>
                </div>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Eye-catching handles crafted from resin, metal, or acrylic that stand out from the competition and
                  showcase your brewery's innovative spirit.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Resin & acrylic options
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Metal accents available
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    LED integration ready
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Competition standout
                  </div>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Commission Premium Handles
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Flight Paddles */}
            <Card className="border-0 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src="/images/flight-paddles-cropped.png"
                  alt="Custom Branded Beer Flight Paddles for Brewery Tastings"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Essential</div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Utensils className="w-6 h-6 text-amber-600 mr-3" />
                  <h3 className="text-2xl font-bold text-stone-800 font-playfair">Branded Flight Paddles</h3>
                </div>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Elevate your tasting experience with custom flight paddles that showcase your brewery's attention to
                  detail and enhance customer engagement.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Custom logo engraving
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Multiple size options
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Food-safe finish
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Tasting room ready
                  </div>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Commission Flight Paddles
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Growlers */}
            <Card className="border-0 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src="/images/growlers-cropped.png"
                  alt="Personalized Glass Growlers with Custom Brewery Engraving"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Retail</div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Package className="w-6 h-6 text-amber-600 mr-3" />
                  <h3 className="text-2xl font-bold text-stone-800 font-playfair">Personalized Growlers</h3>
                </div>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Send your craft brews home in style with custom-engraved growlers that serve as lasting brand
                  ambassadors and encourage repeat visits.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Glass & stainless options
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Retail merchandise
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Brand ambassadors
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Customer retention
                  </div>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Commission Growlers
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Growler Carriers */}
            <Card className="border-0 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src="/images/growler-carriers-cropped.png"
                  alt="Custom Wooden Growler Carriers for Brewery Merchandise"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Functional
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="w-6 h-6 text-amber-600 mr-3" />
                  <h3 className="text-2xl font-bold text-stone-800 font-playfair">Growler Carriers</h3>
                </div>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Functional and stylish carriers that make it easy for customers to transport their favorite brews
                  while showcasing your brewery brand.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Convenient transport
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Branded merchandise
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Gift-ready packaging
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Customer convenience
                  </div>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Commission Carriers
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Flight Glasses */}
            <Card className="border-0 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src="/images/flight-glasses-cropped.png"
                  alt="Custom Engraved Beer Flight Glasses for Craft Breweries"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Tasting</div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-amber-600 mr-3" />
                  <h3 className="text-2xl font-bold text-stone-800 font-playfair">Flight Glasses</h3>
                </div>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Serve beer samples in style with custom-engraved glasses that enhance craft brew presentations and
                  create memorable tasting experiences.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Professional presentation
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Tasting room essential
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Brand visibility
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Star className="w-4 h-4 text-amber-500 mr-2" />
                    Customer experience
                  </div>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Commission Flight Glasses
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
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
              Complete Brewery Solutions
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              From promotional items to functional taproom accessories, enhance every aspect of your brewery's brand
              presence with custom laser engraving
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Chalkboard Beer Boards */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/chalkboard-beer-boards-cropped.png"
                  alt="Custom Chalkboard Beer Menu Boards for Taprooms"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-stone-800 mb-2 font-playfair">Chalkboard Beer Boards</h3>
                <p className="text-stone-600 text-sm mb-4">
                  Rustic charm with custom-engraved boards perfect for showcasing current beer offerings and daily
                  specials.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-amber-600 font-semibold">Taproom Display</span>
                  <Button size="sm" variant="ghost" className="text-amber-600 hover:text-amber-700">
                    Commission
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Taproom Atmosphere Decor */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/taproom-atmosphere-decor-cropped.png"
                  alt="Custom Taproom Wall Decor and Atmosphere Pieces"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-stone-800 mb-2 font-playfair">Taproom Atmosphere Décor</h3>
                <p className="text-stone-600 text-sm mb-4">
                  Custom wall art and decorative pieces that create an authentic craft brewing atmosphere and brand
                  immersion.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-amber-600 font-semibold">Brand Ambiance</span>
                  <Button size="sm" variant="ghost" className="text-amber-600 hover:text-amber-700">
                    Commission
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Drink Tokens */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/drink-tokens-cropped.png"
                  alt="Custom Wooden Drink Tokens for Brewery Events"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-stone-800 mb-2 font-playfair">Event Drink Tokens</h3>
                <p className="text-stone-600 text-sm mb-4">
                  Reward customers with personalized drink tokens that add a branded touch to special brewery events and
                  festivals.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-amber-600 font-semibold">Event Marketing</span>
                  <Button size="sm" variant="ghost" className="text-amber-600 hover:text-amber-700">
                    Commission
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Bottle Openers */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/bottle-openers-cropped.png"
                  alt="Custom Branded Bottle Openers for Brewery Promotions"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-stone-800 mb-2 font-playfair">Promotional Bottle Openers</h3>
                <p className="text-stone-600 text-sm mb-4">
                  Custom-engraved bottle openers and branded accessories perfect for promotional giveaways and
                  merchandise sales.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-amber-600 font-semibold">Promotional Items</span>
                  <Button size="sm" variant="ghost" className="text-amber-600 hover:text-amber-700">
                    Commission
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Coasters */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/coasters-cropped.png"
                  alt="Custom Slate and Wooden Coasters with Brewery Logos"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-stone-800 mb-2 font-playfair">Branded Coasters</h3>
                <p className="text-stone-600 text-sm mb-4">
                  Functional and stylish slate and wooden coasters featuring your brewery's logo for taproom use and
                  retail sales.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-amber-600 font-semibold">Taproom Essentials</span>
                  <Button size="sm" variant="ghost" className="text-amber-600 hover:text-amber-700">
                    Commission
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Serving Trays */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/serving-trays-cropped.png"
                  alt="Custom Wooden Serving Trays for Brewery Hospitality"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-stone-800 mb-2 font-playfair">Custom Serving Trays</h3>
                <p className="text-stone-600 text-sm mb-4">
                  Elegant personalized serving trays ideal for showcasing beer flights, appetizers, and enhancing
                  customer service.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-amber-600 font-semibold">Brewery Hospitality</span>
                  <Button size="sm" variant="ghost" className="text-amber-600 hover:text-amber-700">
                    Commission
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Menu Boards */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/menu-boards-cropped.png"
                  alt="Custom Wooden Menu Boards for Craft Beer Establishments"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-stone-800 mb-2 font-playfair">Taproom Menu Boards</h3>
                <p className="text-stone-600 text-sm mb-4">
                  Guide patrons through your beer offerings with tastefully engraved wooden menu boards and information
                  displays.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-amber-600 font-semibold">Information Display</span>
                  <Button size="sm" variant="ghost" className="text-amber-600 hover:text-amber-700">
                    Commission
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Beer Tags */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/wine-beer-tags-cropped.png"
                  alt="Custom Laser Engraved Beer Bottle Tags for Special Releases"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-stone-800 mb-2 font-playfair">Beer Bottle Tags</h3>
                <p className="text-stone-600 text-sm mb-4">
                  Distinguish special beer releases and limited editions with elegant laser-engraved bottle tags and
                  labels.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-amber-600 font-semibold">Special Releases</span>
                  <Button size="sm" variant="ghost" className="text-amber-600 hover:text-amber-700">
                    Commission
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
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
              Complete Brewery Services
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
      <section className="py-24 bg-stone-50">
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
              <div className="bg-[url('/images/tap-handles-cropped.png')] bg-cover bg-center h-64 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">Commission Something Special</h2>
          <p className="text-xl text-amber-100 mb-8 leading-relaxed">
            Ready to create merchandise that tells your brewery's story and connects with craft beer enthusiasts? Let's
            craft something memorable together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-stone-800 hover:bg-stone-100 text-lg px-8 py-4">
                Commission Now
              </Button>
            </Link>
            <Link href="/winery">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-4 font-semibold"
              >
                View Winery Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
