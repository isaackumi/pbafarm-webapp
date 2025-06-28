'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Fish, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        company: [
            { name: 'About Us', href: '/#about' },
            { name: 'Our Services', href: '/#services' },
            { name: 'Contact', href: '/contact' },
            { name: 'Donate', href: '/donate' }
        ],
        services: [
            { name: 'Fresh Tilapia', href: '/#services' },
            { name: 'Local Delivery', href: '/#services' },
            { name: 'Processing', href: '/#services' },
            { name: 'Bulk Orders', href: '/contact' }
        ],
        support: [
            { name: 'FAQ', href: '/contact' },
            { name: 'Order Status', href: '/contact' },
            { name: 'Returns', href: '/contact' },
            { name: 'Help Center', href: '/contact' }
        ]
    }

    const socialLinks = [
        { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: '#' },
        { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#' },
        { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: '#' },
        { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#' }
    ]

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-neutral-900 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-64 h-64 bg-primary-900 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
                <div className="absolute bottom-20 right-20 w-48 h-48 bg-secondary-900 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Footer Content */}
                <div className="py-16">
                    <div className="grid lg:grid-cols-4 gap-12">
                        {/* Company Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="lg:col-span-1"
                        >
                            <Link href="/" className="flex items-center space-x-3 mb-6 group">
                                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300">
                                    <Fish className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                                        PILL BROOK
                                    </h3>
                                    <p className="text-sm text-neutral-400 font-medium">AQUATICS</p>
                                </div>
                            </Link>

                            <p className="text-neutral-300 leading-relaxed mb-6">
                                Leading tilapia farming enterprise in Ghana, providing sustainable,
                                high-quality aquaculture solutions to local communities and businesses.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 text-neutral-300">
                                    <Phone className="w-5 h-5 text-primary-400" />
                                    <span>+233 24 123 4567</span>
                                </div>
                                <div className="flex items-center space-x-3 text-neutral-300">
                                    <Mail className="w-5 h-5 text-primary-400" />
                                    <span>info@pillbrookaquatics.com</span>
                                </div>
                                <div className="flex items-center space-x-3 text-neutral-300">
                                    <MapPin className="w-5 h-5 text-primary-400" />
                                    <span>Gyakiti, Eastern Region, Ghana</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Footer Links */}
                        {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h4 className="text-lg font-semibold text-white mb-6 capitalize">
                                    {category}
                                </h4>
                                <ul className="space-y-3">
                                    {links.map((link, linkIndex) => (
                                        <motion.li
                                            key={link.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (linkIndex * 0.05) }}
                                            viewport={{ once: true }}
                                        >
                                            <Link
                                                href={link.href}
                                                className="text-neutral-300 hover:text-primary-400 transition-colors duration-300 group"
                                            >
                                                <span className="relative">
                                                    {link.name}
                                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
                                                </span>
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="py-8 border-t border-neutral-800"
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div>
                            <h4 className="text-xl font-semibold text-white mb-2">Stay Updated</h4>
                            <p className="text-neutral-300">Subscribe to our newsletter for updates and special offers</p>
                        </div>

                        <div className="flex w-full lg:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 lg:w-80 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-l-xl text-white placeholder-neutral-400 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-gradient-primary text-white font-semibold rounded-r-xl shadow-medium hover:shadow-large transition-all duration-300"
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="py-6 border-t border-neutral-800"
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <div className="text-neutral-400 text-sm">
                            © {currentYear} Pill Brook Aquatics. All rights reserved.
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-300 hover:text-primary-400 hover:bg-neutral-700 transition-all duration-300"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>

                        {/* Back to Top */}
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white shadow-medium hover:shadow-large transition-all duration-300"
                        >
                            <ArrowUp className="w-5 h-5" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Floating CTA */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="fixed bottom-6 right-6 z-50"
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-4 bg-gradient-primary text-white font-semibold rounded-xl shadow-large hover:shadow-glow transition-all duration-300"
                >
                    Order Now
                </motion.button>
            </motion.div>
        </footer>
    )
} 