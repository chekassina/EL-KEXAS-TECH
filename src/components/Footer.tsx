import React from 'react';
import { Logo } from './Logo';
import { COMPAN_Y_INFO } from '../data';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUp, ArrowRight, Heart } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
    <footer className="bg-slate-900 text-slate-350 py-16 border-t border-slate-800 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper segment */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="cursor-pointer" onClick={scrollToTop}>
              <Logo size="sm" theme="dark" />
            </div>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed max-w-sm">
              We help businesses, university students, and organizations engineer advanced software portfolios, draft scientific research essays, and troubleshoot complex office hardware setups.
            </p>
            <p className="text-xs text-blue-400 font-mono uppercase tracking-widest font-bold">
              Smart Solutions For A Digital World
            </p>
          </div>

          {/* Quick links Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-black text-slate-400 tracking-wider">
              Explore Sitemap
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {['About', 'Services', 'Projects', 'Skills', 'Testimonials', 'FAQs', 'Contact'].map((sect) => (
                <button
                  key={sect}
                  onClick={() => scrollToSection(sect.toLowerCase() === 'projects' ? 'projects' : sect.toLowerCase() === 'testimonials' ? 'testimonials' : sect.toLowerCase() === 'faqs' ? 'faqs' : sect.toLowerCase())}
                  className="text-left text-slate-400 hover:text-blue-400 transition-colors focus:outline-none cursor-pointer"
                >
                  {sect}
                </button>
              ))}
            </div>
          </div>

          {/* Core Info Contacts Col */}
          <div className="md:col-span-4 space-y-4 text-sm">
            <h4 className="text-xs uppercase font-black text-slate-400 tracking-wider">
              Contact Center
            </h4>
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                <span>{COMPAN_Y_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <span>{COMPAN_Y_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <span className="break-all">{COMPAN_Y_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lower copyright segment */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-slate-500">
          
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-bold text-slate-400">
              EL KEXAS TECH &copy; 2026 • Registered Company Cameroon
            </p>
            <p className="text-[11px]">
              Software Engineering • Research Writing • Complete Computer Solutions
            </p>
          </div>

          {/* Social icons row */}
          <div className="flex items-center gap-4">
            <a
              href={COMPAN_Y_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-950 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-all hover:scale-105"
              aria-label="GitHub Developer Page"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={COMPAN_Y_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-950 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-all hover:scale-105"
              aria-label="LinkedIn Professional Page"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all shadow-md focus:outline-none cursor-pointer"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
