"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [wineryOpen, setWineryOpen] = useState(false)
  const [breweryOpen, setBreweryOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/images/barrel-vine-logo.png"
                alt="Barrel & Vine Designs"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-amber-800">Barrel & Vine Designs</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>

            {/* Winery Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                Winery
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link
                    href="/winery"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                  >
                    Winery Solutions
                  </Link>
                  <Link
                    href="/custom-wine-boxes"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                  >
                    Custom Wine Boxes
                  </Link>
                  <Link
                    href="/wine-barrel-heads"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                  >
                    Wine Barrel Heads
                  </Link>
                  <Link
                    href="/cellar-door-signs"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                  >
                    Cellar Door Signs
                  </Link>
                </div>
              </div>
            </div>

            {/* Brewery Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                Brewery
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link
                    href="/microbrewery"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                  >
                    Brewery Solutions
                  </Link>
                  <Link
                    href="/brewery-tap-handles"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                  >
                    Tap Handles
                  </Link>
                  <Link
                    href="/growlers-glassware"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                  >
                    Growlers & Glassware
                  </Link>
                  <Link
                    href="/taproom-signage"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                  >
                    Taproom Signage
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/services"
              className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-amber-600 focus:outline-none focus:text-amber-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50"
              >
                Home
              </Link>

              {/* Mobile Winery Dropdown */}
              <div>
                <button
                  onClick={() => setWineryOpen(!wineryOpen)}
                  className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 flex items-center justify-between"
                >
                  Winery
                  <ChevronDown className={`h-4 w-4 transform transition-transform ${wineryOpen ? "rotate-180" : ""}`} />
                </button>
                {wineryOpen && (
                  <div className="pl-6 space-y-1">
                    <Link
                      href="/winery"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-amber-600 hover:bg-amber-50"
                    >
                      Winery Solutions
                    </Link>
                    <Link
                      href="/custom-wine-boxes"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-amber-600 hover:bg-amber-50"
                    >
                      Custom Wine Boxes
                    </Link>
                    <Link
                      href="/wine-barrel-heads"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-amber-600 hover:bg-amber-50"
                    >
                      Wine Barrel Heads
                    </Link>
                    <Link
                      href="/cellar-door-signs"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-amber-600 hover:bg-amber-50"
                    >
                      Cellar Door Signs
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Brewery Dropdown */}
              <div>
                <button
                  onClick={() => setBreweryOpen(!breweryOpen)}
                  className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 flex items-center justify-between"
                >
                  Brewery
                  <ChevronDown
                    className={`h-4 w-4 transform transition-transform ${breweryOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {breweryOpen && (
                  <div className="pl-6 space-y-1">
                    <Link
                      href="/microbrewery"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-amber-600 hover:bg-amber-50"
                    >
                      Brewery Solutions
                    </Link>
                    <Link
                      href="/brewery-tap-handles"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-amber-600 hover:bg-amber-50"
                    >
                      Tap Handles
                    </Link>
                    <Link
                      href="/growlers-glassware"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-amber-600 hover:bg-amber-50"
                    >
                      Growlers & Glassware
                    </Link>
                    <Link
                      href="/taproom-signage"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-amber-600 hover:bg-amber-50"
                    >
                      Taproom Signage
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/services"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium bg-amber-600 text-white hover:bg-amber-700 rounded-md mx-3"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
