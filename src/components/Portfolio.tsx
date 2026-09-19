"use client";

import { useState, useContext } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { ScrollContext } from "../app/page";
import { portfolioList } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  const scrollContainerRef = useContext(ScrollContext);
  const displayedProjects = portfolioList.slice(0, 6);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0.8 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0.4, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 },
    },
  };

  return (
    <section
      id="portfolio"
      className="scroll-section relative px-6 md:px-12 py-24 z-10 w-full overflow-hidden border-t border-neutral-900 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-14 relative z-10">

        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollContainerRef || undefined, once: true, amount: 0.3 }}
          className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-950/80 text-xs font-mono tracking-widest text-neutral-400 uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Editorial Case Studies
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight uppercase"
          >
            FEATURED <br />
            <span className="bg-gradient-to-r from-amber-200 via-neutral-200 to-white bg-clip-text text-transparent">
              CASE STUDIES.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-neutral-400 leading-relaxed font-normal"
          >
            A curated selection of client platforms and engineering concept builds demonstrating our technical range across web, commerce, AI systems, and luxury brand digital architecture.
          </motion.p>
        </motion.div>

        {/* 6 Projects Grid using ProjectCard */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollContainerRef || undefined, once: true, amount: 0.1 }}
          onMouseLeave={() => setHoveredProjectId(null)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variants={itemVariants}
              hoveredId={hoveredProjectId}
              onHover={setHoveredProjectId}
            />
          ))}
        </motion.div>

        {/* View All Projects CTA Button */}
        <div className="flex justify-center pt-4">
          <Link
            href="/portfolio"
            data-cursor-text="ALL WORK"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-neutral-700 bg-neutral-900/90 hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-xl hover:border-amber-300/50 hover:shadow-[0_0_35px_rgba(251,191,36,0.15)] cursor-pointer"
          >
            <span>View All Projects ({portfolioList.length})</span>
            <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}

