import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVViewer } from './components/CVViewer';
import { COMPAN_Y_INFO } from './data';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(true); // default to dark mode for premium tech feel
  const [isCVOpen, setIsCVOpen] = useState<boolean>(false);

  // Sync state with HTML document element classes
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.style.backgroundColor = '#050505'; // Elegant Dark background
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#f8fafc'; // slate-50 light background
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className={`min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-300 font-sans relative overflow-x-hidden ${isDark ? 'bg-[#050505]' : 'bg-slate-50'}`}>
      
      {/* Background Accents for Elegant Dark theme */}
      {isDark && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-1/3 left-[-150px] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 right-[-200px] w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[130px]"></div>
          <div className="absolute bottom-[-100px] right-[10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px]"></div>
        </div>
      )}

      {/* Sticky Top Navbar */}
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        onOpenCV={() => setIsCVOpen(true)}
      />

      {/* Main Sections Stack */}
      <main className="relative">
        
        {/* Animated Hero Section */}
        <Hero onOpenCV={() => setIsCVOpen(true)} />

        {/* Detailed Who We Are & CEO Meet Section */}
        <About />

        {/* Dynamic Services category panel switchers */}
        <Services />

        {/* Dynamic Category Filtering Projects portfolio */}
        <Projects />

        {/* Skills & Technologies Gauge Badges overview */}
        <Skills />

        {/* Testimonials Auto-Slide Carousel card */}
        <Testimonials />

        {/* Frequently Asked Questions accordion stack */}
        <FAQ />

        {/* Dynamic WhatsApp Prepopulation contact brief */}
        <Contact />

      </main>

      {/* Corporate Social Sitemap Footer */}
      <Footer isDark={isDark} />

      {/* --- FLOATING WHATSAPP INTERACTION CUE --- */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring' }}
        className="fixed bottom-6 right-6 z-30 pointer-events-auto"
        id="elkex-floating-whatsapp"
      >
        <a
          href={COMPAN_Y_INFO.whatsappBaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl transition-all hover:scale-110 group cursor-pointer"
          title="Start instant consultation on WhatsApp"
        >
          {/* Ringing green echo pulse effect layout */}
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-35" />
          
          <MessageCircle className="w-7 h-7 relative z-10" />

          {/* Social popup message tooltip on desktop hover */}
          <span className="absolute right-16 scale-0 group-hover:scale-100 origin-right transition-transform px-3 py-1.5 bg-slate-900 border border-slate-800 text-white rounded-lg text-xs font-bold leading-none tracking-wide whitespace-nowrap shadow-md pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>
      </motion.div>

      {/* --- INTERACTIVE PRINTABLE CV VIEWER MODAL --- */}
      <CVViewer isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />

    </div>
  );
}
