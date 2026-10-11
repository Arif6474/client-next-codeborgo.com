"use client";

import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { ScrollContext } from "../app/page";
import { useLanguage } from "../context/LanguageContext";

export default function FAQ() {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const scrollContainerRef = useContext(ScrollContext);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqItems = t.faq.items;

  return (
    <section
      id="faq"
      className="scroll-section relative px-5 sm:px-8 md:px-12 z-10 w-full overflow-hidden border-t border-neutral-900/60 bg-[#050505] flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full py-[8vh] grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-20 items-start">

        {/* ── Left: sticky heading block ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ root: scrollContainerRef || undefined, once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 lg:gap-6"
        >
          <p className="text-[10px] tracking-[0.25em] font-mono text-neutral-500 uppercase">
            {t.faq.badge}
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-[1.1]">
            {t.faq.titleLine1}<br />
            <span className="font-light text-neutral-400">{t.faq.titleLine2}</span>
          </h2>

          <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
            {t.faq.subtitle}
          </p>

          {/* CTA */}
          <a
            href="#contact"
            className="mt-2 inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-neutral-800 bg-neutral-950 hover:bg-neutral-900 hover:border-neutral-700 text-white text-xs font-mono tracking-wider uppercase transition-all duration-300 group w-fit"
          >
            <MessageCircle className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
            {language === "it" ? "Fai una domanda" : "Ask a question"}
          </a>

          {/* Decorative number pill */}
          <div className="mt-6 flex items-center gap-3 opacity-30">
            <div className="h-px flex-1 bg-neutral-800" />
            <span className="text-[10px] font-mono text-neutral-500">
              {faqItems.length} {language === "it" ? "DOMANDE" : "QUESTIONS"}
            </span>
          </div>
        </motion.div>

        {/* ── Right: accordion list ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ root: scrollContainerRef || undefined, once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col divide-y divide-neutral-900"
        >
          {faqItems.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="group">
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full py-4 sm:py-5 flex items-start gap-3 sm:gap-4 text-left focus:outline-none cursor-pointer"
                >
                  {/* Number */}
                  <span className={`shrink-0 text-[11px] font-mono tabular-nums mt-0.5 transition-colors duration-300 ${isOpen ? "text-white" : "text-neutral-500 group-hover:text-neutral-300"}`}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}
                  <span className={`flex-1 text-sm sm:text-base font-semibold leading-snug transition-colors duration-300 ${isOpen ? "text-white" : "text-neutral-400 group-hover:text-neutral-200"}`}>
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <span className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 mt-0.5 ${
                    isOpen
                      ? "border-white bg-white text-black"
                      : "border-neutral-800 bg-transparent text-neutral-500 group-hover:border-neutral-600"
                  }`}>
                    {isOpen
                      ? <Minus className="w-3 h-3" />
                      : <Plus className="w-3 h-3" />
                    }
                  </span>
                </button>

                {/* Animated answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 pl-7 sm:pl-9 pr-3 sm:pr-8 text-sm text-neutral-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
