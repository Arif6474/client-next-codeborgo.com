"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Sparkles, Activity, ShieldCheck, Cpu } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const floatVariants = (yOffset: number, duration: number) => ({
    animate: {
      y: [0, yOffset, 0],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  });

  const handleCtaClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="scroll-section relative flex flex-col justify-between px-6 md:px-12 py-24 z-10 w-full overflow-hidden"
    >
      {/* Decorative center glow */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-white/[0.02] blur-[120px] pointer-events-none -z-10" />

      {/* Spacing alignment helper */}
      <div className="h-16 md:h-20 lg:h-12" />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto relative">
        
        {/* Left: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col text-left space-y-6 md:space-y-8"
        >
          {/* Announcement Badge */}
          <motion.div variants={itemVariants} className="inline-flex">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-950/60 text-xs text-neutral-400 tracking-wider font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-100"></span>
              </span>
              <span>NOW ACCEPTING PROJECTS FOR Q3 2026</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.05]"
          >
            Premium Digital <br className="hidden md:inline" />
            <span className="text-glow text-neutral-100 font-light">Excellence.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base xl:text-lg text-neutral-400 max-w-xl font-normal leading-relaxed"
          >
            Transforming ideas into stunning digital experiences. We craft high-performance websites, bespoke designs, and tailored AI systems with Italian elegance.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <button
              onClick={() => handleCtaClick("services")}
              className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#050505] font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => handleCtaClick("contact")}
              className="flex items-center justify-center gap-2 px-6 py-3.5 border border-neutral-800 hover:border-neutral-700 bg-neutral-950/30 text-white font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-900/40 transition-colors duration-300"
            >
              Get In Touch
            </button>
          </motion.div>
        </motion.div>

        {/* Right: Floating UI Dashboard (Teasing Metrics) */}
        <div className="lg:col-span-5 relative w-full h-[320px] md:h-[400px] flex items-center justify-center">
          {/* Central Radial Gradient glow for cards */}
          <div className="absolute w-[200px] h-[200px] rounded-full bg-white/[0.03] blur-[60px] pointer-events-none" />

          {/* Card 1: SEO Traffic Growth */}
          <motion.div
            variants={floatVariants(-12, 5)}
            animate="animate"
            className="absolute top-[10%] left-[5%] md:left-[10%] w-[190px] p-4 rounded-2xl border border-neutral-900 bg-neutral-950/80 backdrop-blur-md glow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                TRAFFIC
              </span>
              <div className="p-1 rounded bg-white/5 border border-neutral-800 text-neutral-300">
                <Activity className="w-3.5 h-3.5" />
              </div>
            </div>
            <p className="text-xl font-bold tracking-tight text-white">+250%</p>
            <p className="text-[10px] text-neutral-400 mt-1 font-mono">Luxury Brand Overhaul</p>
          </motion.div>

          {/* Card 2: Speed / PageSpeed Performance */}
          <motion.div
            variants={floatVariants(10, 6.2)}
            animate="animate"
            className="absolute bottom-[15%] right-[5%] md:right-[10%] w-[190px] p-4 rounded-2xl border border-neutral-900 bg-neutral-950/80 backdrop-blur-md glow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                PERFORMANCE
              </span>
              <div className="p-1 rounded bg-white/5 border border-neutral-800 text-neutral-300">
                <Cpu className="w-3.5 h-3.5" />
              </div>
            </div>
            <p className="text-xl font-bold tracking-tight text-white">98 / 100</p>
            <p className="text-[10px] text-neutral-400 mt-1 font-mono">Core Web Vitals</p>
          </motion.div>

          {/* Card 3: AI Assistant Automation */}
          <motion.div
            variants={floatVariants(-8, 4.2)}
            animate="animate"
            className="absolute top-[45%] right-[10%] md:right-[15%] w-[170px] p-3.5 rounded-2xl border border-neutral-900 bg-neutral-950/80 backdrop-blur-md glow-sm"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                AI SYSTEMS
              </span>
              <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
            </div>
            <p className="text-lg font-bold tracking-tight text-white">-60%</p>
            <p className="text-[9px] text-neutral-400 mt-0.5 font-mono">Support Costs Saved</p>
          </motion.div>
        </div>
      </div>

      {/* Bottom: Trusted Companies Logo Strip */}
      <div className="max-w-7xl mx-auto w-full mt-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="border-t border-neutral-900/60 pt-8"
        >
          <p className="text-[10px] tracking-[0.2em] font-mono text-neutral-500 text-left uppercase mb-6 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-neutral-500" />
            TRUSTED PARTNER FOR DIGITAL DOMINANCE
          </p>
          <div className="flex flex-wrap items-center justify-start gap-x-12 gap-y-6 opacity-35 hover:opacity-55 transition-opacity duration-300">
            <span className="text-sm font-bold tracking-[0.3em] text-white">VERCEL</span>
            <span className="text-sm font-bold tracking-[0.3em] text-white">STRIPE</span>
            <span className="text-sm font-semibold tracking-[0.3em] text-white">LINEAR</span>
            <span className="text-sm font-light tracking-[0.3em] text-white">RAYCAST</span>
            <span className="text-sm font-bold tracking-[0.3em] text-white">FRAMER</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
