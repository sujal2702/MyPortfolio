
import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import ProjectsSection from '../components/sections/ProjectsSection';
import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/motionVariants';


const Projects: React.FC = () => {
    return (
        <PageWrapper>
            <div className="pt-24">
                 <motion.div 
                    className="container mx-auto px-4 text-center"
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                 >
                    <h1 className="text-4xl md:text-5xl font-bold">My Portfolio</h1>
                                        <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
                        Explore my portfolio of creative projects and innovative solutions.
                    </p>
                </motion.div>
                <ProjectsSection />
            </div>
        </PageWrapper>
    );
};

export default Projects;
