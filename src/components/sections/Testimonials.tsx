'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight, Award, User } from 'lucide-react'

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Restaurant Owner",
            content: "Pill Brook Aquatics has been our go-to supplier for fresh tilapia. The quality is consistently excellent and their delivery service is reliable. Our customers love the taste and freshness of their products.",
            rating: 5,
            highlight: "Excellent quality",
            date: "2024",
            color: "bg-gradient-primary"
        },
        {
            name: "Michael Chen",
            role: "Wholesale Buyer",
            content: "I've been working with PBA for over 2 years now. Their tilapia is always fresh, properly sized, and competitively priced. The business relationship has been professional and trustworthy.",
            rating: 5,
            highlight: "Professional service",
            date: "2023",
            color: "bg-gradient-secondary"
        },
        {
            name: "Grace Osei",
            role: "Local Market Vendor",
            content: "As a market vendor, I need reliable suppliers. PBA never disappoints. Their tilapia sells quickly because customers can taste the difference in quality and freshness.",
            rating: 5,
            highlight: "Reliable supplier",
            date: "2024",
            color: "bg-gradient-accent"
        },
        {
            name: "David Mensah",
            role: "Hotel Chef",
            content: "The tilapia from Pill Brook Aquatics is perfect for our hotel's menu. The fish is always fresh, properly cleaned, and the perfect size for our dishes. Highly recommended!",
            rating: 5,
            highlight: "Perfect for menus",
            date: "2024",
            color: "bg-gradient-primary"
        },
        {
            name: "Ama Kufuor",
            role: "Home Cook",
            content: "I order tilapia from PBA regularly for my family. The fish is always fresh, clean, and delicious. Their customer service is excellent and delivery is always on time.",
            rating: 5,
            highlight: "Fresh and delicious",
            date: "2024",
            color: "bg-gradient-secondary"
        }
    ]

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="py-24 bg-gradient-to-br from-blue-50 via-red-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Quote className="w-4 h-4" />
                        Customer Reviews
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                        What Our Customers Say
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Don&apos;t just take our word for it. Here&apos;s what our valued customers have to say about our tilapia quality and service.
                    </p>
                </motion.div>

                {/* Testimonials */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Navigation Buttons */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                        </button>

                        <button
                            onClick={nextTestimonial}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                        </button>

                        {/* Testimonial Card */}
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-100"
                        >
                            <div className="text-center">
                                {/* Quote Icon */}
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Quote className="w-8 h-8 text-white" />
                                </div>

                                {/* Testimonial Text */}
                                <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed italic mb-8">
                                    &quot;{testimonials[currentIndex].content}&quot;
                                </blockquote>

                                {/* Customer Info */}
                                <div className="flex items-center justify-center gap-4 mb-6">
                                    <div className={`w-16 h-16 ${testimonials[currentIndex].color} rounded-full flex items-center justify-center shadow-large`}>
                                        <User className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-lg font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
                                        <p className="text-blue-600 font-medium">{testimonials[currentIndex].role}</p>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center justify-center gap-1 mb-4">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>

                                {/* Highlight */}
                                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                                    <Award className="w-4 h-4" />
                                    {testimonials[currentIndex].highlight}
                                </div>
                            </div>
                        </motion.div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center mt-8 gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-blue-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
                >
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                        <div className="text-gray-600">Happy Customers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-red-600 mb-2">1000+</div>
                        <div className="text-gray-600">Orders Delivered</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">5.0</div>
                        <div className="text-gray-600">Average Rating</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                        <div className="text-gray-600">Customer Support</div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-3xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">Ready to Experience Premium Tilapia?</h3>
                        <p className="text-blue-100 mb-6">Join our satisfied customers and taste the difference today.</p>
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300">
                            Order Now
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
} 