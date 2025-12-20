'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BackgroundParticles } from '@/components/ui/background-particles';
import { FadeIn, FadeInStagger } from '@/components/animations/fade-in';
import { ArrowRight, Activity, Shield, Zap, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';
import { trackCTA, trackKeyEvent } from '@/lib/analytics';
import Link from 'next/link';

export default function Home() {
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        // Force animation reset on mount
        setAnimationKey((prev) => prev + 1);
    }, []);

    const baseUrl = 'https://healops.com';

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'HealOps',
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        sameAs: [
            // Add social media links when available
            // 'https://twitter.com/healops',
            // 'https://linkedin.com/company/healops',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Sales',
            url: `${baseUrl}/contact`,
        },
        description: 'AI-powered incident management platform that turns observability logs into self-healing actions. Automate incident response with LLM-powered error detection, hot-patch generation, and autonomous remediation to eliminate on-call hell and reduce developer burnout.',
    };

    return (
        <div className="flex flex-col gap-20 pb-20 relative">
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
                        description:
                            'HealOps is an AI-powered incident management platform that turns observability logs into self-healing actions. Uses LLMs to automatically detect errors, generate hot-patches, auto-scale infrastructure, and eliminate on-call hell for engineering teams.',
                        aggregateRating: {
                            '@type': 'AggregateRating',
                            ratingValue: '4.8',
                            ratingCount: '120'
                        },
                        featureList: [
                            'AI-powered error detection',
                            'Automated hot-patch generation',
                            'Self-healing infrastructure',
                            'Real-time log analysis',
                            'OpenTelemetry integration',
                            'Automated incident response'
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            {
                                '@type': 'ListItem',
                                position: 1,
                                name: 'Home',
                                item: baseUrl
                            }
                        ]
                    })
                }}
            />
            <BackgroundParticles />
            {/* Hero Section */}
            <section className="relative overflow-hidden min-h-[80vh] flex items-center justify-center pt-20 pb-32 md:pt-32 md:pb-48">
                {/* Removed old background div */}
                <div className="container px-4 md:px-6 relative z-10">
                    <FadeIn
                        key={animationKey}
                        className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8"
                    >
                        <Badge
                            variant="outline"
                            className="px-4 py-1.5 text-sm border-primary/50 text-primary bg-primary/10 rounded-full"
                        >
                            v2.0 is now available
                        </Badge>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white text-balance">
                            Turn Observability Logs into{' '}
                            <span className="text-primary">Self-Healing</span>{' '}
                            Actions.
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-[600px] text-balance">
                            Stop spending hours analyzing error logs. HealOps
                            automatically detects errors and warnings in your
                            observability data and self-heals your system,
                            saving developers countless hours of debugging.{' '}
                            <Link href="/docs" className="text-primary hover:underline">
                                Learn more
                            </Link>{' '}
                            or{' '}
                            <Link href="/pricing" className="text-primary hover:underline">
                                start for free
                            </Link>.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            <Button
                                size="lg"
                                className="text-lg px-8 rounded-full h-12 font-semibold"
                                asChild
                            >
                                <a
                                    href="https://calendly.com/sourabhkumawat0105/lets-talk-self-healing"
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={() => {
                                        trackCTA('Book a 30-Min Call', 'Hero Section');
                                        trackKeyEvent('book_call_clicked');
                                    }}
                                >
                                    Book a 30-Min Call{' '}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-lg px-8 rounded-full h-12 font-semibold"
                                asChild
                            >
                                <a 
                                    href="/docs"
                                    onClick={() => {
                                        trackCTA('View Documentation', 'Hero Section');
                                    }}
                                >
                                    View Documentation
                                </a>
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Product Benefits */}
            <section className="container px-4 md:px-6 relative z-10">
                <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                        <CardHeader>
                            <Activity className="h-10 w-10 text-primary mb-4" />
                            <CardTitle>Deep Observability Analysis</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                We analyze your observability logs to identify
                                errors and warnings, giving you deep insights
                                into system health.{' '}
                                <Link href="/docs/opentelemetry" className="text-primary hover:underline text-sm">
                                    Learn about OpenTelemetry integration
                                </Link>
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                        <CardHeader>
                            <Zap className="h-10 w-10 text-primary mb-4" />
                            <CardTitle>Automated Self-Healing</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Our system doesn't just alert you; it
                                self-heals. Automated actions resolve issues
                                instantly to prevent user impact.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                        <CardHeader>
                            <Shield className="h-10 w-10 text-primary mb-4" />
                            <CardTitle>Save Developer Time</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Eliminate the need for developers to manually
                                check logs and fix errors. Let HealOps handle
                                the routine maintenance.{' '}
                                <Link href="/blog" className="text-primary hover:underline text-sm">
                                    Read success stories
                                </Link>
                            </p>
                        </CardContent>
                    </Card>
                </FadeInStagger>
            </section>

            {/* Live Logs Preview (Mock) */}
            <section className="container px-4 md:px-6 relative z-10">
                <FadeIn>
                    <div className="rounded-xl border border-border bg-card overflow-hidden shadow-2xl">
                        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
                            <div className="flex items-center gap-2">
                                <Terminal className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm font-medium">
                                    Live Logs
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs text-muted-foreground">
                                    Connected
                                </span>
                            </div>
                        </div>
                        <div className="p-4 font-mono text-sm space-y-2 h-[300px] overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card pointer-events-none" />
                            <div className="flex gap-2 text-muted-foreground">
                                <span className="text-red-500">ERROR</span>
                                <span className="opacity-50">11:05:10</span>
                                <span>
                                    ReferenceError: 'user' is not defined at
                                    /app/routes/profile.js:42
                                </span>
                            </div>
                            <div className="flex gap-2 text-muted-foreground">
                                <span className="text-primary font-bold">
                                    HEALOPS
                                </span>
                                <span className="opacity-50">11:05:11</span>
                                <span>
                                    AI Agent detected code error:
                                    'ReferenceError'
                                </span>
                            </div>
                            <div className="flex gap-2 text-muted-foreground">
                                <span className="text-primary font-bold">
                                    HEALOPS
                                </span>
                                <span className="opacity-50">11:05:12</span>
                                <span>
                                    Analyzing stack trace and git history...
                                </span>
                            </div>
                            <div className="flex gap-2 text-muted-foreground">
                                <span className="text-primary font-bold">
                                    HEALOPS
                                </span>
                                <span className="opacity-50">11:05:15</span>
                                <span>
                                    Generating fix: 'const user = await
                                    getUser(req.params.id)'
                                </span>
                            </div>
                            <div className="flex gap-2 text-muted-foreground">
                                <span className="text-primary font-bold">
                                    HEALOPS
                                </span>
                                <span className="opacity-50">11:05:18</span>
                                <span>
                                    Applying hot-patch to instance i-0a1b2c3d
                                </span>
                            </div>
                            <div className="flex gap-2 text-muted-foreground">
                                <span className="text-blue-400">INFO</span>
                                <span className="opacity-50">11:05:22</span>
                                <span>
                                    Hot-patch applied successfully. Service
                                    reloading...
                                </span>
                            </div>
                            <div className="flex gap-2 text-muted-foreground">
                                <span className="text-green-500">RESOLVED</span>
                                <span className="opacity-50">11:05:25</span>
                                <span>
                                    Error rate dropped to 0%. Fix verified.
                                </span>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* Recent Incidents Preview (Mock) */}
            <section className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col gap-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">
                            Recent Incidents
                        </h2>
                        <p className="text-muted-foreground">
                            Track and manage incidents with a unified dashboard.
                        </p>
                    </div>
                    <FadeIn>
                        <div className="rounded-xl border border-border bg-card overflow-hidden">
                            <div className="grid grid-cols-12 gap-4 p-4 border-b border-border bg-muted/30 text-sm font-medium text-muted-foreground">
                                <div className="col-span-2">Severity</div>
                                <div className="col-span-6">Incident</div>
                                <div className="col-span-2">Status</div>
                                <div className="col-span-2 text-right">
                                    Time
                                </div>
                            </div>
                            <div className="divide-y divide-border">
                                <div className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-muted/10 transition-colors">
                                    <div className="col-span-2">
                                        <Badge variant="destructive">
                                            CRITICAL
                                        </Badge>
                                    </div>
                                    <div className="col-span-6 font-medium">
                                        ReferenceError: 'user' is not defined
                                    </div>
                                    <div className="col-span-2">
                                        <Badge
                                            variant="outline"
                                            className="border-green-500/50 text-green-500"
                                        >
                                            Resolved
                                        </Badge>
                                    </div>
                                    <div className="col-span-2 text-right text-sm text-muted-foreground">
                                        2m ago
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-muted/10 transition-colors">
                                    <div className="col-span-2">
                                        <Badge className="bg-orange-500 hover:bg-orange-600">
                                            HIGH
                                        </Badge>
                                    </div>
                                    <div className="col-span-6 font-medium">
                                        Memory Leak: Heap limit exceeded
                                    </div>
                                    <div className="col-span-2">
                                        <Badge
                                            variant="outline"
                                            className="border-green-500/50 text-green-500"
                                        >
                                            Resolved
                                        </Badge>
                                    </div>
                                    <div className="col-span-2 text-right text-sm text-muted-foreground">
                                        15m ago
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-muted/10 transition-colors">
                                    <div className="col-span-2">
                                        <Badge variant="secondary">LOW</Badge>
                                    </div>
                                    <div className="col-span-6 font-medium">
                                        TypeError: Cannot read properties of
                                        null
                                    </div>
                                    <div className="col-span-2">
                                        <Badge
                                            variant="outline"
                                            className="border-green-500/50 text-green-500"
                                        >
                                            Resolved
                                        </Badge>
                                    </div>
                                    <div className="col-span-2 text-right text-sm text-muted-foreground">
                                        1h ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
