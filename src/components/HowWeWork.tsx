"use client";

import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Sparkles, Calendar, Layers, Code, CheckCircle, Search } from "lucide-react";
import { ScrollContext } from "../app/page";

const STEPS = [
  {
    num: "01",
    title: "Discovery & Alignment",
    desc: "We schedule a deep-dive call to outline your visual goals, product architecture, and target KPIs. We convert your project constraints into a detailed, milestone-driven scope roadmap with a fixed pricing contract.",
    icon: Search,
    details: ["Requirements gathering", "Technical specification", "Fixed-scope quote"],
  },
  {
    num: "02",
    title: "UX & Figma Interface Design",
    desc: "We build fully responsive UX wireframes and high-fidelity mockups inside Figma. You get to interact with responsive flow prototypes and refine visual spacing before any front-end code is written.",
    icon: Layers,
    details: ["Visual identity design", "Interactive Figma prototype", "Motion behavior specs"],
  },
  {
    num: "03",
    title: "Full-Stack Development",
    desc: "We compile your designs into clean, performance-optimized React and Next.js structures. You track development progress in real-time through a private Vercel staging deployment link with staging checks.",
    icon: Code,
    details: ["Next.js (App Router)", "TypeScript codebase", "Milestone review URLs"],
  },
  {
    num: "04",
    title: "Testing, Launch & Support",
    desc: "We perform multi-device cross-browser testing, configure production DNS routing, and finalize search console maps indexing. We hand over code keys and provide a 30-day post-launch support package.",
    icon: CheckCircle,
    details: ["Domain & DNS setup", "Performance & SEO checks", "30-day support SLA"],
  },
];

export default function HowWeWork() {
  const scrollContainerRef = useContext(ScrollContext);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % STEPS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleStepClick = (idx: number) => {
    setActiveIdx(idx);
    setIsAutoPlay(false);
  };

  const headerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 18 },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0.4, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 },
    },
  };

  return (
    <section
      id="process"
      className="scroll-section relative px-6 md:px-12 py-28 z-10 w-full overflow-hidden border-t border-neutral-900 bg-[#050505] flex flex-col justify-center animate-fade-in"
    >
      {/* Ambient radial blur background */}
      <div className="absolute top-[20%] right-[-10%] w-[420px] h-[420px] rounded-full bg-white/2 blur-[120px] pointer-events-none z-0" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-16">
        
        {/* Section Header */}
        <motion.div
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollContainerRef || undefined, once: true, amount: 0.4 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <motion.p
            variants={itemVariants}
            className="text-[10px] tracking-[0.2em] font-mono text-neutral-500 uppercase flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
            Our Delivery Engine
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08]"
          >
            How We <span className="font-light text-neutral-400">Work.</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-neutral-500 text-sm leading-relaxed max-w-lg"
          >
            A reliable, four-step framework built on clear specifications and fixed deliverables.
          </motion.p>
        </motion.div>

        {/* Interactive Board Wrapper */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollContainerRef || undefined, once: true, amount: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
        >
          
          {/* Left panel: Interactive Step Selectors */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-3">
            {STEPS.map((step, idx) => {
              const isActive = activeIdx === idx;
              const Icon = step.icon;
              return (
                <button
                  key={step.num}
                  onClick={() => handleStepClick(idx)}
                  className={`relative p-5 rounded-2xl border text-left transition-all duration-300 flex items-center gap-5 cursor-pointer group ${
                    isActive
                      ? "border-neutral-850 bg-neutral-950/60 shadow-[0_0_20px_rgba(255,255,255,0.015)]"
                      : "border-transparent bg-transparent hover:bg-neutral-950/20"
                  }`}
                >
                  {/* Step active border slide-in */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBorder"
                      className="absolute inset-0 rounded-2xl border border-neutral-800 pointer-events-none"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  {/* Left Column: Number and Icon */}
                  <div className="flex items-center gap-4 shrink-0 relative z-10">
                    <span className={`text-xs font-mono font-bold ${isActive ? "text-cyan-400" : "text-neutral-600 group-hover:text-neutral-405"}`}>
                      {step.num}
                    </span>
                    <div className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all ${
                      isActive 
                        ? "border-cyan-505/30 bg-cyan-950/15 text-cyan-400" 
                        : "border-neutral-900 bg-neutral-950/40 text-neutral-500 group-hover:border-neutral-800"
                    }`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <span className={`text-sm sm:text-base font-semibold transition-colors relative z-10 ${
                    isActive ? "text-white" : "text-neutral-450 group-hover:text-neutral-250"
                  }`}>
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right panel: Active Step Details Viewer */}
          <div className="lg:col-span-7 rounded-2xl border border-neutral-900 bg-neutral-950/30 p-8 sm:p-12 relative flex flex-col justify-between overflow-hidden min-h-[320px]">
            {/* Ambient accent background blur */}
            <div className="absolute top-0 right-0 w-56 h-56 rounded-full bg-cyan-500/2 blur-[90px] pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="space-y-8 flex-1 flex flex-col justify-between"
              >
                
                {/* Details text content */}
                <div className="space-y-4 text-left">
                  <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase px-2 py-0.5 rounded border border-neutral-900 bg-neutral-950/80 inline-block">
                    Milestone Overview
                  </span>
                  
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                    {STEPS[activeIdx].title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                    {STEPS[activeIdx].desc}
                  </p>
                </div>

                {/* Sub deliverables chips list */}
                <div className="space-y-3 pt-6 border-t border-neutral-900/60 text-left">
                  <h4 className="text-[10px] font-mono font-bold tracking-wider text-neutral-500 uppercase">
                    Deliverables & Technical Scope
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {STEPS[activeIdx].details.map((detail, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-900 bg-neutral-950/65 text-[10px] font-mono text-neutral-400 hover:text-white hover:border-neutral-800 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
