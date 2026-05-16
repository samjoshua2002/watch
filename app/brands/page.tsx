'use client'

import { Clock, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'

const brands = [
  { name: 'Rolex', count: 156, featured: true },
  { name: 'Omega', count: 142, featured: true },
  { name: 'Cartier', count: 89, featured: true },
  { name: 'TAG Heuer', count: 124, featured: false },
  { name: 'Breitling', count: 78, featured: false },
  { name: 'IWC Schaffhausen', count: 65, featured: false },
  { name: 'Patek Philippe', count: 45, featured: true },
  { name: 'Audemars Piguet', count: 38, featured: true },
  { name: 'H. Moser & Cie.', count: 32, featured: false },
  { name: 'Cyrus', count: 28, featured: false },
  { name: 'Frederique Constant', count: 56, featured: false },
  { name: 'Bovet', count: 24, featured: false },
]

export default function BrandsPage() {
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
            <span className="text-[#1a1a1a]">Brands</span>
          </div>
        </div>
      </div>

      <section className="py-8 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h1 className="font-serif text-2xl md:text-4xl text-[#1a1a1a] mb-2">Luxury Watch Brands</h1>
          <p className="text-sm md:text-base text-[#666] mb-8 md:mb-12">Discover over 50 prestigious brands, each representing the pinnacle of horological excellence.</p>

          {/* Featured Brands */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-sm md:text-base font-semibold tracking-wider uppercase mb-4 md:mb-6">Featured Brands</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              {brands.filter(b => b.featured).map((brand) => (
                <Link href={`/brands/${brand.name.toLowerCase().replace(/ /g, '-')}`} key={brand.name} className="group">
                  <div className="bg-[#f5f5f5] p-6 md:p-8 text-center hover:bg-[#1a1a1a] transition-colors duration-300 rounded">
                    <Clock size={40} className="mx-auto mb-3 md:mb-4 text-[#e0e0e0] group-hover:text-white transition-colors md:size-12" />
                    <h3 className="font-serif text-lg md:text-xl text-[#1a1a1a] group-hover:text-white transition-colors">{brand.name}</h3>
                    <p className="text-xs md:text-sm text-[#666] group-hover:text-white/70 transition-colors mt-1">{brand.count} Watches</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* All Brands */}
          <div>
            <h2 className="text-sm md:text-base font-semibold tracking-wider uppercase mb-4 md:mb-6">All Brands</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {brands.map((brand) => (
                <Link href={`/brands/${brand.name.toLowerCase().replace(/ /g, '-')}`} key={brand.name} className="flex items-center justify-between p-3 md:p-4 border border-[#eee] hover:border-[#c41e3a] hover:bg-[#f5f5f5] transition-all rounded">
                  <div className="flex items-center gap-3">
                    <Clock size={20} className="text-[#e0e0e0] md:size-6" />
                    <span className="text-sm md:text-base font-medium">{brand.name}</span>
                  </div>
                  <span className="text-xs md:text-sm text-[#666]">{brand.count}</span>
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
