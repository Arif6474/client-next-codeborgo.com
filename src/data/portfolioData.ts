import { Ticket, Utensils, CheckCircle, Building, Heart, ShoppingCart, MessageSquare, LayoutGrid, Sparkles, LineChart, Cake, Store } from "lucide-react";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface PortfolioItem {
  id: string;
  number: string;
  tag: string;
  category: string;
  title: string;
  description: string;
  metrics: ProjectMetric[];
  techStack: string[];
  image: string;
  liveLink?: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const portfolioList: PortfolioItem[] = [
  {
    id: "grandmela",
    number: "01",
    tag: "EVENT TICKETING PLATFORM",
    category: "Event Ticketing",
    title: "GrandMela",
    description: "Full-stack event discovery and instant QR-ticketing engine built for local concerts and stadium matches with zero gateway latency.",
    metrics: [
      { value: "0.2s", label: "Ticket Issuance" },
      { value: "Stripe & QR", label: "Gate Check-In Stack" },
    ],
    techStack: ["Next.js", "Stripe API", "QR Engine", "Edge Cache"],
    image: "/projects/grandmela/grandmela1.png",
    liveLink: "https://grandmela.it/",
    icon: Ticket,
  },
  {
    id: "staynova",
    number: "02",
    tag: "HOSPITALITY STAFFING B2B",
    category: "B2B & Staffing",
    title: "StayNova UAE",
    description: "Enterprise hospitality staffing portal providing verified personnel allocation for five-star luxury hotel chains across the UAE.",
    metrics: [
      { value: "100%", label: "Vetted Staff Roster" },
      { value: "Dubai & Abu Dhabi", label: "Enterprise Scale" },
    ],
    techStack: ["React/TS", "PostgreSQL", "B2B Workflows", "Auth Shield"],
    image: "/projects/staynova/staynova1.png",
    liveLink: "https://staynova.ae/",
    icon: CheckCircle,
  },
  {
    id: "ennconsultancy",
    number: "03",
    tag: "BUSINESS FORMATION & ADVISORY",
    category: "Consultancy & B2B",
    title: "ENN Consultancy",
    description: "Leading corporate setup portal delivering automated visa processing and freezone company incorporation systems.",
    metrics: [
      { value: "<24h", label: "Client Intake" },
      { value: "UAE Mainland", label: "Corporate Jurisdiction" },
    ],
    techStack: ["Next.js", "Form Automations", "Resend API", "Tailwind"],
    image: "/projects/enn/enn1.png",
    liveLink: "https://ennconsultancy.ae/",
    icon: Building,
  },
  {
    id: "michelacakedesigner",
    number: "04",
    tag: "ARTISANAL CAKES & 3D STUDIO",
    category: "Artisanal & Food",
    title: "Michela Cake Designer",
    description: "Boutique confectionery studio platform in Mestre featuring an interactive 3D cake design configurator, 190+ bespoke creation catalog, and seamless custom event ordering.",
    metrics: [
      { value: "190+ Cakes", label: "Artisan Catalog" },
      { value: "Mestre, IT", label: "Studio Hub" },
    ],
    techStack: ["Next.js", "3D Customizer", "Tailwind CSS", "Order System"],
    image: "/projects/michelacake/michela1.jpg",
    liveLink: "https://michelacakedesigner.codeborgo.com/",
    icon: Cake,
  },
  {
    id: "onebeautystudio",
    number: "05",
    tag: "LUXURY SALON & WELLNESS",
    category: "Beauty & Wellness",
    title: "ONE BEAUTY STUDIO",
    description: "High-end beauty and nail salon portal in Mestre, Venezia offering curated treatment menus, real-time 24/7 appointment intake workflows, and bespoke aesthetic presentation.",
    metrics: [
      { value: "24/7 Intake", label: "Online Booking" },
      { value: "Venezia, IT", label: "Boutique Location" },
    ],
    techStack: ["Next.js", "TypeScript", "Booking System", "Tailwind CSS"],
    image: "/projects/onebeauty/onebeauty1.jpg",
    liveLink: "https://onebeautystudio.codeborgo.com/",
    icon: Sparkles,
  },
  // {
  //   id: "veniceminimarket",
  //   number: "06",
  //   tag: "LOCAL RETAIL & COMMERCE",
  //   category: "Retail & Commerce",
  //   title: "Venice Mini Market",
  //   description: "Neighborhood retail and convenience platform on Corso del Popolo featuring real store photography, dynamic aisle showcase, and high-ranking local search presence.",
  //   metrics: [
  //     { value: "Corso del Popolo", label: "Venezia Hub" },
  //     { value: "Local SEO", label: "Footfall Engine" },
  //   ],
  //   techStack: ["Next.js", "Local SEO", "High-Res Gallery", "Tailwind CSS"],
  //   image: "/projects/veniceminimarket/venice1.jpg",
  //   liveLink: "https://veniceminimarket.com/",
  //   icon: Store,
  // },
  {
    id: "luxury-fashion",
    number: "07",
    tag: "CONCEPT STOREFRONT",
    category: "E-Commerce",
    title: "Venezia Luxury Atelier",
    description: "Editorial luxury fashion concept featuring headless Shopify integration, dynamic video showcases, and liquid smooth page transitions.",
    metrics: [
      { value: "100/100", label: "Lighthouse Performance" },
      { value: "Headless", label: "Commerce Stack" },
    ],
    techStack: ["Next.js", "Shopify Storefront API", "Framer Motion"],
    image: "/images/luxury-fashion.png",
    icon: Heart,
  },
  {
    id: "chatbot",
    number: "08",
    tag: "AI SUPPORT AGENT",
    category: "AI Systems",
    title: "Smart Customer Intelligence Bot",
    description: "Autonomous customer service intelligence agent powered by Claude API with instant RAG document context resolution.",
    metrics: [
      { value: "<1.2s", label: "Response Latency" },
      { value: "85%", label: "Ticket Deflection" },
    ],
    techStack: ["Claude API", "Vector Embeddings", "Next.js Edge"],
    image: "/images/chatbot.png",
    icon: MessageSquare,
  },
  {
    id: "ecommerce",
    number: "09",
    tag: "FULL-STACK COMMERCE",
    category: "E-Commerce",
    title: "E-Commerce Platform",
    description: "Full-stack commerce concept for artisan products, with Stripe checkout, CDN delivery, and edge caching.",
    metrics: [
      { value: "Stripe API", label: "Payment Stack" },
      { value: "Edge CDN", label: "Delivery Network" },
    ],
    techStack: ["Next.js", "Stripe API", "Vercel Edge", "Tailwind"],
    image: "/images/ecommerce.png",
    icon: ShoppingCart,
  },
  {
    id: "saas-dashboard",
    number: "10",
    tag: "ANALYTICS ENGINE",
    category: "SaaS & Web Dev",
    title: "SaaS Analytics Dashboard",
    description: "Real-time analytics dashboard concept with sub-200ms query patterns and a clean data-heavy UI.",
    metrics: [
      { value: "React/TS", label: "Frontend Stack" },
      { value: "< 200ms", label: "Query Latency" },
    ],
    techStack: ["React", "TypeScript", "TimescaleDB", "Recharts"],
    image: "/images/saas-dashboard.png",
    icon: LayoutGrid,
  },
  {
    id: "beauty-campaign",
    number: "11",
    tag: "BRAND CAMPAIGN",
    category: "Digital Marketing",
    title: "Beauty Brand Social Campaign",
    description: "Multi-platform social concept for a beauty brand — cohesive visual system across Instagram, TikTok, and LinkedIn.",
    metrics: [
      { value: "Visual Kit", label: "Deliverables" },
      { value: "9:16 Video", label: "Format Focus" },
    ],
    techStack: ["Brand System", "Motion Graphics", "Content Strategy"],
    image: "/images/beauty-campaign.png",
    icon: Sparkles,
  },
  {
    id: "restaurant",
    number: "12",
    tag: "LOCAL BRAND LAUNCH",
    category: "Fine Dining",
    title: "Restaurant Brand Launch",
    description: "Localized Venezia restaurant brand concept — site, reservations flow, and local-search foundation.",
    metrics: [
      { value: "Local SEO", label: "Organic Target" },
      { value: "Venezia", label: "Target Region" },
    ],
    techStack: ["Next.js", "Local SEO", "Menu Sync", "Reservations"],
    image: "/images/restaurant.png",
    icon: Utensils,
  },
];
