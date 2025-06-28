'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp, Heart } from 'lucide-react'

export default function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0)
    const [showBackToTop, setShowBackToTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = (window.scrollY / totalHeight) * 100
            setScrollProgress(progress)
            setShowBackToTop(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 z-50 origin-left"
                style={{ scaleX: scrollProgress / 100 }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: scrollProgress / 100 }}
                transition={{ duration: 0.1 }}
            />

            {/* Back to Top Button */}
            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        onClick={scrollToTop}
                        className="fixed bottom-6 right-6 z-50 group"
                        aria-label="Back to top"
                    >
                        <div className="relative">
                            {/* Background with gradient */}
                            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-2xl shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-110 flex items-center justify-center">
                                <ChevronUp className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform duration-300" />
                            </div>

                            {/* Animated border */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm group-hover:blur-md"></div>
                        </div>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Floating Heart */}
            <motion.div
                animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="fixed bottom-6 left-6 z-40 pointer-events-none"
            >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg opacity-60">
                    <Heart className="w-4 h-4 text-white" />
                </div>
            </motion.div>
        </>
    )
} 