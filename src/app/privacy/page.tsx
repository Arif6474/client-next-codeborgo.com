"use client";

import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 md:px-12 py-24 relative overflow-hidden flex flex-col justify-start">
      {/* Background drift blur */}
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
            <Shield className="w-5 h-5" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
            Last updated: July 16, 2026
          </p>
        </div>

        <div className="border-t border-neutral-900 w-full" />

        {/* Policy Body */}
        <div className="space-y-8 text-neutral-400 text-xs sm:text-sm leading-relaxed text-left">
          <p>
            CodeBorgo (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This policy explains what personal data we collect and how we use it, in line with the EU General Data Protection Regulation (GDPR).
          </p>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">1. Who We Are</h3>
            <p>
              CodeBorgo, Gaspare Gozzi 53, 30171 Mestre, Venezia, Italy. <br />
              Contact Email: <a href="mailto:info@codeborgo.com" className="text-cyan-400 hover:underline">info@codeborgo.com</a>. <br />
              VAT ID (P.IVA): IT01234567890.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">2. What Data We Collect</h3>
            <p>
              When you submit our contact form, we collect your name, email address, company name (optional), and the details of your message. If analytics cookies are enabled, we also collect anonymized usage data (pages visited, device type, approximate region) to help improve our site performance.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">3. Why We Collect It</h3>
            <p>
              We process this data to respond to your inquiry and provide the services you request (legal basis: your consent and our legitimate interest in replying to you), and to understand and improve our website performance (legal basis: consent, via the cookie consent banner).
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">4. How Long We Retain Data</h3>
            <p>
              Contact inquiries are kept for up to 24 months unless you request us to delete them sooner. Anonymized web analytics data is retained in accordance with our provider&apos;s standard retention periods.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">5. Sharing Your Data</h3>
            <p>
              We do not sell or trade your personal data. We utilize trusted cloud providers and systems (e.g., our email provider and hosting service) to securely run our website and communication channels. Each processor is contractually bound to safeguard your details.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">6. Your Rights Under GDPR</h3>
            <p>
              Under the GDPR, you have the right to request access to, correction of, or deletion of your personal data, object to processing, or withdraw consent at any time. Simply email <a href="mailto:info@codeborgo.com" className="text-cyan-400 hover:underline">info@codeborgo.com</a>, and we will process your request within 30 days.
            </p>
            <p>
              You also reserve the right to log a complaint with your local regulatory authority, such as the Italian Data Protection Authority (Garante per la protezione dei dati personali).
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">7. Cookies</h3>
            <p>
              See our <Link href="/cookie-policy" className="text-cyan-400 hover:underline">Cookie Policy</Link> for detailed info and to change or revoke your cookie choices.
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
