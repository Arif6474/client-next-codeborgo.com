"use client";

import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Sparkles, BarChart, ShoppingCart, MessageSquare, Heart, LayoutGrid, Utensils, CheckCircle, Ticket, ExternalLink, Building } from "lucide-react";
import { ScrollContext } from "../app/page";

// Structure definitions
interface ProjectMetric {
  value: string;
  label: string;
}

interface PortfolioItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  metrics: ProjectMetric[];
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  liveLink?: string;
}

interface PortfolioDetail {
  id: string;
  tag: string;
  title: string;
  overview: string;
  strategyHeading: string;
  strategyItems: string[];
  results: ProjectMetric[];
  techStack?: string[];
  features?: string[];
  image: string;
  liveLink?: string;
}

const portfolioList: PortfolioItem[] = [
  {
    id: "grandmela",
    tag: "Event Ticketing",
    title: "GrandMela",
    description: "An event ticketing platform for discovering and booking local concerts and matches, featuring secure checkout and instant guest ticketing.",
    icon: Ticket,
    image: "/projects/grandmela/grandmela1.png",
    liveLink: 'https://grandmela.it/',
    metrics: [
      { value: "Stripe", label: "Payment Stack" },
      { value: "QR Code", label: "Gate Check-In" },
    ],
  },
  {
    id: "casabella",
    tag: "Fine Dining",
    title: "Casa Bella",
    description: "A multicultural fine dining restaurant platform featuring multi-cuisine menus, online ordering, and table reservations.",
    icon: Utensils,
    image: "/projects/casabella/casaa-bella.png",
    liveLink: "https://casabella.codeborgo.com/",
    metrics: [
      { value: "Restaurant", label: "Industry" },
      { value: "Venice", label: "Location" },
    ],
  },
  {
    id: "staynova",
    tag: "Staffing Solutions",
    title: "StayNova",
    description: "Premium hospitality staffing platform providing trained personnel for hotels, events, and corporate clients across the UAE.",
    icon: CheckCircle,
    image: "/projects/staynova/staynova1.png",
    liveLink: 'https://staynova.ae/',
    metrics: [
      { value: "Dubai, UAE", label: "Target Region" },
      { value: "B2B", label: "Business Model" },
    ],
  },
  {
    id: "ennconsultancy",
    tag: "Business Setup",
    title: "ENN Consultancy",
    description: "A leading business setup and visa consultancy in the UAE, providing innovative solutions for mainland, freezone, and offshore company formation.",
    icon: Building,
    image: "/projects/enn/enn1.png",
    liveLink: 'https://ennconsultancy.ae/',
    metrics: [
      { value: "UAE", label: "Target Region" },
      { value: "B2B & B2C", label: "Clientele Focus" },
    ],
  },

  {
    id: "luxury-fashion",
    tag: "Digital Marketing",
    title: "Luxury Fashion Brand",
    description: "Concept storefront for a luxury fashion label — editorial layout, headless commerce, and a marketing site built for organic reach.",
    icon: Heart,
    image: "/images/luxury-fashion.png",
    metrics: [
      { value: "SEO Focus", label: "Organic Target" },
      { value: "6 Weeks", label: "Estimated Scope" },
    ],
  },
  {
    id: "ecommerce",
    tag: "Web Development",
    title: "E-Commerce Platform",
    description: "Full-stack commerce concept for artisan products, with Stripe checkout, CDN delivery, and edge caching.",
    icon: ShoppingCart,
    image: "/images/ecommerce.png",
    metrics: [
      { value: "Stripe API", label: "Payment Stack" },
      { value: "Edge CDN", label: "Delivery Network" },
    ],
  },
  {
    id: "chatbot",
    tag: "AI Services",
    title: "Smart Customer Bot",
    description: "An AI support agent concept built on the Claude API — designed to resolve common customer questions automatically.",
    icon: MessageSquare,
    image: "/images/chatbot.png",
    metrics: [
      { value: "Claude API", label: "LLM Model" },
      { value: "< 2s", label: "Response Time" },
    ],
  },
  {
    id: "saas-dashboard",
    tag: "Web Development",
    title: "SaaS Dashboard",
    description: "Real-time analytics dashboard concept with sub-200ms query patterns and a clean data-heavy UI.",
    icon: LayoutGrid,
    image: "/images/saas-dashboard.png",
    metrics: [
      { value: "React/TS", label: "Frontend Stack" },
      { value: "< 200ms", label: "Query Latency" },
    ],
  },
  {
    id: "beauty-campaign",
    tag: "Social Media",
    title: "Beauty Brand Campaign",
    description: "Multi-platform social concept for a beauty brand — cohesive visual system across Instagram, TikTok, and LinkedIn.",
    icon: Sparkles,
    image: "/images/beauty-campaign.png",
    metrics: [
      { value: "Visual Kit", label: "Deliverables" },
      { value: "9:16 Video", label: "Format Focus" },
    ],
  },
  {
    id: "restaurant",
    tag: "Full Service",
    title: "Restaurant Brand Launch",
    description: "Localized Venezia restaurant brand concept — site, reservations flow, and local-search foundation.",
    icon: Utensils,
    image: "/images/restaurant.png",
    metrics: [
      { value: "Local SEO", label: "Organic Target" },
      { value: "Venezia", label: "Target Region" },
    ],
  },
];

