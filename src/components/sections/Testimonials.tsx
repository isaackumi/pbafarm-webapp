'use client'

import React from 'react'
import Marquee from 'react-fast-marquee'

const topTestimonials = [
  { name: 'Sarah Johnson', role: 'Restaurant Owner', content: 'Pill Brook Aquatics has been our go-to supplier for fresh tilapia. The quality is consistently excellent and delivery is reliable. Highly recommended!' },
  { name: 'Michael Chen', role: 'Wholesale Buyer', content: "I've worked with PBA for over 2 years. Their tilapia is always fresh, properly sized, and competitively priced. Professional and trustworthy." },
  { name: 'Grace Osei', role: 'Local Market Vendor', content: 'PBA never disappoints. Their tilapia sells quickly because customers can taste the difference in quality and freshness.' },
]

const bottomTestimonials = [
  { name: 'David Mensah', role: 'Hotel Chef', content: 'The tilapia from Pill Brook Aquatics is perfect for our hotel menu. Always fresh, properly cleaned, and the right size. Highly recommended!' },
  { name: 'Ama Kufuor', role: 'Home Cook', content: 'I order tilapia from PBA regularly for my family. The fish is always fresh, clean, and delicious. Their customer service is excellent.' },
  { name: 'Kwame Asante', role: 'Catering Manager', content: "It's like having a superpower! PBA has given us the ability to source the finest tilapia for our events. Completely transformed our catering quality." },
]

function TestimonialCard({ name, role, content }: { name: string; role: string; content: string }) {
  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[360px] mx-3 bg-white rounded-xl shadow-md border border-neutral-100/80 p-6 hover:shadow-lg hover:border-primary-100 transition-all duration-300">
      <blockquote className="text-base font-semibold text-neutral-800 leading-relaxed mb-5 line-clamp-4">
        &quot;{content}&quot;
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-base flex-shrink-0">
          {name[0]}
        </div>
        <div>
          <div className="font-bold text-neutral-900">{name}</div>
          <div className="text-sm text-neutral-500">{role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section-spacing bg-neutral-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-neutral-600">
            Trusted by restaurants, vendors, and families across Ghana.
          </p>
        </div>

        <div className="space-y-6">
          {/* Top row: moves left */}
          <Marquee
            direction="left"
            speed={40}
            gradient={true}
            gradientColor="#fafbfc"
            gradientWidth={120}
            pauseOnHover={true}
            className="[&>div]:py-2"
          >
            {[...topTestimonials, ...topTestimonials].map((t, i) => (
              <TestimonialCard key={`top-${t.name}-${i}`} name={t.name} role={t.role} content={t.content} />
            ))}
          </Marquee>

          {/* Bottom row: moves right */}
          <Marquee
            direction="right"
            speed={40}
            gradient={true}
            gradientColor="#fafbfc"
            gradientWidth={120}
            pauseOnHover={true}
            className="[&>div]:py-2"
          >
            {[...bottomTestimonials, ...bottomTestimonials].map((t, i) => (
              <TestimonialCard key={`bottom-${t.name}-${i}`} name={t.name} role={t.role} content={t.content} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
