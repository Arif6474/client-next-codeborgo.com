"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Eye, Gauge, ShieldCheck, Zap, Server, Code, Sparkles, CheckCircle2 } from "lucide-react";

export default function DesignEngineering() {
  const [activeMode, setActiveMode] = useState<"visual" | "tech">("visual");

  const metrics = [
    { label: "Performance", value: "100/100", detail: "LCP 0.2s · CLS 0.00" },
    { label: "SEO Score", value: "100/100", detail: "JSON-LD & OpenGraph" },
    { label: "Accessibility", value: "100/100", detail: "WCAG 2.1 AAA Compliant" },
    { label: "Edge Latency", value: "<12ms", detail: "Global CDN Edge Nodes" },
  ];

  return (
    <section
      id="signature"
      className="scroll-section relative flex flex-col justify-center items-center px-6 py-20 z-10 w-full min-h-screen bg-[#050505] overflow-hidden venetian-grid"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-950/80 text-xs font-mono tracking-widest text-neutral-400 uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Signature Standard
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase font-sans">
            BEAUTIFUL <span className="bg-gradient-to-r from-cyan-200 via-blue-400 to-indigo-400 bg-clip-text text-transparent">ISN'T ENOUGH.</span>
          </h2>

          <p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            High design gets visitors to look. High engineering turns visitors into customers. Toggle below to inspect the architecture behind our builds.
          </p>

          {/* Interactive Mode Toggle */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl border border-neutral-800 bg-neutral-950/90 backdrop-blur-md">
              <button
                onClick={() => setActiveMode("visual")}
                data-cursor-text="VISUAL"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeMode === "visual"
                    ? "bg-white text-black font-semibold shadow-lg"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <Eye className="w-4 h-4" />
                Visual Experience
              </button>

              <button
                onClick={() => setActiveMode("tech")}
                data-cursor-text="TECH SPEC"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeMode === "tech"
                    ? "bg-cyan-500 text-black font-semibold shadow-[0_0_25px_rgba(6,182,212,0.4)]"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <Cpu className="w-4 h-4" />
                Engineering Spec
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Display Panel */}
        <div className="relative w-full rounded-2xl border border-neutral-800 bg-neutral-950/80 backdrop-blur-xl p-6 md:p-10 shadow-2xl overflow-hidden min-h-[420px] flex items-center justify-center">

          <AnimatePresence mode="wait">
            {activeMode === "visual" ? (
              <motion.div
                key="visual"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-widest">
                    <span>01 · LUXURY VISUAL SYSTEM</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    Editorial Fluidity Meets Venetian Precision
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Every interaction is weighted with custom spring physics, GPU-accelerated motion blur, and clean glassmorphic layers that align perfectly with brand identity.
                  </p>

                  <div className="space-y-3 pt-2">
                    {[
                      "Sub-pixel fluid typography & custom kinetic animations",
                      "Contextual magnetic mouse interaction layer",
                      "Seamless dark mode aesthetic optimized for luxury engagement",
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs text-neutral-300 font-mono">
                        <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Preview Graphic */}
                <div className="relative rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 space-y-4 overflow-hidden water-shimmer">
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-neutral-500">codeborgo.com/v2/experience</span>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="h-6 w-3/4 rounded bg-white/10 animate-pulse" />
                    <div className="h-4 w-1/2 rounded bg-neutral-800" />
                    <div className="grid grid-cols-3 gap-2 pt-4">
                      <div className="h-20 rounded-lg border border-white/10 bg-white/5 flex flex-col justify-end p-3">
                        <span className="text-[10px] text-neutral-400 font-mono">Conversion</span>
                        <span className="text-sm font-bold text-white">+340%</span>
                      </div>
                      <div className="h-20 rounded-lg border border-white/10 bg-white/5 flex flex-col justify-end p-3">
                        <span className="text-[10px] text-neutral-400 font-mono">Bounce</span>
                        <span className="text-sm font-bold text-emerald-400">-62%</span>
                      </div>
                      <div className="h-20 rounded-lg border border-white/10 bg-white/5 flex flex-col justify-end p-3">
                        <span className="text-[10px] text-neutral-400 font-mono">Page Load</span>
                        <span className="text-sm font-bold text-cyan-400">0.2s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="tech"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="w-full space-y-8"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {metrics.map((m, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/60 space-y-1">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">{m.label}</span>
                      <div className="text-2xl md:text-3xl font-black font-mono text-cyan-400">{m.value}</div>
                      <span className="text-[10px] font-mono text-neutral-400 block">{m.detail}</span>
                    </div>
                  ))}
                </div>

                {/* Code Terminal Spec Preview */}
                <div className="rounded-xl border border-cyan-900/40 bg-[#080c14] p-5 font-mono text-xs text-neutral-300 space-y-3">
                  <div className="flex items-center justify-between border-b border-cyan-950 pb-2 text-[10px] text-cyan-500">
                    <span className="flex items-center gap-2">
                      <Code className="w-3.5 h-3.5 text-cyan-400" />
                      LIVE ARCHITECTURE SPEC
                    </span>
                    <span>NEXT.JS 16 APP ROUTER · VERCEL EDGE</span>
                  </div>

                  <div className="space-y-1 text-[11px] leading-relaxed">
                    <p><span className="text-purple-400">export const</span> <span className="text-yellow-300 font-bold">runtime</span> = <span className="text-emerald-300">'edge'</span>;</p>
                    <p><span className="text-purple-400">import</span> &#123; ClaudeAI, VectorDb &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'@codeborgo/ai-stack'</span>;</p>
                    <p className="text-neutral-500">// Zero layout shift, 100% server component rendering, edge cached</p>
                    <p><span className="text-blue-400">const</span> architecture = &#123; latency: <span className="text-cyan-400">'9ms'</span>, security: <span className="text-cyan-400">'SOC2/GDPR'</span>, bundle: <span className="text-cyan-400">'42kB gzip'</span> &#125;;</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
