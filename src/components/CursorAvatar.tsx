import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface CursorAvatarProps {
  theme: "light" | "dark";
}

export default function CursorAvatar({ theme }: CursorAvatarProps) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorTip, setCursorTip] = useState<string>("Explore portfolio");
  const [isInteractive, setIsInteractive] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  // Position state (interpolated)
  const posRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });
  const velocityRef = useRef({ vx: 0, vy: 0 });
  const [renderedPos, setRenderedPos] = useState({ x: -100, y: -100 });
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });

  // Only enable on desktop with fine mouse pointer
  useEffect(() => {
    const checkDesktop = () => {
      const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      const isWideScreen = window.innerWidth >= 1024;
      setIsDesktop(hasFinePointer && isWideScreen);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Periodic cute blink animation
  useEffect(() => {
    if (!isDesktop) return;
    const interval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 160);
    }, 3800);
    return () => clearInterval(interval);
  }, [isDesktop]);

  // Mouse event listener
  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Inspect hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // 1. Check for explicit data-cursor-tip attribute
      const tippedElement = target.closest("[data-cursor-tip]") as HTMLElement | null;
      if (tippedElement) {
        const tip = tippedElement.getAttribute("data-cursor-tip");
        if (tip) {
          setCursorTip(tip);
          setIsInteractive(true);
          return;
        }
      }

      // 2. Check for button or link
      const interactiveEl = target.closest("button, a, input, select, textarea") as HTMLElement | null;
      if (interactiveEl) {
        setIsInteractive(true);
        if (interactiveEl.getAttribute("title")) {
          setCursorTip(interactiveEl.getAttribute("title")!);
          return;
        }
        if (interactiveEl.closest("#projects")) {
          setCursorTip("View the project");
          return;
        }
        if (interactiveEl.closest("#hackathons")) {
          setCursorTip("Explore hackathon victory");
          return;
        }
        if (interactiveEl.tagName === "BUTTON") {
          const btnText = interactiveEl.textContent?.trim() || "";
          if (btnText.toLowerCase().includes("cv") || btnText.toLowerCase().includes("resume")) {
            setCursorTip("View & Download Resume");
            return;
          }
          if (btnText.toLowerCase().includes("add")) {
            setCursorTip("Add hackathon entry");
            return;
          }
          setCursorTip(btnText.length > 0 && btnText.length < 24 ? btnText : "Click to interact");
          return;
        }
        if (interactiveEl.tagName === "A") {
          setCursorTip("Open link");
          return;
        }
      } else {
        setIsInteractive(false);
      }

      // 3. Check section context
      const section = target.closest("section, footer, header, #hackathons") as HTMLElement | null;
      if (section) {
        const id = section.id || "";
        if (id === "hero") {
          setCursorTip("Hi, welcome to my portfolio");
        } else if (id === "about") {
          setCursorTip("about me");
        } else if (id === "skills") {
          setCursorTip("Technical skills & tech stack");
        } else if (id === "hackathons" || section.closest("#hackathons")) {
          setCursorTip("Hackathon wins & 4 podium victories");
        } else if (id === "experience") {
          setCursorTip("Work milestones & professional experience");
        } else if (id === "projects") {
          setCursorTip("View the project");
        } else if (id === "portfolio-footer" || section.tagName === "FOOTER") {
          setCursorTip("Connect & collaborate with me");
        } else {
          setCursorTip("Explore portfolio");
        }
        return;
      }

      // Default
      setCursorTip("Explore portfolio");
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isDesktop, isVisible]);

  // Smooth animation loop using requestAnimationFrame with lerp
  useEffect(() => {
    if (!isDesktop) return;

    let animationFrameId: number;

    const animate = () => {
      // Float comfortably above the cursor pointer (offset by -34px on Y)
      // If close to the very top edge (< 48px), flip downward (+32px) so it stays visible
      const isNearTopEdge = targetRef.current.y < 48;
      const offsetY = isNearTopEdge ? 32 : -34;
      const desiredX = targetRef.current.x;
      const desiredY = targetRef.current.y + offsetY;

      // Lerp ball position towards desired floating position with gentle trailing elasticity
      const ease = 0.2;
      const dx = desiredX - posRef.current.x;
      const dy = desiredY - posRef.current.y;

      posRef.current.x += dx * ease;
      posRef.current.y += dy * ease;

      // Avatar eyes naturally look down towards where the cursor is clicking / moving
      const toCursorX = targetRef.current.x - posRef.current.x;
      const toCursorY = targetRef.current.y - posRef.current.y;
      const angle = Math.atan2(toCursorY, toCursorX);
      const lookDist = Math.min(2.5, Math.max(1, Math.sqrt(dx * dx + dy * dy) * 0.12));
      const lookX = Math.cos(angle) * lookDist;
      const lookY = Math.sin(angle) * lookDist;

      setRenderedPos({ x: posRef.current.x, y: posRef.current.y });
      setEyeOffset({ x: lookX, y: lookY });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDesktop]);

  if (!isDesktop || !isVisible) {
    return null;
  }

  // Prevent tooltip from overflowing the right side of screen
  const isNearRightEdge = typeof window !== "undefined" && renderedPos.x > window.innerWidth - 240;
  const isNearBottomEdge = typeof window !== "undefined" && renderedPos.y > window.innerHeight - 70;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none"
      aria-hidden="true"
    >
      <div
        className="absolute top-0 left-0 transition-opacity duration-200"
        style={{
          transform: `translate3d(${renderedPos.x}px, ${renderedPos.y}px, 0)`,
          willChange: "transform",
        }}
      >
        {/* Ball Avatar */}
        <div
          className={`relative -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isInteractive ? "scale-125" : "scale-100"
          }`}
          style={{
            background:
              theme === "dark"
                ? "radial-gradient(circle at 35% 30%, #a5b4fc 0%, #6366f1 45%, #4338ca 85%, #312e81 100%)"
                : "radial-gradient(circle at 35% 30%, #818cf8 0%, #4f46e5 50%, #3730a3 90%)",
            boxShadow:
              isInteractive
                ? "0 0 20px 4px rgba(99, 102, 241, 0.75), 0 0 40px 8px rgba(129, 140, 248, 0.4)"
                : "0 0 14px 2px rgba(99, 102, 241, 0.5), 0 4px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* 3D Gloss Highlight */}
          <div className="absolute top-1 left-1.5 w-2.5 h-1.5 rounded-full bg-white/60 blur-[0.4px] rotate-[-25deg]" />

          {/* Avatar Face Container */}
          <div
            className="flex items-center justify-center gap-1.5 transition-transform duration-75"
            style={{
              transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`,
            }}
          >
            {/* Left Eye */}
            <div
              className={`w-1.5 h-1.5 rounded-full bg-white transition-all duration-150 ${
                isBlinking
                  ? "scale-y-[0.1] h-0.5"
                  : isInteractive
                  ? "scale-110 bg-amber-300"
                  : "scale-100"
              }`}
            />
            {/* Right Eye */}
            <div
              className={`w-1.5 h-1.5 rounded-full bg-white transition-all duration-150 ${
                isBlinking
                  ? "scale-y-[0.1] h-0.5"
                  : isInteractive
                  ? "scale-110 bg-amber-300"
                  : "scale-100"
              }`}
            />
          </div>

          {/* Subtle Happy Smile when hovering interactive */}
          {isInteractive && (
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-1 border-b-2 border-white/90 rounded-full" />
          )}

          {/* Animated Outer Pulse Ring */}
          <div
            className={`absolute inset-0 rounded-full border border-indigo-400/50 animate-ping opacity-30 ${
              isInteractive ? "opacity-60 duration-700" : "duration-1000"
            }`}
          />
        </div>

        {/* Floating One-Line Contextual Info Tooltip */}
        <AnimatePresence mode="wait">
          {cursorTip && (
            <motion.div
              key={cursorTip}
              initial={{ opacity: 0, scale: 0.9, y: 4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 2 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className={`absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono tracking-tight whitespace-nowrap backdrop-blur-md shadow-xl border transition-colors ${
                isNearRightEdge ? "right-6" : "left-6"
              } ${isNearBottomEdge ? "-top-8" : "-top-2"} ${
                theme === "dark"
                  ? "bg-slate-900/90 text-slate-100 border-white/20 shadow-indigo-950/60"
                  : "bg-white/95 text-slate-900 border-slate-300/80 shadow-slate-300/40"
              }`}
            >
              {/* Pulsing indicator dot */}
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isInteractive
                    ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                    : "bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]"
                }`}
              />
              <span className="font-medium">{cursorTip}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
