"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowLeft, Search } from "lucide-react";
import { portfolioList } from "../../data/portfolioData";
import CustomCursor from "../../components/ui/CustomCursor";
import NoiseBg from "../../components/ui/NoiseBg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectCard from "../../components/ProjectCard";

const categories = [
  "All",
  "Event Ticketing",
  "Fine Dining",
  "B2B & Staffing",
  "Consultancy & B2B",
  "E-Commerce",
  "AI Systems",
  "SaaS & Web Dev",
  "Digital Marketing",
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const filteredProjects = portfolioList.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="relative min-h-screen w-full bg-[#050505] text-white overflow-x-hidden pt-20">
      <CustomCursor />
      <NoiseBg />
      <Navbar />

      {/* Page Hero Header */}
      <section className="relative px-6 md:px-12 pt-12 pb-12 z-10 max-w-7xl mx-auto text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase font-sans">
          ALL PROJECTS & <br />
          <span className="bg-gradient-to-r from-amber-200 via-white to-cyan-300 bg-clip-text text-transparent">
            CONCEPT BUILDS.
          </span>
        </h1>

        <p className="text-sm md:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Explore our complete archive of production platforms, customer bots, custom SaaS dashboards, and luxury e-commerce concepts built with Italian craft & Next.js architecture.
        </p>

        {/* Search & Filter Bar */}
        <div className="pt-6 max-w-4xl mx-auto space-y-6">
          {/* Search Box */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, tech stack (e.g. Next.js, Claude API)..."
              className="w-full pl-11 pr-4 py-3 text-xs font-mono rounded-xl border border-neutral-800 bg-neutral-950/80 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-700"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-white text-black font-semibold border border-white"
                    : "bg-neutral-950/60 border border-neutral-850 text-neutral-400 hover:text-white hover:border-neutral-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid using shared ProjectCard */}
      <section className="relative px-6 md:px-12 pb-24 z-10 max-w-7xl mx-auto">
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center space-y-3">
            <p className="text-sm font-mono text-neutral-400">No projects found matching your search criteria.</p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="text-xs font-mono text-amber-300 underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            onMouseLeave={() => setHoveredProjectId(null)}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  hoveredId={hoveredProjectId}
                  onHover={setHoveredProjectId}
                />
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}

