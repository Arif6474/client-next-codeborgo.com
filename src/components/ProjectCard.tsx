"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PortfolioItem } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

interface ProjectCardProps {
  project: PortfolioItem;
  variants?: any;
  hoveredId?: string | null;
  onHover?: (id: string | null) => void;
}

export default function ProjectCard({
  project,
  variants,
  hoveredId,
  onHover,
}: ProjectCardProps) {
  const { t } = useLanguage();
  const Icon = project.icon;

  const isAnyHovered = hoveredId !== null && hoveredId !== undefined;
  const isHovered = hoveredId === project.id;
  const isDimmed = isAnyHovered && !isHovered;

  const localizedDescription = t.portfolio.projectDescriptions[project.id] || project.description;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    currentTarget.style.setProperty("--mouse-x", `${x}px`);
    currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => onHover?.(project.id)}
      onMouseLeave={() => onHover?.(null)}
      data-cursor-text="VIEW CASE"
      className={`group relative rounded-3xl p-[1px] bg-neutral-900 hover:bg-neutral-800 overflow-hidden shrink-0 flex flex-col justify-between transition-all duration-500 ease-in-out ${
        isDimmed
          ? "opacity-20 scale-[0.96] blur-[4px] filter grayscale-[40%]"
          : "opacity-100 scale-100 z-10"
      } ${isHovered ? "z-30 scale-[1.04] shadow-[0_25px_60px_rgba(0,0,0,0.95)] ring-2 ring-amber-400/50" : ""}`}
    >
      {/* Border spotlight effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 bg-[radial-gradient(400px_circle_at_var(--mouse-x,-400px)_var(--mouse-y,-400px),rgba(255,255,255,0.18),transparent_80%)]" />

      <div
        className={`relative h-full flex flex-col rounded-[23px] bg-[#070707] overflow-hidden z-10 border shadow-2xl transition-all duration-500 ease-in-out ${
          isHovered
            ? "border-amber-400/40 bg-[#09090d]"
            : "border-neutral-900/60 group-hover:border-neutral-800/80"
        }`}
      >
        {/* Inner spotlight */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
          style={{
            backgroundImage: `radial-gradient(400px circle at var(--mouse-x, -400px) var(--mouse-y, -400px), rgba(255,255,255,0.03), transparent 80%)`,
          }}
        />

        {/* Image Header Area */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-black/25 to-transparent opacity-90" />

          {/* Number & Category Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold text-white tracking-widest">
              {project.number}
            </span>
            <span className="px-2.5 py-1 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-[8px] font-mono text-neutral-300 uppercase tracking-widest">
              {project.tag}
            </span>
          </div>

          {/* Icon */}
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white">
            <Icon className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-6 sm:p-7 flex flex-col flex-1 relative z-20 justify-between space-y-5">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-amber-200 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-normal">
              {localizedDescription}
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-1 mt-auto">
            {project.liveLink ? (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative flex items-center justify-center w-full gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 transition-all duration-300 text-xs font-bold uppercase tracking-[0.12em] rounded-xl text-white shadow-sm overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  {t.portfolio.visitLive}
                </span>
              </a>
            ) : (
              <div className="h-[42px] w-full border border-dashed border-neutral-800 rounded-xl flex items-center justify-center">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">{t.portfolio.conceptBuild}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

