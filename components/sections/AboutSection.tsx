
import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Code, Brush, Palette, Rocket, Users, Award, Coffee } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../../lib/motionVariants';

const AboutSection: React.FC<{ isPage?: boolean }> = ({ isPage = false }) => {
    const skills = [
        { name: 'React.js & MERN Stack', level: 85 },
        { name: 'JavaScript & C++', level: 88 },
        { name: 'Node.js & Express', level: 85 },
        { name: 'MongoDB & MySQL', level: 82 },
        { name: 'DSA & OOP', level: 80 },
        { name: 'REST APIs & Flask', level: 78 },
    ];

    const highlights = [
        { icon: Code, number: '3+', label: 'Major Projects' },
        { icon: Award, number: '8+', label: 'Certifications' },
        { icon: Users, number: '2+', label: 'Years Learning' },
        { icon: Coffee, number: '1000+', label: 'Hours of Coding' },
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
                            Computer Science student at Dayananda Sagar Institution, Bengaluru (GPA: 8.59). 
                            Passionate Full Stack Developer specializing in MERN stack, building scalable web applications with modern technologies and creating intuitive user experiences that solve real-world problems.
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
                                Creating clean, modern interfaces with Tailwind CSS and responsive design, focusing on user experience and accessible UI patterns.
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
                                Building full-stack applications with React, Node.js, Express, and MongoDB. Experienced in RESTful APIs and modern development practices.
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
                                Proficient in DSA and OOP concepts. Building applications with strong problem-solving skills and efficient algorithmic thinking.
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