'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Star, Fish, User } from 'lucide-react'
import Link from 'next/link'

export default function TeamPreview() {
    const teamMembers = [
        {
            name: "John Domozoro",
            role: "CEO & Founder",
            description: "Leading our aquaculture business with expertise and vision",
            color: "bg-gradient-primary"
        },
        {
            name: "Aquaculture Manager",
            role: "Farm Operations",
            description: "Managing our tilapia farming operations with precision",
            color: "bg-gradient-secondary"
        },
        {
            name: "Quality Control",
            role: "Product Standards",
            description: "Ensuring the highest quality standards for our products",
            color: "bg-gradient-accent"
        }
    ]

    return (
        <section className="py-24 bg-gradient-to-br from-blue-50 via-red-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Users className="w-4 h-4" />
                        Our Team
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                        Meet Our Expert Team
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Our leadership team is committed to delivering the finest quality tilapia
                        with sustainable farming practices and exceptional customer service.
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                                {/* Avatar */}
                                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                                    <div className={`w-32 h-32 ${member.color} rounded-full flex items-center justify-center shadow-large group-hover:scale-110 transition-transform duration-700`}>
                                        <User className="w-16 h-16 text-white" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="bg-gradient-to-r from-blue-600 via-red-600 to-blue-700 rounded-3xl p-12 text-white relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            }}></div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                                Join Our Aquaculture Team
                            </h3>
                            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                                Discover opportunities to grow with our expanding aquaculture business.
                                We&apos;re always looking for passionate individuals to join our team.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/team"
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    <span>Meet Full Team</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                                >
                                    <span>Get In Touch</span>
                                    <Fish className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
} 