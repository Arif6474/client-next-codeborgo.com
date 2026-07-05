"use client";

import { motion, Variants } from "framer-motion";
import { Zap, Shield, Eye, Flame, GraduationCap, Clock, Sparkles } from "lucide-react";

export default function Features() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const featuresList = [
    {
      title: "Ultra Performance",
      desc: "Server-side rendering, CDN edge caching, and optimized asset delivery yielding 98+ PageSpeed scores.",
      icon: Zap,
    },
    {
      title: "Bespoke Aesthetics",
      desc: "Fully tailored user interfaces crafted from scratch. High typography hierarchy and premium spacing rules.",
      icon: Flame,
    },
    {
      title: "Advanced AI Bots",
      desc: "Chatbots and background workflows engineered with OpenAI/Claude APIs to automate 80% of customer support.",
      icon: GraduationCap,
    },
    {
      title: "Security By Design",
      desc: "Enterprise-grade SSL compliance, PCI-compliant Stripe billing, and serverless route isolation.",
      icon: Shield,
    },
    {
      title: "ROI-Focused SEO",
      desc: "Targeted keyword planning and content architectures designed to capture organic pipelines and increase sales.",
      icon: Eye,
    },
    {
      title: "Bespoke Maintenance",
      desc: "Continuous post-launch audit reports, design upgrades, server patching, and responsive 24/7 client support.",
      icon: Clock,
    },
  ];

  return (
    <section
      id="features"
      className="scroll-section px-6 md:px-12 py-24 z-10 w-full overflow-hidden border-t border-neutral-950 bg-[#050505]"
    >
      {/* Background glow */}
      <div className="absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-white/[0.015] blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full flex flex-col justify-between my-auto">
        
        {/* Section Header */}
        <div className="text-left max-w-xl space-y-4 mb-16">
          <p className="text-[10px] tracking-[0.2em] font-mono text-neutral-500 uppercase flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            CORE CAPABILITIES
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            High Performance. <br />
            <span className="font-light text-neutral-400 text-glow">Zero Compromise.</span>
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            We operate at the intersection of design craftsmanship and backend performance. Here is how we build value into every deployment.
          </p>
        </div>

        {/* Features Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {featuresList.map((feat) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                variants={itemVariants}
                className="group p-8 rounded-2xl border border-neutral-900 bg-neutral-950/20 hover:bg-neutral-950/50 hover:border-neutral-800 hover:shadow-xl transition-all duration-300 flex flex-col text-left glow-sm"
              >
                <div className="p-3 w-fit rounded-xl border border-neutral-900 bg-neutral-950/40 text-neutral-400 group-hover:text-white group-hover:border-neutral-800 transition-all duration-300 mb-6">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white tracking-tight mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
