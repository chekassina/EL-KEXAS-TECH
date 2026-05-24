import React, { useState } from 'react';
import { SERVICES, COMPAN_Y_INFO } from '../data';
import { Service } from '../types';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = [
  { id: 'software', label: 'Software Engineering', icon: 'Code', desc: 'Custom portals, cross-platform apps, and high-performance databases.' },
  { id: 'academic', label: 'Academic & Research', icon: 'GraduationCap', desc: 'Expert proposal development, LaTeX structuring, and presentation slide decks.' },
  { id: 'document', label: 'Professional Docs', icon: 'FileUser', desc: 'ATS-friendly resume templates, business profiles, and corporate tenders.' },
  { id: 'computer_solutions', label: 'Computer Solutions', icon: 'Monitor', desc: 'Windows systems setup, local networks wiring, and hardware diagnostic repair.' }
];

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'software' | 'academic' | 'document' | 'computer_solutions'>('software');

  const filteredServices = SERVICES.filter((s) => s.category === activeCategory);

  // Helper to dynamically render Lucide icons in a safe way
  const renderIcon = (iconName: string, className: string = 'w-6 h-6') => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Icons.HelpCircle className={className} />;
  };

  const scrollToContactWithService = (serviceTitle: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      // Set service in the form field if possible
      const selectElement = document.getElementById('form-service') as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = serviceTitle;
        // Trigger synthetic change event to update state in Contact component
        const event = new Event('change', { bubbles: true });
        selectElement.dispatchEvent(event);
      }

      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-transparent text-slate-850 dark:text-slate-100 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Services Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold font-mono text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-3"
          >
            Our Capabilities
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            Professional Digital Solutions
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Custom solutions perfectly tailored to empower businesses, university students, corporate organizations, and entrepreneurs.
          </motion.p>
        </div>

        {/* Categories Tab Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 bg-white dark:bg-[#111] p-2 sm:p-3 rounded-2xl sm:rounded-3xl shadow-md border border-slate-200/50 dark:border-white/5 mb-12 max-w-6xl mx-auto">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`py-3.5 sm:py-5 px-3 rounded-xl sm:rounded-2xl text-center flex flex-col items-center justify-center transition-all duration-300 relative overflow-hidden group focus:outline-none cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                {/* Active Slider Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-gradient-to-tr from-blue-700 to-indigo-600 z-0"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col items-center">
                  <span className={`p-2 bg-slate-100 dark:bg-slate-800 rounded-xl group-hover:scale-110 transition-transform ${
                    isActive ? 'bg-white/10 text-white' : 'text-slate-705 dark:text-slate-300'
                  }`}>
                    {renderIcon(cat.icon, 'w-5 h-5 sm:w-6 sm:h-6')}
                  </span>
                  <span className="font-bold text-xs sm:text-sm tracking-wide mt-3 text-center leading-tight">
                    {cat.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Category Tagline Box */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-slate-650 dark:text-slate-400 sm:text-lg italic font-medium"
            >
              "{CATEGORIES.find((c) => c.id === activeCategory)?.desc}"
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Services List Display Deck */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
          >
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white dark:bg-[#111111] border border-slate-205/50 dark:border-white/5 hover:border-blue-500 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all flex flex-col justify-between group h-full"
              >
                <div>
                  {/* Icon Panel */}
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                    {renderIcon(service.icon, 'w-6 h-6 sm:w-7 sm:h-7')}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-sans text-slate-900 dark:text-white mt-6 group-hover:text-blue-605">
                    {service.title}
                  </h3>

                  {/* Paragraph description */}
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Sub-services features listing */}
                  {service.subservices && (
                    <ul className="mt-5 space-y-2 border-t border-slate-100 dark:border-slate-800/60 pt-4">
                      {service.subservices.map((sub, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-medium text-slate-650 dark:text-slate-300">
                          <Icons.ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Booking Prompt */}
                <div className="mt-8">
                  <button
                    onClick={() => scrollToContactWithService(service.title)}
                    className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-850 dark:text-slate-350 hover:text-blue-600 dark:hover:text-blue-405 font-bold text-xs rounded-xl tracking-wider transition-colors border border-slate-200/40 dark:border-slate-800 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Request Solution</span>
                    <Icons.ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Quick Question CTA Footer Bar */}
        <div className="mt-20 p-8 sm:p-12 bg-white dark:bg-[#111111] border border-slate-200/50 dark:border-white/5 rounded-3xl text-center max-w-5xl mx-auto shadow-md">
          <h4 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
            Need a Bespoke Core Solution Not Outlined Above?
          </h4>
          <p className="text-slate-600 dark:text-slate-350 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Our principal capabilities in Software Engineering from the University of Buea and extensive diagnostic experience means we can conceptualize, adapt, and build almost any software artifact or IT pipeline.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToContactWithService('Custom Solution Consultation')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm shadow-md transition-all cursor-pointer"
            >
              Consult Che Kassina Kum
            </button>
            <a
              href={COMPAN_Y_INFO.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-705 text-slate-800 dark:text-slate-105 rounded-xl text-sm font-bold transition-all border border-slate-200 dark:border-slate-700"
            >
              Direct Chat
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
