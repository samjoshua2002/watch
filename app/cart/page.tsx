'use client'

import { useState } from 'react'
import { Trash2, Minus, Plus, ChevronRight, Truck, Shield, RotateCcw } from 'lucide-react'
import Link from 'next/link'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'

const cartItems = [
  { id: 1, brand: 'Rolex', name: 'Submariner Date', price: 1250000, qty: 1 },
  { id: 7, brand: 'TAG Heuer', name: 'Carrera Chronograph', price: 540000, qty: 1 },
]

export default function CartPage() {
  const [items, setItems] = useState(cartItems)

  const updateQty = (id: number, delta: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ))
  }

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const shipping = 0
  const total = subtotal + shipping

  const formatPrice = (price: number) => `₹ ${price.toLocaleString('en-IN')}`

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
            <span className="text-[#1a1a1a]">Cart</span>
          </div>
        </div>
      </div>

      <section className="py-8 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h1 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-6 md:mb-8">Shopping Cart ({items.length})</h1>

          {items.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4 md:space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row gap-4 md:gap-6 p-4 md:p-6 border border-[#eee] rounded">
                    <div className="w-full sm:w-28 md:w-32 h-28 md:h-32 bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8] flex items-center justify-center shrink-0 rounded">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e0e0e0" strokeWidth="1" className="md:w-10 md:h-10"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-xs tracking-wider uppercase text-[#666] mb-1">{item.brand}</p>
                        <h3 className="font-serif text-base md:text-lg text-[#1a1a1a]">{item.name}</h3>
                      </div>
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-3">
                        <div className="flex items-center border border-[#e0e0e0] rounded">
                          <button onClick={() => updateQty(item.id, -1)} className="px-3 py-2 hover:bg-[#f5f5f5]"><Minus size={14} /></button>
                          <span className="px-3 py-2 text-sm font-medium min-w-[40px] text-center">{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} className="px-3 py-2 hover:bg-[#f5f5f5]"><Plus size={14} /></button>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-base md:text-lg font-semibold">{formatPrice(item.price * item.qty)}</span>
                          <button onClick={() => removeItem(item.id)} className="text-[#666] hover:text-[#c41e3a] transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div className="bg-[#f5f5f5] p-4 md:p-6 sticky top-20 rounded">
                  <h3 className="font-serif text-lg md:text-xl mb-4 md:mb-6">Order Summary</h3>
                  <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                    <div className="flex justify-between text-sm md:text-base">
                      <span className="text-[#666]">Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm md:text-base">
                      <span className="text-[#666]">Shipping</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="h-px bg-[#e0e0e0]"></div>
                    <div className="flex justify-between text-base md:text-lg font-semibold">
                      <span>Total</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                  </div>
                  <button className="w-full bg-[#c41e3a] text-white py-3 md:py-4 text-xs md:text-sm tracking-wider uppercase font-semibold hover:bg-[#a01830] transition-colors rounded mb-3 md:mb-4">
                    Proceed to Checkout
                  </button>
                  <Link href="/collections/featured" className="block w-full text-center py-3 border border-[#e0e0e0] text-xs md:text-sm tracking-wider uppercase hover:border-[#1a1a1a] transition-colors rounded">
                    Continue Shopping
                  </Link>

                  <div className="mt-4 md:mt-6 space-y-2">
                    <div className="flex items-center gap-2 text-[10px] md:text-xs text-[#666]">
                      <Truck size={12} /> Free Express Shipping
                    </div>
                    <div className="flex items-center gap-2 text-[10px] md:text-xs text-[#666]">
                      <Shield size={12} /> Authenticity Guaranteed
                    </div>
                    <div className="flex items-center gap-2 text-[10px] md:text-xs text-[#666]">
                      <RotateCcw size={12} /> 14-Day Returns
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 md:py-20">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e0e0e0" strokeWidth="1" className="mx-auto mb-4 md:w-16 md:h-16"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <h2 className="font-serif text-xl md:text-2xl text-[#1a1a1a] mb-2">Your Cart is Empty</h2>
              <p className="text-sm text-[#666] mb-4 md:mb-6">Start shopping to add items to your cart.</p>
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
