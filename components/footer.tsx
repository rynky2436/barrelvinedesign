import Link from "next/link"
import { Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/images/barrel-vine-logo.png"
                alt="Barrel & Vine Designs Logo"
                className="h-16 w-16 filter brightness-0 invert"
              />
              <div>
                <h3 className="text-2xl font-bold font-playfair text-amber-300">Barrel & Vine Designs</h3>
                <p className="text-amber-200">Custom Laser Engraving Excellence</p>
              </div>
            </div>
            <p className="text-stone-300 mb-6 leading-relaxed max-w-md">
              Serving wineries and craft breweries across Maryland, Virginia, and Washington, D.C. with bespoke laser
              engraving services that honor your brand's commitment to excellence.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">DC</span>
              </div>
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">MD</span>
              </div>
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">VA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-amber-300 mb-4 font-playfair">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/winery" className="text-stone-300 hover:text-amber-300 transition-colors">
                  Winery Solutions
                </Link>
              </li>
              <li>
                <Link href="/microbrewery" className="text-stone-300 hover:text-amber-300 transition-colors">
                  Brewery Merchandise
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-stone-300 hover:text-amber-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-stone-300 hover:text-amber-300 transition-colors">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-amber-300 mb-4 font-playfair">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-amber-400 mr-3 flex-shrink-0" />
                <span className="text-stone-300">(301) 748-8360</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-amber-400 mr-3 flex-shrink-0" />
                <span className="text-stone-300">info@example.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-amber-400 mr-3 flex-shrink-0" />
                <div className="text-stone-300">
                  <div>Mon-Fri: 9AM-6PM</div>
                  <div>Sat: 10AM-4PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-400 text-sm">© 2024 Barrel & Vine Designs. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-stone-400 hover:text-amber-300 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-stone-400 hover:text-amber-300 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
