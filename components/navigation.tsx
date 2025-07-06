"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Get Started" },
    { href: "https://hubcitylaser.com", label: "General Laser Engraving", external: true },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/barrel-vine-logo.png"
              alt="Barrel & Vine Designs Logo"
              width={48}
              height={48}
              className="filter brightness-0 invert drop-shadow-md"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white font-playfair text-shadow-md">Barrel & Vine Designs</span>
              <span className="text-xs text-amber-300 -mt-1 text-shadow-sm">Laser Engraving Excellence</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank" // Open in new tab
                  rel="noopener noreferrer" // Security best practice
                  className="text-sm font-medium transition-all duration-200 hover:text-amber-300 hover:bg-white/10 px-3 py-2 rounded-md text-shadow-sm text-white"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-200 hover:text-amber-300 hover:bg-white/10 px-3 py-2 rounded-md text-shadow-sm ${
                    pathname === item.href ? "text-amber-300 bg-white/10" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Call Now Button */}
            <a href="tel:+13017488360">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white shadow-lg">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-amber-300 p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-amber-900/95 backdrop-blur-md border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 text-base font-medium transition-colors hover:text-amber-300 hover:bg-white/10 rounded-md text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors hover:text-amber-300 hover:bg-white/10 rounded-md ${
                      pathname === item.href ? "text-amber-300 bg-white/10" : "text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ),
              )}

              <div className="px-3 py-2">
                <a href="tel:+13017488360">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
