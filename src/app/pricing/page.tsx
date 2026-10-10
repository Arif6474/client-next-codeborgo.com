"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Check,
  ArrowRight,
  HelpCircle,
  ShieldCheck,
  Zap,
  Code2,
  Clock,
  ArrowUpRight,
  ChevronDown
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CustomCursor from "../../components/ui/CustomCursor";
import NoiseBg from "../../components/ui/NoiseBg";
import Modal from "../../components/ui/Modal";

interface Package {
  id: string;
  badge: string;
  name: string;
  price: number | string;
  desc: string;
  features: string[];
  isPopular?: boolean;
}

const packages: Package[] = [
  {
    id: "studio-standard",
    badge: "ESSENTIAL MVP",
    name: "Studio MVP Launch",
    price: 1250,
    desc: "Complete aesthetic storefronts & high-performance Next.js web architectures.",
    features: [
      "Custom Next.js & React Frontend",
      "Figma Design System & Wireframing",
      "SEO Infrastructure & Web Vitals Audit",
      "Full Mobile & Tablet Responsive",
      "30-Day Post-Launch Support SLA",
      "Full Source Code & IP Ownership"
    ],
  },
  {
    id: "Venezia-premium",
    badge: "SCALE & GROWTH",
    name: "Venezia Signature",
    price: 2500,
    desc: "Bespoke digital architecture, headless commerce & autonomous AI agent automations.",
    features: [
      "Everything in Studio MVP",
      "Custom AI Agent & Chatbot Setup",
      "Interactive Animations & Kinetic Layouts",
      "Headless E-Commerce & CMS Setup",
      "CI/CD Pipeline & Cloud Deployment",
      "90-Day Post-Launch Support SLA",
      "Continuous Speed & Cache Optimization"
    ],
    isPopular: true,
  },
  {
    id: "enterprise-suite",
    badge: "ENTERPRISE ECOSYSTEM",
    name: "Enterprise Architecture",
    price: "5,000+",
    desc: "Dedicated digital engineering partner for multi-tenant platforms & enterprise scale.",
    features: [
      "Unlimited Multi-Tenant SaaS Codebase",
      "Custom LLM Fine-Tuning & RAG Workflows",
      "Advanced BI Dashboards & Data Pipelines",
      "Dedicated DevOps Cloud Infrastructure",
      "Regular Security Audits & Pentesting",
      "12 Months Dedicated SLA Support",
      "Priority 24/7 Engineering Hotline"
    ],
  },
];

interface ComparisonRow {
  feature: string;
  mvp: string | boolean;
  signature: string | boolean;
  enterprise: string | boolean;
}

const comparisonData: ComparisonRow[] = [
  { feature: "Next.js & React Core Stack", mvp: true, signature: true, enterprise: true },
  { feature: "Custom Bespoke UI / Figma Design", mvp: true, signature: true, enterprise: true },
  { feature: "Mobile-First Responsiveness", mvp: true, signature: true, enterprise: true },
  { feature: "100/100 Lighthouse Performance Goal", mvp: true, signature: true, enterprise: true },
  { feature: "Turnaround Delivery Speed", mvp: "2 - 3 Weeks", signature: "3 - 5 Weeks", enterprise: "Custom Sprints" },
  { feature: "Autonomous AI Agent / Chatbot", mvp: false, signature: true, enterprise: true },
  { feature: "Headless CMS or E-Commerce Engine", mvp: false, signature: true, enterprise: true },
  { feature: "Custom LLM Fine-Tuning & RAG", mvp: false, signature: false, enterprise: true },
  { feature: "Cloud CI/CD & Automated DevOps", mvp: "Basic", signature: "Advanced", enterprise: "Enterprise Multi-Zone" },
  { feature: "Post-Launch SLA Guarantee", mvp: "30 Days", signature: "90 Days", enterprise: "12 Months" },
  { feature: "Source Code & IP Rights", mvp: "100% Client Owned", signature: "100% Client Owned", enterprise: "100% Client Owned" },
];

const faqs = [
  {
    q: "How does project payment scheduling work?",
    a: "We operate on clear milestone commitments: 50% upfront deposit to initiate discovery and architecture, and 50% upon final production sign-off and deployment. No surprise hourly overages.",
  },
  {
    q: "Do we retain complete ownership of the code and design?",
    a: "Yes, 100%. Upon final settlement, all intellectual property, git repositories, Figma prototypes, and cloud deployment pipelines are transferred entirely to your organization.",
  },
  {
    q: "What if we need ongoing maintenance or new features post-launch?",
    a: "Every tier includes a post-launch SLA (ranging from 30 days to 12 months). After that, we offer monthly retainer plans starting at €1,000/month for proactive feature iteration, continuous SEO optimization, and infrastructure monitoring.",
  },
  {
    q: "Can we request custom AI integrations or third-party APIs later?",
    a: "Absolutely. Our architectures are built modularly using Next.js App Router and microservices patterns, making future integrations with OpenAI, Claude, Stripe, CRM, and ERP tools frictionless.",
  },
  {
    q: "How fast can you initiate a new build?",
    a: "Most projects initiate within 3 to 5 business days following intake discovery and deposit settlement.",
  },
];

