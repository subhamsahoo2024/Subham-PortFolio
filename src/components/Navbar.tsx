import { useState, useEffect } from 'react';
import { Menu, X, Download, FileText, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onOpenCVModal: () => void;
}

export default function Navbar({ theme, onToggleTheme, onOpenCVModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const downloadCV = () => {
    // Generate simple programmatic resume payload to let the browser download it.
    // In a real scenario, this is a PDF, we can use a data URL or a mock text resume.
    const cvContent = `
========================================
SUBHAM SAHOO - PORTFOLIO RESUME
========================================
Title: Building Scalable Full-Stack AI Solutions
Email: project4315@gmail.com
Phone: +91 xxxxxxxxxx
Education: Chennai Institute of Technology, B.E. CSE (2024 - 2028) | CGPA: 8.9/10

EXPERIENCE:
1. Influenco (May 2026 - June 2026) | Frontend Developer Intern
   - Architected high-fidelity web dashboards with rich interactive tables.
   - Designed responsive, component-driven layouts with Tailwind & Framer Motion.
2. Dynx Business Solutions (Nov 2025) | Full Stack Web Developer Intern
   - Built clean RESTful APIs in Node.js/Express to handle core database queries.

TECHNICAL SKILLS:
- Languages: C++, Java, Python, TypeScript, JavaScript
- Frontend: React, Next.js, Tailwind CSS, HTML5/CSS3, Framer Motion
- Backend: Node.js, Express, REST APIs, FastAPI
- Databases: MongoDB, Supabase, MySQL, Firebase

PROJECTS:
- GuardianLink: Next.js, Firebase, LLaMa 4, Leaflet.js
- NavX: Next.js, MongoDB, Gemini API, Canvas API
- Smart Heart: FastAPI, Python, PyTorch, React, Recharts
- Intervion AI: React, TypeScript, LLaMa 3.1, Node.js

CERTIFICATIONS:
- Google AIML Certification
- NPTEL Python Data Analytics
- NPTEL Internet of Things (IoT)
- AWS Cloud Practitioner
- IBM AI Fundamentals
========================================
    `;
    const blob = new Blob([cvContent.trim()], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Subham_Sahoo_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-slate-950/75 backdrop-blur-md border-b border-white/10 shadow-lg shadow-indigo-950/20'
            : 'bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-lg shadow-slate-100/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleScrollTo('hero')}
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-indigo-600 to-emerald-500 font-bold text-white text-lg tracking-wider">
            SS
            <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-indigo-600 to-emerald-500 blur-sm -z-10 opacity-60"></div>
          </div>
          <span className={`font-display font-bold text-xl tracking-tight bg-gradient-to-r bg-clip-text text-transparent ${
            theme === 'dark' ? 'from-white via-slate-200 to-slate-400' : 'from-slate-900 via-slate-700 to-slate-500'
          }`}>
            Subham Sahoo
          </span>
        </motion.div>

        {/* Desktop Nav Items */}
        <nav className={`hidden md:flex items-center gap-1 p-1.5 rounded-full backdrop-blur-md border ${
          theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-100/80 border-slate-200'
        }`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 cursor-pointer ${
                activeSection === item.id
                  ? theme === 'dark' ? 'text-white' : 'text-indigo-600 font-semibold'
                  : theme === 'dark' ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="active-pill"
                  className={`absolute inset-0 rounded-full border ${
                    theme === 'dark' ? 'bg-indigo-600/30 border-indigo-500/50' : 'bg-indigo-50 border-indigo-200'
                  }`}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggler */}
          <button
            onClick={onToggleTheme}
            className={`p-2 rounded-lg border transition-all duration-200 active:scale-95 cursor-pointer ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10 text-amber-400 hover:bg-white/10 hover:text-amber-300'
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200 hover:text-indigo-600'
            }`}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            onClick={onOpenCVModal}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border transition-all duration-200 active:scale-98 cursor-pointer ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
            }`}
          >
            <FileText size={15} />
            <span>View CV</span>
          </button>
          <button
            onClick={downloadCV}
            className="group relative flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-600 text-white overflow-hidden shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/35 transition-all duration-300 active:scale-98 cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <Download size={15} className="group-hover:translate-y-[1px] transition-transform duration-200" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className={`p-2 rounded-lg border active:scale-95 transition-all cursor-pointer ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10 text-amber-400'
                : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={onOpenCVModal}
            className={`p-2 rounded-lg border active:scale-95 cursor-pointer ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10 text-slate-300'
                : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}
            title="View CV"
          >
            <FileText size={18} />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg border active:scale-95 cursor-pointer ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10 text-slate-300'
                : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden mt-4 rounded-xl border backdrop-blur-lg overflow-hidden shadow-2xl ${
              theme === 'dark'
                ? 'border-white/10 bg-slate-900/95 shadow-indigo-950/40'
                : 'border-slate-200 bg-white/95 shadow-slate-200/50'
            }`}
          >
            <div className="p-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    activeSection === item.id
                      ? theme === 'dark'
                        ? 'bg-indigo-600/20 text-indigo-400 border-l-2 border-indigo-500'
                        : 'bg-indigo-50 text-indigo-600 border-l-2 border-indigo-500'
                      : theme === 'dark'
                        ? 'text-slate-300 hover:bg-white/5'
                        : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className={`h-[1px] my-1 ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-100'}`}></div>

              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenCVModal();
                  }}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg border active:scale-98 cursor-pointer ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/10 text-slate-300'
                      : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  <FileText size={15} />
                  <span>View CV</span>
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    downloadCV();
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg bg-indigo-600 text-white active:scale-98 cursor-pointer"
                >
                  <Download size={15} />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
