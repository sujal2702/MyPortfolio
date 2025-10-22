
import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactSection from '../components/sections/ContactSection';

const Home: React.FC = () => {
    return (
        <PageWrapper>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection featured />
            <ContactSection />
        </PageWrapper>
    );
};

export default Home;
