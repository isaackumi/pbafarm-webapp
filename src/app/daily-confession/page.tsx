'use client'

import React from 'react'
import Link from 'next/link'

export default function DailyConfessionPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary-50 to-white py-24 px-4">
      <div className="bg-white rounded-2xl shadow-soft border border-neutral-100 p-12 text-center max-w-xl w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">Feature Not Available</h1>
        <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
          The Daily Confession feature is not available for Pill Brook Aquatics. Please explore our fresh tilapia products and services!
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl shadow-soft hover:bg-primary-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
