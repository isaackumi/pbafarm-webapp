'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    { icon: MapPin, title: 'Location', value: 'Gyakiti, Eastern Region, Ghana', link: null },
    { icon: Phone, title: 'Phone', value: '+233 XX XXX XXXX', link: 'tel:+233XXXXXXXXX' },
    { icon: Mail, title: 'Email', value: 'john.domozoro@pbafish.com', link: 'mailto:john.domozoro@pbafish.com' },
    { icon: Clock, title: 'Business Hours', value: 'Monday - Friday: 8:00 AM - 6:00 PM. Saturday: 9:00 AM - 4:00 PM. Sunday: Closed', link: null },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <div className="bg-primary-600 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-primary-200 uppercase tracking-wider mb-4 flex items-center justify-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Get In Touch
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-primary-100">
              Get in touch for fresh tilapia orders, wholesale inquiries, or any questions about our aquaculture business.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Get In Touch</h2>
            <p className="text-neutral-500 text-sm mb-6">Reach us directly for orders or inquiries.</p>
            {contactInfo.map((info) => (
              <div key={info.title} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                  {React.createElement(info.icon, { className: 'w-6 h-6' })}
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-neutral-600 hover:text-primary-600 transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-neutral-600">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="bg-primary-600 rounded-2xl p-8 text-white mt-12">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="space-y-4">
                <a
                  href="tel:+233XXXXXXXXX"
                  className="block w-full bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors text-center font-medium"
                >
                  Call Us Now
                </a>
                <a
                  href="mailto:john.domozoro@pbafish.com"
                  className="block w-full bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors text-center font-medium"
                >
                  Send Email
                </a>
                <Link
                  href="/order"
                  className="block w-full bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors text-center font-medium"
                >
                  Place Order
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-soft border border-neutral-100 p-8 lg:p-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Send Us a Message</h2>
            <p className="text-neutral-500 text-sm mb-6">We typically respond within 24 hours.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all placeholder:text-neutral-400"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all placeholder:text-neutral-400"
                    placeholder="john.domozoro@pbafish.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all placeholder:text-neutral-400"
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all placeholder:text-neutral-400"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Product Order</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="delivery">Delivery Options</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-primary-600 rounded-2xl p-8 sm:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Order Fresh Tilapia?</h3>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              Experience the finest quality tilapia from Pill Brook Aquatics. Fresh, sustainable, and delivered to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/order"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-colors"
              >
                Place Your Order
              </Link>
              <a
                href="tel:+233XXXXXXXXX"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-600 transition-colors"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
