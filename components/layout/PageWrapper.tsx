
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { pageTransitionVariants } from '../../lib/motionVariants';

interface PageWrapperProps {
    children: ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
    return (
        <motion.div
            variants={pageTransitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="pt-24"
        >
            {children}
        </motion.div>
    );
};

export default PageWrapper;
