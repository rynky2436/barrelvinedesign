"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Globe } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/winery", label: "Winery" },
    { href: "/microbrewery", label: "Microbrewery" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Get Started" },
  ]

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/images/barrel-vine-logo.png"
              alt="Barrel & Vine Designs Logo"
              className="h-12 w-12 filter brightness-0 invert drop-shadow-md"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white font-playfair text-shadow-md">Barrel & Vine Designs</span>
              <span className="text-xs text-amber-300 -mt-1 text-shadow-sm">Laser Engraving Excellence</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all duration-200 hover:text-amber-300 hover:bg-white/10 px-3 py-2 rounded-md text-shadow-sm ${
                  pathname === item.href ? "text-amber-300 bg-white/10" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 bg-white/10 border border-white/20 text-white px-3 py-2 rounded-md hover:bg-white/15 transition-all duration-200"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">EN</span>
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </button>

              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 bg-amber-900/95 backdrop-blur-md border border-white/10 rounded-md shadow-xl min-w-[150px] z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors first:rounded-t-md last:rounded-b-md"
                      onClick={() => setIsLangOpen(false)}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

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
              {navItems.map((item) => (
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
              ))}

              {/* Mobile Language Selector */}
              <div className="border-t border-white/10 pt-3 mt-3">
                <div className="text-amber-300 font-semibold text-sm mb-2 px-3">Language</div>
                <div className="grid grid-cols-3 gap-2 px-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="flex items-center justify-center space-x-1 bg-white/10 hover:bg-white/15 px-2 py-2 rounded-md text-white text-xs transition-colors"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>

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
