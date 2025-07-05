import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/barrel-vine-logo.png"
                alt="Barrel & Vine Designs Logo"
                width={40}
                height={40}
                className="filter brightness-0 invert"
              />
              <div>
                <h3 className="text-lg font-bold font-playfair">Barrel & Vine Designs</h3>
                <p className="text-amber-300 text-sm">Laser Engraving Excellence</p>
              </div>
            </div>
            <p className="text-amber-100 text-sm leading-relaxed">
              Specializing in custom laser engraving for wineries and microbreweries. Creating unique, personalized
              products that enhance your brand and customer experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-amber-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-amber-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-300">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-amber-100 hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/winery" className="text-amber-100 hover:text-white transition-colors">
                  Winery Solutions
                </Link>
              </li>
              <li>
                <Link href="/custom-wine-boxes" className="text-amber-100 hover:text-white transition-colors">
                  Custom Wine Boxes
                </Link>
              </li>
              <li>
                <Link href="/microbrewery" className="text-amber-100 hover:text-white transition-colors">
                  Brewery Solutions
                </Link>
              </li>
              <li>
                <Link href="/brewery-tap-handles" className="text-amber-100 hover:text-white transition-colors">
                  Custom Tap Handles
                </Link>
              </li>
              <li>
                <Link
                  href="/laser-engraving-washington-dc"
                  className="text-amber-100 hover:text-white transition-colors"
                >
                  DC Area Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-300">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-amber-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-amber-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-amber-100 hover:text-white transition-colors">
                  Get Started
                </Link>
              </li>
              <li>
                <a
                  href="https://hubcitylaser.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-100 hover:text-white transition-colors"
                >
                  General Laser Engraving
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-300">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-amber-300 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+12403247110" className="text-amber-100 hover:text-white transition-colors">
                    (240) 324-7110
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-amber-300 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:info@barrelvinedesigns.com"
                    className="text-amber-100 hover:text-white transition-colors"
                  >
                    info@barrelvinedesigns.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amber-300 mt-0.5 flex-shrink-0" />
                <div className="text-amber-100">
                  Serving Washington DC
                  <br />
                  Maryland & Virginia
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-amber-300 mt-0.5 flex-shrink-0" />
                <div className="text-amber-100">
                  Mon-Fri: 9AM-6PM
                  <br />
                  Weekend: By Appointment
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-amber-200 text-sm">© 2024 Barrel & Vine Designs. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <Link href="/privacy" className="text-amber-200 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-amber-200 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
