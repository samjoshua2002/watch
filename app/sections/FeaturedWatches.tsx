'use client'

import { useEffect, useRef } from 'react'
import { Clock, ChevronRight } from 'lucide-react'

const watches = [
  { brand: 'Rolex', name: 'Submariner Date', price: '₹ 12,50,000' },
  { brand: 'Omega', name: 'Speedmaster Moonwatch', price: '₹ 6,80,000' },
  { brand: 'Cartier', name: 'Santos de Cartier', price: '₹ 8,90,000' },
  { brand: 'TAG Heuer', name: 'Carrera Chronograph', price: '₹ 5,40,000' },
  { brand: 'Breitling', name: 'Navitimer B01', price: '₹ 7,20,000' },
  { brand: 'IWC', name: "Pilot's Watch", price: '₹ 6,10,000' },
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
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-base font-semibold tracking-wider uppercase text-primary">
            Featured Watches
          </h2>
          <a href="#" className="text-xs tracking-wider uppercase text-primary hover:text-accent transition-colors flex items-center gap-1">
            View All <ChevronRight size={14} />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {watches.map((watch, index) => (
            <div key={index} className="text-center p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer fade-in">
              <div className="h-[200px] bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8] flex items-center justify-center mb-4 rounded">
                <Clock size={48} className="text-border-main" />
              </div>
              <div className="text-[11px] tracking-wider uppercase text-text-light mb-2 font-medium">
                {watch.brand}
              </div>
              <div className="text-sm text-primary mb-2 leading-snug font-medium">
                {watch.name}
              </div>
              <div className="text-sm text-primary font-semibold">
                {watch.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
