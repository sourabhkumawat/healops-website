import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://healops.com"),
  title: {
    default: "HealOps - AI-Powered Self-Healing Incident Management Platform",
    template: "%s | HealOps",
  },
  description:
    "HealOps is the AI-powered incident management platform that turns observability logs into self-healing actions. Automate incident response, eliminate on-call hell, and let LLMs detect and fix errors automatically. Hot-patch code errors, auto-scale infrastructure, and reduce developer burnout.",
  keywords: [
    "incident management",
    "AI observability",
    "self-healing systems",
    "devops automation",
    "sre tools",
    "log analysis",
    "automated debugging",
    "autonomous operations",
    "LLM incident response",
    "hot-patch automation",
    "observability platform",
    "error detection",
    "incident automation",
    "self-healing infrastructure",
    "automated remediation",
    "on-call automation",
    "developer tools",
    "ops automation",
    "OpenTelemetry",
    "observability logs",
    "error auto-fix",
    "incident response automation",
  ],
  authors: [{ name: "HealOps Team" }],
  creator: "HealOps",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://healops.com",
    title: "HealOps - Turn Logs into Self-Healing Actions",
    description:
      "Stop spending hours analyzing error logs and waking up to 3am alerts. HealOps uses AI to automatically detect errors, generate hot-patches, and self-heal your system in real-time. Eliminate on-call hell and reduce developer burnout.",
    siteName: "HealOps",
    images: [
      {
        url: "/og-image.png", // We should ensure this image exists or is created later, but standard practice to link it
        width: 1200,
        height: 630,
        alt: "HealOps Platform Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HealOps - AI-Powered Incident Management",
    description:
      "Automate your incident response with AI-powered HealOps. Turn observability logs into self-healing actions. Hot-patch errors, auto-scale infrastructure, and eliminate on-call hell.",
    images: ["/og-image.png"],
    creator: "@healops",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "192x192" },
      { url: "/logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/logo.png",
      },
    ],
  },
  alternates: {
    canonical: "https://healops.com",
  },
  other: {
    "theme-color": "#000000",
    "format-detection": "telephone=no",
    "apple-mobile-web-app-capable": "yes",
  },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WQDNK7TP7F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WQDNK7TP7F', {
              page_path: window.location.pathname,
              send_page_view: true
            });

            // Initialize scroll tracking
            if (typeof window !== 'undefined') {
              const depths = [25, 50, 75, 100];
              const tracked = new Set();
              
              const handleScroll = () => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrollPercent = Math.round((scrollTop / docHeight) * 100);
                
                depths.forEach((depth) => {
                  if (scrollPercent >= depth && !tracked.has(depth)) {
                    tracked.add(depth);
                    gtag('event', 'scroll', {
                      event_category: 'Engagement',
                      event_label: depth + '%',
                      value: depth
                    });
                  }
                });
              };
              
              let ticking = false;
              window.addEventListener('scroll', () => {
                if (!ticking) {
                  window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                  });
                  ticking = true;
                }
              }, { passive: true });
            }
          `}
        </Script>
        
        <Navbar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
