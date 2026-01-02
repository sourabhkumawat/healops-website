'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BackgroundParticles } from '@/components/ui/background-particles';
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/animations/fade-in';
import {
    ArrowRight,
    Activity,
    Shield,
    Zap,
    Check,
    X,
    Bot,
    GitPullRequest,
    Code2,
    Cpu
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { trackCTA, trackKeyEvent } from '@/lib/analytics';
import Link from 'next/link';
import { IntegrationsSection } from '@/components/landing/integrations';
import { FAQSection } from '@/components/landing/faq';
import { CTASection } from '@/components/landing/cta';
import { LogTerminal } from '@/components/landing/log-terminal';

export default function Home() {
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        // Force animation reset on mount
        const timer = setTimeout(() => setAnimationKey((prev) => prev + 1), 100);
        return () => clearTimeout(timer);
    }, []);

    const baseUrl = 'https://healops.com';

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'HealOps',
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        sameAs: [],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Sales',
            url: `${baseUrl}/contact`,
        },
        description: 'AI-powered incident management platform that turns observability logs into self-healing actions.',
    };

    return (
        <div className="flex flex-col gap-0 pb-20 relative overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: 'HealOps',
                        applicationCategory: 'DeveloperApplication',
                        operatingSystem: 'Cloud',
                        offers: {
                            '@type': 'Offer',
                            price: '0',
                            priceCurrency: 'USD',
                            availability: 'https://schema.org/InStock',
                            url: 'https://healops.com/pricing'
                        },
                        description: 'HealOps is an AI-powered incident management platform that turns observability logs into self-healing actions.',
                        aggregateRating: {
                            '@type': 'AggregateRating',
                            ratingValue: '4.9',
                            ratingCount: '150'
                        },
                        featureList: [
                            'AI-powered error detection',
                            'Automated hot-patch generation',
                            'Self-healing infrastructure',
                            'Real-time log analysis',
                        ],
                        screenshot: `${baseUrl}/og-image.png`,
                        applicationSubCategory: 'DevOps Tools',
                        softwareVersion: '2.0',
                        releaseNotes: `${baseUrl}/blog`
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />

            <BackgroundParticles />

            {/* Hero Section */}
            <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Hero Content */}
                        <div className="flex-1 text-center lg:text-left space-y-8">
                             <FadeIn key={`text-${animationKey}`} delay={0.1}>
                                <Badge
                                    variant="outline"
                                    className="px-4 py-1.5 text-sm border-primary/50 text-primary bg-primary/10 rounded-full mb-6"
                                >
                                    <Bot className="w-3 h-3 mr-2" />
                                    HealOps Agent v2.0
                                </Badge>
                                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white text-balance leading-tight">
                                    Your 24/7 <span className="text-primary">AI Site Reliability Engineer</span>.
                                </h1>
                                <p className="text-xl text-muted-foreground max-w-[600px] text-balance mx-auto lg:mx-0">
                                    Stop waking up at 3 AM. HealOps acts as an autonomous agent that monitors logs, detects bugs, and opens Pull Requests to fix them before customers notice.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start pt-4">
                                    <Button
                                        size="lg"
                                        className="text-lg px-8 rounded-full h-12 font-semibold shadow-[0_0_20px_rgba(46,204,113,0.3)] hover:shadow-[0_0_30px_rgba(46,204,113,0.5)] transition-all duration-300"
                                        asChild
                                    >
                                        <a
                                            href="https://calendly.com/sourabhkumawat0105/lets-talk-self-healing"
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={() => {
                                                trackCTA('Book a Demo', 'Hero Section');
                                                trackKeyEvent('book_demo_clicked');
                                            }}
                                        >
                                            Book a Demo
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </a>
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="text-lg px-8 rounded-full h-12 font-semibold border-white/20 hover:bg-white/5"
                                        asChild
                                    >
                                        <Link href="/docs">
                                            How it Works
                                        </Link>
                                    </Button>
                                </div>
                             </FadeIn>
                        </div>

                        {/* Hero Visual - Agent Terminal */}
                        <div className="flex-1 w-full max-w-xl lg:max-w-none perspective-1000">
                             <FadeIn key={`visual-${animationKey}`} delay={0.3}>
                                <div className="relative transform transition-all duration-500 hover:scale-[1.02]">
                                    {/* Glow Effect */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-green-500 to-blue-600 rounded-2xl blur opacity-20 animate-pulse" />
                                    <LogTerminal />
                                </div>
                             </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By - Social Proof */}
            <section className="border-y border-white/5 bg-white/[0.02]">
                <div className="container py-10 px-4">
                    <p className="text-center text-sm font-semibold text-muted-foreground tracking-widest mb-8 uppercase">
                        Trusted by High-Velocity Engineering Teams
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                         <div className="text-2xl font-bold font-sans tracking-tight flex items-center gap-2"><Cpu className="w-6 h-6" /> TECHFLOW</div>
                         <div className="text-2xl font-bold font-serif italic flex items-center gap-2"><Activity className="w-6 h-6" /> Velocis</div>
                         <div className="text-2xl font-black font-mono flex items-center gap-2"><Code2 className="w-6 h-6" /> STACK<span className="text-primary">MIND</span></div>
                         <div className="text-2xl font-bold tracking-widest flex items-center gap-2"><Zap className="w-6 h-6" /> NEXUS</div>
                    </div>
                </div>
            </section>

            {/* Product Benefits */}
            <section className="container px-4 md:px-6 relative z-10 py-24">
                <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FadeInItem>
                        <Card className="bg-card/50 border-border/50 backdrop-blur-sm h-full hover:border-primary/50 transition-colors group">
                            <CardHeader>
                                <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-black transition-colors">
                                    <Bot className="h-6 w-6" />
                                </div>
                                <CardTitle>24/7 Autonomous QA</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    An agent that watches your production environment day and night.
                                    It catches bugs before they churn your customers, ensuring
                                    reliability even when you&apos;re asleep.
                                </p>
                            </CardContent>
                        </Card>
                    </FadeInItem>
                    <FadeInItem>
                        <Card className="bg-card/50 border-border/50 backdrop-blur-sm h-full hover:border-primary/50 transition-colors group">
                            <CardHeader>
                                <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-black transition-colors">
                                    <GitPullRequest className="h-6 w-6" />
                                </div>
                                <CardTitle>Auto-Fix Pull Requests</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    HealOps doesn&apos;t just alert you; it acts. The agent reads
                                    the logs, understands the code context, and opens a PR
                                    with the fix, ready for your review.
                                </p>
                            </CardContent>
                        </Card>
                    </FadeInItem>
                    <FadeInItem>
                        <Card className="bg-card/50 border-border/50 backdrop-blur-sm h-full hover:border-primary/50 transition-colors group">
                            <CardHeader>
                                <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-black transition-colors">
                                    <Shield className="h-6 w-6" />
                                </div>
                                <CardTitle>Reduce Churn Rate</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Bugs kill trust. For fast-paced startups, HealOps is the
                                    safety net that keeps your product working perfectly,
                                    ensuring small bugs don&apos;t lose you big clients.
                                </p>
                            </CardContent>
                        </Card>
                    </FadeInItem>
                </FadeInStagger>
            </section>

            {/* Integrations Section */}
            <IntegrationsSection />

            {/* Comparison Section */}
            <section className="container px-4 md:px-6 relative z-10 pb-24">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">
                            Legacy Monitoring vs. Agentic Framework
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            See why forward-thinking companies are switching from passive dashboards to active agents.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
                         {/* Old Way */}
                         <Card className="bg-card/30 border-border/30 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-xl text-muted-foreground">Legacy Tools</CardTitle>
                                <p className="text-sm text-muted-foreground">Datadog, New Relic, etc.</p>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-muted-foreground/80">
                                        <X className="h-5 w-5 text-red-500/70" />
                                        <span>Passive monitoring only</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-muted-foreground/80">
                                        <X className="h-5 w-5 text-red-500/70" />
                                        <span>Floods you with alerts</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-muted-foreground/80">
                                        <X className="h-5 w-5 text-red-500/70" />
                                        <span>Manual debugging required</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-muted-foreground/80">
                                        <X className="h-5 w-5 text-red-500/70" />
                                        <span>Downtime while you sleep</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* New Way - HealOps */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-blue-500/50 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
                            <Card className="relative bg-[#0F0F0F] border-primary/30 shadow-2xl overflow-hidden">
                                 <div className="absolute top-0 right-0 p-3 bg-primary text-black text-xs font-bold rounded-bl-xl z-20">
                                    RECOMMENDED
                                </div>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-2xl text-white flex items-center gap-2">
                                        <Bot className="text-primary h-6 w-6" />
                                        HealOps Agent
                                    </CardTitle>
                                    <p className="text-sm text-primary">The Modern Agentic Framework</p>
                                </CardHeader>
                                 <CardContent className="space-y-6 pt-6">
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3">
                                            <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                                                <Check className="h-4 w-4 text-primary" />
                                            </div>
                                            <span className="text-white font-medium">Active 24/7 Agent</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                                                <Check className="h-4 w-4 text-primary" />
                                            </div>
                                            <span className="text-white font-medium">Fixes root causes automatically</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                                                <Check className="h-4 w-4 text-primary" />
                                            </div>
                                            <span className="text-white font-medium">Raises Pull Requests instantly</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                                                <Check className="h-4 w-4 text-primary" />
                                            </div>
                                            <span className="text-white font-medium">Drastically reduces churn</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* FAQ Section */}
            <FAQSection />

            {/* CTA Section */}
            <CTASection />
        </div>
    );
}
