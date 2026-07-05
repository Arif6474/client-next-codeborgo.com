"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, DollarSign, Check, HelpCircle } from "lucide-react";
import Modal from "./ui/Modal";

interface Package {
  id: string;
  name: string;
  price: number | string;
  desc: string;
  features: string[];
  isPopular?: boolean;
}

const packages: Package[] = [
  {
    id: "quick-start",
    name: "Quick Start",
    price: 99,
    desc: "Perfect for establishing a basic brand baseline.",
    features: ["Professional Logo Design", "5 Social Media Posts", "Email Newsletter Template", "Free Consultation (30min)"],
  },
  {
    id: "micro-business",
    name: "Micro Business",
    price: 799,
    desc: "Built for launch-ready startups.",
    features: ["Conversion Landing Page", "Basic SEO Foundations", "20 Social Media Posts", "2 Months SLA Support"],
  },
  {
    id: "starter",
    name: "Starter Pack",
    price: 2500,
    desc: "Complete custom website deployment.",
    features: ["Website Design & Build", "SEO Content Infrastructure", "Full Mobile Responsive", "1 Month SLA Support"],
  },
  {
    id: "professional",
    name: "Professional",
    price: 5999,
    desc: "Bespoke digital architecture for scaling brands.",
    features: ["Custom Next.js Development", "Growth Marketing Strategy", "Social Media Identity Setup", "Custom AI Chatbot Integration", "3 Months SLA Support"],
    isPopular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "12,000+",
    desc: "Full technical suite for complex organizations.",
    features: ["Full-Stack App Development", "Omnichannel Marketing Campaigns", "Custom LLM Agents Workflows", "Dedicated Support Manager", "12 Months SLA Support"],
  },
];

