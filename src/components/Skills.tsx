import { motion } from 'motion/react';
import { Code, Target } from 'lucide-react';
import { SKILL_CATEGORIES, SOFT_SKILLS } from '../data';

interface SkillsProps {
  theme: 'light' | 'dark';
}

export default function Skills({ theme }: SkillsProps) {
  const cardHoverVariants = {
    hover: {
      y: -4,
      borderColor: theme === 'dark' ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.5)',
      boxShadow: theme === 'dark' ? '0 10px 25px -15px rgba(99, 102, 241, 0.2)' : '0 10px 25px -15px rgba(99, 102, 241, 0.1)',
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  const getCategoryColor = (categoryId: string) => {
    switch (categoryId) {
      case 'languages':
        return {
          bar: 'from-indigo-600 to-cyan-500',
          text: 'text-indigo-600 dark:text-indigo-400',
          dot: 'bg-indigo-500'
        };
      case 'frontend':
        return {
          bar: 'from-pink-600 to-rose-500',
          text: 'text-pink-600 dark:text-pink-400',
          dot: 'bg-pink-500'
        };
      case 'backend':
        return {
          bar: 'from-amber-600 to-orange-500',
          text: 'text-amber-600 dark:text-amber-400',
          dot: 'bg-amber-500'
        };
      case 'databases':
        return {
          bar: 'from-emerald-600 to-teal-500',
          text: 'text-emerald-600 dark:text-emerald-400',
          dot: 'bg-emerald-500'
        };
      case 'tools':
        return {
          bar: 'from-purple-600 to-fuchsia-500',
          text: 'text-purple-600 dark:text-purple-400',
          dot: 'bg-purple-500'
        };
      case 'aiml':
        return {
          bar: 'from-blue-600 to-sky-500',
          text: 'text-blue-600 dark:text-blue-400',
          dot: 'bg-blue-500'
        };
      case 'corescs':
        return {
          bar: 'from-violet-600 to-indigo-500',
          text: 'text-violet-600 dark:text-violet-400',
          dot: 'bg-violet-500'
        };
      default:
        return {
          bar: 'from-emerald-600 to-emerald-400',
          text: 'text-emerald-600 dark:text-emerald-400',
          dot: 'bg-emerald-500'
        };
    }
  };

  return (
    <section id="skills" className={`py-24 relative border-t transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-950 border-white/5' : 'bg-slate-50 border-slate-200'
    }`}>
      {/* Background ambient light */}
      <div className={`absolute top-1/3 left-0 w-[450px] h-[450px] rounded-full blur-[130px] -z-10 transition-colors ${
        theme === 'dark' ? 'bg-indigo-600/5' : 'bg-indigo-600/3'
      }`}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-emerald-500"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-500 font-semibold">Capabilities</span>
          </div>
          <h2 className={`font-display font-bold text-3xl sm:text-4xl transition-colors ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Core Skills &amp; Key Strengths
          </h2>
        </div>

        {/* Stacked Layout */}
        <div className="space-y-12">
          
          {/* Top Block: Technical Skills (Full Width) */}
          <div className="w-full">
            <div className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10'
                : 'bg-white border-slate-200/80 shadow-sm shadow-slate-100/50'
            }`}>
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-2.5 rounded-lg border transition-colors ${
                  theme === 'dark'
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    : 'bg-emerald-50 border-emerald-200 text-emerald-600'
                }`}>
                  <Code size={20} />
                </div>
                <div>
                  <h3 className={`font-display font-bold text-xl transition-colors ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>Technical Architecture</h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">Modern, scalable developer stack</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10">
                {SKILL_CATEGORIES.map((category) => {
                  const colors = getCategoryColor(category.id);
                  return (
                    <div key={category.id} className="space-y-4">
                      <div className="flex items-center gap-2 border-b pb-2 border-slate-100 dark:border-white/5">
                        <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                        <h4 className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                          {category.name}
                        </h4>
                      </div>
                      <div className="space-y-4">
                        {category.skills.map((skill, sIdx) => (
                          <div key={sIdx} className="space-y-1.5 group select-none cursor-default">
                            <div className="flex justify-between items-center">
                              <span className={`text-xs font-semibold tracking-wide transition-colors ${
                                theme === 'dark'
                                  ? `text-slate-300 group-hover:${colors.text}`
                                  : `text-slate-700 group-hover:${colors.text}`
                              }`}>
                                {skill.name}
                              </span>
                            </div>
                            
                            {skill.level && (
                              <div className={`h-1.5 w-full rounded-full overflow-hidden border transition-colors ${
                                theme === 'dark' ? 'bg-slate-950 border-white/5' : 'bg-slate-100/60 border-slate-200/50'
                              }`}>
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1.2, ease: 'easeOut', delay: sIdx * 0.05 }}
                                  className={`h-full rounded-full bg-gradient-to-r ${colors.bar}`}
                                />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Block: Soft Skills (Full Width) */}
          <div className="w-full">
            <div className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10'
                : 'bg-white border-slate-200/80 shadow-sm shadow-slate-100/50'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-lg border transition-colors ${
                  theme === 'dark'
                    ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400'
                    : 'bg-indigo-50 border-indigo-200 text-indigo-600'
                }`}>
                  <Target size={20} />
                </div>
                <div>
                  <h3 className={`font-display font-bold text-xl transition-colors ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>Soft Skills &amp; Mindset</h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">Metrics-driven engineering strengths</p>
                </div>
              </div>

              {/* Grid of metric-led points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SOFT_SKILLS.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover="hover"
                    variants={cardHoverVariants}
                    className={`p-5 rounded-xl border transition-all duration-300 group cursor-default ${
                      theme === 'dark'
                        ? 'bg-slate-900/50 border-white/5 hover:bg-slate-900/80'
                        : 'bg-slate-50/80 border-slate-200/60 hover:bg-indigo-50/20 shadow-xs'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className={`font-display font-bold text-base transition-colors ${
                        theme === 'dark' ? 'text-white group-hover:text-indigo-400' : 'text-slate-800 group-hover:text-indigo-600'
                      }`}>
                        {item.title}
                      </h4>
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 border border-indigo-500/20 whitespace-nowrap">
                        {item.metric}
                      </span>
                    </div>
                    <p className={`text-xs sm:text-sm font-light leading-relaxed transition-colors ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
