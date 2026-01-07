'use client';

import { FadeIn, FadeInStagger, FadeInItem } from '@/components/animations/fade-in';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, FileSearch, Bug, GitPullRequest, CheckCircle, Zap } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { trackCTA, trackVideoPlay } from '@/lib/analytics';

export default function HowItWorksPage() {
  const steps = [
    {
      icon: FileSearch,
      title: 'Log Analysis',
      description: 'HealOps continuously monitors your production logs in real-time using OpenTelemetry integration. Our AI agents understand context, not just keywords.',
      metric: '10M+ logs analyzed daily',
    },
    {
      icon: Bug,
      title: 'Bug Detection',
      description: 'Advanced pattern recognition and anomaly detection identifies issues before they cascade. We catch memory leaks, performance degradation, and code errors.',
      metric: '99.9% accuracy rate',
    },
    {
      icon: GitPullRequest,
      title: 'PR Creation',
      description: 'Our AI reads your codebase, generates fixes with proper context, creates comprehensive tests, and opens a PR ready for your review.',
      metric: 'Average PR in 45 seconds',
    },
    {
      icon: CheckCircle,
      title: 'Review & Merge',
      description: 'You stay in control. Review the proposed fix, run tests in your CI/CD pipeline, and merge with confidence knowing the solution is validated.',
      metric: '95% merge rate',
    },
  ];

  return (
    <div className="container px-4 md:px-6 py-20 md:py-32">
      <Breadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'How It Works', url: '/how-it-works' }
      ]} />

      {/* Hero Section */}
      <FadeIn className="text-center max-w-3xl mx-auto mb-20">
        <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm border-primary/50 text-primary bg-primary/10 rounded-full">
          <Zap className="w-3 h-3 mr-2" />
          Autonomous Healing
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          From Log to Fix in <span className="text-primary">Under 1 Minute</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Watch how HealOps transforms production incidents from 3 AM emergencies into automated fixes that deploy while you sleep.
        </p>
        
        {/* Video Placeholder */}
        <div className="relative w-full aspect-video bg-gradient-to-br from-primary/20 via-background to-blue-500/20 rounded-2xl border border-primary/30 flex items-center justify-center mb-8 hover:border-primary/50 transition-all cursor-pointer group"
          onClick={() => trackVideoPlay('How HealOps Works - Demo Video')}
        >
          <div className="absolute inset-0 bg-black/50 rounded-2xl group-hover:bg-black/40 transition-all" />
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1" />
            </div>
            <p className="text-lg font-semibold">Watch Demo Video</p>
            <p className="text-sm text-muted-foreground">3 minutes overview</p>
          </div>
        </div>
      </FadeIn>

      {/* Step-by-Step Process */}
      <FadeIn className="mb-20">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          The HealOps Workflow
        </h2>
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <FadeInItem key={index}>
                <Card className="bg-card/50 border-border/50 backdrop-blur-sm h-full hover:border-primary/50 transition-colors relative">
                  <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-primary text-black font-bold flex items-center justify-center text-sm">
                    {index + 1}
                  </div>
                  <CardHeader>
                    <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary mb-4">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{step.description}</p>
                    <div className="pt-2 border-t border-border/50">
                      <p className="text-xs font-mono text-primary">{step.metric}</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </FadeIn>

      {/* Real Example */}
      <FadeIn className="mb-20">
        <Card className="bg-gradient-to-br from-background to-primary/5 border-primary/20">
          <CardHeader>
            <Badge variant="outline" className="w-fit mb-2">Real Example</Badge>
            <CardTitle className="text-2xl">Production Bug Fixed Automatically</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground font-semibold">Error Detected:</p>
              <pre className="bg-black/50 p-4 rounded-lg text-sm overflow-x-auto">
                <code className="text-red-400">TypeError: Cannot read property 'email' of undefined</code>
              </pre>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground font-semibold">HealOps Analysis:</p>
              <p className="text-sm">Missing null check in user authentication middleware at line 47 of <code className="bg-primary/20 px-1 rounded">auth.ts</code></p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground font-semibold">Generated Fix:</p>
              <pre className="bg-black/50 p-4 rounded-lg text-sm overflow-x-auto">
                <code className="text-green-400">
                  {`if (!user || !user.email) {
  throw new AuthenticationError('Invalid user');
}`}
                </code>
              </pre>
            </div>
            <div className="flex items-center gap-2 text-sm text-primary">
              <CheckCircle className="h-4 w-4" />
              <span>PR #847 merged after CI passed • MTTR: 4 minutes</span>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* CTA Section */}
      <FadeIn className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Ready to Try It Yourself?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start with our free tier. No credit card required. Deploy fixes in production within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link 
                href="/pricing"
                onClick={() => trackCTA('Start Free Trial', 'How It Works Page')}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
              <Link href="/docs">
                View Documentation
              </Link>
            </Button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

