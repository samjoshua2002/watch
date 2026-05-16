'use client'

import { useEffect, useRef } from 'react'
import { Clock, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const articles = [
  {
    badge: 'Review',
    title: 'Ripple Effect: The Bovet Fleurier Miss Audrey Guilloché In Vivid Hues',
    excerpt: "In the same year of its launch, 2020, the Miss Audrey line of timepieces won the ladies' timepiece prize at the Grand Prix d'Horlogerie de Genève (GPHG).",
    date: 'May 14, 2026'
  },
  {
    badge: 'Spotlight',
    title: 'It Goes Back In Time: The Limited-Edition Louis Moinet 1816 Tourbillon Chronograph',
    excerpt: 'Louis Moinet continue to revisit the history of their chronograph watches with the new 1816 Tourbillon Chronograph.',
    date: 'May 14, 2026'
  },
  {
    badge: 'Review',
    title: 'Stunning Is The Word: Introducing The Frederique Constant Classics Manchette Collection',
    excerpt: "More often than not, when a watchmaker releases a jewelled timepiece, it's a time-telling tool with diamonds or other precious stones as decoration.",
    date: 'May 12, 2026'
  }
]

export default function Articles() {
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
            Latest Articles
          </h2>
          <Link href="/watch-guide" className="text-[11px] md:text-xs tracking-wider uppercase text-[#1a1a1a] hover:text-[#c41e3a] transition-colors flex items-center gap-1">
            View All <ChevronRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-white overflow-hidden hover:-translate-y-1 transition-transform duration-300 fade-in">
              <div className="h-[200px] md:h-[250px] bg-gradient-to-br from-[#e0e0e0] to-[#f0f0f0] flex items-center justify-center relative overflow-hidden">
                <Clock size={48} className="text-[#e0e0e0] md:size-16" />
                <span className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-[#c41e3a] text-white px-3 py-1 md:px-4 md:py-1.5 text-[10px] tracking-wider uppercase font-medium">
                  {article.badge}
                </span>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="font-serif text-base md:text-xl leading-snug mb-3 md:mb-4 text-[#1a1a1a]">
                  {article.title}
                </h3>
                <p className="text-xs md:text-sm text-[#666] leading-relaxed mb-3 md:mb-4">
                  {article.excerpt}
                </p>
                <span className="text-[11px] md:text-xs text-[#999] italic">{article.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
