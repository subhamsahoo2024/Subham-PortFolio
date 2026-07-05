import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Sparkles, Map, Compass, Activity, MessageSquare, Rocket, ShieldCheck, BookOpen, Gamepad2 } from 'lucide-react';
import { PROJECTS } from '../data';

interface ProjectsGridProps {
  theme: 'light' | 'dark';
}

export default function ProjectsGrid({ theme }: ProjectsGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'AI', 'Full-Stack Web Development', 'Web3 & Blockchain Engineering'];

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.categories.includes(activeCategory);
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    },
    hover: {
      y: -6,
      scale: 1.02,
      borderColor: theme === 'dark' ? 'rgba(99, 102, 241, 0.45)' : 'rgba(99, 102, 241, 0.6)',
      boxShadow: theme === 'dark' ? '0 20px 40px -15px rgba(99, 102, 241, 0.35)' : '0 20px 40px -15px rgba(99, 102, 241, 0.12)',
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  return (
    <section id="projects" className={`py-24 relative transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-100/50 text-slate-800'
    }`}>
      {/* Background soft lighting overlays */}
      <div className={`absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[120px] -z-10 transition-colors ${
        theme === 'dark' ? 'bg-emerald-500/5' : 'bg-emerald-500/3'
      }`}></div>
      <div className={`absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full blur-[100px] -z-10 transition-colors ${
        theme === 'dark' ? 'bg-indigo-600/5' : 'bg-indigo-600/3'
      }`}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header & Tabs Split */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-indigo-500"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-indigo-500 font-semibold">Showcase</span>
            </div>
            <h2 className={`font-display font-bold text-3xl sm:text-4xl transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Featured Projects
            </h2>
          </div>

          {/* Interactive Category Tabs */}
          <div className={`flex items-center gap-1.5 p-1 rounded-xl border backdrop-blur-md w-fit transition-colors ${
            theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                  activeCategory === category
                    ? 'text-white font-bold'
                    : theme === 'dark'
                      ? 'text-slate-400 hover:text-slate-200'
                      : 'text-slate-500 hover:text-slate-950'
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="active-project-tab"
                    className="absolute inset-0 bg-indigo-600 rounded-lg shadow-md shadow-indigo-600/20"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Filterable Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                whileHover="hover"
                className={`group p-6 sm:p-8 rounded-2xl border backdrop-blur-md flex flex-col justify-between transition-all duration-300 h-full relative ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10'
                    : 'bg-white border-slate-200/80 shadow-md shadow-slate-100/30'
                }`}
              >
                {/* Visual grid accent inside cards */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--inner-grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--inner-grid)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] rounded-2xl pointer-events-none opacity-40" style={{ '--inner-grid': theme === 'dark' ? '#312e810a' : '#6366f108' } as React.CSSProperties}></div>

                <div className="relative z-10">
                  {/* Mock Browser Project Screenshot Placeholder */}
                  <div className={`relative w-full h-44 mb-6 rounded-xl border overflow-hidden transition-all duration-300 flex flex-col group-hover:border-indigo-500/30 ${
                    theme === 'dark' ? 'bg-slate-900/80 border-white/10' : 'bg-slate-50 border-slate-200'
                  }`}>
                    {/* Browser Tab Header */}
                    <div className={`flex items-center justify-between px-3 py-2 border-b transition-colors duration-300 ${
                      theme === 'dark' ? 'bg-slate-950/50 border-white/5' : 'bg-slate-200/40 border-slate-200'
                    }`}>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500/80"></span>
                        <span className="w-2 h-2 rounded-full bg-amber-500/80"></span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500/80"></span>
                      </div>
                      <div className={`px-2 py-0.5 rounded text-[9px] font-mono truncate max-w-[150px] sm:max-w-[200px] transition-colors ${
                        theme === 'dark' ? 'bg-slate-950 text-slate-500' : 'bg-white text-slate-400'
                      }`}>
                        {project.demo.replace('https://', '')}
                      </div>
                      <div className="w-8"></div>
                    </div>

                    {/* Screenshot Content Area */}
                    <div className="flex-1 relative flex items-center justify-center overflow-hidden">
                      {/* Grid background matching project style */}
                      <div className={`absolute inset-0 opacity-10 transition-colors duration-300 ${
                        project.categories.includes('Web3 & Blockchain Engineering')
                          ? 'bg-purple-500'
                          : project.categories.includes('Full-Stack Web Development')
                            ? 'bg-indigo-500'
                            : 'bg-emerald-500'
                      }`} />

                      {/* Mock Visual Artwork Centered */}
                      <div className="text-center p-4 z-10 flex flex-col items-center gap-1.5">
                        <div className={`p-2.5 rounded-full transition-colors ${
                          project.categories.includes('Web3 & Blockchain Engineering')
                            ? theme === 'dark' ? 'bg-purple-500/10 text-purple-400' : 'bg-purple-50 text-purple-600'
                            : project.categories.includes('Full-Stack Web Development')
                              ? theme === 'dark' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
                              : theme === 'dark' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600'
                        }`}>
                          {project.id === 'guardianlink' && <Map className="w-5 h-5" />}
                          {project.id === 'navx' && <Compass className="w-5 h-5" />}
                          {project.id === 'smart-heart' && <Activity className="w-5 h-5" />}
                          {project.id === 'intervion-ai' && <MessageSquare className="w-5 h-5" />}
                          {project.id === 'innovex' && <Rocket className="w-5 h-5" />}
                          {project.id === 'blocktracked' && <ShieldCheck className="w-5 h-5" />}
                          {project.id === 'think-book' && <BookOpen className="w-5 h-5" />}
                          {project.id === 'mini-games-hub' && <Gamepad2 className="w-5 h-5" />}
                        </div>
                        <span className={`text-[11px] font-mono font-medium tracking-wide transition-colors ${
                          theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          [ Screenshot Placeholder ]
                        </span>
                        <span className="text-[9px] font-mono text-slate-500">
                          Swap with /assets/projects/{project.id}.jpg
                        </span>
                      </div>

                      {/* Subtle radial masking vignette */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                    </div>
                  </div>

                  {/* Category and Tech indicators */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.categories.map((cat) => (
                        <span
                          key={cat}
                          className={`px-2 py-0.5 rounded text-[10px] font-semibold font-mono border ${
                            cat === 'AI'
                              ? theme === 'dark'
                                ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                                : 'bg-emerald-50 text-emerald-600 border-emerald-200'
                              : cat === 'Full-Stack Web Development'
                                ? theme === 'dark'
                                  ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20'
                                  : 'bg-indigo-50 text-indigo-600 border-indigo-200'
                                : theme === 'dark'
                                  ? 'bg-purple-500/10 text-purple-300 border-purple-500/20'
                                  : 'bg-purple-50 text-purple-600 border-purple-200'
                          }`}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-slate-500 font-mono">
                      <Sparkles size={11} className="text-indigo-500" />
                      <span>Elite Build</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className={`font-display font-bold text-xl sm:text-2xl mb-3 transition-colors ${
                    theme === 'dark' ? 'text-white group-hover:text-indigo-400' : 'text-slate-900 group-hover:text-indigo-600'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`font-light text-sm leading-relaxed mb-6 transition-colors ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className={`mb-6 pt-4 border-t ${theme === 'dark' ? 'border-white/5' : 'border-slate-100'}`}>
                    <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider block mb-2.5">Core Engineering Goals</span>
                    <ul className="space-y-2">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className={`flex items-start gap-2.5 text-xs leading-normal font-light transition-colors ${
                          theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                        }`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer with skills pills and action buttons */}
                <div className="relative z-10">
                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono border transition-colors ${
                          theme === 'dark'
                            ? 'bg-white/5 text-slate-400 border-white/5'
                            : 'bg-slate-100 text-slate-600 border-slate-200/60 shadow-xs'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Action Buttons */}
                  <div className={`flex items-center gap-3 pt-4 border-t ${theme === 'dark' ? 'border-white/5' : 'border-slate-100'}`}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs sm:text-sm font-semibold rounded-lg border transition-all duration-200 cursor-pointer ${
                        theme === 'dark'
                          ? 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 shadow-xs'
                      }`}
                    >
                      <Github size={14} />
                      <span>Source Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs sm:text-sm font-semibold rounded-lg bg-indigo-600 text-white shadow-md shadow-indigo-600/10 hover:bg-indigo-500 hover:shadow-indigo-500/25 transition-all duration-200 group/btn cursor-pointer"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
