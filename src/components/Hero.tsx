import React, { useEffect, useState } from 'react';
import { COMPAN_Y_INFO } from '../data';
import { ArrowDown, Code, GraduationCap, Laptop, MessageSquare, Award, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const [taglineIndex, setTaglineIndex] = useState(0);

  // Auto-cycles the taglines every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % COMPAN_Y_INFO.taglines.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 sm:py-32 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100"
    >
      {/* Dynamic Glowing Gradients (Background) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Glow Left */}
        <div className="absolute -top-40 -left-40 w-80 sm:w-120 h-80 sm:h-120 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[80px] sm:blur-[120px] animate-pulse" />
        {/* Glow Right */}
        <div className="absolute top-1/2 -right-40 w-96 sm:w-140 h-96 sm:h-140 bg-indigo-505/10 dark:bg-indigo-500/10 rounded-full blur-[100px] sm:blur-[140px] animate-pulse [animation-delay:2s]" />
        
        {/* Subtle Dots Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 dark:opacity-20" />
      </div>

      {/* Interactive Floating Symbols Deck (Background Layer) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Code symbol */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-10 md:left-24 text-blue-500/15 dark:text-blue-400/25 p-4 bg-white/5 dark:bg-white/[0.02] border border-black/5 dark:border-white/[0.05] rounded-xl shadow-sm"
        >
          <Code className="w-8 h-8 md:w-12 md:h-12" />
        </motion.div>

        {/* Graduation cap */}
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -4, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 right-8 md:right-28 text-indigo-550/15 dark:text-indigo-400/20 p-4 bg-white/5 dark:bg-white/[0.02] border border-black/5 dark:border-white/[0.05] rounded-xl shadow-sm"
        >
          <GraduationCap className="w-8 h-8 md:w-12 md:h-12" />
        </motion.div>

        {/* Laptop */}
        <motion.div
          animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/3 right-12 md:right-40 text-sky-500/15 dark:text-sky-400/20 p-3 bg-white/5 dark:bg-white/[0.02] border border-black/5 dark:border-white/[0.05] rounded-xl shadow-sm"
        >
          <Laptop className="w-6 h-6 md:w-8 md:h-8" />
        </motion.div>
      </div>

      {/* Main Container Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Top Badge Announcement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 p-1.5 pl-3 pr-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full inline-flex items-center gap-2 shadow-sm text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300"
        >
          <span className="px-2 py-0.5 bg-blue-105 bg-blue-600 text-white rounded-full font-bold text-[10px] sm:text-xs">
            CAMEROON
          </span>
          <span>Buea Technology Partner</span>
        </motion.div>

        {/* Brand Display Typography Headings */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase text-slate-900 dark:text-white"
        >
          Turning Ideas<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 py-1">
            Into Solutions
          </span>
        </motion.h1>

        {/* Sub Headings & Animated Taglines Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg sm:text-2xl font-bold font-mono tracking-wide text-blue-600 dark:text-blue-400 max-w-2xl h-10 sm:h-12 overflow-hidden flex items-center justify-center"
        >
          <motion.p
            key={taglineIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="uppercase tracking-[0.1em]"
          >
            {COMPAN_Y_INFO.taglines[taglineIndex]}
          </motion.p>
        </motion.div>

        {/* Hero Paragraph description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed"
        >
          Modern Software Engineering, Research Writing & Complete Computer Solutions. We help businesses, students, and organizations build powerful digital solutions through professional web creation, academic projects defense support, and reliable local IT support.
        </motion.p>

        {/* Button Action Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4 max-w-2xl"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-850 dark:bg-white dark:hover:bg-slate-150 text-white dark:text-slate-900 font-bold rounded-xl transition-all shadow-lg text-sm sm:text-base cursor-pointer"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollToSection('services')}
            className="px-6 py-3.5 bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-bold rounded-xl transition-all shadow-sm text-sm sm:text-base cursor-pointer"
          >
            Our Services
          </button>

          <a
            href={COMPAN_Y_INFO.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 hover:scale-102 active:scale-98 text-white font-bold rounded-xl transition-all shadow-md text-sm sm:text-base"
          >
            <MessageSquare className="w-4.5 h-4.5" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            onClick={onOpenCV}
            className="flex items-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-600 hover:scale-102 text-white font-bold rounded-xl transition-all shadow-md text-sm sm:text-base cursor-pointer"
          >
            <Award className="w-4.5 h-4.5" />
            <span>View CV Profile</span>
          </button>
        </motion.div>

        {/* Bottom Scroll Explore Cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          onClick={() => scrollToSection('about')}
          className="absolute bottom-6 cursor-pointer flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity"
        >
          <span className="text-xs font-mono font-bold tracking-widest uppercase">
            Scroll to Explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 text-blue-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
