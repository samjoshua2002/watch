'use client'

import { useEffect, useRef } from 'react'
import { Clock, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const mainArticle = {
  badge: 'Spotlight',
  title: 'Favre Leuba At Watches and Wonders 2026: Heritage Without Guesswork',
  excerpt: "Favre Leuba are at Watches and Wonders Geneva for the first time. The brand relaunched in August 2024 under Patrik Hoffmann, and just a year and a half later, they've arrived with two..."
}

const sideArticles = [
  {
    badge: 'Spotlight',
    title: 'A Legacy Refined In Proportion: Maurice Lacroix 1975 33mm',
    date: 'April 2, 2026'
  },
  {
    badge: 'Spotlight',
    title: "Back To Field Watch Basics: Tudor's Ranger Returns In 36mm",
    date: 'April 2, 2026'
  },
  {
    badge: 'Review',
    title: 'Stunning Is The Word: Introducing The Classics Manchette',
    date: 'April 2, 2026'
  },
  {
    badge: 'Spotlight',
    title: 'IWC Schaffhausen Expands The Portugieser Collection',
    date: 'April 2, 2026'
  }
]

export default function Trending() {
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
    <section ref={sectionRef} className="py-10 md:py-16 bg-[#f5f5f5]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h2 className="text-sm md:text-base font-semibold tracking-wider uppercase text-[#1a1a1a]">
            Trending Articles
          </h2>
          <Link href="/watch-guide" className="text-[11px] md:text-xs tracking-wider uppercase text-[#1a1a1a] hover:text-[#c41e3a] transition-colors flex items-center gap-1">
            View All <ChevronRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-8">
          <div className="lg:col-span-3 bg-white overflow-hidden fade-in rounded">
            <div className="h-[250px] md:h-[400px] bg-gradient-to-br from-[#e0e0e0] to-[#d0d0d0] flex items-center justify-center">
              <Clock size={60} className="text-[#e0e0e0] md:size-20" />
            </div>
            <div className="p-4 md:p-8">
              <span className="inline-block bg-[#c41e3a] text-white px-3 py-1 md:px-4 md:py-1.5 text-[10px] tracking-wider uppercase mb-3 md:mb-4">
                {mainArticle.badge}
              </span>
              <h3 className="font-serif text-lg md:text-3xl leading-snug mb-3 md:mb-4 text-[#1a1a1a]">
                {mainArticle.title}
              </h3>
              <p className="text-sm md:text-base text-[#666] leading-relaxed">
                {mainArticle.excerpt}
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-6">
            {sideArticles.map((article, index) => (
              <div key={index} className="bg-white overflow-hidden fade-in rounded">
                <div className="h-[100px] md:h-[150px] bg-gradient-to-br from-[#e8e8e8] to-[#d8d8d8] flex items-center justify-center">
                  <Clock size={28} className="text-[#e0e0e0] md:size-10" />
                </div>
                <div className="p-3 md:p-4">
                  <span className="text-[10px] text-[#c41e3a] tracking-wider uppercase block mb-1 md:mb-2">
                    {article.badge}
                  </span>
                  <h4 className="font-serif text-sm md:text-base leading-snug text-[#1a1a1a] mb-1 md:mb-2">
                    {article.title}
                  </h4>
                  <span className="text-[10px] md:text-xs text-[#999] italic">{article.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
