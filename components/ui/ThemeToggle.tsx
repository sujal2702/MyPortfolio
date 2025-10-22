
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-accent transition-colors bg-gray-200 dark:bg-gray-700"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                >
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </motion.div>
            </AnimatePresence>
        </button>
    );
};

export default ThemeToggle;
