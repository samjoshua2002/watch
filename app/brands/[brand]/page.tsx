'use client'

import { useParams } from 'next/navigation'
import { Clock, ChevronRight, Award, Calendar, MapPin } from 'lucide-react'
import Link from 'next/link'
import TopBar from '../../components/TopBar'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../sections/Footer'

const brandData: Record<string, { name: string; founded: string; origin: string; description: string; watches: { id: number; name: string; price: string }[] }> = {
  'rolex': {
    name: 'Rolex',
    founded: '1905',
    origin: 'Geneva, Switzerland',
    description: 'Rolex is a Swiss luxury watch manufacturer based in Geneva, Switzerland. Originally founded as Wilsdorf and Davis by Hans Wilsdorf and Alfred Davis in London, England in 1905, the company registered Rolex as the brand name of its watches in 1908 and became Rolex Watch Co. Ltd. in 1915.',
    watches: [
      { id: 7, name: 'Submariner Date', price: '₹ 12,50,000' },
      { id: 71, name: 'Datejust 41', price: '₹ 8,90,000' },
      { id: 72, name: 'GMT-Master II', price: '₹ 15,20,000' },
      { id: 73, name: 'Daytona', price: '₹ 18,50,000' },
    ]
  },
  'omega': {
    name: 'Omega',
    founded: '1848',
    origin: 'Biel/Bienne, Switzerland',
    description: 'Omega SA is a Swiss luxury watchmaker based in Biel/Bienne, Switzerland. Founded by Louis Brandt in La Chaux-de-Fonds in 1848, the company formally operated as the Louis Brandt et Frère-Omega Watch & Co. Brandt.',
    watches: [
      { id: 8, name: 'Speedmaster Moonwatch', price: '₹ 6,80,000' },
      { id: 81, name: 'Seamaster Diver 300M', price: '₹ 5,40,000' },
      { id: 82, name: 'Constellation', price: '₹ 4,80,000' },
      { id: 83, name: 'De Ville Prestige', price: '₹ 3,90,000' },
    ]
  },
}

export default function BrandPage() {
  const params = useParams()
  const brandSlug = params.brand as string
  const brand = brandData[brandSlug] || {
    name: brandSlug.charAt(0).toUpperCase() + brandSlug.slice(1).replace(/-/g, ' '),
    founded: 'N/A',
    origin: 'Switzerland',
    description: 'Discover our curated collection of timepieces from this prestigious brand.',
    watches: [
      { id: 1, name: 'Classic Automatic', price: '₹ 5,00,000' },
      { id: 2, name: 'Chronograph Elite', price: '₹ 8,50,000' },
      { id: 3, name: 'Diver Pro', price: '₹ 6,20,000' },
      { id: 4, name: 'Dress Watch', price: '₹ 4,80,000' },
    ]
  }

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
            <Link href="/brands" className="hover:text-[#c41e3a]">Brands</Link>
            <ChevronRight size={12} />
            <span className="text-[#1a1a1a]">{brand.name}</span>
          </div>
        </div>
      </div>

      {/* Brand Hero */}
      <div className="bg-[#1a1a1a] text-white py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6">{brand.name}</h1>
              <p className="text-sm md:text-base text-white/70 leading-relaxed mb-4 md:mb-6">{brand.description}</p>
              <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm text-white/60">
                <span className="flex items-center gap-1.5"><Calendar size={14} /> Founded {brand.founded}</span>
                <span className="flex items-center gap-1.5"><MapPin size={14} /> {brand.origin}</span>
                <span className="flex items-center gap-1.5"><Award size={14} /> Official Retailer</span>
              </div>
            </div>
            <div className="h-[200px] md:h-[300px] bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] flex items-center justify-center rounded">
              <Clock size={80} className="text-white/10 md:size-[120px]" />
            </div>
          </div>
        </div>
      </div>

      <section className="py-8 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-base md:text-lg font-semibold tracking-wider uppercase mb-4 md:mb-6">{brand.name} Collection</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {brand.watches.map((watch) => (
              <Link href={`/products/${watch.id}`} key={watch.id} className="text-center p-3 md:p-4 hover:shadow-lg transition-shadow bg-[#f5f5f5] rounded">
                <div className="h-[150px] md:h-[220px] bg-gradient-to-br from-white to-[#e8e8e8] flex items-center justify-center mb-3 md:mb-4 rounded">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e0e0e0" strokeWidth="1" className="md:w-12 md:h-12"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div className="text-[10px] md:text-[11px] tracking-wider uppercase text-[#666] mb-1 font-medium">{brand.name}</div>
                <div className="text-xs md:text-sm text-[#1a1a1a] mb-1 md:mb-2 leading-snug font-medium">{watch.name}</div>
                <div className="text-xs md:text-sm text-[#1a1a1a] font-semibold">{watch.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
