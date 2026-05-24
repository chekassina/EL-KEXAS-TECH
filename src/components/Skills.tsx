import React, { useState } from 'react';
import { SKILLS } from '../data';
import { Skill } from '../types';
import { Cpu, Layout, Radio, Terminal, Database, HelpCircle, Laptop } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const DOMAIN_GRID = [
  { id: 'all', label: 'All Tech', icon: 'Cpu' },
  { id: 'frontend', label: 'Frontend UI', icon: 'Layout' },
  { id: 'backend', label: 'Backend & APIs', icon: 'Terminal' },
  { id: 'mobile', label: 'Mobile Apps', icon: 'Radio' },
  { id: 'databases', label: 'Database Engines', icon: 'Database' },
  { id: 'tools', label: 'Sysadmin & Word', icon: 'Laptop' }
];

export const Skills: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<string>('all');
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  const filteredSkills = SKILLS.filter((s) => {
    if (activeDomain === 'all') return true;
    return s.category === activeDomain;
  });

  const getDomainIcon = (icon: string) => {
    switch (icon) {
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      case 'Radio': return <Radio className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Laptop': return <Laptop className="w-5 h-5" />;
      default: return <HelpCircle className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-transparent text-slate-850 dark:text-slate-100 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Skills Segment Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold font-mono text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-3"
          >
            Capabilities
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            Skills & Technologies
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
            A multi-faceted spectrum of software engineering, operational database designing, professional slide making, and local diagnostic networks setups.
          </motion.p>
        </div>

        {/* Domain Selection Tabs BAR */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-5xl mx-auto">
          {DOMAIN_GRID.map((dom) => {
            const isActive = activeDomain === dom.id;
            return (
              <button
                key={dom.id}
                onClick={() => setActiveDomain(dom.id)}
                className={`flex items-center gap-2 px-4.5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 border-transparent text-white dark:bg-white dark:text-slate-900 shadow-md scale-102'
                    : 'bg-white hover:bg-slate-100 dark:bg-[#111] dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5'
                }`}
              >
                {getDomainIcon(dom.icon)}
                <span>{dom.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.03, duration: 0.3 }}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="bg-white dark:bg-[#111111] rounded-2xl p-6 border border-slate-200/50 dark:border-white/5 hover:border-blue-500 shadow-sm hover:shadow-md transition-all group relative cursor-default overflow-hidden"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold font-sans text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {skill.name}
                </h3>
                <span className="text-xs font-mono font-black text-blue-600 dark:text-blue-400 bg-blue-55bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded-lg">
                  {skill.level}%
                </span>
              </div>

              {/* Dynamic Progress Capsule */}
              <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full"
                />
              </div>

              {/* Short skill description */}
              <p className="text-xs text-slate-500 dark:text-slate-450 leading-relaxed min-h-[36px]">
                {skill.description || 'Verified capabilities through rigorous computer methodology and development.'}
              </p>

              {/* Domain Tag Indicator */}
              <span className="text-[9px] uppercase tracking-wider font-extrabold text-slate-400 dark:text-slate-500 block mt-3 font-mono">
                {DOMAIN_GRID.find((d) => d.id === skill.category)?.label || skill.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Detail Overlay Banner */}
        <div className="mt-16 text-center max-w-4xl mx-auto h-12 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {hoveredSkill ? (
              <motion.p
                key={hoveredSkill.name}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-mono font-bold tracking-wide uppercase px-4 py-2 bg-blue-50 dark:bg-blue-950/30 rounded-full border border-blue-100/30 dark:border-blue-800/30"
              >
                In-depth: {hoveredSkill.name} is practiced to {hoveredSkill.level}% efficacy.
              </motion.p>
            ) : (
              <motion.p
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 font-mono tracking-widest uppercase"
              >
                [ Hover on any skill card to analyze technical depth ]
              </motion.p>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
