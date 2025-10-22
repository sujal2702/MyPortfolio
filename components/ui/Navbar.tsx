
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
    { to: '/', name: 'Home' },
    { to: '/about', name: 'About' },
    { to: '/projects', name: 'Projects' },
    { to: '/showcase', name: 'Showcase' },
    { to: '/contact', name: 'Contact' },
];

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const activeLinkClass = "font-bold text-brand-dark relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary";
    const inactiveLinkClass = "text-text-secondary hover:text-brand-dark transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all";
    
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? 'py-3 shadow-soft backdrop-blur-xl bg-white/95 border-b border-gray-light/50' 
                    : 'py-5 bg-white/80'
            }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link 
                    to="/" 
                    className="flex items-center gap-2 text-2xl font-black tracking-tighter text-brand-dark hover:opacity-80 transition-opacity group"
                >
                    <motion.div
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                        className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center"
                    >
                        <Sparkles className="w-5 h-5 text-brand-dark" />
                    </motion.div>
                    <span className="text-brand-dark font-black">
                        Sujal
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <NavLink 
                            key={link.to} 
                            to={link.to} 
                            className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <motion.button 
                        onClick={() => setIsOpen(!isOpen)}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-lg bg-card-gray flex items-center justify-center"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden mt-4 px-4 pb-6 space-y-2 backdrop-blur-xl bg-white/95 border-t border-gray-light/50"
                >
                    {navLinks.map((link) => (
                        <NavLink 
                            key={link.to} 
                            to={link.to} 
                            className={({ isActive }) => 
                                `block py-3 px-4 text-center rounded-lg transition-all ${
                                    isActive 
                                        ? 'bg-card-yellow text-brand-dark font-bold' 
                                        : 'text-text-secondary hover:bg-card-gray'
                                }`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;