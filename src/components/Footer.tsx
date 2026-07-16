"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { ScrollContext } from "../app/page";

export default function Footer() {
  const scrollContainerRef = useContext(ScrollContext);
  const handleScrollToTop = () => {
    const element = document.getElementById("home") || document.documentElement;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#050505] border-t border-neutral-900/60 py-16 relative overflow-hidden flex flex-col justify-center items-center">

      {/* ── Background Grid Pattern & Stealth Neutral Glow ── */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[220px] rounded-full bg-white/5 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col items-center gap-16 relative z-10">

        {/* ── Massive Centered Outlined Logo ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ root: scrollContainerRef || undefined, once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex items-center justify-center py-6 select-none"
        >
          <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-[0.12em] text-outline-cyan cursor-default text-center">
            CodeBorgo
          </span>
        </motion.div>

        {/* ── Bottom Meta Row ── */}
        <div className="w-full border-t border-neutral-900/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-mono text-neutral-500">

          {/* Company descriptor & VAT */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-neutral-400 text-center md:text-left">
              CodeBorgo · P.IVA IT01234567890 · Mestre, Venezia, Italy
            </span>
            <div className="flex items-center gap-3 mt-1.5 select-none text-[10px]">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>·</span>
              <a href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</a>
              <span>·</span>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-950/60 hover:bg-cyan-500/10 hover:border-cyan-500/30 text-neutral-400 hover:text-cyan-400 transition-all duration-300 cursor-pointer"
          >
            <span className="w-4 h-4 rounded-full bg-cyan-500/15 flex items-center justify-center">
              <ArrowUp className="w-2.5 h-2.5" />
            </span>
            Back to Top
          </button>

          {/* Copyright */}
          <div>
            <span>© {new Date().getFullYear()} CodeBorgo. All Rights Reserved.</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
