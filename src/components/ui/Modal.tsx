"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, subtitle, children }: ModalProps) {
  // Close on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#050505]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="relative w-full max-w-2xl max-h-[80dvh] overflow-y-auto rounded-2xl border border-neutral-800 bg-[#0c0c0c] p-6 md:p-8 text-left shadow-2xl glow-md no-scrollbar"
          >
            {/* Background elements */}
            <div className="absolute inset-0 noise-bg opacity-30 pointer-events-none" />
            <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-white/2 blur-[80px] pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 flex justify-between items-start mb-6">
              <div>
                {subtitle && (
                  <p className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mb-1">
                    {subtitle}
                  </p>
                )}
                {title && (
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                    {title}
                  </h3>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="relative z-10 text-neutral-300 text-sm leading-relaxed">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
