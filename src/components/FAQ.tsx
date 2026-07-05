"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, HelpCircle, ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: "What technologies does StudioWebDigital specialize in?",
    answer: "We specialize in modern frontend and full-stack solutions. Our primary stack includes Next.js (App Router), React, TypeScript, Tailwind CSS, Node.js, and serverless databases like PostgreSQL. For AI implementations, we work directly with Anthropic Claude and OpenAI API integration vectors.",
  },
  {
    question: "How long does a typical custom website build take?",
    answer: "A standard landing page or basic website takes 1-2 weeks. Complete custom Next.js builds (such as our Starter package) typically require 3-4 weeks. Enterprise portals with custom dashboards or complex database operations run about 6-12 weeks.",
  },
  {
    question: "Can we pay in installments for larger projects?",
    answer: "Yes. For our Starter, Professional, and Enterprise packages, we structure payments in stages—commonly a 50% kick-off deposit, 25% on mid-development review, and the remaining 25% upon final build authorization and launch.",
  },
  {
    question: "What does your post-launch SLA support cover?",
    answer: "Our SLA support covers technical server monitoring, API connection repairs, database optimization, styling adjustments, and minor text/image updates. Continued feature rollouts or major design extensions are billed separately under design retainer contracts.",
  },
  {
    question: "How do you build and secure custom AI chatbots?",
    answer: "We analyze your support logs or internal documentation, parse the text into a vector database, write instructions defining the chatbot's voice constraints, and establish secure serverless endpoints. All user inputs are sanitized to protect database security.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="scroll-section px-6 md:px-12 py-24 z-10 w-full overflow-hidden border-t border-neutral-950 bg-[#050505]"
    >
      <div className="max-w-3xl mx-auto w-full flex flex-col justify-between my-auto">
        
        {/* Header */}
        <div className="text-left space-y-4 mb-14">
          <p className="text-[10px] tracking-[0.2em] font-mono text-neutral-500 uppercase flex items-center gap-2">
            <HelpCircle className="w-3.5 h-3.5" />
            COMMON INQUIRIES
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Frequently Asked <span className="font-light text-neutral-400 text-glow">Questions.</span>
          </h2>
        </div>

        {/* FAQ Accordion list */}
        <div className="space-y-3">
          {faqList.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-neutral-900 bg-neutral-950/20 overflow-hidden transition-colors duration-300 hover:border-neutral-850"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 flex justify-between items-center text-left text-white focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs font-semibold tracking-tight pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-500 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-white" : ""
                    }`}
                  />
                </button>

                {/* Animated collapsible panel */}
                <div
                  className="transition-all duration-300 ease-in-out overflow-hidden"
                  style={{
                    height: isOpen ? "auto" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="p-5 pt-0 border-t border-neutral-900/40 text-neutral-400 text-xs leading-relaxed text-left">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
