"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

    // Simulate API form submission latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setName("");
      setEmail("");
      setCompany("");
      setService("");
      setMessage("");
      setErrors({});
    }, 1500);
  };

  return (
    <div
      className="px-6 md:px-12 py-6 z-10 w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center my-auto">
        
        {/* Left Column: Contact details */}
        <div className="lg:col-span-5 flex flex-col text-left space-y-6">
          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.2em] font-mono text-neutral-500 uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              START A CONVERSATION
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Let's Build <br />
              <span className="font-light text-neutral-400 text-glow">Together.</span>
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
              Have an upcoming project, system implementation, or strategy overhaul? Leave a brief description and we will get back to you.
            </p>
          </div>

          <div className="space-y-3 pt-4">
            {/* Location */}
            <div className="p-4 rounded-xl border border-neutral-900 bg-neutral-950/20 flex gap-4 items-start glow-sm">
              <div className="p-2 rounded-lg border border-neutral-900 bg-neutral-950/60 text-neutral-450 text-neutral-400 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-white tracking-tight">Location</h4>
                <p className="text-[11px] text-neutral-550 text-neutral-400 mt-1 leading-normal">
                  Gaspare Gozzi, 53 <br />
                  30171 Mestre, Venezia, Italy
                </p>
              </div>
            </div>

            {/* Email / Phone Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl border border-neutral-900 bg-neutral-950/20 flex gap-4 items-start glow-sm">
                <div className="p-2 rounded-lg border border-neutral-900 bg-neutral-950/60 text-neutral-400 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-white tracking-tight">Email</h4>
                  <p className="text-[11px] text-neutral-400 mt-1 leading-normal font-mono">
                    hello@studiowebdigital.it
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-neutral-900 bg-neutral-950/20 flex gap-4 items-start glow-sm">
                <div className="p-2 rounded-lg border border-neutral-900 bg-neutral-950/60 text-neutral-400 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-white tracking-tight">Phone</h4>
                  <p className="text-[11px] text-neutral-400 mt-1 leading-normal font-mono">
                    +39 351 225 5725
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-4 rounded-xl border border-neutral-900 bg-neutral-950/20 flex gap-4 items-start glow-sm">
              <div className="p-2 rounded-lg border border-neutral-900 bg-neutral-950/60 text-neutral-400 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-white tracking-tight">Business Hours</h4>
                <p className="text-[11px] text-neutral-400 mt-1 leading-normal">
                  Mon - Fri: 9:00 AM - 6:00 PM <br />
                  Sat: 10:00 AM - 2:00 PM (Sun Closed)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 w-full">
          <div className="p-6 md:p-8 rounded-2xl border border-neutral-900 bg-neutral-950/45 relative shadow-lg glow-sm">
            <div className="absolute inset-0 noise-bg opacity-30 pointer-events-none" />

            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 relative z-10"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label htmlFor="name" className="text-[10px] font-mono text-neutral-500 uppercase">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Lucia Santoro"
                        className="w-full px-3 py-2.5 text-xs border border-neutral-900 rounded-lg bg-neutral-950/40 text-white focus:outline-none focus:border-neutral-750 focus:ring-1 focus:ring-neutral-750"
                      />
                      {errors.name && <span className="text-[9px] font-mono text-red-500">{errors.name}</span>}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label htmlFor="email" className="text-[10px] font-mono text-neutral-500 uppercase">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="lucia@fashionhouse.it"
                        className="w-full px-3 py-2.5 text-xs border border-neutral-900 rounded-lg bg-neutral-950/40 text-white focus:outline-none focus:border-neutral-750 focus:ring-1 focus:ring-neutral-750"
                      />
                      {errors.email && <span className="text-[9px] font-mono text-red-500">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label htmlFor="company" className="text-[10px] font-mono text-neutral-500 uppercase">
                        Company Name
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Fashion House Italia"
                        className="w-full px-3 py-2.5 text-xs border border-neutral-900 rounded-lg bg-neutral-950/40 text-white focus:outline-none focus:border-neutral-750 focus:ring-1 focus:ring-neutral-750"
                      />
                    </div>

                    {/* Service Selection */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label htmlFor="service" className="text-[10px] font-mono text-neutral-500 uppercase">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        required
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs border border-neutral-900 rounded-lg bg-neutral-950/60 text-neutral-350 bg-neutral-950 text-white focus:outline-none focus:border-neutral-750 focus:ring-1 focus:ring-neutral-750"
                      >
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

                  {/* Message */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="message" className="text-[10px] font-mono text-neutral-500 uppercase">
                      Message details *
                    </label>
                    <textarea
                      id="message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline your project scope or objectives..."
                      rows={5}
                      className="w-full px-3 py-2.5 text-xs border border-neutral-900 rounded-lg bg-neutral-950/40 text-white focus:outline-none focus:border-neutral-750 focus:ring-1 focus:ring-neutral-750 resize-none"
                    />
                    {errors.message && <span className="text-[9px] font-mono text-red-500">{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-white text-[#050505] hover:bg-neutral-200 disabled:bg-neutral-800 disabled:text-neutral-500 transition-colors text-xs font-semibold uppercase tracking-wider rounded-lg shadow-md flex items-center justify-center gap-2 mt-6 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 rounded-full border border-neutral-500 border-t-neutral-100 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="submit-success-state"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-16 text-center space-y-4 relative z-10"
                >
                  <div className="w-12 h-12 rounded-full border border-neutral-850 bg-neutral-950 flex items-center justify-center text-white mx-auto shadow-md">
                    ✓
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-white tracking-tight">Message Received</h3>
                    <p className="text-xs text-neutral-400 max-w-sm mx-auto leading-relaxed">
                      Thank you for contacting StudioWebDigital. Your query has been logged. Our Venice architectural team will reply via email within 12 business hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-4 py-2 border border-neutral-900 bg-neutral-950 text-neutral-450 hover:text-white hover:bg-neutral-900 text-xs font-mono rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
