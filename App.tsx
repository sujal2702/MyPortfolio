
import React, { Suspense, lazy, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Showcase = lazy(() => import('./pages/Showcase'));

// Loading Component
const LoadingScreen: React.FC = () => (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
        >
            <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-accent"
                animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                    scale: { duration: 1, repeat: Infinity, ease: "easeInOut" },
                }}
            />
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-text-secondary font-semibold"
            >
                Loading amazing content...
            </motion.p>
        </motion.div>
    </div>
);

const App: React.FC = () => {
    return (
        <HashRouter>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <AppRoutes />
                </main>
                <Footer />
            </div>
        </HashRouter>
    );
};

const AppRoutes: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    return (
        <AnimatePresence mode="wait">
            <Suspense fallback={<LoadingScreen />}>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/showcase" element={<Showcase />} />
                </Routes>
            </Suspense>
        </AnimatePresence>
    );
};

export default App;
