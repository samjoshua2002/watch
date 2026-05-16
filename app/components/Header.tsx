'use client'

export default function Header() {
  return (
    <header className="bg-white py-3 md:py-4 border-b border-[#eee]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
        <div className="flex items-center gap-3 md:gap-4">
          <a href="/" className="text-3xl md:text-4xl font-light tracking-tight text-black">
            ēthos
          </a>
          <div className="w-px h-8 md:h-10 bg-[#e0e0e0]"></div>
          <div className="text-[10px] md:text-xs tracking-[2px] uppercase text-[#666] font-medium leading-relaxed">
            WATCH<br className="hidden sm:block"/>BOUTIQUES
          </div>
        </div>
        <div className="font-serif text-sm md:text-lg text-[#c41e3a] italic order-first md:order-none">
          Saturday, May 16, 2026
        </div>
        <div className="hidden md:flex items-center gap-2 border border-[#e0e0e0] px-3 py-2">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#C9A96E] relative bg-white">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#C9A96E] rounded-full"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 w-[2px] h-4 bg-[#C9A96E] origin-bottom -translate-x-1/2 -translate-y-full rotate-[-45deg]"></div>
            <div className="absolute top-1/2 left-1/2 w-[1.5px] h-5 bg-[#C9A96E] origin-bottom -translate-x-1/2 -translate-y-full rotate-[30deg]"></div>
          </div>
          <div className="text-center leading-tight">
            <div className="text-[9px] md:text-[10px] font-semibold tracking-wider">ROLEX</div>
            <div className="text-[7px] md:text-[8px] text-[#666]">OFFICIAL RETAILER</div>
          </div>
        </div>
      </div>
    </header>
  )
}
