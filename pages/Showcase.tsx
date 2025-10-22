import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import { HeroScrollDemo } from '../components/sections/HeroScrollDemo';

/**
 * Showcase Page - Interactive portfolio showcase
 */
const Showcase: React.FC = () => {
  return (
    <PageWrapper>
      <HeroScrollDemo />
    </PageWrapper>
  );
};

export default Showcase;
