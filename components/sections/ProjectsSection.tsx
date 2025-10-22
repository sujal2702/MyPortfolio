
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types';
import ProjectCard from '../ui/ProjectCard';
import ProjectModal from '../ui/ProjectModal';
import { staggerContainer, fadeInUp } from '../../lib/motionVariants';
import Button from '../ui/Button';
import { Filter } from 'lucide-react';

const sampleProjects: Project[] = [
    { 
        id: 1, 
        title: 'SkillSync - Internal Talent Discovery Platform', 
        description: 'A comprehensive web application designed to streamline internal talent discovery and project matching within organizations using MERN stack.', 
        techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API', 'JWT'], 
        imageUrl: 'https://picsum.photos/seed/skillsync/600/400', 
        category: 'Web',
        details: 'Employee skill profiling and portfolio management\nSmart project-employee matching algorithm\nAdmin dashboard for team management\nRole-based access control with JWT authentication\nReal-time skill search and filtering\nEmployee availability tracking\nProject assignment workflow\nPerformance analytics dashboard',
        challenges: 'Implementing an efficient matching algorithm that considers multiple factors (skills, availability, experience) while maintaining fast query performance. Used MongoDB aggregation pipelines and indexing strategies to optimize search across large datasets.',
        liveUrl: 'https://github.com/sujal2702/SkillSync-Infosys',
        repoUrl: 'https://github.com/sujal2702/SkillSync-Infosys'
    },
    { 
        id: 2, 
        title: 'InsightDocs - AI-Powered Document Analysis', 
        description: 'An intelligent document analysis system that extracts and analyzes data from PDFs using AI, providing actionable insights and automated reporting.', 
        techStack: ['Flask', 'Python', 'PyMuPDF', 'Ollama AI', 'REST API'], 
        imageUrl: 'https://picsum.photos/seed/insightdocs/600/400', 
        category: 'Web',
        details: 'PDF text extraction using PyMuPDF\nAI-powered content analysis with Ollama\nAutomated data extraction and categorization\nIntelligent document summarization\nRESTful API for document processing\nSupport for multiple document formats\nExport results to structured formats\nBatch processing capabilities',
        challenges: 'Ensuring accurate text extraction from complex PDF layouts and integrating AI for meaningful analysis. Implemented custom parsing logic for tables and multi-column layouts. Fine-tuned AI prompts to extract relevant insights while managing API rate limits and response times.',
        liveUrl: 'https://github.com/sujal2702/InsightDocs',
        repoUrl: 'https://github.com/sujal2702/InsightDocs'
    },
    { 
        id: 3, 
        title: 'LeetMetric - LeetCode Statistics Tracker', 
        description: 'A comprehensive statistics tracking platform for LeetCode users, visualizing coding progress with interactive charts and performance metrics.', 
        techStack: ['JavaScript', 'HTML5', 'CSS3', 'GraphQL', 'Chart.js', 'LeetCode API'], 
        imageUrl: 'https://picsum.photos/seed/leetmetric/600/400', 
        category: 'Web',
        details: 'Real-time LeetCode profile statistics\nInteractive data visualizations with Chart.js\nProblem-solving progress tracking\nDifficulty-based problem breakdown\nSubmission success rate analytics\nDaily streak and consistency metrics\nComparison with global statistics\nResponsive design for all devices',
        challenges: 'Working with LeetCode\'s GraphQL API and handling rate limiting while providing real-time updates. Implemented efficient caching strategies with localStorage to minimize API calls. Created custom data aggregation logic to compute meaningful statistics from raw API data.',
        liveUrl: 'https://github.com/sujal2702/LeetMetric',
        repoUrl: 'https://github.com/sujal2702/LeetMetric'
    },
];

interface ProjectsSectionProps {
    featured?: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ featured = false }) => {
    const [filter, setFilter] = useState<'All' | 'Web' | 'UI/UX' | '3D'>('All');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const categories = ['All', 'Web', 'UI/UX', '3D'] as const;
    
    const filteredProjects = filter === 'All' 
        ? sampleProjects 
        : sampleProjects.filter(p => p.category === filter);
    
    const projectsToShow = featured ? filteredProjects.slice(0, 3) : filteredProjects;

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
    };

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
                                ? 'Featured projects showcasing my expertise in full-stack development, AI integration, and data visualization.'
                                : 'Explore my portfolio of real-world applications built with MERN stack, Flask, and modern web technologies.'}
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

                    {/* Projects Grid with Stack Effect */}
                    <motion.div 
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mb-16 px-4 md:px-8"
                    >
                        {projectsToShow.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 60, rotateZ: -5 }}
                                whileInView={{ 
                                    opacity: 1, 
                                    y: 0, 
                                    rotateZ: 0,
                                    transition: {
                                        delay: index * 0.15,
                                        duration: 0.6,
                                        ease: [0.23, 1, 0.32, 1]
                                    }
                                }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <ProjectCard 
                                    project={project} 
                                    onClick={() => handleProjectClick(project)}
                                />
                            </motion.div>
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

            {/* Project Modal */}
            <ProjectModal 
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    );
};

export default ProjectsSection;
