'use client';

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Fish, Award, Users, Leaf, Target, CheckCircle, Star } from 'lucide-react'
import Image from 'next/image'

export default function About() {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 1000], [0, 100])
    const opacity = useTransform(scrollY, [0, 500], [1, 0.8])

    const features = [
        {
            icon: <Fish className="w-6 h-6" />,
            title: 'Fresh Harvest',
            description: 'Daily fresh tilapia from our sustainable aquaculture farm',
            color: 'bg-gradient-primary'
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: 'Premium Quality',
            description: 'Highest quality standards in fish farming and processing',
            color: 'bg-gradient-secondary'
        },
        {
            icon: <Leaf className="w-6 h-6" />,
            title: 'Sustainable',
            description: 'Environmentally conscious farming practices',
            color: 'bg-gradient-accent'
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: 'Local Community',
            description: 'Supporting local economy and employment',
            color: 'bg-gradient-primary'
        }
    ]

    const stats = [
        { number: '5+', label: 'Years Experience', icon: <Target className="w-5 h-5" /> },
        { number: '1000+', label: 'Fish Delivered', icon: <Fish className="w-5 h-5" /> },
        { number: '50+', label: 'Local Jobs', icon: <Users className="w-5 h-5" /> },
        { number: '100%', label: 'Fresh Guarantee', icon: <CheckCircle className="w-5 h-5" /> }
    ]

    return (
        <section id="about" className="py-24 bg-gradient-subtle relative overflow-hidden">
            {/* Enhanced Background Elements */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0"
            >
                <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float"></div>
                <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float" style={{ animationDelay: '1s' }}></div>

                {/* Enhanced Geometric Elements */}
                <motion.div
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/4 right-1/4 w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg opacity-20"
                ></motion.div>
                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full opacity-20"
                ></motion.div>
            </motion.div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Enhanced Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.div
                        className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-glass border border-white/20 mb-8"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Fish className="w-5 h-5 text-primary-600" />
                        <span className="font-semibold text-primary-700">ABOUT PBA</span>
                    </motion.div>
                    <motion.h2
                        className="text-5xl lg:text-7xl font-bold text-neutral-900 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Leading <span className="bg-gradient-hero bg-clip-text text-transparent animate-gradient-x">Tilapia</span> Farm in Ghana
                    </motion.h2>
                    <motion.p
                        className="text-xl lg:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Pill Brook Aquatics is a premier tilapia farming enterprise located in Gyakiti, Eastern Region, Ghana.
                        We specialize in sustainable aquaculture practices and deliver the freshest, highest-quality tilapia to our customers.
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    {/* Enhanced Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div>
                            <motion.h3
                                className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                Our <span className="text-secondary-600">Mission</span>
                            </motion.h3>
                            <motion.p
                                className="text-xl text-neutral-600 leading-relaxed mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                To provide sustainable, high-quality tilapia while supporting local communities and preserving our environment.
                                We believe in responsible aquaculture that benefits both people and the planet.
                            </motion.p>
                            <motion.p
                                className="text-xl text-neutral-600 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                Under the leadership of CEO John Domozoro, we&apos;ve built a reputation for excellence in fish farming,
                                serving both local markets and contributing to Ghana&apos;s aquaculture industry.
                            </motion.p>
                        </div>

                        {/* Enhanced Features Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 300 }}
                                    viewport={{ once: true }}
                                    className="group"
                                    whileHover={{ scale: 1.02, y: -5 }}
                                >
                                    <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-glass border border-white/20 hover:shadow-large transition-all duration-300 group-hover:bg-white/95">
                                        <motion.div
                                            className={`w-12 h-12 ${feature.color} rounded-xl shadow-medium flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            {feature.icon}
                                        </motion.div>
                                        <h4 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">{feature.title}</h4>
                                        <p className="text-neutral-600 text-sm leading-relaxed">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Enhanced Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-glass border border-white/20">
                            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-2xl">
                                <Image
                                    src="/images/cages.jpg"
                                    alt="PBA Tilapia Farm - Modern Aquaculture"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                            </div>
                        </div>

                        {/* Enhanced Floating Info Card */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", type: "spring", stiffness: 300 }}
                            className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-glass border border-white/20 max-w-xs"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="flex items-center space-x-3 mb-3">
                                <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center shadow-medium">
                                    <Star className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-neutral-900">Modern Aquaculture</h4>
                                    <p className="text-sm text-neutral-600">State-of-the-art facilities</p>
                                </div>
                            </div>
                            <p className="text-sm text-neutral-600 leading-relaxed">
                                Our advanced cage system ensures optimal growth conditions and sustainable farming practices.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Enhanced Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-gradient-hero p-10 rounded-3xl shadow-large relative overflow-hidden"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                    </div>

                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <motion.h3
                                className="text-4xl font-bold text-white mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                Our Impact
                            </motion.h3>
                            <motion.p
                                className="text-primary-100 text-xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                Numbers that speak for our commitment to excellence
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 300 }}
                                    viewport={{ once: true }}
                                    className="text-center group"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <motion.div
                                        className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl shadow-medium flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {stat.icon}
                                    </motion.div>
                                    <div className="text-3xl font-bold text-white mb-2 group-hover:text-primary-200 transition-colors duration-300">{stat.number}</div>
                                    <div className="text-primary-100 font-medium">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
} 