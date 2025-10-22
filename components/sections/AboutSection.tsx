
import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Code, Brush, Palette, Rocket, Users, Award, Coffee } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../../lib/motionVariants';

const AboutSection: React.FC<{ isPage?: boolean }> = ({ isPage = false }) => {
    const skills = [
        { name: 'React & Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'UI/UX Design', level: 85 },
        { name: 'Node.js', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Three.js', level: 75 },
    ];

    const highlights = [
        { icon: Award, number: '15+', label: 'Awards Won' },
        { icon: Users, number: '30+', label: 'Happy Clients' },
        { icon: Rocket, number: '50+', label: 'Projects Launched' },
        { icon: Coffee, number: '1000+', label: 'Cups of Coffee' },
    ];

    return (
        <section className={`py-20 ${isPage ? 'bg-white' : 'bg-bg-cream'}`}>
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
                                Get to know me
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-center mb-6 text-brand-dark">
                            About Me
                        </h2>
                        <p className="max-w-3xl mx-auto text-center text-lg text-text-secondary">
                            I'm a passionate developer and designer with a knack for creating engaging and user-friendly digital experiences. 
                            I thrive on solving complex problems and turning ideas into beautiful, functional products.
                        </p>
                    </motion.div>
                    
                    {/* Main Content Cards */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <motion.div 
                            variants={fadeInUp} 
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative overflow-hidden text-center p-8 rounded-2xl bg-card-yellow border border-primary/20 shadow-soft hover:shadow-medium transition-all"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
                            <Brush className="w-14 h-14 mx-auto text-brand-dark mb-4 relative z-10"/>
                            <h3 className="text-2xl font-black mb-3 relative z-10 text-brand-dark">Designer</h3>
                            <p className="text-text-secondary relative z-10">
                                I value simple content structure, clean design patterns, and thoughtful interactions that delight users.
                            </p>
                        </motion.div>
                         <motion.div 
                            variants={fadeInUp} 
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative overflow-hidden text-center p-8 rounded-2xl bg-card-blue border border-accent/20 shadow-soft hover:shadow-medium transition-all"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all" />
                            <Code className="w-14 h-14 mx-auto text-accent mb-4 relative z-10"/>
                            <h3 className="text-2xl font-black mb-3 relative z-10 text-brand-dark">Developer</h3>
                            <p className="text-text-secondary relative z-10">
                                I bring ideas to life in the browser, from static sites to complex web applications with modern tech stacks.
                            </p>
                        </motion.div>
                         <motion.div 
                            variants={fadeInUp} 
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative overflow-hidden text-center p-8 rounded-2xl bg-card-gray border border-gray-light shadow-soft hover:shadow-medium transition-all"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all" />
                            <BrainCircuit className="w-14 h-14 mx-auto text-purple-600 mb-4 relative z-10"/>
                            <h3 className="text-2xl font-black mb-3 relative z-10 text-brand-dark">Problem Solver</h3>
                            <p className="text-text-secondary relative z-10">
                                I love breaking down complex challenges and finding elegant, efficient solutions that make a difference.
                            </p>
                        </motion.div>
                    </div>

                    {/* Skills Progress Bars */}
                    {isPage && (
                        <motion.div variants={fadeInUp} className="mb-16">
                            <h3 className="text-3xl font-bold text-center mb-10 text-brand-dark">Technical Skills</h3>
                            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                {skills.map((skill, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-semibold text-brand-dark">{skill.name}</span>
                                            <span className="text-sm text-text-tertiary">{skill.level}%</span>
                                        </div>
                                        <div className="h-3 bg-card-gray rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-primary"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: idx * 0.1 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Highlights */}
                    <motion.div 
                        variants={fadeInUp}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    >
                        {highlights.map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                className="text-center p-6 rounded-xl bg-white shadow-soft border border-gray-light"
                            >
                                <item.icon className="w-10 h-10 mx-auto text-brand-dark mb-3" />
                                <div className="text-3xl font-black text-brand-dark mb-1">
                                    {item.number}
                                </div>
                                <div className="text-sm text-text-secondary">
                                    {item.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;