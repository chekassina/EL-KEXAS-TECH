import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Sun, Moon, PhoneCall } from 'lucide-react';
import { COMPAN_Y_INFO } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  onOpenCV: () => void;
}

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Portfolio' },
  { id: 'skills', label: 'Skills' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'faqs', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, onOpenCV }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor Scroll for styling and scrollspy active state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 120; // offset for nav height
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // approximate navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#050505]/80 backdrop-blur-md shadow-md py-3 border-b border-slate-200/50 dark:border-white/5'
          : 'bg-transparent py-5'
      }`}
      id="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo Component */}
          <button onClick={() => scrollToSection('home')} className="flex items-center focus:outline-none">
            <Logo theme={isDark ? 'dark' : 'light'} size="sm" />
          </button>

          {/* Desktop Navigation Link Deck */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-blue-600 bg-blue-50/50 dark:bg-blue-950/30'
                    : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Action Row */}
          <div className="hidden sm:flex items-center gap-3">
            {/* CV Modal Switch */}
            <button
              onClick={onOpenCV}
              className="text-xs font-mono font-bold px-3 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-[#1a1a1c] dark:hover:bg-[#2c2c2e] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/5 rounded-lg transition-all cursor-pointer"
            >
              PREVIEW CV
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-[#1a1a1c] dark:hover:bg-[#2c2c2e] rounded-full transition-all text-slate-700 dark:text-slate-300 focus:outline-none"
              aria-label="Toggle Theme"
              id="theme-toggler"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ duration: 0.4 }}
              >
                {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
              </motion.div>
            </button>

            {/* Quick WhatsApp CTA Button */}
            <a
              href={COMPAN_Y_INFO.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 hover:scale-102 active:scale-98 shadow-md rounded-lg transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>WHATSAPP</span>
            </a>
          </div>

          {/* Mobile Display Toggles */}
          <div className="flex sm:hidden items-center gap-2">
            {/* Theme Toggle for mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-[#1a1a1c] dark:hover:bg-[#2c2c2e] rounded-full text-slate-700 dark:text-slate-300 focus:outline-none"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            {/* Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-slate-100 dark:bg-[#1a1a1c] text-slate-700 dark:text-slate-300 rounded-lg focus:outline-none"
              aria-label="Open Mobile Menu"
              id="mobile-hud-activator"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE COLLAPSIBLE DRAWER --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 dark:bg-[#050505]/95 border-b border-slate-200 dark:border-white/5 overflow-hidden"
            id="mobile-nav-panel"
          >
            <div className="px-4 pt-2.5 pb-6 space-y-1.5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left text-base font-semibold px-4 py-2.5 rounded-xl transition-all ${
                    activeSection === link.id
                      ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/20'
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-[#111]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              
              <div className="pt-4 flex flex-col gap-3 px-4 border-t border-slate-200/50 dark:border-slate-800/50">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCV();
                  }}
                  className="flex items-center justify-center gap-1.5 w-full py-2.5 bg-slate-100 dark:bg-[#1a1a1c] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/5 rounded-xl font-bold text-sm"
                >
                  View Professional CV
                </button>
                <a
                  href={COMPAN_Y_INFO.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 w-full py-2.5 text-white bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-sm shadow-md"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>WhatsApp Contact</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
