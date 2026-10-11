export interface TranslationSchema {
  nav: {
    logoTagline: string;
    home: string;
    about: string;
    services: string;
    portfolio: string;
    pricing: string;
    contact: string;
    letsTalk: string;
    coreCapabilitiesTitle: string;
    exploreCapabilities: string;
    capabilities: {
      webDev: { title: string; pricing: string; description: string };
      aiDev: { title: string; pricing: string; description: string };
      socialMedia: { title: string; pricing: string; description: string };
      perfMarketing: { title: string; pricing: string; description: string };
    };
  };
  hero: {
    badge: string;
    titleLine1: string;
    rotatingServices: string[];
    subtitle: string;
    ctaConsultation: string;
    ctaServices: string;
    ourProjects: string;
  };
  about: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    p1: string;
    p2: string;
    p3: string;
    stats: {
      seniorBuilt: string;
      responseTime: string;
      targetPageSpeed: string;
      veniceEuBased: string;
    };
    values: {
      precision: { title: string; desc: string };
      aesthetic: { title: string; desc: string };
      growth: { title: string; desc: string };
      cognitive: { title: string; desc: string };
    };
  };
  services: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    allCapabilitiesBtn: string;
    categories: {
      all: string;
      webApps: string;
      aiSystems: string;
      cloudSaas: string;
      growthStrategy: string;
    };
    items: Record<
      string,
      {
        title: string;
        tagline: string;
        description: string;
        subServices: { title: string; desc: string }[];
        ctaText: string;
      }
    >;
  };
  howWeWork: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    steps: {
      num: string;
      title: string;
      shortDesc: string;
      desc: string;
      details: string[];
    }[];
  };
  features: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    items: {
      perf: { title: string; desc: string };
      aesthetic: { title: string; desc: string };
      ai: { title: string; desc: string };
      security: { title: string; desc: string };
      speed: { title: string; desc: string };
      sla: { title: string; desc: string };
    };
  };
  portfolio: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    viewAllBtn: string;
    visitLive: string;
    conceptBuild: string;
    searchPlaceholder: string;
    allCategories: string;
    pageTitleLine1: string;
    pageTitleLine2: string;
    pageSubtitle: string;
    projectDescriptions: Record<string, string>;
  };
  pricing: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    fixedScopeNotice: string;
    recommendedBadge: string;
    customQuoteBadge: string;
    customQuoteDesc: string;
    bookConsultationBtn: string;
    contactUsBtn: string;
    packages: {
      studio: {
        badge: string;
        name: string;
        desc: string;
        features: string[];
      };
      venezia: {
        badge: string;
        name: string;
        desc: string;
        features: string[];
      };
      enterprise: {
        badge: string;
        name: string;
        desc: string;
        features: string[];
      };
    };
    pageHeroTitleLine1: string;
    pageHeroTitleLine2: string;
    pageHeroSubtitle: string;
  };
  testimonials: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    quotes: {
      santoro: string;
      hypecart: string;
      dataview: string;
      rialto: string;
      vento: string;
      apex: string;
      alpine: string;
      flora: string;
    };
  };
  faq: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
  cta: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    button: string;
  };
  contact: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    locationLabel: string;
    locationValue: string;
    emailLabel: string;
    phoneLabel: string;
    hoursLabel: string;
    hoursValue: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      company: string;
      companyPlaceholder: string;
      service: string;
      servicePlaceholder: string;
      serviceOptions: { value: string; label: string }[];
      message: string;
      messagePlaceholder: string;
      consent: string;
      submitBtn: string;
      sendingBtn: string;
      successTitle: string;
      successDesc: string;
      sendAnotherBtn: string;
      errors: {
        nameReq: string;
        emailReq: string;
        emailValid: string;
        serviceReq: string;
        messageReq: string;
        consentReq: string;
        unexpected: string;
      };
    };
  };
  footer: {
    vat: string;
    privacy: string;
    cookie: string;
    terms: string;
    backToTop: string;
    allRightsReserved: string;
  };
  cookieBanner: {
    title: string;
    desc: string;
    policyLink: string;
    reject: string;
    accept: string;
  };
}

