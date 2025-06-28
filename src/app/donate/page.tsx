"use client";

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, ShoppingCart } from 'lucide-react'

export default function DonatePage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-red-50 to-white">
            <div className="absolute top-8 left-8">
                <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 mb-8 group">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                    Back to Home
                </Link>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 p-12 text-center max-w-xl">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Support Local Aquaculture</h1>
                <p className="text-lg text-gray-600 mb-8">Pill Brook Aquatics does not accept donations. If you would like to support us, please consider purchasing our fresh tilapia products or sharing our business with your community!</p>
                <Link href="/order" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 via-red-500 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
                    <ShoppingCart className="w-5 h-5" />
                    Order Fresh Tilapia
                </Link>
            </div>
        </div>
    )
} 