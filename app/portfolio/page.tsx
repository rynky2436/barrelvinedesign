"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Filter } from "lucide-react"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const portfolioItems = [
    // Featured Main Products
    {
      id: 1,
      title: "Personalized Wine Crates",
      category: "winery",
      image: "/images/wine-crates.png",
      description: "Elevate your wine packaging with custom-engraved wooden crates that make a lasting impression.",
      client: "Premium Winery Collection",
      featured: true,
    },
    {
      id: 2,
      title: "Custom Barrel Engravings",
      category: "winery",
      image: "/images/barrel-engravings.png",
      description: "Transform your barrels into stunning works of art with custom engravings.",
      client: "Heritage Vineyard",
      featured: true,
    },
    {
      id: 3,
      title: "Custom Tap Handles",
      category: "brewery",
      image: "/images/tap-handles.png",
      description: "Make your brewery unforgettable with unique, custom-engraved tap handles.",
      client: "Craft Beer Collection",
      featured: true,
    },
    {
      id: 4,
      title: "Branded Flight Paddles",
      category: "brewery",
      image: "/images/flight-paddles.png",
      description: "Elevate your tasting experience with custom flight paddles.",
      client: "Local Brewery Partners",
      featured: true,
    },
    {
      id: 5,
      title: "Personalized Growlers",
      category: "brewery",
      image: "/images/growlers.png",
      description: "Send your brews home in style with custom-engraved growlers.",
      client: "DMV Craft Breweries",
      featured: true,
    },
    {
      id: 6,
      title: "Custom Gift Boxes",
      category: "winery",
      image: "/images/custom-gift-boxes.png",
      description: "Impress with personalized gift boxes that showcase your logo and elevate presentation.",
      client: "Premium Gift Collections",
      featured: true,
    },
    // Winery Products
    {
      id: 7,
      title: "Wine Accessories",
      category: "winery",
      image: "/images/wine-accessories.png",
      description: "Add a touch of class with custom-engraved wine accessories.",
      client: "Boutique Wineries",
      featured: false,
    },
    {
      id: 8,
      title: "Signature Tasting Boards",
      category: "winery",
      image: "/images/tasting-boards.png",
      description: "Enhance your tasting experience with elegant custom boards.",
      client: "Premium Tasting Rooms",
      featured: false,
    },
    {
      id: 9,
      title: "Engraved Wine Glassware",
      category: "winery",
      image: "/images/wine-glassware.png",
      description: "Custom-engraved glassware featuring your logo as memorable souvenirs.",
      client: "Vineyard Gift Shops",
      featured: false,
    },
    {
      id: 10,
      title: "Charcuterie Knives & Tools",
      category: "winery",
      image: "/images/charcuterie-knives.png",
      description: "Sophisticated custom-engraved tools for wine presentations and tastings.",
      client: "Upscale Wineries",
      featured: false,
    },
    {
      id: 11,
      title: "Cellar Door Heritage Signs",
      category: "winery",
      image: "/images/cellar-door-signs.png",
      description: "Distinguished signage that reflects your winery's terroir and unique character.",
      client: "Vineyard Entrances",
      featured: false,
    },
    {
      id: 12,
      title: "Wine/Beer Tags",
      category: "winery",
      image: "/images/wine-beer-tags.png",
      description: "Distinguish your bottles with engraved tags for special releases and limited editions.",
      client: "Special Releases",
      featured: false,
    },
    {
      id: 13,
      title: "Table Markers & Reserved Signs",
      category: "winery",
      image: "/images/table-markers.png",
      description: "Sophisticated table markers for organized and elegant tasting room service.",
      client: "Upscale Wineries",
      featured: false,
    },
    {
      id: 14,
      title: "Utensil Holders & Dispensers",
      category: "winery",
      image: "/images/utensil-holders.png",
      description: "Rustic dining accessories that keep utensils organized while reinforcing brand charm.",
      client: "Winery Restaurants",
      featured: false,
    },
    // Brewery Products
    {
      id: 15,
      title: "Tap Handles in Unique Materials",
      category: "brewery",
      image: "/images/unique-tap-handles.png",
      description: "Eye-catching handles made from resin, metal, or acrylic that stand out from the competition.",
      client: "Premium Breweries",
      featured: false,
    },
    {
      id: 16,
      title: "Flight Glasses",
      category: "brewery",
      image: "/images/flight-glasses.png",
      description: "Serve samples in style with custom-engraved glasses that enhance craft brew presentations.",
      client: "Tasting Rooms",
      featured: false,
    },
    {
      id: 17,
      title: "Growler Carriers",
      category: "brewery",
      image: "/images/growler-carriers.png",
      description: "Functional and stylish carriers that make it easy for customers to transport brews.",
      client: "Brewery Merchandise",
      featured: false,
    },
    {
      id: 18,
      title: "Chalkboard Beer Boards",
      category: "brewery",
      image: "/images/chalkboard-beer-boards.png",
      description: "Rustic charm with custom-engraved boards perfect for showcasing current offerings.",
      client: "Taproom Displays",
      featured: false,
    },
    {
      id: 19,
      title: "Taproom Atmosphere Décor",
      category: "brewery",
      image: "/images/taproom-atmosphere-decor.png",
      description: "Custom wall art and decorative pieces that create an authentic craft brewing atmosphere.",
      client: "Brewery Ambiance",
      featured: false,
    },
    {
      id: 20,
      title: "Drink Tokens",
      category: "brewery",
      image: "/images/drink-tokens.png",
      description: "Reward customers with personalized drink tokens that add a branded touch to special events.",
      client: "Event Marketing",
      featured: false,
    },
    {
      id: 21,
      title: "Bottle Openers & Branded Items",
      category: "brewery",
      image: "/images/bottle-openers.png",
      description: "Custom-engraved accessories perfect for promotional giveaways.",
      client: "Event Marketing",
      featured: false,
    },
    {
      id: 22,
      title: "Slate & Wooden Coasters",
      category: "brewery",
      image: "/images/coasters.png",
      description: "Functional and stylish coasters featuring your brewery's logo.",
      client: "Taproom Essentials",
      featured: false,
    },
    {
      id: 23,
      title: "Custom Serving Trays",
      category: "brewery",
      image: "/images/serving-trays.png",
      description: "Elegant personalized serving trays ideal for showcasing flights and appetizers.",
      client: "Brewery Hospitality",
      featured: false,
    },
    {
      id: 24,
      title: "Taproom Menu Boards",
      category: "brewery",
      image: "/images/menu-boards.png",
      description: "Guide patrons through your offerings with tastefully engraved wooden menus.",
      client: "Craft Beer Establishments",
      featured: false,
    },
  ]

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : activeFilter === "featured"
        ? portfolioItems.filter((item) => item.featured)
        : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800">
        <div className="absolute inset-0 bg-[url('/images/wine-crates.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
            Our
            <span className="block text-amber-300">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-stone-200 leading-relaxed">
            Showcasing our finest laser engraving work for wineries and breweries across the DMV
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={activeFilter === "all" ? "default" : "outline"}
              onClick={() => setActiveFilter("all")}
              className={activeFilter === "all" ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              <Filter className="w-4 h-4 mr-2" />
              All Projects
            </Button>
            <Button
              variant={activeFilter === "featured" ? "default" : "outline"}
              onClick={() => setActiveFilter("featured")}
              className={activeFilter === "featured" ? "bg-stone-600 hover:bg-stone-700" : ""}
            >
              Featured Work
            </Button>
            <Button
              variant={activeFilter === "winery" ? "default" : "outline"}
              onClick={() => setActiveFilter("winery")}
              className={activeFilter === "winery" ? "bg-purple-600 hover:bg-purple-700" : ""}
            >
              Winery Projects
            </Button>
            <Button
              variant={activeFilter === "brewery" ? "default" : "outline"}
              onClick={() => setActiveFilter("brewery")}
              className={activeFilter === "brewery" ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              Brewery Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                  item.featured ? "ring-2 ring-amber-400" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge
                      className={`${
                        item.category === "winery"
                          ? "bg-purple-600 hover:bg-purple-700"
                          : "bg-amber-600 hover:bg-amber-700"
                      }`}
                    >
                      {item.category === "winery" ? "Winery" : "Brewery"}
                    </Badge>
                    {item.featured && <Badge className="bg-yellow-500 hover:bg-yellow-600 text-black">Featured</Badge>}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-stone-800 mb-2 font-playfair">{item.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-stone-500">{item.client}</span>
                    <Link href="/contact">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-amber-600 hover:text-amber-700 hover:bg-amber-50"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">Product Categories</h2>
            <p className="text-xl text-stone-600">Comprehensive solutions for every aspect of your business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍷</span>
                </div>
                <h3 className="font-bold text-stone-800 mb-2">Core Products</h3>
                <p className="text-sm text-stone-600">Wine crates, barrel heads, tap handles</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍽️</span>
                </div>
                <h3 className="font-bold text-stone-800 mb-2">Serving & Dining</h3>
                <p className="text-sm text-stone-600">Boards, trays, utensil holders</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎁</span>
                </div>
                <h3 className="font-bold text-stone-800 mb-2">Accessories</h3>
                <p className="text-sm text-stone-600">Stoppers, openers, keychains</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="font-bold text-stone-800 mb-2">Signage & Menus</h3>
                <p className="text-sm text-stone-600">Menu boards, table markers, signs</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="font-bold text-stone-800 mb-2">Premium Items</h3>
                <p className="text-sm text-stone-600">Gift boxes, tokens, carriers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">Our Impact</h2>
            <p className="text-xl text-stone-600">Numbers that reflect our commitment to excellence</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">300+</div>
              <p className="text-stone-600 font-medium">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">120+</div>
              <p className="text-stone-600 font-medium">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">35+</div>
              <p className="text-stone-600 font-medium">Product Types</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">100%</div>
              <p className="text-stone-600 font-medium">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-800 to-stone-800">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">Ready to Join Our Portfolio?</h2>
          <p className="text-xl text-amber-100 mb-8 leading-relaxed">
            Let's create something exceptional for your winery or brewery that will be showcased with pride.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-stone-800 hover:bg-stone-100 text-lg px-8 py-4">
                Start Your Project
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-4 font-semibold"
              >
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
