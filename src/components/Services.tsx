"use client";

import { useState, useEffect, useContext } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ScrollContext } from "../app/page";
import {
  LineChart,
  Laptop,
  Bot,
  Share2,
  Cloud,
  Cpu,
  Layers,
  BarChart,
  ShoppingBag,
  CheckCircle,
  ArrowUpRight,
  Sparkles,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Modal from "./ui/Modal";

interface ServiceTheme {
  bgClass: string;
  borderClass: string;
  iconBgClass: string;
  iconColorClass: string;
  glowShadow: string;
  spotlightColor: string;
}

const serviceThemes: Record<string, ServiceTheme> = {
  "digital-marketing": {
    bgClass: "bg-[#091020]/95 hover:bg-[#0c152a]",
    borderClass: "border border-blue-500/35 hover:border-blue-400/80",
    iconBgClass: "bg-blue-500/15 border border-blue-400/25",
    iconColorClass: "text-blue-400",
    glowShadow: "group-hover:shadow-[0_0_35px_rgba(59,130,246,0.22)]",
    spotlightColor: "rgba(59, 130, 246, 0.08)",
  },
  "web-development": {
    bgClass: "bg-[#100920]/95 hover:bg-[#150c2a]",
    borderClass: "border border-purple-500/35 hover:border-purple-400/80",
    iconBgClass: "bg-purple-500/15 border border-purple-400/25",
    iconColorClass: "text-purple-400",
    glowShadow: "group-hover:shadow-[0_0_35px_rgba(168,85,247,0.22)]",
    spotlightColor: "rgba(168, 85, 247, 0.08)",
  },
  "ai-services": {
    bgClass: "bg-[#092013]/95 hover:bg-[#0c2a1a]",
    borderClass: "border border-emerald-500/35 hover:border-emerald-400/80",
    iconBgClass: "bg-emerald-500/15 border border-emerald-400/25",
    iconColorClass: "text-emerald-400",
    glowShadow: "group-hover:shadow-[0_0_35px_rgba(16,185,129,0.22)]",
    spotlightColor: "rgba(16, 185, 129, 0.08)",
  },
  "social-media": {
    bgClass: "bg-[#201209]/95 hover:bg-[#2a180c]",
    borderClass: "border border-amber-500/35 hover:border-amber-400/80",
    iconBgClass: "bg-amber-500/15 border border-amber-400/25",
    iconColorClass: "text-amber-400",
    glowShadow: "group-hover:shadow-[0_0_35px_rgba(245,158,11,0.22)]",
    spotlightColor: "rgba(245, 158, 11, 0.08)",
  },
  "cloud-devops": {
    bgClass: "bg-[#20090f]/95 hover:bg-[#2a0c14]",
    borderClass: "border border-rose-500/35 hover:border-rose-400/80",
    iconBgClass: "bg-rose-500/15 border border-rose-400/25",
    iconColorClass: "text-rose-400",
    glowShadow: "group-hover:shadow-[0_0_35px_rgba(244,63,94,0.22)]",
    spotlightColor: "rgba(244, 63, 94, 0.08)",
  },
  "saas-development": {
    bgClass: "bg-[#091f20]/95 hover:bg-[#0c292a]",
    borderClass: "border border-cyan-500/35 hover:border-cyan-400/80",
    iconBgClass: "bg-cyan-500/15 border border-cyan-400/25",
    iconColorClass: "text-cyan-400",
    glowShadow: "group-hover:shadow-[0_0_35px_rgba(6,182,212,0.22)]",
    spotlightColor: "rgba(6, 182, 212, 0.08)",
  },
  "ux-strategy": {
    bgClass: "bg-[#201e09]/95 hover:bg-[#2a280c]",
    borderClass: "border border-yellow-500/35 hover:border-yellow-400/80",
    iconBgClass: "bg-yellow-500/15 border border-yellow-400/25",
    iconColorClass: "text-yellow-400",
    glowShadow: "group-hover:shadow-[0_0_35px_rgba(234,179,8,0.22)]",
    spotlightColor: "rgba(234, 179, 8, 0.08)",
  },
  "data-analytics": {
    bgClass: "bg-[#091620]/95 hover:bg-[#0c1d2a]",
    borderClass: "border border-sky-500/35 hover:border-sky-400/80",
    iconBgClass: "bg-sky-500/15 border border-sky-400/25",
    iconColorClass: "text-sky-400",
    glowShadow: "group-hover:shadow-[0_0_35px_rgba(14,165,233,0.22)]",
    spotlightColor: "rgba(14, 165, 233, 0.08)",
  },
  "headless-ecommerce": {
    bgClass: "bg-[#20091b]/95 hover:bg-[#2a0c24]",
    borderClass: "border border-pink-500/35 hover:border-pink-400/80",
    iconBgClass: "bg-pink-500/15 border border-pink-400/25",
    iconColorClass: "text-pink-400",
    glowShadow: "group-hover:shadow-[0_0_35px_rgba(236,72,153,0.22)]",
    spotlightColor: "rgba(236, 72, 153, 0.08)",
  },
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface BgDot {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
}

interface SubService {
  title: string;
  desc: string;
  price?: string;
}

interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  subServices: SubService[];
  ctaText: string;
}

const serviceDetailsData: Record<string, ServiceDetail> = {
  "digital-marketing": {
    id: "digital-marketing",
    title: "Digital Marketing & SEO Excellence",
    tagline: "Boost Your Online Visibility",
    description:
      "Our comprehensive digital marketing services are designed to increase visibility, engagement, and conversion. We combine strategic planning with tactical execution to deliver measurable results.",
    subServices: [
      { title: "SEO Optimization", desc: "Technical and content SEO strategies to rank higher on search engines and capture organic traffic." },
      { title: "Paid Advertising", desc: "Strategic Google Ads, LinkedIn Ads, and PPC campaigns with optimized ROI." },
      { title: "Analytics & Reporting", desc: "Real-time tracking and monthly reports to measure campaign performance." },
      { title: "Content Strategy", desc: "Engaging content for blogs, whitepapers, and case studies that establish thought leadership." },
    ],
    ctaText: "Ready to grow your business? Let's discuss how our digital marketing strategies can help.",
  },
  "web-development": {
    id: "web-development",
    title: "Web Development & Design",
    tagline: "Beautiful, High-Performance Websites",
    description:
      "We create stunning, high-performance websites and web applications that convert visitors into customers. Every project is a blend of technical excellence and thoughtful design.",
    subServices: [
      { title: "UI/UX Design", desc: "User-centered design that prioritizes usability, accessibility, and aesthetic excellence." },
      { title: "Frontend Development", desc: "React, Next.js, and modern JavaScript with responsive layouts and animations." },
      { title: "Backend Development", desc: "Robust server-side solutions using Node.js, databases, and modern APIs." },
      { title: "Performance & Security", desc: "Fast-loading sites with code splitting, lazy loading, SSL, and security best practices." },
    ],
    ctaText: "Let's build something amazing. Contact us to discuss your web development project.",
  },
  "ai-services": {
    id: "ai-services",
    title: "AI Bot & Agent Services",
    tagline: "Intelligent Automation Powered by AI",
    description:
      "Leverage artificial intelligence to automate processes, improve customer experience, and gain competitive advantages. Our AI solutions are secure, scalable, and tailored to your needs.",
    subServices: [
      { title: "AI Chatbots", desc: "Intelligent chatbots for 24/7 customer support and lead qualification." },
      { title: "AI Agents", desc: "Autonomous agents that handle complex workflows and automate repetitive tasks." },
      { title: "Machine Learning", desc: "Custom ML models for predictive analytics and customer behavior analysis." },
      { title: "LLM Integration", desc: "Custom integrations with GPT, Claude, and other large language models." },
    ],
    ctaText: "Transform your business with AI. Explore how our AI solutions can revolutionize your operations.",
  },
  "social-media": {
    id: "social-media",
    title: "Social Media Management",
    tagline: "Build Community & Amplify Your Brand",
    description:
      "We create and manage social media strategies that build authentic connections with your audience, increase engagement, and drive business growth across all major platforms.",
    subServices: [
      { title: "Content Creation", desc: "Professional photography, videography, and graphic design for compelling social posts." },
      { title: "Strategic Planning", desc: "Content calendars aligned with your business goals and audience preferences." },
      { title: "Community Management", desc: "Active engagement, moderation, and responsive communication with your community." },
      { title: "Analytics & Insights", desc: "In-depth performance metrics and insights to guide strategy optimization." },
    ],
    ctaText: "Ready to grow your social presence? Let's create a strategy that drives real results.",
  },
  "cloud-devops": {
    id: "cloud-devops",
    title: "Cloud & DevOps Engineering",
    tagline: "Scale Safely, Deploy Instantly",
    description:
      "Deploy robust cloud architectures designed for performance, resilience, and maximum cost efficiency. We automate your infrastructure so you can focus on building your product.",
    subServices: [
      { title: "AWS & GCP Migration", desc: "Architecting multi-region deployments with high availability and automated disaster recovery." },
      { title: "CI/CD Deployments", desc: "Automated pipelines using GitHub Actions, Docker, and Kubernetes for zero-downtime releases." },
      { title: "Infrastructure as Code", desc: "Define and manage your cloud infrastructure securely as software using Terraform or Pulumi." },
      { title: "Security & IAM Policies", desc: "Regular compliance reviews, strict IAM policies, and VPC configurations to lock down data." },
    ],
    ctaText: "Ready to upgrade your infrastructure? Request a cloud configuration consultation today.",
  },
  "saas-development": {
    id: "saas-development",
    title: "Enterprise SaaS & Platform Engineering",
    tagline: "Custom Web Applications Built to Scale",
    description:
      "From initial database design to complex API orchestrations, we build high-performance web applications that power your business processes and serve millions of users.",
    subServices: [
      { title: "Multi-Tenant Architectures", desc: "Secure data separation, custom user provisioning, and role-based access management." },
      { title: "API Integrations & Design", desc: "Developing robust GraphQL, REST, and gRPC endpoints for seamless external data flow." },
      { title: "Scalable Cloud Backends", desc: "Node.js, Go, or Python microservices paired with optimized PostgreSQL/Redis backends." },
      { title: "Real-time Web Features", desc: "Interactive WebSockets, push notifications, and live operational dashboard integrations." },
    ],
    ctaText: "Have a product idea? Let's turn your design wireframes into custom SaaS solutions.",
  },
  "ux-strategy": {
    id: "ux-strategy",
    title: "Product Strategy & Design Systems",
    tagline: "User-Centered Digital Experiences",
    description:
      "Design interfaces that are beautiful, intuitive, and highly converting. We perform extensive user research and establish robust design systems that scale with your team.",
    subServices: [
      { title: "User Research & Testing", desc: "Data-driven insights to structure interfaces according to true user behaviors and goals." },
      { title: "High-Fidelity Prototypes", desc: "Interactive Figma layouts that demonstrate exact product workflows before writing code." },
      { title: "Custom Design Systems", desc: "A unified library of reusable UI components, tokens, and comprehensive style guides." },
      { title: "Conversion Audits", desc: "Comprehensive UI/UX reports to identify and remove drop-off points in your active funnel." },
    ],
    ctaText: "Elevate your product's user experience. Inquire about our design sprint consulting.",
  },
  "data-analytics": {
    id: "data-analytics",
    title: "Data Engineering & BI Dashboards",
    tagline: "Translate Raw Data into Decisions",
    description:
      "Harness the full power of your metrics. We build secure data pipelines, warehouse solutions, and interactive dashboards that give you real-time visibility into operations.",
    subServices: [
      { title: "Custom BI Dashboards", desc: "Stunning dashboards built with Tableau, Looker, or custom Next.js visualization charts." },
      { title: "Telemetry Integration", desc: "Advanced tracking utilizing Google Analytics 4, Segment, and Mixpanel analytics pipelines." },
      { title: "Data Pipelines & ETL", desc: "Reliable data extraction, cleaning, and loading into modern cloud data warehouses." },
      { title: "Predictive Analytics", desc: "Building custom ML models for user behavior analysis and sales forecasting." },
    ],
    ctaText: "Make sense of your data. Schedule a database and telemetry layout audit.",
  },
  "headless-ecommerce": {
    id: "headless-ecommerce",
    title: "Headless E-Commerce Architecture",
    tagline: "Fast, Secure, High-Conversion Storefronts",
    description:
      "Deliver lightning-fast page speeds and customized shopping experiences. We decouple your frontend from monolithic backends using Next.js and headless commerce APIs.",
    subServices: [
      { title: "Headless Shopify", desc: "Next.js or Remix interfaces connected to Shopify's Storefront API for custom designs." },
      { title: "Custom Checkout Flows", desc: "Integrating Stripe, PayPal, and Adyen with customized fraud prevention filters." },
      { title: "Omnichannel Commerce", desc: "Syncing inventory across physical POS, web apps, Amazon, and social media channels." },
      { title: "Page Speed Optimization", desc: "Achieving perfect Core Web Vitals to maximize search rankings and customer retention." },
    ],
    ctaText: "Ready to upgrade your online store? Let's outline a headless migration map.",
  },
};

const servicesList = [
  { id: "digital-marketing", name: "Digital Marketing", icon: LineChart, desc: "Open the Digital Marketing module" },
  { id: "web-development", name: "Web Development", icon: Laptop, desc: "Open the Web Development module" },
  { id: "ai-services", name: "AI Bot & Agent", icon: Bot, desc: "Open the AI Bot & Agent module" },
  { id: "social-media", name: "Social Media", icon: Share2, desc: "Open the Social Media module" },
  { id: "cloud-devops", name: "Cloud & DevOps", icon: Cloud, desc: "Open the Cloud & DevOps module" },
  { id: "saas-development", name: "SaaS Development", icon: Cpu, desc: "Open the SaaS Development module" },
  { id: "ux-strategy", name: "UX/UI Strategy", icon: Layers, desc: "Open the UX/UI Strategy module" },
  { id: "data-analytics", name: "Data & Analytics", icon: BarChart, desc: "Open the Data & Analytics module" },
  { id: "headless-ecommerce", name: "Headless E-Commerce", icon: ShoppingBag, desc: "Open the Headless E-Commerce module" },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);
  const scrollContainerRef = useContext(ScrollContext);

  const [dots] = useState<BgDot[]>(() =>
    [...Array(14)].map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      duration: 12 + Math.random() * 10,
    }))
  );

  const [activeMobileIdx, setActiveMobileIdx] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setActiveMobileIdx((prev) => (prev + 1) % servicesList.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveMobileIdx((prev) => (prev - 1 + servicesList.length) % servicesList.length);
  };

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
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 18 } },
  };

  return (
    <section
      id="services"
      className="scroll-section relative px-5 sm:px-8 md:px-12 z-10 w-full overflow-hidden border-t border-neutral-900 bg-[#050505]"
    >
      {/* Precision Grid Brackets & Viewport Borders */}
      <div className="absolute top-6 left-6 w-5 h-5 border-t border-l border-neutral-900 pointer-events-none select-none opacity-50" />
      <div className="absolute top-6 right-6 w-5 h-5 border-t border-r border-neutral-900 pointer-events-none select-none opacity-50" />
      <div className="absolute bottom-6 left-6 w-5 h-5 border-b border-l border-neutral-900 pointer-events-none select-none opacity-50" />
      <div className="absolute bottom-6 right-6 w-5 h-5 border-b border-r border-neutral-900 pointer-events-none select-none opacity-50" />

      {/* Drifting background dots */}
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-white pointer-events-none z-0"
          style={{
            width: dot.size,
            height: dot.size,
            left: `${dot.x}%`,
            top: `${dot.y}%`,
          }}
          animate={{ y: [0, -50, 0], opacity: [0.1, 0.45, 0.1] }}
          transition={{ duration: dot.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="max-w-7xl mx-auto w-full py-28 flex flex-col gap-16 relative z-10">

        {/* ── Section Header ── */}
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
            What We Deliver
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08]"
          >
            Our{" "}
            <span className="font-light text-neutral-400">Services</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-neutral-500 text-sm leading-relaxed max-w-lg"
          >
            Tailored digital craftsmanship — click any card to explore deliverables and specs.
          </motion.p>
        </motion.div>

        {/* ── Services Grid (Desktop Viewports) ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollContainerRef || undefined, once: true, amount: 0.1 }}
          onMouseLeave={() => setHoveredServiceId(null)}
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-6"
        >
          {servicesList.map((svc) => {
            const Icon = svc.icon;
            const theme = serviceThemes[svc.id] || serviceThemes["digital-marketing"];
            const isHovered = hoveredServiceId === svc.id;
            const isDimmed = hoveredServiceId !== null && !isHovered;

            return (
              <motion.div
                key={svc.id}
                variants={itemVariants}
                data-cursor-text="EXPLORE"
                onClick={() => setSelectedService(serviceDetailsData[svc.id] || null)}
                onMouseEnter={() => setHoveredServiceId(svc.id)}
                onMouseMove={handleMouseMove}
                className={`group relative rounded-[22px] p-6 sm:p-7 flex flex-col justify-between overflow-hidden cursor-pointer min-h-[210px] transition-all duration-500 ease-in-out ${
                  theme.bgClass
                } ${theme.borderClass} ${
                  isDimmed
                    ? "opacity-20 scale-[0.96] blur-[4px] filter grayscale-[40%]"
                    : "opacity-100 scale-100"
                } ${
                  isHovered
                    ? "z-30 scale-[1.04] shadow-[0_25px_60px_rgba(0,0,0,0.95)] ring-2 ring-amber-400/50"
                    : ""
                }`}
              >
                {/* Border Spotlight Radial Effect */}
                <div
                  className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none z-0"
                  style={{
                    backgroundImage: `radial-gradient(350px circle at var(--mouse-x, -400px) var(--mouse-y, -400px), ${theme.spotlightColor}, transparent 80%)`,
                  }}
                />

                {/* Top Row: Squircle Icon Badge + Top-Right Arrow */}
                <div className="flex items-start justify-between relative z-10 w-full mb-8">
                  {/* Icon Container (Squircle) */}
                  <div
                    className={`w-13 h-13 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${theme.iconBgClass}`}
                  >
                    <Icon className={`w-6 h-6 ${theme.iconColorClass}`} />
                  </div>

                  {/* Top-Right Arrow */}
                  <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
                </div>

                {/* Bottom Row: Title + Subtitle */}
                <div className="relative z-10 mt-auto">
                  <h3 className="text-xl font-bold font-mono tracking-tight text-white mb-1.5 group-hover:text-glow transition-colors">
                    {svc.name}
                  </h3>
                  <p className="text-xs text-[#8a99ad] font-mono leading-relaxed group-hover:text-neutral-300 transition-colors">
                    {svc.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Mobile: Swipe Carousel ── */}
        <div className="block md:hidden w-full relative px-2">
          <div className="relative w-full h-[240px] overflow-visible flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              {servicesList.map((svc, idx) => {
                if (idx !== activeMobileIdx) return null;
                const Icon = svc.icon;
                const theme = serviceThemes[svc.id] || serviceThemes["digital-marketing"];
                return (
                  <motion.div
                    key={svc.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.6}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);
                      if (swipe < -swipeConfidenceThreshold) {
                        handleNext();
                      } else if (swipe > swipeConfidenceThreshold) {
                        handlePrev();
                      }
                    }}
                    onClick={() => setSelectedService(serviceDetailsData[svc.id] || null)}
                    className="absolute w-full h-full cursor-pointer select-none touch-pan-y"
                  >
                    <div className={`relative rounded-[22px] p-6 flex flex-col justify-between h-full text-left ${theme.bgClass} ${theme.borderClass}`}>
                      {/* Top Row */}
                      <div className="flex items-start justify-between">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${theme.iconBgClass}`}>
                          <Icon className={`w-5 h-5 ${theme.iconColorClass}`} />
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-neutral-400" />
                      </div>

                      {/* Bottom Row */}
                      <div className="mt-auto">
                        <h3 className="text-lg font-bold font-mono tracking-tight text-white mb-1">
                          {svc.name}
                        </h3>
                        <p className="text-xs text-[#8a99ad] font-mono leading-relaxed">
                          {svc.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-neutral-900 bg-[#070707] hover:bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-neutral-500 select-none">
              {String(activeMobileIdx + 1).padStart(2, "0")} / {String(servicesList.length).padStart(2, "0")}
            </span>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-neutral-900 bg-[#070707] hover:bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white transition-all cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <Modal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title}
        subtitle={selectedService?.tagline}
      >
        {selectedService && (
          <div className="space-y-6">
            <p className="text-sm text-neutral-400 leading-relaxed font-mono">
              {selectedService.description}
            </p>

            <div className="border-t border-neutral-900 pt-5">
              <h4 className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase mb-4">
                WHAT IS INCLUDED
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedService.subServices.map((sub, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-neutral-900 bg-neutral-950/40 text-left flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-white">
                        <CheckCircle className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        <h5 className="text-xs font-bold font-mono tracking-tight">{sub.title}</h5>
                      </div>
                      <p className="text-[11px] text-neutral-500 leading-relaxed font-mono">{sub.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-neutral-900 pt-5 text-left">
              <p className="text-xs text-neutral-400 leading-relaxed font-mono">
                {selectedService.ctaText}
              </p>
              <button
                onClick={() => {
                  setSelectedService(null);
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-4 px-5 py-2.5 bg-white text-[#050505] hover:bg-neutral-200 transition-colors text-xs font-mono font-bold uppercase tracking-wider rounded-lg shadow-md cursor-pointer"
              >
                Inquire About Service
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
