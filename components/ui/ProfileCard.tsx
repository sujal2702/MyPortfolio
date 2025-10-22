import React, { useState } from 'react';
import { Twitter, Github, Linkedin, ArrowUpRight, Mail, LucideIcon } from 'lucide-react';

//================================================================================
// REUSABLE GLASSMORPHISM PROFILE CARD COMPONENT
//================================================================================

interface SocialLink {
  id: string;
  icon: LucideIcon;
  label: string;
  href: string;
}

interface ActionButtonProps {
  text: string;
  href: string;
}

interface ProfileCardProps {
  avatarUrl: string;
  name: string;
  title: string;
  bio: string;
  socialLinks?: SocialLink[];
  actionButton: ActionButtonProps;
}

/**
 * Glassmorphism Profile Card Component
 * A responsive, animated, and themeable profile card with a glassmorphism effect.
 */
export const GlassmorphismProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl,
  name,
  title,
  bio,
  socialLinks = [],
  actionButton,
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-sm">
      <div 
        className="relative flex flex-col items-center p-8 rounded-3xl border transition-all duration-500 ease-out backdrop-blur-xl bg-card/40 border-white/10"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="w-24 h-24 mb-4 rounded-full p-1 border-2 border-white/20">
          <img 
            src={avatarUrl} 
            alt={`${name}'s Avatar`}
            className="w-full h-full rounded-full object-cover"
            onError={(e) => { 
              const target = e.target as HTMLImageElement;
              target.onerror = null; 
              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=FFE500&color=1E1E1E&size=200&bold=true`;
            }}
          />
        </div>

        <h2 className="text-2xl font-bold text-card-foreground">{name}</h2>
        <p className="mt-1 text-sm font-medium text-primary">{title}</p>
        <p className="mt-4 text-center text-sm leading-relaxed text-muted-foreground">{bio}</p>

        <div className="w-1/2 h-px my-6 rounded-full bg-border" />

        <div className="flex items-center justify-center gap-3">
          {socialLinks.map((item) => (
            <SocialButton 
              key={item.id} 
              item={item} 
              setHoveredItem={setHoveredItem} 
              hoveredItem={hoveredItem} 
            />
          ))}
        </div>

        <ActionButton action={actionButton} />
      </div>
      
      <div className="absolute inset-0 rounded-3xl -z-10 transition-all duration-500 ease-out blur-2xl opacity-30 bg-gradient-to-r from-primary/50 to-accent/50" />
    </div>
  );
};

// --- Sub-components ---

interface SocialButtonProps {
  item: SocialLink;
  setHoveredItem: (id: string | null) => void;
  hoveredItem: string | null;
}

const SocialButton: React.FC<SocialButtonProps> = ({ item, setHoveredItem, hoveredItem }) => {
  const IconComponent = item.icon;
  return (
    <div className="relative">
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ease-out group overflow-hidden bg-secondary/50 hover:bg-secondary"
        onMouseEnter={() => setHoveredItem(item.id)}
        onMouseLeave={() => setHoveredItem(null)}
        aria-label={item.label}
      >
        <div className="relative z-10 flex items-center justify-center">
          <IconComponent size={20} className="transition-all duration-200 ease-out text-secondary-foreground/70 group-hover:text-secondary-foreground" />
        </div>
      </a>
      <Tooltip item={item} hoveredItem={hoveredItem} />
    </div>
  );
};

interface ActionButtonComponentProps {
  action: ActionButtonProps;
}

const ActionButton: React.FC<ActionButtonComponentProps> = ({ action }) => (
  <a
    href={action.href}
    className="flex items-center gap-2 px-6 py-3 mt-8 rounded-full font-semibold text-base backdrop-blur-sm transition-all duration-300 ease-out hover:scale-[1.03] active:scale-95 group bg-primary text-primary-foreground"
    style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
  >
    <span>{action.text}</span>
    <ArrowUpRight size={16} className="transition-transform duration-300 ease-out group-hover:rotate-45" />
  </a>
);

interface TooltipProps {
  item: SocialLink;
  hoveredItem: string | null;
}

const Tooltip: React.FC<TooltipProps> = ({ item, hoveredItem }) => (
  <div 
    role="tooltip"
    className={`absolute -top-12 left-1/2 -translate-x-1/2 z-50 px-3 py-1.5 rounded-lg backdrop-blur-md border text-xs font-medium whitespace-nowrap transition-all duration-300 ease-out pointer-events-none bg-popover text-popover-foreground border-border ${hoveredItem === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
    style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
  >
    {item.label}
    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-popover border-b border-r border-border" />
  </div>
);

//================================================================================
// DEMO COMPONENT - Example Usage
//================================================================================

export const ProfileCardDemo: React.FC = () => {
  const cardProps = {
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    name: 'Sujal Kumar Singh',
    title: 'Full-Stack Developer',
    bio: 'Computer Science student at Dayananda Sagar Institution. Passionate about building scalable web applications with MERN stack.',
    socialLinks: [
      { id: 'github', icon: Github, label: 'GitHub', href: 'https://github.com/sujal2702' },
      { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/singh-sujal' },
      { id: 'twitter', icon: Twitter, label: 'Twitter', href: 'https://twitter.com/itzsujal' },
      { id: 'email', icon: Mail, label: 'Email', href: 'mailto:sujalsingh2724@gmail.com' },
    ],
    actionButton: {
      text: 'Contact Me',
      href: '#/contact',
    },
  };

  return <GlassmorphismProfileCard {...cardProps} />;
};

export default GlassmorphismProfileCard;
