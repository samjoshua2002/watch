'use client'

import { useState } from 'react'
import { Eye, EyeOff, Mail, Lock, User, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

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
            <span className="text-[#1a1a1a]">{isLogin ? 'Login' : 'Sign Up'}</span>
          </div>
        </div>
      </div>

      <section className="py-8 md:py-16">
        <div className="max-w-[400px] mx-auto px-4">
          <div className="text-center mb-6 md:mb-8">
            <h1 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-xs md:text-sm text-[#666]">
              {isLogin ? 'Sign in to access your wishlist and orders' : 'Join us for exclusive access to new arrivals'}
            </p>
          </div>

          <div className="bg-white border border-[#eee] p-6 md:p-8 rounded">
            {/* Toggle */}
            <div className="flex border border-[#e0e0e0] rounded mb-6 overflow-hidden">
              <button 
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2.5 text-xs md:text-sm tracking-wider uppercase font-medium transition-colors ${isLogin ? 'bg-[#1a1a1a] text-white' : 'bg-white text-[#666]'}`}
              >
                Login
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2.5 text-xs md:text-sm tracking-wider uppercase font-medium transition-colors ${!isLogin ? 'bg-[#1a1a1a] text-white' : 'bg-white text-[#666]'}`}
              >
                Sign Up
              </button>
            </div>

            <form className="space-y-3 md:space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-xs md:text-sm text-[#666] mb-1.5">Full Name</label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]" />
                    <input type="text" placeholder="John Doe" className="w-full pl-10 pr-4 py-2.5 md:py-3 border border-[#e0e0e0] text-sm focus:border-[#c41e3a] focus:outline-none rounded" />
                  </div>
                </div>
              )}
              <div>
                <label className="block text-xs md:text-sm text-[#666] mb-1.5">Email</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]" />
                  <input type="email" placeholder="you@example.com" className="w-full pl-10 pr-4 py-2.5 md:py-3 border border-[#e0e0e0] text-sm focus:border-[#c41e3a] focus:outline-none rounded" />
                </div>
              </div>
              <div>
                <label className="block text-xs md:text-sm text-[#666] mb-1.5">Password</label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]" />
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    placeholder="••••••••" 
                    className="w-full pl-10 pr-10 py-2.5 md:py-3 border border-[#e0e0e0] text-sm focus:border-[#c41e3a] focus:outline-none rounded" 
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999]"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="flex justify-between items-center">
                  <label className="flex items-center gap-2 text-xs text-[#666]">
                    <input type="checkbox" className="rounded border-[#e0e0e0]" />
                    Remember me
                  </label>
                  <a href="#" className="text-xs text-[#c41e3a] hover:underline">Forgot password?</a>
                </div>
              )}

              <button type="submit" className="w-full bg-[#1a1a1a] text-white py-3 text-xs md:text-sm tracking-wider uppercase font-semibold hover:bg-[#333] transition-colors rounded">
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
