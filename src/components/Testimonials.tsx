"use client";

import { useContext } from "react";
import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ScrollContext } from "../app/page";

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  color: string;
}

const testimonials: TestimonialItem[] = [
  {
    quote:
      "Migrated our Shopify to headless Next.js. Page loads are under 400ms globally and our conversion rate doubled in the first month.",
    author: "Lucia Santoro",
    role: "CEO, Santoro Leatherwear",
    avatar: "LS",
    color: "bg-emerald-500",
  },
  {
    quote:
      "Their Claude support bot handles 75% of our inquiries automatically. It saved our team 20+ support hours a week.",
    author: "Matteo Ricci",
    role: "Operations Lead, HypeCart SaaS",
    avatar: "MR",
    color: "bg-indigo-500",
  },
  {
    quote:
      "Engineered a React and TimescaleDB analytics dashboard that handles thousands of queries with sub-200ms latency.",
    author: "Andrei Popescu",
    role: "CTO, Dataview Analytics",
    avatar: "AP",
    color: "bg-cyan-500",
  },
  {
    quote:
      "They built our new reservation system, managed photography, and optimized local SEO. Bookings are up 40% YoY.",
    author: "Elena Moretti",
    role: "Co-owner, Osteria Rialto",
    avatar: "EM",
    color: "bg-amber-500",
  },
  {
    quote:
      "Delivered a gorgeous digital storefront that feels as luxury and editorial as our physical flagship store in Venice.",
    author: "Isabella Rossi",
    role: "Creative Director, Vento Studio",
    avatar: "IR",
    color: "bg-rose-500",
  },
  {
    quote:
      "CodeBorgo shipped our marketing page in just 3 weeks with a perfect 100 PageSpeed score. Excellent automation.",
    author: "Jonathan K.",
    role: "VP of Product, Apex Energy",
    avatar: "JK",
    color: "bg-sky-500",
  },
  {
    quote:
      "Their custom Stripe payment integrations are bulletproof. We processed over €150k in orders with zero dropouts.",
    author: "Thomas Weber",
    role: "Founder, Alpine Goods",
    avatar: "TW",
    color: "bg-violet-500",
  },
  {
    quote:
      "Designed a stunning, unified brand identity across our website and social channels. Highly recommended.",
    author: "Sofia Bianchi",
    role: "Marketing Manager, Flora Cosmetics",
    avatar: "SB",
    color: "bg-pink-500",
  },
];

// Split evenly into two rows
const row1 = testimonials.slice(0, 5);
const row2 = testimonials.slice(5);

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[340px] md:w-[380px] mr-5 p-5 sm:p-6 rounded-2xl border border-neutral-800/70 bg-neutral-950/70 hover:bg-neutral-900/70 hover:border-neutral-700 transition-all duration-300 text-left flex flex-col gap-4 cursor-default group">
      {/* Quote mark */}
      <span className="text-4xl sm:text-5xl font-serif text-neutral-500 leading-none select-none group-hover:text-neutral-400 transition-colors">
        &#8220;&#8220;
      </span>

      {/* Quote text */}
      <p className="text-sm text-neutral-200 leading-relaxed flex-1 font-medium">
        {item.quote}
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
  reverse = false,
}: {
  items: TestimonialItem[];
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
        className={`flex w-max ${reverse ? "animate-[marquee-reverse_35s_linear_infinite]" : "animate-[marquee_35s_linear_infinite]"
          } hover:[animation-play-state:paused]`}
      >
        {doubled.map((item, idx) => (
          <TestimonialCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
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
            <Sparkles className="w-3.5 h-3.5 text-cyan-505 animate-pulse" />
            What Clients Say
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08]"
          >
            Trusted by <span className="font-light text-neutral-400">Ambitious Teams.</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-neutral-500 text-sm leading-relaxed max-w-lg"
          >
            Real feedback from businesses who partnered with us to build extraordinary digital experiences.
          </motion.p>
        </motion.div>

        {/* Row 1 — scrolls left */}
        <MarqueeRow items={row1} reverse={false} />

        {/* Row 2 — scrolls right (opposite direction) */}
        <MarqueeRow items={row2} reverse={true} />

      </div>
    </section>
  );
}
