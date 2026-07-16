import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "../components/ui/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeBorgo — Web Development & AI Agency in Venice, Italy",
  description: "CodeBorgo is a Venice-based digital studio building high-performance websites, custom AI agents, and ROI-driven marketing systems for ambitious brands and startups. Book a free consultation.",
  keywords: ["web development Venice", "digital agency Italy", "Next.js development", "AI chatbot development", "SEO agency", "custom web design"],
  alternates: {
    canonical: "https://codeborgo.com/",
  },
  openGraph: {
    type: "website",
    title: "CodeBorgo — Web Development & AI Agency in Venice, Italy",
    description: "High-performance websites, custom AI agents, and marketing systems built with Italian craftsmanship. Book a free consultation.",
    images: [
      {
        url: "https://codeborgo.com/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "CodeBorgo — Web Development & AI Agency",
      },
    ],
    url: "https://codeborgo.com/",
    siteName: "CodeBorgo",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeBorgo — Web Development & AI Agency in Venice, Italy",
    description: "High-performance websites, custom AI agents, and marketing systems built with Italian craftsmanship.",
    images: ["https://codeborgo.com/images/og-cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "CodeBorgo",
              "image": "https://codeborgo.com/images/og-cover.png",
              "url": "https://codeborgo.com",
              "email": "info@codeborgo.com",
              "telephone": "+39 351 225 5725",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Gaspare Gozzi, 53",
                "addressLocality": "Mestre, Venezia",
                "postalCode": "30171",
                "addressCountry": "IT"
              },
              "areaServed": "Worldwide",
              "description": "Venice-based digital studio building high-performance websites, AI agents, and marketing systems."
            }),
          }}
        />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
