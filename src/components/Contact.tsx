"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Send, Sparkles } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [dots, setDots] = useState<{ id: number; size: number; x: number; y: number; duration: number }[]>([]);

  useEffect(() => {
    const generated = [...Array(14)].map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      duration: 12 + Math.random() * 10,
    }));
    setDots(generated);
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Full Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!service) newErrors.service = "Please select a service";
    if (!message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setName(""); setEmail(""); setCompany(""); setService(""); setMessage(""); setErrors({});
    }, 1500);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 18 } },
  };

  const infoCards = [
    {
      num: "01",
      icon: MapPin,
      label: "Location",
      content: <>Gaspare Gozzi, 53<br />30171 Mestre, Venezia, Italy</>,
    },
    {
      num: "02",
      icon: Mail,
      label: "Email",
      content: <span className="font-mono">hello@studiowebdigital.it</span>,
    },
    {
      num: "03",
      icon: Phone,
      label: "Phone",
      content: <span className="font-mono">+39 351 225 5725</span>,
    },
    {
      num: "04",
      icon: Clock,
      label: "Business Hours",
      content: <>Mon – Fri: 9:00 AM – 6:00 PM<br />Sat: 10:00 AM – 2:00 PM</>,
    },
  ];

  const inputClass = "w-full px-3 py-2.5 text-xs border border-neutral-900 rounded-xl bg-neutral-950/40 text-white placeholder:text-neutral-700 focus:outline-none focus:border-neutral-700 focus:ring-1 focus:ring-neutral-700 transition-colors duration-200";
  const labelClass = "text-[10px] font-mono text-neutral-500 uppercase tracking-wider";

  return (
    <section
      className="relative px-6 md:px-12 py-28 z-10 w-full overflow-hidden border-t border-neutral-900 bg-[#050505]"
    >
      {/* Drifting background dots */}
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-white pointer-events-none z-0"
          style={{ width: dot.size, height: dot.size, left: `${dot.x}%`, top: `${dot.y}%` }}
          animate={{ y: [0, -50, 0], opacity: [0.1, 0.45, 0.1] }}
          transition={{ duration: dot.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Breathing glow — top-right */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-5%] w-[440px] h-[440px] rounded-full bg-white/10 blur-[120px] pointer-events-none z-0"
      />
      {/* Secondary glow — bottom-left */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.16, 0.06] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-[-10%] left-[-5%] w-[360px] h-[360px] rounded-full bg-white/8 blur-[100px] pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col gap-16">

        {/* ── Section Header (centered) ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <motion.p variants={itemVariants} className="text-[10px] tracking-[0.2em] font-mono text-neutral-500 uppercase flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            Start a Conversation
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08]">
            Let's Build{" "}
            <span className="font-light text-neutral-400 text-glow">Together.</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-neutral-500 text-sm leading-relaxed max-w-lg">
            Have an upcoming project, system implementation, or strategy overhaul? Leave a brief description and we'll get back to you.
          </motion.p>
        </motion.div>

        {/* ── Main Layout ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >

          {/* Left: Info cards */}
          <motion.div variants={itemVariants} className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {infoCards.map(({ num, icon: Icon, label, content }) => (
              <div key={num} className="group relative p-[1px] rounded-2xl overflow-hidden">
                {/* Conic border beam on hover */}
                <div className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_60%,#ffffff_88%,#ffffff_100%)] animate-[spin_8s_linear_infinite] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="relative rounded-[15px] bg-neutral-950/20 group-hover:bg-neutral-950/50 border border-neutral-900 group-hover:border-neutral-800 transition-all duration-300 flex flex-col overflow-hidden">
                  {/* Top bar */}
                  <div className="flex items-center justify-between px-5 pt-4 pb-3">
                    <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-neutral-700 group-hover:text-neutral-500 transition-colors duration-300">{num} /</span>
                    <div className="w-7 h-7 rounded-full border border-neutral-800 bg-neutral-950 flex items-center justify-center text-neutral-600 group-hover:text-white group-hover:border-neutral-600 transition-all duration-300">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="mx-5 border-t border-neutral-900 group-hover:border-neutral-800 transition-colors duration-300" />
                  <div className="px-5 pt-3 pb-4">
                    <h4 className="text-xs font-semibold text-white tracking-tight mb-1">{label}</h4>
                    <p className="text-[11px] text-neutral-600 group-hover:text-neutral-400 leading-relaxed transition-colors duration-300">{content}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Form panel */}
          <motion.div variants={itemVariants} className="lg:col-span-8 w-full">
            <div className="relative p-[1px] rounded-2xl overflow-hidden">
              {/* Subtle static conic gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,#1a1a1a_0%,#2a2a2a_50%,#1a1a1a_100%)]" />
              <div className="relative rounded-[15px] bg-neutral-950/60 p-7 md:p-9">

                <AnimatePresence mode="wait">
                  {!submitSuccess ? (
                    <motion.form
                      key="contact-form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5 text-left">
                          <label htmlFor="name" className={labelClass}>Full Name *</label>
                          <input id="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Lucia Santoro" className={inputClass} />
                          {errors.name && <span className="text-[9px] font-mono text-red-500">{errors.name}</span>}
                        </div>
                        <div className="flex flex-col gap-1.5 text-left">
                          <label htmlFor="email" className={labelClass}>Email Address *</label>
                          <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="lucia@fashionhouse.it" className={inputClass} />
                          {errors.email && <span className="text-[9px] font-mono text-red-500">{errors.email}</span>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5 text-left">
                          <label htmlFor="company" className={labelClass}>Company Name</label>
                          <input id="company" type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Fashion House Italia" className={inputClass} />
                        </div>
                        <div className="flex flex-col gap-1.5 text-left">
                          <label htmlFor="service" className={labelClass}>Service Interested In *</label>
                          <select id="service" required value={service} onChange={(e) => setService(e.target.value)} className={inputClass + " bg-neutral-950"}>
                            <option value="">Select a service category</option>
                            <option value="digital-marketing">Digital Marketing</option>
                            <option value="web-development">Web Development</option>
                            <option value="ai-services">AI Bot & Agent</option>
                            <option value="social-media">Social Media Management</option>
                            <option value="other">Other / Custom Scope</option>
                          </select>
                          {errors.service && <span className="text-[9px] font-mono text-red-500">{errors.service}</span>}
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5 text-left">
                        <label htmlFor="message" className={labelClass}>Message Details *</label>
                        <textarea id="message" required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Outline your project scope or objectives..." rows={5} className={inputClass + " resize-none"} />
                        {errors.message && <span className="text-[9px] font-mono text-red-500">{errors.message}</span>}
                      </div>

                      {/* CTA — conic border beam button */}
                      <div className="relative p-[1px] rounded-xl overflow-hidden mt-2">
                        <div className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_50%,#ffffff_80%,#ffffff_100%)] animate-[spin_6s_linear_infinite] opacity-40" />
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="relative w-full py-3 rounded-[11px] bg-white hover:bg-neutral-200 disabled:bg-neutral-800 disabled:text-neutral-500 text-[#050505] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer z-10"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-3.5 h-3.5 rounded-full border border-neutral-600 border-t-neutral-200 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Inquiry
                              <Send className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="submit-success-state"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-16 text-center space-y-4"
                    >
                      <div className="w-12 h-12 rounded-full border border-neutral-800 bg-neutral-950 flex items-center justify-center text-white mx-auto shadow-md text-lg">
                        ✓
                      </div>
                      <div className="space-y-1.5">
                        <h3 className="text-base font-bold text-white tracking-tight">Message Received</h3>
                        <p className="text-xs text-neutral-400 max-w-sm mx-auto leading-relaxed">
                          Thank you for contacting StudioWebDigital. Your query has been logged. Our Venice team will reply via email within 12 business hours.
                        </p>
                      </div>
                      <button
                        onClick={() => setSubmitSuccess(false)}
                        className="px-4 py-2 border border-neutral-900 bg-neutral-950 hover:text-white hover:bg-neutral-900 text-neutral-500 text-xs font-mono rounded-xl transition-colors cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

