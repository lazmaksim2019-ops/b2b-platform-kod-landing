'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import AuthModal from './AuthModal'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">К</span>
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            <span className="text-indigo-600">Платформа К-О-Д</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#features" 
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-300"
          >
            Возможности
          </a>
          <a 
            href="#calculator" 
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-300"
          >
            Калькулятор
          </a>
          <a 
            href="#quiz" 
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-300"
          >
            Тест
          </a>
          <a 
            href="#pricing" 
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-300"
          >
            Тарифы
          </a>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setAuthOpen(true)}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20"
          >
            Войти
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-white/90 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center">
              <a 
                href="#features" 
                className="block text-2xl font-bold text-gray-900 mb-6 hover:text-indigo-600 transition-colors"
              >
                Возможности
              </a>
              <a 
                href="#calculator" 
                className="block text-2xl font-bold text-gray-900 mb-6 hover:text-indigo-600 transition-colors"
              >
                Калькулятор
              </a>
              <a 
                href="#quiz" 
                className="block text-2xl font-bold text-gray-900 mb-6 hover:text-indigo-600 transition-colors"
              >
                Тест
              </a>
              <a 
                href="#pricing" 
                className="block text-2xl font-bold text-gray-900 mb-6 hover:text-indigo-600 transition-colors"
              >
                Тарифы
              </a>
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={() => { setAuthOpen(true); setMobileMenuOpen(false) }}
                  className="inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20"
                >
                  Войти
                </button>
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>

      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </header>
  )
}
