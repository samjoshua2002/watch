'use client'

import { Phone } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="bg-[#f5f5f5] border-b border-[#eee]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center py-2 text-xs gap-2 sm:gap-0">
        <div className="flex items-center gap-3 md:gap-6 text-[#666] flex-wrap justify-center">
          <div className="flex items-center gap-1.5">
            <Phone size={12} />
            <span>+91 87250 28887</span>
          </div>
          <span className="hidden sm:inline text-[#e0e0e0]">•</span>
          <span className="hidden sm:inline">+91 87250 28882</span>
          <span className="hidden sm:inline text-[#e0e0e0]">•</span>
          <div className="flex items-center gap-1.5 text-green-600">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <span>+91 97735 42630</span>
          </div>
        </div>
        <div className="flex items-center">
          <a href="/wishlist" className="text-[#666] hover:text-[#c41e3a] transition-colors px-3 md:px-4 border-l border-[#e0e0e0] first:border-l-0 flex items-center gap-1.5 text-[11px]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            <span className="hidden sm:inline">Wishlist</span>
          </a>
          <a href="/cart" className="text-[#666] hover:text-[#c41e3a] transition-colors px-3 md:px-4 border-l border-[#e0e0e0] flex items-center gap-1.5 text-[11px]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span className="hidden sm:inline">Cart</span>
          </a>
          <a href="/login" className="text-[#666] hover:text-[#c41e3a] transition-colors px-3 md:px-4 border-l border-[#e0e0e0] flex items-center gap-1.5 text-[11px]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span className="hidden sm:inline">Login</span>
            <span className="text-[#999] text-[10px] hidden sm:inline">OR</span>
            <span className="hidden sm:inline">Signup</span>
          </a>
        </div>
      </div>
    </div>
  )
}
