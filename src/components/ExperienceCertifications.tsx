import { motion } from 'motion/react';
import { Calendar, ShieldCheck, ChevronRight } from 'lucide-react';
import { EXPERIENCE, CERTIFICATIONS } from '../data';

interface ExperienceCertificationsProps {
  theme: 'light' | 'dark';
}

export default function ExperienceCertifications({ theme }: ExperienceCertificationsProps) {
  const cardHoverVariants = {
    hover: {
      scale: 1.015,
      borderColor: theme === 'dark' ? 'rgba(99, 102, 241, 0.4)' : 'rgba(99, 102, 241, 0.6)',
      boxShadow: theme === 'dark' ? '0 10px 30px -15px rgba(99, 102, 241, 0.25)' : '0 10px 30px -15px rgba(99, 102, 241, 0.12)',
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  return (
    <section id="experience" className={`py-24 relative border-t transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-950/60 border-white/5' : 'bg-white border-slate-200/60'
    }`}>
      {/* Background radial soft light */}
      <div className={`absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full blur-[110px] -z-10 transition-colors ${
        theme === 'dark' ? 'bg-indigo-600/5' : 'bg-indigo-600/3'
      }`}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Experience Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-indigo-500"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-indigo-500 font-semibold">Milestones</span>
          </div>
          <h2 className={`font-display font-bold text-3xl sm:text-4xl transition-colors ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Professional Experience
          </h2>
        </div>

        {/* Experience Chronological Timeline */}
        <div className={`relative max-w-4xl mx-auto pl-6 sm:pl-8 border-l space-y-12 mb-20 ${
          theme === 'dark' ? 'border-white/10' : 'border-slate-200'
        }`}>
          {EXPERIENCE.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Chronological Timeline Circle Node */}
              <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-colors ${
                theme === 'dark' ? 'bg-slate-950' : 'bg-white'
              } ${
                idx === 0 
                  ? 'border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]' 
                  : theme === 'dark' ? 'border-slate-700' : 'border-slate-300'
              }`} />

              <div className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10'
                  : 'bg-slate-50 border-slate-200/80 shadow-sm shadow-slate-100/50'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className={`font-display font-bold text-xl transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>
                      {job.role}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-600 mt-0.5">
                      {job.company}
                    </p>
                  </div>
                  
                  {/* Calendar Badge */}
                  <div className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border text-xs font-mono w-fit transition-colors ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/10 text-slate-400'
                      : 'bg-white border-slate-200 text-slate-600 shadow-xs'
                  }`}>
                    <Calendar size={13} />
                    <span>{job.duration}</span>
                  </div>
                </div>

                {/* Achievements List */}
                <ul className="space-y-3 mb-6">
                   {job.achievements.map((achievement, aIdx) => (
                    <li key={aIdx} className={`flex items-start gap-2.5 text-sm font-light leading-relaxed transition-colors ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      <ChevronRight size={16} className="text-emerald-500 mt-1 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Technical Skills tagged in job */}
                <div className={`flex flex-wrap gap-2 pt-4 border-t ${
                  theme === 'dark' ? 'border-white/5' : 'border-slate-200'
                }`}>
                  <span className="text-[10px] font-mono uppercase text-slate-500 self-center mr-2">Key Stack:</span>
                  {job.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-2 py-0.5 rounded text-xs font-mono ${
                        theme === 'dark'
                          ? 'bg-indigo-500/10 border border-indigo-500/20 text-indigo-300'
                          : 'bg-indigo-50 border border-indigo-100 text-indigo-600 font-medium'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className={`border-t pt-16 ${theme === 'dark' ? 'border-white/5' : 'border-slate-200'}`}>
          
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-emerald-500"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-500 font-semibold">Verification</span>
            </div>
            <h3 className={`font-display font-bold text-2xl transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Industry Certifications
            </h3>
          </div>

          {/* Grid of Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <motion.div
                key={cert.id}
                whileHover="hover"
                variants={cardHoverVariants}
                className={`p-5 rounded-xl border backdrop-blur-md flex flex-col justify-between transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 hover:bg-slate-900/40'
                    : 'bg-slate-50 border-slate-200/80 hover:bg-white shadow-xs'
                }`}
              >
                <div className="flex flex-col gap-3">
                  <div className={`p-2 rounded-lg border w-fit transition-colors ${
                    theme === 'dark'
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                      : 'bg-emerald-50 border-emerald-200 text-emerald-600'
                  }`}>
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className={`font-display font-bold text-sm line-clamp-2 leading-tight transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-slate-800'
                    }`}>
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-mono mt-1 font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className={`flex items-center justify-between mt-5 pt-3 border-t ${
                  theme === 'dark' ? 'border-white/5' : 'border-slate-200'
                }`}>
                  <span className="text-[10px] font-mono text-slate-500">
                    Verified {cert.date}
                  </span>
                  <span className="text-[10px] font-mono text-indigo-600 font-semibold flex items-center gap-0.5">
                    Credential
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
