import React, { useEffect, useState } from 'react';
import { COMPAN_Y_INFO, STATISTICS } from '../data';
import {
  Award,
  Target,
  Eye,
  Shield,
  Users,
  Github,
  Linkedin,
  MessageSquare,
} from 'lucide-react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(
    STATISTICS.map(() => 0)
  );

  // Count-up Animation Engine for Statistics
  useEffect(() => {
    const duration = 2000;
    const steps = 40;
    const stepDuration = duration / steps;

    const timers = STATISTICS.map((stat, index) => {
      let currentStep = 0;

      return setInterval(() => {
        currentStep++;

        setCounts((prev) => {
          const next = [...prev];

          next[index] = Math.min(
            Math.round((stat.value / steps) * currentStep),
            stat.value
          );

          return next;
        });

        if (currentStep >= steps) {
          clearInterval(timers[index]);
        }
      }, stepDuration);
    });

    return () => {
      timers.forEach(clearInterval);
    };
  }, []);

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-transparent text-slate-900 dark:text-slate-100 overflow-hidden relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold font-mono text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-3"
          >
            Who We Are
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            About EL KEXAS TECH
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
            className="mt-4 text-base sm:text-lg text-slate-500 dark:text-slate-400 font-mono tracking-wide"
          >
            Innovating Through Technology & Digital Solutions
          </motion.p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-20 border-b border-slate-100 dark:border-white/5">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Engineering Digital Excellence in Cameroon & Beyond
            </h3>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
              <b>EL KEXAS TECH</b> is a modern technology and digital solutions company focused on creating innovative software solutions, professional digital services, academic research support, and reliable IT maintenance.
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              Founded by <b>Che Kassina Kum</b>, an expert Software Engineer, the company combines artistic design, scientific precision, and robust software architecture to help clients achieve dynamic digital transformation.
            </p>

            {/* Quick Badges */}
            <div className="grid grid-cols-2 gap-4 pt-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span>Verified Clean Standard</span>
              </div>

              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span>Client Collaborative Cycle</span>
              </div>
            </div>
          </motion.div>

          {/* Tech Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:pl-10 h-[300px] sm:h-[350px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-indigo-600/10 rounded-3xl blur-2xl" />

            <div className="absolute w-[80%] left-0 top-6 rotate-[-3deg] bg-slate-100 dark:bg-[#111] p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-lg transition-transform hover:-translate-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">
                Core Focus
              </span>

              <h4 className="font-bold text-slate-800 dark:text-slate-100 mt-1">
                Computer Engineering
              </h4>

              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Applying foundational hardware and software synchronization models to ensure high-performance deployments.
              </p>
            </div>

            <div className="absolute w-[80%] right-0 bottom-6 rotate-[3deg] bg-slate-900 border border-white/5 p-6 rounded-2xl shadow-xl transition-transform hover:-translate-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">
                Operating Philosophy
              </span>

              <h4 className="font-bold text-white mt-1">
                Smart Solutions
              </h4>

              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Every line of code and structured layout is tailored directly to user demand and operational efficiency.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CEO Spotlight */}
        <div className="py-20 border-b border-slate-100 dark:border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* CEO Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 flex flex-col items-center"
            >
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-35 group-hover:opacity-60 transition duration-1000" />

                <div className="relative w-72 h-80 sm:w-80 sm:h-96 bg-slate-100 dark:bg-[#111] rounded-2xl overflow-hidden shadow-2xl border border-white/10">

                  {/* LOCAL IMAGE */}
                  <img
                    src="/image/1.jpg"
                    alt="Che Kassina Kum - CEO of EL KEXAS TECH"
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent text-white">
                    <p className="font-mono text-xs text-blue-400 tracking-widest uppercase font-bold">
                      Che Kassina Kum
                    </p>

                    <p className="text-[10px] text-slate-300 mt-0.5">
                      Founder & CEO — EL KEXAS TECH
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                
                <a
                  href={COMPAN_Y_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full text-slate-700 dark:text-slate-200 transition-all hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={COMPAN_Y_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full text-slate-700 dark:text-slate-200 transition-all hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={COMPAN_Y_INFO.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full text-slate-700 dark:text-slate-200 transition-all hover:scale-110"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>

              </div>
            </motion.div>

            {/* CEO Bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="p-1 px-3 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 font-mono font-bold rounded-lg text-xs inline-block uppercase tracking-wider">
                Founder Spotlight
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
                Meet The CEO
              </h3>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  <b>Che Kassina Kum</b> is a passionate Software Engineer with a Bachelor's degree in Computer Engineering specializing in Software Engineering from the University of Buea.
                </p>

                <p>
                  He has worked across web architectures, React Native ecosystems, database optimizations, REST APIs, and MySQL infrastructures.
                </p>

                <p>
                  As founder of <b>EL KEXAS TECH</b>, his mission is to design intelligent digital solutions that empower students, startups, and organizations.
                </p>
              </div>

              {/* Education Card */}
              <div className="flex gap-4 p-4 bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/5 rounded-xl">
                <div className="p-3.5 bg-blue-600 text-white rounded-lg h-fit">
                  <Award className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="font-bold text-slate-950 dark:text-white text-sm sm:text-base">
                    Bachelor of Engineering — Computer Engineering
                  </h4>

                  <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-0.5 uppercase tracking-wider">
                    University of Buea
                  </p>

                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Specialized in software methodologies, systems architecture, and relational database systems.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="py-20 border-b border-slate-100 dark:border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/5 hover:border-blue-500 rounded-3xl transition-all shadow-md group"
            >
              <div className="p-4 bg-blue-600/10 text-blue-600 dark:text-blue-400 rounded-2xl w-fit group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Eye className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-6">
                Our Vision
              </h3>

              <p className="text-slate-600 dark:text-slate-300 sm:text-lg mt-4 leading-relaxed">
                To become a leading technology and digital solutions company delivering innovative and impactful software services across Cameroon and beyond.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 sm:p-10 bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/5 hover:border-indigo-500 rounded-3xl transition-all shadow-md group"
            >
              <div className="p-4 bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 rounded-2xl w-fit group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Target className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-6">
                Our Mission
              </h3>

              <p className="text-slate-600 dark:text-slate-300 sm:text-lg mt-4 leading-relaxed">
                To provide elite software engineering, creative digital services, academic support, and reliable IT solutions.
              </p>
            </motion.div>

          </div>
        </div>

        {/* Statistics */}
        <div className="pt-20">
          <div className="p-8 sm:p-12 bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-3xl shadow-xl">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {STATISTICS.map((item, index) => (
                <div key={index}>
                  <p className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 tracking-tight leading-none">
                    {counts[index]}
                    {item.suffix}
                  </p>

                  <p className="text-xs sm:text-sm font-mono tracking-widest uppercase font-bold text-slate-300 mt-2.5">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};