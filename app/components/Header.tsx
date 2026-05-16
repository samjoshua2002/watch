'use client'

export default function Header() {
  return (
    <header className="bg-white py-4 border-b border-border-light">
      <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="#" className="text-4xl font-light tracking-tight text-black">
            ēthos
          </a>
          <div className="w-px h-10 bg-border-main"></div>
          <div className="text-xs tracking-[2px] uppercase text-text-light font-medium leading-relaxed">
            WATCH<br/>BOUTIQUES
          </div>
        </div>
        <div className="font-serif text-lg text-accent italic">
          Saturday, May 16, 2026
        </div>
        <div className="flex items-center gap-2 border border-border-main px-4 py-2">
          <div className="w-12 h-12 rounded-full border-2 border-gold relative bg-white">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 w-0.5 h-4 bg-gold origin-bottom -translate-x-1/2 -translate-y-full rotate-[-45deg]"></div>
            <div className="absolute top-1/2 left-1/2 w-px h-5 bg-gold origin-bottom -translate-x-1/2 -translate-y-full rotate-[30deg]"></div>
          </div>
          <div className="text-center leading-tight">
            <div className="text-[10px] font-semibold tracking-wider">ROLEX</div>
            <div className="text-[8px] text-text-light">OFFICIAL RETAILER</div>
          </div>
        </div>
      </div>
    </header>
  )
}
