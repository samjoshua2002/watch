'use client'

import { useEffect, useRef } from 'react'
import { PlayCircle, Play, ChevronRight } from 'lucide-react'

export default function Studios() {
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
    <section ref={sectionRef} className="py-10 md:py-16 bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h2 className="text-sm md:text-base font-semibold tracking-wider uppercase">
            Highlights From Ethos Studios
          </h2>
          <a href="#" className="text-[11px] md:text-xs tracking-wider uppercase text-white hover:text-[#c41e3a] transition-colors flex items-center gap-1">
            View All <ChevronRight size={14} />
          </a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="relative h-[200px] md:h-[400px] bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] overflow-hidden cursor-pointer group fade-in rounded">
              <div className="w-full h-full flex items-center justify-center">
                <PlayCircle size={40} className="text-white/10 md:size-16" />
              </div>
              <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 w-10 h-10 md:w-[50px] md:h-[50px] bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-[#c41e3a] transition-colors">
                <Play size={14} className="text-white ml-0.5 md:size-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
