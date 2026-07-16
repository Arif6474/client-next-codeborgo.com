"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay for entrance polish
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 18 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 rounded-2xl border border-neutral-900 bg-neutral-950/80 backdrop-blur-xl p-5 shadow-2xl flex flex-col gap-4 text-left"
        >
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full border border-neutral-800 bg-neutral-950 flex items-center justify-center text-cyan-400 shrink-0">
              <Cookie className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-semibold text-white tracking-tight">Cookie Settings</h4>
              <p className="text-[10px] text-neutral-400 leading-relaxed">
                We use cookies to enhance your experience and analyze our traffic. By clicking Accept, you consent to our use of cookies as described in our{" "}
                <a href="/cookie-policy" className="text-cyan-400 hover:underline">
                  Cookie Policy
                </a>.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2.5">
            <button
              onClick={handleReject}
              className="px-3.5 py-1.5 border border-neutral-900 bg-transparent text-[10px] font-mono text-neutral-500 hover:text-neutral-300 hover:border-neutral-800 rounded-xl transition-all cursor-pointer"
            >
              Reject Non-Essential
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-1.5 bg-white text-black hover:bg-neutral-200 text-[10px] font-mono font-bold rounded-xl transition-all cursor-pointer"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
