import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/images/barrel-vine-logo.png"
                alt="Barrel & Vine Designs"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-amber-400">Barrel & Vine</span>
            </div>
            <p className="text-gray-300 mb-4">
              Premium laser engraving services for wineries, breweries, and distilleries in the Washington D.C. metro
              area.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-amber-400" />
                <span className="text-sm">(240) 324-7110</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-amber-400" />
                <span className="text-sm">info@barrelvinedesigns.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-amber-400" />
                <span className="text-sm">Washington D.C. Metro Area</span>
              </div>
            </div>
          </div>

          {/* Winery Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Winery Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/winery" className="text-gray-300 hover:text-white transition-colors">
                  Winery Solutions
                </Link>
              </li>
              <li>
                <Link href="/custom-wine-boxes" className="text-gray-300 hover:text-white transition-colors">
                  Custom Wine Boxes
                </Link>
              </li>
              <li>
                <Link href="/wine-barrel-heads" className="text-gray-300 hover:text-white transition-colors">
                  Wine Barrel Heads
                </Link>
              </li>
              <li>
                <Link href="/cellar-door-signs" className="text-gray-300 hover:text-white transition-colors">
                  Cellar Door Signs
                </Link>
              </li>
            </ul>
          </div>

          {/* Brewery Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Brewery Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/microbrewery" className="text-gray-300 hover:text-white transition-colors">
                  Brewery Solutions
                </Link>
              </li>
              <li>
                <Link href="/brewery-tap-handles" className="text-gray-300 hover:text-white transition-colors">
                  Tap Handles
                </Link>
              </li>
              <li>
                <Link href="/growlers-glassware" className="text-gray-300 hover:text-white transition-colors">
                  Growlers & Glassware
                </Link>
              </li>
              <li>
                <Link href="/taproom-signage" className="text-gray-300 hover:text-white transition-colors">
                  Taproom Signage
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/laser-engraving-washington-dc"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Washington D.C. Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Barrel & Vine Designs. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
