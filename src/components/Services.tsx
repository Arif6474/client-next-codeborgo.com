"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Sparkles,
  Search,
  Laptop,
  Bot,
  Share2,
  Zap,
  LineChart,
  FileText,
  Palette,
  Layout,
  CheckCircle,
} from "lucide-react";
import Modal from "./ui/Modal";

// Reusable Service Details Type
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

// Map the original service details
const serviceDetailsData: Record<string, ServiceDetail> = {
  "digital-marketing": {
    id: "digital-marketing",
    title: "Digital Marketing & SEO Excellence",
    tagline: "Boost Your Online Visibility",
    description: "Our comprehensive digital marketing services are designed to increase visibility, engagement, and conversion. We combine strategic planning with tactical execution to deliver measurable results that impact your bottom line.",
    subServices: [
      {
        title: "SEO Optimization",
        desc: "Technical and content SEO strategies to rank higher on search engines and capture organic traffic. We optimize on-page and off-page factors.",
      },
      {
        title: "Paid Advertising",
        desc: "Strategic Google Ads, LinkedIn Ads, Facebook Ads, and other PPC campaigns with optimized ROI. We continuously test and refine.",
      },
      {
        title: "Analytics & Reporting",
        desc: "Real-time tracking and monthly reports to measure campaign performance. We provide actionable insights for continuous improvement.",
      },
      {
        title: "Content Strategy",
        desc: "Engaging content creation for blogs, whitepapers, case studies, and more that establish thought leadership and drive conversion.",
      },
    ],
    ctaText: "Ready to grow your business? Let's discuss how our digital marketing strategies can help you reach your goals.",
  },
  "web-development": {
    id: "web-development",
    title: "Web Development & Design",
    tagline: "Beautiful, High-Performance Websites",
    description: "We create stunning, high-performance websites and web applications that convert visitors into customers. Every project is a blend of technical excellence and thoughtful design that reflects your brand's values.",
    subServices: [
      {
        title: "UI/UX Design",
        desc: "User-centered design that prioritizes usability, accessibility, and aesthetic excellence. We create intuitive interfaces that users love.",
      },
      {
        title: "Frontend Development",
        desc: "React, Next.js, and vanilla JavaScript with modern CSS animations and responsive layouts. We build interactive user experiences.",
      },
      {
        title: "Backend Development",
        desc: "Robust server-side solutions using Node.js, databases, and modern APIs. We build scalable, reliable systems that grow with your business.",
      },
      {
        title: "Performance & Security",
        desc: "Fast-loading sites with optimized images, code splitting, lazy loading, SSL encryption, and security best practices built in.",
      },
    ],
    ctaText: "Let's build something amazing. Contact us to discuss your web development project.",
  },
  "ai-services": {
    id: "ai-services",
    title: "AI Bot & Agent Services",
    tagline: "Intelligent Automation Powered by AI",
    description: "Leverage artificial intelligence to automate processes, improve customer experience, and gain competitive advantages. Our AI solutions are secure, scalable, and tailored to your specific business needs.",
    subServices: [
      {
        title: "AI Chatbots",
        desc: "Intelligent chatbots for 24/7 customer support, lead qualification, and instant response. Powered by advanced language models.",
      },
      {
        title: "AI Agents",
        desc: "Autonomous agents that handle complex workflows, automate repetitive tasks, and improve operational efficiency. Reduce costs.",
      },
      {
        title: "Machine Learning",
        desc: "Custom machine learning models for predictive analytics, customer behavior analysis, and data-driven insights. Turn data into value.",
      },
      {
        title: "LLM Integration",
        desc: "Custom integrations with GPT, Claude, and other large language models for your applications. Build AI-powered features.",
      },
    ],
    ctaText: "Transform your business with AI. Explore how our AI solutions can revolutionize your operations.",
  },
  "social-media": {
    id: "social-media",
    title: "Social Media Management",
    tagline: "Build Community & Amplify Your Brand",
    description: "We create and manage social media strategies that build authentic connections with your audience, increase engagement, and drive business growth across all major platforms.",
    subServices: [
      {
        title: "Content Creation",
        desc: "Professional photography, videography, and graphic design for compelling social posts. High-quality visual content that stands out.",
      },
      {
        title: "Strategic Planning",
        desc: "Content calendars aligned with your business goals and audience preferences. We plan, schedule, and optimize every post.",
      },
      {
        title: "Community Management",
        desc: "Active engagement, moderation, and responsive communication with your growing community. Build authentic relationships.",
      },
      {
        title: "Analytics & Insights",
        desc: "In-depth performance metrics and insights to guide strategy optimization. Understand what works and continuously improve.",
      },
    ],
    ctaText: "Ready to grow your social presence? Let's create a social media strategy that drives real results.",
  },
  "quick-services": {
    id: "quick-services",
    title: "Quick & Affordable Services",
    tagline: "Fast Solutions for Small Budgets",
    description: "Need affordable digital solutions? We offer quick, high-quality services perfect for startups, small businesses, and solopreneurs. Fast turnaround, professional results.",
    subServices: [
      {
        title: "Social Media Posts",
        desc: "Professional graphic design and copywriting for Instagram, Facebook, or LinkedIn. Turn your ideas into engaging posts.",
        price: "€50 - €150",
      },
      {
        title: "Website Copy",
        desc: "Compelling, SEO-friendly website text that converts visitors to customers. Clear, professional messaging for your business.",
        price: "€100 - €250",
      },
      {
        title: "Website Updates",
        desc: "Add sections, update images, fix links, or modify content on your existing website. Quick fixes that make a difference.",
        price: "€75 - €200",
      },
      {
        title: "Google Analytics Setup",
        desc: "Install and configure Google Analytics 4 on your website. Start tracking visitors and understanding your audience.",
        price: "€100",
      },
      {
        title: "Email Newsletter Setup",
        desc: "Set up professional email newsletter templates. Start building your email list and engage customers regularly.",
        price: "€150",
      },
    ],
    ctaText: "All services include: Professional quality, fast turnaround, free revisions, expert advice. Perfect for getting started or quick additions.",
  },
  "seo-audit": {
    id: "seo-audit",
    title: "SEO Audit & Consultation",
    tagline: "Understand Your Website Performance",
    description: "Get professional insights into why your website isn't ranking. We analyze your site and provide a clear roadmap to improve your search engine visibility.",
    subServices: [
      {
        title: "Technical Analysis",
        desc: "Check site speed, mobile responsiveness, SSL security, meta tags, and indexability issues. Full technical review.",
        price: "€150",
      },
      {
        title: "Keyword Research",
        desc: "Find the search terms your customers are actually using. Discover untapped search volume and content opportunities.",
        price: "€200",
      },
      {
        title: "Competitor Analysis",
        desc: "See what your competitors are ranking for and how. Identify content gaps and link opportunities to outrank them.",
        price: "€180",
      },
      {
        title: "30-Min Consultation",
        desc: "Direct call with SEO expert. Get answers to your questions and a personalized SEO improvements checklist.",
        price: "€75",
      },
    ],
    ctaText: "Get your audit today and start ranking higher in Google! Basic Audit packages start at €150, Full Deep Analysis at €400.",
  },
  "content-creation": {
    id: "content-creation",
    title: "Professional Content Creation",
    tagline: "Engaging Content That Drives Results",
    description: "Quality content is the foundation of digital marketing. We create compelling, SEO-optimized content that attracts, engages, and converts your audience.",
    subServices: [
      {
        title: "Blog Posts",
        desc: "SEO-optimized articles (500-2000 words) that rank in Google and provide value. Improve your domain authority and organic traffic.",
        price: "€100 - €300",
      },
      {
        title: "Social Media Graphics",
        desc: "Engaging posts with eye-catching designs tailored for Instagram, Facebook, and LinkedIn. Increase likes, shares, and followers.",
        price: "€50 - €150",
      },
      {
        title: "Email Newsletters",
        desc: "Professional campaigns that build relationships with subscribers. Keep customers engaged and coming back for recurring sales.",
        price: "€100 - €200",
      },
      {
        title: "Website Copywriting",
        desc: "Compelling, conversion-focused copywriting for homepages, landing pages, about pages, and product sheets.",
        price: "€150 - €400",
      },
    ],
    ctaText: "Monthly content retainer packages are available starting at €500/month. Let's discuss what works best for your production velocity.",
  },
  branding: {
    id: "branding",
    title: "Logo & Branding Design",
    tagline: "Professional Brand Identity",
    description: "Your logo and brand identity are the first impression customers have. We create memorable, professional designs that represent your business perfectly and scale across print and digital media.",
    subServices: [
      {
        title: "Logo Design",
        desc: "Professional logo assets in all formats. Includes 3-5 concept options and unlimited revisions until perfect.",
        price: "€300 - €600",
      },
      {
        title: "Color Palette & Typography",
        desc: "Professional color schemes and typeface pairings. Sets the voice and style guidelines for your brand personality.",
        price: "€100 - €200",
      },
      {
        title: "Brand Guidelines Document",
        desc: "Clear guidelines on logo placement, margins, fonts, and styling to maintain consistent brand representation across all media.",
        price: "€200 - €400",
      },
      {
        title: "Complete Branding Identity Suite",
        desc: "Full package: Logo system, palette, typeface selections, guidelines, business cards, letterheads, and social profile design assets.",
        price: "€800 - €1500",
      },
    ],
    ctaText: "All design packages deliver vectors, raster PNGs, and clear guidelines ready to launch your brand globally.",
  },
  "landing-page": {
    id: "landing-page",
    title: "Landing Page Design",
    tagline: "High-Converting Single-Page Websites",
    description: "A landing page is a focused, single-purpose website designed to drive user conversions. Perfect for launching products, capturing leads, running paid ad campaigns, or testing ideas.",
    subServices: [
      {
        title: "Professional Conversion Design",
        desc: "Beautiful, high-end layouts optimized for conversion. Clean hero sections, clear typography, intuitive user flows.",
        price: "€600",
      },
      {
        title: "Fully Responsive Layouts",
        desc: "Mobile-first designs engineered to load instantly. Fully compatible with all major modern web browsers.",
        price: "€600",
      },
      {
        title: "Lead Capture Integration",
        desc: "Form handlers, newsletter signups, API connections, and CRM integrations to collect customer contacts instantly.",
        price: "€750",
      },
      {
        title: "SEO Foundation setup",
        desc: "Proper header markup, page meta details, speed optimization, and responsive configurations for indexing.",
        price: "€750",
      },
    ],
    ctaText: "Basic Landing Pages start at €600, while Full-Featured Campaign pages with integrations start at €1,200.",
  },
};

