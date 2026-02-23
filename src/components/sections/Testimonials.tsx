'use client'

import React, { useRef, useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import { Quote, User } from 'lucide-react'

const testimonials = [
  { name: 'Sarah Johnson', role: 'Restaurant Owner', location: 'Accra', content: 'Our go-to supplier for fresh tilapia. Quality is consistently excellent and delivery is reliable. Highly recommended!' },
  { name: 'Michael Chen', role: 'Wholesale Buyer', location: 'Tema', content: "I've worked with PBA for over 2 years. Their tilapia is always fresh, properly sized, and competitively priced. Professional and trustworthy." },
  { name: 'Grace Osei', role: 'Local Market Vendor', location: 'Koforidua', content: 'PBA never disappoints. Our customers can taste the difference in quality and freshness. Sales have never been better.' },
  { name: 'David Mensah', role: 'Hotel Chef', location: 'Accra', content: 'Perfect for our hotel menu. Always fresh, properly cleaned, and the right size. Our guests love it.' },
  { name: 'Ama Kufuor', role: 'Home Cook', location: 'Gyakiti', content: 'I order from PBA regularly for my family. The fish is always fresh and delicious. Customer service is excellent.' },
  { name: 'Kwame Asante', role: 'Catering Manager', location: 'Kumasi', content: 'Completely transformed our catering quality. We source the finest tilapia for events. Game changer!' },
]

function TestimonialCard({ name, role, location, content }: {
  name: string
  role: string
  location?: string
  content: string
}) {
  return (
    <div className="card-hover-lift flex-shrink-0 w-[340px] sm:w-[380px] mx-3 bg-white rounded-2xl shadow-soft border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-md transition-all duration-200">
      <div className="p-6">
        <Quote className="w-7 h-7 text-neutral-300 mb-4" aria-hidden />
        <blockquote className="text-base text-neutral-700 leading-relaxed mb-6 line-clamp-4">
          &quot;{content}&quot;
        </blockquote>
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 flex-shrink-0">
            <User className="w-5 h-5" aria-hidden />
          </div>
          <div>
            <div className="font-semibold text-neutral-900">{name}</div>
            <div className="text-sm text-neutral-500">{role}{location ? ` · ${location}` : ''}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const headerRef = useRef<HTMLDivElement>(null)
  const [headerIn, setHeaderIn] = useState(false)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const ob = new IntersectionObserver(([e]) => e.isIntersecting && setHeaderIn(true), { threshold: 0.2 })
    ob.observe(el)
    return () => ob.disconnect()
  }, [])

  const top = testimonials.slice(0, 3)
  const bottom = testimonials.slice(3, 6)

  return (
    <section className="section-spacing bg-neutral-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-neutral-600">
            Trusted by restaurants, vendors, and families across Ghana.
          </p>
        </div>

        <div className="space-y-6">
          <Marquee
            direction="left"
            speed={35}
            gradient
            gradientColor="#f4f6f8"
            gradientWidth={100}
            pauseOnHover
            className="[&>div]:py-2"
          >
            {[...top, ...top].map((t, i) => (
              <TestimonialCard key={`top-${t.name}-${i}`} {...t} />
            ))}
          </Marquee>

          <Marquee
            direction="right"
            speed={38}
            gradient
            gradientColor="#f4f6f8"
            gradientWidth={100}
            pauseOnHover
            className="[&>div]:py-2"
          >
            {[...bottom, ...bottom].map((t, i) => (
              <TestimonialCard key={`bottom-${t.name}-${i}`} {...t} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
