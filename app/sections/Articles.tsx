'use client'

import { useEffect, useRef } from 'react'
import { Clock } from 'lucide-react'
import { ChevronRight } from 'lucide-react'

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
    <section ref={sectionRef} className="py-16 bg-bg-light">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-base font-semibold tracking-wider uppercase text-primary">
            Latest Articles
          </h2>
          <a href="#" className="text-xs tracking-wider uppercase text-primary hover:text-accent transition-colors flex items-center gap-1">
            View All <ChevronRight size={14} />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-white overflow-hidden hover:-translate-y-1 transition-transform duration-300 fade-in">
              <div className="h-[250px] bg-gradient-to-br from-[#e0e0e0] to-[#f0f0f0] flex items-center justify-center relative overflow-hidden">
                <Clock size={64} className="text-border-main" />
                <span className="absolute bottom-4 left-4 bg-accent text-white px-4 py-1.5 text-[10px] tracking-wider uppercase font-medium">
                  {article.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl leading-snug mb-4 text-primary">
                  {article.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <span className="text-xs text-text-muted italic">{article.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
