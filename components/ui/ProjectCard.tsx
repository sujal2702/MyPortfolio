import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types';
import { fadeInUp } from '../../lib/motionVariants';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
    return (
        <motion.div
            variants={fadeInUp}
            whileHover={{ 
                y: -25, 
                scale: 1.05,
                rotateZ: 2,
                transition: { 
                    duration: 0.4, 
                    ease: [0.23, 1, 0.32, 1] // Custom easing for smooth motion
                }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className="rounded-2xl overflow-visible shadow-soft bg-white group cursor-pointer border border-gray-light hover:shadow-2xl transition-shadow duration-500 relative"
        >
            {/* Stacked cards effect - Multiple layers for depth */}
            <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-card-yellow/30 to-white rounded-2xl border border-gray-light/50 -z-10"
                style={{ 
                    transform: "translateY(8px) translateX(8px) scale(0.97)",
                    filter: "blur(2px)"
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                transition={{ delay: 0.1 }}
            />
            <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-card-teal/20 to-white rounded-2xl border border-gray-light/30 -z-20"
                style={{ 
                    transform: "translateY(16px) translateX(16px) scale(0.94)",
                    filter: "blur(4px)"
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                transition={{ delay: 0.2 }}
            />
            <motion.div 
                className="absolute inset-0 bg-white/50 rounded-2xl border border-gray-light/20 -z-30"
                style={{ 
                    transform: "translateY(24px) translateX(24px) scale(0.91)",
                    filter: "blur(6px)"
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                transition={{ delay: 0.3 }}
            />
            
            <div className="relative z-10 bg-white rounded-2xl overflow-hidden">
                <div className="relative overflow-hidden h-64">
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary text-brand-dark backdrop-blur-sm">
                        {project.category}
                    </span>
                </div>

                {/* Arrow Icon */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <ArrowUpRight className="w-6 h-6 text-brand-dark" />
                    </div>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-black mb-3 text-brand-dark group-hover:text-brand-dark transition-colors">
                    {project.title}
                </h3>
                <p className="text-text-secondary mb-4 line-clamp-2">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <span 
                            key={tech} 
                            className="text-xs font-semibold bg-card-gray text-text-secondary px-3 py-1.5 rounded-full hover:bg-primary hover:text-brand-dark transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;