export const translations: Record<"en" | "it", TranslationSchema> = {
  en: {
    nav: {
      logoTagline: "Venezia / ITALY",
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      pricing: "Pricing",
      contact: "Contact",
      letsTalk: "Let's Talk",
      coreCapabilitiesTitle: "Four Core Capabilities",
      exploreCapabilities: "Explore All Capabilities",
      capabilities: {
        webDev: {
          title: "Web / App Development",
          pricing: "One-off projects starting at €1,000+",
          description: "High-performance Next.js websites, custom web apps & UI craftsmanship.",
        },
        aiDev: {
          title: "AI Agent Development",
          pricing: "One-off projects starting at €1,000+",
          description: "Autonomous AI agents, custom LLM integrations & workflow automation.",
        },
        socialMedia: {
          title: "Social Media Content",
          pricing: "Monthly retainer starting at €1,000+",
          description: "High-converting brand media, content creation & community growth.",
        },
        perfMarketing: {
          title: "Performance Marketing",
          pricing: "Monthly retainer starting at €1,000+",
          description: "SEO optimization, targeted paid advertising & ROI tracking.",
        },
      },
    },
    hero: {
      badge: "Now accepting new projects for Q3 2026",
      titleLine1: "Premium Digital Excellence",
      rotatingServices: [
        "Web Craftsmanship",
        "UI/UX Architecture",
        "Growth Systems",
        "Brand Strategy",
      ],
      subtitle:
        "We're a Venice-based studio building high-performance websites, custom AI agents, and marketing systems that actually move numbers. Founder-led, senior-only, and obsessive about detail — no outsourcing, no templates.",
      ctaConsultation: "Free Consultation",
      ctaServices: "Services",
      ourProjects: "Our Projects",
    },
    about: {
      badge: "Agency Philosophy",
      titleLine1: "Italian Design Meets",
      titleLine2: "Digital Engineering.",
      p1: "CodeBorgo is a studio built on an enduring idea: that digital products should be as functional as they are beautiful. We're based in Venezia, and we bring the same standard of craft to a landing page as a Venetian workshop brings to anything it makes.",
      p2: "We're small on purpose. That means you work directly with the people building your product — not an account manager and a queue. We don't ship generic templates; we design and engineer bespoke sites, stores, and automations around your actual business goals.",
      p3: "If you're an ambitious brand or an early-stage startup that wants a partner who cares about the details, that's exactly who we built this for.",
      stats: {
        seniorBuilt: "Senior-Built",
        responseTime: "Response Time",
        targetPageSpeed: "Target PageSpeed",
        veniceEuBased: "Venezia & EU-Based",
      },
      values: {
        precision: {
          title: "Precision Engineering",
          desc: "Pixel-perfect frontend code written with React, Next.js, and TypeScript. No bloat, pure speed.",
        },
        aesthetic: {
          title: "Aesthetic Integrity",
          desc: "Inspired by classical Italian design. High-contrast typography, generous spacing, and clean grids.",
        },
        growth: {
          title: "Measurable Growth",
          desc: "Marketing campaigns and product experiences built to achieve specific financial and traffic metrics.",
        },
        cognitive: {
          title: "Cognitive Systems",
          desc: "Production-grade custom AI models and automations that reduce support overhead by 60%.",
        },
      },
    },
    services: {
      badge: "Capabilities & Offerings",
      titleLine1: "ENGINEERED FOR",
      titleLine2: "MEASURABLE IMPACT.",
      subtitle:
        "We unite Italian artistic precision with state-of-the-art web architectures, autonomous AI workflows, and data-driven marketing systems.",
      allCapabilitiesBtn: "Explore All 9 Capabilities",
      categories: {
        all: "All Capabilities",
        webApps: "Web & Apps",
        aiSystems: "AI & Systems",
        cloudSaas: "Cloud & SaaS",
        growthStrategy: "Growth & Strategy",
      },
      items: {
        "digital-marketing": {
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
          title: "Web Development & Architecture",
          tagline: "Beautiful, High-Performance Websites",
          description:
            "We create stunning, high-performance websites and web applications that convert visitors into customers. Every project is a blend of technical excellence and thoughtful design.",
          subServices: [
            { title: "UI/UX Design", desc: "User-centered design that prioritizes usability, accessibility, and aesthetic excellence." },
            { title: "Frontend Development", desc: "React, Next.js, and modern JavaScript with responsive layouts and kinetic animations." },
            { title: "Backend Development", desc: "Robust server-side solutions using Node.js, databases, and modern APIs." },
            { title: "Performance & Security", desc: "Fast-loading sites with code splitting, lazy loading, SSL, and security best practices." },
          ],
          ctaText: "Let's build something amazing. Contact us to discuss your web development project.",
        },
        "ai-services": {
          title: "AI Bot & Autonomous Agents",
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
          title: "Social Media Management & Creative",
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
          title: "Product Strategy & Design Systems",
          tagline: "User-Centered Digital Experiences",
          description:
            "Deliver exceptional customer experiences with research-driven UI design, interactive kinetic micro-interactions, and scalable design token systems that evolve alongside your engineering team.",
          subServices: [
            { title: "User Journey Audits", desc: "Heatmapping, user drop-off analysis, and interactive heuristic evaluations to unblock friction." },
            { title: "Figma Component Libraries", desc: "Production-ready tokenized component systems adhering to WCAG 2.1 accessibility standards." },
            { title: "Interactive Prototyping", desc: "High-fidelity micro-interactions and animations designed for real-world user validation." },
            { title: "Design Systems Governance", desc: "Standardizing guidelines and cross-functional token sync between Figma and React/Next.js." },
          ],
          ctaText: "Elevate your design maturity. Partner with our team to engineer a world-class design system.",
        },
        "data-analytics": {
          title: "Data Analytics & Business Intelligence",
          tagline: "Data-Driven Insights for Confident Decisions",
          description:
            "Transform raw usage logs, transactional records, and user analytics into real-time visual dashboards and predictive intelligence that power decisive growth.",
          subServices: [
            { title: "Custom BI Dashboards", desc: "Real-time KPI visualization built with modern charting engines and customized data feeds." },
            { title: "Data Warehouse Pipelines", desc: "Automated ETL pipelines consolidating Stripe, Google Analytics, and database inputs into BigQuery or Snowflake." },
            { title: "Conversion Funnel Tracking", desc: "Granular event-driven tracking across every critical user acquisition and retention touchpoint." },
            { title: "Predictive Churn Models", desc: "Statistical algorithms that highlight customer retention opportunities before drop-offs occur." },
          ],
          ctaText: "Unlock the value in your metrics. Contact us to build your unified data architecture.",
        },
        "headless-ecommerce": {
          title: "Headless E-Commerce Architecture",
          tagline: "Ultra-Fast Online Storefronts That Convert",
          description:
            "Decouple your frontend customer experience from legacy backend platforms to deliver lightning-fast page transitions, infinite personalization, and higher checkout conversions.",
          subServices: [
            { title: "Shopify Hydrogen & Medusa", desc: "Next.js storefronts connected to headless Shopify, MedusaJS, or BigCommerce backends." },
            { title: "Stripe Custom Checkout", desc: "Custom PCI-compliant multi-currency checkout funnels with zero friction and Apple/Google Pay." },
            { title: "Omnichannel Inventory Sync", desc: "Real-time stock level synchronization across physical POS systems, marketplaces, and online shops." },
            { title: "Sub-Second Global Edge Caching", desc: "Pre-rendered static catalog pages distributed through worldwide CDN edge nodes." },
          ],
          ctaText: "Ready to scale your e-commerce revenue? Let's engineer a high-speed headless store.",
        },
      },
    },
    howWeWork: {
      badge: "Our Proven Process",
      titleLine1: "HOW WE SHIP",
      titleLine2: "HIGH-IMPACT WORK.",
      subtitle:
        "Every project follows a transparent, four-phase sprint cycle designed to eliminate friction, respect deadlines, and ensure unmatched build quality.",
      steps: [
        {
          num: "01",
          title: "Discovery & Alignment",
          shortDesc: "Milestone roadmap & scope spec",
          desc: "We schedule a deep-dive technical alignment call to outline your brand goals, system architecture, and target KPIs. We convert project constraints into a detailed milestone roadmap with a fixed-scope contract.",
          details: ["Requirements gathering", "Technical specification", "Fixed-scope quote & SLA"],
        },
        {
          num: "02",
          title: "UX & Figma Interface Design",
          shortDesc: "Responsive prototypes & design tokens",
          desc: "We build fully responsive UX wireframes and high-fidelity mockups inside Figma. You get to interact with responsive flow prototypes and refine visual spacing before any front-end code is written.",
          details: ["Visual identity design", "Interactive Figma prototype", "Motion behavior specs"],
        },
        {
          num: "03",
          title: "Full-Stack Development",
          shortDesc: "Next.js & TypeScript codebase",
          desc: "We compile your designs into clean, performance-optimized Next.js structures. You track development progress in real-time through a private Vercel staging deployment link with automated staging checks.",
          details: ["Next.js (App Router)", "TypeScript codebase", "Milestone staging preview URLs"],
        },
        {
          num: "04",
          title: "Testing, Launch & Support",
          shortDesc: "DNS routing & SLA support",
          desc: "We perform multi-device cross-browser testing, configure production DNS routing, and finalize search console maps indexing. We hand over code keys and provide an ongoing post-launch support package.",
          details: ["Domain & DNS routing", "Performance & SEO checks", "Ongoing support SLA"],
        },
      ],
    },
    features: {
      badge: "The CodeBorgo Standard",
      titleLine1: "ENGINEERED FOR",
      titleLine2: "PURE EXCELLENCE.",
      subtitle:
        "Every digital product is crafted to meet extreme performance standards, refined Italian aesthetics, and enterprise-grade reliability.",
      items: {
        perf: {
          title: "Ultra Performance",
          desc: "Server-side rendering, CDN edge caching, and optimized asset delivery yielding 98+ PageSpeed scores.",
        },
        aesthetic: {
          title: "Bespoke Aesthetics",
          desc: "Fully tailored user interfaces crafted from scratch. High typography hierarchy and premium spacing rules.",
        },
        ai: {
          title: "Advanced AI Bots",
          desc: "Chatbots and background workflows engineered with OpenAI/Claude APIs to automate 80% of customer support.",
        },
        security: {
          title: "Security By Design",
          desc: "Enterprise-grade SSL compliance, PCI-compliant Stripe billing, and serverless route isolation.",
        },
        speed: {
          title: "Swift Turnaround",
          desc: "Fast, predictable sprint delivery with clear milestones, staging links, and direct communication.",
        },
        sla: {
          title: "Guaranteed SLA Support",
          desc: "Dedicated post-launch warranty, ongoing uptime monitoring, and priority technical assistance.",
        },
      },
    },
    portfolio: {
      badge: "Editorial Case Studies",
      titleLine1: "FEATURED",
      titleLine2: "CASE STUDIES.",
      subtitle:
        "A curated selection of client platforms and engineering concept builds demonstrating our technical range across web, commerce, AI systems, and luxury brand digital architecture.",
      viewAllBtn: "View All Projects",
      visitLive: "Visit Live Project",
      conceptBuild: "Concept Demo / In Build",
      searchPlaceholder: "Search by title, tech stack (e.g. Next.js, Claude API)...",
      allCategories: "All",
      pageTitleLine1: "ALL PROJECTS &",
      pageTitleLine2: "CONCEPT BUILDS.",
      pageSubtitle:
        "Explore our complete archive of production platforms, customer bots, custom SaaS dashboards, and luxury e-commerce concepts built with Italian craft & Next.js architecture.",
      projectDescriptions: {
        "michela-cake-designer":
          "Bespoke luxury pastry and wedding cake design studio in Mira, Venice. Features artisanal gallery, custom cake consultation booking system, and mobile-first Italian confectionery showcase.",
        "one-beauty-studio":
          "High-end lash and beauty atelier in Mestre, Venice. Complete digital presence featuring treatment menu, direct WhatsApp booking integration, and luxury aesthetic branding.",
        "venice-mini-market":
          "Curated international grocery and convenience destination in the historic heart of Venice. Includes multilingual product navigation, tourist guide amenities, and Google Maps integration.",
        "serenissima-leather":
          "Headless luxury e-commerce with Next.js, MedusaJS, and Stripe. Sub-400ms page transitions and an editorial product catalog.",
        "aurora-ai-support":
          "Multi-tenant customer intelligence platform powered by Claude 3.5 Sonnet, with vector search and 75% deflection rate.",
        "chronos-timeseries":
          "Real-time industrial IoT monitoring dashboard built with Next.js, TimescaleDB, and WebSockets handling 10k events/sec.",
        "palazzo-san-marco":
          "Direct-booking platform with integrated channel manager, multi-currency Stripe checkout, and bespoke photography layout.",
        "finova-wealth":
          "Client portal with real-time portfolio tracking, PDF reporting generation, and bank-grade biometric authentication flow.",
        "lumina-design-system":
          "Comprehensive design system with 80+ accessible components, automated Figma token sync, and Storybook documentation.",
      },
    },
    pricing: {
      badge: "Transparent Investments",
      titleLine1: "PREDICTABLE",
      titleLine2: "INVESTMENT PLANS.",
      subtitle:
        "No hidden fees, no scope creep. Transparent pricing tailored for ambitious businesses seeking uncompromising quality.",
      fixedScopeNotice: "fixed scope",
      recommendedBadge: "★ Recommended Choice",
      customQuoteBadge: "Need a custom scope or ongoing retainer?",
      customQuoteDesc: "We tailor dedicated team retainers and custom multi-phase software contracts.",
      bookConsultationBtn: "Book Consultation",
      contactUsBtn: "Contact Us",
      packages: {
        studio: {
          badge: "ESSENTIAL MVP",
          name: "Studio MVP Launch",
          desc: "Complete aesthetic storefronts & custom web architectures.",
          features: [
            "Custom Next.js & React Frontend",
            "Figma Design & Wireframing",
            "SEO Infrastructure & Web Vitals Audit",
            "Full Mobile & Tablet Responsive",
            "30-Day Post-Launch Support SLA",
            "Full Source Code & IP Ownership",
          ],
        },
        venezia: {
          badge: "SCALE & GROWTH",
          name: "Venezia Signature",
          desc: "Bespoke digital architectures & custom AI agent automations.",
          features: [
            "Everything in Studio MVP",
            "Custom AI Agent & Chatbot Setup",
            "Interactive Animations & Kinetic Layouts",
            "Headless E-Commerce & CMS Setup",
            "CI/CD Pipeline & Cloud Deployment",
            "90-Day Post-Launch Support SLA",
            "Continuous Speed & Cache Optimization",
          ],
        },
        enterprise: {
          badge: "ENTERPRISE ECOSYSTEM",
          name: "Enterprise Architecture",
          desc: "Full digital engineering partner for ambitious global products.",
          features: [
            "Unlimited Multi-Tenant SaaS Codebase",
            "Custom LLM Fine-Tuning Workflows",
            "Advanced BI & Visual Dashboards",
            "Dedicated DevOps Cloud Infrastructure",
            "Regular Security & Vulnerability Audits",
            "12 Months Dedicated SLA Support",
          ],
        },
      },
      pageHeroTitleLine1: "TRANSPARENT PRICING &",
      pageHeroTitleLine2: "PROJECT TIERS.",
      pageHeroSubtitle:
        "Fixed-price quotes, senior-only engineering, and guaranteed post-launch SLA support. No hidden maintenance fees or surprise charges.",
    },
    testimonials: {
      badge: "Client Endorsements",
      titleLine1: "TRUSTED BY",
      titleLine2: "AMBITIOUS TEAMS.",
      subtitle:
        "Here's what founders, creative directors, and engineering leads say about building with CodeBorgo.",
      quotes: {
        santoro:
          "Migrated our Shopify to headless Next.js. Page loads are under 400ms globally and our conversion rate doubled in the first month.",
        hypecart:
          "Their Claude support bot handles 75% of our inquiries automatically. It saved our team 20+ support hours a week.",
        dataview:
          "Engineered a React and TimescaleDB analytics dashboard that handles thousands of queries with sub-200ms latency.",
        rialto:
          "They built our new reservation system, managed photography, and optimized local SEO. Bookings are up 40% YoY.",
        vento:
          "Delivered a gorgeous digital storefront that feels as luxury and editorial as our physical flagship store in Venice.",
        apex:
          "CodeBorgo shipped our marketing page in just 3 weeks with a perfect 100 PageSpeed score. Excellent automation.",
        alpine:
          "Their custom Stripe payment integrations are bulletproof. We processed over €150k in orders with zero dropouts.",
        flora:
          "Designed a stunning, unified brand identity across our website and social channels. Highly recommended.",
      },
    },
    faq: {
      badge: "✦   COMMON INQUIRIES",
      titleLine1: "Frequently",
      titleLine2: "Asked Questions.",
      subtitle: "Everything you need to know about working with CodeBorgo. Can't find an answer?",
      items: [
        {
          question: "What technologies does CodeBorgo specialize in?",
          answer:
            "We specialize in modern frontend and full-stack solutions. Our primary stack includes Next.js (App Router), React, TypeScript, Tailwind CSS, Node.js, and serverless databases like PostgreSQL. For AI implementations, we work directly with Anthropic Claude and OpenAI API integration vectors.",
        },
        {
          question: "How long does a typical custom website build take?",
          answer:
            "A standard landing page or basic website takes 1–2 weeks. Complete custom Next.js builds (such as our Starter package) typically require 3–4 weeks. Enterprise portals with custom dashboards or complex database operations run about 6–12 weeks.",
        },
        {
          question: "Can we pay in installments for larger projects?",
          answer:
            "Yes. For our Starter, Professional, and Enterprise packages, we structure payments in stages — commonly a 50% kick-off deposit, 25% on mid-development review, and the remaining 25% upon final build authorization and launch.",
        },
        {
          question: "What does your post-launch SLA support cover?",
          answer:
            "Our SLA support covers technical server monitoring, API connection repairs, database optimization, styling adjustments, and minor text/image updates. Continued feature rollouts or major design extensions are billed separately under design retainer contracts.",
        },
        {
          question: "How do you build and secure custom AI chatbots?",
          answer:
            "We analyze your support logs or internal documentation, parse the text into a vector database, write instructions defining the chatbot's voice constraints, and establish secure serverless endpoints. All user inputs are sanitized to protect database security.",
        },
        {
          question: "Do you offer ongoing design retainer packages?",
          answer:
            "Absolutely. Our retainer plans give you a dedicated design & development bandwidth each month — ideal for startups and growing businesses that need continuous iteration, A/B testing, new feature rollouts, and brand consistency across all digital touchpoints.",
        },
      ],
    },
    cta: {
      badge: "FINAL DIRECTIVE",
      titleLine1: "HAVE AN IMPOSSIBLE",
      titleLine2: "IDEA?",
      subtitle:
        "Tell us about your project vision. You will hear back within 24 hours with honest next steps and a fixed quote outline.",
      button: "LET'S BUILD IT",
    },
    contact: {
      badge: "Start A Conversation",
      titleLine1: "LET'S BUILD",
      titleLine2: "SOMETHING EXCEPTIONAL.",
      subtitle:
        "Have a project in mind? Tell us about your timeline, goals, and technical challenges. We respond to every inquiry within 24 hours.",
      locationLabel: "Location",
      locationValue: "Gaspare Gozzi, 53 · 30171 Mestre, Venezia, Italy",
      emailLabel: "Email",
      phoneLabel: "Phone / WhatsApp",
      hoursLabel: "Working Hours",
      hoursValue: "Mon – Fri: 09:00 – 18:00 CET",
      form: {
        name: "Full Name",
        namePlaceholder: "Marco Rossi",
        email: "Email Address",
        emailPlaceholder: "marco@company.com",
        company: "Company / Project (Optional)",
        companyPlaceholder: "Acme Studio SRL",
        service: "Service Required",
        servicePlaceholder: "Select a core service...",
        serviceOptions: [
          { value: "web-dev", label: "Web Development (Next.js / React)" },
          { value: "ai-agents", label: "AI Agents & Chatbot Engineering" },
          { value: "ecommerce", label: "Headless E-Commerce" },
          { value: "marketing", label: "Digital Marketing & SEO" },
          { value: "design", label: "UI/UX & Product Design Systems" },
          { value: "other", label: "Custom Architecture / Consulting" },
        ],
        message: "Project Details & Budget",
        messagePlaceholder:
          "Tell us about your goals, target launch date, and estimated budget range...",
        consent: "I agree to the processing of my data in accordance with the Privacy Policy.",
        submitBtn: "Send Message",
        sendingBtn: "Transmitting...",
        successTitle: "Inquiry Received",
        successDesc:
          "Thank you for reaching out. A senior partner will review your requirements and respond within 24 hours.",
        sendAnotherBtn: "Send Another Message",
        errors: {
          nameReq: "Full Name is required",
          emailReq: "Email is required",
          emailValid: "Please enter a valid email address",
          serviceReq: "Please select a service",
          messageReq: "Message is required",
          consentReq: "You must agree to the privacy policy",
          unexpected: "An unexpected error occurred. Please try again.",
        },
      },
    },
    footer: {
      vat: "CodeBorgo · P.IVA IT01234567890 · Mestre, Venezia, Italy",
      privacy: "Privacy Policy",
      cookie: "Cookie Policy",
      terms: "Terms of Service",
      backToTop: "Back to Top",
      allRightsReserved: "CodeBorgo. All Rights Reserved.",
    },
    cookieBanner: {
      title: "Cookie Settings",
      desc: "We use cookies to enhance your experience and analyze our traffic. By clicking Accept, you consent to our use of cookies as described in our",
      policyLink: "Cookie Policy",
      reject: "Reject Non-Essential",
      accept: "Accept",
    },
  },
  it: {
    nav: {
      logoTagline: "Venezia / ITALIA",
      home: "Home",
      about: "Chi Siamo",
      services: "Servizi",
      portfolio: "Portfolio",
      pricing: "Prezzi",
      contact: "Contatti",
      letsTalk: "Parliamo",
      coreCapabilitiesTitle: "Quattro Competenze Principali",
      exploreCapabilities: "Esplora Tutti i Servizi",
      capabilities: {
        webDev: {
          title: "Sviluppo Web / App",
          pricing: "Progetti dedicati da €1.000+",
          description: "Siti web Next.js ultra-rapidi, web app su misura e maestria UI/UX.",
        },
        aiDev: {
          title: "Sviluppo Agenti AI",
          pricing: "Progetti dedicati da €1.000+",
          description: "Agenti AI autonomi, integrazioni LLM e automazione flussi di lavoro.",
        },
        socialMedia: {
          title: "Contenuti Social Media",
          pricing: "Retainer mensile da €1.000+",
          description: "Media ad alta conversione, produzione contenuti e crescita community.",
        },
        perfMarketing: {
          title: "Performance Marketing",
          pricing: "Retainer mensile da €1.000+",
          description: "Ottimizzazione SEO, campagne pubblicitarie mirate e monitoraggio ROI.",
        },
      },
    },
    hero: {
      badge: "Nuovi progetti disponibili per Q3 2026",
      titleLine1: "Eccellenza Digitale Premium",
      rotatingServices: [
        "Artigianato Web",
        "Architettura UI/UX",
        "Sistemi di Crescita",
        "Strategia di Brand",
      ],
      subtitle:
        "Siamo uno studio con sede a Venezia che sviluppa siti web ad alte prestazioni, agenti AI su misura e sistemi di marketing orientati ai risultati. Guidato dai fondatori, solo sviluppatori senior, cura maniacale dei dettagli — zero outsourcing, zero template generici.",
      ctaConsultation: "Consulenza Gratuita",
      ctaServices: "Servizi",
      ourProjects: "I Nostri Progetti",
    },
    about: {
      badge: "Filosofia dello Studio",
      titleLine1: "Il Design Italiano Incontra",
      titleLine2: "L'Ingegneria Digitale.",
      p1: "CodeBorgo nasce su un principio senza tempo: che i prodotti digitali debbano essere tanto funzionali quanto esteticamente impeccabili. Abbiamo sede a Venezia e portiamo nello sviluppo di un sito la stessa maestria artigianale che un laboratorio veneziano dedica a ogni sua creazione.",
      p2: "Siamo un team compatto per scelta. Ciò significa che dialoghi direttamente con chi progetta e scrive il codice — non con intermediari o lunghe code di attesa. Non usiamo template prefatti: disegniamo e ingegnerizziamo piattaforme su misura per gli obiettivi reali del tuo business.",
      p3: "Se sei un brand ambizioso o una startup alla ricerca di un partner tecnologico che abbia a cuore ogni singolo dettaglio, CodeBorgo è fatto per te.",
      stats: {
        seniorBuilt: "Sviluppo Solo Senior",
        responseTime: "Tempo di Risposta",
        targetPageSpeed: "Obiettivo PageSpeed",
        veniceEuBased: "Con Sede a Venezia & UE",
      },
      values: {
        precision: {
          title: "Ingegneria di Precisione",
          desc: "Codice frontend pixel-perfect scritto in React, Next.js e TypeScript. Zero codice superfluo, massima velocità.",
        },
        aesthetic: {
          title: "Integrità Estetica",
          desc: "Ispirato al design classico italiano. Tipografia ad alto contrasto, proporzioni armoniose e griglie ordinate.",
        },
        growth: {
          title: "Crescita Misurabile",
          desc: "Campagne di marketing e prodotti digitali ottimizzati per raggiungere precisi KPI finanziari e di traffico.",
        },
        cognitive: {
          title: "Sistemi Intelligenti",
          desc: "Modelli AI personalizzati e flussi di automazione che riducono i costi di supporto clienti fino al 60%.",
        },
      },
    },
    services: {
      badge: "Competenze & Soluzioni",
      titleLine1: "PROGETTATI PER UN",
      titleLine2: "IMPATTO MISURABILE.",
      subtitle:
        "Uniamo la sensibilità artistica italiana con le più moderne architetture web, agenti AI autonomi e strategie di marketing data-driven.",
      allCapabilitiesBtn: "Esplora Tutte le 9 Competenze",
      categories: {
        all: "Tutti i Servizi",
        webApps: "Web & Applicazioni",
        aiSystems: "AI & Sistemi Intelligenti",
        cloudSaas: "Cloud & SaaS",
        growthStrategy: "Crescita & Strategia",
      },
      items: {
        "digital-marketing": {
          title: "Marketing Digitale & Eccellenza SEO",
          tagline: "Massimizza la Tua Visibilità Online",
          description:
            "I nostri servizi completi di marketing digitale sono concepiti per aumentare visibilità, engagement e conversioni. Combiniamo visione strategica ed esecuzione impeccabile.",
          subServices: [
            { title: "Ottimizzazione SEO", desc: "Strategie SEO tecniche e di contenuto per scalare le classifiche di ricerca e generare traffico qualificato." },
            { title: "Campagne Pubblicitarie (PPC)", desc: "Campagne Google Ads, Meta e LinkedIn mirate con ottimizzazione continua del ROI." },
            { title: "Analisi Dati & Reportistica", desc: "Tracciamento in tempo reale e report periodici dettagliati sulle prestazioni delle campagne." },
            { title: "Strategia di Contenuto", desc: "Articoli, casi studio e whitepaper che posizionano il tuo brand come punto di riferimento." },
          ],
          ctaText: "Vuoi accelerare la tua crescita? Parliamo delle nostre strategie di digital marketing.",
        },
        "web-development": {
          title: "Sviluppo Web & Architettura Digitale",
          tagline: "Siti Web Veloci, Eleganti e ad Alte Prestazioni",
          description:
            "Progettiamo e sviluppiamo siti web ed applicazioni moderne che trasformano i visitatori in clienti fidelizzati. Ogni progetto unisce eccellenza tecnica e design d'autore.",
          subServices: [
            { title: "Design UI/UX", desc: "Esperienze incentrate sull'utente che valorizzano estetica, navigabilità e accessibilità." },
            { title: "Sviluppo Frontend", desc: "React, Next.js e TypeScript moderno con layout reattivi e animazioni fluide." },
            { title: "Ingegneria Backend", desc: "Architetture server affidabili con Node.js, database relazionali e API moderne." },
            { title: "Velocità & Sicurezza", desc: "Pagine ultra-rapide con code splitting, caching avanzato, SSL e conformità agli standard di sicurezza." },
          ],
          ctaText: "Costruiamo qualcosa di straordinario insieme. Contattaci per iniziare.",
        },
        "ai-services": {
          title: "Agenti AI & Automazione Intelligente",
          tagline: "Automazione Avanzata Basata sull'Intelligenza Artificiale",
          description:
            "Sfrutta il potenziale dell'intelligenza artificiale per automatizzare le operazioni aziendali, migliorare il servizio clienti e conquistare un vantaggio competitivo unico.",
          subServices: [
            { title: "Chatbot Intelligenti", desc: "Assistenti virtuali attivi 24/7 per supporto clienti immediato e qualificazione lead." },
            { title: "Agenti AI Autonomi", desc: "Agenti intelligenti capaci di gestire flussi complessi e compiti operativi ripetitivi." },
            { title: "Machine Learning & RAG", desc: "Modelli predittivi su misura e ricerca semantica avanzata sui documenti aziendali." },
            { title: "Integrazione LLM", desc: "Integrazioni sicure con le API di OpenAI, Claude e modelli open-source personalizzati." },
          ],
          ctaText: "Rivoluziona il tuo business con l'AI. Scopri le soluzioni su misura per te.",
        },
        "social-media": {
          title: "Gestione Social Media & Produzione Creativa",
          tagline: "Costruisci la Community e Valorizza il Brand",
          description:
            "Sviluppiamo strategie social su misura che creano connessioni autentiche con il pubblico, aumentano l'interazione e stimolano la crescita su tutte le piattaforme principali.",
          subServices: [
            { title: "Creazione Contenuti", desc: "Fotografia professionale, video editing e grafica per post ad altissimo impatto visivo." },
            { title: "Piani Editoriali Strategici", desc: "Calendari di pubblicazione strutturati in linea con gli obiettivi aziendali." },
            { title: "Gestione Community", desc: "Moderazione attiva, dialogo continuo e risposta rapida al pubblico." },
            { title: "Analisi delle Prestazioni", desc: "Metriche approfondite per monitorare l'andamento e perfezionare la strategia." },
          ],
          ctaText: "Pronto a far crescere la tua presenza social? Creiamo una strategia vincente.",
        },
        "cloud-devops": {
          title: "Ingegneria Cloud & DevOps",
          tagline: "Scala in Sicurezza, Distribuisci Istantaneamente",
          description:
            "Infrastrutture cloud resilienti progettate per garantire massima efficienza, scalabilità e contenimento dei costi di gestione hosting.",
          subServices: [
            { title: "Migrazione AWS & Google Cloud", desc: "Architetture multi-regione con alta disponibilità e disaster recovery automatizzato." },
            { title: "Pipeline CI/CD", desc: "Rilasci continui e zero-downtime tramite GitHub Actions, Docker e containerizzazione." },
            { title: "Infrastructure as Code", desc: "Gestione dell'infrastruttura come codice software riproducibile con Terraform." },
            { title: "Sicurezza & Criteri IAM", desc: "Audit periodici di conformità, regole di accesso granulari e configurazione VPC protette." },
          ],
          ctaText: "Desideri aggiornare la tua infrastruttura? Prenota una consulenza cloud oggi.",
        },
        "saas-development": {
          title: "Sviluppo SaaS & Piattaforme Web",
          tagline: "Applicazioni Web su Misura Pronte a Scalare",
          description:
            "Dalla modellazione del database all'orchestrazione di API complesse: creiamo software web ad alte prestazioni che supportano milioni di richieste.",
          subServices: [
            { title: "Architetture Multi-Tenant", desc: "Separazione rigorosa dei dati, gestione ruoli e permessi aziendali avanzati." },
            { title: "Progettazione API", desc: "Sviluppo di endpoint GraphQL, REST e gRPC sicuri ed efficienti per flussi di dati continui." },
            { title: "Backend Cloud Scalabili", desc: "Microservizi in Node.js, Go o Python affiancati da database PostgreSQL e cache Redis." },
            { title: "Funzionalità in Tempo Reale", desc: "Dashboard interattive con WebSockets, notifiche push e aggiornamenti live." },
          ],
          ctaText: "Hai un'idea per un nuovo prodotto software? Trasformiamola in una piattaforma SaaS.",
        },
        "ux-strategy": {
          title: "Strategia di Prodotto & Design System",
          tagline: "Esperienze Digitali Centrate sull'Utente",
          description:
            "Offri esperienze memorabili grazie a interfacce utente studiate nei dettagli, micro-animazioni raffinate e un design system scalabile nel tempo.",
          subServices: [
            { title: "Analisi User Journey", desc: "Mappe di calore e analisi delle conversioni per rimuovere ogni ostacolo all'acquisto." },
            { title: "Librerie Componenti Figma", desc: "Componenti modulari conformi agli standard di accessibilità WCAG 2.1." },
            { title: "Prototipi Interattivi", desc: "Flussi navigabili ad alta fedeltà ideali per test e validazioni rapide con utenti reali." },
            { title: "Sincronizzazione Codice-Design", desc: "Allineamento automatico dei token visivi tra Figma e codice React/Next.js." },
          ],
          ctaText: "Perfeziona il design dei tuoi prodotti digitali. Collabora con il nostro team.",
        },
        "data-analytics": {
          title: "Analisi Dati & Business Intelligence",
          tagline: "Decisioni Sicure Guidate dai Dati",
          description:
            "Trasforma le metriche di utilizzo e i registri transazionali in cruscotti visuali chiari e intelligenza predittiva per sostenere la crescita.",
          subServices: [
            { title: "Dashboard BI Personalizzate", desc: "Visualizzazione in tempo reale dei principali indicatori di performance aziendale." },
            { title: "Pipeline Data Warehouse", desc: "Integrazione dei dati da Stripe, Google Analytics e database in un unico repository." },
            { title: "Tracciamento Funnel", desc: "Monitoraggio dettagliato di ogni fase di acquisizione e fidelizzazione cliente." },
            { title: "Modelli Predittivi di Retention", desc: "Algoritmi che anticipano i rischi di abbandono cliente per intervenire tempestivamente." },
          ],
          ctaText: "Estrai il massimo valore dai tuoi dati. Richiedi la tua architettura analitica.",
        },
        "headless-ecommerce": {
          title: "Architetture E-Commerce Headless",
          tagline: "Negozi Online Ultra-Veloci Che Convertono",
          description:
            "Separa il frontend dal backend tradizionale per ottenere transizioni istantanee tra le pagine, personalizzazione illimitata e tassi di conversione superiori.",
          subServices: [
            { title: "Shopify Hydrogen & Medusa", desc: "Frontend Next.js connesso a store headless Shopify o MedusaJS." },
            { title: "Checkout Stripe Personalizzato", desc: "Flusso di pagamento conforme PCI multi-valuta con supporto Apple Pay e Google Pay." },
            { title: "Sincronizzazione Magazzino", desc: "Aggiornamento in tempo reale delle scorte tra negozi fisici e store online." },
            { title: "Edge Caching Globale", desc: "Cataloghi pre-renderizzati distribuiti su nodi CDN edge mondiali in meno di 200ms." },
          ],
          ctaText: "Vuoi moltiplicare le vendite del tuo e-commerce? Progettiamo uno store headless rapido.",
        },
      },
    },
    howWeWork: {
      badge: "Il Nostro Metodo Collaudato",
      titleLine1: "COME REALIZZIAMO",
      titleLine2: "PROGETTI DI SUCCESSO.",
      subtitle:
        "Ogni progetto segue un ciclo sprint suddiviso in 4 fasi chiare, ideato per garantire totale trasparenza, puntualità ed eccellenza realizzativa.",
      steps: [
        {
          num: "01",
          title: "Scoperta & Allineamento",
          shortDesc: "Roadmap e definizione perimetro",
          desc: "Organizziamo una sessione tecnica approfondita per comprendere obiettivi di brand, requisiti architetturali e KPI attesi. Definiamo un piano dettagliato a prezzo e perimetro fissi.",
          details: ["Raccolta requisiti", "Specifiche tecniche", "Preventivo a perimetro fisso"],
        },
        {
          num: "02",
          title: "Design UX & Interfaccia Figma",
          shortDesc: "Prototipi reattivi e design token",
          desc: "Progettiamo wireframe e mock-up ad alta fedeltà in Figma. Puoi interagire con i prototipi completi e approvare ogni dettaglio prima che venga scritta una singola riga di codice.",
          details: ["Identità visiva", "Prototipo navigabile Figma", "Specifiche micro-animazioni"],
        },
        {
          num: "03",
          title: "Sviluppo Full-Stack",
          shortDesc: "Codice Next.js e TypeScript",
          desc: "Traduciamo i design approvati in codice Next.js pulito, tipizzato e ottimizzato. Puoi seguire lo stato di avanzamento in tempo reale tramite un link di staging privato su Vercel.",
          details: ["Next.js (App Router)", "Codice TypeScript", "Link di anteprima staging"],
        },
        {
          num: "04",
          title: "Testing, Lancio & Assistenza",
          shortDesc: "Configurazione DNS e supporto SLA",
          desc: "Effettuiamo controlli rigorosi su molteplici dispositivi, configuriamo i domini DNS e completiamo l'indicizzazione SEO. Consegniamo il codice sorgente con un periodo di supporto garantito.",
          details: ["Configurazione DNS e dominio", "Audit prestazioni e SEO", "SLA di supporto post-lancio"],
        },
      ],
    },
    features: {
      badge: "Lo Standard CodeBorgo",
      titleLine1: "INGEGNERIZZATO PER",
      titleLine2: "L'ECCELLENZA PURA.",
      subtitle:
        "Ogni piattaforma digitale è realizzata secondo i più severi standard di velocità, estetica italiana di pregio e affidabilità tecnica di grado enterprise.",
      items: {
        perf: {
          title: "Prestazioni Ultra",
          desc: "Rendering lato server, caching su edge CDN globale e caricamenti istantanei con punteggio PageSpeed 98+.",
        },
        aesthetic: {
          title: "Estetica su Misura",
          desc: "Interfacce disegnate da zero senza template prefatti. Gerarchia tipografica raffinata e armonia degli spazi.",
        },
        ai: {
          title: "Agenti AI Avanzati",
          desc: "Chatbot e flussi operativi progettati con API OpenAI e Claude in grado di automatizzare l'80% delle richieste.",
        },
        security: {
          title: "Sicurezza Nativa",
          desc: "Crittografia SSL di livello bancario, pagamenti conformi PCI con Stripe e isolamento completo dei dati.",
        },
        speed: {
          title: "Consegne Puntuali",
          desc: "Sviluppo a sprint veloci e prevedibili, con milestone trasparenti, link di anteprima e comunicazione diretta.",
        },
        sla: {
          title: "Supporto SLA Garantito",
          desc: "Garanzia post-lancio, monitoraggio continuo dell'uptime e assistenza tecnica prioritaria per il tuo team.",
        },
      },
    },
    portfolio: {
      badge: "Casi Studio in Evidenza",
      titleLine1: "CASI STUDIO",
      titleLine2: "SELEZIONATI.",
      subtitle:
        "Una selezione curata di piattaforme e progetti per i nostri clienti che dimostrano la nostra competenza tra web, e-commerce, intelligenza artificiale e architetture di lusso.",
      viewAllBtn: "Vedi Tutti i Progetti",
      visitLive: "Visita Sito Ufficiale",
      conceptBuild: "Demo Concettuale / In Sviluppo",
      searchPlaceholder: "Cerca per titolo, tecnologia (es. Next.js, Claude API)...",
      allCategories: "Tutti",
      pageTitleLine1: "TUTTI I PROGETTI &",
      pageTitleLine2: "CASI STUDIO.",
      pageSubtitle:
        "Esplora il nostro archivio completo di piattaforme in produzione, assistenti AI, cruscotti SaaS e store e-commerce realizzati con maestria artigianale e tecnologia Next.js.",
      projectDescriptions: {
        "michela-cake-designer":
          "Atelier di alta pasticceria artistica e wedding cake a Mira, Venezia. Galleria creazioni artigianali, sistema di prenotazione consulenze e vetrina mobile-first.",
        "one-beauty-studio":
          "Centro estetico e lash studio esclusivo a Mestre, Venezia. Presenza digitale completa con catalogo trattamenti, prenotazioni via WhatsApp e identità visiva luxury.",
        "venice-mini-market":
          "Minimarket internazionale nel cuore storico di Venezia. Navigazione multilingua dei prodotti, indicazioni per turisti e perfetta integrazione Google Maps.",
        "serenissima-leather":
          "E-commerce headless di pelletteria di lusso con Next.js, MedusaJS e Stripe. Transizioni inferiori a 400ms e catalogo editoriale d'eccellenza.",
        "aurora-ai-support":
          "Piattaforma di assistenza clienti multi-tenant alimentata da Claude 3.5 Sonnet, con ricerca vettoriale e tasso di risoluzione del 75%.",
        "chronos-timeseries":
          "Dashboard di monitoraggio industriale IoT in tempo reale creata con Next.js, TimescaleDB e WebSockets per oltre 10.000 eventi al secondo.",
        "palazzo-san-marco":
          "Piattaforma di prenotazione diretta per boutique hotel con channel manager integrato, pagamenti Stripe multi-valuta e visual storytelling.",
        "finova-wealth":
          "Portale clienti per gestione patrimoniale con tracciamento portafoglio in tempo reale, report PDF e autenticazione biometrica bancaria.",
        "lumina-design-system":
          "Design system completo con oltre 80 componenti accessibili, sincronizzazione automatica dei token Figma e documentazione Storybook.",
      },
    },
    pricing: {
      badge: "Investimenti Trasparenti",
      titleLine1: "PIANI TARIFFARI",
      titleLine2: "CHIARI E PREVEDIBILI.",
      subtitle:
        "Zero costi nascosti, zero sorprese. Preventivi trasparenti pensati per aziende ambiziose che cercano qualità senza compromessi.",
      fixedScopeNotice: "a perimetro fisso",
      recommendedBadge: "★ Scelta Consigliata",
      customQuoteBadge: "Hai bisogno di un piano personalizzato o di un retainer continuativo?",
      customQuoteDesc: "Strutturiamo accordi dedicati di sviluppo continuo e team su misura per il tuo progetto.",
      bookConsultationBtn: "Prenota Consulenza",
      contactUsBtn: "Contattaci",
      packages: {
        studio: {
          badge: "ESSENTIAL MVP",
          name: "Lancio Studio MVP",
          desc: "Vetrina digitale di grande impatto e architettura web Next.js moderna.",
          features: [
            "Frontend personalizzato Next.js & React",
            "Design system e wireframe in Figma",
            "Infrastruttura SEO e verifica Core Web Vitals",
            "Design completamente responsive per mobile e tablet",
            "30 giorni di assistenza e supporto SLA post-lancio",
            "Codice sorgente completo e piena proprietà intellettuale",
          ],
        },
        venezia: {
          badge: "SCALE & GROWTH",
          name: "Firma Venezia",
          desc: "Architetture digitali d'autore, e-commerce headless e agenti AI su misura.",
          features: [
            "Tutto quanto compreso in Studio MVP",
            "Configurazione agente AI e chatbot intelligente",
            "Animazioni cinetiche e layout interattivi",
            "E-commerce headless e gestione contenuti CMS",
            "Pipeline di deploy continuo CI/CD e hosting cloud",
            "90 giorni di assistenza e supporto SLA post-lancio",
            "Ottimizzazione continua delle performance e della cache",
          ],
        },
        enterprise: {
          badge: "ENTERPRISE ECOSYSTEM",
          name: "Architettura Enterprise",
          desc: "Partner tecnologico dedicato per piattaforme scalabili e prodotti complessi.",
          features: [
            "Codice SaaS multi-tenant illimitato",
            "Flussi di fine-tuning LLM e architetture RAG dedicate",
            "Dashboard di business intelligence e grafici avanzati",
            "Infrastruttura cloud DevOps dedicata",
            "Audit periodici di sicurezza e vulnerabilità",
            "12 mesi di assistenza SLA prioritaria",
          ],
        },
      },
      pageHeroTitleLine1: "TARIFFE TRASPARENTI &",
      pageHeroTitleLine2: "LIVELLI DI PROGETTO.",
      pageHeroSubtitle:
        "Preventivi a prezzo fisso, sviluppo condotto esclusivamente da ingegneri senior e supporto SLA garantito post-lancio. Zero costi a sorpresa.",
    },
    testimonials: {
      badge: "Testimonianze Clienti",
      titleLine1: "SCELTO DA",
      titleLine2: "AZIENDE AMBIZIOSE.",
      subtitle:
        "Cosa dicono founder, direttori creativi e responsabili tecnici che hanno collaborato con CodeBorgo.",
      quotes: {
        santoro:
          "Abbiamo migrato il nostro store Shopify a Next.js headless. Caricamenti sotto i 400ms a livello globale e tasso di conversione raddoppiato nel primo mese.",
        hypecart:
          "Il chatbot AI basato su Claude gestisce il 75% dei ticket in automatico. Ha fatto risparmiare al team oltre 20 ore settimanali di assistenza.",
        dataview:
          "Hanno sviluppato una dashboard di analisi in React e TimescaleDB capace di processare migliaia di query in meno di 200ms.",
        rialto:
          "Hanno creato il nostro nuovo sistema di prenotazione, curato la parte fotografica e ottimizzato la SEO locale. Prenotazioni cresciute del 40% su base annua.",
        vento:
          "Hanno realizzato una vetrina digitale raffinata, capace di trasmettere lo stesso senso di lusso del nostro punto vendita a Venezia.",
        apex:
          "CodeBorgo ha consegnato la nostra landing page in sole 3 settimane con un punteggio PageSpeed perfetto di 100/100. Automazione eccellente.",
        alpine:
          "L'integrazione personalizzata dei pagamenti Stripe è impeccabile. Abbiamo processato oltre 150.000€ di ordini senza il minimo intoppo.",
        flora:
          "Hanno ideato un'identità di brand coerente ed elegante per il nostro sito e per i canali social. Altamente consigliati.",
      },
    },
    faq: {
      badge: "✦   DOMANDE FREQUENTI",
      titleLine1: "Domande",
      titleLine2: "Frequenti (FAQ).",
      subtitle: "Tutto quello che desideri sapere sulla collaborazione con CodeBorgo. Non trovi la risposta?",
      items: [
        {
          question: "In quali tecnologie è specializzata CodeBorgo?",
          answer:
            "Siamo specializzati in soluzioni frontend e full-stack all'avanguardia. Il nostro stack primario include Next.js (App Router), React, TypeScript, Tailwind CSS, Node.js e database serverless come PostgreSQL. Per l'intelligenza artificiale lavoriamo direttamente con le API di Anthropic Claude e OpenAI.",
        },
        {
          question: "Quanto tempo richiede la realizzazione di un sito su misura?",
          answer:
            "Una landing page richiede in genere 1–2 settimane. Un sito web completo e personalizzato in Next.js richiede solitamente 3–4 settimane. Piattaforme enterprise con dashboard complesse richiedono mediamente tra 6 e 12 settimane.",
        },
        {
          question: "È possibile suddividere i pagamenti in rate per i progetti più grandi?",
          answer:
            "Certamente. Per i nostri progetti strutturiamo i compensi in tranche: abitualmente il 50% all'avvio, il 25% alla revisione intermedia dello sviluppo e il restante 25% al collaudo finale prima della messa online.",
        },
        {
          question: "Cosa comprende l'assistenza e il supporto SLA post-lancio?",
          answer:
            "Il nostro supporto SLA include monitoraggio dell'infrastruttura, controllo delle API, ottimizzazione delle prestazioni del database, verifiche di sicurezza e aggiornamenti minori di testi e immagini. Nuove funzionalità o espansioni di design vengono concordate tramite pacchetti dedicati.",
        },
        {
          question: "Come vengono progettati e messi in sicurezza gli assistenti AI?",
          answer:
            "Analizziamo la documentazione aziendale o le conversazioni di supporto, indicizziamo le informazioni in un database vettoriale sicuro, definiamo i vincoli di conversazione dell'assistente e creiamo endpoint protetti per salvaguardare la privacy dei dati aziendali.",
        },
        {
          question: "Offrite collaborazioni continuative su base mensile?",
          answer:
            "Certamente. I nostri piani mensili a canone concordato garantiscono ore dedicate di design e sviluppo ogni mese: la scelta perfetta per aziende e startup che richiedono iterazione continua, test A/B e nuove funzionalità nel tempo.",
        },
      ],
    },
    cta: {
      badge: "PROSSIMO PASSO",
      titleLine1: "HAI UN'IDEA",
      titleLine2: "AMBIZIOSA?",
      subtitle:
        "Raccontaci gli obiettivi del tuo progetto. Riceverai una risposta entro 24 ore con un piano operativo trasparente e un preventivo chiaro.",
      button: "REALIZZIAMOLA INSIEME",
    },
    contact: {
      badge: "Iniziamo a Parlare",
      titleLine1: "CREIAMO QUALCOSA",
      titleLine2: "DI STRAORDINARIO.",
      subtitle:
        "Hai un progetto in mente? Condividi con noi tempi, obiettivi e sfide tecniche. Rispondiamo a ogni richiesta entro 24 ore lavorative.",
      locationLabel: "Sede",
      locationValue: "Gaspare Gozzi, 53 · 30171 Mestre, Venezia, Italia",
      emailLabel: "Email",
      phoneLabel: "Telefono / WhatsApp",
      hoursLabel: "Orari di Apertura",
      hoursValue: "Lun – Ven: 09:00 – 18:00 CET",
      form: {
        name: "Nome Completo",
        namePlaceholder: "Marco Rossi",
        email: "Indirizzo Email",
        emailPlaceholder: "marco@azienda.it",
        company: "Azienda / Progetto (Opzionale)",
        companyPlaceholder: "Studio Rossi SRL",
        service: "Servizio Richiesto",
        servicePlaceholder: "Seleziona un servizio...",
        serviceOptions: [
          { value: "web-dev", label: "Sviluppo Web (Next.js / React)" },
          { value: "ai-agents", label: "Agenti AI & Chatbot Intelligenti" },
          { value: "ecommerce", label: "E-Commerce Headless" },
          { value: "marketing", label: "Digital Marketing & SEO" },
          { value: "design", label: "Design UI/UX & Design System" },
          { value: "other", label: "Architettura su Misura / Consulenza" },
        ],
        message: "Dettagli del Progetto & Budget Stimato",
        messagePlaceholder:
          "Descrivi i tuoi obiettivi, la data di lancio desiderata e il budget orientativo...",
        consent: "Accetto il trattamento dei miei dati personali ai sensi dell'Informativa sulla Privacy.",
        submitBtn: "Invia Messaggio",
        sendingBtn: "Invio in corso...",
        successTitle: "Richiesta Ricevuta",
        successDesc:
          "Grazie per averci contattato. Un responsabile senior analizzerà le tue richieste e ti risponderà entro 24 ore.",
        sendAnotherBtn: "Invia Un Altro Messaggio",
        errors: {
          nameReq: "Il nome completo è obbligatorio",
          emailReq: "L'indirizzo email è obbligatorio",
          emailValid: "Inserisci un indirizzo email valido",
          serviceReq: "Seleziona un servizio",
          messageReq: "Il messaggio è obbligatorio",
          consentReq: "Devi accettare l'informativa sulla privacy",
          unexpected: "Si è verificato un errore imprevisto. Riprova più tardi.",
        },
      },
    },
    footer: {
      vat: "CodeBorgo · P.IVA IT01234567890 · Mestre, Venezia, Italia",
      privacy: "Privacy Policy",
      cookie: "Cookie Policy",
      terms: "Termini di Servizio",
      backToTop: "Torna in Cima",
      allRightsReserved: "CodeBorgo. Tutti i Diritti Riservati.",
    },
    cookieBanner: {
      title: "Impostazioni Cookie",
      desc: "Utilizziamo cookie tecnici per migliorare la tua esperienza e analizzare il traffico sul sito. Cliccando Accetta, acconsenti al loro utilizzo come descritto nella nostra",
      policyLink: "Cookie Policy",
      reject: "Rifiuta Non Essenziali",
      accept: "Accetta",
    },
  },
};
