import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Target, Heart, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200&query=craftsman+workshop+tools+wood+working')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
            About
            <span className="block text-amber-300">Our Story</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-stone-200 leading-relaxed">
            Crafting excellence through precision laser engraving for the DMV's finest establishments
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6 font-playfair">
                Our Craft, Your Story
              </h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Founded with a passion for precision and an appreciation for the artisanal traditions of winemaking and
                brewing, Barrel & Vine Designs has become the trusted partner for wineries and microbreweries across the
                Washington, D.C. metropolitan area.
              </p>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                We understand that every bottle tells a story, every barrel holds history, and every brand represents
                years of dedication. Our laser engraving services are designed to honor that legacy while helping you
                connect with your customers in meaningful ways.
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                From our workshop in the heart of the DMV, we combine traditional craftsmanship values with cutting-edge
                laser technology to create pieces that are both beautiful and functional.
              </p>
              <Button className="bg-amber-600 hover:bg-amber-700">
                Learn More About Our Process
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-stone-100 p-8 rounded-lg">
              <div className="bg-[url('/placeholder.svg?height=500&width=500&query=craftsman+working+laser+engraving+workshop')] bg-cover bg-center h-96 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">Our Values</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              The principles that guide every project and relationship we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-amber-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Excellence</h3>
                <p className="text-stone-600 leading-relaxed">
                  We pursue perfection in every detail, ensuring each piece meets the highest standards of quality and
                  craftsmanship.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-amber-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Partnership</h3>
                <p className="text-stone-600 leading-relaxed">
                  We work as an extension of your team, understanding your vision and bringing it to life with
                  precision.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-amber-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Innovation</h3>
                <p className="text-stone-600 leading-relaxed">
                  Combining traditional craftsmanship with modern technology to create unique solutions for each client.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-amber-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Passion</h3>
                <p className="text-stone-600 leading-relaxed">
                  Our love for the craft and appreciation for your artistry drives everything we do.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">Meet Our Team</h2>
            <p className="text-xl text-stone-600">The craftspeople behind every exceptional piece</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-stone-200 rounded-full mx-auto mb-6 bg-[url('/placeholder.svg?height=150&width=150&query=professional+craftsman+portrait')] bg-cover bg-center" />
                <h3 className="text-xl font-bold text-stone-800 mb-2 font-playfair">Michael Thompson</h3>
                <p className="text-amber-600 font-medium mb-4">Founder & Master Craftsman</p>
                <p className="text-stone-600 leading-relaxed">
                  With over 15 years in precision manufacturing and a passion for wine and craft beer, Michael founded
                  Barrel & Vine to bridge artisanal traditions with modern technology.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-stone-200 rounded-full mx-auto mb-6 bg-[url('/placeholder.svg?height=150&width=150&query=female+designer+professional')] bg-cover bg-center" />
                <h3 className="text-xl font-bold text-stone-800 mb-2 font-playfair">Sarah Chen</h3>
                <p className="text-amber-600 font-medium mb-4">Creative Director</p>
                <p className="text-stone-600 leading-relaxed">
                  Sarah brings a background in graphic design and brand strategy, ensuring every piece perfectly
                  captures our clients' unique identity and vision.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-stone-200 rounded-full mx-auto mb-6 bg-[url('/placeholder.svg?height=150&width=150&query=technician+workshop+professional')] bg-cover bg-center" />
                <h3 className="text-xl font-bold text-stone-800 mb-2 font-playfair">David Rodriguez</h3>
                <p className="text-amber-600 font-medium mb-4">Production Manager</p>
                <p className="text-stone-600 leading-relaxed">
                  David oversees our production process, ensuring every piece meets our exacting standards for quality
                  and precision before it reaches our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">Serving the DMV</h2>
            <p className="text-xl text-stone-600">Proud to support wineries and breweries across the region</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">DC</span>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Washington, D.C.</h3>
              <p className="text-stone-600 leading-relaxed">
                Serving the nation's capital with custom engraving solutions for urban wineries and craft breweries.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">MD</span>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Maryland</h3>
              <p className="text-stone-600 leading-relaxed">
                Supporting Maryland's thriving wine country and growing craft beer scene with precision engraving.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">VA</span>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Virginia</h3>
              <p className="text-stone-600 leading-relaxed">
                Partnering with Virginia's renowned wineries and innovative breweries to enhance their brand presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-800 to-stone-800">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">Let's Create Together</h2>
          <p className="text-xl text-amber-100 mb-8 leading-relaxed">
            Ready to work with a team that understands your craft and shares your commitment to excellence? We'd love to
            hear about your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-stone-800 hover:bg-stone-100 text-lg px-8 py-4">
              Contact Us Today
            </Button>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-4 font-semibold">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
