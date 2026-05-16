'use client'

import { useState } from 'react'
import { Heart, Share2, Truck, Shield, RotateCcw, ChevronRight, Minus, Plus, Star } from 'lucide-react'
import Link from 'next/link'
import TopBar from '../../components/TopBar'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../sections/Footer'

export type Product = {
  id: number
  brand: string
  name: string
  price: string
  originalPrice: string
  rating: number
  reviews: number
  sku: string
  movement: string
  case: string
  water: string
  warranty: string
  description: string
}

type Props = {
  product: Product
  products: Product[]
  id: number
}

export default function ProductPageClient({ product, products, id }: Props) {
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [0, 1, 2, 3]

  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-[#f5f5f5] py-3">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-xs text-[#666] flex-wrap">
            <Link href="/" className="hover:text-[#c41e3a]">Home</Link>
            <ChevronRight size={12} />
            <Link href="/collections/new-arrivals" className="hover:text-[#c41e3a]">New Arrivals</Link>
            <ChevronRight size={12} />
            <span className="text-[#1a1a1a]">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-6 md:py-12">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
            {/* Images */}
            <div className="space-y-3 md:space-y-4">
              <div className="aspect-square bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8] rounded-lg flex items-center justify-center">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#e0e0e0" strokeWidth="1" className="md:w-[200px] md:h-[200px]">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="grid grid-cols-4 gap-2 md:gap-3">
                {images.map((img) => (
                  <button
                    key={img}
                    onClick={() => setSelectedImage(img)}
                    className={`aspect-square bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8] rounded flex items-center justify-center border-2 transition-all ${
                      selectedImage === img ? 'border-[#c41e3a]' : 'border-transparent'
                    }`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e0e0e0" strokeWidth="1.5" className="md:w-8 md:h-8">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="space-y-4 md:space-y-6">
              <div>
                <p className="text-xs tracking-wider uppercase text-[#666] mb-1 md:mb-2">{product.brand}</p>
                <h1 className="font-serif text-xl md:text-3xl lg:text-4xl text-[#1a1a1a] mb-2 md:mb-3">{product.name}</h1>
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <div className="flex">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} size={14} className={`md:size-4 ${s <= Math.floor(product.rating) ? 'text-[#C9A96E] fill-[#C9A96E]' : 'text-[#e0e0e0]'}`} />
                    ))}
                  </div>
                  <span className="text-xs md:text-sm text-[#666]">{product.rating} ({product.reviews} reviews)</span>
                </div>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#1a1a1a]">{product.price}</span>
                  <span className="text-sm md:text-base text-[#999] line-through">{product.originalPrice}</span>
                  <span className="text-xs md:text-sm text-green-600 font-medium">Save 5%</span>
                </div>
              </div>

              <div className="h-px bg-[#eee]"></div>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-[#f5f5f5] p-3 md:p-4 rounded">
                  <p className="text-[10px] md:text-xs text-[#666] uppercase tracking-wider mb-1">SKU</p>
                  <p className="text-xs md:text-sm font-medium">{product.sku}</p>
                </div>
                <div className="bg-[#f5f5f5] p-3 md:p-4 rounded">
                  <p className="text-[10px] md:text-xs text-[#666] uppercase tracking-wider mb-1">Movement</p>
                  <p className="text-xs md:text-sm font-medium">{product.movement}</p>
                </div>
                <div className="bg-[#f5f5f5] p-3 md:p-4 rounded">
                  <p className="text-[10px] md:text-xs text-[#666] uppercase tracking-wider mb-1">Case</p>
                  <p className="text-xs md:text-sm font-medium">{product.case}</p>
                </div>
                <div className="bg-[#f5f5f5] p-3 md:p-4 rounded">
                  <p className="text-[10px] md:text-xs text-[#666] uppercase tracking-wider mb-1">Water Resistance</p>
                  <p className="text-xs md:text-sm font-medium">{product.water}</p>
                </div>
              </div>

              <div className="h-px bg-[#eee]"></div>

              {/* Quantity & Actions */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <div className="flex items-center border border-[#e0e0e0] rounded w-fit">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 md:px-4 md:py-3 hover:bg-[#f5f5f5] transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium min-w-[50px] text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 md:px-4 md:py-3 hover:bg-[#f5f5f5] transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <button className="flex-1 bg-[#1a1a1a] text-white py-3 md:py-4 text-xs md:text-sm tracking-wider uppercase font-semibold hover:bg-[#333] transition-colors rounded">
                  Add to Cart
                </button>
                <button className="flex-1 bg-[#c41e3a] text-white py-3 md:py-4 text-xs md:text-sm tracking-wider uppercase font-semibold hover:bg-[#a01830] transition-colors rounded">
                  Buy Now
                </button>
              </div>

              <div className="flex gap-3 md:gap-4">
                <button className="flex items-center gap-2 text-xs md:text-sm text-[#666] hover:text-[#c41e3a] transition-colors">
                  <Heart size={16} /> Add to Wishlist
                </button>
                <button className="flex items-center gap-2 text-xs md:text-sm text-[#666] hover:text-[#c41e3a] transition-colors">
                  <Share2 size={16} /> Share
                </button>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 pt-4">
                <div className="text-center p-2 md:p-3 bg-[#f5f5f5] rounded">
                  <Truck size={18} className="mx-auto mb-1 md:mb-2 text-[#666] md:size-5" />
                  <p className="text-[10px] md:text-xs text-[#666]">Free Shipping</p>
                </div>
                <div className="text-center p-2 md:p-3 bg-[#f5f5f5] rounded">
                  <Shield size={18} className="mx-auto mb-1 md:mb-2 text-[#666] md:size-5" />
                  <p className="text-[10px] md:text-xs text-[#666]">Authenticity</p>
                </div>
                <div className="text-center p-2 md:p-3 bg-[#f5f5f5] rounded">
                  <RotateCcw size={18} className="mx-auto mb-1 md:mb-2 text-[#666] md:size-5" />
                  <p className="text-[10px] md:text-xs text-[#666]">14-Day Returns</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-8 md:mt-16">
            <div className="flex border-b border-[#eee] overflow-x-auto">
              {['description', 'specifications', 'reviews', 'shipping'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 md:px-6 md:py-4 text-xs md:text-sm tracking-wider uppercase font-medium whitespace-nowrap transition-colors border-b-2 ${
                    activeTab === tab 
                      ? 'text-[#c41e3a] border-[#c41e3a]' 
                      : 'text-[#666] border-transparent hover:text-[#1a1a1a]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="py-6 md:py-8">
              {activeTab === 'description' && (
                <div className="max-w-3xl">
                  <p className="text-sm md:text-base text-[#666] leading-relaxed">{product.description}</p>
                  <div className="mt-4 md:mt-6 space-y-2 md:space-y-3">
                    <p className="text-sm md:text-base text-[#666]"><strong className="text-[#1a1a1a]">Warranty:</strong> {product.warranty} International Warranty</p>
                    <p className="text-sm md:text-base text-[#666]"><strong className="text-[#1a1a1a]">Box:</strong> Original brand box with papers</p>
                    <p className="text-sm md:text-base text-[#666]"><strong className="text-[#1a1a1a]">Authenticity:</strong> Certificate of Authenticity included</p>
                  </div>
                </div>
              )}
              {activeTab === 'specifications' && (
                <div className="max-w-2xl">
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-[#eee]">
                      {[
                        ['Brand', product.brand],
                        ['Model', product.name],
                        ['SKU', product.sku],
                        ['Movement', product.movement],
                        ['Case Material', product.case.split(' ')[0]],
                        ['Case Size', product.case.split(' ')[1]],
                        ['Water Resistance', product.water],
                        ['Warranty', product.warranty],
                      ].map(([key, value]) => (
                        <tr key={key}>
                          <td className="py-2 md:py-3 text-[#666] font-medium w-1/3 text-xs md:text-sm">{key}</td>
                          <td className="py-2 md:py-3 text-[#1a1a1a] text-xs md:text-sm">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {activeTab === 'reviews' && (
                <div className="max-w-2xl space-y-4 md:space-y-6">
                  <div className="flex items-center gap-4 mb-4 md:mb-6">
                    <div className="text-3xl md:text-5xl font-bold text-[#1a1a1a]">{product.rating}</div>
                    <div>
                      <div className="flex">
                        {[1,2,3,4,5].map((s) => (
                          <Star key={s} size={18} className={`md:size-5 ${s <= Math.floor(product.rating) ? 'text-[#C9A96E] fill-[#C9A96E]' : 'text-[#e0e0e0]'}`} />
                        ))}
                      </div>
                      <p className="text-xs md:text-sm text-[#666] mt-1">Based on {product.reviews} reviews</p>
                    </div>
                  </div>
                  {[1,2,3].map((review) => (
                    <div key={review} className="border-b border-[#eee] pb-4 md:pb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-[#f5f5f5] rounded-full flex items-center justify-center text-xs font-medium">U{review}</div>
                        <div>
                          <p className="text-sm font-medium">User {review}</p>
                          <p className="text-[10px] text-[#999]">2 weeks ago</p>
                        </div>
                      </div>
                      <div className="flex mb-2">
                        {[1,2,3,4,5].map((s) => (
                          <Star key={s} size={12} className={`md:size-3 ${s <= 5 - review + 1 ? 'text-[#C9A96E] fill-[#C9A96E]' : 'text-[#e0e0e0]'}`} />
                        ))}
                      </div>
                      <p className="text-xs md:text-sm text-[#666]">Excellent timepiece. The craftsmanship is outstanding and the watch keeps perfect time. Highly recommended for collectors.</p>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'shipping' && (
                <div className="max-w-2xl space-y-3 md:space-y-4">
                  <div className="bg-[#f5f5f5] p-4 md:p-6 rounded">
                    <h4 className="font-medium text-sm md:text-base mb-2">Free Express Shipping</h4>
                    <p className="text-xs md:text-sm text-[#666]">All orders are shipped via insured express courier. Delivery within 3-5 business days across India.</p>
                  </div>
                  <div className="bg-[#f5f5f5] p-4 md:p-6 rounded">
                    <h4 className="font-medium text-sm md:text-base mb-2">14-Day Return Policy</h4>
                    <p className="text-xs md:text-sm text-[#666]">If you are not completely satisfied, return the watch in its original condition within 14 days for a full refund.</p>
                  </div>
                  <div className="bg-[#f5f5f5] p-4 md:p-6 rounded">
                    <h4 className="font-medium text-sm md:text-base mb-2">Authenticity Guarantee</h4>
                    <p className="text-xs md:text-sm text-[#666]">Every watch comes with original box, papers, and our certificate of authenticity. 100% genuine guaranteed.</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-8 md:mt-16">
            <h2 className="text-base md:text-lg font-semibold tracking-wider uppercase mb-4 md:mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              {products.filter((p) => p.id !== id).slice(0, 4).map((watch) => (
                <Link href={`/products/${watch.id}`} key={watch.id} className="text-center p-3 md:p-4 hover:shadow-lg transition-shadow duration-300 bg-[#f5f5f5] rounded">
                  <div className="h-[120px] md:h-[180px] bg-gradient-to-br from-white to-[#e8e8e8] flex items-center justify-center mb-3 rounded">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e0e0e0" strokeWidth="1" className="md:w-12 md:h-12"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div className="text-[10px] md:text-[11px] tracking-wider uppercase text-[#666] mb-1 font-medium">{watch.brand}</div>
                  <div className="text-xs md:text-sm text-[#1a1a1a] mb-1 leading-snug font-medium">{watch.name}</div>
                  <div className="text-xs md:text-sm text-[#1a1a1a] font-semibold">{watch.price}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
