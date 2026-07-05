import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Github, Mail, ArrowRight, Download, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeroProps {
  theme: 'light' | 'dark';
  onOpenCVModal: () => void;
}

export default function Hero({ theme, onOpenCVModal }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Subham_Sahoo_Resume.pdf';
    link.download = 'Subham_Sahoo_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
      }`}
    >
      {/* Background radial glow */}
      <div className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] -z-10 animate-pulse duration-5000 transition-colors ${
        theme === 'dark' ? 'bg-indigo-600/10' : 'bg-indigo-600/5'
      }`}></div>
      <div className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] -z-10 animate-pulse duration-7000 transition-colors ${
        theme === 'dark' ? 'bg-emerald-500/5' : 'bg-emerald-500/3'
      }`}></div>

      {/* Cyber grid background */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-15`} style={{ '--grid-color': theme === 'dark' ? '#1f29370a' : '#64748b0a' } as React.CSSProperties}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: High-impact Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border w-fit text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm transition-colors ${
              theme === 'dark'
                ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400 shadow-indigo-950/40'
                : 'bg-indigo-50 border-indigo-200 text-indigo-600 shadow-slate-200/40'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span>Available for Internships & Projects</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className={`font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6 leading-[1.1] transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-400 to-emerald-500 font-extrabold">{PERSONAL_INFO.name}</span>
            <span className={`block mt-2 text-2xl sm:text-3xl lg:text-4xl font-normal transition-colors ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {PERSONAL_INFO.title}
            </span>
          </motion.h1>

          {/* Subtitle description */}
          <motion.p
            variants={itemVariants}
            className={`text-base sm:text-lg max-w-xl mb-8 leading-relaxed font-light transition-colors ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {PERSONAL_INFO.subTitle}
          </motion.p>

          {/* Direct CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            <button
              onClick={onOpenCVModal}
              className="group flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 hover:bg-indigo-500 transition-all duration-300 active:scale-98 cursor-pointer"
            >
              <FileText size={18} className="text-indigo-200 group-hover:scale-105 transition-transform" />
              <span>View Full CV / Resume</span>
              <ArrowRight size={16} className="text-indigo-300 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={downloadCV}
              className={`flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl border transition-all duration-300 active:scale-98 cursor-pointer ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white hover:border-white/20'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 shadow-sm shadow-slate-100/50'
              }`}
            >
              <Download size={18} className={theme === 'dark' ? 'text-slate-400' : 'text-slate-500'} />
              <span>Download CV (PDF)</span>
            </button>
          </motion.div>

          {/* Floating Minimalist Social Links (Bottom Left of Hero) */}
          <motion.div
            variants={itemVariants}
            className={`flex items-center gap-6 border-t pt-8 w-fit ${
              theme === 'dark' ? 'border-white/5' : 'border-slate-200'
            }`}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500">Connect:</span>
            <div className="flex items-center gap-4">
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`p-2 rounded-lg border transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-500/5'
                    : 'bg-white border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 shadow-sm'
                }`}
                title="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className={`p-2 rounded-lg border transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-500/5'
                    : 'bg-white border-slate-200 text-slate-500 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50 shadow-sm'
                }`}
                title="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href={PERSONAL_INFO.socials.email}
                className={`p-2 rounded-lg border transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-slate-400 hover:text-rose-400 hover:border-rose-500/30 hover:bg-rose-500/5'
                    : 'bg-white border-slate-200 text-slate-500 hover:text-rose-600 hover:border-rose-200 hover:bg-rose-50 shadow-sm'
                }`}
                title="Email Me Directly"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Beautiful High-Tech Animated Geometric Avatar Outline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
            
            {/* Soft glowing background rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600/15 to-emerald-500/5 blur-[35px] animate-pulse -z-10"></div>
            
            {/* Rotating Outer Ring 1 - Indigo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
              className="absolute w-[95%] h-[95%] rounded-full border border-dashed border-indigo-500/30 -z-5"
            />

            {/* Rotating Outer Ring 2 - Emerald */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              className="absolute w-[85%] h-[85%] rounded-full border border-dotted border-emerald-500/30 -z-5"
            />

            {/* Pulsating Ring 3 */}
            <motion.div
              animate={{ scale: [0.96, 1.04, 0.96] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute w-[75%] h-[75%] rounded-full border border-indigo-500/10 -z-5 bg-gradient-to-tr from-indigo-950/20 to-slate-900/10 backdrop-blur-3xl"
            />

            {/* Primary Profile Silhouette Area */}
            <div className={`absolute w-[68%] h-[68%] rounded-full border-2 flex items-center justify-center overflow-hidden shadow-2xl transition-all duration-300 group hover:border-indigo-500/50 ${
              theme === 'dark'
                ? 'bg-slate-900 border-white/10 shadow-indigo-950/50'
                : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50'
            }`}>
              
              {/* Geometric matrix grid background inside avatar */}
              <div className={`absolute inset-0 bg-[linear-gradient(to_right,var(--grid-inner)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-inner)_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-60`} style={{ '--grid-inner': theme === 'dark' ? '#312e811f' : '#6366f10d' } as React.CSSProperties}></div>
              
              {/* Stylized vector silhouette */}
              <svg
                viewBox="0 0 100 100"
                className={`w-full h-full group-hover:text-indigo-950/30 transition-colors duration-500 ${
                  theme === 'dark' ? 'text-slate-800' : 'text-slate-200'
                }`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background ambient circular paths */}
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" />
                
                {/* Modern Geometric Cyber Avatar */}
                <path
                  d="M50 22C41.7 22 35 28.7 35 37C35 44.1 40 50 46.7 51.6V56.7H31C24.4 56.7 19 62.1 19 68.7V78H81V68.7C81 62.1 75.6 56.7 69 56.7H53.3V51.6C60 50 65 44.1 65 37C65 28.7 58.3 22 50 22Z"
                  fill="url(#avatar-grad)"
                  className="opacity-90 group-hover:opacity-100 transition-opacity"
                />
                
                {/* Concentric node coordinates */}
                <circle cx="50" cy="37" r="2.5" fill="#a5b4fc" />
                <line x1="50" y1="37" x2="50" y2="51.6" stroke="#6366f1" strokeWidth="1" />
                <line x1="31" y1="68.7" x2="69" y2="68.7" stroke="#10b981" strokeWidth="0.8" strokeDasharray="2 2" />

                <defs>
                  <linearGradient id="avatar-grad" x1="50" y1="22" x2="50" y2="78" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#818cf8" />
                    <stop offset="45%" stopColor="#4f46e5" />
                    <stop offset="100%" stopColor={theme === 'dark' ? '#0f172a' : '#e2e8f0'} />
                  </linearGradient>
                </defs>
              </svg>

              {/* Holographic binary numbers floating in avatar (very subtle) */}
              <div className={`absolute inset-0 flex flex-col justify-between p-6 opacity-20 pointer-events-none font-mono text-[9px] select-none ${
                theme === 'dark' ? 'text-emerald-400' : 'text-indigo-600'
              }`}>
                <div className="flex justify-between">
                  <span>01011</span>
                  <span>10010</span>
                </div>
                <div className="flex justify-between">
                  <span>11001</span>
                  <span>01110</span>
                </div>
              </div>
            </div>

            {/* Glowing Orbiting Widgets */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className={`absolute top-[12%] right-[8%] p-2 rounded-xl border shadow-lg backdrop-blur-md flex items-center gap-2 select-none ${
                theme === 'dark'
                  ? 'bg-slate-900/90 border-white/10 text-slate-300'
                  : 'bg-white border-slate-200 text-slate-700 shadow-slate-200/50'
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className={`font-mono text-[10px] font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>Next.js + AI</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut', delay: 0.5 }}
              className={`absolute bottom-[18%] left-[2%] p-2.5 rounded-xl border shadow-lg backdrop-blur-md flex items-center gap-2 select-none ${
                theme === 'dark'
                  ? 'bg-slate-900/90 border-white/10 text-indigo-300'
                  : 'bg-white border-slate-200 text-indigo-600 shadow-slate-200/50'
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
              <span className="font-mono text-[10px] font-medium">8.9 CGPA</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Down Arrow */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={handleScrollToProjects}>
        <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Showstopper Projects</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-1.5 h-6 rounded-full bg-gradient-to-b from-indigo-500 to-transparent"
        />
      </div>
    </section>
  );
}
