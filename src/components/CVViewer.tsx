import React, { useRef } from 'react';
import { COMPAN_Y_INFO, SKILLS, PROJECTS } from '../data';
import { X, Mail, Phone, MapPin, Github, Linkedin, Download, Printer, Award, BookOpen, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CVViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVViewer: React.FC<CVViewerProps> = ({ isOpen, onClose }) => {
  const cvRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    const printContent = cvRef.current?.innerHTML;
    const originalContent = document.body.innerHTML;

    if (printContent) {
      // Create a temporary iframe or trigger window print with custom styling
      window.print();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-white text-slate-950 rounded-2xl shadow-2xl overflow-hidden my-8"
        >
          {/* Header Action Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-slate-100 border-b border-slate-200">
            <h2 className="text-xl font-bold font-sans text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600 animate-pulse" />
              Professional CV & Profile
            </h2>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-1.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg shadow-sm"
              >
                <Printer className="w-4 h-4" />
                Print / Save PDF
              </button>
              <button
                onClick={onClose}
                className="p-1 px-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition-colors"
                id="close-cv"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable CV Document */}
          <div 
            ref={cvRef} 
            className="p-8 sm:p-12 overflow-y-auto max-h-[75vh] print:p-0 print:max-h-none print:overflow-visible font-sans bg-white text-slate-900"
            id="cv-printable-area"
          >
            {/* Header info */}
            <div className="border-b-2 border-blue-600 pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                  {COMPAN_Y_INFO.founder}
                </h1>
                <p className="text-lg sm:text-xl font-medium text-blue-600 mt-1 uppercase tracking-wider">
                  {COMPAN_Y_INFO.role} & CEO of {COMPAN_Y_INFO.name}
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-500 mt-2 font-mono">
                  <MapPin className="w-4 h-4 text-blue-600 inline-block" />
                  {COMPAN_Y_INFO.location}
                </div>
              </div>

              {/* Contact Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm font-mono text-slate-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>{COMPAN_Y_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>{COMPAN_Y_INFO.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-blue-600" />
                  <a href={COMPAN_Y_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-600">
                    GitHub Profile
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <a href={COMPAN_Y_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-600">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="mb-8">
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1.5 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600" /> Executive Profile Summary
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Passionate and innovative Software Engineer with extensive experience designing custom web portals, cross-platform Android and iOS mobile applications, and high-performance relational databases. Possesses a strong academic support pedigree, offering scientific research proposals drafting, seminar projects synthesis, and structural thesis formatting guidelines. Fully practiced in reliable office hardware setups, networking diagnostic support, and operating system optimizations. Committed to delivering clean, client-centric, and scalable digital solutions under <b>{COMPAN_Y_INFO.name}</b>.
              </p>
            </div>

            {/* Two Column Layout for CV Work Experience & Skills */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Details Panel (2 columns) */}
              <div className="md:col-span-2 space-y-8">
                {/* Education */}
                <div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1.5 mb-3 flex items-center gap-2">
                    🎓 Academic Pedigree
                  </h3>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-150">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      Bachelor of Engineering (B.Eng.) in Computer Engineering
                    </h4>
                    <p className="text-blue-600 font-semibold text-xs sm:text-sm mt-0.5">
                      Specialization in Software Engineering
                    </p>
                    <p className="text-slate-500 text-sm mt-1">
                      {COMPAN_Y_INFO.university} — Buea, Cameroon
                    </p>
                  </div>
                </div>

                {/* Professional History */}
                <div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1.5 mb-3 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-blue-600" /> Work Experience
                  </h3>
                  <div className="space-y-4">
                    <div className="relative pl-4 border-l-2 border-blue-600">
                      <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full -left-[6px] top-1.5" />
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                          Founder & CEO
                        </h4>
                        <span className="text-xs font-mono px-2.5 py-0.5 bg-blue-50 text-blue-700 font-semibold rounded-full">
                          2023 – Present
                        </span>
                      </div>
                      <p className="text-slate-500 text-sm font-semibold">{COMPAN_Y_INFO.name} — Buea, Cameroon</p>
                      <ul className="mt-2 text-slate-600 text-sm list-disc pl-4 space-y-1.5">
                        <li>Fostered client engagements to design and deploy modern responsive software solutions matching active, real-time specifications.</li>
                        <li>Built robust cross-platform mobile apps on React Native and configured comprehensive PHP Laravel databases.</li>
                        <li>Formatted and structured final year projects, academic defense presentation slide outlines, and research seminar thesis papers.</li>
                        <li>Configured computer hardware setups, physical localized access networks cabling, and resolved complex firmware or activation problems for office hubs.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Featured Projects */}
                <div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1.5 mb-3 flex items-center gap-2">
                    📂 Core Engineering Artifacts
                  </h3>
                  <div className="space-y-3">
                    {PROJECTS.slice(0, 3).map((item) => (
                      <div key={item.id} className="p-3.5 bg-slate-50 hover:bg-slate-100 transition-colors rounded-xl border border-slate-150">
                        <div className="flex justify-between items-center">
                          <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                          <span className="text-[10px] font-mono font-bold bg-slate-200 text-slate-700 rounded-md px-2 py-0.5">
                            {item.category === 'software' ? 'Software' : 'Academic'}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1 lines-clamp-2">{item.description}</p>
                        <div className="flex flex-wrap gap-1.5 mt-2.5">
                          {item.technologies.slice(0, 3).map((tech, i) => (
                            <span key={i} className="text-[9px] font-mono text-slate-500 px-2 py-0.5 bg-white border border-slate-200 rounded-md">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Detail Panel (1 column) */}
              <div className="space-y-6">
                {/* Core Technologies Badges */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-1.5 mb-3">
                    🚀 Technical Capabilities
                  </h3>
                  <div className="space-y-4">
                    {/* Level grouped representation */}
                    {['frontend', 'backend', 'mobile', 'databases', 'tools'].map((cat) => {
                      const group = SKILLS.filter((s) => s.category === cat);
                      if (group.length === 0) return null;
                      return (
                        <div key={cat} className="space-y-1.5">
                          <h4 className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                            {cat === 'databases' ? 'Database Engines' : cat}
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {group.map((s, idx) => (
                              <span
                                key={idx}
                                className="text-xs font-semibold px-2.5 py-1 bg-white border border-slate-200 rounded-lg hover:border-blue-500 shadow-sm transition-colors text-slate-800"
                              >
                                {s.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Print Notice */}
                <div className="p-4 bg-blue-50/50 border border-blue-100 text-blue-800 rounded-xl text-xs space-y-1.5 print:hidden">
                  <p className="font-bold">💡 Pro Tip for PDF Save:</p>
                  <p className="text-blue-700 leading-relaxed">
                    Clicking <b>"Print/Save PDF"</b> opens print options. In the Destination select, click <b>"Save as PDF"</b>, toggle "Background Graphics" ON, and scale to fit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
