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
    default: "HealOps - Modern Incident Management & AI Observability",
    template: "%s | HealOps",
  },
  description:
    "HealOps is the AI-powered incident management platform that turns observability logs into self-healing actions for high-velocity engineering teams.",
  keywords: [
    "incident management",
    "AI observability",
    "self-healing systems",
    "devops automation",
    "sre tools",
    "log analysis",
    "automated debugging",
  ],
  authors: [{ name: "HealOps Team" }],
  creator: "HealOps",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://healops.com",
    title: "HealOps - Turn Logs into Self-Healing Actions",
    description:
      "Stop spending hours analyzing error logs. HealOps automatically detects errors and self-heals your system.",
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
      "Automate your incident response with HealOps. Turn observability logs into self-healing actions.",
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
    icon: "/favicon.ico",
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

            gtag('config', 'G-WQDNK7TP7F');
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
