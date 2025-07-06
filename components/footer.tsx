import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin } from "lucide-react"

const wineryLinks = [
  { href: "/winery", label: "Winery Solutions" },
  { href: "/custom-wine-boxes", label: "Custom Wine Boxes" },
  { href: "/wine-barrel-heads", label: "Wine Barrel Heads" },
  { href: "/cellar-door-signs", label: "Cellar Door Signs" },
  { href: "/tasting-boards", label: "Tasting Boards" },
  { href: "/wine-accessories", label: "Wine Accessories" },
  { href: "/charcuterie-tools", label: "Charcuterie Tools" },
]

const breweryLinks = [
  { href: "/microbrewery", label: "Brewery Solutions" },
  { href: "/brewery-tap-handles", label: "Tap Handles" },
  { href: "/growlers-glassware", label: "Growlers & Glassware" },
  { href: "/taproom-signage", label: "Taproom Signage" },
]

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/images/barrel-vine-logo.png" alt="Barrel & Vine Logo" width={30} height={30} />
              <span className="text-lg font-bold font-serif">Barrel & Vine</span>
            </div>
            <p className="text-gray-400 text-sm">
              Crafting bespoke laser-engraved products for wineries and breweries across the Mid-Atlantic.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Winery Services</h3>
            <ul className="mt-4 space-y-2">
              {wineryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Brewery Services</h3>
            <ul className="mt-4 space-y-2">
              {breweryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/laser-engraving-washington-dc" className="text-sm text-gray-400 hover:text-white">
                  Service Areas
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Barrel & Vine Designs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
