import React, { useState } from 'react';
import { X, Download, Award, Briefcase, GraduationCap, Code, Mail, MapPin, Printer } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCE, SKILL_CATEGORIES } from '../data';

interface CVModalProps {
  isOpen: boolean;
  theme: 'light' | 'dark';
  onClose: () => void;
}

export default function CVModal({ isOpen, theme, onClose }: CVModalProps) {
  const [viewMode, setViewMode] = useState<'interactive' | 'pdf'>('interactive');

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Subham_Sahoo_Resume.pdf';
    link.download = 'Subham_Sahoo_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const triggerPrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className={`relative w-full max-w-4xl max-h-[90vh] border rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 transition-colors duration-300 ${
              theme === 'dark' ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'
            }`}
          >
            {/* Modal Header */}
            <div className={`flex items-center justify-between p-5 border-b transition-colors duration-300 ${
              theme === 'dark' ? 'border-white/10 bg-slate-950/40' : 'border-slate-200 bg-slate-50/60'
            }`}>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></div>
                <h3 className={`font-display font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  Curriculum Vitae
                </h3>
              </div>

              {/* View Mode Switcher */}
              <div className="flex items-center gap-1 p-0.5 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/5">
                <button
                  onClick={() => setViewMode('interactive')}
                  className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    viewMode === 'interactive'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : theme === 'dark'
                        ? 'text-slate-400 hover:text-white'
                        : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  Interactive
                </button>
                <button
                  onClick={() => setViewMode('pdf')}
                  className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    viewMode === 'pdf'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : theme === 'dark'
                        ? 'text-slate-400 hover:text-white'
                        : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  PDF Resume
                </button>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={triggerPrint}
                  className={`p-2 rounded-lg transition-colors cursor-pointer ${
                    theme === 'dark' ? 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950'
                  }`}
                  title="Print CV"
                >
                  <Printer size={16} />
                </button>
                <button
                  onClick={downloadCV}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition-colors cursor-pointer"
                >
                  <Download size={13} />
                  <span>Download</span>
                </button>
                <button
                  onClick={onClose}
                  className={`p-2 rounded-lg transition-colors ml-1 cursor-pointer ${
                    theme === 'dark' ? 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Scrollable CV Document */}
            {viewMode === 'pdf' ? (
              <div className="flex-1 w-full bg-slate-950/20 relative flex flex-col items-center justify-center p-2 sm:p-4 min-h-[500px]">
                <iframe
                  src="/Subham_Sahoo_Resume.pdf"
                  className="w-full h-full flex-1 min-h-[520px] border-0 rounded-xl shadow-lg bg-white"
                  title="Subham Sahoo Resume PDF"
                />
              </div>
            ) : (
              <div className={`flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 print:p-0 transition-colors duration-300 ${
                theme === 'dark' ? 'bg-slate-950/30 text-slate-300' : 'bg-slate-50/20 text-slate-700'
              }`}>
              {/* Document Header */}
              <div className={`border-b pb-6 ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'}`}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <h1 className={`font-display font-bold text-3xl tracking-tight transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>
                      {PERSONAL_INFO.name}
                    </h1>
                    <p className="text-indigo-600 font-mono text-sm mt-1 font-bold uppercase tracking-wider">
                      {PERSONAL_INFO.title}
                    </p>
                    <p className={`text-xs sm:text-sm font-light mt-2 max-w-xl transition-colors ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {PERSONAL_INFO.subTitle}
                    </p>
                  </div>

                  {/* Contact Block */}
                  <div className={`space-y-1.5 text-xs font-mono border-l sm:border-l-0 sm:pl-0 pl-3 transition-colors ${
                    theme === 'dark' ? 'text-slate-400 border-indigo-500/30' : 'text-slate-600 border-indigo-200'
                  }`}>
                    <div className="flex items-center gap-2">
                      <Mail size={13} className="text-indigo-600" />
                      <a href={PERSONAL_INFO.socials.email} className="hover:text-indigo-500 hover:underline transition-colors font-medium">
                        project4315@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={13} className="text-indigo-600" />
                      <span>Chennai, TN, India</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={13} className="text-indigo-600" />
                      <span>CIT Undergrad B.E. CSE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Grid block */}
              <div className="space-y-3">
                <h4 className={`font-display font-bold text-sm uppercase tracking-widest flex items-center gap-2 transition-colors ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-800'
                }`}>
                  <GraduationCap size={15} className="text-indigo-600" />
                  <span>Education</span>
                </h4>
                <div className={`p-4 rounded-xl border space-y-2 transition-all duration-300 ${
                  theme === 'dark' ? 'bg-slate-900/50 border-white/5' : 'bg-white border-slate-200 shadow-xs'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h5 className={`font-display font-bold text-sm transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>
                      {PERSONAL_INFO.education.institution}
                    </h5>
                    <span className="text-xs font-mono text-indigo-600 font-bold">
                      {PERSONAL_INFO.education.duration}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className={`text-xs font-semibold font-mono transition-colors ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {PERSONAL_INFO.education.degree}
                    </p>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                      theme === 'dark' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                    }`}>
                      {PERSONAL_INFO.education.grade}
                    </span>
                  </div>
                </div>
              </div>

              {/* Experience timeline block */}
              <div className="space-y-3">
                <h4 className={`font-display font-bold text-sm uppercase tracking-widest flex items-center gap-2 transition-colors ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-800'
                }`}>
                  <Briefcase size={15} className="text-indigo-600" />
                  <span>Work Milestones</span>
                </h4>
                <div className="space-y-4">
                  {EXPERIENCE.map((job) => (
                    <div key={job.id} className={`p-4 rounded-xl border space-y-3 transition-all duration-300 ${
                      theme === 'dark' ? 'bg-slate-900/50 border-white/5' : 'bg-white border-slate-200 shadow-xs'
                    }`}>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div>
                          <h5 className={`font-display font-bold text-sm transition-colors ${
                            theme === 'dark' ? 'text-white' : 'text-slate-900'
                          }`}>
                            {job.role}
                          </h5>
                          <span className="text-xs text-indigo-600 font-mono font-semibold">
                            {job.company}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-slate-500">
                          {job.duration}
                        </span>
                      </div>
                      <ul className={`space-y-1.5 pl-4 list-disc text-xs leading-normal transition-colors ${
                        theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx} className="font-light">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Skill Groups block */}
              <div className="space-y-3">
                <h4 className={`font-display font-bold text-sm uppercase tracking-widest flex items-center gap-2 transition-colors ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-800'
                }`}>
                  <Code size={15} className="text-indigo-600" />
                  <span>Technical Expertise</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SKILL_CATEGORIES.map((cat) => (
                    <div key={cat.id} className={`p-4 rounded-xl border transition-all duration-300 ${
                      theme === 'dark' ? 'bg-slate-900/50 border-white/5' : 'bg-white border-slate-200 shadow-xs'
                    }`}>
                      <h5 className="font-mono text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-2">
                        {cat.name}
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.skills.map((skill) => (
                          <span key={skill.name} className={`px-2 py-0.5 rounded text-[11px] border transition-colors ${
                            theme === 'dark' ? 'bg-white/5 text-slate-400 border-white/5' : 'bg-slate-100 text-slate-600 border-slate-200/50'
                          }`}>
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key projects preview block */}
              <div className="space-y-3">
                <h4 className={`font-display font-bold text-sm uppercase tracking-widest flex items-center gap-2 transition-colors ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-800'
                }`}>
                  <Award size={15} className="text-indigo-600" />
                  <span>Showstopper Projects</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PROJECTS.map((project) => (
                    <div key={project.id} className={`p-4 rounded-xl border flex flex-col justify-between transition-all duration-300 ${
                      theme === 'dark' ? 'bg-slate-900/50 border-white/5' : 'bg-white border-slate-200 shadow-xs'
                    }`}>
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h5 className={`font-display font-bold text-xs sm:text-sm transition-colors ${
                            theme === 'dark' ? 'text-white' : 'text-slate-950'
                          }`}>
                            {project.title}
                          </h5>
                          <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${
                            theme === 'dark' ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' : 'bg-indigo-50 text-indigo-600 border-indigo-100'
                          }`}>
                            {project.category}
                          </span>
                        </div>
                        <p className={`text-[11px] font-light leading-snug line-clamp-2 transition-colors ${
                          theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className={`text-[8px] font-mono px-1 rounded border ${
                            theme === 'dark' ? 'bg-white/5 text-slate-500 border-white/5' : 'bg-slate-100 text-slate-500 border-slate-200/50'
                          }`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications verification summary */}
              <div className={`space-y-3 pt-4 border-t text-center ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'}`}>
                <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider font-semibold">
                  Accredited by: Google AIML, Amazon Web Services (AWS), IBM, and NPTEL
                </span>
              </div>
            </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
