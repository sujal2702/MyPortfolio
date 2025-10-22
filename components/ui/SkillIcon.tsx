
import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../types';

interface SkillIconProps {
    skill: Skill;
}

const SkillIcon: React.FC<SkillIconProps> = ({ skill }) => {
    return (
                <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-white shadow-soft border border-gray-light hover:border-primary transition-all"
        >
            <skill.Icon className="w-12 h-12 text-primary mb-2" />
            <span className="font-semibold">{skill.name}</span>
        </motion.div>
    );
};

export default SkillIcon;
