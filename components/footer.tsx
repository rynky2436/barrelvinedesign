import Link from "next/link"
import Image from "next/image"

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
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/barrel-vine-logo.png"
                alt="Barrel & Vine Designs Logo"
                width={50}
                height={50}
                className="bg-white rounded-full p-1"
              />
              <span className="font-bold text-xl">Barrel & Vine</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Premium laser engraved products for wineries and breweries in the DC, Maryland, and Virginia area.
            </p>
            <p className="mt-4 text-gray-400 text-sm">
              <a href="tel:240-324-7110" className="hover:text-white">
                240-324-7110
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Winery Services</h3>
            <ul className="mt-4 space-y-2">
              {wineryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Brewery Services</h3>
            <ul className="mt-4 space-y-2">
              {breweryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
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
