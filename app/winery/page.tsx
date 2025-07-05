import type { Metadata } from "next"
import Image from "next/image"
import { Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Winery - Twisted Vine Brewery",
  description:
    "Visit our winery and brewery in Poolesville, MD. Enjoy our selection of wines and beers. Call us at (240) 324-7110 to book a tour or tasting.",
}

export default function WineryPage() {
  return (
    <div className="relative overflow-hidden bg-stone-50">
      <div className="relative pt-16 pb-32 sm:pt-24 sm:pb-40">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="relative lg:col-span-2">
              <div className="relative mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0">
                {/* Hero content */}
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-stone-800 sm:text-5xl">Our Winery</h1>
                  <p className="mt-6 text-xl text-stone-600">
                    Experience the art of winemaking at Twisted Vine Brewery. We offer a variety of handcrafted wines,
                    from crisp whites to robust reds.
                  </p>
                  <div className="mt-8 flex gap-4">
                    <a href="tel:+12403247110">
                      <Button
                        size="lg"
                        className="bg-white text-stone-800 hover:bg-stone-100 text-lg px-8 py-4 font-semibold"
                      >
                        <Phone className="mr-2 w-5 h-5" />
                        Call (240) 324-7110
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <Image
                  src="/images/winery.jpg"
                  alt="Inside the winery"
                  className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[570px] md:w-[700px] lg:absolute lg:m-0 lg:left-[5%] lg:h-full lg:w-[100%] lg:max-w-none object-cover"
                  width={700}
                  height={933}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
