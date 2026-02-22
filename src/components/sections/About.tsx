'use client'

import React from 'react'
import { Fish, Award, Users, Leaf } from 'lucide-react'

export default function About() {
  const features = [
    { icon: Fish, title: 'Fresh Harvest', description: 'Daily fresh tilapia from our sustainable aquaculture farm' },
    { icon: Award, title: 'Premium Quality', description: 'Highest standards in fish farming and processing' },
    { icon: Leaf, title: 'Sustainable', description: 'Environmentally conscious farming practices' },
    { icon: Users, title: 'Local Community', description: 'Supporting local economy and employment' },
  ]

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '1000+', label: 'Fish Delivered' },
    { number: '50+', label: 'Local Jobs' },
    { number: '100%', label: 'Fresh Guarantee' },
  ]

  return (
    <section id="about" className="section-spacing bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4">About Us</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Leading Tilapia Farm in Ghana
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Pill Brook Aquatics is a premier tilapia farming enterprise in Gyakiti, Eastern Region.
            We specialize in sustainable aquaculture and deliver the freshest, highest-quality tilapia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">Our Mission</h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                To provide sustainable, high-quality tilapia while supporting local communities and preserving our environment.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Under CEO John Domozoro, we&apos;ve built a reputation for excellence in fish farming,
                serving local markets and Ghana&apos;s aquaculture industry.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-white p-6 rounded-xl shadow-soft border border-neutral-100"
                >
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-3">
                  {React.createElement(feature.icon, { className: 'w-5 h-5' })}
                  </div>
                  <h4 className="font-semibold text-neutral-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-xl shadow-soft overflow-hidden border border-neutral-100">
              <video
                src="/images/farm/farm-video.mp4"
                controls
                playsInline
                preload="metadata"
                poster="/images/farm/WhatsApp%20Image%202026-02-19%20at%2009.36.22.jpeg"
                className="w-full h-80 lg:h-[420px] object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div className="bg-primary-600 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-primary-100 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
