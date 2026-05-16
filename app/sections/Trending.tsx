'use client'

import { useEffect, useRef } from 'react'
import { Clock, ChevronRight } from 'lucide-react'

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
    <section ref={sectionRef} className="py-16 bg-bg-light">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-base font-semibold tracking-wider uppercase text-primary">
            Trending Articles
          </h2>
          <a href="#" className="text-xs tracking-wider uppercase text-primary hover:text-accent transition-colors flex items-center gap-1">
            View All <ChevronRight size={14} />
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-white overflow-hidden fade-in">
            <div className="h-[400px] bg-gradient-to-br from-[#e0e0e0] to-[#d0d0d0] flex items-center justify-center">
              <Clock size={80} className="text-border-main" />
            </div>
            <div className="p-8">
              <span className="inline-block bg-accent text-white px-4 py-1.5 text-[10px] tracking-wider uppercase mb-4">
                {mainArticle.badge}
              </span>
              <h3 className="font-serif text-3xl leading-snug mb-4 text-primary">
                {mainArticle.title}
              </h3>
              <p className="text-base text-text-light leading-relaxed">
                {mainArticle.excerpt}
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {sideArticles.map((article, index) => (
              <div key={index} className="bg-white overflow-hidden fade-in">
                <div className="h-[150px] bg-gradient-to-br from-[#e8e8e8] to-[#d8d8d8] flex items-center justify-center">
                  <Clock size={40} className="text-border-main" />
                </div>
                <div className="p-4">
                  <span className="text-[10px] text-accent tracking-wider uppercase block mb-2">
                    {article.badge}
                  </span>
                  <h4 className="font-serif text-base leading-snug text-primary mb-2">
                    {article.title}
                  </h4>
                  <span className="text-xs text-text-muted italic">{article.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
