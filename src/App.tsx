import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutEducation from './components/AboutEducation';
import Skills from './components/Skills';
import ExperienceCertifications from './components/ExperienceCertifications';
import ProjectsGrid from './components/ProjectsGrid';
import CVModal from './components/CVModal';
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from './data';

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Read from localStorage if available, default to 'dark'
    const saved = localStorage.getItem('portfolio-theme');
    return (saved === 'light' || saved === 'dark') ? saved : 'dark';
  });

  useEffect(() => {
    // Update theme state and body attributes
    localStorage.setItem('portfolio-theme', theme);
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#030712';
      document.body.style.color = '#f3f4f6';
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.body.style.backgroundColor = '#f8fafc';
      document.body.style.color = '#0f172a';
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      id="portfolio-container"
      className={`min-h-screen flex flex-col relative transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
      }`}
    >
      {/* Floating Header */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} onOpenCVModal={() => setIsCVModalOpen(true)} />

      {/* Primary Layout Sections */}
      <main className="flex-1">
        <Hero theme={theme} onOpenCVModal={() => setIsCVModalOpen(true)} />
        <AboutEducation theme={theme} />
        <Skills theme={theme} />
        <ExperienceCertifications theme={theme} />
        <ProjectsGrid theme={theme} />
      </main>

      {/* Visual Footer */}
      <footer
        id="portfolio-footer"
        className={`py-12 px-6 md:px-8 relative z-10 overflow-hidden border-t transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-slate-950 border-white/10'
            : 'bg-white border-slate-200 shadow-lg shadow-slate-100/50'
        }`}
      >
        {/* Soft bottom decorative ambient glow */}
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 rounded-full blur-[70px] -z-10 pointer-events-none transition-colors ${
          theme === 'dark' ? 'bg-indigo-600/10' : 'bg-indigo-600/5'
        }`}></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className={`font-display font-bold text-lg tracking-tight transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Subham Sahoo
            </p>
            <p className="text-xs text-slate-500 font-mono mt-1">
              Building Scalable Full-Stack AI Solutions • 2026 Developer Portfolio
            </p>
          </div>

          {/* Social connections and Back-to-top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`transition-colors ${
                  theme === 'dark' ? 'text-slate-400 hover:text-indigo-400' : 'text-slate-500 hover:text-indigo-600'
                }`}
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className={`transition-colors ${
                  theme === 'dark' ? 'text-slate-400 hover:text-emerald-400' : 'text-slate-500 hover:text-emerald-600'
                }`}
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={PERSONAL_INFO.socials.email}
                className={`transition-colors ${
                  theme === 'dark' ? 'text-slate-400 hover:text-rose-400' : 'text-slate-500 hover:text-rose-600'
                }`}
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>

            <div className={`w-[1px] h-4 ${theme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}`}></div>

            <button
              onClick={scrollToTop}
              className={`p-2 rounded-lg border transition-all cursor-pointer active:scale-95 ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                  : 'bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-950 hover:border-slate-300 shadow-xs'
              }`}
              title="Scroll to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </footer>

      {/* Interactive CV Drawer Modal */}
      <CVModal isOpen={isCVModalOpen} theme={theme} onClose={() => setIsCVModalOpen(false)} />
    </div>
  );
}
