'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle } from 'lucide-react';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: "info@seffcomconsult.com",
            link: "mailto:info@seffcomconsult.com"
        },
        {
            icon: Phone,
            title: "Phone",
            value: "+233 20 123 4567",
            link: "tel:+233201234567"
        },
        {
            icon: MapPin,
            title: "Location",
            value: "Accra, Ghana",
            link: "https://maps.google.com/?q=Accra,Ghana"
        },
        {
            icon: Clock,
            title: "Working Hours",
            value: "Mon - Fri: 9:00 AM - 5:00 PM",
            link: null
        }
    ];

    return (
        <section id="contact" ref={ref} className="min-h-screen flex items-center bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/3 left-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-20"
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, -90, -180],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-0 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-15"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [180, 90, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-6xl mx-auto"
                >
                    {/* Header */}
                    <motion.div variants={itemVariants} className="text-center mb-20">
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <CheckCircle className="w-4 h-4" />
                            Get In Touch
                        </motion.div>

                        <motion.h2
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 flex items-center justify-center gap-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                                className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center"
                            >
                                <MessageSquare className="w-6 h-6 text-primary-600" />
                            </motion.div>
                            <span>Contact Us</span>
                        </motion.h2>

                        <motion.p
                            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        >
                            We&apos;d love to hear from you! Send us a message and we&apos;ll respond as soon as possible.
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                                        placeholder="John Doe"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                >
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                                        placeholder="john@example.com"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                                        placeholder="How can we help?"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.8, delay: 0.7 }}
                                >
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                                        placeholder="Your message here..."
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                >
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:bg-primary-600 transition-all duration-300 text-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                            </>
                                        )}
                                    </button>
                                </motion.div>
                            </form>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-8"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            <motion.div
                                className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
                                <div className="space-y-6">
                                    {contactInfo.map((info, index) => (
                                        <motion.a
                                            key={info.title}
                                            href={info.link || '#'}
                                            target={info.link ? "_blank" : undefined}
                                            rel={info.link ? "noopener noreferrer" : undefined}
                                            className="flex items-start gap-4 group p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                                        >
                                            <div className="p-3 bg-primary-100 rounded-xl group-hover:bg-primary-500 transition-all duration-300">
                                                <info.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                                                    {info.title}
                                                </h4>
                                                <p className="text-gray-600 group-hover:text-primary-600 transition-colors duration-300">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.8, delay: 0.9 }}
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
                                <p className="text-gray-600 mb-6">Stay connected with us on social media for updates and inspiration.</p>
                                <div className="flex gap-4">
                                    {/* Add social media links here */}
                                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center hover:bg-primary-500 transition-colors duration-300 cursor-pointer">
                                        <span className="text-primary-600 font-bold">F</span>
                                    </div>
                                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center hover:bg-primary-500 transition-colors duration-300 cursor-pointer">
                                        <span className="text-primary-600 font-bold">T</span>
                                    </div>
                                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center hover:bg-primary-500 transition-colors duration-300 cursor-pointer">
                                        <span className="text-primary-600 font-bold">I</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 