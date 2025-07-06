import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

const services = [
  {
    title: "Custom Wine Boxes",
    description:
      "Elegant wooden wine boxes with personalized laser engraving, perfect for gifts and premium packaging.",
    imageUrl: "/images/winery-custom-wine-box.png",
    link: "/custom-wine-boxes",
  },
  {
    title: "Wine Barrel Heads",
    description:
      "Transform authentic wine barrel heads into stunning, personalized decorative pieces for your winery or home.",
    imageUrl: "/images/winery-barrel-head.png",
    link: "/wine-barrel-heads",
  },
  {
    title: "Cellar Door Signs",
    description:
      "Welcome guests with beautifully crafted, custom-engraved signs for your cellar door, tasting room, or vineyard.",
    imageUrl: "/images/winery-cellar-door-sign.png",
    link: "/cellar-door-signs",
  },
  {
    title: "Tasting Boards",
    description: "Enhance your wine tasting experience with custom engraved tasting boards and serving platters.",
    imageUrl: "/images/winery-tasting-boards.png",
    link: "/tasting-boards",
  },
  {
    title: "Wine Accessories",
    description: "Complete your wine service with custom bottle openers, wine stoppers, and other branded accessories.",
    imageUrl: "/images/winery-wine-accessories.png",
    link: "/wine-accessories",
  },
  {
    title: "Charcuterie Tools",
    description: "Elevate your wine and cheese pairings with custom engraved charcuterie knives and serving tools.",
    imageUrl: "/images/winery-charcuterie-tools.png",
    link: "/charcuterie-tools",
  },
]

const benefits = [
  "Elevate Brand Perception",
  "Increase Customer Loyalty",
  "Create Memorable Experiences",
  "Boost Retail Sales",
  "Enhance Tasting Room Ambiance",
  "Perfect for Corporate Gifting",
]

export default function WinerySolutionsPage() {
  return (
    <div className="bg-gray-50">
      <section className="relative bg-gray-800 text-white py-20 md:py-32">
        <Image
          src="/images/winery-solutions.png"
          alt="Elegant winery setup with custom engraved products"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-30"
          priority
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-serif">Winery Solutions</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Crafting bespoke laser-engraved products that tell your winery's unique story.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
              Our Engraving Services for Wineries
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              From the cellar to the tasting room, we provide a full suite of custom products to enhance your brand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="relative h-56">
                  <Image
                    src={service.imageUrl || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 font-serif">{service.title}</h3>
                  <p className="mt-2 text-gray-600 flex-grow">{service.description}</p>
                  <Link
                    href={service.link}
                    className="mt-4 inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 self-start"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">The Barrel & Vine Advantage</h2>
            <p className="mt-4 text-lg text-gray-600">Partner with us to unlock tangible benefits for your winery.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-green-500 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{benefit}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber-700 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold font-serif">Ready to Elevate Your Brand?</h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Let's discuss how our custom laser engraving can bring your vision to life. Contact us today for a
            personalized quote and design mock-up.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-white hover:bg-gray-100 text-amber-700 font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  )
}
