
import { LucideIcon } from 'lucide-react';

export interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    imageUrl: string;
    liveUrl?: string;
    repoUrl?: string;
    category: 'Web' | 'UI/UX' | '3D';
}

export interface Skill {
    name: string;
    Icon: LucideIcon;
}
