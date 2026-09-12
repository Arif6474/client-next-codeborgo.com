"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "text">("default");
  const [isVisible, setIsVisible] = useState(false);

  // Mouse Position Motion Values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth Springs for Cursor Ring
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Hide cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setIsVisible(true);

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check hovered elements for cursor attributes
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor-text], [data-cursor-variant], button, a");

      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor-text");
        const variant = cursorTarget.getAttribute("data-cursor-variant");

        if (text) {
          setCursorText(text);
          setCursorVariant("text");
        } else if (variant === "hover" || cursorTarget.tagName === "BUTTON" || cursorTarget.tagName === "A") {
          setCursorText("");
          setCursorVariant("hover");
        } else {
          setCursorText("");
          setCursorVariant("default");
        }
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveMouse);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* Primary Dot Pointer */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-white mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Outer Magnetic Ring / Label Badge */}
      <motion.div
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full border border-white/40 bg-black/70 backdrop-blur-md transition-colors duration-200 ${
          cursorVariant === "text"
            ? "px-3.5 py-1.5 text-xs font-mono tracking-widest text-white border-white/60 bg-white/10"
            : cursorVariant === "hover"
            ? "w-10 h-10 border-white/80 bg-white/20"
            : "w-8 h-8 border-white/20"
        }`}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorVariant === "text" ? 1.1 : cursorVariant === "hover" ? 1.25 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {cursorText && (
          <span className="whitespace-nowrap font-mono text-[10px] tracking-wider text-white uppercase">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
}
