"use client";

import { useState, useContext } from "react";
import { motion, Variants } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { ScrollContext } from "../app/page";

interface BgDot {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
}

export default function CallToAction() {
  const scrollContainerRef = useContext(ScrollContext);

  const [dots] = useState<BgDot[]>(() =>
    [...Array(10)].map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      duration: 12 + Math.random() * 10,
    }))
  );

  const containerVariants: Variants = {
    hidden: { opacity: 0.4, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 },
    },
  };

  const handleCtaClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="scroll-section relative px-6 md:px-12 py-24 z-10 w-full overflow-hidden border-t border-neutral-900 bg-[#050505] flex flex-col justify-center venetian-reflection">
      {/* Background drifting dots */}
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-white pointer-events-none z-0"
          style={{ width: dot.size, height: dot.size, left: `${dot.x}%`, top: `${dot.y}%` }}
          animate={{ y: [0, -50, 0], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: dot.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollContainerRef || undefined, once: true, amount: 0.4 }}
          className="group relative rounded-3xl bg-neutral-950/80 p-8 md:p-16 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col items-center text-center space-y-6 overflow-hidden backdrop-blur-md"
        >
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />

          <p className="text-[10px] tracking-[0.25em] font-mono text-neutral-400 uppercase flex items-center gap-2 select-none">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            FINAL DIRECTIVE
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight uppercase font-sans">
            HAVE AN IMPOSSIBLE <br />
            <span className="bg-gradient-to-r from-amber-200 via-white to-neutral-400 bg-clip-text text-transparent">
              IDEA?
            </span>
          </h2>

          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-md">
            Tell us about your project vision. You will hear back within 24 hours with honest next steps and a fixed quote outline.
          </p>

          <div className="pt-4">
            <button
              onClick={handleCtaClick}
              data-cursor-text="LET'S TALK →"
              className="relative px-8 py-4 bg-white hover:bg-neutral-100 text-black font-bold text-xs uppercase tracking-widest rounded-xl flex items-center gap-3 transition-all duration-300 shadow-[0_0_35px_rgba(255,255,255,0.25)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] cursor-pointer group"
            >
              <span>LET'S BUILD IT</span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
