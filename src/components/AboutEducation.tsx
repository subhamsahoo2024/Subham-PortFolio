import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, ArrowUpRight, Brain, Maximize2, X } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface AboutEducationProps {
  theme: "light" | "dark";
}

export default function AboutEducation({ theme }: AboutEducationProps) {
  const [showEnlargedPhoto, setShowEnlargedPhoto] = useState(false);
  const aboutImageUrl = "/images/about%20photo.jpeg";
  const cardHoverVariants = {
    hover: {
      y: -6,
      scale: 1.015,
      borderColor:
        theme === "dark"
          ? "rgba(99, 102, 241, 0.4)"
          : "rgba(99, 102, 241, 0.6)",
      boxShadow:
        theme === "dark"
          ? "0 10px 30px -15px rgba(99, 102, 241, 0.3)"
          : "0 10px 30px -15px rgba(99, 102, 241, 0.12)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className={`py-24 relative border-t transition-colors duration-300 ${
        theme === "dark"
          ? "bg-slate-950/60 border-white/5"
          : "bg-white border-slate-200/60"
      }`}
    >
      {/* Background radial accent */}
      <div
        className={`absolute top-1/2 right-0 w-[350px] h-[350px] rounded-full blur-[100px] -z-10 transition-colors ${
          theme === "dark" ? "bg-emerald-500/5" : "bg-emerald-500/3"
        }`}
      ></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-indigo-500"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-indigo-500 font-semibold">
              Background
            </span>
          </div>
          <h2
            className={`font-display font-bold text-3xl sm:text-4xl transition-colors ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}
          >
            About Me &amp; Education
          </h2>
        </div>

        {/* About + Image Top Row, Full-Width Education Row */}
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: About Me (7 Columns) */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <motion.div
                whileHover="hover"
                variants={cardHoverVariants}
                className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-md flex flex-col justify-between transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10"
                    : "bg-slate-50 border-slate-200/80 shadow-sm shadow-slate-100/50"
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`p-2.5 rounded-lg border transition-colors ${
                        theme === "dark"
                          ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-400"
                          : "bg-indigo-50 border-indigo-200 text-indigo-600"
                      }`}
                    >
                      <Brain size={20} />
                    </div>
                    <h3
                      className={`font-display font-bold text-xl transition-colors ${
                        theme === "dark" ? "text-white" : "text-slate-900"
                      }`}
                    >
                      My Mission
                    </h3>
                  </div>

                  <p
                    className={`whitespace-pre-line font-light leading-relaxed mb-6 transition-colors ${
                      theme === "dark" ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    {PERSONAL_INFO.about}
                  </p>
                  <p
                    className={`font-light leading-relaxed transition-colors ${
                      theme === "dark" ? "text-slate-400" : "text-slate-600"
                    }`}
                  ></p>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Photo Card with Slow Enlarge & Radiant Glow (5 Columns) */}
            <div className="lg:col-span-5 flex items-start justify-center">
              <motion.div
                onClick={() => setShowEnlargedPhoto(true)}
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    theme === "dark"
                      ? "0 0 50px rgba(99, 102, 241, 0.6), 0 0 25px rgba(16, 185, 129, 0.4), 0 0 80px rgba(99, 102, 241, 0.25)"
                      : "0 0 45px rgba(99, 102, 241, 0.4), 0 0 20px rgba(99, 102, 241, 0.2)",
                  borderColor: "rgba(99, 102, 241, 0.8)",
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className={`w-full max-w-[420px] aspect-square rounded-2xl border backdrop-blur-md overflow-hidden relative cursor-pointer group select-none shadow-lg ${
                  theme === "dark"
                    ? "bg-slate-900 border-white/10"
                    : "bg-slate-50 border-slate-200/80 shadow-slate-100/50"
                }`}
                title="Click photo to enlarge & view full headshot"
              >
                <div
                  className={`absolute inset-0 bg-[linear-gradient(to_right,var(--square-grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--square-grid)_1px,transparent_1px)] bg-[size:1.25rem_1.25rem] opacity-50`}
                  style={
                    {
                      "--square-grid":
                        theme === "dark" ? "#312e8110" : "#6366f10c",
                    } as React.CSSProperties
                  }
                ></div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-700 ${theme === "dark" ? "from-indigo-500/10 via-transparent to-emerald-500/10 group-hover:from-indigo-500/25" : "from-indigo-100 via-transparent to-emerald-100 group-hover:from-indigo-200"}`}
                />
                <div className="relative z-10 h-full w-full overflow-hidden">
                  <motion.img
                    src={aboutImageUrl}
                    alt="About Subham Sahoo"
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-108"
                  />
                  {/* Glowing Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700" />
                  
                  {/* Click to expand pill */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg backdrop-blur-md bg-slate-950/70 border border-white/20 text-white text-[11px] font-mono group-hover:bg-indigo-600 transition-colors">
                    <Maximize2 size={12} />
                    <span>Click to Enlarge</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Full Width Education Card */}
          <motion.div
            whileHover="hover"
            variants={cardHoverVariants}
            className={`w-full p-6 sm:p-8 rounded-2xl border backdrop-blur-md flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
              theme === "dark"
                ? "bg-white/5 border-white/10"
                : "bg-slate-50 border-slate-200/80 shadow-sm shadow-slate-100/50"
            }`}
          >
            {/* Subtle background glow card top-right */}
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-indigo-500/10 rounded-full blur-2xl"></div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-2.5 rounded-lg border transition-colors ${
                    theme === "dark"
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                      : "bg-emerald-50 border-emerald-200 text-emerald-600"
                  }`}
                >
                  <GraduationCap size={20} />
                </div>
                <h3
                  className={`font-display font-bold text-xl transition-colors ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  Education
                </h3>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1 space-y-4">
                  <div>
                    <h4
                      className={`font-display font-semibold text-lg transition-colors ${
                        theme === "dark" ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {PERSONAL_INFO.education.institution}
                    </h4>
                    <p className="text-sm text-indigo-600 font-mono mt-1 font-medium">
                      {PERSONAL_INFO.education.degree}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <span
                        className={`px-2.5 py-1 rounded text-xs font-semibold font-mono ${
                          theme === "dark"
                            ? "bg-indigo-500/10 text-indigo-300"
                            : "bg-indigo-50 text-indigo-600 border border-indigo-100"
                        }`}
                      >
                        {PERSONAL_INFO.education.duration}
                      </span>
                      <span
                        className={`px-2.5 py-1 rounded text-xs font-bold font-mono ${
                          theme === "dark"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-emerald-50 text-emerald-600 border border-emerald-100"
                        }`}
                      >
                        {PERSONAL_INFO.education.grade}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={`lg:w-[45%] lg:pl-6 lg:border-l ${theme === "dark" ? "border-white/5" : "border-slate-200"}`}
                >
                  <div
                    className={`border-t pt-5 lg:border-t-0 lg:pt-0 ${theme === "dark" ? "border-white/5" : "border-slate-200"}`}
                  >
                    <span className="text-xs font-mono uppercase text-slate-500 tracking-wider block mb-3">
                      Academic Highlights
                    </span>
                    <ul className="space-y-2.5">
                      {PERSONAL_INFO.education.highlights.map(
                        (highlight, idx) => (
                          <li
                            key={idx}
                            className={`flex items-start gap-2.5 text-xs leading-normal transition-colors ${
                              theme === "dark"
                                ? "text-slate-400"
                                : "text-slate-600"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`mt-8 pt-4 border-t flex items-center justify-between ${
                theme === "dark" ? "border-white/5" : "border-slate-200"
              }`}
            >
              <span className="text-xs font-mono text-slate-500">
                Based in Chennai, India
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enlarged Photo Modal with Slow Zoom & Glowing Backdrop */}
      <AnimatePresence>
        {showEnlargedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowEnlargedPhoto(false)}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative max-w-lg w-full rounded-3xl overflow-hidden border p-3 z-10 transition-colors shadow-2xl ${
                theme === "dark"
                  ? "bg-slate-900 border-indigo-500/40 shadow-[0_0_80px_rgba(99,102,241,0.4)]"
                  : "bg-white border-slate-200 shadow-[0_0_80px_rgba(99,102,241,0.25)]"
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-slate-950 flex items-center justify-center">
                {/* Glowing radiant halo behind photo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/30 via-transparent to-emerald-500/20 blur-xl pointer-events-none" />

                <motion.img
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={aboutImageUrl}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover"
                />

                {/* Close Button */}
                <button
                  onClick={() => setShowEnlargedPhoto(false)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg"
                  title="Close Preview"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Photo Caption */}
              <div className="p-4 text-center">
                <h4
                  className={`font-display font-bold text-lg ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  {PERSONAL_INFO.name}
                </h4>
                <p className="text-xs font-mono text-emerald-500 mt-0.5">
                  About &amp; Academic Background
                </p>
                <p
                  className={`text-xs mt-2 font-light ${
                    theme === "dark" ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Chennai Institute of Technology • 9.2/10 CGPA
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
