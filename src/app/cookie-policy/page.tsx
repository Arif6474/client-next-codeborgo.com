"use client";

import Link from "next/link";
import { ArrowLeft, Cookie } from "lucide-react";

export default function CookiePolicy() {
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
            <Cookie className="w-5 h-5" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Cookie Policy
          </h1>
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
            Last updated: July 16, 2026
          </p>
        </div>

        <div className="border-t border-neutral-900 w-full" />

        {/* Policy Body */}
        <div className="space-y-8 text-neutral-400 text-xs sm:text-sm leading-relaxed text-left">
          <p>
            This policy outlines how CodeBorgo utilizes cookies and similar tracking methods on our website, in compliance with GDPR and EU ePrivacy guidelines.
          </p>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">1. What Are Cookies?</h3>
            <p>
              Cookies are small text documents stored on your computer or device when a website is loaded in a browser. They are widely used to make websites function or execute with greater efficiency, as well as to supply metrics back to site owners.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">2. Types of Cookies We Use</h3>
            <p>
              We categorize the cookies we deploy into two classes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Strictly Necessary Cookies:</strong> These cookies are critical to operate basic features of our site (e.g., maintaining preferences). They cannot be turned off and do not track personal identifying indicators.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> These cookies gather aggregated usage metrics (like unique pages visited and device screen dimensions) to help us analyze site traffic and improve performance. We only enable these cookies if you explicitly click &ldquo;Accept&rdquo; on our Cookie Banner.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">3. Managing Cookie Consent</h3>
            <p>
              When you first load our website, you are presented with a choice to accept or reject non-essential analytics cookies. You can update your choices at any time by clearing your browser cookies/local storage for this domain, which will re-trigger the visual choice banner.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">4. Contact Information</h3>
            <p>
              If you have any questions regarding our use of cookies or tracking practices, please reach out via email at <a href="mailto:info@codeborgo.com" className="text-cyan-400 hover:underline">info@codeborgo.com</a>.
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
