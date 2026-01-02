import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});

export const metadata: Metadata = {
    metadataBase: new URL('https://healops.com'),
    title: {
        default: 'HealOps - The AI Agent for Production Self-Healing & QA',
        template: '%s | HealOps'
    },
    description:
        'HealOps is an agentic framework that monitors your production 24/7, identifies bugs from observability logs, and automatically applies code fixes via pull requests. Your always-on QA engineer.',
    keywords: [
        'AI Agent',
        'Agentic Framework',
        'Self-Healing Infrastructure',
        'Production QA',
        'Automated Bug Fixing',
        'Reduce Churn',
        'Observability Agent',
        'DevOps Automation',
        'Startup Reliability'
    ],
    authors: [{ name: 'HealOps Team' }],
    creator: 'HealOps',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://healops.com',
        title: 'HealOps - The AI Agent That Fixes Your Production',
        description:
            'HealOps works 24/7 to monitor logs, detect bugs, and raise PRs to fix them. The agentic framework that ensures 99.9% uptime while you sleep.',
        siteName: 'HealOps',
        images: [
            {
                url: '/og-image.png', // We should ensure this image exists or is created later, but standard practice to link it
                width: 1200,
                height: 630,
                alt: 'HealOps Agentic Framework'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'HealOps - Your 24/7 AI Production Engineer',
        description:
            'Meet the agent that heals your code. HealOps monitors observability logs and automatically fixes bugs in production.',
        images: ['/og-image.png'],
        creator: '@healops'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/logo.png', type: 'image/png' }
        ],
        apple: [{ url: '/logo.png' }]
    }
};

import Script from 'next/script';

export default function RootLayout({
    children
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

                {/* Microsoft Clarity */}
                <Script id="microsoft-clarity" strategy="afterInteractive">
                    {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "upbm3oya25");
          `}
                </Script>

                <Navbar />
                <main className="flex-1 pt-16">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
