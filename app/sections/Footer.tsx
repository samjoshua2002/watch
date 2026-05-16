'use client'

import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'

const collections = [
  'Dress Watches',
  'Dive Watches',
  'Pilot Watches',
  'Chronographs',
  'Vintage'
]

const customerCare = [
  'Contact Us',
  'Shipping Info',
  'Returns & Exchanges',
  'Watch Servicing',
  'FAQ'
]

const company = [
  'About Us',
  'Careers',
  'Press',
  'Privacy Policy',
  'Terms of Service'
]

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-3xl md:text-4xl font-light tracking-tight text-white inline-block mb-4">
              ēthos
            </Link>
            <p className="text-white/60 leading-relaxed mb-4 md:mb-6 text-xs md:text-sm">
              India's largest luxury watch retailer. Authorized dealer for over 50 prestigious brands. Experience the art of timekeeping with our curated collection.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 md:w-10 md:h-10 border border-white/20 flex items-center justify-center text-white hover:bg-[#c41e3a] hover:border-[#c41e3a] transition-all rounded">
                  <Icon size={14} className="md:size-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs md:text-sm font-semibold tracking-wider uppercase mb-4 md:mb-6">Collections</h4>
            <ul className="space-y-2 md:space-y-3">
              {collections.map((item) => (
                <li key={item}>
                  <Link href={`/collections/${item.toLowerCase().replace(/ /g, '-')}`} className="text-white/60 text-xs md:text-sm hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs md:text-sm font-semibold tracking-wider uppercase mb-4 md:mb-6">Customer Care</h4>
            <ul className="space-y-2 md:space-y-3">
              {customerCare.map((item) => (
                <li key={item}>
                  <Link href="/repair-service" className="text-white/60 text-xs md:text-sm hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs md:text-sm font-semibold tracking-wider uppercase mb-4 md:mb-6">Company</h4>
            <ul className="space-y-2 md:space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 text-xs md:text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-white/40">
          <p>&copy; 2026 Ethos Watch Boutiques. All rights reserved.</p>
          <div className="flex gap-3 md:gap-4 text-xl md:text-2xl">
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-amex"></i>
            <i className="fab fa-cc-paypal"></i>
          </div>
        </div>
      </div>
    </footer>
  )
}
