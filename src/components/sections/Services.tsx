'use client'

import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { Fish, Truck, Package, Leaf, Award, Clock, MapPin, ArrowRight, ChevronDown } from 'lucide-react'

export default function Services() {
  const processRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = processRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsInView(true),
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Fish,
      title: 'Fresh Tilapia',
      description: 'Premium quality tilapia harvested daily from our sustainable aquaculture farm',
      features: ['Live fish', 'Fresh fillets', 'Whole fish', 'Premium grade'],
    },
    {
      icon: Truck,
      title: 'Local Delivery',
      description: 'Fast and reliable delivery to local communities and businesses',
      features: ['Same day delivery', 'Local pickup', 'Bulk orders', 'Scheduled delivery'],
    },
    {
      icon: Package,
      title: 'Processing Services',
      description: 'Professional fish processing and packaging to meet your needs',
      features: ['Custom packaging', 'Size grading', 'Quality control', 'Hygienic processing'],
    },
  ]

  const benefits = [
    { icon: Leaf, title: 'Sustainable', description: 'Environmentally responsible aquaculture' },
    { icon: Award, title: 'Quality Assured', description: 'Highest standards in fish farming' },
    { icon: Clock, title: 'Fresh Daily', description: 'Harvested and delivered fresh every day' },
    { icon: MapPin, title: 'Local Source', description: 'Supporting local economy and communities' },
  ]

  const processSteps = [
    { title: 'Farming', icon: Fish, label: 'Farm-managed' },
    { title: 'Harvesting', icon: Package, label: 'Quality-controlled' },
    { title: 'Processing', icon: Award, label: 'Platform-managed' },
    { title: 'Delivery', icon: Truck, label: 'Customer-delivered' },
  ]

  return (
    <section id="services" className="section-spacing bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4">Our Services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Complete Aquaculture Solutions
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            From farm to table: comprehensive tilapia farming and delivery services for Ghana.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-md border border-neutral-100 p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-6">
                {React.createElement(service.icon, { className: 'w-6 h-6' })}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{service.title}</h3>
              <p className="text-base text-neutral-600 leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-base text-neutral-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-primary-600 rounded-2xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">Why Choose PBA?</h3>
            <p className="text-primary-100">The advantages that set us apart</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  {React.createElement(benefit.icon, { className: 'w-6 h-6' })}
                </div>
                <h4 className="font-semibold text-white mb-2">{benefit.title}</h4>
                <p className="text-primary-100 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process section - Azure-style card format */}
        <div ref={processRef} className="py-12 lg:py-20">
          <div className="mb-12 lg:mb-16">
            <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-2">
              Learn how we deliver
            </h3>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl">
              Our end-to-end process from farm to your table.
            </p>
          </div>

          <div
            className={`bg-white rounded-2xl shadow-lg border border-neutral-100 overflow-hidden transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Visual flow diagram header */}
            <div className="bg-gradient-to-br from-primary-50 to-white px-8 lg:px-12 py-10 lg:py-14 border-b border-neutral-100">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
                {processSteps.map((step, index) => (
                  <React.Fragment key={step.title}>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-primary-600 flex items-center justify-center shadow-lg mb-3">
                        {React.createElement(step.icon, { className: 'w-8 h-8 lg:w-10 lg:h-10 text-white' })}
                      </div>
                      <span className="text-base font-semibold text-neutral-900 block">{step.title}</span>
                      <span className="text-sm text-neutral-500 block mt-0.5">{step.label}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <>
                        <ChevronDown className="w-6 h-6 text-primary-400 lg:hidden shrink-0" />
                        <ArrowRight className="hidden lg:block w-6 h-6 text-primary-400 shrink-0" />
                      </>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Card body */}
            <div className="p-8 lg:p-10">
              <h4 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-4">
                From farm to your table: quality at every step
              </h4>
              <p className="text-base lg:text-lg text-neutral-600 leading-relaxed mb-8 max-w-3xl">
                We farm tilapia sustainably, harvest daily with care, process to the highest standards,
                and deliver fresh to your door. Each stage is managed for quality, traceability, and
                your complete satisfaction.
              </p>
              <Link
                href="/#about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Learn more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
