'use client'

import { Phone, MessageCircle } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="bg-bg-light border-b border-border-light">
      <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center py-2 text-xs">
        <div className="flex items-center gap-6 text-text-light">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>+91 87250 28887</span>
          </div>
          <span className="text-border-main">•</span>
          <span>+91 87250 28882</span>
          <span className="text-border-main">•</span>
          <div className="flex items-center gap-2 text-green-500">
            <MessageCircle size={14} />
            <span>+91 97735 42630</span>
          </div>
        </div>
        <div className="flex items-center">
          <a href="#" className="text-text-light hover:text-accent transition-colors px-4 border-l border-border-main first:border-l-0 flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            Wishlist
          </a>
          <a href="#" className="text-text-light hover:text-accent transition-colors px-4 border-l border-border-main flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Cart
          </a>
          <a href="#" className="text-text-light hover:text-accent transition-colors px-4 border-l border-border-main flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            Login <span className="text-text-muted text-[10px]">OR</span> Signup
          </a>
        </div>
      </div>
    </div>
  )
}
