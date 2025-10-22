
import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import ContactSection from '../components/sections/ContactSection';
import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/motionVariants';


const Contact: React.FC = () => {
    return (
        <PageWrapper>
            <div className="pt-24">
                 <motion.div 
                    className="container mx-auto px-4 text-center"
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                 >
                    <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
                                        <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
                        Let's collaborate and create something amazing together.
                    </p>
                </motion.div>
                <ContactSection isPage />
            </div>
        </PageWrapper>
    );
};

export default Contact;
