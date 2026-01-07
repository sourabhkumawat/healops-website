'use client';

import { FadeIn, FadeInStagger, FadeInItem } from '@/components/animations/fade-in';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Moon, DollarSign, TrendingUp, Users, Clock, Shield } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { trackCTA } from '@/lib/analytics';

export default function ForStartupsPage() {
  const painPoints = [
    {
      icon: Moon,
      title: 'Stop the 3 AM Wake-Up Calls',
      description: 'Your founding team shouldn\'t be on-call 24/7. HealOps acts as your autonomous SRE, handling incidents while your team sleeps.',
      stat: '87% reduction in after-hours incidents',
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective Reliability',
      description: 'Hiring a senior DevOps engineer costs $150K+/year. HealOps starts at $0/month and scales with you.',
      stat: 'Save $120K+ annually',
    },
    {
      icon: TrendingUp,
      title: 'Ship Features, Not Fixes',
      description: 'Startups win by moving fast. Stop context-switching to fix bugs and focus on building what customers want.',
      stat: '40% more feature velocity',
    },
  ];

  const testimonials = [
    {
      quote: 'HealOps cut our MTTR from 45 minutes to 5 minutes. It\'s like having a senior DevOps engineer on call 24/7.',
      author: 'Sarah Chen',
      role: 'CTO',
      company: 'TechFlow',
    },
    {
      quote: 'We were burning out from constant firefighting. HealOps gave us our weekends back while improving uptime.',
      author: 'Marcus Rodriguez',
      role: 'Engineering Lead',
      company: 'Velocis',
    },
    {
      quote: 'As a 5-person startup, we can\'t afford downtime. HealOps catches issues before customers notice them.',
      author: 'Emily Zhang',
      role: 'Founder & CEO',
      company: 'StackMind',
    },
  ];

  return (
    <div className="container px-4 md:px-6 py-20 md:py-32">
      <Breadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'For Startups', url: '/for-startups' }
      ]} />

      {/* Hero Section */}
      <FadeIn className="text-center max-w-3xl mx-auto mb-20">
        <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm border-primary/50 text-primary bg-primary/10 rounded-full">
          <TrendingUp className="w-3 h-3 mr-2" />
          Built for Startups
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Stop Waking Up at 3 AM. <br />
          <span className="text-primary">Let AI Fix Your Production Bugs.</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Early-stage startups can\'t afford downtime or expensive DevOps teams. HealOps gives you enterprise-grade reliability at startup prices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="rounded-full px-8" asChild>
            <Link 
              href="https://experiment.healops.ai"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackCTA('Start Free Trial', 'For Startups Page')}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
            <Link href="/how-it-works">
              See How It Works
            </Link>
          </Button>
        </div>
      </FadeIn>

      {/* Pain Points */}
      <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {painPoints.map((point, index) => (
          <FadeInItem key={index}>
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm h-full hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary mb-4">
                  <point.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{point.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{point.description}</p>
                <div className="pt-2 border-t border-border/50">
                  <p className="text-sm font-semibold text-primary">{point.stat}</p>
                </div>
              </CardContent>
            </Card>
          </FadeInItem>
        ))}
      </FadeInStagger>

      {/* Pricing for Startups */}
      <FadeIn className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Pricing That Grows With You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when you need more. No contracts, cancel anytime.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-card border-border">
            <CardHeader>
              <Badge variant="outline" className="w-fit mb-2">Perfect to Start</Badge>
              <CardTitle className="text-2xl">Starter Plan</CardTitle>
              <div className="text-4xl font-bold mt-4">$0<span className="text-lg font-normal text-muted-foreground">/month</span></div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>Up to 3 team members</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>100k logs/month</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>Basic alerting</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>Community support</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 to-background border-primary/30 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="px-4">Most Popular</Badge>
            </div>
            <CardHeader>
              <Badge variant="outline" className="w-fit mb-2 border-primary/50">Scaling Startups</Badge>
              <CardTitle className="text-2xl">Pro Plan</CardTitle>
              <div className="text-4xl font-bold mt-4">$49<span className="text-lg font-normal text-muted-foreground">/month</span></div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>Unlimited team members</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>1M logs/month</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>Advanced alerting (Slack, PagerDuty)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>AI Root Cause Analysis</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>Priority support</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </FadeIn>

      {/* Testimonials */}
      <FadeIn className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Trusted by Fast-Growing Startups
          </h2>
          <p className="text-muted-foreground">
            See what founders and engineering leads say about HealOps
          </p>
        </div>
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeInItem key={index}>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm h-full">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="border-t border-border/50 pt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </FadeIn>

      {/* Final CTA */}
      <FadeIn className="text-center bg-gradient-to-br from-primary/10 to-background border border-primary/20 rounded-2xl p-12">
        <Users className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Join 50+ Engineering Teams
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Ship faster. Sleep better. Scale confidently. Start free, no credit card required.
        </p>
        <Button size="lg" className="rounded-full px-8" asChild>
          <Link 
            href="https://experiment.healops.ai"
            target="_blank"
            rel="noreferrer"
            onClick={() => trackCTA('Start Free Trial', 'For Startups Page - Bottom CTA')}
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </FadeIn>
    </div>
  );
}

