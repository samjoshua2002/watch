'use client'

import { useParams } from 'next/navigation'
import { Clock, Filter, ChevronDown, ChevronRight, Grid3X3, List } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import TopBar from '../../components/TopBar'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../sections/Footer'

const allProducts = [
  { id: 1, brand: 'Cyrus', name: 'KLEPCYS DICE', price: '₹ 49,00,000', originalPrice: '₹ 52,00,000', tag: 'New' },
  { id: 2, brand: 'Cyrus', name: 'KLEPCYS GMT', price: '₹ 26,00,000', originalPrice: '₹ 28,00,000', tag: null },
  { id: 3, brand: 'H. Moser & Cie.', name: 'STREAMLINER', price: '₹ 39,40,000', originalPrice: '₹ 42,00,000', tag: 'Limited' },
  { id: 4, brand: 'Rolex', name: 'Submariner Date', price: '₹ 12,50,000', originalPrice: '₹ 13,20,000', tag: 'Best Seller' },
  { id: 5, brand: 'Omega', name: 'Speedmaster Moonwatch', price: '₹ 6,80,000', originalPrice: '₹ 7,20,000', tag: null },
  { id: 6, brand: 'Cartier', name: 'Santos de Cartier', price: '₹ 8,90,000', originalPrice: '₹ 9,50,000', tag: 'Sale' },
  { id: 7, brand: 'TAG Heuer', name: 'Carrera Chronograph', price: '₹ 5,40,000', originalPrice: null, tag: null },
  { id: 8, brand: 'Breitling', name: 'Navitimer B01', price: '₹ 7,20,000', originalPrice: null, tag: null },
  { id: 9, brand: 'IWC', name: "Pilot's Watch", price: '₹ 6,10,000', originalPrice: null, tag: null },
  { id: 10, brand: 'Patek Philippe', name: 'Nautilus 5711', price: '₹ 85,00,000', originalPrice: null, tag: 'Rare' },
  { id: 11, brand: 'Audemars Piguet', name: 'Royal Oak', price: '₹ 42,50,000', originalPrice: null, tag: null },
  { id: 12, brand: 'Frederique Constant', name: 'Classics Index', price: '₹ 1,80,000', originalPrice: '₹ 2,00,000', tag: 'Sale' },
]

const collectionInfo: Record<string, { title: string; description: string }> = {
  'new-arrivals': { title: 'New Arrivals', description: 'The latest timepieces to arrive at our boutiques. Be the first to discover these exceptional watches.' },
  'featured': { title: 'Featured Watches', description: 'Our handpicked selection of the most exceptional timepieces available now.' },
  'special-offers': { title: 'Special Offers', description: 'Exclusive deals on luxury watches. Limited time offers on selected timepieces.' },
  'pre-owned': { title: 'Pre-Owned Watches', description: 'Certified pre-owned luxury watches, meticulously inspected and authenticated.' },
  'jewellery': { title: 'Jewellery Watches', description: 'Exquisite timepieces adorned with precious stones and metals.' },
  'lifestyle': { title: 'Lifestyle', description: 'Luxury accessories and lifestyle products for the discerning collector.' },
}

export default function CollectionPage() {
  const params = useParams()
  const slug = params.slug as string
  const info = collectionInfo[slug] || { title: 'Collection', description: 'Browse our curated collection of luxury timepieces.' }
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortOpen, setSortOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <Navbar />

      <div className="bg-[#f5f5f5] py-3">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-xs text-[#666] flex-wrap">
            <Link href="/" className="hover:text-[#c41e3a]">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#1a1a1a]">{info.title}</span>
          </div>
        </div>
      </div>

      {/* Collection Header */}
      <div className="bg-[#1a1a1a] text-white py-8 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl mb-3 md:mb-4">{info.title}</h1>
          <p className="text-sm md:text-base text-white/70 max-w-2xl">{info.description}</p>
        </div>
      </div>

      <section className="py-6 md:py-12">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          {/* Filters & Sort */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8 pb-4 border-b border-[#eee]">
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-[#e0e0e0] text-xs md:text-sm hover:border-[#c41e3a] transition-colors rounded">
                <Filter size={14} /> Filter
              </button>
              <span className="text-xs md:text-sm text-[#666]">{allProducts.length} Products</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <button 
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center gap-2 px-4 py-2 border border-[#e0e0e0] text-xs md:text-sm hover:border-[#c41e3a] transition-colors rounded"
                >
                  Sort by <ChevronDown size={14} />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-1 bg-white border border-[#e0e0e0] shadow-lg z-10 min-w-[160px] rounded">
                    {['Price: Low to High', 'Price: High to Low', 'Newest First', 'Popular'].map((opt) => (
                      <button key={opt} className="block w-full text-left px-4 py-2 text-xs md:text-sm hover:bg-[#f5f5f5] transition-colors">
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex border border-[#e0e0e0] rounded overflow-hidden">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-[#1a1a1a] text-white' : 'bg-white text-[#666]'}`}
                >
                  <Grid3X3 size={16} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-[#1a1a1a] text-white' : 'bg-white text-[#666]'}`}
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className={`${viewMode === 'grid' ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6' : 'space-y-4'}`}>
            {allProducts.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id} className={`group ${viewMode === 'list' ? 'flex gap-4 md:gap-6 p-4 border border-[#eee] hover:border-[#c41e3a] transition-all rounded' : ''}`}>
                <div className={`relative bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8] flex items-center justify-center rounded ${viewMode === 'list' ? 'w-24 h-24 md:w-40 md:h-40 shrink-0' : 'h-[180px] md:h-[280px] mb-3 md:mb-4'}`}>
                  <Clock size={viewMode === 'list' ? 24 : 40} className="text-[#e0e0e0] md:size-12" />
                  {product.tag && (
                    <span className={`absolute top-2 left-2 bg-[#c41e3a] text-white px-2 py-0.5 text-[10px] tracking-wider uppercase font-medium rounded ${viewMode === 'list' ? 'md:px-3 md:py-1' : ''}`}>
                      {product.tag}
                    </span>
                  )}
                </div>
                <div className={viewMode === 'list' ? 'flex-1 flex flex-col justify-center' : 'text-center px-2'}>
                  <div className="text-[10px] md:text-[11px] tracking-wider uppercase text-[#666] mb-1 font-medium">{product.brand}</div>
                  <h3 className="font-serif text-sm md:text-base text-[#1a1a1a] mb-1 md:mb-2 leading-snug group-hover:text-[#c41e3a] transition-colors">{product.name}</h3>
                  <div className="flex items-baseline gap-2 justify-center md:justify-start flex-wrap">
                    <span className="text-sm md:text-base font-semibold text-[#1a1a1a]">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs md:text-sm text-[#999] line-through">{product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
