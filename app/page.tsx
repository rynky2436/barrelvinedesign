import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Barrel & Vine Designs - Premium Custom Laser Engraving | Washington DC, Maryland, Virginia",
  description:
    "Premium laser engraving services for wineries, breweries & distilleries in Washington DC, Maryland & Virginia. Custom wine boxes, tap handles, barrel heads & branded merchandise. Call (301) 748-8360.",
  keywords:
    "laser engraving Washington DC, custom wine barrel engraving, brewery merchandise Maryland, winery branding Virginia, tap handles DMV, wine box engraving, barrel head personalization",
  openGraph: {
    title: "Barrel & Vine Designs - Premium Custom Laser Engraving | DMV Region",
    description:
      "Premium laser engraving services for wineries, breweries & distilleries in Washington DC, Maryland & Virginia. Custom wine boxes, tap handles, barrel heads & branded merchandise.",
    images: [
      {
        url: "/images/hero-background.png",
        width: 1200,
        height: 630,
        alt: "Barrel & Vine Designs - Custom Laser Engraving Services",
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <section className="relative h-screen w-full">
        <Image
          src="/images/hero-background.png"
          alt="Premium Custom Laser Engraving Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/20 flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-4">Premium Custom Laser Engraving</h1>
            <p className="text-xl text-gray-300 mb-8">
              Serving Wineries, Breweries & Distilleries in Washington DC, Maryland & Virginia
            </p>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
              <Image
                src="/images/winery-solutions.png"
                alt="Custom Wine Box Engraving and Winery Branding Services"
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4">
                <h3 className="text-xl font-semibold text-white">Winery Solutions</h3>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
              <Image
                src="/images/brewery-solutions.png"
                alt="Custom Brewery Merchandise and Tap Handle Services"
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4">
                <h3 className="text-xl font-semibold text-white">Brewery Solutions</h3>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
              <Image
                src="/images/distillery-solutions.png"
                alt="Custom Distillery Branding and Engraving Services"
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4">
                <h3 className="text-xl font-semibold text-white">Distillery Solutions</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Expert Craftsmanship</h3>
              <p className="text-gray-600">
                Our skilled artisans are dedicated to providing the highest quality laser engraving services. We pay
                attention to every detail to ensure your complete satisfaction.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Custom Solutions</h3>
              <p className="text-gray-600">
                We offer a wide range of custom engraving options to meet your specific needs. Whether you need wine
                boxes, tap handles, or barrel heads, we can help you create unique and memorable products.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
