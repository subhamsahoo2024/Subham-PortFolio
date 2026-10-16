import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Award, 
  Calendar, 
  ExternalLink, 
  Github, 
  Edit3, 
  Plus, 
  Maximize2, 
  X, 
  Upload, 
  Check, 
  RotateCcw,
  Sparkles,
  ChevronRight,
  DollarSign
} from 'lucide-react';
import { HackathonWin } from '../types';
import { HACKATHONS as DEFAULT_HACKATHONS } from '../data';

interface HackathonExperienceProps {
  theme: 'light' | 'dark';
}

const STORAGE_KEY = 'subham_portfolio_hackathons_v3';

export default function HackathonExperience({ theme }: HackathonExperienceProps) {
  const [hackathons, setHackathons] = useState<HackathonWin[]>(() => {
    try {
      // Clear out previous versions cache if exists
      localStorage.removeItem('subham_portfolio_hackathons_v1');
      localStorage.removeItem('subham_portfolio_hackathons_v2');
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to parse saved hackathons', e);
    }
    return DEFAULT_HACKATHONS;
  });

  // Lightbox Modal state
  const [activePhoto, setActivePhoto] = useState<HackathonWin | null>(null);

  // Edit / Add Modal state
  const [editingItem, setEditingItem] = useState<HackathonWin | null>(null);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Form fields
  const [formTitle, setFormTitle] = useState('');
  const [formOrganizer, setFormOrganizer] = useState('');
  const [formAward, setFormAward] = useState('');
  const [formRankBadge, setFormRankBadge] = useState('');
  const [formPrize, setFormPrize] = useState('');
  const [formDate, setFormDate] = useState('');
  const [formProjectName, setFormProjectName] = useState('');
  const [formProjectRepo, setFormProjectRepo] = useState('');
  const [formProjectDemo, setFormProjectDemo] = useState('');
  const [formImage, setFormImage] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formHighlights, setFormHighlights] = useState('');
  const [formSkills, setFormSkills] = useState('');

  // Persist to localStorage whenever hackathons state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(hackathons));
    } catch (e) {
      console.error('Failed to save hackathons to localStorage', e);
    }
  }, [hackathons]);

  const handleOpenEdit = (item: HackathonWin) => {
    setIsAddMode(false);
    setEditingItem(item);
    setFormTitle(item.title);
    setFormOrganizer(item.organizer);
    setFormAward(item.award);
    setFormRankBadge(item.rankBadge);
    setFormPrize(item.prize);
    setFormDate(item.date);
    setFormProjectName(item.projectName);
    setFormProjectRepo(item.projectRepo || '');
    setFormProjectDemo(item.projectDemo || '');
    setFormImage(item.image);
    setFormDescription(item.description);
    setFormHighlights(item.highlights.join('\n'));
    setFormSkills(item.skills.join(', '));
    setIsEditModalOpen(true);
  };

  const handleOpenAdd = () => {
    setIsAddMode(true);
    setEditingItem(null);
    setFormTitle('');
    setFormOrganizer('');
    setFormAward('Winner (1st Place)');
    setFormRankBadge('🏆 1st Place Winner');
    setFormPrize('Cash Prize');
    setFormDate(new Date().getFullYear().toString());
    setFormProjectName('');
    setFormProjectRepo('');
    setFormProjectDemo('');
    setFormImage('/images/hackathons/odoo_win.jpg');
    setFormDescription('');
    setFormHighlights('Secured 1st Place\nBuilt innovative AI full-stack application\nPresented to industry panel');
    setFormSkills('React, Next.js, TypeScript, AI');
    setIsEditModalOpen(true);
  };

  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setFormImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const highlightsArr = formHighlights
      .split('\n')
      .map((h) => h.trim())
      .filter(Boolean);

    const skillsArr = formSkills
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    if (isAddMode) {
      const newItem: HackathonWin = {
        id: `hackathon-${Date.now()}`,
        title: formTitle || 'Hackathon Championship',
        organizer: formOrganizer || 'National Hackathon',
        award: formAward || 'Winner (1st Place)',
        rankBadge: formRankBadge || '🏆 1st Place',
        prize: formPrize || 'Cash Prize',
        date: formDate || '2026',
        projectName: formProjectName || 'AI Hackathon Project',
        projectRepo: formProjectRepo || undefined,
        projectDemo: formProjectDemo || undefined,
        image: formImage || '/images/hackathons/odoo_win.jpg',
        description: formDescription,
        highlights: highlightsArr.length > 0 ? highlightsArr : ['Outstanding technical performance'],
        skills: skillsArr.length > 0 ? skillsArr : ['Full-Stack', 'AI'],
      };
      setHackathons([newItem, ...hackathons]);
    } else if (editingItem) {
      const updated = hackathons.map((h) => {
        if (h.id === editingItem.id) {
          return {
            ...h,
            title: formTitle,
            organizer: formOrganizer,
            award: formAward,
            rankBadge: formRankBadge,
            prize: formPrize,
            date: formDate,
            projectName: formProjectName,
            projectRepo: formProjectRepo || undefined,
            projectDemo: formProjectDemo || undefined,
            image: formImage,
            description: formDescription,
            highlights: highlightsArr,
            skills: skillsArr,
          };
        }
        return h;
      });
      setHackathons(updated);
    }
    setIsEditModalOpen(false);
  };

  const [showResetFeedback, setShowResetFeedback] = useState(false);

  const handleResetDefaults = () => {
    setHackathons(DEFAULT_HACKATHONS);
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem('subham_portfolio_hackathons_v1');
      localStorage.removeItem('subham_portfolio_hackathons_v2');
    } catch (e) {
      console.error(e);
    }
    setShowResetFeedback(true);
    setTimeout(() => setShowResetFeedback(false), 2500);
  };

  return (
    <div className="mb-24">
      {/* Hackathon Section Eyebrow & Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-amber-500"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-semibold flex items-center gap-1.5">
              <Trophy size={14} className="text-amber-500" />
              Championships &amp; Victories
            </span>
          </div>
          <h2 className={`font-display font-bold text-3xl sm:text-4xl transition-colors ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Hackathon Experience
          </h2>
          <p className={`mt-2 text-sm sm:text-base max-w-2xl font-light leading-relaxed transition-colors ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Proven engineering leadership under intense time constraints. 4 prestigious national podium victories, over ₹3,55,000+ in cash prizes, and recognition by Google Developer Groups.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleOpenAdd}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-amber-500/20 active:scale-98 cursor-pointer"
            title="Add a new hackathon entry"
          >
            <Plus size={15} />
            <span>Add Win</span>
          </button>
          <button
            onClick={handleResetDefaults}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-mono transition-colors cursor-pointer ${
              showResetFeedback
                ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400'
                : theme === 'dark' 
                  ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10' 
                  : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 shadow-xs'
            }`}
            title="Reset to default 4 hackathon wins"
          >
            {showResetFeedback ? <Check size={13} className="text-emerald-400" /> : <RotateCcw size={13} />}
            <span>{showResetFeedback ? 'Restored!' : 'Defaults'}</span>
          </button>
        </div>
      </div>

      {/* Grid of 4 Hackathon Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {hackathons.map((hackathon, idx) => (
          <motion.div
            key={hackathon.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`group rounded-2xl border backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-slate-900/60 border-white/10 hover:border-amber-500/40 hover:shadow-[0_12px_40px_-15px_rgba(245,158,11,0.2)]'
                : 'bg-slate-50/90 border-slate-200/90 hover:border-amber-500/50 hover:bg-white shadow-sm hover:shadow-[0_12px_40px_-15px_rgba(245,158,11,0.15)]'
            }`}
          >
            <div>
              {/* Photo Showcase Container with Slow Enlarge & Glow on Hover/Click */}
              <div 
                className="relative w-full aspect-video sm:aspect-[16/9] overflow-hidden bg-slate-950 cursor-pointer select-none"
                onClick={() => setActivePhoto(hackathon)}
                title="Click photo to enlarge & view details"
              >
                {/* Background Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
                
                {/* The Photo itself with slow enlargement and glowing aura */}
                <motion.img
                  src={hackathon.image}
                  alt={`${hackathon.title} Victory Photo`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-108"
                />

                {/* Glowing Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-indigo-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

                {/* Top-Left Rank Badge */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-lg backdrop-blur-md bg-amber-500/90 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/30">
                  <Trophy size={13} className="text-slate-950" />
                  <span>{hackathon.rankBadge}</span>
                </div>

                {/* Top-Right Prize Tag */}
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-3 py-1 rounded-lg backdrop-blur-md bg-emerald-950/85 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-semibold shadow-lg shadow-emerald-950/50">
                  <DollarSign size={13} className="text-emerald-400" />
                  <span>{hackathon.prize}</span>
                </div>

                {/* Bottom Overlaid Details on Image */}
                <div className="absolute bottom-3 left-3 right-3 z-20 flex items-end justify-between gap-3">
                  <div className="bg-slate-950/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 max-w-[80%]">
                    <p className="text-[11px] font-mono uppercase text-amber-400 font-semibold tracking-wide">
                      Project: {hackathon.projectName}
                    </p>
                  </div>
                  
                  {/* Zoom Hint Icon */}
                  <div className="p-2 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 text-white/80 group-hover:text-amber-400 group-hover:scale-110 transition-all shadow-md">
                    <Maximize2 size={14} />
                  </div>
                </div>
              </div>

              {/* Card Body Information */}
              <div className="p-6">
                {/* Title & Metadata */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className={`font-display font-bold text-xl transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>
                      {hackathon.title}
                    </h3>
                    <p className="text-xs font-semibold text-indigo-500 mt-0.5">
                      {hackathon.organizer}
                    </p>
                  </div>

                  <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-mono w-fit self-start sm:self-auto transition-colors ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/10 text-slate-400'
                      : 'bg-white border-slate-200 text-slate-600 shadow-xs'
                  }`}>
                    <Calendar size={13} />
                    <span>{hackathon.date}</span>
                  </div>
                </div>

                {/* Description */}
                <p className={`text-sm font-light leading-relaxed mb-4 transition-colors ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {hackathon.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-2 mb-5">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                    Key Achievements:
                  </p>
                  <ul className="space-y-1.5">
                    {hackathon.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className={`flex items-start gap-2 text-xs font-light leading-relaxed ${
                        theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        <Sparkles size={13} className="text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Chips */}
                <div className={`flex flex-wrap gap-1.5 pt-4 border-t ${
                  theme === 'dark' ? 'border-white/5' : 'border-slate-200'
                }`}>
                  {hackathon.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                        theme === 'dark'
                          ? 'bg-amber-500/10 border border-amber-500/20 text-amber-300'
                          : 'bg-amber-50 border border-amber-200 text-amber-700 font-medium'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer: Project Links + Edit Button */}
            <div className={`px-6 py-3.5 border-t flex items-center justify-between gap-3 ${
              theme === 'dark' ? 'border-white/5 bg-slate-950/40' : 'border-slate-200/80 bg-slate-100/50'
            }`}>
              <div className="flex items-center gap-3">
                {hackathon.projectRepo && (
                  <a
                    href={hackathon.projectRepo}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
                      theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    <Github size={14} />
                    <span>Code</span>
                  </a>
                )}
                {hackathon.projectDemo && (
                  <a
                    href={hackathon.projectDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-indigo-500 hover:text-indigo-400 transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Demo</span>
                  </a>
                )}
              </div>

              {/* Edit Details Button */}
              <button
                onClick={() => handleOpenEdit(hackathon)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-950 shadow-xs'
                }`}
                title="Edit details or photo for this win"
              >
                <Edit3 size={13} />
                <span>Edit Details &amp; Photo</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FULLSCREEN PHOTO LIGHTBOX MODAL WITH SLOW ENLARGE & GLOW */}
      <AnimatePresence>
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePhoto(null)}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-xl"
            />

            {/* Lightbox Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden border shadow-2xl flex flex-col z-10 transition-colors ${
                theme === 'dark' ? 'bg-slate-900 border-amber-500/30 shadow-[0_0_60px_rgba(245,158,11,0.25)]' : 'bg-white border-slate-200 shadow-2xl'
              }`}
            >
              {/* Lightbox Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-slate-950 text-white">
                <div className="flex items-center gap-2">
                  <Trophy size={18} className="text-amber-400" />
                  <span className="font-display font-bold text-base sm:text-lg">{activePhoto.title}</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 font-mono">
                    {activePhoto.rankBadge}
                  </span>
                </div>
                <button
                  onClick={() => setActivePhoto(null)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Enlarged Photo Container with slow pulsating radiant glow */}
              <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[460px] overflow-hidden p-2">
                <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent pointer-events-none" />
                <motion.img
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="max-h-[60vh] w-auto max-w-full object-contain rounded-lg shadow-[0_0_40px_rgba(245,158,11,0.3)]"
                />
              </div>

              {/* Lightbox Caption & Details Footer */}
              <div className={`p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t ${
                theme === 'dark' ? 'bg-slate-950/80 border-white/10 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'
              }`}>
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-amber-500 font-semibold mb-1">
                    <span>{activePhoto.organizer}</span>
                    <span>•</span>
                    <span>{activePhoto.date}</span>
                    <span>•</span>
                    <span className="text-emerald-500">{activePhoto.prize}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-light max-w-2xl leading-relaxed">
                    {activePhoto.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto flex-shrink-0">
                  <button
                    onClick={() => {
                      const item = activePhoto;
                      setActivePhoto(null);
                      handleOpenEdit(item);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs shadow-md cursor-pointer"
                  >
                    <Edit3 size={13} />
                    <span>Edit Photo/Info</span>
                  </button>
                  <button
                    onClick={() => setActivePhoto(null)}
                    className="px-3 py-1.5 rounded-lg border border-white/20 text-xs font-semibold hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* EDIT / ADD HACKATHON DETAILS & PHOTO MODAL */}
      <AnimatePresence>
        {isEditModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEditModalOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className={`relative max-w-2xl w-full max-h-[90vh] rounded-2xl border shadow-2xl flex flex-col overflow-hidden z-10 transition-colors ${
                theme === 'dark' ? 'bg-slate-900 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              {/* Header */}
              <div className={`p-5 border-b flex items-center justify-between ${
                theme === 'dark' ? 'border-white/10 bg-slate-950/50' : 'border-slate-200 bg-slate-50'
              }`}>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-amber-500/20 text-amber-500">
                    <Trophy size={18} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg">
                      {isAddMode ? 'Add Hackathon Win' : 'Edit Hackathon Details & Photo'}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">
                      Update details, achievements, and custom photo
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-4">
                {/* Photo Upload / URL Section */}
                <div className={`p-4 rounded-xl border ${
                  theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
                }`}>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider mb-2 text-amber-500 flex items-center gap-1.5">
                    <Upload size={14} />
                    <span>Hackathon Photo</span>
                  </label>
                  
                  {/* Photo Preview */}
                  {formImage && (
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-amber-500/30 mb-3 bg-black">
                      <img src={formImage} alt="Preview" className="w-full h-full object-cover" />
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/70 text-[10px] font-mono text-amber-400">
                        Live Preview
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">Upload Photo from Device:</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageFileUpload}
                        className="text-xs file:mr-2 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-amber-500 file:text-slate-950 hover:file:bg-amber-400 cursor-pointer w-full text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">Or Image URL:</label>
                      <input
                        type="text"
                        value={formImage}
                        onChange={(e) => setFormImage(e.target.value)}
                        placeholder="/images/hackathons/odoo_win.jpg"
                        className={`w-full px-3 py-1.5 rounded-lg border text-xs font-mono focus:outline-none focus:ring-1 focus:ring-amber-500 ${
                          theme === 'dark' ? 'bg-slate-950 border-white/10 text-white' : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Title & Organizer */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase mb-1">
                      Event Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formTitle}
                      onChange={(e) => setFormTitle(e.target.value)}
                      placeholder="e.g. Odoo Hackathon 2026"
                      className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        theme === 'dark' ? 'bg-slate-950 border-white/10 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase mb-1">
                      Organizer *
                    </label>
                    <input
                      type="text"
                      required
                      value={formOrganizer}
                      onChange={(e) => setFormOrganizer(e.target.value)}
                      placeholder="e.g. Odoo India"
                      className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        theme === 'dark' ? 'bg-slate-950 border-white/10 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>
                </div>

                {/* Rank Badge & Prize & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase mb-1">
                      Rank Badge *
                    </label>
                    <input
                      type="text"
                      required
                      value={formRankBadge}
                      onChange={(e) => setFormRankBadge(e.target.value)}
                      placeholder="e.g. 🏆 1st Place / 8,000+"
                      className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        theme === 'dark' ? 'bg-slate-950 border-white/10 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase mb-1">
                      Prize Won *
                    </label>
                    <input
                      type="text"
                      required
                      value={formPrize}
                      onChange={(e) => setFormPrize(e.target.value)}
                      placeholder="e.g. ₹1,70,000 Cash Prize"
                      className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        theme === 'dark' ? 'bg-slate-950 border-white/10 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase mb-1">
                      Year / Date *
                    </label>
                    <input
                      type="text"
                      required
                      value={formDate}
                      onChange={(e) => setFormDate(e.target.value)}
                      placeholder="e.g. 2026"
                      className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        theme === 'dark' ? 'bg-slate-950 border-white/10 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>
                </div>

                {/* Project Name & Demo / Code links */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase mb-1">
                      Project Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formProjectName}
                      onChange={(e) => setFormProjectName(e.target.value)}
                      placeholder="e.g. GuardianLink"
                      className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        theme === 'dark' ? 'bg-slate-950 border-white/10 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase mb-1">
                      GitHub Repo URL
                    </label>
                    <input
                      type="url"
                      value={formProjectRepo}
                      onChange={(e) => setFormProjectRepo(e.target.value)}
                      placeholder="https://github.com/..."
                      className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        theme === 'dark' ? 'bg-slate-950 border-white/10 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase mb-1">
                      Live Demo URL
                    </label>
                    <input
                      type="url"
                      value={formProjectDemo}
                      onChange={(e) => setFormProjectDemo(e.target.value)}
                      placeholder="https://..."
                      className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        theme === 'dark' ? 'bg-slate-950 border-white/10 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase mb-1">
                    Description *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formDescription}
                    onChange={(e) => setFormDescription(e.target.value)}
                    placeholder="Briefly describe what you built, problem solved, and how you won..."
                    className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                      theme === 'dark' ? 'bg-slate-950 border-white/10 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                {/* Highlights (one per line) */}
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase mb-1">
                    Key Highlights &amp; Achievements (one per line)
                  </label>
                  <textarea
                    rows={3}
                    value={formHighlights}
                    onChange={(e) => setFormHighlights(e.target.value)}
                    placeholder="Ranked 1st place among 8,000+ participants&#10;Engineered real-time asynchronous data pipeline&#10;Awarded ₹1,70,000 cash prize"
                    className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                      theme === 'dark' ? 'bg-slate-950 border-white/10 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                {/* Tech Skills */}
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase mb-1">
                    Technologies Used (comma separated)
                  </label>
                  <input
                    type="text"
                    value={formSkills}
                    onChange={(e) => setFormSkills(e.target.value)}
                    placeholder="Python, FastAPI, Next.js, LLMs, Leaflet"
                    className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                      theme === 'dark' ? 'bg-slate-950 border-white/10 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                {/* Modal Footer Controls */}
                <div className={`pt-4 border-t flex items-center justify-between ${
                  theme === 'dark' ? 'border-white/10' : 'border-slate-200'
                }`}>
                  <button
                    type="button"
                    onClick={() => setIsEditModalOpen(false)}
                    className="px-4 py-2 rounded-lg border border-slate-300 dark:border-white/10 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex items-center gap-1.5 px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 active:scale-98 transition-all cursor-pointer"
                  >
                    <Check size={14} />
                    <span>Save Details</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
