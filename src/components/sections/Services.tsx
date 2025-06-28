'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { Fish, Award, Leaf, Truck, Clock, Package, MapPin } from 'lucide-react'

export default function Services() {
    const services = [
        {
            icon: <Fish className="w-8 h-8" />,
            title: 'Fresh Tilapia',
            description: 'Premium quality tilapia harvested daily from our sustainable aquaculture farm',
            features: ['Live fish', 'Fresh fillets', 'Whole fish', 'Premium grade'],
            color: 'bg-gradient-primary',
            accent: 'text-primary-600'
        },
        {
            icon: <Truck className="w-8 h-8" />,
            title: 'Local Delivery',
            description: 'Fast and reliable delivery service to local communities and businesses',
            features: ['Same day delivery', 'Local pickup', 'Bulk orders', 'Scheduled delivery'],
            color: 'bg-gradient-secondary',
            accent: 'text-secondary-600'
        },
        {
            icon: <Package className="w-8 h-8" />,
            title: 'Processing Services',
            description: 'Professional fish processing and packaging to meet your specific needs',
            features: ['Custom packaging', 'Size grading', 'Quality control', 'Hygienic processing'],
            color: 'bg-gradient-accent',
            accent: 'text-accent-600'
        }
    ]

    const benefits = [
        {
            icon: <Leaf className="w-6 h-6" />,
            title: 'Sustainable',
            description: 'Environmentally responsible aquaculture practices'
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: 'Quality Assured',
            description: 'Highest standards in fish farming and processing'
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: 'Fresh Daily',
            description: 'Harvested and delivered fresh every day'
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: 'Local Source',
            description: 'Supporting local economy and communities'
        }
    ]

    return (
        <section id="services" className="py-20 bg-neutral-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
                <div className="absolute bottom-20 right-20 w-48 h-48 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center space-x-3 bg-primary-50 px-6 py-3 rounded-full shadow-soft border border-primary-200 mb-6">
                        <Fish className="w-5 h-5 text-primary-600" />
                        <span className="font-semibold text-primary-700">OUR SERVICES</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">
                        Complete <span className="bg-gradient-primary bg-clip-text text-transparent">Aquaculture</span> Solutions
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                        From farm to table, we provide comprehensive tilapia farming and delivery services
                        to meet all your aquaculture needs in Ghana.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="bg-white p-8 rounded-2xl shadow-soft border border-neutral-200 hover:shadow-large transition-all duration-300 h-full group-hover:-translate-y-2">
                                {/* Service Icon */}
                                <div className={`w-16 h-16 ${service.color} rounded-xl shadow-medium flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {service.icon}
                                </div>

                                {/* Service Content */}
                                <h3 className="text-2xl font-bold text-neutral-900 mb-4">{service.title}</h3>
                                <p className="text-neutral-600 leading-relaxed mb-6">{service.description}</p>

                                {/* Features List */}
                                <ul className="space-y-3">
                                    {service.features.map((feature, featureIndex) => (
                                        <motion.li
                                            key={feature}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: (index * 0.2) + (featureIndex * 0.1) }}
                                            viewport={{ once: true }}
                                            className="flex items-center space-x-3"
                                        >
                                            <div className={`w-2 h-2 ${service.color.replace('bg-gradient-', 'bg-')} rounded-full`}></div>
                                            <span className="text-neutral-700 font-medium">{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-8 w-full px-6 py-4 bg-white text-neutral-900 font-semibold rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-neutral-200 hover:border-primary-300"
                                >
                                    Learn More
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Benefits Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-gradient-primary p-8 rounded-2xl shadow-large"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-white mb-4">Why Choose PBA?</h3>
                        <p className="text-primary-100 text-lg">
                            The advantages that set us apart in the aquaculture industry
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl shadow-medium flex items-center justify-center text-white mx-auto mb-4">
                                    {benefit.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                                <p className="text-primary-100 leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Process Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-neutral-900 mb-6">Our Process</h3>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                            From farm to your table - our complete aquaculture process
                        </p>
                    </div>

                    <div className="relative">
                        {/* Process Flow Line */}
                        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-secondary-200 to-accent-200 transform -translate-y-1/2 z-0"></div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                            {[
                                {
                                    step: '01',
                                    title: 'Farming',
                                    description: 'Sustainable tilapia farming in our state-of-the-art aquaculture facility',
                                    icon: <Fish className="w-8 h-8" />,
                                    color: 'bg-gradient-primary',
                                    details: ['Water quality monitoring', 'Optimal feeding schedules', 'Health management', 'Growth tracking']
                                },
                                {
                                    step: '02',
                                    title: 'Harvesting',
                                    description: 'Daily fresh harvest using the most hygienic and efficient methods',
                                    icon: <Package className="w-8 h-8" />,
                                    color: 'bg-gradient-secondary',
                                    details: ['Size grading', 'Quality assessment', 'Hygienic handling', 'Temperature control']
                                },
                                {
                                    step: '03',
                                    title: 'Processing',
                                    description: 'Professional processing and quality control to ensure premium standards',
                                    icon: <Award className="w-8 h-8" />,
                                    color: 'bg-gradient-accent',
                                    details: ['Quality inspection', 'Custom processing', 'Safe packaging', 'Cold chain maintenance']
                                },
                                {
                                    step: '04',
                                    title: 'Delivery',
                                    description: 'Fast and reliable delivery to your doorstep or business location',
                                    icon: <Truck className="w-8 h-8" />,
                                    color: 'bg-gradient-primary',
                                    details: ['Same day delivery', 'Local pickup options', 'Bulk order handling', 'Customer satisfaction']
                                }
                            ].map((process, index) => (
                                <motion.div
                                    key={process.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="relative group"
                                >
                                    <div className="bg-white p-6 rounded-2xl shadow-soft border border-neutral-200 text-center hover:shadow-large transition-all duration-300 group-hover:-translate-y-2 relative z-10">
                                        {/* Step Number */}
                                        <div className="text-4xl font-bold text-primary-600 mb-4">{process.step}</div>

                                        {/* Icon */}
                                        <div className={`w-16 h-16 ${process.color} rounded-xl shadow-medium flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            {process.icon}
                                        </div>

                                        <h4 className="text-xl font-bold text-neutral-900 mb-3">{process.title}</h4>
                                        <p className="text-neutral-600 text-sm leading-relaxed mb-4">{process.description}</p>

                                        {/* Process Details */}
                                        <div className="space-y-2">
                                            {process.details.map((detail, detailIndex) => (
                                                <motion.div
                                                    key={detail}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.4, delay: (index * 0.2) + (detailIndex * 0.1) }}
                                                    viewport={{ once: true }}
                                                    className="flex items-center space-x-2 text-xs"
                                                >
                                                    <div className={`w-2 h-2 ${process.color.replace('bg-gradient-', 'bg-')} rounded-full`}></div>
                                                    <span className="text-neutral-600 font-medium">{detail}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Connector Arrow */}
                                    {index < 3 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 transform -translate-y-1/2 z-20">
                                            <div className="w-full h-full bg-white rounded-full shadow-medium flex items-center justify-center">
                                                <div className="w-4 h-4 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"></div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Process Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-12 bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-2xl border border-primary-100"
                    >
                        <div className="text-center">
                            <h4 className="text-2xl font-bold text-neutral-900 mb-4">Quality Assured Every Step</h4>
                            <p className="text-neutral-600 max-w-3xl mx-auto">
                                Our comprehensive process ensures that every tilapia reaches your table with the highest quality standards.
                                From sustainable farming practices to careful processing and reliable delivery, we maintain excellence throughout the entire journey.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="bg-white p-8 rounded-2xl shadow-large border border-neutral-200">
                        <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                            Ready to Experience Premium Tilapia?
                        </h3>
                        <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
                            Contact us today to place your order or learn more about our aquaculture services
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl shadow-medium hover:shadow-large transition-all duration-300"
                            >
                                Order Now
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-neutral-200"
                            >
                                Contact Us
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
} 