"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Laptop, Bot, Share2, LineChart, ChevronDown } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

interface NavbarProps {
  scrollContainerRef?: React.RefObject<HTMLDivElement | null>;
}

const CORE_CAPABILITIES = [
  {
    id: "web-development",
    title: "Web / App Development",
    pricing: "One-off projects starting at €1,000+",
    description: "High-performance Next.js websites, custom web apps & UI craftsmanship.",
    icon: Laptop,
    bgClass: "bg-purple-500/10 border-purple-500/25 text-purple-400 group-hover:bg-purple-500/20",
    hoverBorder: "hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.18)]",
  },
  {
    id: "ai-services",
    title: "AI Agent Development",
    pricing: "One-off projects starting at €1,000+",
    description: "Autonomous AI agents, custom LLM integrations & workflow automation.",
    icon: Bot,
    bgClass: "bg-emerald-500/10 border-emerald-500/25 text-emerald-400 group-hover:bg-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.18)]",
  },
  {
    id: "social-media",
    title: "Social Media Content",
    pricing: "Monthly retainer starting at €1,000+",
    description: "High-converting brand media, content creation & community growth.",
    icon: Share2,
    bgClass: "bg-amber-500/10 border-amber-500/25 text-amber-400 group-hover:bg-amber-500/20",
    hoverBorder: "hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.18)]",
  },
  {
    id: "digital-marketing",
    title: "Performance Marketing",
    pricing: "Monthly retainer starting at €1,000+",
    description: "SEO optimization, targeted paid advertising & ROI tracking.",
    icon: LineChart,
    bgClass: "bg-blue-500/10 border-blue-500/25 text-blue-400 group-hover:bg-blue-500/20",
    hoverBorder: "hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.18)]",
  },
];

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "/services", isPage: true },
  { name: "Portfolio", href: "/portfolio", isPage: true },
  { name: "Pricing", href: "/pricing", isPage: true },
];

