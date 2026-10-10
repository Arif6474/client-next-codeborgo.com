"use client";

import { useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { Sparkles, Check, ArrowRight } from "lucide-react";
import Modal from "./ui/Modal";
import { ScrollContext } from "../app/page";

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
    desc: "Complete aesthetic storefronts & custom web architectures.",
    features: [
      "Custom Next.js & React Frontend",
      "Figma Design & Wireframing",
      "SEO Infrastructure & Web Vitals Audit",
      "Full Mobile & Tablet Responsive",
      "30-Day Post-Launch Support SLA"
    ],
  },
  {
    id: "Venezia-premium",
    badge: "SCALE & GROWTH",
    name: "Venezia Signature",
    price: 2500,
    desc: "Bespoke digital architectures & custom AI agent automations.",
    features: [
      "Everything in Studio MVP",
      "Custom AI Agent & Chatbot Setup",
      "Interactive Animations & Kinetic Layouts",
      "Headless E-Commerce & CMS Setup",
      "CI/CD Pipeline & Cloud Deployment",
      "90-Day Post-Launch Support SLA"
    ],
    isPopular: true,
  },
  {
    id: "enterprise-suite",
    badge: "ENTERPRISE ECOSYSTEM",
    name: "Enterprise Architecture",
    price: "5,000+",
    desc: "Full digital engineering partner for ambitious global products.",
    features: [
      "Unlimited Multi-Tenant SaaS Codebase",
      "Custom LLM Fine-Tuning Workflows",
      "Advanced BI & Visual Dashboards",
      "Dedicated DevOps Cloud Infrastructure",
      "Regular Security & Vulnerability Audits",
      "12 Months Dedicated SLA Support"
    ],
  },
];

export default function Pricing() {
  const router = useRouter();
  const [selectedPack, setSelectedPack] = useState<Package | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>("Venezia-premium");
  const [paymentState, setPaymentState] = useState<"idle" | "processing" | "success">("idle");
  const scrollContainerRef = useContext(ScrollContext);

  const [dots] = useState<{ id: number; size: number; x: number; y: number; duration: number }[]>(() =>
    [...Array(12)].map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      duration: 12 + Math.random() * 10,
    }))
  );

  const [cardName, setCardName] = useState("");
  const [cardEmail, setCardEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleCtaClick = (pack: Package | 'enterprise-suite') => {
    if (pack === "enterprise-suite") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/#contact");
      }
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

  const handleClosePayment = () => {
    setSelectedPack(null);
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

  const containerVariants: Variants = {
    hidden: { opacity: 0.8 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0.5, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 18 } },
  };

  return (
    <section
      id="pricing"
      className="scroll-section relative px-6 md:px-12 py-24 z-10 w-full overflow-hidden border-t border-neutral-900 bg-[#050505]"
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

      <div className="max-w-7xl mx-auto w-full flex flex-col gap-16 relative z-10">

        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollContainerRef || undefined, once: true, amount: 0.4 }}
          className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-950/80 text-xs font-mono tracking-widest text-neutral-400 uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Interactive Pricing Panels
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight uppercase"
          >
            TRANSPARENT <br />
            <span className="bg-gradient-to-r from-cyan-200 via-white to-amber-200 bg-clip-text text-transparent">
              INVESTMENT SCOPE.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-neutral-400 leading-relaxed font-normal"
          >
            Fixed pricing with zero surprise invoices. Select or hover a package panel to view deliverables.
          </motion.p>
        </motion.div>

        {/* Interactive Expandable Panels */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollContainerRef || undefined, once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch max-w-6xl mx-auto w-full"
        >
          {packages.map((pack) => {
            const isHovered = hoveredId === pack.id;
            const isPopular = pack.isPopular;

            return (
              <motion.div
                key={pack.id}
                variants={itemVariants}
                data-cursor-text="SELECT"
                onMouseEnter={() => setHoveredId(pack.id)}
                animate={{
                  scale: isHovered ? 1.03 : 0.98,
                  opacity: isHovered ? 1 : 0.8,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className={`relative rounded-3xl p-6 md:p-8 border backdrop-blur-md flex flex-col justify-between transition-colors duration-300 cursor-pointer ${
                  isHovered
                    ? "border-amber-300/60 bg-neutral-900/90 shadow-[0_0_40px_rgba(251,191,36,0.15)] z-20"
                    : "border-neutral-800 bg-neutral-950/70 z-10"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full border border-amber-300/40 bg-amber-400/10 backdrop-blur-md text-[10px] font-mono font-bold tracking-widest text-amber-300 uppercase">
                    ★ Recommended
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
                    onClick={() => handleCtaClick('enterprise-suite')}
                    className={`w-full py-3.5 px-4 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      isHovered
                        ? "bg-white text-black hover:bg-neutral-200"
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
        </motion.div>

        {/* View Full Pricing & Comparison Link */}
        <div className="flex justify-center pt-2">
          <Link
            href="/pricing"
            data-cursor-text="PRICING"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-neutral-700 bg-neutral-900/90 hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-xl hover:border-amber-300/50 hover:shadow-[0_0_35px_rgba(251,191,36,0.15)] cursor-pointer"
          >
            <span>View Full Deliverables & Comparison</span>
            <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Stripe Payment Portal Modal */}
      <Modal
        isOpen={selectedPack !== null}
        onClose={handleClosePayment}
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
                  onClick={handleClosePayment}
                  className="px-5 py-2 border border-neutral-800 hover:bg-neutral-900 text-white text-xs font-mono rounded-lg transition-colors mt-4 cursor-pointer"
                >
                  Close Receipt
                </button>
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
}
