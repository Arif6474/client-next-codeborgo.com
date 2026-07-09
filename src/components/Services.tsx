"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
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
} from "lucide-react";
import Modal from "./ui/Modal";

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
  { id: "digital-marketing", name: "Digital Marketing", price: "Custom", icon: LineChart, desc: "Strategic SEO, PPC ads, and campaign planning to drive qualified organic conversions.", accent: "from-blue-500/10 to-indigo-500/5", iconColor: "text-blue-400" },
  { id: "web-development", name: "Web Development", price: "Custom", icon: Laptop, desc: "Bespoke high-performance websites and Next.js applications engineered with speed.", accent: "from-violet-500/10 to-purple-500/5", iconColor: "text-violet-400" },
  { id: "ai-services", name: "AI Bot & Agent", price: "Custom", icon: Bot, desc: "Autonomous AI agents and chatbots trained on your data to handle support 24/7.", accent: "from-emerald-500/10 to-teal-500/5", iconColor: "text-emerald-400" },
  { id: "social-media", name: "Social Media", price: "Custom", icon: Share2, desc: "Amplifying your brand voice through tactical growth strategies and visual calendars.", accent: "from-pink-500/10 to-rose-500/5", iconColor: "text-pink-400" },
  { id: "cloud-devops", name: "Cloud & DevOps", price: "Custom", icon: Cloud, desc: "Automated deployment, high-availability clouds, and secure infrastructure pipelines.", accent: "from-blue-500/10 to-indigo-500/5", iconColor: "text-blue-400" },
  { id: "saas-development", name: "SaaS Development", price: "Custom", icon: Cpu, desc: "Custom web applications, robust multi-tenant architectures, and scalable cloud databases.", accent: "from-violet-500/10 to-purple-500/5", iconColor: "text-violet-400" },
  { id: "ux-strategy", name: "UX/UI Strategy", price: "Custom", icon: Layers, desc: "User research, high-fidelity prototypes, and design systems for enterprise products.", accent: "from-rose-500/10 to-pink-500/5", iconColor: "text-rose-400" },
  { id: "data-analytics", name: "Data & Analytics", price: "Custom", icon: BarChart, desc: "Interactive dashboards, telemetry pipelines, and predictive business intelligence.", accent: "from-cyan-500/10 to-sky-500/5", iconColor: "text-cyan-400" },
  { id: "headless-ecommerce", name: "Headless E-Commerce", price: "Custom", icon: ShoppingBag, desc: "Lightning-fast decoupled storefronts built on Shopify, BigCommerce, or custom APIs.", accent: "from-emerald-500/10 to-teal-500/5", iconColor: "text-emerald-400" },
];

// Animated Icon component
function AnimatedIcon({ Icon, iconColor }: { Icon: React.ElementType; iconColor: string }) {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      whileHover="hover"
      initial="rest"
    >
      {/* Pulsing ring */}
      <motion.span
        variants={{
          rest: { scale: 1, opacity: 0 },
          hover: { scale: 1.6, opacity: 0.15 },
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`absolute w-14 h-14 rounded-full bg-current ${iconColor} blur-md`}
      />
      {/* Icon itself */}
      <motion.div
        variants={{
          rest: { scale: 1, rotate: 0 },
          hover: { scale: 1.18, rotate: -6 },
        }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className={`relative w-12 h-12 rounded-2xl flex items-center justify-center bg-neutral-900 border border-neutral-800 ${iconColor} shadow-lg`}
      >
        <Icon className="w-6 h-6" />
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [dots, setDots] = useState<BgDot[]>([]);

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

      {/* Breathing ambient glow — top-right */}
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

      <div className="max-w-7xl mx-auto w-full py-28 flex flex-col gap-16 relative z-10">

        {/* ── Section Header (centered) ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
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
            <span className="font-light text-neutral-400 text-glow">
              Services.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-neutral-500 text-sm leading-relaxed max-w-lg"
          >
            Tailored digital craftsmanship — click any card to explore deliverables and rates.
          </motion.p>
        </motion.div>

        {/* ── Services Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {servicesList.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.id}
                variants={itemVariants}
                onClick={() => setSelectedService(serviceDetailsData[svc.id] || null)}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative rounded-2xl border border-neutral-900 bg-neutral-950/20 hover:bg-neutral-950/50 hover:border-neutral-800 transition-all duration-300 flex flex-col cursor-pointer overflow-hidden"
              >
                {/* Left accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b ${svc.accent.replace("/10", "/60").replace("/5", "/30")} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Top: number + icon circle */}
                <div className="flex items-center justify-between px-6 pt-6 pb-5">
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-neutral-700 group-hover:text-neutral-500 transition-colors duration-300">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className={`w-9 h-9 rounded-full border border-neutral-800 bg-neutral-950 flex items-center justify-center ${svc.iconColor} group-hover:border-neutral-600 transition-all duration-300`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Divider */}
                <div className="mx-6 border-t border-neutral-900 group-hover:border-neutral-800 transition-colors duration-300" />

                {/* Content */}
                <div className="px-6 pt-5 pb-5 flex flex-col gap-2 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-semibold text-white tracking-tight leading-snug">
                      {svc.name}
                    </h3>
                    <ArrowUpRight className={`w-4 h-4 shrink-0 mt-0.5 ${svc.iconColor} opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200`} />
                  </div>
                  <p className="text-xs text-neutral-600 group-hover:text-neutral-400 leading-relaxed transition-colors duration-300">
                    {svc.desc}
                  </p>
                </div>

                {/* Footer: price + cta */}
                <div className="px-6 pb-6 flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold tracking-wider ${svc.iconColor} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}>
                    {svc.price}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-700 group-hover:text-neutral-400 transition-colors tracking-wider uppercase">
                    View details →
                  </span>
                </div>

                {/* Bottom accent line — slides in on hover */}
                <div className="absolute bottom-0 left-0 h-[1.5px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-neutral-500 to-transparent transition-all duration-500 ease-out" />
              </motion.div>
            );
          })}
        </motion.div>
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
            <p className="text-sm text-neutral-400 leading-relaxed">
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
                        <h5 className="text-xs font-bold tracking-tight">{sub.title}</h5>
                      </div>
                      <p className="text-[11px] text-neutral-500 leading-relaxed">{sub.desc}</p>
                    </div>
                    {sub.price && (
                      <span className="text-[10px] font-mono text-white mt-3 text-right">
                        {sub.price}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-neutral-900 pt-5 text-left">
              <p className="text-xs text-neutral-400 leading-relaxed font-medium">
                {selectedService.ctaText}
              </p>
              <button
                onClick={() => {
                  setSelectedService(null);
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-4 px-5 py-2.5 bg-white text-[#050505] hover:bg-neutral-200 transition-colors text-xs font-semibold uppercase tracking-wider rounded-lg shadow-md cursor-pointer"
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
