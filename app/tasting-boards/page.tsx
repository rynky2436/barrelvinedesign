import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Zap } from "lucide-react"

const features = [
  { name: "Premium Hardwoods", description: "Choose from oak, walnut, or maple for a durable and beautiful finish." },
  {
    name: "Precision Engraving",
    description: "Your logo, brand name, or custom design laser-etched with sharp detail.",
  },
  {
    name: "Food-Safe Finish",
    description: "Treated with food-grade mineral oil and beeswax for safe and lasting use.",
  },
  {
    name: "Custom Shapes & Sizes",
    description: "From single-glass tasters to large serving platters, we create to your spec.",
  },
]

export default function TastingBoardsPage() {
  return (
    <div className="bg-white">
      <section className="relative py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/tasting-boards.png"
            alt="A collection of custom engraved wine tasting boards"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>
        <div className="container mx-auto px-4 relative text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-gray-900">Custom Tasting Boards</h1>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto text-gray-700">
            Enhance your wine tasting experience and leave a lasting impression with beautifully engraved tasting
            boards.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-serif text-gray-900">Crafted for the Connoisseur</h2>
              <p className="mt-4 text-lg text-gray-600">
                Our tasting boards are more than just serving tools; they are a statement of quality and attention to
                detail. Each board is meticulously crafted to not only serve your finest wines but also to showcase your
                brand with elegance.
              </p>
              <ul className="mt-8 space-y-4">
                {features.map((feature) => (
                  <li key={feature.name} className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">{feature.name}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/winery-tasting-boards.png"
                alt="Close-up of a laser-engraved tasting board"
                width={600}
                height={500}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <Zap className="mx-auto h-12 w-12 text-amber-500" />
          <h2 className="mt-4 text-3xl font-bold font-serif text-gray-900">Our Simple 4-Step Process</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From concept to creation, we make it easy to get the perfect custom products.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-amber-600">1</div>
              <h3 className="mt-2 text-xl font-semibold">Consultation</h3>
              <p className="mt-2 text-gray-600">Share your vision, branding, and requirements with our design team.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-amber-600">2</div>
              <h3 className="mt-2 text-xl font-semibold">Design & Mock-up</h3>
              <p className="mt-2 text-gray-600">We create a digital proof for your review and approval.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-amber-600">3</div>
              <h3 className="mt-2 text-xl font-semibold">Crafting</h3>
              <p className="mt-2 text-gray-600">Our artisans bring your design to life with precision engraving.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-amber-600">4</div>
              <h3 className="mt-2 text-xl font-semibold">Delivery</h3>
              <p className="mt-2 text-gray-600">Your custom boards are finished, inspected, and shipped to you.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
