
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
    { icon: <Github />, url: 'https://github.com/itzsujal', label: 'GitHub' },
    { icon: <Linkedin />, url: 'https://linkedin.com/in/itzsujal', label: 'LinkedIn' },
    { icon: <Twitter />, url: 'https://twitter.com/itzsujal', label: 'Twitter' },
    { icon: <Mail />, url: 'mailto:hello@sujal.dev', label: 'Email' },
];

const Footer: React.FC = () => {
    return (
        <footer className="relative py-12 bg-gradient-to-b from-white to-bg-cream border-t border-gray-light">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <div>
                        <h3 className="text-2xl font-black mb-3 text-brand-dark">
                            Sujal
                        </h3>
                        <p className="text-sm text-text-secondary">
                            Crafting digital experiences with passion and precision.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-3 text-brand-dark">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a 
                                        href={`#/${link.toLowerCase()}`}
                                        className="text-sm text-text-secondary hover:text-brand-dark transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="font-bold mb-3 text-brand-dark">Connect</h4>
                        <div className="flex gap-3">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.15, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 rounded-full bg-card-gray flex items-center justify-center text-text-secondary hover:bg-primary hover:text-brand-dark transition-colors"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-light flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-text-secondary flex items-center gap-2">
                        &copy; {new Date().getFullYear()} Sujal. Made with 
                        <Heart className="w-4 h-4 text-red-500 fill-current inline" />
                        and ☕
                    </p>
                    <div className="flex gap-6 text-sm text-text-secondary">
                        <a href="#" className="hover:text-brand-dark transition-colors">Privacy</a>
                        <a href="#" className="hover:text-brand-dark transition-colors">Terms</a>
                        <a href="#" className="hover:text-brand-dark transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
