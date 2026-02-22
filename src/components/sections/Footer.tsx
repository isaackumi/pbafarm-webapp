'use client'

import React from 'react'
import Link from 'next/link'
import { Fish, Phone, Mail, MapPin, Facebook, Twitter, Instagram, ArrowUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/#about' },
      { name: 'Our Services', href: '/#services' },
      { name: 'Contact', href: '/contact' },
      { name: 'Donate', href: '/donate' },
    ],
    services: [
      { name: 'Fresh Tilapia', href: '/#services' },
      { name: 'Local Delivery', href: '/#services' },
      { name: 'Processing', href: '/#services' },
      { name: 'Bulk Orders', href: '/contact' },
    ],
    support: [
      { name: 'FAQ', href: '/contact' },
      { name: 'Order Status', href: '/contact' },
      { name: 'Help Center', href: '/contact' },
    ],
  }

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ]

  return (
    <footer className="relative mt-24 bg-primary-700 text-white overflow-hidden rounded-t-[60px] sm:rounded-t-[80px] min-h-[480px] flex flex-col">
      <div className="relative pt-20 pb-24 flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-16 lg:gap-20 py-8">
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Fish className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold block">Pill Brook</span>
                  <span className="text-sm text-primary-200 block">Aquatics</span>
                </div>
              </Link>
              <p className="text-primary-100 text-sm leading-relaxed mb-6">
                Leading tilapia farming enterprise in Ghana. Sustainable aquaculture,
                premium quality, local community support.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-primary-100 text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+233 24 123 4567</span>
                </div>
                <div className="flex items-center gap-3 text-primary-100 text-sm">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>john.domozoro@pbafish.com</span>
                </div>
                <div className="flex items-center gap-3 text-primary-100 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>Gyakiti, Eastern Region, Ghana</span>
                </div>
              </div>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-primary-100 hover:text-white text-sm transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-16 border-t border-primary-600">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Stay Updated</h4>
                <p className="text-primary-100 text-sm">Subscribe for updates and offers</p>
              </div>
              <div className="flex w-full lg:w-auto max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-l-lg text-white placeholder-primary-300 text-sm focus:outline-none focus:border-primary-500"
                />
                <button className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-r-lg hover:bg-primary-600 transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-primary-600 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-primary-200 text-sm">
              © {currentYear} Pill Brook Aquatics. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-800/50 text-primary-200 hover:text-white hover:bg-primary-600 transition-colors"
                  aria-label={social.name}
                >
                  {React.createElement(social.icon, { className: 'w-5 h-5' })}
                </a>
              ))}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-600 text-white hover:bg-primary-500 transition-colors"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
