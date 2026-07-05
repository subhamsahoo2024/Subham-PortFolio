import { motion } from 'motion/react';
import { GraduationCap, ArrowUpRight, Brain } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface AboutEducationProps {
  theme: 'light' | 'dark';
}

export default function AboutEducation({ theme }: AboutEducationProps) {
  const cardHoverVariants = {
    hover: {
      y: -6,
      scale: 1.015,
      borderColor: theme === 'dark' ? 'rgba(99, 102, 241, 0.4)' : 'rgba(99, 102, 241, 0.6)',
      boxShadow: theme === 'dark' ? '0 10px 30px -15px rgba(99, 102, 241, 0.3)' : '0 10px 30px -15px rgba(99, 102, 241, 0.12)',
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  return (
    <section id="about" className={`py-24 relative border-t transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-950/60 border-white/5' : 'bg-white border-slate-200/60'
    }`}>
      {/* Background radial accent */}
      <div className={`absolute top-1/2 right-0 w-[350px] h-[350px] rounded-full blur-[100px] -z-10 transition-colors ${
        theme === 'dark' ? 'bg-emerald-500/5' : 'bg-emerald-500/3'
      }`}></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-indigo-500"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-indigo-500 font-semibold">Background</span>
          </div>
          <h2 className={`font-display font-bold text-3xl sm:text-4xl transition-colors ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            About Me &amp; Education
          </h2>
        </div>

        {/* Horizontal Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: About Me Paragraph (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <motion.div
              whileHover="hover"
              variants={cardHoverVariants}
              className={`flex-1 p-6 sm:p-8 rounded-2xl border backdrop-blur-md flex flex-col justify-between transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10'
                  : 'bg-slate-50 border-slate-200/80 shadow-sm shadow-slate-100/50'
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-lg border transition-colors ${
                    theme === 'dark'
                      ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400'
                      : 'bg-indigo-50 border-indigo-200 text-indigo-600'
                  }`}>
                    <Brain size={20} />
                  </div>
                  <h3 className={`font-display font-bold text-xl transition-colors ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>My Mission</h3>
                </div>
                
                <p className={`font-light leading-relaxed mb-6 transition-colors ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {PERSONAL_INFO.about}
                </p>
                <p className={`font-light leading-relaxed transition-colors ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  My key focus lies in compiling deep logic into fast, lightweight solutions. I am particularly excited about how multimodal artificial intelligence (Vision, LLMs) can streamline physical logistics, education, and crisis triage.
                </p>
              </div>

              {/* Quick stats grid inside About */}
              <div className={`grid grid-cols-2 gap-4 mt-8 pt-8 border-t ${
                theme === 'dark' ? 'border-white/5' : 'border-slate-200'
              }`}>
                <div className="flex flex-col gap-1">
                  <span className="font-display font-bold text-2xl text-emerald-500 tracking-tight">8.9</span>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Undergrad CGPA</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-display font-bold text-2xl text-indigo-600 tracking-tight">36hr</span>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Hackathon Sprints</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Education Card (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              whileHover="hover"
              variants={cardHoverVariants}
              className={`h-full p-6 sm:p-8 rounded-2xl border backdrop-blur-md flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10'
                  : 'bg-slate-50 border-slate-200/80 shadow-sm shadow-slate-100/50'
              }`}
            >
              {/* Subtle background glow card top-right */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-indigo-500/10 rounded-full blur-2xl"></div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-lg border transition-colors ${
                    theme === 'dark'
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                      : 'bg-emerald-50 border-emerald-200 text-emerald-600'
                  }`}>
                    <GraduationCap size={20} />
                  </div>
                  <h3 className={`font-display font-bold text-xl transition-colors ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>Education</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className={`font-display font-semibold text-lg transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>
                      {PERSONAL_INFO.education.institution}
                    </h4>
                    <p className="text-sm text-indigo-600 font-mono mt-1 font-medium">
                      {PERSONAL_INFO.education.degree}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <span className={`px-2.5 py-1 rounded text-xs font-semibold font-mono ${
                        theme === 'dark' ? 'bg-indigo-500/10 text-indigo-300' : 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                      }`}>
                        {PERSONAL_INFO.education.duration}
                      </span>
                      <span className={`px-2.5 py-1 rounded text-xs font-bold font-mono ${
                        theme === 'dark' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                      }`}>
                        {PERSONAL_INFO.education.grade}
                      </span>
                    </div>
                  </div>

                  <div className={`border-t pt-5 ${theme === 'dark' ? 'border-white/5' : 'border-slate-200'}`}>
                    <span className="text-xs font-mono uppercase text-slate-500 tracking-wider block mb-3">Academic Highlights</span>
                    <ul className="space-y-2.5">
                      {PERSONAL_INFO.education.highlights.map((highlight, idx) => (
                        <li key={idx} className={`flex items-start gap-2.5 text-xs leading-normal transition-colors ${
                          theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`mt-8 pt-4 border-t flex items-center justify-between ${
                theme === 'dark' ? 'border-white/5' : 'border-slate-200'
              }`}>
                <span className="text-xs font-mono text-slate-500">Based in Chennai, India</span>
                <a
                  href="https://www.citchennai.edu.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-500 hover:underline transition-colors font-semibold"
                >
                  <span>Institution site</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
