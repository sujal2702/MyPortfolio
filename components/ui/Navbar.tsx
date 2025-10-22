
import React from 'react';
import { TubelightNavbar } from './TubelightNavbar';
import { Home, User, Briefcase, Mail, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
    const navItems = [
        { name: 'Home', url: '#/', icon: Home },
        { name: 'About', url: '#/about', icon: User },
        { name: 'Projects', url: '#/projects', icon: Briefcase },
        { name: 'Showcase', url: '#/showcase', icon: Sparkles },
        { name: 'Contact', url: '#/contact', icon: Mail },
    ];

    return <TubelightNavbar items={navItems} />;
};

export default Navbar;