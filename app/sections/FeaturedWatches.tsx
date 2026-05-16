'use client'

import { useEffect, useRef } from 'react'
import { Clock, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const watches = [
  { id: 7, brand: 'Rolex', name: 'Submariner Date', price: '₹ 12,50,000' },
  { id: 8, brand: 'Omega', name: 'Speedmaster Moonwatch', price: '₹ 6,80,000' },
  { id: 9, brand: 'Cartier', name: 'Santos de Cartier', price: '₹ 8,90,000' },
  { id: 10, brand: 'TAG Heuer', name: 'Carrera Chronograph', price: '₹ 5,40,000' },
  { id: 11, brand: 'Breitling', name: 'Navitimer B01', price: '₹ 7,20,000' },
  { id: 12, brand: 'IWC', name: "Pilot's Watch", price: '₹ 6,10,000' },
]

export default function FeaturedWatches() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = sectionRef.current?.querySelectorAll('.fade-in')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-10 md:py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h2 className="text-sm md:text-base font-semibold tracking-wider uppercase text-[#1a1a1a]">
            Featured Watches
          </h2>
          <Link href="/collections/featured" className="text-[11px] md:text-xs tracking-wider uppercase text-[#1a1a1a] hover:text-[#c41e3a] transition-colors flex items-center gap-1">
            View All <ChevronRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
          {watches.map((watch) => (
            <Link href={`/products/${watch.id}`} key={watch.id} className="text-center p-3 md:p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer fade-in">
              <div className="h-[150px] md:h-[200px] bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8] flex items-center justify-center mb-3 md:mb-4 rounded">
                <Clock size={36} className="text-[#e0e0e0] md:size-12" />
              </div>
              <div className="text-[10px] md:text-[11px] tracking-wider uppercase text-[#666] mb-1 md:mb-2 font-medium">
                {watch.brand}
              </div>
              <div className="text-xs md:text-sm text-[#1a1a1a] mb-1 md:mb-2 leading-snug font-medium">
                {watch.name}
              </div>
              <div className="text-xs md:text-sm text-[#1a1a1a] font-semibold">
                {watch.price}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
