"use client";

import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Sparkles, Search, Layers, Code, CheckCircle2, ArrowRight } from "lucide-react";
import { ScrollContext } from "../app/page";

interface StepItem {
  num: string;
  title: string;
  shortDesc: string;
  desc: string;
  icon: any;
  color: string;
  bgClass: string;
  borderClass: string;
  accentDot: string;
  details: string[];
}

const STEPS: StepItem[] = [
  {
    num: "01",
    title: "Discovery & Alignment",
    shortDesc: "Milestone roadmap & scope spec",
    desc: "We schedule a deep-dive technical alignment call to outline your brand goals, system architecture, and target KPIs. We convert project constraints into a detailed milestone roadmap with a fixed-scope contract.",
    icon: Search,
    color: "text-cyan-400",
    bgClass: "bg-cyan-500/10",
    borderClass: "border-cyan-500/30",
    accentDot: "bg-cyan-400",
    details: ["Requirements gathering", "Technical specification", "Fixed-scope quote & SLA"],
  },
  {
    num: "02",
    title: "UX & Figma Interface Design",
    shortDesc: "Responsive prototypes & design tokens",
    desc: "We build fully responsive UX wireframes and high-fidelity mockups inside Figma. You get to interact with responsive flow prototypes and refine visual spacing before any front-end code is written.",
    icon: Layers,
    color: "text-purple-400",
    bgClass: "bg-purple-500/10",
    borderClass: "border-purple-500/30",
    accentDot: "bg-purple-400",
    details: ["Visual identity design", "Interactive Figma prototype", "Motion behavior specs"],
  },
  {
    num: "03",
    title: "Full-Stack Development",
    shortDesc: "Next.js 16 & TypeScript codebase",
    desc: "We compile your designs into clean, performance-optimized Next.js 16 structures. You track development progress in real-time through a private Vercel staging deployment link with automated staging checks.",
    icon: Code,
    color: "text-emerald-400",
    bgClass: "bg-emerald-500/10",
    borderClass: "border-emerald-500/30",
    accentDot: "bg-emerald-400",
    details: ["Next.js 16 (App Router)", "TypeScript codebase", "Milestone staging preview URLs"],
  },
  {
    num: "04",
    title: "Testing, Launch & Support",
    shortDesc: "DNS routing & 30-day SLA support",
    desc: "We perform multi-device cross-browser testing, configure production DNS routing, and finalize search console maps indexing. We hand over code keys and provide a 30-day post-launch support package.",
    icon: CheckCircle2,
    color: "text-amber-400",
    bgClass: "bg-amber-500/10",
    borderClass: "border-amber-500/30",
    accentDot: "bg-amber-400",
    details: ["Domain & DNS routing", "Performance & SEO checks", "30-day support SLA"],
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

  const currentStep = STEPS[activeIdx];

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
      className="scroll-section relative px-6 md:px-12 py-28 z-10 w-full overflow-hidden border-t border-neutral-900 bg-[#050505] flex flex-col justify-center"
    >
      {/* Precision Grid Brackets */}
      <div className="absolute top-6 left-6 w-5 h-5 border-t border-l border-neutral-900 pointer-events-none opacity-50" />
      <div className="absolute top-6 right-6 w-5 h-5 border-t border-r border-neutral-900 pointer-events-none opacity-50" />
      <div className="absolute bottom-6 left-6 w-5 h-5 border-b border-l border-neutral-900 pointer-events-none opacity-50" />
      <div className="absolute bottom-6 right-6 w-5 h-5 border-b border-r border-neutral-900 pointer-events-none opacity-50" />

      {/* Ambient background glow */}
      <div className="absolute top-[30%] right-[5%] w-[450px] h-[450px] rounded-full bg-cyan-500/5 blur-[130px] pointer-events-none z-0" />

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
            className="text-[10px] tracking-[0.2em] font-mono text-cyan-400 uppercase flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
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

        {/* Interactive Delivery Board */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollContainerRef || undefined, once: true, amount: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
        >
          {/* Left panel: Interactive Timeline Steps */}
          <div className="lg:col-span-5 relative flex flex-col justify-center gap-3">
            {/* Vertical connector line */}
            <div className="absolute left-[34px] top-6 bottom-6 w-[2px] bg-neutral-900 z-0 hidden sm:block" />
            <div
              className="absolute left-[34px] top-6 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-400 to-amber-400 transition-all duration-500 z-0 hidden sm:block"
              style={{ height: `${(activeIdx / (STEPS.length - 1)) * 82}%` }}
            />

            {STEPS.map((step, idx) => {
              const isActive = activeIdx === idx;
              const Icon = step.icon;

              return (
                <button
                  key={step.num}
                  onClick={() => handleStepClick(idx)}
                  className={`relative p-5 rounded-2xl border text-left transition-all duration-300 flex items-center gap-5 cursor-pointer group z-10 ${
                    isActive
                      ? "border-neutral-800 bg-[#09090c]/90 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                      : "border-transparent bg-transparent hover:bg-neutral-950/40"
                  }`}
                >
                  {/* Step active border pill animation */}
                  {isActive && (
                    <motion.div
                      layoutId="activeStepFrame"
                      className="absolute inset-0 rounded-2xl border border-neutral-700 pointer-events-none"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  {/* Left: Number and Squircle Icon */}
                  <div className="flex items-center gap-4 shrink-0 relative z-10">
                    <span
                      className={`text-xs font-mono font-bold transition-colors ${
                        isActive ? step.color : "text-neutral-600 group-hover:text-neutral-400"
                      }`}
                    >
                      {step.num}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? `${step.bgClass} ${step.borderClass} ${step.color}`
                          : "border-neutral-900 bg-neutral-950/40 text-neutral-500 group-hover:border-neutral-800 group-hover:text-neutral-300"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Step Title & Subtitle */}
                  <div className="flex flex-col text-left relative z-10">
                    <span
                      className={`text-sm sm:text-base font-bold font-mono transition-colors ${
                        isActive ? "text-white" : "text-neutral-400 group-hover:text-neutral-200"
                      }`}
                    >
                      {step.title}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500">
                      {step.shortDesc}
                    </span>
                  </div>

                  {/* Progress Line for Auto-Play */}
                  {isActive && isAutoPlay && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 7, ease: "linear" }}
                      className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left rounded-full ${step.accentDot}`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right panel: Active Milestone Details Card */}
          <div className="lg:col-span-7 rounded-3xl border border-neutral-800/90 bg-[#08080b]/95 p-7 sm:p-10 relative flex flex-col justify-between overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)] backdrop-blur-2xl min-h-[360px]">
            {/* Ambient accent background blur */}
            <div
              className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] pointer-events-none transition-colors duration-700 ${
                currentStep.color.includes("cyan")
                  ? "bg-cyan-500/10"
                  : currentStep.color.includes("purple")
                  ? "bg-purple-500/10"
                  : currentStep.color.includes("emerald")
                  ? "bg-emerald-500/10"
                  : "bg-amber-500/10"
              }`}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="space-y-8 flex-1 flex flex-col justify-between relative z-10"
              >
                {/* Top Bar: Badge & Counter */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-900">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase px-3 py-1 rounded-full border border-neutral-800 bg-neutral-950/80">
                    MILESTONE OVERVIEW
                  </span>

                  <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-400">
                    <span className={`w-2 h-2 rounded-full ${currentStep.accentDot} animate-pulse`} />
                    <span>STEP {currentStep.num} OF 04</span>
                  </div>
                </div>

                {/* Details Text Content */}
                <div className="space-y-3.5 text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono leading-tight">
                    {currentStep.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                    {currentStep.desc}
                  </p>
                </div>

                {/* Deliverables & Technical Scope */}
                <div className="space-y-3.5 pt-6 border-t border-neutral-900/80 text-left">
                  <h4 className="text-[10px] font-mono font-bold tracking-widest text-neutral-500 uppercase">
                    DELIVERABLES & TECHNICAL SCOPE
                  </h4>

                  <div className="flex flex-wrap gap-2.5">
                    {currentStep.details.map((detail, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-neutral-850 bg-neutral-950/70 text-xs font-mono text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${currentStep.accentDot}`} />
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

