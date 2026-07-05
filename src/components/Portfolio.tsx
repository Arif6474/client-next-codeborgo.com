"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Sparkles, BarChart, ShoppingCart, MessageSquare, Heart, LayoutGrid, Utensils, CheckCircle } from "lucide-react";
import Modal from "./ui/Modal";

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
}

const portfolioList: PortfolioItem[] = [
  {
    id: "luxury-fashion",
    tag: "Digital Marketing",
    title: "Luxury Fashion Brand",
    description: "Complete digital marketing overhaul for an Italian luxury brand. Increased organic search engine traffic by 250% in 6 months.",
    icon: Heart,
    metrics: [
      { value: "+250%", label: "Traffic Growth" },
      { value: "3.2x", label: "ROI Increase" },
    ],
  },
  {
    id: "ecommerce",
    tag: "Web Development",
    title: "E-Commerce Platform",
    description: "Full-stack ecommerce platform for premium Italian artisan products. Integrated Stripe checkout, caching, and CDN.",
    icon: ShoppingCart,
    metrics: [
      { value: "98/100", label: "PageSpeed Score" },
      { value: "1.2M", label: "Users / Month" },
    ],
  },
  {
    id: "chatbot",
    tag: "AI Services",
    title: "Smart Customer Bot",
    description: "AI support agent built using Claude API for 24/7 client care. Automatically answers 80% of customer questions.",
    icon: MessageSquare,
    metrics: [
      { value: "-60%", label: "Support Cost" },
      { value: "4.8/5", label: "Client Rating" },
    ],
  },
  {
    id: "beauty-campaign",
    tag: "Social Media",
    title: "Beauty Brand Campaign",
    description: "Multi-platform growth campaign across Instagram, TikTok, and LinkedIn. Raised follower counts from 10K to 150K.",
    icon: Sparkles,
    metrics: [
      { value: "15x", label: "Follower Growth" },
      { value: "8.5%", label: "Engagement Rate" },
    ],
  },
  {
    id: "saas-dashboard",
    tag: "Web Development",
    title: "SaaS Dashboard",
    description: "Complex real-time time-series analytics dashboard. Serves active corporate clients with sub-200ms query latency.",
    icon: LayoutGrid,
    metrics: [
      { value: "99.9%", label: "Uptime SLA" },
      { value: "50K+", label: "Active Users" },
    ],
  },
  {
    id: "restaurant",
    tag: "Full Service",
    title: "Restaurant Brand Launch",
    description: "Complete localized Venice branding, food video, and local search optimization campaign. Tripled reservation velocity.",
    icon: Utensils,
    metrics: [
      { value: "3x", label: "Reservations" },
      { value: "92%", label: "Rating Score" },
    ],
  },
];

