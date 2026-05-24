import React, { useState } from 'react';
import { PROJECTS, COMPAN_Y_INFO } from '../data';
import { Project } from '../types';
import { ArrowRight, Github, ExternalLink, SlidersHorizontal, Info, X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'software' | 'academic' | 'computer_solution'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-24 bg-white dark:bg-transparent text-slate-850 dark:text-slate-100 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Projects Segment Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold font-mono text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-3"
          >
            Portfolio
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            Our Featured Projects
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
            Explore some of our software engineering works, scientific academic support artifacts, and robust complete IT configurations.
          </motion.p>
        </div>

        {/* Filters Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="portfolio-filters">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
              filter === 'all'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-705 text-slate-650 dark:text-slate-300'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('software')}
            className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
              filter === 'software'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-705 text-slate-650 dark:text-slate-300'
            }`}
          >
            Software Development
          </button>
          <button
            onClick={() => setFilter('academic')}
            className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
              filter === 'academic'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-705 text-slate-650 dark:text-slate-300'
            }`}
          >
            Academic Support
          </button>
          <button
            onClick={() => setFilter('computer_solution')}
            className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
              filter === 'computer_solution'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-705 text-slate-650 dark:text-slate-300'
            }`}
          >
            Computer Solutions
          </button>
        </div>

        {/* Projects grid with animations */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="portfolio-projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={p.id}
                className="bg-white dark:bg-[#111111] border border-slate-200/60 dark:border-white/5 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col justify-between group h-full"
              >
                {/* Product Image Frame */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent z-10" />
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category overlay tab */}
                  <span className="absolute top-4 left-4 z-20 text-[10px] font-black tracking-widest uppercase px-3 py-1.5 bg-blue-600 text-white rounded-lg shadow-sm">
                    {p.category === 'software'
                      ? 'Software'
                      : p.category === 'academic'
                      ? 'Thesis Support'
                      : 'IT Hardware'}
                  </span>
                </div>

                {/* Card Title & Content body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold font-sans text-slate-900 dark:text-white leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal lines-clamp-3">
                      {p.description}
                    </p>
                    
                    {/* Technology short list tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {p.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] sm:text-xs font-mono font-semibold px-2.5 py-1 bg-slate-50 dark:bg-[#1c1c1e]/60 border border-slate-150 dark:border-white/5 text-slate-700 dark:text-slate-350 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                      {p.technologies.length > 3 && (
                        <span className="text-[10px] sm:text-xs font-mono font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded-lg">
                          +{p.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions Bar Footer inside individual cards */}
                  <div className="flex items-center gap-2.5 w-full pt-6 border-t border-slate-100 dark:border-white/5 mt-6">
                    <button
                      onClick={() => setActiveProject(p)}
                      className="flex-1 py-2 bg-slate-105 bg-slate-50 hover:bg-slate-100 dark:bg-[#1c1c1e] dark:hover:bg-[#2c2c2e] text-slate-800 dark:text-slate-200 border border-slate-200/50 dark:border-white/5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 text-blue-500" />
                      <span>Case Details</span>
                    </button>

                    <a
                      href={COMPAN_Y_INFO.whatsappBaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-605 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all shadow-sm flex items-center justify-center cursor-pointer"
                      title="Request a similar solution on WhatsApp"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interlocked Project Spotlight details overlay modal drawer */}
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
              {/* Backing */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-3xl bg-white dark:bg-[#111111] text-slate-900 dark:text-white rounded-2xl shadow-2xl overflow-hidden my-8 border border-slate-200 dark:border-white/5"
              >
                {/* Modal Header banner */}
                <div className="relative h-64 sm:h-80">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                  
                  {/* Close trigger */}
                  <button
                    onClick={() => setActiveProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors font-bold z-20 cursor-pointer"
                    id="close-project-modal"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-blue-600 text-white px-3 py-1 rounded-lg">
                      {activeProject.category === 'software' ? 'Software Engineering' : activeProject.category === 'academic' ? 'Academic Work' : 'Computer IT Solutions'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mt-3 leading-tight">
                      {activeProject.title}
                    </h3>
                  </div>
                </div>

                {/* Content Details Block */}
                <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[60vh]">
                  
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                      Executive Overview
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                      {activeProject.description}
                    </p>
                  </div>

                  {/* Built Features listing */}
                  <div className="space-y-3">
                    <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                      Core Functional Accomplishments
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle className="w-4.5 h-4.5 text-blue-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology configuration specs */}
                  <div className="space-y-2 pb-4">
                    <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                      Technical Pipeline Configuration
                    </h4>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {activeProject.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono font-bold px-3 py-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/5 text-slate-800 dark:text-slate-200 rounded-lg hover:border-blue-500 hover:scale-102 transition-all cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action items inside modal */}
                  <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-100 dark:border-white/5">
                    <a
                      href={`https://wa.me/237675036469?text=Hello%20EL%20KEXAS%2520TECH,%2520I%2520am%2520interested%2520in%2520the%2520${encodeURIComponent(activeProject.title)}%2520project.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[150px] py-3 text-center bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4 shrink-0" />
                      <span>Request Clone / Custom build</span>
                    </a>
                    
                    <button
                      onClick={() => setActiveProject(null)}
                      className="px-6 py-3 bg-slate-100 hover:bg-slate-250 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-bold rounded-xl text-sm transition-all cursor-pointer"
                    >
                      Close Details
                    </button>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