export default function Portfolio() {
  const scrollContainerRef = useContext(ScrollContext);

  const [dots] = useState<{ id: number; size: number; x: number; y: number; duration: number }[]>(() =>
    [...Array(14)].map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      duration: 12 + Math.random() * 10,
    }))
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    currentTarget.style.setProperty("--mouse-x", `${x}px`);
    currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.98, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 },
    },
  };

  return (
    <section
      id="portfolio"
      className="scroll-section relative px-6 md:px-12 py-28 z-10 w-full overflow-hidden border-t border-neutral-900 bg-[#050505]"
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
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.24, 0.1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-5%] w-[440px] h-[440px] rounded-full bg-white/10 blur-[120px] pointer-events-none z-0"
      />
      {/* Secondary glow — bottom-left */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.16, 0.06] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        className="absolute bottom-[-10%] left-[-5%] w-[360px] h-[360px] rounded-full bg-white/8 blur-[100px] pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto w-full flex flex-col gap-16 relative z-10">

        {/* ── Section Header (centered) ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollContainerRef || undefined, once: true, amount: 0.4 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <motion.p
            variants={itemVariants}
            className="text-[10px] tracking-[0.2em] font-mono text-neutral-500 uppercase flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Capabilities & Showcase
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08]"
          >
            {"Concept Work & "}
            <span className="font-light text-neutral-400 text-glow">
              {"Capabilities."}
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-neutral-500 text-sm leading-relaxed max-w-lg"
          >
            {"A look at the kind of work we build — concept pieces and sample builds that show our range across web, commerce, AI, and brand. Your project becomes our next case study."}
          </motion.p>
        </motion.div>

        {/* ── Portfolio Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollContainerRef || undefined, once: true, amount: 0.1 }}
          className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-stretch max-w-7xl mx-auto w-full px-6 md:px-0 snap-x snap-mandatory no-scrollbar pb-6 md:pb-0"
        >
          {portfolioList.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onMouseMove={handleMouseMove}
                className="group relative rounded-3xl p-[1px] bg-neutral-900 hover:bg-neutral-800 transition-colors duration-500 overflow-hidden snap-start shrink-0 w-[85vw] sm:w-[380px] md:w-auto"
              >
                {/* Border spotlight effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 bg-[radial-gradient(400px_circle_at_var(--mouse-x,-400px)_var(--mouse-y,-400px),rgba(255,255,255,0.2),transparent_80%)]" />

                <div className="relative h-full flex flex-col rounded-[23px] bg-[#070707] overflow-hidden z-10 border border-transparent shadow-2xl">
                  {/* Inner spotlight */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                    style={{
                      backgroundImage: `radial-gradient(400px circle at var(--mouse-x, -400px) var(--mouse-y, -400px), rgba(255,255,255,0.03), transparent 80%)`
                    }}
                  />

                  {/* Image Preview Area */}
                  <div className="relative w-full aspect-[16/11] overflow-hidden bg-neutral-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    />
                    {/* Dark gradient overlay at the bottom of the image to blend into the card body */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-black/20 to-transparent opacity-90" />

                    {/* Glass Overlay Tag */}
                    <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-black/50 border border-white/10 backdrop-blur-md">
                      <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-white/90 uppercase">
                        {project.tag}
                      </span>
                    </div>
                    {/* Category icon */}
                    <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-black/50 border border-white/10 backdrop-blur-md flex items-center justify-center text-white/70 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1 relative z-20">
                    <h3 className="text-xl font-bold text-white tracking-tight mb-3 leading-snug group-hover:text-glow transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[13px] text-neutral-400 leading-relaxed mb-8 transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Visit Project Button */}
                    <div className="mt-auto pt-2">
                      {project.liveLink ? (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn relative flex items-center justify-center w-full gap-2.5 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 text-xs font-bold uppercase tracking-[0.15em] rounded-xl text-white shadow-sm overflow-hidden"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                            Visit Project
                          </span>
                        </a>
                      ) : (
                        <div className="h-[46px] w-full border border-dashed border-white/5 rounded-xl flex items-center justify-center">
                          <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">In Development</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
