"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#050505] border-t border-neutral-900/60 py-12 md:py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <span className="text-sm font-bold tracking-[0.2em] text-white">
              STUDIO<span className="font-light text-neutral-450 text-neutral-400">WEB</span>DIGITAL
            </span>
            <p className="text-[11px] text-neutral-500 leading-relaxed max-w-xs">
              Premium digital solutions for ambitious brands in Italy and beyond. Delivering performance engineering and bespoke design layouts.
            </p>
          </div>

          {/* Links Column */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
              NAVIGATION
            </h4>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-500">
              <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="hover:text-white transition-colors">Home</a>
              <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="hover:text-white transition-colors">About</a>
              <a href="#features" onClick={(e) => handleNavClick(e, "#features")} className="hover:text-white transition-colors">Features</a>
              <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-white transition-colors">Services</a>
              <a href="#portfolio" onClick={(e) => handleNavClick(e, "#portfolio")} className="hover:text-white transition-colors">Portfolio</a>
              <a href="#pricing" onClick={(e) => handleNavClick(e, "#pricing")} className="hover:text-white transition-colors">Pricing</a>
              <a href="#faq" onClick={(e) => handleNavClick(e, "#faq")} className="hover:text-white transition-colors">FAQ</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Location Column */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
              VENEZIA OFFICE
            </h4>
            <p className="text-[11px] text-neutral-500 leading-relaxed">
              Gaspare Gozzi, 53 <br />
              30171 Mestre (VE) <br />
              Venezia, Italy
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
              DIRECT CHANNELS
            </h4>
            <p className="text-[11px] text-neutral-500 leading-relaxed font-mono">
              <a href="mailto:hello@studiowebdigital.it" className="hover:text-white transition-colors">hello@studiowebdigital.it</a> <br />
              <a href="tel:+393512255725" className="hover:text-white transition-colors">+39 351 225 5725</a>
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-900/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-neutral-550 text-neutral-500 font-mono">
          <p>&copy; {new Date().getFullYear()} StudioWebDigital. All rights reserved. Located in Mestre, Venezia, Italy.</p>
          
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
