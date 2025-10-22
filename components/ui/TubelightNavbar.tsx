"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function TubelightNavbar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update active tab based on current URL
  useEffect(() => {
    const currentPath = window.location.hash.replace('#', '') || '/';
    const activeItem = items.find(item => item.url === currentPath);
    if (activeItem) {
      setActiveTab(activeItem.name);
    }
  }, [items]);

  // Handle scroll to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        // Always show at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pointer-events-none">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="pointer-events-auto"
          >
            <div className="flex items-center gap-3 bg-white/90 border border-gray-light backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
              {items.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.name;

                return (
                  <a
                    key={item.name}
                    href={item.url}
                    onClick={() => setActiveTab(item.name)}
                    className={cn(
                      "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                      "text-text-secondary hover:text-primary",
                      isActive && "bg-card-yellow text-brand-dark",
                    )}
                  >
                    <span className="hidden md:inline">{item.name}</span>
                    <span className="md:hidden">
                      <Icon size={18} strokeWidth={2.5} />
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="lamp"
                        className="absolute inset-0 w-full rounded-full -z-10 overflow-hidden"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      >
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                          <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 left-1/2 -translate-x-1/2" />
                          <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1 left-1/2 -translate-x-1/2" />
                          <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-1/2 -translate-x-1/2" />
                        </div>
                      </motion.div>
                    )}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
