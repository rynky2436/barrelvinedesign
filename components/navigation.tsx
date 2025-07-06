"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"

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

  const isWineryPage = wineryLinks.some((link) => pathname.startsWith(link.href))
  const isBreweryPage = breweryLinks.some((link) => pathname.startsWith(link.href))

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className={`px-4 py-2 rounded-md text-sm font-medium ${pathname === href ? "text-amber-900 bg-amber-100" : "text-gray-700 hover:bg-gray-100"}`}
    >
      {children}
    </Link>
  )

  const DropdownLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className={`block px-4 py-2 text-sm ${pathname === href ? "text-amber-900 bg-amber-50" : "text-gray-700 hover:bg-gray-100"}`}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  )

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/barrel-vine-logo.png" alt="Barrel & Vine Designs Logo" width={40} height={40} />
              <span className="font-bold text-xl text-gray-800">Barrel & Vine</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 h-full">
            <div className="relative group h-full flex items-center">
              <button
                className={`inline-flex items-center px-3 py-2 text-sm font-medium ${isWineryPage ? "text-amber-900" : "text-gray-700"} hover:text-amber-900`}
              >
                <span>Winery</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto">
                <div className="py-1">
                  {wineryLinks.map((link) => (
                    <DropdownLink key={link.href} href={link.href}>
                      {link.label}
                    </DropdownLink>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative group h-full flex items-center">
              <button
                className={`inline-flex items-center px-3 py-2 text-sm font-medium ${isBreweryPage ? "text-amber-900" : "text-gray-700"} hover:text-amber-900`}
              >
                <span>Brewery</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto">
                <div className="py-1">
                  {breweryLinks.map((link) => (
                    <DropdownLink key={link.href} href={link.href}>
                      {link.label}
                    </DropdownLink>
                  ))}
                </div>
              </div>
            </div>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="space-y-1">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Winery</h3>
              {wineryLinks.map((link) => (
                <DropdownLink key={link.href} href={link.href}>
                  {link.label}
                </DropdownLink>
              ))}
            </div>
            <div className="space-y-1 pt-2">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Brewery</h3>
              {breweryLinks.map((link) => (
                <DropdownLink key={link.href} href={link.href}>
                  {link.label}
                </DropdownLink>
              ))}
            </div>
            <div className="space-y-1 pt-2">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Company</h3>
              <DropdownLink href="/about">About</DropdownLink>
              <DropdownLink href="/contact">Contact</DropdownLink>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
