"use client";

import { useState, useEffect, useRef } from "react";
import { motion, Variants, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { Star, LayoutGrid } from "lucide-react";

interface BgDot {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  color: string;
  glow: string;
  delay: number;
  driftX: number;
}

export default function Hero() {
  const [dots, setDots] = useState<BgDot[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse motion values for interactive spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations to smooth the cursor spotlight
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 22 });

  // Update spotlight gradient dynamic background template
  const spotlightBg = useMotionTemplate`radial-gradient(650px circle at ${smoothX}px ${smoothY}px, rgba(99, 102, 241, 0.12), rgba(6, 182, 212, 0.05) 50%, transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const { left, top } = sectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  useEffect(() => {
    const colors = [
      "rgba(255, 255, 255, 0.65)",      // White
      "rgba(14, 165, 233, 0.6)",        // Cyan
      "rgba(129, 140, 248, 0.6)",       // Indigo/Violet
      "rgba(251, 191, 36, 0.5)",        // Warm Amber
      "rgba(244, 63, 94, 0.5)",         // Venetian Rose/Red
    ];
    const glows = [
      "0 0 4px rgba(255, 255, 255, 0.3)",
      "0 0 6px rgba(14, 165, 233, 0.4)",
      "0 0 6px rgba(129, 140, 248, 0.4)",
      "0 0 6px rgba(251, 191, 36, 0.3)",
      "0 0 6px rgba(244, 63, 94, 0.3)",
    ];

    const generated = [...Array(25)].map((_, i) => {
      const colorIndex = Math.floor(Math.random() * colors.length);
      return {
        id: i,
        size: Math.random() * 2.5 + 0.8,
        x: Math.random() * 95 + 2.5,
        y: Math.random() * 90 + 5,
        duration: 12 + Math.random() * 15,
        color: colors[colorIndex],
        glow: glows[colorIndex],
        delay: Math.random() * -20,
        driftX: Math.random() * 20 - 10,
      };
    });

    const handle = requestAnimationFrame(() => {
      setDots(generated);
    });

    return () => cancelAnimationFrame(handle);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 },
    },
  };

  const handleCtaClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="scroll-section relative flex flex-col justify-between items-center px-6 pt-[12vh] pb-[3vh] z-10 w-full h-full overflow-hidden text-center"
    >
      {/* Precision Grid Brackets & Viewport Borders */}
      <div className="absolute top-6 left-6 w-5 h-5 border-t border-l border-neutral-900 pointer-events-none select-none opacity-50" />
      <div className="absolute top-6 right-6 w-5 h-5 border-t border-r border-neutral-900 pointer-events-none select-none opacity-50" />
      <div className="absolute bottom-6 left-6 w-5 h-5 border-b border-l border-neutral-900 pointer-events-none select-none opacity-50" />
      <div className="absolute bottom-6 right-6 w-5 h-5 border-b border-r border-neutral-900 pointer-events-none select-none opacity-50" />

      {/* Subtle Horizontal Layout Alignment Line */}
      <div className="absolute top-[12vh] left-6 right-6 border-b border-dashed border-neutral-900/30 pointer-events-none z-0" />

      {/* Monospace Editorial & Coordinate Info */}
      <div className="absolute top-8 left-14 hidden md:flex items-center gap-1.5 pointer-events-none select-none opacity-30 font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-500">
        <span>HQ: VENEZIA, IT</span>
        <span className="w-1 h-1 rounded-full bg-rose-500 animate-pulse" />
      </div>
      <div className="absolute top-8 right-14 hidden md:flex items-center gap-1.5 pointer-events-none select-none opacity-30 font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-500">
        <span>COORD: 45.4408° N, 12.3155° E</span>
      </div>

      {/* Floating Glassmorphic Badges */}
      {/* Left Card: Venice HQ */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 1, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[6%] xl:left-[8%] top-[25%] hidden xl:flex items-center gap-3 px-4 py-2.5 rounded-xl border border-neutral-900 bg-[#070707]/60 backdrop-blur-md shadow-2xl pointer-events-auto select-none group hover:border-neutral-800 transition-all duration-300 z-10"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
        <div className="flex flex-col text-left">
          <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest leading-none">Est. 2026</span>
          <span className="text-[11px] font-medium text-neutral-300 mt-1 uppercase tracking-wider font-sans">Venice, Italy</span>
        </div>
      </motion.div>

      {/* Right Card: Venetian Precision */}
      <motion.div
        animate={{
          y: [0, 10, 0],
          rotate: [0, -1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[6%] xl:right-[8%] top-[38%] hidden xl:flex items-center gap-3 px-4 py-2.5 rounded-xl border border-neutral-900 bg-[#070707]/60 backdrop-blur-md shadow-2xl pointer-events-auto select-none group hover:border-neutral-800 transition-all duration-300 z-10"
      >
        <Star className="w-3.5 h-3.5 text-amber-200 animate-pulse fill-amber-250/20" />
        <div className="flex flex-col text-left">
          <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest leading-none">Studio Quality</span>
          <span className="text-[11px] font-medium text-neutral-300 mt-1 uppercase tracking-wider font-sans">Venetian Precision</span>
        </div>
      </motion.div>

      {/* Dynamic Cursor Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-500"
        style={{
          background: spotlightBg,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Volumetric Top Spotlight Cone */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[650px] pointer-events-none z-0 opacity-40 select-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1400 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#spotlight-blur-filter)">
            <ellipse
              cx="700"
              cy="0"
              rx="450"
              ry="220"
              fill="url(#spotlight-gradient)"
            />
          </g>
          <defs>
            <filter
              id="spotlight-blur-filter"
              x="-200"
              y="-200"
              width="1800"
              height="1200"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="130" result="effect_blur" />
            </filter>
            <radialGradient
              id="spotlight-gradient"
              cx="700"
              cy="0"
              r="600"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.16)" />
              <stop offset="50%" stopColor="rgba(99, 102, 241, 0.05)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Mesh Gradient Aurora Orbs */}
      {/* Orb 1: Deep Indigo */}
      <motion.div
        animate={{
          x: ["-20%", "10%", "-10%", "-20%"],
          y: ["-10%", "20%", "-20%", "-10%"],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] left-[10%] w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none z-0"
      />

      {/* Orb 2: Deep Teal/Cyan */}
      <motion.div
        animate={{
          x: ["20%", "-10%", "10%", "20%"],
          y: ["20%", "-15%", "15%", "20%"],
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[20%] right-[10%] w-[250px] sm:w-[400px] md:w-[550px] h-[250px] sm:h-[400px] md:h-[550px] rounded-full bg-cyan-500/8 blur-[110px] pointer-events-none z-0"
      />

      {/* Orb 3: Venetian Rose/Crimson (Warm Accent) */}
      <motion.div
        animate={{
          x: ["-10%", "15%", "-5%", "-10%"],
          y: ["10%", "-10%", "20%", "10%"],
          scale: [0.9, 1.1, 1, 0.9],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[35%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] md:w-[650px] h-[350px] sm:h-[500px] md:h-[650px] rounded-full bg-rose-500/6 blur-[130px] pointer-events-none z-0"
      />

      {/* Drifting background dots */}
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full pointer-events-none z-0"
          style={{
            width: dot.size,
            height: dot.size,
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            backgroundColor: dot.color,
            boxShadow: dot.glow,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, dot.driftX, 0],
            opacity: [0.1, 0.8, 0.1],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        />
      ))}

      {/* Main Centered Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl mx-auto px-4 flex flex-col items-center justify-center space-y-[2.5vh] my-auto relative z-10"
      >
        {/* Scarcity / Announcement Badge */}
        <motion.div variants={itemVariants} className="inline-flex max-w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-900 bg-neutral-950/60 text-[10px] tracking-wider text-neutral-450 font-mono max-w-full">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
            </span>
            <span className="text-neutral-400 uppercase tracking-widest truncate">Currently selecting startup cohorts</span>
          </div>
        </motion.div>

        {/* Large Centered Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] max-w-3xl w-full"
        >
          Premium Digital Excellence <br />
          <span className="font-semibold bg-gradient-to-r from-amber-200 via-yellow-100 to-rose-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(251,191,36,0.06)]">
            Vantelli
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xs sm:text-sm md:text-base text-neutral-500 max-w-2xl leading-relaxed w-full"
        >
          Crafting high-performance digital products, smart interfaces, and ROI-driven marketing systems 
          with Venetian precision and Italian craftsmanship.
        </motion.p>

        {/* Animated Action Button */}
        <motion.div variants={itemVariants} className="pt-2">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative p-[1px] inline-block rounded-xl overflow-hidden bg-neutral-900/60 hover:bg-neutral-850 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.015)] hover:shadow-[0_0_25px_rgba(255,255,255,0.04)] group"
          >
            {/* Rotating Border Beam */}
            <div className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_50%,#ffffff_85%,#ffffff_100%)] animate-[spin_6s_linear_infinite] opacity-50" />

            {/* Inside Interactive Button */}
            <button
              onClick={() => handleCtaClick("services")}
              className="relative px-4 sm:px-6 py-2.5 sm:py-3 bg-[#050505] hover:bg-[#050505]/95 text-white font-medium text-xs uppercase tracking-widest rounded-[11px] flex items-center gap-2 transition-colors duration-300 z-10 cursor-pointer"
            >
              Explore Services
              <span className="text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 transition-all text-xs">
                →
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Trusted Companies Logo Strip (Auto Marquee) */}
        <motion.div
          variants={itemVariants}
          className="w-full pt-[3vh] overflow-hidden relative"
        >
          {/* Gradient masking for left/right borders */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex w-max animate-marquee whitespace-nowrap gap-0 opacity-25 hover:opacity-45 transition-opacity duration-300">
            {/* First Set of Logos */}
            <div className="flex items-center gap-12 md:gap-20 pr-12 md:pr-20">
              <span className="text-xs font-bold tracking-[0.3em] text-white">VERCEL</span>
              <span className="text-xs font-bold tracking-[0.3em] text-white">STRIPE</span>
              <span className="text-xs font-semibold tracking-[0.3em] text-white">LINEAR</span>
              <span className="text-xs font-light tracking-[0.3em] text-white">RAYCAST</span>
              <span className="text-xs font-bold tracking-[0.3em] text-white">FRAMER</span>
            </div>
            {/* Duplicate Set for Infinite Loop */}
            <div className="flex items-center gap-12 md:gap-20 pr-12 md:pr-20" aria-hidden="true">
              <span className="text-xs font-bold tracking-[0.3em] text-white">VERCEL</span>
              <span className="text-xs font-bold tracking-[0.3em] text-white">STRIPE</span>
              <span className="text-xs font-semibold tracking-[0.3em] text-white">LINEAR</span>
              <span className="text-xs font-light tracking-[0.3em] text-white">RAYCAST</span>
              <span className="text-xs font-bold tracking-[0.3em] text-white">FRAMER</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Layout Elements (Dashed Star Divider + Navigation Button) */}
      <div className="w-full max-w-3xl mx-auto mt-auto space-y-[2.5vh] relative z-10">

        {/* Dashed Line Star Divider */}
        <div className="flex items-center justify-center gap-6 w-full max-w-xl mx-auto opacity-20">
          <div className="flex-1 border-t border-dashed border-neutral-700" />
          <div className="flex items-center gap-1.5 text-neutral-500">
            <Star className="w-2.5 h-2.5" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-2.5 h-2.5" />
          </div>
          <div className="flex-1 border-t border-dashed border-neutral-700" />
        </div>

        {/* Projects Trigger Button */}
        <div className="flex justify-center pb-[2vh]">
          <button
            onClick={() => handleCtaClick("portfolio")}
            className="group flex items-center gap-2 px-4 py-2 border border-neutral-900 bg-neutral-950/40 text-neutral-400 hover:text-white text-[10px] font-mono tracking-wider uppercase rounded-xl hover:bg-neutral-900/20 hover:border-neutral-850 transition-all duration-300"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            Our Projects
          </button>
        </div>
      </div>
    </section>
  );
}
