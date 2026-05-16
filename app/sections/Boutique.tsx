'use client'

import { Store, ChevronRight, Crown } from 'lucide-react'

export default function Boutique() {
  return (
    <section className="py-16 bg-bg-light">
      <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 h-[500px] bg-gradient-to-br from-[#d4a574] to-[#c4956a] flex items-center justify-center relative overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
              background: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 11px)'
            }}
          ></div>
          <Store size={80} className="text-white/30" />
        </div>
        <div className="bg-white p-12 flex flex-col justify-center items-center text-center">
          <div className="w-[120px] h-[120px] rounded-full border-[3px] border-gold mb-8 flex items-center justify-center relative bg-white shadow-lg">
            <div className="absolute w-2 h-2 bg-gold rounded-full z-10"></div>
            <div 
              className="absolute top-1/2 left-1/2 w-[3px] h-[30px] bg-gold origin-bottom"
              style={{ transform: 'translate(-50%, -100%) rotate(-45deg)' }}
            ></div>
            <div 
              className="absolute top-1/2 left-1/2 w-[2px] h-[45px] bg-gold origin-bottom"
              style={{ transform: 'translate(-50%, -100%) rotate(30deg)' }}
            ></div>
          </div>
          <h3 className="text-xl mb-6 text-primary">India</h3>
          <button className="w-full p-4 border border-border-main bg-white text-[#2E8B57] text-sm flex justify-between items-center hover:border-[#2E8B57] transition-colors">
            <span>Select a city</span>
            <ChevronRight size={16} />
          </button>
          <div className="mt-8 text-center">
            <Crown size={24} className="text-gold mx-auto mb-2" />
            <div className="text-xs tracking-wider font-semibold">ROLEX</div>
            <div className="text-[10px] text-text-light tracking-wider">OFFICIAL RETAILER</div>
          </div>
        </div>
      </div>
    </section>
  )
}
