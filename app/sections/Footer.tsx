'use client'

import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

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
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <a href="#" className="text-4xl font-light tracking-tight text-white inline-block mb-4">
              ēthos
            </a>
            <p className="text-white/60 leading-relaxed mb-6 text-sm">
              India's largest luxury watch retailer. Authorized dealer for over 50 prestigious brands. Experience the art of timekeeping with our curated collection of the world's finest timepieces.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all">
                <Youtube size={16} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6">Collections</h4>
            <ul className="space-y-3">
              {collections.map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6">Customer Care</h4>
            <ul className="space-y-3">
              {customerCare.map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; 2026 Ethos Watch Boutiques. All rights reserved.</p>
          <div className="flex gap-4 text-2xl">
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
