'use client'

import { MapPin, Phone, Clock, ChevronRight, Crown } from 'lucide-react'
import Link from 'next/link'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'

const cities = [
  { name: 'Mumbai', stores: 5, address: 'High Street Phoenix, Lower Parel' },
  { name: 'Delhi', stores: 4, address: 'DLF Emporio, Vasant Kunj' },
  { name: 'Bangalore', stores: 3, address: 'UB City, Vittal Mallya Road' },
  { name: 'Hyderabad', stores: 2, address: 'GVK One, Banjara Hills' },
  { name: 'Chennai', stores: 2, address: 'Express Avenue, Royapettah' },
  { name: 'Pune', stores: 2, address: 'Phoenix Marketcity, Viman Nagar' },
]

export default function BoutiquesPage() {
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
            <span className="text-[#1a1a1a]">Boutiques</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#d4a574] to-[#c4956a] py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <Crown size={40} className="mx-auto mb-4 text-white/50 md:size-12" />
          <h1 className="font-serif text-3xl md:text-5xl text-white mb-4">Our Boutiques</h1>
          <p className="text-sm md:text-base text-white/80 max-w-xl mx-auto">Experience luxury watch shopping at its finest. Visit our boutiques across India for personalized service.</p>
        </div>
      </div>

      <section className="py-8 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {cities.map((city) => (
              <div key={city.name} className="bg-[#f5f5f5] p-4 md:p-6 hover:shadow-lg transition-shadow rounded">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white flex items-center justify-center rounded shrink-0">
                    <MapPin size={18} className="text-[#c41e3a] md:size-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg md:text-xl text-[#1a1a1a] mb-1">{city.name}</h3>
                    <p className="text-xs md:text-sm text-[#666] mb-2 md:mb-3">{city.address}</p>
                    <div className="flex items-center gap-4 text-[10px] md:text-xs text-[#666]">
                      <span className="flex items-center gap-1"><MapPin size={10} /> {city.stores} Stores</span>
                      <span className="flex items-center gap-1"><Phone size={10} /> +91 87250 28887</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Store Hours */}
          <div className="mt-8 md:mt-12 bg-[#1a1a1a] text-white p-6 md:p-12 rounded">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              <div>
                <h3 className="font-serif text-xl md:text-2xl mb-3 md:mb-4">Store Hours</h3>
                <div className="space-y-2 md:space-y-3 text-sm md:text-base text-white/70">
                  <div className="flex justify-between"><span>Monday - Saturday</span><span>11:00 AM - 8:00 PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span>12:00 PM - 6:00 PM</span></div>
                  <div className="flex justify-between"><span>Public Holidays</span><span>12:00 PM - 5:00 PM</span></div>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl mb-3 md:mb-4">Book an Appointment</h3>
                <p className="text-sm md:text-base text-white/70 mb-4 md:mb-6">Schedule a private viewing with our watch specialists for a personalized experience.</p>
                <button className="px-6 py-3 bg-white text-[#1a1a1a] text-xs md:text-sm tracking-wider uppercase font-semibold hover:bg-[#c41e3a] hover:text-white transition-colors rounded">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
