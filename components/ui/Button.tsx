
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    to?: string;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
    children, 
    onClick, 
    to, 
    variant = 'primary', 
    className = '', 
    type = 'button',
    disabled = false 
}) => {
    const baseClasses = "px-8 py-3.5 font-bold rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 inline-flex items-center justify-center gap-2 relative overflow-hidden";
    
    const variantClasses: Record<typeof variant, string> = {
        primary: 'bg-brand-dark text-primary hover:bg-gray-dark focus-visible:ring-primary disabled:opacity-50 disabled:cursor-not-allowed',
        secondary: 'bg-accent text-white hover:bg-accent-dark focus-visible:ring-accent disabled:opacity-50 disabled:cursor-not-allowed',
        outline: 'bg-white border-2 border-gray-light text-brand-dark hover:border-primary hover:bg-card-yellow focus-visible:ring-primary disabled:opacity-50 disabled:cursor-not-allowed',
    };

    const ButtonContent = (
        <>
            {/* Shine effect */}
            {variant === 'primary' && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                />
            )}
            <span className="relative z-10">{children}</span>
        </>
    );

    const MotionButton = (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.05 }}
            whileTap={{ scale: disabled ? 1 : 0.95 }}
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {ButtonContent}
        </motion.button>
    );

    if (to && !disabled) {
        return (
            <Link to={to}>
                {MotionButton}
            </Link>
        );
    }

    return MotionButton;
};

export default Button;