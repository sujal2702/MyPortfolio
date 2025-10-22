import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import { HeroScrollDemo } from '../components/sections/HeroScrollDemo';

/**
 * Showcase page demonstrating the ContainerScroll animation component
 * 
 * Usage: Add this route to your App.tsx routes
 * <Route path="/showcase" element={<Showcase />} />
 */
const Showcase: React.FC = () => {
    return (
        <PageWrapper>
            <div className="bg-gradient-to-b from-white via-bg-cream to-white">
                <HeroScrollDemo />
                
                {/* Additional content section */}
                <section className="py-20 px-4 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-black text-brand-dark mb-6 text-center">
                        How It Works
                    </h2>
                    <p className="text-text-secondary text-center mb-8">
                        This scroll animation creates an immersive 3D perspective effect as you scroll down the page. 
                        The container rotates and scales smoothly, perfect for showcasing products or dashboards.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        <div className="p-6 rounded-xl bg-card-yellow border border-primary/20">
                            <h3 className="font-bold text-brand-dark mb-2">Smooth Parallax</h3>
                            <p className="text-sm text-text-secondary">
                                Title and content scroll at different speeds for depth
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-card-blue border border-accent/20">
                            <h3 className="font-bold text-brand-dark mb-2">3D Rotation</h3>
                            <p className="text-sm text-text-secondary">
                                Card rotates in 3D space as you scroll down
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-white border border-gray-light">
                            <h3 className="font-bold text-brand-dark mb-2">Responsive</h3>
                            <p className="text-sm text-text-secondary">
                                Adapts beautifully to mobile and desktop screens
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </PageWrapper>
    );
};

export default Showcase;
