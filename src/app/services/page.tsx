"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  Search,
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  Compass,
  Check
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CustomCursor from "../../components/ui/CustomCursor";
import NoiseBg from "../../components/ui/NoiseBg";
import Modal from "../../components/ui/Modal";

interface SubService {
  title: string;
  desc: string;
}

interface ServiceItem {
  id: string;
  category: "Web & Apps" | "AI & Systems" | "Cloud & SaaS" | "Growth & Strategy";
  name: string;
  tagline: string;
  description: string;
  subServices: SubService[];
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  bgClass: string;
  borderClass: string;
  iconBgClass: string;
  iconColorClass: string;
  glowShadow: string;
  spotlightColor: string;
  tools: string[];
}

const allServices: ServiceItem[] = [
  {
    id: "web-development",
    category: "Web & Apps",
    name: "Web Development & Architecture",
    tagline: "High-Performance Next.js Engineering",
    description:
      "We design and build bespoke, lighting-fast websites and web applications with flawless 100/100 Core Web Vitals, modular component systems, and bespoke micro-interactions.",
    subServices: [
      { title: "Custom Next.js & React Core", desc: "Engineered with App Router, server-rendered components, and sub-200ms TTFB edge caching." },
      { title: "Bespoke Figma UI/UX Systems", desc: "Tailored design systems, wireframes, and interactive kinetic motion prototypes." },
      { title: "Full-Stack API Integrations", desc: "Type-safe microservices with Node.js, TypeScript, PostgreSQL, and modern REST/GraphQL." },
      { title: "Edge Performance & Security", desc: "Zero-latency image optimization, SSL encryption, security headers, and SEO schemas." },
    ],
    icon: Laptop,
    accentColor: "purple",
    bgClass: "bg-[#100920]/95 hover:bg-[#150c2a]",
    borderClass: "border border-purple-500/35 hover:border-purple-400/80",
    iconBgClass: "bg-purple-500/15 border border-purple-400/25",
    iconColorClass: "text-purple-400",
    glowShadow: "group-hover:shadow-[0_0_35px_rgba(168,85,247,0.22)]",
    spotlightColor: "rgba(168, 85, 247, 0.08)",
    tools: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel Edge"],
  },
  {
    id: "ai-services",
    category: "AI & Systems",
    name: "AI Agents & Intelligent Automation",
    tagline: "Autonomous Workflows & Custom LLMs",
    description:
      "Transform business processes with autonomous AI agents and custom LLM integrations. We build customer-facing intelligent chatbots, automated internal assistants, and semantic RAG search engines.",
    subServices: [
      { title: "Autonomous Task Agents", desc: "Self-executing agents that connect with CRMs, databases, and APIs to automate multi-step operations." },
      { title: "Custom 24/7 AI Chatbots", desc: "Context-aware conversational assistants trained on company docs for customer support & sales qualification." },
      { title: "Retrieval-Augmented Generation (RAG)", desc: "Vector database embeddings for instant contextual document querying with sub-second latency." },
      { title: "Model Fine-Tuning & Orchestration", desc: "Tailored OpenAI, Claude, and open-source models aligned to your exact corporate knowledge base." },
    ],
    icon: Bot,
    accentColor: "emerald",
    bgClass: "bg-[#092013]/95 hover:bg-[#0c2a1a]",
    borderClass: "border border-emerald-500/35 hover:border-emerald-400/80",
    iconBgClass: "bg-emerald-500/15 border border-emerald-400/25",
    iconColorClass: "text-emerald-400",
    glowShadow: "group-hover:shadow-[0_0_35px_rgba(16,185,129,0.22)]",
    spotlightColor: "rgba(16, 185, 129, 0.08)",
    tools: ["Claude API", "OpenAI SDK", "Pinecone", "LangChain", "Node.js"],
  },
  {
    id: "digital-marketing",
    category: "Growth & Strategy",
    name: "Performance Marketing & SEO Dominance",
    tagline: "Targeted Customer Acquisition & Organic Rank",
    description:
      "Data-driven growth infrastructure designed to turn online searches into qualified inquiries. We combine technical SEO architecture, local search dominance, and high-ROI paid campaigns.",
    subServices: [
      { title: "Technical & Programmatic SEO", desc: "Structured data schema, indexation audits, Core Web Vitals tuning, and organic traffic growth." },
      { title: "Targeted Paid Advertising (PPC)", desc: "High-intent Google Search campaigns, LinkedIn B2B targeting, and conversion-optimized landing pages." },
      { title: "Local SEO & Footfall Optimization", desc: "Dominating local Italian & European geo-targeted searches, Google Maps, and review authority." },
      { title: "Attribution & Telemetry Reporting", desc: "Clear conversion tracking pipelines with zero vanity metrics and transparent monthly ROI reporting." },
    ],
    icon: LineChart,
    accentColor: "blue",
    bgClass: "bg-[#091020]/95 hover:bg-[#0c152a]",
    borderClass: "border border-blue-500/35 hover:border-blue-400/80",
    iconBgClass: "bg-blue-500/15 border border-blue-400/25",
    iconColorClass: "text-blue-400",
    glowShadow: "group-hover:shadow-[0_0_35px_rgba(59,130,246,0.22)]",
    spotlightColor: "rgba(59, 130, 246, 0.08)",
    tools: ["Google Ads", "GA4", "Search Console", "Local SEO", "Meta Pixel"],
  },
  {
    id: "saas-development",
    category: "Cloud & SaaS",
    name: "Enterprise SaaS & Platform Engineering",
    tagline: "Complex Cloud Applications Built for Scale",
    description:
      "Full-stack software engineering for high-concurrency SaaS products, multi-tenant B2B portals, and data-heavy dashboards with real-time sync and enterprise security.",
    subServices: [
      { title: "Multi-Tenant Architectures", desc: "Isolated customer schemas, custom role-based access control (RBAC), and team workspace permissions." },
      { title: "Real-Time WebSocket Sync", desc: "Live operational data feeds, collaborative state sync, and sub-200ms query query patterns." },
      { title: "Billing & Subscription Engines", desc: "Turnkey Stripe Billing, usage metering, automated invoicing, and multinational tax handling." },
      { title: "Custom API & Microservice Mesh", desc: "High-throughput REST, gRPC, and GraphQL endpoints designed for 99.99% uptime." },
    ],
    icon: Cpu,
    accentColor: "cyan",
    bgClass: "bg-[#091f20]/95 hover:bg-[#0c292a]",
    borderClass: "border border-cyan-500/35 hover:border-cyan-400/80",
    iconBgClass: "bg-cyan-500/15 border border-cyan-400/25",
    iconColorClass: "text-cyan-400",
    glowShadow: "group-hover:shadow-[0_0_35px_rgba(6,182,212,0.22)]",
    spotlightColor: "rgba(6, 182, 212, 0.08)",
    tools: ["TypeScript", "PostgreSQL", "Prisma", "Redis", "Stripe API"],
  },
  {
    id: "social-media",
    category: "Growth & Strategy",
    name: "Social Media & Brand Production",
    tagline: "High-Converting Editorial Visual Systems",
    description:
      "Craft bespoke visual content and multichannel storytelling that resonates. From editorial Instagram aesthetics to 9:16 short-form video and corporate narrative building.",
    subServices: [
      { title: "Editorial Content Production", desc: "High-definition photo assets, kinetic motion graphics, and premium digital lookbooks." },
      { title: "9:16 Motion & Short-Form Video", desc: "Scroll-stopping TikTok, Instagram Reels, and YouTube Shorts produced with cinematic polish." },
      { title: "Multichannel Campaign Strategy", desc: "Content calendars and automated publishing synchronized across Instagram, LinkedIn, and TikTok." },
      { title: "Community Building & Engagement", desc: "Active community management, follower loyalty cultivation, and strategic brand positioning." },
    ],
    icon: Share2,
    accentColor: "amber",
    bgClass: "bg-[#201209]/95 hover:bg-[#2a180c]",
    borderClass: "border border-amber-500/35 hover:border-amber-400/80",
    iconBgClass: "bg-amber-500/15 border border-amber-400/25",
    iconColorClass: "text-amber-400",
    glowShadow: "group-hover:shadow-[0_0_35px_rgba(245,158,11,0.22)]",
    spotlightColor: "rgba(245, 158, 11, 0.08)",
    tools: ["Figma", "After Effects", "Brand Guidelines", "Motion Graphics", "CapCut Pro"],
  },
  {
    id: "cloud-devops",
    category: "Cloud & SaaS",
    name: "Cloud & DevOps Engineering",
    tagline: "Resilient Multi-Zone Cloud Infrastructure",
    description:
      "Deploy robust, automated cloud infrastructure designed for zero-downtime releases, automated failover, and strict enterprise compliance on AWS, GCP, and Vercel.",
    subServices: [
      { title: "Automated CI/CD Pipelines", desc: "Zero-downtime git-push deployments with automated linting, unit testing, and preview environments." },
      { title: "Cloud Architecture & Migration", desc: "Multi-region deployments on AWS / GCP with automated elastic scaling and DDoS mitigation." },
      { title: "Infrastructure as Code (IaC)", desc: "Software-defined cloud infrastructure with Terraform and Docker containers for repeatable deployments." },
      { title: "Compliance & Security Hardening", desc: "Strict IAM security, VPC isolation, SSL management, and automated database backup policies." },
    ],
    icon: Cloud,
    accentColor: "rose",
    bgClass: "bg-[#20090f]/95 hover:bg-[#2a0c14]",
    borderClass: "border border-rose-500/35 hover:border-rose-400/80",
    iconBgClass: "bg-rose-500/15 border border-rose-400/25",
    iconColorClass: "text-rose-400",
    glowShadow: "group-hover:shadow-[0_0_35px_rgba(244,63,94,0.22)]",
    spotlightColor: "rgba(244, 63, 94, 0.08)",
    tools: ["AWS", "Docker", "GitHub Actions", "Terraform", "PostgreSQL Cloud"],
  },
  // {
  //   id: "headless-ecommerce",
  //   category: "Web & Apps",
  //   name: "Headless E-Commerce Architecture",
  //   tagline: "Fast, Bespoke Storefronts That Convert",
  //   description:
  //     "Decouple your frontend presentation from restrictive e-commerce backends. We build custom Next.js storefronts powered by Shopify Storefront API, Stripe, and custom inventory databases.",
  //   subServices: [
  //     { title: "Headless Shopify & Storefront API", desc: "Ultra-fast custom UI storefronts with unlimited design freedom and zero platform theme bloat." },
  //     { title: "Bespoke Checkout Workflows", desc: "One-click Stripe, Apple Pay, and Klarna payments with automated invoicing and tax localization." },
  //     { title: "Dynamic Product Configurators", desc: "Interactive 3D or 2D bespoke customizers for luxury products, apparel, and artisan goods." },
  //     { title: "Sub-Second Global Catalog Search", desc: "Instant algorithmic product filtering, faceted search, and predictive checkout recommendations." },
  //   ],
  //   icon: ShoppingBag,
  //   accentColor: "pink",
  //   bgClass: "bg-[#20091b]/95 hover:bg-[#2a0c24]",
  //   borderClass: "border border-pink-500/35 hover:border-pink-400/80",
  //   iconBgClass: "bg-pink-500/15 border border-pink-400/25",
  //   iconColorClass: "text-pink-400",
  //   glowShadow: "group-hover:shadow-[0_0_35px_rgba(236,72,153,0.22)]",
  //   spotlightColor: "rgba(236, 72, 153, 0.08)",
  //   tools: ["Shopify Storefront", "Next.js", "Stripe Checkout", "Algolia", "Tailwind CSS"],
  // },
  // {
  //   id: "ux-strategy",
  //   category: "Growth & Strategy",
  //   name: "UX/UI Strategy & Design Systems",
  //   tagline: "Conversion Architecture & Reusable Component Libraries",
  //   description:
  //     "Design systems that unite product teams. We audit user funnels, conduct behavioral testing, and build comprehensive component design systems in Figma and React code.",
  //   subServices: [
  //     { title: "Comprehensive Design Systems", desc: "Complete UI token systems, typography scales, iconography, and reusable React component mirrors." },
  //     { title: "Conversion Funnel Audits", desc: "Heuristic evaluations that uncover user drop-off friction and systematically lift checkout conversion rates." },
  //     { title: "Interactive Figma Click-Throughs", desc: "High-fidelity interactive prototypes that validate user journeys before writing a single line of code." },
  //     { title: "Accessibility & WCAG 2.1 Audits", desc: "Ensuring your digital platform meets European digital accessibility guidelines and standards." },
  //   ],
  //   icon: Layers,
  //   accentColor: "yellow",
  //   bgClass: "bg-[#201e09]/95 hover:bg-[#2a280c]",
  //   borderClass: "border border-yellow-500/35 hover:border-yellow-400/80",
  //   iconBgClass: "bg-yellow-500/15 border border-yellow-400/25",
  //   iconColorClass: "text-yellow-400",
  //   glowShadow: "group-hover:shadow-[0_0_35px_rgba(234,179,8,0.22)]",
  //   spotlightColor: "rgba(234, 179, 8, 0.08)",
  //   tools: ["Figma", "Design Tokens", "Storybook", "Hotjar", "Accessibility Tools"],
  // },
  // {
  //   id: "data-analytics",
  //   category: "AI & Systems",
  //   name: "Data Engineering & BI Dashboards",
  //   tagline: "Turn Operational Telemetry into Real Insights",
  //   description:
  //     "Harness your data streams. We build secure data pipelines, warehouse architectures, and real-time executive BI dashboards that give you instantaneous clarity over company KPIs.",
  //   subServices: [
  //     { title: "Custom Executive Dashboards", desc: "Sleek, real-time charts built with Next.js, TimescaleDB, and Recharts with sub-200ms query performance." },
  //     { title: "Telemetry & Event Pipelines", desc: "End-to-end user behavior telemetry using Segment, Mixpanel, and custom event sinks." },
  //     { title: "Automated Data Ingestion (ETL)", desc: "Reliable background sync jobs extracting data from Stripe, CRM, and databases into clean warehouses." },
  //     { title: "Predictive Analytics & Forecasting", desc: "Custom statistical models for churn prediction, sales forecasting, and inventory optimization." },
  //   ],
  //   icon: BarChart,
  //   accentColor: "sky",
  //   bgClass: "bg-[#091620]/95 hover:bg-[#0c1d2a]",
  //   borderClass: "border border-sky-500/35 hover:border-sky-400/80",
  //   iconBgClass: "bg-sky-500/15 border border-sky-400/25",
  //   iconColorClass: "text-sky-400",
  //   glowShadow: "group-hover:shadow-[0_0_35px_rgba(14,165,233,0.22)]",
  //   spotlightColor: "rgba(14, 165, 233, 0.08)",
  //   tools: ["PostgreSQL", "TimescaleDB", "Recharts", "Segment", "Python"],
  // },
];

