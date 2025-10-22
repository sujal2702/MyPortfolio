import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../types';
import { X, ExternalLink, Github, Calendar, Tag } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-brand-dark hover:bg-primary hover:text-brand-dark transition-all shadow-lg"
              >
                <X size={20} />
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-gray-100">
                {/* Hero Image */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 rounded-full bg-primary text-brand-dark text-sm font-semibold shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  {/* Title & Links */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-2">
                        {project.title}
                      </h2>
                      <p className="text-text-secondary flex items-center gap-2">
                        <Calendar size={16} />
                        <span className="text-sm">2024</span>
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 rounded-full bg-primary text-brand-dark font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </motion.a>
                      )}
                      {project.repoUrl && (
                        <motion.a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 rounded-full bg-gray-100 text-brand-dark font-semibold flex items-center gap-2 hover:bg-gray-200 transition-colors"
                        >
                          <Github size={18} />
                          Code
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-brand-dark mb-3 flex items-center gap-2">
                      <div className="w-1 h-6 bg-primary rounded-full" />
                      About This Project
                    </h3>
                    <p className="text-text-secondary leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Additional Details */}
                  {project.details && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-brand-dark mb-3 flex items-center gap-2">
                        <div className="w-1 h-6 bg-primary rounded-full" />
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {project.details.split('\n').filter(Boolean).map((detail, index) => (
                          <li key={index} className="flex items-start gap-3 text-text-secondary">
                            <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 bg-primary rounded-full" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="px-4 py-2 rounded-full bg-card-yellow border border-primary/20 text-brand-dark font-semibold text-sm flex items-center gap-2"
                        >
                          <Tag size={14} />
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Challenges & Solutions */}
                  {project.challenges && (
                    <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-card-yellow/30 to-card-teal/30 border border-primary/20">
                      <h3 className="text-xl font-bold text-brand-dark mb-3">
                        Challenges & Solutions
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {project.challenges}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
