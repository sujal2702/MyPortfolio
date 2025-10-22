
import { Variants } from 'framer-motion';

export const pageTransitionVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
    exit: { 
        opacity: 0, 
        y: -20,
        transition: {
            duration: 0.3
        }
    },
};

export const fadeIn: Variants = {
    initial: { opacity: 0 },
    animate: { 
        opacity: 1, 
        transition: { 
            duration: 0.5,
            ease: "easeOut"
        } 
    },
};

export const fadeInUp: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.6, 
            ease: "easeOut" 
        } 
    },
};

export const fadeInDown: Variants = {
    initial: { opacity: 0, y: -30 },
    animate: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.6, 
            ease: "easeOut" 
        } 
    },
};

export const fadeInLeft: Variants = {
    initial: { opacity: 0, x: -30 },
    animate: { 
        opacity: 1, 
        x: 0, 
        transition: { 
            duration: 0.6, 
            ease: "easeOut" 
        } 
    },
};

export const fadeInRight: Variants = {
    initial: { opacity: 0, x: 30 },
    animate: { 
        opacity: 1, 
        x: 0, 
        transition: { 
            duration: 0.6, 
            ease: "easeOut" 
        } 
    },
};

export const scaleIn: Variants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
        opacity: 1, 
        scale: 1, 
        transition: { 
            duration: 0.5, 
            ease: "easeOut" 
        } 
    },
};

export const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

export const staggerContainerFast: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.05,
        },
    },
};

export const slideInFromBottom: Variants = {
    initial: { 
        y: 100, 
        opacity: 0 
    },
    animate: { 
        y: 0, 
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    },
};

export const rotateIn: Variants = {
    initial: { 
        opacity: 0, 
        rotate: -10 
    },
    animate: { 
        opacity: 1, 
        rotate: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    },
};

