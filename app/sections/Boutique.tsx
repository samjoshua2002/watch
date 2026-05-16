'use client'

import { Store, ChevronRight, Crown } from 'lucide-react'

export default function Boutique() {
  return (
    <section className="py-10 md:py-16 bg-[#f5f5f5]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
        <div className="lg:col-span-2 h-[300px] md:h-[400px] lg:h-[500px] bg-gradient-to-br from-[#d4a574] to-[#c4956a] flex items-center justify-center relative overflow-hidden rounded">
          <div 
            className="absolute inset-0"
            style={{
              background: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 11px)'
            }}
          ></div>
          <Store size={60} className="text-white/30 md:size-20" />
        </div>
        <div className="bg-white p-6 md:p-12 flex flex-col justify-center items-center text-center rounded">
          <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full border-[3px] border-[#C9A96E] mb-4 md:mb-8 flex items-center justify-center relative bg-white shadow-lg">
            <div className="absolute w-2 h-2 bg-[#C9A96E] rounded-full z-10"></div>
            <div 
              className="absolute top-1/2 left-1/2 w-[2px] bg-[#C9A96E] origin-bottom"
              style={{ height: '25px', transform: 'translate(-50%, -100%) rotate(-45deg)' }}
            ></div>
            <div 
              className="absolute top-1/2 left-1/2 w-[1.5px] bg-[#C9A96E] origin-bottom"
              style={{ height: '35px', transform: 'translate(-50%, -100%) rotate(30deg)' }}
            ></div>
          </div>
          <h3 className="text-lg md:text-xl mb-4 md:mb-6 text-[#1a1a1a]">India</h3>
          <button className="w-full p-3 md:p-4 border border-[#e0e0e0] bg-white text-[#2E8B57] text-xs md:text-sm flex justify-between items-center hover:border-[#2E8B57] transition-colors rounded">
            <span>Select a city</span>
            <ChevronRight size={16} />
          </button>
          <div className="mt-6 md:mt-8 text-center">
            <Crown size={20} className="text-[#C9A96E] mx-auto mb-2 md:size-6" />
            <div className="text-[10px] md:text-xs tracking-wider font-semibold">ROLEX</div>
            <div className="text-[9px] md:text-[10px] text-[#666] tracking-wider">OFFICIAL RETAILER</div>
          </div>
        </div>
      </div>
    </section>
  )
}
