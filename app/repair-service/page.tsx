'use client'

import { Wrench, Shield, Clock, ChevronRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'

const services = [
  { title: 'Complete Service', price: 'From ₹ 15,000', desc: 'Full disassembly, cleaning, lubrication, and regulation of your timepiece.', time: '4-6 weeks' },
  { title: 'Battery Replacement', price: 'From ₹ 2,500', desc: 'Quick battery replacement with water resistance testing.', time: 'Same day' },
  { title: 'Strap Replacement', price: 'From ₹ 5,000', desc: 'Genuine leather, rubber, or metal bracelet replacement.', time: '1-2 days' },
  { title: 'Polishing & Refinishing', price: 'From ₹ 8,000', desc: 'Restore your watch's original luster with professional polishing.', time: '1-2 weeks' },
  { title: 'Water Resistance Test', price: 'From ₹ 3,500', desc: 'Pressure testing to ensure your watch maintains its rated depth.', time: 'Same day' },
  { title: 'Movement Repair', price: 'Custom Quote', desc: 'Expert diagnosis and repair of mechanical and quartz movements.', time: '2-4 weeks' },
]

export default function RepairServicePage() {
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
            <span className="text-[#1a1a1a]">Repair & Service</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-[#1a1a1a] text-white py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <Wrench size={40} className="mx-auto mb-4 text-[#c41e3a] md:size-12" />
          <h1 className="font-serif text-3xl md:text-5xl mb-4">Repair & Service</h1>
          <p className="text-sm md:text-base text-white/70 max-w-xl mx-auto">Expert watch servicing by certified technicians. We handle everything from battery changes to complete overhauls.</p>
        </div>
      </div>

      <section className="py-8 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {services.map((service) => (
              <div key={service.title} className="bg-[#f5f5f5] p-4 md:p-6 hover:shadow-lg transition-shadow rounded">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <Wrench size={20} className="text-[#c41e3a] md:size-6" />
                  <h3 className="font-serif text-base md:text-lg text-[#1a1a1a]">{service.title}</h3>
                </div>
                <p className="text-xs md:text-sm text-[#666] mb-3 md:mb-4">{service.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base font-semibold text-[#1a1a1a]">{service.price}</span>
                  <span className="text-[10px] md:text-xs text-[#666] flex items-center gap-1"><Clock size={10} /> {service.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="bg-[#f5f5f5] p-6 md:p-12 rounded">
            <h2 className="font-serif text-xl md:text-2xl text-center mb-6 md:mb-8">Why Choose Ethos Service Center</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { icon: Shield, title: 'Certified Technicians', desc: 'Our watchmakers are trained and certified by leading Swiss brands.' },
                { icon: CheckCircle, title: 'Genuine Parts', desc: 'We use only authentic spare parts sourced directly from manufacturers.' },
                { icon: Clock, title: 'Warranty Protection', desc: 'All services come with a 1-year warranty on workmanship.' },
              ].map((item) => (
                <div key={item.title} className="text-center p-4 md:p-6">
                  <item.icon size={28} className="mx-auto mb-3 md:mb-4 text-[#c41e3a] md:size-8" />
                  <h3 className="font-medium text-sm md:text-base mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm text-[#666]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
