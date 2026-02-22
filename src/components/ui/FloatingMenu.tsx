'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Plus, MessageCircle, Phone, Mail, ShoppingCart } from 'lucide-react'

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { icon: MessageCircle, label: 'Chat', href: '/contact' },
    { icon: Phone, label: 'Call', href: 'tel:+233241234567' },
    { icon: Mail, label: 'Email', href: 'mailto:john.domozoro@pbafish.com' },
    { icon: ShoppingCart, label: 'Order', href: '/order' },
  ]

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {isOpen && (
        <div className="absolute bottom-14 left-0 flex flex-col gap-3 animate-fade-in">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 w-full px-4 py-3 bg-white rounded-xl shadow-soft border border-neutral-100 text-neutral-700 hover:text-primary-600 hover:border-primary-200 transition-colors"
            >
              {React.createElement(item.icon, { className: 'w-5 h-5' })}
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          ))}
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-xl shadow-soft flex items-center justify-center transition-colors ${
          isOpen
            ? 'bg-primary-600 text-white'
            : 'bg-white text-primary-600 border border-neutral-100 hover:border-primary-200'
        }`}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <Plus className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-45' : ''}`} />
      </button>
    </div>
  )
}
