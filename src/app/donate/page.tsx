'use client'

import React from 'react'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

export default function DonatePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary-50 to-white py-24 px-4">
      <div className="bg-white rounded-2xl shadow-soft border border-neutral-100 p-12 text-center max-w-xl w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">Support Local Aquaculture</h1>
        <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
          Pill Brook Aquatics does not accept donations. If you would like to support us, please consider purchasing our fresh tilapia products or sharing our business with your community!
        </p>
        <Link
          href="/order"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl shadow-soft hover:bg-primary-700 transition-colors"
        >
          <ShoppingCart className="w-5 h-5" />
          Order Fresh Tilapia
        </Link>
      </div>
    </div>
  )
}