const categories = [
  "All",
  "Web & Apps",
  "AI & Systems",
  "Cloud & SaaS",
  "Growth & Strategy",
];

const workflowSteps = [
  {
    number: "01",
    title: "Discovery & Technical Blueprint",
    time: "48 - 72 Hours",
    desc: "We analyze your business objectives, map out core technical requirements, define database schemas, and establish API integration scopes.",
  },
  {
    number: "02",
    title: "Bespoke Figma Prototyping",
    time: "Sprint 1",
    desc: "Interactive wireframes, token-based design systems, and liquid-smooth kinetic animations designed with Venetian elegance.",
  },
  {
    number: "03",
    title: "Next.js & Cloud Edge Engineering",
    time: "Sprints 2 - 3",
    desc: "Clean, type-safe TypeScript implementation with automated CI/CD pipelines, sub-second queries, and headless API connections.",
  },
  {
    number: "04",
    title: "QA, Lighthouse Vitals & SLA Handover",
    time: "Final Sprint",
    desc: "Rigorous automated cross-device testing, 100/100 Core Web Vitals audit, cloud DNS cutover, and 30-to-90 day post-launch SLA coverage.",
  },
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);
  const [modalService, setModalService] = useState<ServiceItem | null>(null);

  const filteredServices = allServices.filter((svc) => {
    const matchesCategory =
      selectedCategory === "All" || svc.category === selectedCategory;
    const matchesSearch =
      svc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      svc.subServices.some(
        (sub) =>
          sub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          sub.desc.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    currentTarget.style.setProperty("--mouse-x", `${x}px`);
    currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <main className="relative min-h-screen w-full bg-[#050505] text-white overflow-x-hidden pt-20">
      <CustomCursor />
      <NoiseBg />
      <Navbar />

      {/* Hero Header */}
      <section className="relative px-6 md:px-12 pt-14 pb-14 z-10 max-w-7xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-neutral-800 bg-neutral-950/80 text-xs font-mono tracking-widest text-neutral-400 uppercase">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          Engineering & Creative Capabilities
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase font-sans">
          FULL-CYCLE SERVICES & <br />
          <span className="bg-gradient-to-r from-amber-200 via-white to-cyan-300 bg-clip-text text-transparent">
            TECHNICAL ARCHITECTURES.
          </span>
        </h1>

        <p className="text-sm md:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          From headless Next.js platforms and autonomous AI agents to enterprise multi-tenant cloud software. Tailored digital craftsmanship engineered in Venice for ambitious global products.
        </p>

        {/* Search & Category Filter */}
        <div className="pt-6 max-w-4xl mx-auto space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by capability, tool (e.g. Next.js, Claude, Shopify)..."
              className="w-full pl-11 pr-4 py-3 text-xs font-mono rounded-xl border border-neutral-800 bg-neutral-950/80 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-700 transition-colors"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-white text-black font-bold shadow-lg"
                    : "bg-neutral-900/60 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid (All 9 Comprehensive Modules) */}
      <section className="relative px-6 md:px-12 pb-24 z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 items-stretch">
          {filteredServices.map((svc) => {
            const Icon = svc.icon;
            const isHovered = hoveredServiceId === svc.id;

            return (
              <div
                key={svc.id}
                id={svc.id}
                data-cursor-text="EXPLORE"
                onMouseEnter={() => setHoveredServiceId(svc.id)}
                onMouseLeave={() => setHoveredServiceId(null)}
                onMouseMove={handleMouseMove}
                onClick={() => setModalService(svc)}
                className={`group relative rounded-3xl p-7 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-500 ease-in-out scroll-mt-28 ${
                  svc.bgClass
                } ${svc.borderClass} ${
                  isHovered
                    ? "z-20 scale-[1.02] shadow-[0_25px_60px_rgba(0,0,0,0.95)] ring-2 ring-amber-400/50"
                    : "z-10"
                }`}
              >
                {/* Border Spotlight Radial Effect */}
                <div
                  className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none z-0"
                  style={{
                    backgroundImage: `radial-gradient(350px circle at var(--mouse-x, -400px) var(--mouse-y, -400px), ${svc.spotlightColor}, transparent 80%)`,
                  }}
                />

                <div className="space-y-6 relative z-10">
                  {/* Top Header */}
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-md ${svc.iconBgClass}`}
                    >
                      <Icon className={`w-6 h-6 ${svc.iconColorClass}`} />
                    </div>
                    <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase border border-neutral-800 bg-black/40 px-2.5 py-1 rounded-full">
                      {svc.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-amber-200 transition-colors">
                      {svc.name}
                    </h3>
                    <p className="text-[11px] font-mono text-neutral-400 mt-1">
                      {svc.tagline}
                    </p>
                    <p className="text-xs text-neutral-400 mt-3 leading-relaxed font-normal">
                      {svc.description}
                    </p>
                  </div>

                  {/* Subservices List */}
                  <div className="pt-4 border-t border-neutral-800/80 space-y-2.5">
                    {svc.subServices.slice(0, 3).map((sub) => (
                      <div key={sub.title} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-white">{sub.title}</span>
                          <p className="text-[10px] text-neutral-400 leading-tight">{sub.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {svc.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-neutral-400"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 relative z-10 mt-auto">
                  <div className="w-full py-3 px-4 rounded-xl border border-neutral-800 bg-neutral-900/60 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 flex items-center justify-between font-mono text-xs uppercase tracking-wider font-semibold">
                    <span>Explore Specifications</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Engineering Workflow & Methodology */}
      <section className="relative px-6 md:px-12 py-20 z-10 max-w-6xl mx-auto border-t border-neutral-900">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-300">
            HOW WE BUILD
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
            OUR 4-STAGE DELIVERY PROCESS
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            From technical intake to global edge launch, each sprint is engineered for rapid iteration and zero downtime.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950/60 backdrop-blur-md flex flex-col justify-between space-y-4 relative group hover:border-neutral-700 transition-colors"
            >
              <div className="flex justify-between items-start">
                <span className="text-2xl font-black font-mono text-white/20 group-hover:text-amber-300/40 transition-colors">
                  {step.number}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400">
                  {step.time}
                </span>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white tracking-tight">{step.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="relative px-6 md:px-12 py-24 z-10 max-w-5xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900/60 to-neutral-950/80 backdrop-blur-xl relative overflow-hidden space-y-6">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/5 blur-[100px] pointer-events-none" />

          <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
            READY TO ARCHITECT YOUR PROJECT?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Discuss your requirements with our lead engineers. We provide an initial technical audit and fixed proposal within 48 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/#contact"
              data-cursor-text="CONTACT"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-black hover:bg-neutral-200 font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-xl hover:scale-105"
            >
              <span>Initiate Discovery Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              data-cursor-text="PRICING"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-wider font-bold transition-all"
            >
              <span>Explore Pricing Packages</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Detail Specifications Modal */}
      <Modal
        isOpen={modalService !== null}
        onClose={() => setModalService(null)}
        title={modalService?.name}
        subtitle={modalService?.tagline}
      >
        {modalService && (
          <div className="space-y-6">
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              {modalService.description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-amber-300">
                Core Deliverables & Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {modalService.subServices.map((sub) => (
                  <div
                    key={sub.title}
                    className="p-3.5 rounded-xl border border-neutral-900 bg-neutral-950/60 flex flex-col justify-between"
                  >
                    <span className="text-xs font-bold text-white mb-1">{sub.title}</span>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">{sub.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                Tech Stack & Integrations
              </h4>
              <div className="flex flex-wrap gap-2">
                {modalService.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-900 flex flex-col sm:flex-row gap-3">
              <Link
                href="/#contact"
                onClick={() => setModalService(null)}
                className="flex-1 py-3.5 px-4 bg-white text-black hover:bg-neutral-200 text-center rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition-colors"
              >
                Inquire About This Service
              </Link>
              <button
                onClick={() => setModalService(null)}
                className="py-3.5 px-5 border border-neutral-800 hover:bg-neutral-900 text-white rounded-xl font-mono text-xs uppercase tracking-wider transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </main>
  );
}
