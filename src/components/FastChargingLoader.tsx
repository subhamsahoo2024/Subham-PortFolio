import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, ArrowRight, Sparkles, Cpu, Award, ShieldCheck } from "lucide-react";

interface FastChargingLoaderProps {
  key?: React.Key;
  onComplete: () => void;
  theme?: "light" | "dark";
}

export default function FastChargingLoader({ onComplete }: FastChargingLoaderProps) {
  const [percent, setPercent] = useState<number>(0);
  const [stage, setStage] = useState<"charging" | "welcome">("charging");
  const [statusText, setStatusText] = useState<string>("Initializing core modules...");

  useEffect(() => {
    // Fast charging simulation from 0 to 100% over ~2.4 seconds with dynamic easing
    const startTime = performance.now();
    const duration = 2400; // 2.4 seconds

    let frameId: number;

    const updateCharging = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Fast charge non-linear curve (starts fast, maintains brisk pace, snaps to 100)
      // Ease-out cubic with tiny bursts
      const eased = Math.min(100, Math.round((1 - Math.pow(1 - progress, 2.2)) * 100));
      setPercent(eased);

      if (eased < 25) {
        setStatusText("Calibrating system core...");
      } else if (eased < 55) {
        setStatusText("Loading 4x hackathon achievements...");
      } else if (eased < 85) {
        setStatusText("Loading full-stack & AI projects...");
      } else if (eased < 100) {
        setStatusText("Preparing interactive experience...");
      } else {
        setStatusText("Systems Ready");
      }

      if (progress < 1) {
        frameId = requestAnimationFrame(updateCharging);
      } else {
        // Loading complete: pause briefly then present Welcome Message & Explore Button
        setTimeout(() => {
          setStage("welcome");
        }, 300);
      }
    };

    frameId = requestAnimationFrame(updateCharging);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: "blur(8px)",
        transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
      }}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-slate-950 text-white overflow-hidden select-none"
    >
      {/* Background Cybernetic Energy Grid & Radiance */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.25),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12)_0%,transparent_65%)]" />
      
      {/* Ambient background grid lines */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#312e81_1px,transparent_1px),linear-gradient(to_bottom,#312e81_1px,transparent_1px)] bg-[size:3rem_3rem]" 
      />

      {/* Floating subtle particle sparks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: `${(i * 19) % 100}vw`,
              y: `${85 + (i % 4) * 5}vh`,
              opacity: 0.2,
              scale: 0.8,
            }}
            animate={{
              y: `${10 + (i % 6) * 10}vh`,
              opacity: [0.2, 0.8, 0],
              scale: [0.8, 1.4, 0.4],
            }}
            transition={{
              duration: 3 + (i % 3) * 1.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: (i * 0.25) % 2,
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-lg px-6 flex flex-col items-center text-center">
        <AnimatePresence mode="wait">
          {stage === "charging" ? (
            /* STAGE 1: FAST LOADING HUD (0% -> 100%) */
            <motion.div
              key="loading-stage"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >

              {/* Central Glowing Reactor */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center mb-8">
                {/* Rotating Outer Gradient Energy Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 via-indigo-500 to-emerald-400 opacity-80 shadow-[0_0_35px_rgba(99,102,241,0.5)]"
                >
                  <div className="w-full h-full rounded-full bg-slate-950/90" />
                </motion.div>

                {/* Counter-Rotating Secondary Ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-3 rounded-full border border-dashed border-cyan-400/40"
                />

                {/* Pulsing Concentric Energy Waves */}
                <div className="absolute inset-0 rounded-full bg-emerald-500/10 animate-ping opacity-25" />
                <div className="absolute inset-6 rounded-full bg-indigo-500/15 blur-md" />

                {/* Inner Core Content: Percentage & Loading Icon */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="flex items-baseline justify-center">
                    <span className="font-mono font-black text-5xl sm:text-6xl tracking-tight bg-gradient-to-r from-white via-cyan-200 to-emerald-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]">
                      {percent}
                    </span>
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-cyan-400 ml-1">
                      %
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 mt-1 text-xs font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>LOADING</span>
                  </div>
                </div>
              </div>

              {/* Progress Bar with Electric Glow */}
              <div className="w-full max-w-xs h-2 bg-slate-900 rounded-full overflow-hidden p-[1px] border border-white/10 shadow-inner mb-4">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 shadow-[0_0_12px_#22d3ee]"
                  style={{ width: `${percent}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              {/* Live Status Text ticker */}
              <p className="font-mono text-xs sm:text-sm text-slate-400 tracking-wide min-h-[1.5rem] flex items-center justify-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                <span>{statusText}</span>
              </p>
            </motion.div>
          ) : (
            /* STAGE 2: SHORT & CATCHY WELCOME MESSAGE & EXPLORE BUTTON */
            <motion.div
              key="welcome-stage"
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center bg-slate-900/85 border border-white/15 backdrop-blur-2xl rounded-3xl p-7 sm:p-9 shadow-2xl shadow-indigo-950/60 max-w-sm w-full relative"
            >
              {/* Top ambient glow accent */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-44 h-16 bg-emerald-500/25 blur-2xl rounded-full pointer-events-none" />

              {/* Success Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.08 }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-400 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] mb-4"
              >
                <ShieldCheck className="w-8 h-8 text-slate-950" />
              </motion.div>

              

              {/* Short & Catchy Welcome Heading */}
              <h1 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight mb-2">
                Hey, I&apos;m Subham! 👋
              </h1>

              {/* Catchy Subtitle Badges */}
              <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs font-medium mb-3 justify-center">
                <span className="inline-flex items-center gap-1 text-amber-300">
                  <Award className="w-3.5 h-3.5" /> 4x Hackathon Winner
                </span>
                <span className="text-slate-600">•</span>
                <span>AI Builder</span>
              </div>

              {/* Short & Catchy One-liner */}
              <p className="text-slate-300 text-sm leading-snug mb-6 max-w-xs">
                Crafting intelligent full-stack apps and algorithmic solutions that scale.
              </p>

              {/* EXPLORE PORTFOLIO BUTTON */}
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(99, 102, 241, 0.6)" }}
                whileTap={{ scale: 0.97 }}
                onClick={onComplete}
                className="group relative w-full px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 text-white font-medium text-base flex items-center justify-center gap-2.5 shadow-lg shadow-indigo-600/30 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Shimmer line effect across button */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                <Sparkles className="w-4 h-4 text-amber-300 fill-amber-300 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold tracking-wide">Explore Portfolio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
