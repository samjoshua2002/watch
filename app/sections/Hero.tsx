'use client'

import { useState } from 'react'
import { Clock } from 'lucide-react'

const slides = [
  {
    title: "Fresh Off Its Watches And Wonders Launch: Bremont's Supernova",
    description: "This British watch has been made to be taken to the Moon and to be left there permanently",
    cta: "Discover Now"
  },
  {
    title: "The New Omega Speedmaster: A Legacy Reimagined",
    description: "Experience the iconic chronograph that journeyed to the Moon, now refined for the modern era.",
    cta: "Explore Now"
  },
  {
    title: "Rolex 2026 Collection: Precision Perfected",
    description: "Discover the latest innovations from the crown, where timeless elegance meets cutting-edge technology.",
    cta: "View Collection"
  }
]

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <section className="relative h-[600px] overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full flex transition-opacity duration-800 ${
            index === activeSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-3/5 h-full bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
            <Clock size={240} className="text-white/10" />
          </div>
          <div className="w-2/5 flex flex-col justify-center px-16 bg-black text-white">
            <h1 className="font-serif text-4xl font-normal leading-tight mb-6">
              {slide.title}
            </h1>
            <p className="text-white/70 leading-relaxed mb-8">
              {slide.description}
            </p>
            <a
              href="#"
              className="inline-block px-10 py-4 bg-white text-black text-sm tracking-widest uppercase font-semibold border-2 border-white hover:bg-transparent hover:text-white transition-all w-fit"
            >
              {slide.cta}
            </a>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-8 h-1 transition-all ${
              index === activeSlide ? 'bg-accent' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
