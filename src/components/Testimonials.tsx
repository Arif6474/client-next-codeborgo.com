"use client";

import { useContext } from "react";
import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ScrollContext } from "../app/page";
import { useLanguage } from "../context/LanguageContext";

interface TestimonialItem {
  id: "santoro" | "hypecart" | "dataview" | "rialto" | "vento" | "apex" | "alpine" | "flora";
  author: string;
  role: string;
  avatar: string;
  color: string;
}

const baseTestimonials: TestimonialItem[] = [
  {
    id: "santoro",
    author: "Lucia Santoro",
    role: "CEO, Santoro Leatherwear",
    avatar: "LS",
    color: "bg-emerald-500",
  },
  {
    id: "hypecart",
    author: "Matteo Ricci",
    role: "Operations Lead, HypeCart SaaS",
    avatar: "MR",
    color: "bg-indigo-500",
  },
  {
    id: "dataview",
    author: "Andrei Popescu",
    role: "CTO, Dataview Analytics",
    avatar: "AP",
    color: "bg-cyan-500",
  },
  {
    id: "rialto",
    author: "Elena Moretti",
    role: "Co-owner, Osteria Rialto",
    avatar: "EM",
    color: "bg-amber-500",
  },
  {
    id: "vento",
    author: "Isabella Rossi",
    role: "Creative Director, Vento Studio",
    avatar: "IR",
    color: "bg-rose-500",
  },
  {
    id: "apex",
    author: "Jonathan K.",
    role: "VP of Product, Apex Energy",
    avatar: "JK",
    color: "bg-sky-500",
  },
  {
    id: "alpine",
    author: "Thomas Weber",
    role: "Founder, Alpine Goods",
    avatar: "TW",
    color: "bg-violet-500",
  },
  {
    id: "flora",
    author: "Sofia Bianchi",
    role: "Marketing Manager, Flora Cosmetics",
    avatar: "SB",
    color: "bg-pink-500",
  },
];

function TestimonialCard({ item, quote }: { item: TestimonialItem; quote: string }) {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[340px] md:w-[380px] mr-5 p-5 sm:p-6 rounded-2xl border border-neutral-800/70 bg-neutral-950/70 hover:bg-neutral-900/70 hover:border-neutral-700 transition-all duration-300 text-left flex flex-col gap-4 cursor-default group">
      {/* Quote mark */}
      <span className="text-4xl sm:text-5xl font-serif text-neutral-500 leading-none select-none group-hover:text-neutral-400 transition-colors">
        &#8220;&#8220;
      </span>

      {/* Quote text */}
      <p className="text-sm text-neutral-200 leading-relaxed flex-1 font-medium">
        {quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className={`w-9 h-9 rounded-full ${item.color} flex items-center justify-center text-[11px] font-bold text-white shrink-0 shadow-md`}
        >
          {item.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-white leading-tight">{item.author}</p>
          <p className="text-[11px] text-neutral-500 mt-0.5 leading-tight">{item.role}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  quotes,
  reverse = false,
}: {
  items: TestimonialItem[];
  quotes: Record<string, string>;
  reverse?: boolean;
}) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden relative w-full">
      {/* Left + right gradient masks */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <div
        className={`flex w-max ${
          reverse ? "animate-[marquee-reverse_35s_linear_infinite]" : "animate-[marquee_35s_linear_infinite]"
        } hover:[animation-play-state:paused]`}
      >
        {doubled.map((item, idx) => (
          <TestimonialCard key={idx} item={item} quote={quotes[item.id] || ""} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();
  const scrollContainerRef = useContext(ScrollContext);

  const containerVariants: Variants = {
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

  const row1 = baseTestimonials.slice(0, 5);
  const row2 = baseTestimonials.slice(5);

  return (
    <section
      id="testimonials"
      className="scroll-section relative px-0 py-0 z-10 w-full overflow-hidden border-t border-neutral-900/60 bg-[#050505] flex flex-col justify-center"
    >
      <div className="w-full flex flex-col gap-6 py-16 sm:py-20">

        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollContainerRef || undefined, once: true, amount: 0.4 }}
          className="flex flex-col items-center text-center space-y-4 px-6 mb-8"
        >
          <motion.p
            variants={itemVariants}
            className="text-[10px] tracking-[0.2em] font-mono text-neutral-500 uppercase flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            {t.testimonials.badge}
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08]"
          >
            {t.testimonials.titleLine1}{" "}
            <span className="font-light text-neutral-400">{t.testimonials.titleLine2}</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-neutral-500 text-sm leading-relaxed max-w-lg"
          >
            {t.testimonials.subtitle}
          </motion.p>
        </motion.div>

        {/* Row 1 — scrolls left */}
        <MarqueeRow items={row1} quotes={t.testimonials.quotes} reverse={false} />

        {/* Row 2 — scrolls right (opposite direction) */}
        <MarqueeRow items={row2} quotes={t.testimonials.quotes} reverse={true} />

      </div>
    </section>
  );
}