const servicesList = [
  { id: "digital-marketing", name: "Digital Marketing", price: "Custom", icon: LineChart, desc: "Strategic SEO, PPC ads, and campaign planning to drive qualified organic conversions." },
  { id: "web-development", name: "Web Development", price: "Custom", icon: Laptop, desc: "Bespoke high-performance websites and Next.js applications engineered with speed." },
  { id: "ai-services", name: "AI Bot & Agent", price: "Custom", icon: Bot, desc: "Autonomous AI agents and ticketing bots trained on your data to handle support." },
  { id: "social-media", name: "Social Media", price: "Custom", icon: Share2, desc: "Amplifying your brand voice through tactical growth strategies and visual calendars." },
  { id: "quick-services", name: "Quick Services", price: "From €50", icon: Zap, desc: "Fast, high-quality digital fixes, social banners, and small edits for rapid setups." },
  { id: "seo-audit", name: "SEO Audit & Consult", price: "From €150", icon: Search, desc: "Deep technical site audits and keyword research roadmaps to capture Google traffic." },
  { id: "content-creation", name: "Content Creation", price: "From €100", icon: FileText, desc: "SEO blog writing, professional newsletters, and conversion-focused copy assets." },
  { id: "branding", name: "Logo & Branding", price: "From €300", icon: Palette, desc: "Logo vector marks, typography pairings, and unified brand guidelines systems." },
  { id: "landing-page", name: "Landing Pages", price: "From €600", icon: Layout, desc: "Conversion-optimized single-page sites built to convert marketing clicks." },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 },
    },
  };

  const handleOpenDetail = (id: string) => {
    setSelectedService(serviceDetailsData[id] || null);
  };

  const handleCloseDetail = () => {
    setSelectedService(null);
  };

  return (
    <section
      id="services"
      className="scroll-section px-6 md:px-12 py-24 z-10 w-full overflow-hidden border-t border-neutral-950 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-between my-auto">
        {/* Header */}
        <div className="text-left max-w-xl space-y-4 mb-14">
          <p className="text-[10px] tracking-[0.2em] font-mono text-neutral-500 uppercase flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            WHAT WE DELIVER
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Our <span className="font-light text-neutral-400 text-glow">Services.</span>
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Tailored digital craftsmanship. Select a category below to explore details, deliverables, and package rates.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {servicesList.map((svc) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.id}
                variants={itemVariants}
                onClick={() => handleOpenDetail(svc.id)}
                className="group p-6 rounded-2xl border border-neutral-900 bg-neutral-950/20 hover:bg-neutral-950/60 hover:border-neutral-800 transition-all duration-300 flex flex-col text-left cursor-pointer glow-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2.5 rounded-lg border border-neutral-900 bg-neutral-950/40 text-neutral-500 group-hover:text-white group-hover:border-neutral-800 transition-all duration-300">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 group-hover:text-neutral-300 transition-colors uppercase">
                    {svc.price}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white tracking-tight mb-2 flex items-center gap-1.5 group-hover:text-glow">
                  {svc.name}
                  <span className="text-neutral-600 group-hover:text-white group-hover:translate-x-0.5 transition-all text-xs">
                    →
                  </span>
                </h3>
                <p className="text-xs text-neutral-500 leading-normal line-clamp-2">
                  {svc.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Reusable Detail Modal */}
      <Modal
        isOpen={selectedService !== null}
        onClose={handleCloseDetail}
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
                        <CheckCircle className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
                        <h5 className="text-xs font-bold tracking-tight">{sub.title}</h5>
                      </div>
                      <p className="text-[11px] text-neutral-500 leading-relaxed">
                        {sub.desc}
                      </p>
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
                  handleCloseDetail();
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="mt-4 px-5 py-2.5 bg-white text-[#050505] hover:bg-neutral-200 transition-colors text-xs font-semibold uppercase tracking-wider rounded-lg shadow-md"
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
