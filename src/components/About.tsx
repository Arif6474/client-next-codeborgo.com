"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles, Hammer, Layers, TrendingUp, Cpu } from "lucide-react";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 },
    },
  };

  const values = [
    {
      num: "01",
      title: "Precision Engineering",
      desc: "Pixel-perfect frontend code written with React, Next.js, and TypeScript. No bloat, pure speed.",
      icon: Hammer,
    },
    {
      num: "02",
      title: "Aesthetic Integrity",
      desc: "Inspired by classical Italian design principles. High-contrast typography, large spacing, and clean grids.",
      icon: Layers,
    },
    {
      num: "03",
      title: "Measurable Growth",
      desc: "Marketing campaigns and product experiences built to achieve specific financial and traffic metrics.",
      icon: TrendingUp,
    },
    {
      num: "04",
      title: "Cognitive Systems",
      desc: "Deploying production-grade custom AI models and automations that reduce customer support overhead by 60%.",
      icon: Cpu,
    },
  ];

  return (
    <section
      id="about"
      className="scroll-section px-6 md:px-12 py-24 z-10 w-full overflow-hidden border-t border-neutral-950 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center my-auto">
        {/* Left Column: Copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:col-span-6 flex flex-col space-y-6 text-left"
        >
          <motion.p
            variants={itemVariants}
            className="text-[10px] tracking-[0.2em] font-mono text-neutral-500 uppercase flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            AGENCY PHILOSOPHY
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Italian Design Meets <br />
            <span className="font-light text-neutral-400 text-glow">Digital Engineering.</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-neutral-400 text-sm md:text-base leading-relaxed"
          >
            Located in Venice, Italy, StudioWebDigital was founded on a simple principle: digital products should be as functional as they are beautiful. We do not design generic web pages—we craft bespoke digital flagship stores and automation structures.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-neutral-400 text-sm md:text-base leading-relaxed"
          >
            By bridging the gap between luxury design and high-end computer science, we provide premium brands and ambitious tech startups with an unforgettable online presence that delivers measurable compound growth.
          </motion.p>
        </motion.div>

        {/* Right Column: Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.num}
                variants={itemVariants}
                className="group p-6 rounded-2xl border border-neutral-900 bg-neutral-950/20 hover:bg-neutral-950/60 hover:border-neutral-800 transition-all duration-300 flex flex-col justify-between text-left h-[200px] glow-sm"
              >
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-neutral-600 group-hover:text-white transition-colors duration-300">
                    {val.num} /
                  </span>
                  <Icon className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="mt-auto space-y-1.5">
                  <h3 className="text-sm font-semibold tracking-tight text-white">
                    {val.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-normal line-clamp-3">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
