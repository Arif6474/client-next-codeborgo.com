"use client";

import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 md:px-12 py-24 relative overflow-hidden flex flex-col justify-start">
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-white/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-3xl mx-auto w-full relative z-10 space-y-12">
        {/* Header Back Button */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-450 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* Title Block */}
        <div className="space-y-4">
          <div className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-950 flex items-center justify-center text-cyan-400">
            <Scale className="w-5 h-5" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Terms of Service
          </h1>
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
            Last updated: July 16, 2026
          </p>
        </div>

        <div className="border-t border-neutral-900 w-full" />

        {/* Policy Body */}
        <div className="space-y-8 text-neutral-400 text-xs sm:text-sm leading-relaxed text-left">
          <p>
            By accessing or using the CodeBorgo website or services, you agree to comply with and be bound by the following terms.
          </p>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">1. Scope of Services</h3>
            <p>
              CodeBorgo provides bespoke web development, design, and AI automation consulting. Detailed scopes, deliverables, timelines, and payment structures are explicitly agreed upon in writing through individual service agreements before work begins.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">2. Intellectual Property & Code Ownership</h3>
            <p>
              Unless otherwise specified in a signed service agreement, clients retain 100% ownership of the final codebase, assets, and custom logic delivered by CodeBorgo upon full payment of all agreed-upon project invoices.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">3. Client Input & Cooperation</h3>
            <p>
              To ensure on-time delivery, clients must cooperate in good faith and supply timely approvals, credentials, and digital assets. CodeBorgo is not responsible for project delays caused by a lack of client feedback or late inputs.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">4. Governing Law</h3>
            <p>
              These terms are governed by and construed in accordance with the laws of Italy. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Venice, Italy.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">5. Contact</h3>
            <p>
              For inquiries regarding our Terms of Service, please contact us at <a href="mailto:info@codeborgo.com" className="text-cyan-400 hover:underline">info@codeborgo.com</a>.
            </p>
          </div>
        </div>

        <div className="border-t border-neutral-900 w-full" />

        <div className="text-[10px] font-mono text-neutral-500">
          © {new Date().getFullYear()} CodeBorgo. All Rights Reserved.
        </div>
      </div>
    </main>
  );
}