export default function PricingPage() {
  const [selectedPack, setSelectedPack] = useState<Package | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>("Venezia-premium");
  const [paymentState, setPaymentState] = useState<"idle" | "processing" | "success">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Form states for checkout
  const [cardName, setCardName] = useState("");
  const [cardEmail, setCardEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleCtaClick = (pack: Package) => {
    if (pack.id === "enterprise-suite") {
      window.location.href = "/#contact";
    } else {
      setSelectedPack(pack);
      setPaymentState("idle");
      setCardName("");
      setCardEmail("");
      setCardNumber("");
      setCardExpiry("");
      setCardCvc("");
      setErrors({});
    }
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, "").replace(/\D/g, "");
    const formatted = value.match(/.{1,4}/g)?.join(" ") || value;
    setCardNumber(formatted.slice(0, 19));
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    let formatted = value;
    if (value.length >= 2) {
      formatted = value.slice(0, 2) + "/" + value.slice(2, 4);
    }
    setCardExpiry(formatted.slice(0, 5));
  };

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setCardCvc(value.slice(0, 3));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!cardName.trim()) newErrors.cardName = "Name is required";
    if (!cardEmail.trim()) {
      newErrors.cardEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(cardEmail)) {
      newErrors.cardEmail = "Enter a valid email";
    }

    const plainCard = cardNumber.replace(/\s/g, "");
    if (plainCard.length !== 16) {
      newErrors.cardNumber = "Enter a 16-digit card number";
    }

    if (cardExpiry.length !== 5 || !cardExpiry.includes("/")) {
      newErrors.cardExpiry = "Expiry date must be MM/YY";
    }

    if (cardCvc.length !== 3) {
      newErrors.cardCvc = "CVC must be 3 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setPaymentState("processing");
    setTimeout(() => {
      setPaymentState("success");
    }, 1800);
  };

  return (
    <main className="relative min-h-screen w-full bg-[#050505] text-white overflow-x-hidden pt-20">
      <CustomCursor />
      <NoiseBg />
      <Navbar />

      {/* Hero Header */}
      <section className="relative px-6 md:px-12 pt-14 pb-16 z-10 max-w-7xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-950/80 text-xs font-mono tracking-widest text-neutral-400 uppercase">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          Transparent Value Architecture
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase font-sans">
          FIXED INVESTMENT. <br />
          <span className="bg-gradient-to-r from-amber-200 via-white to-cyan-300 bg-clip-text text-transparent">
            ZERO SURPRISE INVOICES.
          </span>
        </h1>

        <p className="text-sm md:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Predictable scopes backed by Italian design craftsmanship, Next.js technical precision, and post-launch SLAs. Choose the tier that matches your ambition.
        </p>

        {/* Value Trust Badges */}
        <div className="pt-4 flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% IP & Source Code Ownership</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-300" />
            <span>Guaranteed Core Web Vitals</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>Post-Launch Support SLAs</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="relative px-6 md:px-12 pb-24 z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch max-w-6xl mx-auto w-full">
          {packages.map((pack) => {
            const isHovered = hoveredId === pack.id;
            const isPopular = pack.isPopular;

            return (
              <motion.div
                key={pack.id}
                data-cursor-text="SELECT"
                onMouseEnter={() => setHoveredId(pack.id)}
                animate={{
                  scale: isHovered ? 1.02 : 0.98,
                  opacity: isHovered ? 1 : 0.85,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className={`relative rounded-3xl p-6 md:p-8 border backdrop-blur-md flex flex-col justify-between transition-colors duration-300 cursor-pointer ${
                  isHovered
                    ? "border-amber-300/60 bg-neutral-900/90 shadow-[0_0_45px_rgba(251,191,36,0.15)] z-20"
                    : "border-neutral-800 bg-neutral-950/70 z-10"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full border border-amber-300/40 bg-amber-400/10 backdrop-blur-md text-[10px] font-mono font-bold tracking-widest text-amber-300 uppercase">
                    ★ Most Popular Choice
                  </div>
                )}

                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase border border-neutral-800 px-2.5 py-1 rounded">
                      {pack.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{pack.name}</h3>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">{pack.desc}</p>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black font-mono text-white">
                      {typeof pack.price === "number" ? `€${pack.price.toLocaleString()}` : `€${pack.price}`}
                    </span>
                    {typeof pack.price === "number" && (
                      <span className="text-[10px] font-mono text-neutral-400">/ fixed scope</span>
                    )}
                  </div>

                  <ul className="space-y-3 pt-4 border-t border-neutral-800">
                    {pack.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-neutral-300 leading-snug">
                        <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => handleCtaClick(pack)}
                    className={`w-full py-3.5 px-4 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      isHovered
                        ? "bg-white text-black hover:bg-neutral-200 shadow-lg"
                        : "border border-neutral-800 bg-neutral-900 text-neutral-300 hover:text-white"
                    }`}
                  >
                    <span>{pack.id === "enterprise-suite" ? "Book Enterprise Consultation" : "Choose Package"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Feature Comparison Matrix */}
      {/* <section className="relative px-6 md:px-12 py-20 z-10 max-w-6xl mx-auto border-t border-neutral-900">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            TECHNICAL AUDIT & SPECIFICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
            DETAILED FEATURE COMPARISON
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Side-by-side comparison of deliverables, architectural components, and ongoing support levels.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-neutral-800/80 bg-neutral-950/60 backdrop-blur-md">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-neutral-800/80 bg-neutral-900/40 text-neutral-300">
                <th className="p-4 sm:p-5 uppercase tracking-wider">Capability / Deliverable</th>
                <th className="p-4 sm:p-5 uppercase tracking-wider text-center">Studio MVP</th>
                <th className="p-4 sm:p-5 uppercase tracking-wider text-center text-amber-300 font-bold bg-amber-400/5">
                  Venezia Signature
                </th>
                <th className="p-4 sm:p-5 uppercase tracking-wider text-center">Enterprise Suite</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-900/80">
              {comparisonData.map((row) => (
                <tr key={row.feature} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 sm:p-5 text-white font-sans text-xs sm:text-sm font-medium">
                    {row.feature}
                  </td>
                  <td className="p-4 sm:p-5 text-center text-neutral-400">
                    {typeof row.mvp === "boolean" ? (
                      row.mvp ? (
                        <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                      ) : (
                        <span className="text-neutral-600">—</span>
                      )
                    ) : (
                      <span>{row.mvp}</span>
                    )}
                  </td>
                  <td className="p-4 sm:p-5 text-center text-amber-200 bg-amber-400/5 font-semibold">
                    {typeof row.signature === "boolean" ? (
                      row.signature ? (
                        <Check className="w-4 h-4 text-amber-300 mx-auto" />
                      ) : (
                        <span className="text-neutral-600">—</span>
                      )
                    ) : (
                      <span>{row.signature}</span>
                    )}
                  </td>
                  <td className="p-4 sm:p-5 text-center text-cyan-200">
                    {typeof row.enterprise === "boolean" ? (
                      row.enterprise ? (
                        <Check className="w-4 h-4 text-cyan-400 mx-auto" />
                      ) : (
                        <span className="text-neutral-600">—</span>
                      )
                    ) : (
                      <span>{row.enterprise}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section> */}

      {/* Frequently Asked Questions */}
      <section className="relative px-6 md:px-12 py-20 z-10 max-w-4xl mx-auto border-t border-neutral-900">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-300">
            QUESTIONS & ANSWERS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
            PRICING & ENGAGEMENT FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-neutral-800 bg-neutral-950/70 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 cursor-pointer"
                >
                  <span className="text-sm font-bold text-white tracking-tight">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-white" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 pb-5 text-xs text-neutral-400 leading-relaxed font-normal"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="relative px-6 md:px-12 py-24 z-10 max-w-5xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900/60 to-neutral-950/80 backdrop-blur-xl relative overflow-hidden space-y-6">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/5 blur-[100px] pointer-events-none" />

          <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
            NEED A CUSTOM ENTERPRISE SCOPE?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
            From specialized LLM integrations and proprietary internal tooling to dedicated engineering retainers, our Venetian studio delivers bespoke excellence.
          </p>

          <div className="pt-2">
            <Link
              href="/#contact"
              data-cursor-text="CONTACT"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-black hover:bg-neutral-200 font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-xl hover:scale-105"
            >
              <span>Speak With Our Engineers</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Stripe Payment Portal Modal */}
      <Modal
        isOpen={selectedPack !== null}
        onClose={() => setSelectedPack(null)}
        title={selectedPack ? `Checkout - ${selectedPack.name}` : ""}
        subtitle="Stripe Secure Gateway"
      >
        {selectedPack && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl border border-neutral-900 bg-neutral-950/40 flex justify-between items-center text-left">
              <div>
                <p className="text-xs font-bold text-white">{selectedPack.name} Package</p>
                <p className="text-[10px] text-neutral-500">Standard single-payment invoice</p>
              </div>
              <span className="text-lg font-bold text-white font-mono">
                €{typeof selectedPack.price === "number" ? selectedPack.price.toLocaleString() : selectedPack.price}
              </span>
            </div>

            {paymentState === "idle" && (
              <form onSubmit={handlePaymentSubmit} className="space-y-4">
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="cardName" className="text-[10px] font-mono text-neutral-500 uppercase">
                    CARDHOLDER NAME *
                  </label>
                  <input
                    id="cardName"
                    type="text"
                    required
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="Lucia Santoro"
                    className="w-full px-3 py-2 text-xs border border-neutral-900 rounded-lg bg-neutral-950/50 text-white focus:outline-none focus:border-neutral-700"
                  />
                  {errors.cardName && <span className="text-[9px] font-mono text-red-500">{errors.cardName}</span>}
                </div>

                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="cardEmail" className="text-[10px] font-mono text-neutral-500 uppercase">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    id="cardEmail"
                    type="email"
                    required
                    value={cardEmail}
                    onChange={(e) => setCardEmail(e.target.value)}
                    placeholder="lucia@fashionhouse.it"
                    className="w-full px-3 py-2 text-xs border border-neutral-900 rounded-lg bg-neutral-950/50 text-white focus:outline-none focus:border-neutral-700"
                  />
                  {errors.cardEmail && <span className="text-[9px] font-mono text-red-500">{errors.cardEmail}</span>}
                </div>

                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="cardNumber" className="text-[10px] font-mono text-neutral-500 uppercase">
                    CARD NUMBER *
                  </label>
                  <input
                    id="cardNumber"
                    type="text"
                    required
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="4242 4242 4242 4242"
                    className="w-full px-3 py-2 text-xs border border-neutral-900 rounded-lg bg-neutral-950/50 text-white font-mono focus:outline-none focus:border-neutral-700"
                  />
                  {errors.cardNumber && <span className="text-[9px] font-mono text-red-500">{errors.cardNumber}</span>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="cardExpiry" className="text-[10px] font-mono text-neutral-500 uppercase">
                      EXPIRY DATE *
                    </label>
                    <input
                      id="cardExpiry"
                      type="text"
                      required
                      value={cardExpiry}
                      onChange={handleExpiryChange}
                      placeholder="MM/YY"
                      className="w-full px-3 py-2 text-xs border border-neutral-900 rounded-lg bg-neutral-950/50 text-white font-mono focus:outline-none focus:border-neutral-700"
                    />
                    {errors.cardExpiry && <span className="text-[9px] font-mono text-red-500">{errors.cardExpiry}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="cardCvc" className="text-[10px] font-mono text-neutral-500 uppercase">
                      CVC CODE *
                    </label>
                    <input
                      id="cardCvc"
                      type="text"
                      required
                      value={cardCvc}
                      onChange={handleCvcChange}
                      placeholder="123"
                      className="w-full px-3 py-2 text-xs border border-neutral-900 rounded-lg bg-neutral-950/50 text-white font-mono focus:outline-none focus:border-neutral-700"
                    />
                    {errors.cardCvc && <span className="text-[9px] font-mono text-red-500">{errors.cardCvc}</span>}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-white text-[#050505] hover:bg-neutral-200 transition-colors text-xs font-semibold uppercase tracking-wider rounded-lg shadow-md mt-6 cursor-pointer"
                >
                  Pay €{typeof selectedPack.price === "number" ? selectedPack.price.toLocaleString() : selectedPack.price}
                </button>
              </form>
            )}

            {paymentState === "processing" && (
              <div className="py-12 flex flex-col items-center justify-center space-y-4">
                <div className="w-8 h-8 rounded-full border-2 border-neutral-800 border-t-white animate-spin" />
                <p className="text-xs text-neutral-400 font-mono tracking-wider">
                  AUTHORIZING FUNDS via Stripe Gateway...
                </p>
              </div>
            )}

            {paymentState === "success" && (
              <div className="py-8 flex flex-col items-center justify-center space-y-4 text-center">
                <div className="w-12 h-12 rounded-full border border-neutral-800 bg-neutral-950/50 flex items-center justify-center text-white text-lg shadow-lg">
                  ✓
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold text-white tracking-tight">Payment Successful</h4>
                  <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
                    Thank you for choosing CodeBorgo. A confirmation invoice has been sent to <strong className="text-white">{cardEmail}</strong>.
                  </p>
                </div>
                <button
                  onClick={() => setSelectedPack(null)}
                  className="px-5 py-2 border border-neutral-800 hover:bg-neutral-900 text-white text-xs font-mono rounded-lg transition-colors mt-4 cursor-pointer"
                >
                  Close Receipt
                </button>
              </div>
            )}
          </div>
        )}
      </Modal>
    </main>
  );
}
