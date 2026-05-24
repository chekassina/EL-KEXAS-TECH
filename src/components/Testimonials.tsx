import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data';
import { Quote, ChevronLeft, ChevronRight, User, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-transparent text-slate-850 dark:text-slate-100 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold font-mono text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-3"
          >
            Endorsements
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            What Our Clients Say
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
            Honest feedback from local graduate students, Cameroon startup founders, and businesses we have served.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-12 md:px-16 pb-12">
          
          {/* Animated Carousel Panels */}
          <div className="relative min-h-[280px] sm:min-h-[220px] flex items-center justify-center bg-slate-50 dark:bg-[#111111] border border-slate-200/50 dark:border-white/5 p-8 sm:p-12 rounded-3xl shadow-md">
            
            {/* Background quote mark watermark */}
            <div className="absolute top-4 left-6 text-slate-200 dark:text-slate-900 select-none opacity-50">
              <Quote className="w-14 h-14" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 flex flex-col items-center text-center text-slate-850 dark:text-white"
              >
                {/* Gold Rating Stars indicators */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Testimonial Quote sentence */}
                <p className="text-base sm:text-xl font-medium leading-relaxed italic max-w-2xl text-slate-705 dark:text-slate-200">
                  "{current.quote}"
                </p>

                {/* Avatar and Info Block */}
                <div className="flex items-center gap-4 mt-8 text-left">
                  <div className="p-2.5 bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 rounded-full">
                    <User className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      {current.author}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {current.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls Indicators Panels */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between items-center hidden sm:flex pointer-events-none">
            <button
              onClick={handlePrev}
              className="p-3 bg-white dark:bg-[#111] border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 shadow-md transition-all scale-95 hover:scale-105 active:scale-90 pointer-events-auto cursor-pointer"
              aria-label="Previous Testimonial"
              id="prev-testimonial-btn"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-white dark:bg-[#111] border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 shadow-md transition-all scale-95 hover:scale-105 active:scale-90 pointer-events-auto cursor-pointer"
              aria-label="Next Testimonial"
              id="next-testimonial-btn"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator Switcher Row */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  activeIndex === idx ? 'w-8 bg-blue-600' : 'w-2.5 bg-slate-300 dark:bg-[#2c2c2e] hover:bg-slate-400'
                }`}
                aria-label={`Go to Testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
