'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Play, Star, Fish, ShoppingCart, Award, ChevronDown, ChevronLeft, ChevronRight, CheckCircle, MapPin } from 'lucide-react'

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 200])

  const words = ['Fresh', 'Quality', 'Sustainable', 'Local']
  const heroImages = [
    { src: '/images/tilapia.jpg', alt: 'Fresh Tilapia Fish', title: 'Fresh Tilapia', subtitle: 'Premium quality fish' },
    { src: '/images/cages.jpg', alt: 'Fish Farming Cages', title: 'Modern Aquaculture', subtitle: 'Sustainable farming methods' },
    { src: '/images/cage2.jpg', alt: 'Fish Cage System', title: 'Advanced Systems', subtitle: 'State-of-the-art facilities' },
  ]

  const features = [
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Fresh Daily Harvest' },
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Premium Quality' },
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Local Delivery' },
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Sustainable Farming' },
  ]

  const stats = [
    { number: '500+', label: 'Happy Customers', icon: <Star className="w-5 h-5" /> },
    { number: '1000+', label: 'Fish Delivered', icon: <Fish className="w-5 h-5" /> },
    { number: '5.0', label: 'Star Rating', icon: <Award className="w-5 h-5" /> },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [words.length])

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(imageInterval)
  }, [heroImages.length])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section className="relative min-h-screen bg-gradient-subtle overflow-hidden">
      {/* Enhanced Background Elements with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-primary-400/30 to-secondary-400/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-secondary-400/30 to-accent-400/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-8 left-40 w-80 h-80 bg-gradient-to-br from-accent-400/30 to-primary-400/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>

        {/* Enhanced Geometric Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-32 right-32 w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg opacity-20"
        ></motion.div>
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-32 w-12 h-12 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full opacity-20"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-br from-accent-500 to-primary-500 rounded-lg opacity-20"
        ></motion.div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Enhanced Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Enhanced Badge with Shimmer Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative inline-flex items-center space-x-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-glass border border-white/20 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-neutral-700 relative z-10">PILL BROOK AQUATICS</span>
            </motion.div>

            {/* Enhanced Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl lg:text-8xl font-bold text-neutral-900 leading-tight"
            >
              <motion.span
                className="block"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Fresh
              </motion.span>
              <motion.span
                className="block bg-gradient-hero bg-clip-text text-transparent animate-gradient-x"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Tilapia
              </motion.span>
              <motion.span
                className="block text-secondary-600"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                From Ghana
              </motion.span>
            </motion.h1>

            {/* Enhanced Animated Word */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-3xl lg:text-4xl font-semibold text-accent-600"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                  className="inline-block"
                >
                  {words[currentWord]}
                </motion.span>
              </AnimatePresence>
              <span className="text-neutral-700"> Tilapia</span>
            </motion.div>

            {/* Enhanced Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl lg:text-2xl text-neutral-600 max-w-lg leading-relaxed"
            >
              Experience the finest quality tilapia from our sustainable aquaculture farm in Gyakiti, Eastern Region, Ghana.
              Fresh, healthy, and delivered to your doorstep.
            </motion.p>

            {/* Enhanced Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1, type: "spring", stiffness: 300 }}
                  className="flex items-center space-x-3 text-neutral-700 group"
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <motion.div
                    className="text-accent-500"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <span className="text-sm font-medium group-hover:text-accent-600 transition-colors duration-300">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons with Magnetic Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(14, 165, 233, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl shadow-large hover:shadow-glow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative flex items-center space-x-2">
                  Order Now
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </motion.div>
                </span>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(239, 68, 68, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white/90 backdrop-blur-md text-primary-600 font-semibold rounded-xl shadow-glass hover:shadow-glow transition-all duration-300 border border-white/20"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Our Story</span>
                </motion.div>
              </motion.button>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex justify-center lg:justify-start space-x-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1, type: "spring", stiffness: 300 }}
                  className="text-center group"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-2xl font-bold text-primary-600 mb-1 group-hover:text-primary-700 transition-colors duration-300">{stat.number}</div>
                  <div className="text-sm text-neutral-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Image Slider with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-glass border border-white/20">
              <div className="bg-white/50 backdrop-blur-sm overflow-hidden relative h-96 lg:h-[500px] rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={heroImages[currentImage].src}
                    alt={heroImages[currentImage].alt}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Enhanced Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* Enhanced Image Title */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-glass border border-white/20">
                  <h3 className="font-semibold text-neutral-900">{heroImages[currentImage].title}</h3>
                  <p className="text-sm text-neutral-600">{heroImages[currentImage].subtitle}</p>
                </div>

                {/* Enhanced Navigation Arrows */}
                <motion.button
                  onClick={prevImage}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.95)" }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/95 backdrop-blur-md rounded-full shadow-glass flex items-center justify-center text-neutral-700 hover:text-primary-600 transition-all duration-300 border border-white/20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                <motion.button
                  onClick={nextImage}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.95)" }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/95 backdrop-blur-md rounded-full shadow-glass flex items-center justify-center text-neutral-700 hover:text-primary-600 transition-all duration-300 border border-white/20"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>

                {/* Enhanced Dots Indicator */}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  {heroImages.map((_, _index) => (
                    <motion.button
                      key={_index}
                      onClick={() => setCurrentImage(_index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${_index === currentImage ? 'bg-primary-500 scale-125 shadow-glow' : 'bg-white/50 hover:bg-white/75'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Floating Cards with Glassmorphism */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-glass border border-white/20"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center shadow-medium">
                  <Fish className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">Fresh Fish</div>
                  <div className="text-sm text-neutral-600">Daily harvest</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-glass border border-white/20"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center shadow-medium">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">Quality</div>
                  <div className="text-sm text-neutral-600">Premium grade</div>
                </div>
              </div>
            </motion.div>

            {/* New Floating Info Card */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 -right-8 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-glass border border-white/20"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-medium">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">Local</div>
                  <div className="text-sm text-neutral-600">Ghana grown</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-primary-600 cursor-pointer group"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm font-medium group-hover:text-primary-700 transition-colors duration-300">Scroll to explore</span>
            <motion.div
              className="w-6 h-6 bg-white/90 backdrop-blur-md rounded-full shadow-glass flex items-center justify-center border border-white/20"
              whileHover={{ boxShadow: "0 0 20px rgba(14, 165, 233, 0.3)" }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => {
          const left = ((i * 7) % 100) + (i % 3) * 10
          const top = ((i * 11) % 100) + (i % 5) * 8
          const delay = (i * 0.2) % 5
          const duration = 10 + (i % 5) * 2
          const size = 2 + (i % 3) * 2

          return (
            <motion.div
              key={i}
              className={`absolute bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-30`}
              animate={{
                x: [0, (i % 3 - 1) * 50],
                y: [0, (i % 2 - 0.5) * 50],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
              }}
            />
          )
        })}
      </div>
    </section>
  )
}

