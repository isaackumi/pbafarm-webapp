'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, ArrowLeft, Users, Fish, User } from 'lucide-react'
import Link from 'next/link'

const teamMembers: Array<{
  name: string
  role: string
  category: string
  description: string
  image?: string
}> = [
  {
    name: 'John Domozoro',
    role: 'CEO & Founder',
    category: 'Leadership',
    description: 'Leading our aquaculture business with expertise and vision. John brings years of experience in sustainable fish farming and community development.',
    image: '/images/team/JD.jpeg',
  },
  {
    name: 'Farm Operations',
    role: 'Aquaculture Manager',
    category: 'Operations',
    description: 'Managing tilapia farming operations with precision. Ensures optimal growth conditions, water quality, and sustainable practices at our facility.',
  },
  {
    name: 'Quality Control',
    role: 'Product Standards',
    category: 'Quality',
    description: 'Ensuring the highest quality standards for our products. Oversees processing, grading, and compliance from harvest to delivery.',
  },
  {
    name: 'Sales & Partnerships',
    role: 'Business Development',
    category: 'Sales',
    description: 'Building relationships with restaurants, vendors, and wholesalers. Connects our premium tilapia with customers across Ghana.',
  },
  {
    name: 'Supply Chain',
    role: 'Logistics & Delivery',
    category: 'Operations',
    description: 'Coordinating harvest, processing, and delivery schedules. Ensures fresh tilapia reaches your doorstep on time.',
  },
]

export default function TeamPreview() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1)
  }

  useEffect(() => {
    updateScrollState()
    const el = scrollRef.current
    if (!el) return
    const ro = new ResizeObserver(updateScrollState)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const amount = el.clientWidth * 0.8
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
    setTimeout(updateScrollState, 350)
  }

  return (
    <section className="section-spacing bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 lg:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Our Team
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-2">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl">
              Committed to delivering premium tilapia with sustainable farming and exceptional service.
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous team members"
              className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${
                canScrollLeft
                  ? 'border-primary-600 text-primary-600 hover:bg-primary-50'
                  : 'border-neutral-200 text-neutral-300 cursor-not-allowed'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Next team members"
              className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${
                canScrollRight
                  ? 'border-primary-600 text-primary-600 hover:bg-primary-50'
                  : 'border-neutral-200 text-neutral-300 cursor-not-allowed'
              }`}
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="flex gap-8 overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex-shrink-0 w-[320px] sm:w-[360px] snap-start bg-white rounded-2xl shadow-lg border border-neutral-100 overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Image header */}
              <div className="relative h-56 bg-gradient-to-br from-primary-100 to-primary-50 overflow-hidden">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="360px"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary-600 flex items-center justify-center">
                      <User className="w-12 h-12 text-white" />
                    </div>
                  </div>
                )}
              </div>

              {/* Card body */}
              <div className="p-6 lg:p-8">
                <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
                  {member.category}
                </span>
                <h3 className="text-xl font-bold text-neutral-900 mt-2 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium text-base mb-4">{member.role}</p>
                <p className="text-base text-neutral-600 leading-relaxed mb-6">
                  {member.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Get in touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>


        <div className="mt-16 bg-primary-600 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Join Our Aquaculture Team</h3>
          <p className="text-primary-100 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            We&apos;re always looking for passionate individuals to join our expanding aquaculture business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/team"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              Meet full team
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <Fish className="w-4 h-4" />
              Get in touch
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}
