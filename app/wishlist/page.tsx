'use client'

import { Heart, Trash2, ShoppingBag, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'

const wishlistItems = [
  { id: 1, brand: 'Rolex', name: 'Submariner Date', price: '₹ 12,50,000', originalPrice: '₹ 13,20,000' },
  { id: 3, brand: 'H. Moser & Cie.', name: 'STREAMLINER', price: '₹ 39,40,000', originalPrice: '₹ 42,00,000' },
  { id: 8, brand: 'Omega', name: 'Speedmaster Moonwatch', price: '₹ 6,80,000', originalPrice: '₹ 7,20,000' },
]

export default function WishlistPage() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <Navbar />

      <div className="bg-[#f5f5f5] py-3">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-xs text-[#666]">
            <Link href="/" className="hover:text-[#c41e3a]">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#1a1a1a]">Wishlist</span>
          </div>
        </div>
      </div>

      <section className="py-8 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h1 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-6 md:mb-8">My Wishlist ({wishlistItems.length})</h1>

          {wishlistItems.length > 0 ? (
            <div className="space-y-4 md:space-y-6">
              {wishlistItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-4 md:gap-6 p-4 md:p-6 border border-[#eee] hover:border-[#c41e3a] transition-colors rounded">
                  <div className="w-full sm:w-32 md:w-40 h-32 md:h-40 bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8] flex items-center justify-center shrink-0 rounded">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e0e0e0" strokeWidth="1" className="md:w-12 md:h-12"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-xs tracking-wider uppercase text-[#666] mb-1">{item.brand}</p>
                    <h3 className="font-serif text-base md:text-lg text-[#1a1a1a] mb-2">{item.name}</h3>
                    <div className="flex items-baseline gap-2 mb-3 md:mb-4">
                      <span className="text-base md:text-lg font-semibold">{item.price}</span>
                      <span className="text-xs md:text-sm text-[#999] line-through">{item.originalPrice}</span>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-white text-xs tracking-wider uppercase hover:bg-[#333] transition-colors rounded">
                        <ShoppingBag size={14} /> Add to Cart
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 border border-[#e0e0e0] text-[#666] text-xs hover:border-[#c41e3a] hover:text-[#c41e3a] transition-colors rounded">
                        <Trash2 size={14} /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 md:py-20">
              <Heart size={48} className="mx-auto mb-4 text-[#e0e0e0] md:size-16" />
              <h2 className="font-serif text-xl md:text-2xl text-[#1a1a1a] mb-2">Your Wishlist is Empty</h2>
              <p className="text-sm text-[#666] mb-4 md:mb-6">Save your favorite watches to compare and purchase later.</p>
              <Link href="/collections/featured" className="inline-block px-6 py-3 bg-[#1a1a1a] text-white text-xs tracking-wider uppercase hover:bg-[#333] transition-colors rounded">
                Browse Watches
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