export default function Navbar({ scrollContainerRef }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesExpanded, setIsMobileServicesExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const router = useRouter();
  const pathname = usePathname();

  const handleServicesMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsServicesHovered(true);
  };

  const handleServicesMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsServicesHovered(false);
    }, 180);
  };

  useEffect(() => {
    const container = scrollContainerRef?.current;

    if (pathname === "/portfolio") {
      setActiveSection("portfolio");
    } else if (pathname === "/pricing") {
      setActiveSection("pricing");
    } else if (pathname === "/services") {
      setActiveSection("services");
    }

    if (!container) {
      const handleWindowScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleWindowScroll);
      return () => window.removeEventListener("scroll", handleWindowScroll);
    }

    const handleScroll = () => {
      setIsScrolled(container.scrollTop > 50);
    };
    container.addEventListener("scroll", handleScroll);

    const observerOptions = {
      root: container,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && pathname === "/") {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      if (item.isPage) return;
      const id = item.href.substring(1);
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      container.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [scrollContainerRef, pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: { name: string; href: string; isPage?: boolean }
  ) => {
    e.preventDefault();

    if (item.isPage || item.href.startsWith("/")) {
      if (pathname === item.href) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push(item.href);
      }
      setIsMobileMenuOpen(false);
      return;
    }

    const id = item.href.replace(/^#/, "");

    if (pathname !== "/") {
      router.push(`/${item.href}`);
      setIsMobileMenuOpen(false);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    } else {
      router.push(`/${item.href}`);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050505]/85 border-b border-neutral-900/80 backdrop-blur-md py-4"
            : "bg-[#050505]/40 backdrop-blur-sm py-5 border-b border-neutral-900/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative">
          {/* Logo */}
          <a
            href="/#home"
            onClick={(e) => handleNavClick(e, { name: "Home", href: "#home" })}
            className="group flex flex-col cursor-pointer"
          >
            <span className="text-xl font-bold tracking-[0.2em] text-white flex items-center">
              CODE
              <span className="font-light text-neutral-400 group-hover:text-white transition-colors duration-300 mx-1.5">
                BORGO
              </span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-500 font-mono mt-0.5">
              Venezia / ITALY
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 border border-white/10 bg-neutral-950/60 rounded-full px-2 py-1.5 backdrop-blur-md relative">
            {navItems.map((item) => {
              const isActive = item.isPage
                ? pathname === item.href
                : pathname === "/" && activeSection === item.href.replace(/^#/, "");
              const itemHref = item.isPage
                ? item.href
                : pathname === "/"
                ? item.href
                : `/${item.href}`;
              const isServices = item.name === "Services";

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => isServices && handleServicesMouseEnter()}
                  onMouseLeave={() => isServices && handleServicesMouseLeave()}
                >
                  <a
                    href={itemHref}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`relative px-4 py-1.5 text-xs tracking-wider uppercase font-medium transition-colors duration-300 rounded-full flex items-center gap-1 cursor-pointer ${
                      isActive ? "text-white" : "text-neutral-400 hover:text-neutral-200"
                    }`}
                  >
                    {item.name}
                    {isServices && (
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-300 ${
                          isServicesHovered ? "rotate-180 text-white" : "text-neutral-500"
                        }`}
                      />
                    )}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-neutral-900 rounded-full -z-10 border border-neutral-800"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </div>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, { name: "Contact", href: "#contact" })}
              className="group flex items-center gap-1 px-4 py-2 border border-neutral-800 rounded-full bg-transparent text-white text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-[#050505] transition-all duration-300"
            >
              Lets Talk
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Services Mega Menu Dropdown */}
        <AnimatePresence>
          {isServicesHovered && (
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
              className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 mt-2 w-full max-w-4xl px-4 z-50 pointer-events-auto"
            >
              <div className="relative p-6 rounded-2xl bg-[#08080a]/95 border border-neutral-800/90 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.95)] overflow-hidden">
                {/* Ambient glow decoration */}
                <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-gradient-to-br from-amber-500/10 via-purple-500/5 to-transparent blur-[90px] pointer-events-none" />

                {/* Popover Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-neutral-900">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                    <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase font-mono">
                      Four Core Capabilities
                    </h3>
                  </div>

                  <a
                    href="/services"
                    onClick={(e) => {
                      handleNavClick(e, { name: "Services", href: "/services", isPage: true });
                      setIsServicesHovered(false);
                    }}
                    className="text-xs text-neutral-400 hover:text-white font-mono flex items-center gap-1 transition-colors group/link"
                  >
                    Explore All Capabilities{" "}
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* 2x2 Services Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {CORE_CAPABILITIES.map((cap) => {
                    const Icon = cap.icon;
                    return (
                      <a
                        key={cap.id}
                        href={`/services#${cap.id}`}
                        onClick={(e) => {
                          handleNavClick(e, { name: cap.title, href: `/services#${cap.id}`, isPage: true });
                          setIsServicesHovered(false);
                        }}
                        className={`group relative p-4 rounded-xl bg-neutral-950/70 border border-neutral-900/90 transition-all duration-300 flex flex-col justify-between ${cap.hoverBorder}`}
                      >
                        <div>
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3">
                              <div className={`p-2.5 rounded-lg border transition-all duration-300 ${cap.bgClass}`}>
                                <Icon className="w-5 h-5" />
                              </div>
                              <h4 className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                                {cap.title}
                              </h4>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                          </div>

                          <p className="text-xs text-neutral-400 mb-4 leading-relaxed font-normal">
                            {cap.description}
                          </p>
                        </div>

                        <div className="pt-2.5 border-t border-neutral-900/80 flex items-center justify-between">
                          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider group-hover:text-neutral-300 transition-colors">
                            {cap.pricing}
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col justify-center px-8 md:px-16 lg:hidden overflow-y-auto pt-20 pb-10"
          >
            <div className="absolute inset-0 noise-bg opacity-40 -z-10" />
            <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] rounded-full bg-white/2 blur-[100px] pointer-events-none" />

            <div className="flex flex-col space-y-5 my-auto">
              {navItems.map((item, index) => {
                const isActive = item.isPage
                  ? pathname === item.href
                  : pathname === "/" && activeSection === item.href.replace(/^#/, "");
                const itemHref = item.isPage
                  ? item.href
                  : pathname === "/"
                  ? item.href
                  : `/${item.href}`;
                const isServices = item.name === "Services";

                return (
                  <div key={item.name} className="flex flex-col space-y-3">
                    <div className="flex items-center justify-between">
                      <motion.a
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        href={itemHref}
                        onClick={(e) => handleNavClick(e, item)}
                        className="text-2xl sm:text-3xl font-bold tracking-wider uppercase text-left relative flex items-center"
                      >
                        <span
                          className={`mr-4 text-xs font-mono ${
                            isActive ? "text-white" : "text-neutral-500"
                          }`}
                        >
                          0{index + 1}.
                        </span>
                        <span
                          className={isActive ? "text-white text-glow" : "text-neutral-400"}
                        >
                          {item.name}
                        </span>
                      </motion.a>

                      {isServices && (
                        <button
                          onClick={() => setIsMobileServicesExpanded(!isMobileServicesExpanded)}
                          className="p-2 text-neutral-400 hover:text-white transition-colors"
                        >
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${
                              isMobileServicesExpanded ? "rotate-180 text-white" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile Sub-services Capabilities List */}
                    {isServices && (
                      <AnimatePresence>
                        {isMobileServicesExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-8 pr-2 grid grid-cols-1 gap-2.5 overflow-hidden"
                          >
                            {CORE_CAPABILITIES.map((cap) => {
                              const Icon = cap.icon;
                              return (
                                <a
                                  key={cap.id}
                                  href={`/services#${cap.id}`}
                                  onClick={(e) => handleNavClick(e, { name: cap.title, href: `/services#${cap.id}`, isPage: true })}
                                  className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-900 flex items-center gap-3 text-left"
                                >
                                  <div className={`p-2 rounded border ${cap.bgClass}`}>
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="text-xs font-semibold text-white">
                                      {cap.title}
                                    </div>
                                    <div className="text-[10px] font-mono text-neutral-400">
                                      {cap.pricing}
                                    </div>
                                  </div>
                                </a>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-6 border-t border-neutral-900 flex flex-col space-y-4"
              >
                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, { name: "Contact", href: "#contact" })}
                  className="w-full text-center py-4 rounded-xl border border-neutral-800 text-white font-semibold uppercase tracking-wider text-sm hover:bg-neutral-900 transition-colors"
                >
                  Lets Talk
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