export default function Pricing() {
  const [selectedPack, setSelectedPack] = useState<Package | null>(null);
  const [paymentState, setPaymentState] = useState<"idle" | "processing" | "success">("idle");
  
  // Payment Form States
  const [cardName, setCardName] = useState("");
  const [cardEmail, setCardEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleCtaClick = (pack: Package) => {
    if (pack.id === "enterprise") {
      // Direct scroll to contact
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setSelectedPack(pack);
      setPaymentState("idle");
      // Reset fields
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

  // Card formatting helpers
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, "").replace(/\D/g, "");
    const formatted = value.match(/.{1,4}/g)?.join(" ") || value;
    setCardNumber(formatted.slice(0, 19)); // 16 digits + 3 spaces
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

    // Simulate Stripe payment gateway latency
    setTimeout(() => {
      setPaymentState("success");
    }, 2000);
  };

  return (
    <section
      id="pricing"
      className="scroll-section px-6 md:px-12 py-24 z-10 w-full overflow-hidden border-t border-neutral-950 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-between my-auto">
        
        {/* Header */}
        <div className="text-left max-w-xl space-y-4 mb-14">
          <p className="text-[10px] tracking-[0.2em] font-mono text-neutral-500 uppercase flex items-center gap-2">
            <DollarSign className="w-3.5 h-3.5" />
            CLEAR INVESTMENT
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Service <span className="font-light text-neutral-400 text-glow">Packages.</span>
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Choose a structured scope to elevate your brand. All rates represent transparent standard prices.
          </p>
        </div>

        {/* Pricing Cards Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 items-stretch">
          {packages.map((pack) => {
            return (
              <div
                key={pack.id}
                className={`relative flex flex-col p-6 rounded-2xl border text-left transition-all duration-300 glow-sm ${
                  pack.isPopular
                    ? "border-neutral-700 bg-neutral-950/65 shadow-lg shadow-white/[0.01]"
                    : "border-neutral-900 bg-neutral-950/20"
                }`}
              >
                {pack.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full border border-neutral-700 bg-[#0c0c0c] text-[8px] font-bold tracking-widest text-white uppercase">
                    MOST POPULAR
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-sm font-bold text-white tracking-tight uppercase">
                    {pack.name}
                  </h3>
                  <p className="text-[10px] text-neutral-500 mt-1 leading-normal">
                    {pack.desc}
                  </p>
                </div>

                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-2xl font-black text-white tracking-tight">
                    {typeof pack.price === "number" ? `€${pack.price.toLocaleString()}` : pack.price}
                  </span>
                  {typeof pack.price === "number" && (
                    <span className="text-[10px] font-mono text-neutral-500">/one-time</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1 border-t border-neutral-900/60 pt-6">
                  {pack.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-[11px] text-neutral-450 leading-snug text-neutral-400">
                      <Check className="w-3.5 h-3.5 text-neutral-500 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleCtaClick(pack)}
                  className={`w-full py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                    pack.isPopular
                      ? "bg-white text-[#050505] hover:bg-neutral-250 hover:bg-neutral-200"
                      : "border border-neutral-850 hover:border-neutral-750 text-white bg-transparent hover:bg-neutral-900/20"
                  }`}
                >
                  {pack.id === "enterprise" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {/* Stripe Payment Portal Modal */}
      <Modal
        isOpen={selectedPack !== null}
        onClose={handleClosePayment}
        title={selectedPack ? `Billing - ${selectedPack.name}` : ""}
        subtitle="Stripe Secure Gateway"
      >
        {selectedPack && (
          <div className="space-y-6">
            
            {/* Amount details */}
            <div className="p-4 rounded-xl border border-neutral-900 bg-neutral-950/40 flex justify-between items-center text-left">
              <div>
                <p className="text-xs font-bold text-white">{selectedPack.name} Package</p>
                <p className="text-[10px] text-neutral-500">Standard single-payment invoice</p>
              </div>
              <span className="text-lg font-bold text-white font-mono">
                €{typeof selectedPack.price === "number" ? selectedPack.price.toLocaleString() : selectedPack.price}
              </span>
            </div>

            {/* Payment States Handler */}
            {paymentState === "idle" && (
              <form onSubmit={handlePaymentSubmit} className="space-y-4">
                
                {/* Full name */}
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
                    className="w-full px-3 py-2 text-xs border border-neutral-900 rounded-lg bg-neutral-950/50 text-white focus:outline-none focus:border-neutral-750 focus:ring-1 focus:ring-neutral-750"
                  />
                  {errors.cardName && <span className="text-[9px] font-mono text-red-500">{errors.cardName}</span>}
                </div>

                {/* Email Address */}
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
                    className="w-full px-3 py-2 text-xs border border-neutral-900 rounded-lg bg-neutral-950/50 text-white focus:outline-none focus:border-neutral-750 focus:ring-1 focus:ring-neutral-750"
                  />
                  {errors.cardEmail && <span className="text-[9px] font-mono text-red-500">{errors.cardEmail}</span>}
                </div>

                {/* Card Number */}
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
                    className="w-full px-3 py-2 text-xs border border-neutral-900 rounded-lg bg-neutral-950/50 text-white font-mono focus:outline-none focus:border-neutral-750 focus:ring-1 focus:ring-neutral-750"
                  />
                  {errors.cardNumber && <span className="text-[9px] font-mono text-red-500">{errors.cardNumber}</span>}
                </div>

                {/* Expiry and CVC grid */}
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
                      className="w-full px-3 py-2 text-xs border border-neutral-900 rounded-lg bg-neutral-950/50 text-white font-mono focus:outline-none focus:border-neutral-750 focus:ring-1 focus:ring-neutral-750"
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
                      className="w-full px-3 py-2 text-xs border border-neutral-900 rounded-lg bg-neutral-950/50 text-white font-mono focus:outline-none focus:border-neutral-750 focus:ring-1 focus:ring-neutral-750"
                    />
                    {errors.cardCvc && <span className="text-[9px] font-mono text-red-500">{errors.cardCvc}</span>}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-white text-[#050505] hover:bg-neutral-200 transition-colors text-xs font-semibold uppercase tracking-wider rounded-lg shadow-md mt-6"
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
                    Thank you for choosing StudioWebDigital. An confirmation invoice has been sent to <strong className="text-white">{cardEmail}</strong>. Our director will call you within 24 business hours to kick off your project.
                  </p>
                </div>
                <button
                  onClick={handleClosePayment}
                  className="px-5 py-2 border border-neutral-800 hover:bg-neutral-900 text-white text-xs font-mono rounded-lg transition-colors mt-4"
                >
                  Close Receipt
                </button>
              </div>
            )}

            <div className="text-center text-[10px] text-neutral-500 font-mono flex items-center justify-center gap-1.5 pt-2 border-t border-neutral-900/60">
              <span>🔒 SSL Encrypted Checkout</span>
            </div>

          </div>
        )}
      </Modal>
    </section>
  );
}
