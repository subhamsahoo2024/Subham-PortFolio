import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Calendar, DollarSign, ExternalLink, Github, Maximize2, Sparkles, Trophy, X } from 'lucide-react';
import { HACKATHONS } from '../data';
import { HackathonWin } from '../types';

interface HackathonExperienceProps {
  theme: 'light' | 'dark';
}

export default function HackathonExperience({ theme }: HackathonExperienceProps) {
  const [activePhoto, setActivePhoto] = useState<HackathonWin | null>(null);

  return (
    <div id="hackathons" data-cursor-tip="Hackathon experience & 4 podium wins" className="mb-24">
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-[1px] bg-amber-500" />
          <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-semibold flex items-center gap-1.5">
            <Trophy size={14} /> Championships &amp; Victories
          </span>
        </div>
        <h2 className={`font-display font-bold text-3xl sm:text-4xl ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          Hackathon Experience
        </h2>
        <p className={`mt-2 text-sm sm:text-base max-w-2xl font-light leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
          Proven engineering leadership under intense time constraints. 4 prestigious national podium victories, over ₹3,55,000+ in cash prizes, and recognition by Google Developer Groups.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {HACKATHONS.map((hackathon, index) => (
          <motion.article
            key={hackathon.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            data-cursor-tip={`Hackathon: ${hackathon.title} (${hackathon.award})`}
            className={`group rounded-2xl border backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-300 ${theme === 'dark' ? 'bg-slate-900/60 border-white/10 hover:border-amber-500/40' : 'bg-slate-50/90 border-slate-200/90 hover:border-amber-500/50 hover:bg-white shadow-sm'}`}
          >
            <div>
              <button type="button" className="relative block w-full aspect-video overflow-hidden bg-slate-950 cursor-pointer select-none text-left" onClick={() => setActivePhoto(hackathon)} title="Click photo to enlarge and view details">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-80" />
                <motion.img src={hackathon.image} alt={`${hackathon.title} Victory Photo`} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/90 text-slate-950 font-bold text-xs">
                  <Trophy size={13} /><span>{hackathon.rankBadge}</span>
                </div>
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-950/85 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-semibold">
                  <DollarSign size={13} /><span>{hackathon.prize}</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 z-20 flex items-end justify-between gap-3">
                  <div className="bg-slate-950/70 px-3 py-1.5 rounded-lg border border-white/10 max-w-[80%]">
                    <p className="text-[11px] font-mono uppercase text-amber-400 font-semibold tracking-wide">Project: {hackathon.projectName}</p>
                  </div>
                  <span className="p-2 rounded-lg bg-slate-950/80 border border-white/10 text-white/80"><Maximize2 size={14} /></span>
                </div>
              </button>

              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className={`font-display font-bold text-xl ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{hackathon.title}</h3>
                    <p className="text-xs font-semibold text-indigo-500 mt-0.5">{hackathon.organizer}</p>
                  </div>
                  <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-mono w-fit ${theme === 'dark' ? 'bg-white/5 border-white/10 text-slate-400' : 'bg-white border-slate-200 text-slate-600'}`}>
                    <Calendar size={13} /><span>{hackathon.date}</span>
                  </div>
                </div>
                <p className={`text-sm font-light leading-relaxed mb-4 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{hackathon.description}</p>
                <div className="space-y-2 mb-5">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">Key Achievements:</p>
                  <ul className="space-y-1.5">
                    {hackathon.highlights.map((highlight) => (
                      <li key={highlight} className={`flex items-start gap-2 text-xs font-light leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                        <Sparkles size={13} className="text-amber-500 mt-0.5 flex-shrink-0" /><span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`flex flex-wrap gap-1.5 pt-4 border-t ${theme === 'dark' ? 'border-white/5' : 'border-slate-200'}`}>
                  {hackathon.skills.map((skill) => <span key={skill} className={`px-2 py-0.5 rounded text-[11px] font-mono ${theme === 'dark' ? 'bg-amber-500/10 border border-amber-500/20 text-amber-300' : 'bg-amber-50 border border-amber-200 text-amber-700'}`}>{skill}</span>)}
                </div>
              </div>
            </div>

            <div className={`px-6 py-3.5 border-t flex items-center gap-3 ${theme === 'dark' ? 'border-white/5 bg-slate-950/40' : 'border-slate-200/80 bg-slate-100/50'}`}>
              {hackathon.projectRepo && <a href={hackathon.projectRepo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900"><Github size={14} /><span>Code</span></a>}
              {hackathon.projectDemo && <a href={hackathon.projectDemo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-indigo-500 hover:text-indigo-400"><ExternalLink size={14} /><span>Demo</span></a>}
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <button type="button" aria-label="Close photo viewer" onClick={() => setActivePhoto(null)} className="absolute inset-0 bg-slate-950/85 backdrop-blur-xl cursor-default" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className={`relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden border shadow-2xl flex flex-col z-10 ${theme === 'dark' ? 'bg-slate-900 border-amber-500/30' : 'bg-white border-slate-200'}`}>
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-slate-950 text-white">
                <div className="flex items-center gap-2"><Trophy size={18} className="text-amber-400" /><span className="font-display font-bold text-base sm:text-lg">{activePhoto.title}</span></div>
                <button type="button" onClick={() => setActivePhoto(null)} aria-label="Close photo viewer" className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white"><X size={18} /></button>
              </div>
              <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[460px] overflow-hidden p-2">
                <motion.img initial={{ scale: 0.95 }} animate={{ scale: 1 }} src={activePhoto.image} alt={activePhoto.title} className="max-h-[60vh] w-auto max-w-full object-contain rounded-lg" />
              </div>
              <div className={`p-5 border-t ${theme === 'dark' ? 'bg-slate-950/80 border-white/10 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'}`}>
                <div className="flex items-center gap-2 font-mono text-xs text-amber-500 font-semibold mb-1"><span>{activePhoto.organizer}</span><span>•</span><span>{activePhoto.date}</span><span>•</span><span className="text-emerald-500">{activePhoto.prize}</span></div>
                <p className="text-xs sm:text-sm font-light max-w-2xl leading-relaxed">{activePhoto.description}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
