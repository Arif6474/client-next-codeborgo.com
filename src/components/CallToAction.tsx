"use client";

import { useState, useContext } from "react";
import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    currentTarget.style.setProperty("--mouse-x", `${x}px`);
    currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

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
    <section className="scroll-section relative px-6 md:px-12 py-28 z-10 w-full overflow-hidden border-t border-neutral-900 bg-[#050505] flex flex-col justify-center">
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

      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-white/2 blur-[120px] pointer-events-none z-0" />
      
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollContainerRef || undefined, once: true, amount: 0.4 }}
          onMouseMove={handleMouseMove}
          className="group relative rounded-2xl bg-neutral-950/60 p-8 md:p-14 border border-neutral-900/60 hover:border-neutral-800 transition-all duration-300 flex flex-col items-center text-center space-y-6 overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(350px circle at var(--mouse-x, -400px) var(--mouse-y, -400px), rgba(96,165,250,0.035), transparent 80%)"
          }}
        >
          {/* Top border beam accent line */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          
          <p className="text-[10px] tracking-[0.25em] font-mono text-neutral-500 uppercase flex items-center gap-2 select-none">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            READY TO START?
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight max-w-2xl">
            Ready to build something <br className="hidden sm:block" />
            <span className="font-light text-neutral-400 text-glow">worth showing off?</span>
          </h2>

          <p className="text-neutral-450 text-xs sm:text-sm leading-relaxed max-w-md">
            {"Tell us about your project. You'll hear back within 24 hours with honest next steps — even if that's \"here's who you should talk to instead.\""}
          </p>

          <div className="pt-4">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative p-[1px] inline-block rounded-xl overflow-hidden bg-neutral-900/60 hover:bg-neutral-850 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.015)] hover:shadow-[0_0_25px_rgba(255,255,255,0.04)] group"
            >
              {/* Rotating Border Beam */}
              <div className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_50%,#ffffff_85%,#ffffff_100%)] animate-[spin_6s_linear_infinite] opacity-50" />
              
              <button
                onClick={handleCtaClick}
                className="relative px-5 py-3 bg-[#050505] hover:bg-[#050505]/95 text-white font-semibold text-xs uppercase tracking-widest rounded-[11px] flex items-center gap-2 transition-colors duration-300 z-10 cursor-pointer"
              >
                Book a Free Consultation
                <span className="text-neutral-550 group-hover:text-white group-hover:translate-x-0.5 transition-all text-xs">
                  →
                </span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
