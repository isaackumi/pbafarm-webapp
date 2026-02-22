'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Fish } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [hash, setHash] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    setHash(typeof window !== 'undefined' ? window.location.hash : '')
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(typeof window !== 'undefined' ? window.scrollY > 60 : false)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Donate', href: '/donate' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' && !hash
    if (href === '/#about') return pathname === '/' && hash === '#about'
    if (href === '/#services') return pathname === '/' && hash === '#services'
    return pathname.startsWith(href)
  }

  const showPill = !isHome || scrolled

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-300 ${
          showPill ? 'bg-neutral-100/80 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <nav
            className={`rounded-full px-6 lg:px-8 py-3 flex items-center justify-between transition-all duration-300 ${
              showPill
                ? 'bg-white shadow-md border border-neutral-100'
                : 'bg-white/10 backdrop-blur-md border border-white/20'
            }`}
          >
            <Link
              href="/"
              className={`flex items-center gap-2 shrink-0 transition-colors ${
                showPill ? 'text-neutral-900' : 'text-white'
              }`}
            >
              <Fish className="w-5 h-5" />
              <span className="text-lg font-bold">Pill Brook</span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    showPill
                      ? isActive(item.href)
                        ? 'bg-neutral-900 text-white'
                        : 'text-neutral-900 hover:bg-neutral-100'
                      : isActive(item.href)
                        ? 'bg-white/20 text-white'
                        : 'text-white/90 hover:bg-white/20'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link
              href="/order"
              className={`hidden lg:inline-flex px-5 py-2.5 font-semibold rounded-full transition-colors shrink-0 ${
                showPill
                  ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                  : 'bg-white text-primary-600 hover:bg-white/90'
              }`}
            >
              Order Now
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors ${
                showPill ? 'text-neutral-700 hover:bg-neutral-100' : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden pt-24 pb-4 px-4">
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setIsOpen(false)}
            aria-hidden
          />
          <div className="relative bg-white rounded-2xl shadow-xl p-6 space-y-1 max-h-[calc(100vh-8rem)] overflow-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 rounded-xl font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/order"
              onClick={() => setIsOpen(false)}
              className="block py-3 px-4 text-center bg-neutral-900 text-white font-semibold rounded-xl mt-4"
            >
              Order Now
            </Link>
          </div>
        </div>
      )}

      <div className="h-20 lg:h-24" />
    </>
  )
}
