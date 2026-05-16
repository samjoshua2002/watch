'use client'

import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Brands', href: '#' },
  { name: 'Rolex', href: '#' },
  { name: 'Watch Finder', href: '#' },
  { name: 'Pre-Owned', href: '#' },
  { name: 'Jewellery', href: '#' },
  { name: 'Lifestyle', href: '#' },
  { name: 'Repair & Service', href: '#' },
  { name: 'Boutiques', href: '#' },
  { name: 'The Watch Guide', href: '#' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-border-light sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center h-[50px]">
        <ul className="hidden lg:flex gap-0">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-xs font-medium tracking-wider uppercase text-primary px-5 h-[50px] flex items-center border-b-2 border-transparent hover:text-accent hover:border-accent transition-all"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="text-xs font-medium tracking-wider uppercase text-accent px-5 h-[50px] flex items-center border-b-2 border-transparent hover:border-accent transition-all"
            >
              Special Offers
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <a href="#" className="text-primary hover:text-accent transition-colors">
            <Search size={18} />
          </a>
          <button
            className="lg:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border-light">
          <ul className="py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block px-8 py-3 text-sm font-medium tracking-wider uppercase text-primary hover:text-accent hover:bg-bg-light transition-all"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="block px-8 py-3 text-sm font-medium tracking-wider uppercase text-accent hover:bg-bg-light transition-all"
              >
                Special Offers
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
