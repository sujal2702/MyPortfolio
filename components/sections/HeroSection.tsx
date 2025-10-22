
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Canvas } from '@react-three/fiber';
import Scene from '../3d/Scene';
import { ChevronDown, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
    const name = "Sujal";
    const roles = ["Full-Stack Developer", "UI/UX Designer", "Creative Thinker"];
    const [currentRole, setCurrentRole] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08,
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
                <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-white">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 -z-10" />
            
            {/* Floating Orbs */}
            <motion.div 
                className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
                animate={{ 
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
                className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl"
                animate={{ 
                    y: [0, -40, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center md:text-left"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card-yellow border border-primary/30 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-brand-dark" />
                        <span className="text-sm font-semibold text-brand-dark">
                            Available for freelance
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight text-brand-dark">
                        Hi, I'm
                        <span className="block text-brand-dark mt-2">
                            {name}
                        </span>
                    </h1>

                    {/* Animated Role */}
                    <div className="h-16 mb-8">
                        <motion.h2
                            key={currentRole}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="text-2xl md:text-3xl font-bold text-text-secondary"
                        >
                            {roles[currentRole]}
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-lg text-text-secondary mb-8 max-w-lg"
                    >
                        I craft beautiful digital experiences with clean code and stunning design. 
                        Let's build something extraordinary together.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="flex flex-wrap justify-center md:justify-start gap-4"
                    >
                        <Button to="/projects" variant="primary">
                            View My Work
                        </Button>
                        <Button to="/contact" variant="secondary">
                            Let's Talk
                        </Button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto md:mx-0"
                    >
                        {[
                            { number: '5+', label: 'Years Exp.' },
                            { number: '50+', label: 'Projects' },
                            { number: '30+', label: 'Happy Clients' },
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center md:text-left">
                                <div className="text-3xl font-black text-brand-dark">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-text-tertiary">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="w-full h-96 md:h-[600px] relative"
                >
                    <Suspense fallback={
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl">
                            <div className="animate-pulse text-text-secondary">Loading 3D Scene...</div>
                        </div>
                    }>
                        <Canvas className="rounded-2xl">
                            <Scene />
                        </Canvas>
                    </Suspense>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ChevronDown className="w-8 h-8 text-text-tertiary" />
            </motion.div>
        </section>
    );
};

export default HeroSection;
