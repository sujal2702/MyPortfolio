import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import AboutSection from '../components/sections/AboutSection';
import SkillIcon from '../components/ui/SkillIcon';
import { Skill } from '../types';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../lib/motionVariants';
import { Figma, GitBranch, Atom, Bot, Cloud, Database, Code, Brush } from 'lucide-react';

const skills: Skill[] = [
    { name: 'React', Icon: Atom },
    { name: 'TypeScript', Icon: Code },
    { name: 'Tailwind CSS', Icon: Brush },
    { name: 'Figma', Icon: Figma },
    { name: 'Git', Icon: GitBranch },
    { name: 'GenAI', Icon: Bot},
    { name: 'Cloud', Icon: Cloud },
    { name: 'Databases', Icon: Database },
];

const About: React.FC = () => {
    return (
        <PageWrapper>
            <div className="pt-24">
                <AboutSection isPage />
                 <section className="py-20 bg-bg-cream">
                    <div className="container mx-auto px-4">
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-dark">
                                My Journey
                            </motion.h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                                {skills.map((skill) => (
                                    <SkillIcon key={skill.name} skill={skill} />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </PageWrapper>
    );
};

// FIX: Removed dummy icon definitions for Code and Brush as they are now imported from lucide-react.

export default About;