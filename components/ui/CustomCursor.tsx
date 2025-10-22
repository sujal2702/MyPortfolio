
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updatePosition);
        return () => window.removeEventListener('mousemove', updatePosition);
    }, []);
    
    // Hide cursor on touch devices
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) return null;


    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] custom-cursor">
            <motion.div
                className="cursor-dot rounded-full absolute"
                style={{
                    left: position.x,
                    top: position.y,
                }}
                animate={{
                    x: -4,
                    y: -4,
                }}
            />
            <motion.div
                className="cursor-outline rounded-full absolute"
                style={{
                    left: position.x,
                    top: position.y,
                }}
                animate={{
                    x: -15,
                    y: -15,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                }}
            />
        </div>
    );
};

export default CustomCursor;
