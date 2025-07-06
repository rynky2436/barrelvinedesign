import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Winery Solutions | Barrel & Vine Designs",
  description:
    "Comprehensive laser engraving solutions for wineries. We create custom wine boxes, barrel heads, cellar signs, tasting boards, and more to enhance your brand.",
}

const services = [
  {
    title: "Custom Wine Boxes",
    description:
      "Create unforgettable gifts and packaging with bespoke wooden wine boxes, engraved with your winery’s logo and branding.",
    href: "/custom-wine-boxes",
    imgSrc: "/images/winery-custom-wine-box.png",
  },
  {
    title: "Wine Barrel Heads",
    description:
      "Turn authentic barrel heads into stunning, personalized decor for your tasting room or as high-value auction items.",
    href: "/wine-barrel-heads",
    imgSrc: "/images/winery-barrel-head.png",
  },
  {
    title: "Cellar Door Signs",
    description:
      "Guide your guests with elegant, custom-engraved wooden signage that reflects the quality and character of your winery.",
    href: "/cellar-door-signs",
    imgSrc: "/images/winery-cellar-door-sign.png",
  },
  {
    title: "Tasting Boards",
    description: "Enhance your wine tasting experience with custom engraved tasting boards and serving platters.",
    href: "/tasting-boards",
    imgSrc: "/images/winery-tasting-boards.png",
  },
  {
    title: "Wine Accessories",
    description: "Complete your wine service with custom bottle openers, wine stoppers, and other branded accessories.",
    href: "/wine-accessories",
    imgSrc: "/images/winery-wine-accessories.png",
  },
  {
    title: "Charcuterie Tools",
    description: "Elevate your wine and cheese pairings with custom engraved charcuterie knives and serving tools.",
    href: "/charcuterie-tools",
    imgSrc: "/images/winery-charcuterie-tools.png",
  },
]

export default function WineryPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white">
        <Image
          src="/images/winery-solutions.png"
          alt="Elegant winery tasting room"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Winery Solutions</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl">Elevate Your Brand with Custom Laser Engraving</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Winery Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              From the cellar to the tasting room, we provide bespoke engraved products that tell your story.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                href={service.href}
                key={service.title}
                className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative h-56">
                  <Image
                    src={service.imgSrc || "/placeholder.svg"}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                  <div className="mt-4 inline-flex items-center text-amber-700 font-semibold group-hover:text-amber-800">
                    Learn More{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-amber-800">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Enhance Your Winery?</h2>
          <p className="mt-4 text-lg text-amber-100">
            Let's discuss your project. We serve wineries across DC, Maryland, and Virginia.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-white text-amber-800 font-bold py-3 px-8 rounded-md hover:bg-amber-50 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
