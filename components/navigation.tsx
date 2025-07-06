"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

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

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/barrel-vine-logo.png" alt="Barrel & Vine Logo" width={40} height={40} />
              <span className="text-xl font-bold text-gray-800 font-serif">Barrel & Vine</span>
            </Link>
          </div>

          {/* --- DESKTOP NAVIGATION (THE FIX IS HERE) --- */}
          <nav className="hidden md:flex items-center h-full">
            <Link
              href="/"
              className={`h-full flex items-center px-4 text-gray-600 hover:text-amber-600 transition-colors ${isActive("/") ? "text-amber-600 font-semibold border-b-2 border-amber-600" : ""}`}
            >
              Home
            </Link>

            {/* Corrected Winery Dropdown */}
            <div className="relative group h-full flex items-center">
              {/* This button is the visible part of the link */}
              <button
                className={`h-full px-4 flex items-center text-gray-600 hover:text-amber-600 transition-colors ${wineryLinks.some((link) => isActive(link.href)) ? "text-amber-600 font-semibold border-b-2 border-amber-600" : ""}`}
              >
                <span>Winery</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {/* The dropdown panel */}
              <div className="absolute top-full left-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 invisible group-hover:visible z-50">
                <div className="py-1">
                  {wineryLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 ${isActive(link.href) ? "bg-amber-50 text-amber-600" : ""}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Corrected Brewery Dropdown */}
            <div className="relative group h-full flex items-center">
              <button
                className={`h-full px-4 flex items-center text-gray-600 hover:text-amber-600 transition-colors ${breweryLinks.some((link) => isActive(link.href)) ? "text-amber-600 font-semibold border-b-2 border-amber-600" : ""}`}
              >
                <span>Brewery</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 invisible group-hover:visible z-50">
                <div className="py-1">
                  {breweryLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 ${isActive(link.href) ? "bg-amber-50 text-amber-600" : ""}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className={`h-full flex items-center px-4 text-gray-600 hover:text-amber-600 transition-colors ${isActive("/about") ? "text-amber-600 font-semibold border-b-2 border-amber-600" : ""}`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="ml-4 bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors font-semibold"
            >
              Contact Us
            </Link>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-amber-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (remains unchanged, uses onClick) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/") ? "bg-amber-50 text-amber-700" : "text-gray-700 hover:bg-gray-50 hover:text-amber-600"}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <div>
              <h3 className="px-3 pt-4 pb-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">Winery</h3>
              {wineryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block pl-6 pr-3 py-2 rounded-md text-base font-medium ${isActive(link.href) ? "bg-amber-50 text-amber-700" : "text-gray-700 hover:bg-gray-50 hover:text-amber-600"}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div>
              <h3 className="px-3 pt-4 pb-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">Brewery</h3>
              {breweryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block pl-6 pr-3 py-2 rounded-md text-base font-medium ${isActive(link.href) ? "bg-amber-50 text-amber-700" : "text-gray-700 hover:bg-gray-50 hover:text-amber-600"}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/about") ? "bg-amber-50 text-amber-700" : "text-gray-700 hover:bg-gray-50 hover:text-amber-600"}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block w-full text-left px-3 py-3 rounded-md text-base font-medium bg-amber-600 text-white hover:bg-amber-700 mt-2"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
