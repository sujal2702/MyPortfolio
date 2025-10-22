import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../lib/motionVariants';

export const HeroScrollDemo: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-bg-cream to-white min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center"
        >
          <motion.div variants={fadeInUp}>
            <div className="inline-block px-4 py-2 rounded-full bg-card-yellow border border-primary/20 mb-4">
              <span className="text-sm font-semibold text-brand-dark">
                Portfolio Showcase
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-brand-dark">
              Interactive Experience
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-text-secondary mb-12">
              Explore my work through an immersive scrolling experience showcasing projects, skills, and achievements.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            {[
              { title: 'Creative Design', desc: 'Beautiful interfaces that engage users', icon: '🎨' },
              { title: 'Clean Code', desc: 'Well-structured and maintainable', icon: '💻' },
              { title: 'Performance', desc: 'Fast and optimized experiences', icon: '⚡' }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.05 }}
                className="p-8 rounded-2xl bg-white border border-gray-light shadow-soft hover:shadow-medium transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-brand-dark">{item.title}</h3>
                <p className="text-text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroScrollDemo;
