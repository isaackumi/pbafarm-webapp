'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Plus, MessageCircle, Phone, Mail,
    Heart, Share2, Download,
    Sparkles, Zap, Target, Users
} from 'lucide-react'

export default function FloatingMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const [hoveredItem, setHoveredItem] = useState<number | null>(null)

    const menuItems = [
        { icon: <MessageCircle className="w-5 h-5" />, label: 'Chat', color: 'bg-blue-500', action: () => console.log('Chat') },
        { icon: <Phone className="w-5 h-5" />, label: 'Call', color: 'bg-green-500', action: () => console.log('Call') },
        { icon: <Mail className="w-5 h-5" />, label: 'Email', color: 'bg-purple-500', action: () => console.log('Email') },
        { icon: <Heart className="w-5 h-5" />, label: 'Order', color: 'bg-red-500', action: () => console.log('Order') },
        { icon: <Share2 className="w-5 h-5" />, label: 'Share', color: 'bg-indigo-500', action: () => console.log('Share') },
        { icon: <Download className="w-5 h-5" />, label: 'Catalog', color: 'bg-orange-500', action: () => console.log('Catalog') },
    ]

    return (
        <div className="fixed bottom-8 left-8 z-50">
            {/* Menu Items */}
            <AnimatePresence>
                {isOpen && (
                    <div className="absolute bottom-16 left-0 space-y-4">
                        {menuItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0, x: -20 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0, x: -20 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20
                                }}
                                onHoverStart={() => setHoveredItem(index)}
                                onHoverEnd={() => setHoveredItem(null)}
                                className="relative"
                            >
                                {/* Tooltip */}
                                <AnimatePresence>
                                    {hoveredItem === index && (
                                        <motion.div
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 10 }}
                                            className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap"
                                        >
                                            {item.label}
                                            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Menu Item */}
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={item.action}
                                    className={`w-14 h-14 ${item.color} rounded-2xl shadow-2xl flex items-center justify-center text-white hover:shadow-3xl transition-all duration-300 relative overflow-hidden group`}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-white/20"
                                        initial={{ scale: 0 }}
                                        whileHover={{ scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <motion.div
                                        animate={{
                                            rotate: hoveredItem === index ? 360 : 0,
                                            scale: hoveredItem === index ? 1.2 : 1
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="relative z-10"
                                    >
                                        {item.icon}
                                    </motion.div>

                                    {/* Particle Effect */}
                                    <AnimatePresence>
                                        {hoveredItem === index && (
                                            <>
                                                {[...Array(6)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                                                        animate={{
                                                            opacity: [0, 1, 0],
                                                            scale: [0, 1, 0],
                                                            x: Math.cos(i * 60 * Math.PI / 180) * 30,
                                                            y: Math.sin(i * 60 * Math.PI / 180) * 30
                                                        }}
                                                        exit={{ opacity: 0, scale: 0 }}
                                                        transition={{ duration: 0.6, delay: i * 0.1 }}
                                                        className="absolute w-2 h-2 bg-white rounded-full"
                                                    />
                                                ))}
                                            </>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                )}
            </AnimatePresence>

            {/* Main Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-16 h-16 bg-gradient-to-r from-blue-600 via-red-600 to-blue-700 rounded-3xl shadow-2xl flex items-center justify-center text-white hover:shadow-3xl transition-all duration-300 overflow-hidden group"
            >
                {/* Background Animation */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500"
                    animate={{
                        background: [
                            "linear-gradient(45deg, #3b82f6, #ef4444)",
                            "linear-gradient(45deg, #ef4444, #3b82f6)",
                            "linear-gradient(45deg, #3b82f6, #ef4444)",
                        ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Icon */}
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                >
                    <Plus className="w-8 h-8" />
                </motion.div>

                {/* Ripple Effect */}
                <motion.div
                    className="absolute inset-0 bg-white/20 rounded-3xl"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: isOpen ? 1.5 : 0,
                        opacity: isOpen ? 0 : 0
                    }}
                    transition={{ duration: 0.6 }}
                />

                {/* Floating Icons */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {[Sparkles, Zap, Target, Users].map((Icon, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0, rotate: 0 }}
                                    animate={{
                                        opacity: [0, 1, 0],
                                        scale: [0, 1, 0],
                                        rotate: 360,
                                        x: Math.cos(index * 90 * Math.PI / 180) * 40,
                                        y: Math.sin(index * 90 * Math.PI / 180) * 40
                                    }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{
                                        duration: 1,
                                        delay: index * 0.2,
                                        repeat: Infinity,
                                        repeatDelay: 2
                                    }}
                                    className="absolute text-blue-400"
                                >
                                    <Icon className="w-4 h-4" />
                                </motion.div>
                            ))}
                        </>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    )
} 