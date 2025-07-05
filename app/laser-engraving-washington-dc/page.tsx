import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MapPin, Award, Clock, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Laser Engraving Washington DC | Custom Engraving Services | Barrel & Vine Designs",
  description:
    "Professional laser engraving services in Washington DC. Custom wood engraving, metal engraving, acrylic cutting for businesses and individuals. Fast turnaround, premium quality.",
  keywords:
    "laser engraving Washington DC, custom engraving DC, wood engraving Washington, metal engraving DC, acrylic cutting Washington DC, personalized gifts DC",
  openGraph: {
    title: "Laser Engraving Washington DC | Custom Engraving Services",
    description:
      "Professional laser engraving services in Washington DC. Custom wood, metal, and acrylic engraving for businesses and individuals.",
    images: [{ url: "/images/hero-background.png", width: 1200, height: 630, alt: "Laser Engraving Washington DC" }],
  },
}

const dcSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Barrel & Vine Designs - Washington DC Laser Engraving",
  description: "Professional laser engraving services in Washington DC",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Washington",
    addressRegion: "DC",
    addressCountry: "US",
  },
  telephone: "(301) 748-8360",
  areaServed: {
    "@type": "City",
    name: "Washington, D.C.",
  },
  serviceType: "Laser Engraving",
}

export default function LaserEngravingWashingtonDCPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dcSchema) }} />
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-stone-800 via-amber-900 to-stone-900">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/images/hero-background.png"
              alt="Laser Engraving Services Washington DC"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

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

            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Laser Engraving Washington DC</h1>
            <p className="text-xl md:text-2xl text-amber-200 mb-8 max-w-3xl mx-auto">
              Professional Custom Engraving Services in the Nation's Capital
            </p>
            <p className="text-lg text-stone-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Serving Washington DC with premium laser engraving services for businesses, organizations, and
              individuals. From corporate branding to personalized gifts, we deliver exceptional quality and fast
              turnaround times in the heart of the DMV region.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4 font-semibold">
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+13017488360">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-stone-800 text-lg px-8 py-4 bg-transparent"
                >
                  Call (301) 748-8360
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* DC-Specific Services */}
        <section className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
                Washington DC Laser Engraving Services
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Specialized engraving services for DC's unique business and cultural landscape
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Government & Federal */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/winery-cellar-door-sign.png"
                    alt="Government Agency Laser Engraving Services"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Award className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Government & Federal</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Professional engraving services for government agencies, federal offices, and official recognition
                    items.
                  </p>
                  <ul className="text-sm text-stone-600 mb-4 space-y-1">
                    <li>• Official plaques and awards</li>
                    <li>• Department signage</li>
                    <li>• Recognition gifts</li>
                    <li>• Secure facility compliance</li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-amber-700 hover:bg-amber-800">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Museums & Cultural */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/custom-gift-boxes.png"
                    alt="Museum and Cultural Institution Engraving"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Users className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Museums & Cultural</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Custom engraving for DC's world-class museums, galleries, and cultural institutions.
                  </p>
                  <ul className="text-sm text-stone-600 mb-4 space-y-1">
                    <li>• Exhibition signage</li>
                    <li>• Donor recognition</li>
                    <li>• Gift shop merchandise</li>
                    <li>• Educational displays</li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-amber-700 hover:bg-amber-800">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Corporate DC */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/winery-luxury-gift-box.png"
                    alt="Corporate Laser Engraving Washington DC"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Award className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Corporate Services</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Professional corporate engraving for DC's business community, law firms, and consulting companies.
                  </p>
                  <ul className="text-sm text-stone-600 mb-4 space-y-1">
                    <li>• Executive gifts</li>
                    <li>• Office signage</li>
                    <li>• Client appreciation items</li>
                    <li>• Conference materials</li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-amber-700 hover:bg-amber-800">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Hospitality & Restaurants */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/brewery-menu-board.png"
                    alt="Restaurant and Hospitality Engraving DC"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Users className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Hospitality & Dining</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Custom engraving for DC's vibrant restaurant scene, hotels, and hospitality businesses.
                  </p>
                  <ul className="text-sm text-stone-600 mb-4 space-y-1">
                    <li>• Menu boards and signage</li>
                    <li>• Hotel amenities</li>
                    <li>• Restaurant branding</li>
                    <li>• Event materials</li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-amber-700 hover:bg-amber-800">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Universities & Education */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/winery-cellar-door-sign.png"
                    alt="University and Educational Institution Engraving"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Award className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Universities & Education</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Academic engraving services for DC's universities, schools, and educational institutions.
                  </p>
                  <ul className="text-sm text-stone-600 mb-4 space-y-1">
                    <li>• Academic awards</li>
                    <li>• Campus signage</li>
                    <li>• Alumni gifts</li>
                    <li>• Research recognition</li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-amber-700 hover:bg-amber-800">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Personal & Gifts */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/custom-gift-boxes.png"
                    alt="Personal Gift Engraving Washington DC"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Users className="w-6 h-6 mb-2" />
                    <h3 className="text-lg font-bold">Personal & Gifts</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    Personalized engraving services for DC residents' special occasions and meaningful gifts.
                  </p>
                  <ul className="text-sm text-stone-600 mb-4 space-y-1">
                    <li>• Wedding gifts</li>
                    <li>• Anniversary items</li>
                    <li>• Memorial pieces</li>
                    <li>• Holiday gifts</li>
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-amber-700 hover:bg-amber-800">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* DC Advantages */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
                Why Choose Us for Washington DC Laser Engraving
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Local expertise with national capital standards of excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-stone-800 mb-2">Local Presence</h3>
                <p className="text-sm text-stone-600">Serving Washington DC with local knowledge and fast delivery</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-stone-800 mb-2">Fast Turnaround</h3>
                <p className="text-sm text-stone-600">Quick project completion for DC's fast-paced environment</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-stone-800 mb-2">Professional Quality</h3>
                <p className="text-sm text-stone-600">Meeting the high standards expected in the nation's capital</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-stone-800 mb-2">Diverse Clientele</h3>
                <p className="text-sm text-stone-600">Experience serving government, corporate, and cultural sectors</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas in DC */}
        <section className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">
                Washington DC Service Areas
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Providing laser engraving services throughout Washington DC and surrounding areas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-stone-800 mb-2">Northwest DC</h3>
                <p className="text-sm text-stone-600">Georgetown, Dupont Circle, Adams Morgan, Woodley Park</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-stone-800 mb-2">Northeast DC</h3>
                <p className="text-sm text-stone-600">Capitol Hill, H Street Corridor, Brookland, Trinidad</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-stone-800 mb-2">Southeast DC</h3>
                <p className="text-sm text-stone-600">Navy Yard, Anacostia, Capitol Riverfront, Congress Heights</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-stone-800 mb-2">Southwest DC</h3>
                <p className="text-sm text-stone-600">The Wharf, Federal Center, L'Enfant Plaza</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-stone-800 mb-2">Downtown DC</h3>
                <p className="text-sm text-stone-600">Penn Quarter, Chinatown, Federal Triangle, K Street</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-stone-800 mb-2">Federal District</h3>
                <p className="text-sm text-stone-600">Capitol Complex, White House area, Supreme Court vicinity</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-amber-800 to-stone-800">
          <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
              Ready to Start Your Washington DC Project?
            </h2>
            <p className="text-xl text-amber-100 mb-8 leading-relaxed">
              Contact us today for professional laser engraving services in Washington DC. Fast quotes, quality work,
              and exceptional service for the nation's capital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-stone-800 hover:bg-stone-100 text-lg px-8 py-4 font-semibold"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+13017488360">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-stone-800 text-lg px-8 py-4 bg-transparent"
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
