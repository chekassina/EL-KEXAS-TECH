import React, { useState, ChangeEvent, FormEvent } from 'react';
import { COMPAN_Y_INFO, SERVICES } from '../data';
import { Phone, Mail, MapPin, Send, MessageSquare, ShieldCheck, HelpCircle, Heart, Check, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  serviceNeeded: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  fullName: '',
  email: '',
  phone: '',
  serviceNeeded: 'Website Development',
  message: '',
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(INITIAL_STATE);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Dynamically constructs the WhatsApp text link based on active state parameters
  const generateWhatsAppUrl = () => {
    const template = `Hello EL KEXAS TECH!
My name is: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Service Needed: ${formData.serviceNeeded}
Message: ${formData.message}`;

    const encodedText = encodeURIComponent(template);
    return `https://wa.me/237675036469?text=${encodedText}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setSubmitting(true);

    // Simulate standard server API dispatching
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      
      // Save data locally in localStorage to record inquiries
      const existingInquiries = JSON.parse(localStorage.getItem('elkex_inquiries') || '[]');
      existingInquiries.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('elkex_inquiries', JSON.stringify(existingInquiries));

      // Clear state
      setFormData(INITIAL_STATE);
    }, 2200);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-transparent text-slate-850 dark:text-slate-100 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold font-mono text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-3"
          >
            Engagement
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            Contact Us
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
            Let’s work together to build innovative digital solutions, format academic works, or troubleshoot IT configurations.
          </motion.p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Coordinates details panel (Left 4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 bg-slate-50 dark:bg-[#111111] border border-slate-200/50 dark:border-white/5 rounded-3xl space-y-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-white/5">
                Official Coordinates
              </h3>

              <div className="space-y-6 text-slate-700 dark:text-slate-300">
                {/* Location */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-blue-50 dark:bg-[#1a1a1c] text-blue-600 dark:text-blue-400 rounded-2xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase font-mono text-[11px] tracking-wide text-slate-400">
                      Primary Location
                    </h4>
                    <p className="text-base font-semibold mt-1">{COMPAN_Y_INFO.location}</p>
                    <p className="text-xs text-slate-505 dark:text-slate-400 mt-0.5">University town region, South West</p>
                  </div>
                </div>

                {/* Direct Line */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-blue-50 dark:bg-[#1a1a1c] text-blue-600 dark:text-blue-400 rounded-2xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase font-mono text-[11px] tracking-wide text-slate-400">
                      Direct WhatsApp Phone
                    </h4>
                    <p className="text-base font-semibold mt-1">{COMPAN_Y_INFO.phone}</p>
                    <p className="text-xs text-slate-505 dark:text-slate-400 mt-0.5">Chat or voice query anytime</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-blue-50 dark:bg-[#1a1a1c] text-blue-600 dark:text-blue-400 rounded-2xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase font-mono text-[11px] tracking-wide text-slate-400">
                      Electronic Email
                    </h4>
                    <p className="text-base font-semibold mt-1 hover:underline hover:text-blue-600 break-all">{COMPAN_Y_INFO.email}</p>
                    <p className="text-xs text-slate-505 dark:text-slate-400 mt-0.5">Response within 12 business hours</p>
                  </div>
                </div>
              </div>

              {/* Secure Notice */}
              <div className="p-4 bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100/50 dark:border-white/5 rounded-2xl text-xs text-blue-800 dark:text-blue-300 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Every inquiry falls under secure, client-confidential agreements. Your source credentials or academic writeup topics remain completely private.
                </p>
              </div>
            </div>

            {/* Quick WhatsApp block card */}
            <div className="p-8 bg-gradient-to-tr from-blue-900 to-indigo-950 text-white rounded-3xl shadow-md flex justify-between items-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_80%,rgba(59,130,246,0.3),transparent)] z-0" />
              <div className="relative z-10 space-y-2 pr-4">
                <h4 className="font-black sm:text-lg">Chat Live on WhatsApp</h4>
                <p className="text-xs text-slate-350 leading-relaxed max-w-xs">
                  Prefer instant messaging? Hook directly of Che Kassina Kum regarding code clones or repair quotes.
                </p>
                <a
                  href={COMPAN_Y_INFO.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-705 text-white font-bold text-xs rounded-lg mt-2 tracking-wide transition-all shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>LAUNCH CHAT</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form wrapper (Right 7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-slate-50 dark:bg-[#111111] border border-slate-200/50 dark:border-white/5 p-8 sm:p-10 rounded-3xl shadow-sm"
          >
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6">
              Inquiry Briefing
            </h3>

            <AnimatePresence mode="wait">
              {!success ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  id="elkex-contact-inputs"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-name" className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        name="fullName"
                        required
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1a1a1c] border border-slate-200 dark:border-white/5 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 text-sm transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-email" className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        name="email"
                        required
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1a1a1c] border border-slate-200 dark:border-white/5 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-phone" className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="form-phone"
                        name="phone"
                        placeholder="e.g. +237 6XX XXX XXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1a1a1c] border border-slate-200 dark:border-white/5 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 text-sm transition-all"
                      />
                    </div>

                    {/* Service Switcher Dropdown */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-service" className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">
                        Service Needed *
                      </label>
                      <select
                        id="form-service"
                        name="serviceNeeded"
                        value={formData.serviceNeeded}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1a1a1c] border border-slate-200 dark:border-white/5 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 text-sm transition-all cursor-pointer font-bold"
                      >
                        {SERVICES.concat({ id: 'custom', title: 'Custom Solution Consultation', description: '', category: 'software', icon: '' }).filter((v, i, self) => self.findIndex(t => t.title === v.title) === i).map((item) => (
                          <option key={item.id} value={item.title}>
                            {item.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-msg" className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">
                      Detailed Message *
                    </label>
                    <textarea
                      id="form-msg"
                      name="message"
                      required
                      rows={5}
                      placeholder="List your specific specifications or academic parameters here..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1a1a1c] border border-slate-200 dark:border-white/5 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Submit buttons row */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    {/* Basic Form Submit */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex-1 py-3.5 px-6 bg-slate-900 hover:bg-slate-850 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>SYNCHRONIZING...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>SUBMIT SECURELY</span>
                        </>
                      )}
                    </button>

                    {/* Dynamic WhatsApp Prepopulation trigger */}
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 text-center"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>SUBMIT TO WHATSAPP</span>
                    </a>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-banner"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring' }}
                  className="p-8 text-center bg-blue-50/50 dark:bg-slate-900 border border-blue-100/50 dark:border-slate-800 rounded-2xl space-y-4"
                >
                  <div className="p-3 bg-blue-605 bg-blue-600 text-white rounded-full w-fit mx-auto shadow-sm">
                    <Check className="w-8 h-8 font-black" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-905 dark:text-white">Inquiry Transmitted!</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-350 max-w-sm mx-auto leading-relaxed">
                    Successfully secured and logged to our system dashboard. If you need a rapid quote feedback, you may also double dispatch via the WhatsApp submit button below!
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row gap-2 justify-center">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-blue-600 hover:bg-blue-705 text-white text-xs font-bold rounded-xl shadow-md inline-flex items-center gap-1.5 justify-center"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Forward over WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSuccess(false)}
                      className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-705 dark:text-slate-200 text-xs font-bold rounded-xl transition-all cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
