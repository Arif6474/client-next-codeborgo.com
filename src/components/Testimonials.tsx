"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

const testimonials: TestimonialItem[] = [
  {
    quote: "StudioWebDigital completely transformed our digital presence. The team's professionalism and attention to detail exceeded expectations. Our sales increased by 180% in the first quarter!",
    author: "Lucia Santoro",
    role: "CEO, Italian Fashion House",
    initials: "LS",
  },
  {
    quote: "The AI chatbot they built handles 80% of our customer inquiries automatically. It's intelligent, natural-sounding, and has dramatically improved our customer satisfaction scores.",
    author: "Marco Rossi",
    role: "Founder, Tech Startup",
    initials: "MR",
  },
  {
    quote: "Working with StudioWebDigital was a game-changer. Their social media strategy grew our brand awareness exponentially, and the engagement metrics speak for themselves. Highly recommended!",
    author: "Giulia Bianchi",
    role: "Marketing Director, Beauty Brand",
    initials: "GB",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 },
    },
  };

  return (
    <section
      id="testimonials"
      className="scroll-section px-6 md:px-12 py-24 z-10 w-full overflow-hidden border-t border-neutral-950 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-between my-auto">
        
        {/* Header */}
        <div className="text-left max-w-xl space-y-4 mb-14">
          <p className="text-[10px] tracking-[0.2em] font-mono text-neutral-500 uppercase flex items-center gap-2">
            <Quote className="w-3.5 h-3.5" />
            PARTNER VERDICTS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Client <span className="font-light text-neutral-400 text-glow">Testimonials.</span>
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Real feedback from ambitious businesses we have partnered with across digital and automated systems.
          </p>
        </div>

        {/* Desktop View: 3 Columns Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="hidden md:grid grid-cols-3 gap-6"
        >
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group p-8 rounded-2xl border border-neutral-900 bg-neutral-950/20 hover:bg-neutral-950/50 hover:border-neutral-800 transition-all duration-300 flex flex-col text-left justify-between h-[300px] glow-sm"
            >
              <div className="space-y-4">
                <div className="flex gap-0.5 text-white/40">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-neutral-400 italic leading-relaxed line-clamp-6 group-hover:text-neutral-300 transition-colors">
                  "{testi.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 mt-6 border-t border-neutral-900/60 pt-4">
                <div className="w-8 h-8 rounded-full border border-neutral-800 bg-neutral-950 flex items-center justify-center text-[10px] font-bold text-white font-mono shadow-inner">
                  {testi.initials}
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-white tracking-tight">{testi.author}</h4>
                  <p className="text-[10px] text-neutral-500 font-mono mt-0.5 leading-none">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View: Arrow-Based Slide Switcher */}
        <div className="md:hidden flex flex-col space-y-6">
          <div className="relative h-[250px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 p-6 rounded-2xl border border-neutral-900 bg-neutral-950/40 text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex gap-0.5 text-white/40">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-neutral-400 italic leading-relaxed line-clamp-6">
                    "{testimonials[activeIndex].quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 border-t border-neutral-900/60 pt-4">
                  <div className="w-8 h-8 rounded-full border border-neutral-800 bg-neutral-950 flex items-center justify-center text-[10px] font-bold text-white font-mono">
                    {testimonials[activeIndex].initials}
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-white">{testimonials[activeIndex].author}</h4>
                    <p className="text-[9px] text-neutral-500 font-mono mt-0.5">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel controls */}
          <div className="flex justify-between items-center px-2">
            <div className="flex gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "bg-white w-3" : "bg-neutral-850 bg-neutral-800"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-lg border border-neutral-900 bg-neutral-950 hover:bg-neutral-900 text-neutral-400 hover:text-white transition-colors"
                aria-label="Previous quote"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-lg border border-neutral-900 bg-neutral-950 hover:bg-neutral-900 text-neutral-400 hover:text-white transition-colors"
                aria-label="Next quote"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
