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
    <section ref={sectionRef} className="py-16 bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-base font-semibold tracking-wider uppercase">
            Highlights From Ethos Studios
          </h2>
          <a href="#" className="text-xs tracking-wider uppercase text-white hover:text-accent transition-colors flex items-center gap-1">
            View All <ChevronRight size={14} />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="relative h-[400px] bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] overflow-hidden cursor-pointer group fade-in">
              <div className="w-full h-full flex items-center justify-center">
                <PlayCircle size={64} className="text-white/10" />
              </div>
              <div className="absolute bottom-4 left-4 w-[50px] h-[50px] bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-accent transition-colors">
                <Play size={16} className="text-white ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
