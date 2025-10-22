import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Database, Rocket, Globe, Smartphone } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../../lib/motionVariants';

const skillCategories = [
    {
        title: 'Frontend',
        icon: Code2,
        color: 'from-blue-500 to-cyan-500',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
        title: 'Design',
        icon: Palette,
        color: 'from-pink-500 to-rose-500',
        skills: ['Figma', 'Adobe XD', 'UI/UX', 'Prototyping', 'Design Systems']
    },
    {
        title: 'Backend',
        icon: Database,
        color: 'from-green-500 to-emerald-500',
        skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs']
    },
    {
        title: '3D & Animation',
        icon: Rocket,
        color: 'from-purple-500 to-indigo-500',
        skills: ['Three.js', 'React Three Fiber', 'GSAP', 'WebGL', 'Blender']
    },
    {
        title: 'Tools & Platforms',
        icon: Globe,
        color: 'from-orange-500 to-amber-500',
        skills: ['Git', 'Docker', 'AWS', 'Vercel', 'VS Code']
    },
    {
        title: 'Mobile',
        icon: Smartphone,
        color: 'from-teal-500 to-cyan-500',
        skills: ['React Native', 'PWA', 'Responsive Design', 'Mobile-First', 'Cross-Platform']
    },
];

const SkillsSection: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Header */}
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <div className="inline-block px-4 py-2 rounded-full bg-card-yellow border border-primary/20 mb-4">
                            <span className="text-sm font-semibold text-brand-dark">
                                Tech Stack
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-brand-dark">
                            Skills & Expertise
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-text-secondary">
                            A comprehensive toolkit for building modern, scalable, and beautiful digital experiences.
                        </p>
                    </motion.div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillCategories.map((category, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group relative p-6 rounded-2xl bg-gradient-to-br from-bg-cream to-white border border-gray-light shadow-soft hover:shadow-medium transition-all overflow-hidden"
                            >
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                                
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-4 relative z-10">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white`}>
                                        <category.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-black text-brand-dark">
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Skills List */}
                                <div className="flex flex-wrap gap-2 relative z-10">
                                    {category.skills.map((skill, skillIdx) => (
                                        <span
                                            key={skillIdx}
                                            className="px-3 py-1.5 text-sm font-semibold rounded-full bg-white text-text-secondary border border-gray-light hover:border-primary hover:bg-card-yellow transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Stats */}
                    <motion.div 
                        variants={fadeInUp}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
                    >
                        {[
                            { number: '30+', label: 'Technologies' },
                            { number: '5+', label: 'Years Experience' },
                            { number: '50+', label: 'Projects Built' },
                            { number: '100%', label: 'Client Satisfaction' },
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center p-6 rounded-xl bg-card-yellow border border-primary/20">
                                <div className="text-4xl font-black text-brand-dark mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-text-secondary">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
