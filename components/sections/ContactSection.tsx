
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../lib/motionVariants';
import Button from '../ui/Button';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactSection: React.FC<{ isPage?: boolean }> = ({ isPage = false }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 3000);
        }, 500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'hello@sujal.dev' },
        { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
        { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
    ];

    return (
        <section className={`py-20 ${!isPage && 'bg-gradient-to-b from-white to-bg-cream'}`}>
            <div className="container mx-auto px-4">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Header */}
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <div className="inline-block px-4 py-2 rounded-full bg-card-yellow  border border-primary/20 mb-4">
                            <span className="text-sm font-semibold text-brand-dark ">
                                Let's Connect
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-brand-dark ">
                            Let's Build Something Great
                        </h2>
                        <p className="text-lg text-text-secondary  max-w-2xl mx-auto">
                            Have a project in mind or just want to chat? I'd love to hear from you.
                            Drop me a message and let's create something amazing together.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <motion.div variants={fadeInUp} className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-brand-dark ">Get in Touch</h3>
                                <p className="text-text-secondary  mb-8">
                                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactInfo.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ x: 10 }}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-white  shadow-soft border border-gray-light "
                                    >
                                        <div className="w-12 h-12 rounded-full bg-card-yellow  flex items-center justify-center">
                                            <item.icon className="w-6 h-6 text-brand-dark " />
                                        </div>
                                        <div>
                                            <div className="text-sm text-text-tertiary ">{item.label}</div>
                                            <div className="font-semibold text-brand-dark ">{item.value}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="pt-8">
                                <h4 className="font-semibold mb-4">Follow Me</h4>
                                <div className="flex gap-4">
                                    {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((social) => (
                                        <motion.a
                                            key={social}
                                            href="#"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            className="w-12 h-12 rounded-full bg-card-gray  flex items-center justify-center text-text-secondary  hover:bg-primary hover:text-brand-dark   transition-colors"
                                        >
                                            {social[0]}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div variants={fadeInUp}>
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center bg-green-50  rounded-2xl p-12 border border-green-200 "
                                >
                                    <CheckCircle className="w-16 h-16 text-green-600  mb-4" />
                                    <h3 className="text-2xl font-bold text-green-800  mb-2">Message Sent!</h3>
                                    <p className="text-green-600  text-center">
                                        Thanks for reaching out. I'll get back to you soon!
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-4 rounded-xl bg-white  border-2 border-gray-200  focus:border-primary  outline-none transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-4 rounded-xl bg-white  border-2 border-gray-200  focus:border-primary  outline-none transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold mb-2">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full p-4 rounded-xl bg-white  border-2 border-gray-200  focus:border-primary  outline-none transition-colors resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-primary hover:bg-primary-dark text-brand-dark font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 shadow-soft hover:shadow-medium"
                                    >
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </motion.button>
                                </form>
                            )}
                        </motion.div>
                    </div>

                    {/* CTA for non-page version */}
                    {!isPage && (
                        <motion.div variants={fadeInUp} className="text-center mt-16">
                            <Button to="/contact" variant="primary">
                                Get In Touch
                            </Button>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
