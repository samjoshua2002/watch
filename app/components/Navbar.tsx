'use client'

import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { name: 'Brands', href: '/brands' },
  { name: 'Rolex', href: '/brands/rolex' },
  { name: 'Watch Finder', href: '/watch-guide' },
  { name: 'Pre-Owned', href: '/collections/pre-owned' },
  { name: 'Jewellery', href: '/collections/jewellery' },
  { name: 'Lifestyle', href: '/collections/lifestyle' },
  { name: 'Repair & Service', href: '/repair-service' },
  { name: 'Boutiques', href: '/boutiques' },
  { name: 'The Watch Guide', href: '/watch-guide' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-[#eee] sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex justify-between items-center h-[50px]">
        <ul className="hidden lg:flex gap-0">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-[11px] font-medium tracking-wider uppercase text-[#1a1a1a] px-3 xl:px-5 h-[50px] flex items-center border-b-2 border-transparent hover:text-[#c41e3a] hover:border-[#c41e3a] transition-all"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/collections/special-offers"
              className="text-[11px] font-medium tracking-wider uppercase text-[#c41e3a] px-3 xl:px-5 h-[50px] flex items-center border-b-2 border-transparent hover:border-[#c41e3a] transition-all"
            >
              Special Offers
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4 lg:hidden w-full justify-between">
          <Link href="/" className="text-2xl font-light tracking-tight text-black lg:hidden">
            ēthos
          </Link>
          <div className="flex items-center gap-3">
            <a href="#" className="text-[#1a1a1a] hover:text-[#c41e3a] transition-colors">
              <Search size={18} />
            </a>
            <button
              className="text-[#1a1a1a]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <a href="#" className="text-[#1a1a1a] hover:text-[#c41e3a] transition-colors">
            <Search size={18} />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#eee] fixed inset-x-0 top-[50px] bottom-0 z-40 overflow-y-auto">
          <ul className="py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block px-6 py-3.5 text-sm font-medium tracking-wider uppercase text-[#1a1a1a] hover:text-[#c41e3a] hover:bg-[#f5f5f5] transition-all border-b border-[#eee]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/collections/special-offers"
                className="block px-6 py-3.5 text-sm font-medium tracking-wider uppercase text-[#c41e3a] hover:bg-[#f5f5f5] transition-all border-b border-[#eee]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Special Offers
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
