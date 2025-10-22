
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types';
import ProjectCard from '../ui/ProjectCard';
import { staggerContainer, fadeInUp } from '../../lib/motionVariants';
import Button from '../ui/Button';
import { Filter } from 'lucide-react';

const sampleProjects: Project[] = [
    { id: 1, title: 'E-commerce Platform', description: 'A full-featured online shopping experience with payment integration, cart management, and responsive design.', techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe'], imageUrl: 'https://picsum.photos/seed/project1/600/400', category: 'Web' },
    { id: 2, title: 'Design System', description: 'A comprehensive UI kit and design system with reusable components and documentation.', techStack: ['Figma', 'Storybook', 'React'], imageUrl: 'https://picsum.photos/seed/project2/600/400', category: 'UI/UX' },
    { id: 3, title: '3D Product Visualizer', description: 'An interactive 3D model viewer allowing customers to explore products from every angle.', techStack: ['Three.js', 'React-Three-Fiber', 'GSAP'], imageUrl: 'https://picsum.photos/seed/project3/600/400', category: '3D' },
    { id: 4, title: 'Mobile Banking App', description: 'Secure and intuitive mobile banking experience with biometric authentication.', techStack: ['React Native', 'Node.js', 'MongoDB'], imageUrl: 'https://picsum.photos/seed/project4/600/400', category: 'Web' },
    { id: 5, title: 'Portfolio Website', description: 'Modern portfolio showcasing creative work with smooth animations and interactions.', techStack: ['Next.js', 'Framer Motion', 'Tailwind'], imageUrl: 'https://picsum.photos/seed/project5/600/400', category: 'UI/UX' },
    { id: 6, title: 'AR Furniture App', description: 'Augmented reality application for visualizing furniture in your space.', techStack: ['Unity', 'ARKit', 'C#'], imageUrl: 'https://picsum.photos/seed/project6/600/400', category: '3D' },
];

interface ProjectsSectionProps {
    featured?: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ featured = false }) => {
    const [filter, setFilter] = useState<'All' | 'Web' | 'UI/UX' | '3D'>('All');
    
    const categories = ['All', 'Web', 'UI/UX', '3D'] as const;
    
    const filteredProjects = filter === 'All' 
        ? sampleProjects 
        : sampleProjects.filter(p => p.category === filter);
    
    const projectsToShow = featured ? filteredProjects.slice(0, 3) : filteredProjects;

    return (
        <section className="py-20 bg-gradient-to-b from-bg-cream to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {/* Header */}
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <div className="inline-block px-4 py-2 rounded-full bg-card-yellow border border-primary/20 mb-4">
                            <span className="text-sm font-semibold text-brand-dark">
                                My Work
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-brand-dark">
                            {featured ? 'Featured Projects' : 'All Projects'}
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-text-secondary">
                            {featured 
                                ? 'A selection of my best work across web development, design, and 3D experiences.'
                                : 'Explore my complete portfolio of creative projects and technical solutions.'}
                        </p>
                    </motion.div>

                    {/* Filter Buttons */}
                    {!featured && (
                        <motion.div 
                            variants={fadeInUp}
                            className="flex flex-wrap justify-center gap-3 mb-12"
                        >
                            {categories.map((category) => (
                                <motion.button
                                    key={category}
                                    onClick={() => setFilter(category)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-6 py-2 rounded-full font-semibold transition-all ${
                                        filter === category
                                            ? 'bg-primary text-brand-dark shadow-soft'
                                            : 'bg-white text-text-secondary hover:bg-card-yellow border border-gray-light'
                                    }`}
                                >
                                    {category}
                                </motion.button>
                            ))}
                        </motion.div>
                    )}

                    {/* Projects Grid */}
                    <motion.div 
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                    >
                        {projectsToShow.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </motion.div>

                    {/* CTA */}
                    {featured && (
                        <motion.div variants={fadeInUp} className="text-center">
                            <Button to="/projects" variant="secondary">
                                View All Projects
                            </Button>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
