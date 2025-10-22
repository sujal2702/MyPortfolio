
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types';
import { fadeInUp } from '../../lib/motionVariants';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <motion.div
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="rounded-2xl overflow-hidden shadow-soft bg-white group cursor-pointer border border-gray-light hover:shadow-medium transition-all duration-300"
        >
            <div className="relative overflow-hidden h-64">
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Hover Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.liveUrl && (
                        <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-brand-dark hover:bg-primary transition-colors"
                        >
                            <ExternalLink className="w-5 h-5" />
                        </motion.a>
                    )}
                    {project.repoUrl && (
                        <motion.a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-brand-dark hover:bg-primary transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </motion.a>
                    )}
                </div>

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
        </motion.div>
    );
};

export default ProjectCard;