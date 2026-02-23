'use client'

import React, { useRef, useEffect, useState } from 'react'
import { Play, MapPin } from 'lucide-react'

const VIDEO_SRC = '/images/farm/farm-video.mp4'

export default function FarmVideo() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold: 0.2 })
    ob.observe(el)
    return () => ob.disconnect()
  }, [])

  return (
    <section ref={ref} className="section-spacing bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              Our Farm
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              A Glimpse of Pill Brook Aquatics
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              See our sustainable aquaculture operation in Gyakiti, Eastern Region. Fresh tilapia, responsibly grown.
            </p>
          </div>

          <div
            className={`relative transition-all duration-700 delay-150 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-large border border-neutral-100 bg-neutral-900 aspect-video card-hover-lift">
              <video
                src={VIDEO_SRC}
                controls
                playsInline
                preload="metadata"
                poster="/images/farm/WhatsApp%20Image%202026-02-19%20at%2009.36.22.jpeg"
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" aria-hidden />
            </div>
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-2.5 bg-white rounded-full shadow-medium text-sm font-medium text-neutral-700 border border-neutral-100"
              aria-hidden
            >
              <Play className="w-4 h-4 text-primary-600 fill-primary-600" />
              Farm tour
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
