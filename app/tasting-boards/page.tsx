import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Custom Engraved Tasting Boards | Barrel & Vine Designs",
  description:
    "Elevate your wine tasting experience with custom laser-engraved tasting boards and serving platters. Perfect for wineries and tasting rooms.",
}

export default function TastingBoardsPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Custom Tasting Boards</h1>
            <p className="mt-4 text-lg text-gray-600">
              Create a memorable and sophisticated tasting experience for your guests with our beautifully crafted,
              custom-engraved tasting boards and serving platters. Each piece is designed to showcase your wines and
              complement your brand's aesthetic.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block bg-amber-800 text-white font-bold py-3 px-8 rounded-md hover:bg-amber-900 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/winery-tasting-boards.png"
                alt="Custom engraved wine tasting board"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900">Designed for Your Experience</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold">Premium Materials</h3>
              <p className="mt-2 text-gray-600">
                Choose from high-quality woods like oak, walnut, and maple for a durable and elegant finish.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold">Precision Engraving</h3>
              <p className="mt-2 text-gray-600">
                Your logo, brand name, or custom design is laser-engraved with exceptional detail and clarity.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold">Functional Design</h3>
              <p className="mt-2 text-gray-600">
                Options include recessed slots for glasses, handles for easy carrying, and food-safe finishes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