const portfolioDetailsData: Record<string, PortfolioDetail> = {
  "luxury-fashion": {
    id: "luxury-fashion",
    tag: "Digital Marketing",
    title: "Luxury Fashion Brand - Digital Transformation",
    overview: "Complete digital marketing overhaul for an Italian luxury fashion house targeting international markets. The client needed to establish digital authority and scale premium ecommerce conversions.",
    strategyHeading: "Strategy & Tactical Execution",
    strategyItems: [
      "Technical SEO audit and optimization targeting luxury fashion terms.",
      "High-end copy creation focusing on heritage and craftsmanship.",
      "Structured Google Ads and Instagram visual campaigns.",
      "Domain authority building via references in design journals.",
      "Segmented newsletter campaigns targeting high net-worth lists.",
    ],
    results: [
      { value: "+250%", label: "Organic traffic growth" },
      { value: "3.2x", label: "Campaign ROI increase" },
      { value: "€450K+", label: "Incremental sales generated" },
      { value: "6 Months", label: "Project timeline" },
    ],
  },
  ecommerce: {
    id: "ecommerce",
    tag: "Web Development",
    title: "Premium E-Commerce Platform",
    overview: "Full-stack e-commerce platform for premium Italian artisan products. Engineered with modular React logic and serverless database integration to handle heavy checkouts with minimal delay.",
    strategyHeading: "Technical Deliverables",
    techStack: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Stripe", "Vercel Edge"],
    features: [
      "Sub-second faceted product search and filter routing.",
      "Smooth hardware-accelerated product slide displays.",
      "Safe, PCI-compliant Stripe API billing structures.",
      "Live order inventory checks.",
      "Bespoke buyer dashboard tracking shipments.",
    ],
    strategyItems: [
      "Optimized load times with Next.js dynamic static generation.",
      "Secured safe global transactions via direct Stripe API hooks.",
      "Configured multi-layered edge caching on Vercel's global CDN.",
    ],
    results: [
      { value: "98/100", label: "Google PageSpeed score" },
      { value: "1.2M", label: "Monthly unique buyers" },
      { value: "99.99%", label: "Platform uptime rate" },
      { value: "€2.3M", label: "Annual transactions volume" },
    ],
  },
  chatbot: {
    id: "chatbot",
    tag: "AI Services",
    title: "AI-Powered Customer Support Agent",
    overview: "Designed and engineered an automated chatbot using Claude API for 24/7 client operations. The bot processes structured help queues, freeing up staff and raising customer feedback scores.",
    strategyHeading: "Core System Capabilities",
    features: [
      "Direct answers on shipping schedules, returns, and inventory.",
      "Real-time courier updates via API link.",
      "Safe hand-off path to staff with clean logs.",
      "Multi-lingual supports (Italian, English, German, French).",
      "Unified metrics dashboard showing client satisfaction.",
    ],
    strategyItems: [
      "Interfacing Claude LLM with vector database trained on support scripts.",
      "Integrating ticketing webhooks for live profile updates.",
      "Automating human agent handover protocols for edge cases.",
    ],
    results: [
      { value: "60%", label: "Customer support cost saved" },
      { value: "4.8/5", label: "Satisfaction reviews rating" },
      { value: "80%", label: "Tickets solved autonomously" },
      { value: "< 2 min", label: "Average response time" },
    ],
  },
  "beauty-campaign": {
    id: "beauty-campaign",
    tag: "Social Media",
    title: "Beauty Brand Growth Campaign",
    overview: "Unified visual content design and distribution campaign for a beauty brand across Instagram, TikTok, and LinkedIn. Raised engagement metrics and drove social store referrals.",
    strategyHeading: "Social Strategies",
    strategyItems: [
      "High-contrast product animations tailored for TikTok reels.",
      "Micro-influencer PR mailings and content amplification.",
      "Prompt response structures raising profile weights.",
      "Faceted educational copy describing clean skin values.",
      "Weekly analytics review mapping content performance.",
    ],
    results: [
      { value: "15x", label: "Audience follower scale" },
      { value: "8.5%", label: "Average engagement rate" },
      { value: "150K", label: "Total active audience" },
      { value: "€850K", label: "Direct referral transactions" },
    ],
  },
  "saas-dashboard": {
    id: "saas-dashboard",
    tag: "Web Development",
    title: "Enterprise Analytics SaaS Dashboard",
    overview: "A complex analytics dashboard visualizing heavy time-series client datasets. Renders high-frequency query updates with responsive rendering speeds.",
    strategyHeading: "Software Architecture",
    techStack: ["React", "TypeScript", "D3.js Visualization", "Node.js (Express)", "PostgreSQL (TimescaleDB)", "Redis Cache", "AWS Serverless"],
    features: [
      "Streaming WebSockets delivering data feeds.",
      "Export utilities for CSV, PDF, and JSON datasets.",
      "Faceted interactive drilldown views.",
      "Unified tenant-level user permission rules (RBAC).",
      "Custom scheduled metric report mailers.",
    ],
    strategyItems: [
      "Optimized query speeds utilizing TimescaleDB database partitioning.",
      "Configured high-speed memory buffers using Redis caches.",
      "Engineered hardware-accelerated grid lines with custom D3 logic.",
    ],
    results: [
      { value: "99.9%", label: "Corporate SLA uptime" },
      { value: "50K+", label: "Active dashboards" },
      { value: "200ms", label: "Average query response" },
      { value: "1B+", label: "Monthly data feeds tracked" },
    ],
  },
  restaurant: {
    id: "restaurant",
    tag: "Full Service",
    title: "Fine Dining Restaurant Venice Launch",
    overview: "Complete identity redesign, localization, and launch campaign for a fine dining spot in Mestre/Venice. Merged sensory offline photography with optimized local SEO listings.",
    strategyHeading: "Scope of Work",
    strategyItems: [
      "Bespoke visual identity suite (vector logo, typography, paper stocks).",
      "Stunning, responsive reservation web portal.",
      "High-end food visuals capturing seasonal Venice plates.",
      "Local SEO maps citation updates capturing tourist lookups.",
      "Targeted digital placements capturing dining leads.",
    ],
    results: [
      { value: "3x", label: "Reservation velocity" },
      { value: "92%", label: "Positive reviews score" },
      { value: "5K+", label: "Monthly web portal visits" },
      { value: "€200K+", label: "First year revenue increase" },
    ],
  },
};

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<PortfolioDetail | null>(null);

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

  const handleOpenProject = (id: string) => {
    setSelectedProject(portfolioDetailsData[id] || null);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="portfolio"
      className="scroll-section px-6 md:px-12 py-24 z-10 w-full overflow-hidden border-t border-neutral-950 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-between my-auto">
        {/* Header */}
        <div className="text-left max-w-xl space-y-4 mb-14">
          <p className="text-[10px] tracking-[0.2em] font-mono text-neutral-500 uppercase flex items-center gap-2">
            <BarChart className="w-3.5 h-3.5" />
            CASE STUDIES
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Featured <span className="font-light text-neutral-400 text-glow">Projects.</span>
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Real outcomes. Selected stories showing how we help brands scale online platforms and launch systems.
          </p>
        </div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioList.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onClick={() => handleOpenProject(project.id)}
                className="group rounded-2xl border border-neutral-900 bg-neutral-950/20 hover:bg-neutral-950/60 hover:border-neutral-800 transition-all duration-300 flex flex-col text-left overflow-hidden cursor-pointer glow-sm"
              >
                {/* Visual Icon Header */}
                <div className="p-6 border-b border-neutral-900/60 bg-neutral-950/40 flex justify-between items-center">
                  <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase">
                    {project.tag}
                  </span>
                  <div className="p-1.5 rounded-lg border border-neutral-900 bg-neutral-950 text-neutral-500 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-white tracking-tight mb-2 group-hover:text-glow">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-normal line-clamp-3 mb-6">
                    {project.description}
                  </p>

                  {/* Metrics Row */}
                  <div className="mt-auto pt-4 border-t border-neutral-900/60 grid grid-cols-2 gap-4">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-left">
                        <span className="text-sm font-bold text-white tracking-tight">
                          {metric.value}
                        </span>
                        <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Case Study Detail Modal */}
      <Modal
        isOpen={selectedProject !== null}
        onClose={handleCloseProject}
        title={selectedProject?.title}
        subtitle={selectedProject?.tag}
      >
        {selectedProject && (
          <div className="space-y-6">
            <p className="text-sm text-neutral-400 leading-relaxed">
              {selectedProject.overview}
            </p>

            {/* Strategy Items */}
            <div className="border-t border-neutral-900 pt-5">
              <h4 className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase mb-3 text-left">
                {selectedProject.strategyHeading}
              </h4>
              <ul className="space-y-2">
                {selectedProject.strategyItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-400 text-left">
                    <CheckCircle className="w-3.5 h-3.5 text-neutral-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack (if available) */}
            {selectedProject.techStack && (
              <div className="border-t border-neutral-900 pt-5 text-left">
                <h4 className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase mb-3">
                  TECHNOLOGY STACK
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-[10px] font-mono rounded bg-neutral-900 border border-neutral-800 text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features (if available) */}
            {selectedProject.features && (
              <div className="border-t border-neutral-900 pt-5 text-left">
                <h4 className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase mb-3">
                  SYSTEM CAPABILITIES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-400">
                      <span className="w-1 h-1 rounded-full bg-neutral-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results Grid */}
            <div className="border-t border-neutral-900 pt-5 text-left">
              <h4 className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase mb-4">
                RESULTS DELIVERED
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {selectedProject.results.map((res, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-neutral-900 bg-neutral-950/40"
                  >
                    <div className="text-base font-bold text-white tracking-tight">
                      {res.value}
                    </div>
                    <div className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider mt-0.5 leading-normal">
                      {res.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-neutral-900 pt-5 text-left flex justify-end">
              <button
                onClick={handleCloseProject}
                className="px-5 py-2.5 border border-neutral-850 hover:bg-neutral-900 transition-colors text-xs font-semibold uppercase tracking-wider rounded-lg text-white"
              >
                Close Project Case
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
