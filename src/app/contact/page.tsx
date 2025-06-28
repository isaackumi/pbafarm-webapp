"use client";

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', formData)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-red-50 to-white">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-red-600 to-blue-700 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Get in touch with Pill Brook Aquatics for fresh tilapia orders, wholesale inquiries, or any questions about our aquaculture business.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Get In Touch
                        </h2>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Location</h3>
                                    <p className="text-gray-600">Gyakiti, Eastern Region, Ghana</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                                    <p className="text-gray-600">+233 XX XXX XXXX</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                                    <p className="text-gray-600">info@pillbrookaquatics.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM<br />
                                        Saturday: 9:00 AM - 4:00 PM<br />
                                        Sunday: Closed</p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="mt-12 bg-gradient-to-r from-blue-500 via-red-500 to-blue-600 rounded-3xl p-8 text-white">
                            <h2 className="text-2xl font-bold mb-4">
                                Quick Actions
                            </h2>
                            <div className="space-y-4">
                                <a
                                    href="tel:+233XXXXXXXXX"
                                    className="block w-full bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 text-center"
                                >
                                    Call Us Now
                                </a>
                                <a
                                    href="mailto:info@pillbrookaquatics.com"
                                    className="block w-full bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 text-center"
                                >
                                    Send Email
                                </a>
                                <a
                                    href="/order"
                                    className="block w-full bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 text-center"
                                >
                                    Place Order
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Send Us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                            placeholder="+233 XX XXX XXXX"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                                        placeholder="Tell us about your inquiry..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-500 via-red-500 to-blue-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-blue-500 via-red-500 to-blue-600 rounded-3xl p-8 sm:p-12 text-white">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                            Ready to Order Fresh Tilapia?
                        </h3>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            Experience the finest quality tilapia from Pill Brook Aquatics. Fresh, sustainable, and delivered to your doorstep.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/order"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                            >
                                Place Your Order
                            </a>
                            <a
                                href="tel:+233XXXXXXXXX"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300"
                            >
                                Call Us Now
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
} 