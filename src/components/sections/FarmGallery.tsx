'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const FARM_IMAGES = [
  { src: '/images/farm/cages-drone-view.jpeg', alt: 'Drone view of tilapia cages' },
  { src: '/images/farm/cages-pple.jpeg', alt: 'Tilapia cages at Pill Brook' },
  { src: '/images/farm/small-cage.jpeg', alt: 'Small cage aquaculture' },
  { src: '/images/cages.jpg', alt: 'Fish cages in the water' },
  { src: '/images/cage2.jpg', alt: 'Aquaculture cage structure' },
  { src: '/images/farm/WhatsApp%20Image%202026-02-19%20at%2009.36.22.jpeg', alt: 'Our tilapia farm in Gyakiti' },
]

function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex-shrink-0 mx-3 w-[280px] sm:w-[340px] h-[200px] sm:h-[240px] relative overflow-hidden rounded-xl md:rounded-2xl shadow-soft border border-neutral-100 group">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="340px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  )
}

export default function FarmGallery() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsInView(true),
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={gridRef} className="section-spacing bg-neutral-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4">Gallery</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Our Farm in Pictures
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Sustainable aquaculture at Pill Brook. See our cages, waters, and daily operations.
          </p>
        </div>
      </div>

      <div
        className={`transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-60'}`}
      >
        <Marquee
          speed={35}
          gradient
          gradientColor="#f4f6f8"
          gradientWidth={120}
          pauseOnHover
          direction="left"
          className="mb-4"
        >
          {FARM_IMAGES.map((img) => (
            <ImageCard key={img.src} src={img.src} alt={img.alt} />
          ))}
        </Marquee>
        <Marquee
          speed={40}
          gradient
          gradientColor="#f4f6f8"
          gradientWidth={120}
          pauseOnHover
          direction="right"
        >
          {[...FARM_IMAGES].reverse().map((img) => (
            <ImageCard key={`rev-${img.src}`} src={img.src} alt={img.alt} />
          ))}
        </Marquee>
      </div>
    </section>
  )
}
