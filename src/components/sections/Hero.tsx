'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Fish, ChevronDown, ArrowRight } from 'lucide-react'

const HERO_BG = '/images/farm/WhatsApp%20Image%202026-02-19%20at%2009.36.22.jpeg'

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden -mt-20 lg:-mt-24 pt-20 lg:pt-24 w-full">
      <div className="absolute inset-0">
        <Image
          src={HERO_BG}
          alt="Pill Brook Aquatics tilapia farm in Ghana"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-neutral-900/85 via-neutral-900/60 to-transparent"
          aria-hidden
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-lg text-sm font-semibold mb-8">
            <Fish className="w-4 h-4" />
            Sustainable Tilapia from Ghana
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 drop-shadow-lg">
            Premium Tilapia
            <br />
            <span className="text-primary-300">from Ghana</span>
          </h1>

          <p className="text-xl lg:text-2xl text-neutral-100 max-w-2xl leading-relaxed mb-10">
            Sustainable aquaculture meets quality. We grow and deliver the finest tilapia
            from our farm in Gyakiti, Eastern Region. Fresh, healthy, and reliable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/order"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl shadow-soft hover:bg-primary-700 transition-colors duration-200"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/#about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/40 hover:bg-white/20 transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors"
          aria-label="Scroll to content"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
