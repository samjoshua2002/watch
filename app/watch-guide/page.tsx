'use client'

import { Clock, ChevronRight, BookOpen, Video, Award } from 'lucide-react'
import Link from 'next/link'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'

const articles = [
  { title: 'Understanding Watch Movements: Automatic vs Quartz', category: 'Guide', readTime: '5 min read', icon: BookOpen },
  { title: 'The History of the Chronograph', category: 'History', readTime: '8 min read', icon: Clock },
  { title: 'How to Care for Your Luxury Watch', category: 'Maintenance', readTime: '6 min read', icon: Award },
  { title: 'Video: Inside a Swiss Watch Factory', category: 'Video', readTime: '12 min', icon: Video },
  { title: 'Complications Explained: Tourbillon, Perpetual Calendar & More', category: 'Guide', readTime: '10 min read', icon: BookOpen },
  { title: 'The Evolution of Dive Watches', category: 'History', readTime: '7 min read', icon: Clock },
]

export default function WatchGuidePage() {
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
            <span className="text-[#1a1a1a]">The Watch Guide</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-[#1a1a1a] text-white py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h1 className="font-serif text-3xl md:text-5xl mb-4">The Watch Guide</h1>
          <p className="text-sm md:text-base text-white/70 max-w-2xl">Your comprehensive resource for everything about luxury watches. From buying guides to deep dives into horological history.</p>
        </div>
      </div>

      <section className="py-8 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12">
            {['Buying Guides', 'Brand Histories', 'Complications', 'Maintenance'].map((cat) => (
              <button key={cat} className="p-4 md:p-6 bg-[#f5f5f5] hover:bg-[#1a1a1a] hover:text-white transition-colors text-center rounded">
                <BookOpen size={24} className="mx-auto mb-2 md:mb-3 text-[#c41e3a] md:size-8" />
                <span className="text-xs md:text-sm font-medium">{cat}</span>
              </button>
            ))}
          </div>

          {/* Articles */}
          <h2 className="text-base md:text-lg font-semibold tracking-wider uppercase mb-4 md:mb-6">Latest Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {articles.map((article, index) => (
              <Link href="#" key={index} className="group bg-[#f5f5f5] p-4 md:p-6 hover:bg-white hover:shadow-lg transition-all rounded">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white group-hover:bg-[#f5f5f5] flex items-center justify-center rounded shrink-0">
                    <article.icon size={18} className="text-[#c41e3a] md:size-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 md:mb-2">
                      <span className="text-[10px] md:text-xs text-[#c41e3a] tracking-wider uppercase">{article.category}</span>
                      <span className="text-[10px] md:text-xs text-[#999]">{article.readTime}</span>
                    </div>
                    <h3 className="font-serif text-sm md:text-lg text-[#1a1a1a] group-hover:text-[#c41e3a] transition-colors leading-snug">{article.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
