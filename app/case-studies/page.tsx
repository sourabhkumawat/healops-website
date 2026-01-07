'use client';

import { FadeIn, FadeInStagger, FadeInItem } from '@/components/animations/fade-in';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingDown, Clock, DollarSign, Quote } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { trackCTA } from '@/lib/analytics';

const caseStudies = [
  {
    id: 'techflow',
    company: 'TechFlow',
    industry: 'FinTech',
    size: '50-100 employees',
    logo: '🏦',
    challenge: {
      title: 'High MTTR Affecting Customer Trust',
      description: 'TechFlow, a high-velocity fintech startup processing millions of transactions daily, was experiencing production incidents that took an average of 45 minutes to resolve. This high Mean Time To Resolution (MTTR) was impacting customer trust and regulatory compliance.',
      metrics: ['45 min MTTR', '30% engineering time on firefighting', 'Alert fatigue affecting team morale'],
    },
    solution: {
      title: 'Automated Self-Healing with HealOps',
      description: 'TechFlow deployed HealOps to their Kubernetes cluster, integrating with GitHub and Slack for automated incident response. Within hours, HealOps mapped service dependencies and began analyzing log patterns.',
      implementation: ['Auto-scaling for latency spikes', 'Deadlock resolution for database locks', 'Intelligent cache clearing for Redis memory'],
    },
    results: {
      title: 'Dramatic Impact on Operations',
      metrics: [
        { label: 'MTTR Reduction', value: '45 min → 5 min', improvement: '89% improvement', icon: Clock },
        { label: 'Time Saved', value: '40 hours/week', improvement: 'Full engineer reclaimed', icon: TrendingDown },
        { label: 'Uptime Achievement', value: '99.999%', improvement: 'Record high', icon: TrendingDown },
      ],
    },
    testimonial: {
      quote: 'HealOps didn\'t just fix our infrastructure; it fixed our engineering culture. We\'re no longer afraid to deploy on Fridays.',
      author: 'David Kim',
      role: 'CTO',
      company: 'TechFlow',
    },
  },
  {
    id: 'velocis',
    company: 'Velocis',
    industry: 'E-commerce',
    size: '100-200 employees',
    logo: '🛒',
    challenge: {
      title: 'Handling 10K Events/Day with Limited Resources',
      description: 'Velocis, a rapidly growing e-commerce platform, was drowning in alerts. With 10,000+ events per day and a small DevOps team, engineers were constantly on-call, leading to burnout and delayed feature development.',
      metrics: ['10K+ alerts daily', 'Team on-call 24/7', 'Feature development delayed'],
    },
    solution: {
      title: 'Autonomous Agent Handling Incidents',
      description: 'HealOps was configured to handle the most common recurring issues automatically, reducing the alert noise and allowing the team to focus on strategic work.',
      implementation: ['Automated pod restarts for hanging services', 'Intelligent traffic routing during degradation', 'Proactive cache warming before traffic spikes'],
    },
    results: {
      title: 'Zero Downtime Achievement',
      metrics: [
        { label: 'Downtime', value: '0 minutes', improvement: 'Zero unplanned downtime', icon: TrendingDown },
        { label: 'Manual Incidents', value: '70% reduction', improvement: 'Automation at scale', icon: TrendingDown },
        { label: 'Team Morale', value: 'Record high', improvement: 'No more 3 AM wake-ups', icon: TrendingDown },
      ],
    },
    testimonial: {
      quote: 'HealOps gave us our nights back. We went from constant firefighting to strategic planning. Our team is happier and more productive than ever.',
      author: 'Maria Garcia',
      role: 'VP of Engineering',
      company: 'Velocis',
    },
  },
  {
    id: 'stackmind',
    company: 'StackMind',
    industry: 'SaaS Platform',
    size: '20-50 employees',
    logo: '💼',
    challenge: {
      title: 'Incident Response Costs Eating Into Budget',
      description: 'As a lean SaaS startup, StackMind couldn\'t afford a large DevOps team, but their growing customer base demanded 24/7 reliability. Incident response was becoming a major cost center.',
      metrics: ['$180K/year in on-call costs', 'Limited DevOps capacity', 'Scaling challenges'],
    },
    solution: {
      title: 'AI-Powered Autonomous Response',
      description: 'HealOps autonomous agents were deployed to handle 60% of incidents automatically, dramatically reducing the need for human intervention and allowing the small team to focus on growth.',
      implementation: ['Automated rollback for bad deployments', 'Intelligent log analysis for root causes', 'PR creation for code-level bugs'],
    },
    results: {
      title: 'Significant Cost Reduction',
      metrics: [
        { label: 'Cost Savings', value: '$120K/year', improvement: '60% reduction', icon: DollarSign },
        { label: 'Automated Incidents', value: '60%', improvement: 'AI handling majority', icon: TrendingDown },
        { label: 'Team Focus', value: '↑ Strategic work', improvement: 'More time for features', icon: TrendingDown },
      ],
    },
    testimonial: {
      quote: 'HealOps is like having a senior SRE on our team, but at a fraction of the cost. The ROI was immediate and continues to compound.',
      author: 'Emily Zhang',
      role: 'Founder & CTO',
      company: 'StackMind',
    },
  },
];

export default function CaseStudiesPage() {
  const baseUrl = 'https://healops.com';

  const caseStudiesSchema = caseStudies.map((study) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${study.company} Case Study: ${study.challenge.title}`,
    description: `${study.company} ${study.industry} - ${study.results.metrics[0].value} ${study.results.metrics[0].improvement}`,
    image: `${baseUrl}/og-image.png`,
    datePublished: '2025-12-01T00:00:00Z',
    author: {
      '@type': 'Organization',
      name: 'HealOps'
    },
    publisher: {
      '@type': 'Organization',
      name: 'HealOps',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/case-studies#${study.id}`
    }
  }));

  return (
    <div className="container px-4 md:px-6 py-20 md:py-32">
      {caseStudiesSchema.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <Breadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'Case Studies', url: '/case-studies' }
      ]} />

      {/* Hero Section */}
      <FadeIn className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Customer Success Stories
        </h1>
        <p className="text-xl text-muted-foreground">
          See how engineering teams use HealOps to reduce MTTR, eliminate on-call burden, and ship features faster.
        </p>
      </FadeIn>

      {/* Case Studies */}
      <div className="space-y-32">
        {caseStudies.map((study, index) => (
          <FadeIn key={study.id}>
            <div className="space-y-12">
              {/* Header */}
              <div className="flex items-start gap-6">
                <div className="text-6xl">{study.logo}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h2 className="text-3xl font-bold">{study.company}</h2>
                    <Badge variant="outline">{study.industry}</Badge>
                  </div>
                  <p className="text-muted-foreground">{study.size}</p>
                </div>
              </div>

              {/* Challenge */}
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-red-500/10 text-red-500 border-red-500/20">Challenge</Badge>
                  <CardTitle className="text-2xl">{study.challenge.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{study.challenge.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.challenge.metrics.map((metric, idx) => (
                      <Badge key={idx} variant="outline" className="bg-red-500/5 border-red-500/20 text-red-400">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Solution */}
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-blue-500/10 text-blue-500 border-blue-500/20">Solution</Badge>
                  <CardTitle className="text-2xl">{study.solution.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{study.solution.description}</p>
                  <ul className="space-y-2">
                    {study.solution.implementation.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Results */}
              <div className="space-y-6">
                <div className="text-center">
                  <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">Results</Badge>
                  <h3 className="text-2xl font-bold">{study.results.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {study.results.metrics.map((metric, idx) => (
                    <Card key={idx} className="bg-gradient-to-br from-primary/10 to-background border-primary/20 text-center">
                      <CardContent className="pt-6 space-y-4">
                        <metric.icon className="h-10 w-10 text-primary mx-auto" />
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{metric.label}</p>
                          <p className="text-3xl font-bold text-primary">{metric.value}</p>
                          <p className="text-sm text-muted-foreground mt-2">{metric.improvement}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <Card className="bg-gradient-to-br from-background to-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary/40 mb-4" />
                  <p className="text-lg italic text-muted-foreground leading-relaxed mb-6">
                    &ldquo;{study.testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <div>
                      <p className="font-semibold text-white">{study.testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{study.testimonial.role}, {study.testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {index < caseStudies.length - 1 && (
                <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
              )}
            </div>
          </FadeIn>
        ))}
      </div>

      {/* CTA */}
      <FadeIn className="text-center mt-32">
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-primary/10 to-background border border-primary/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Ready to Join Them?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how HealOps can transform your operations. Start with a free trial or book a personalized demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link 
                href="https://experiment.healops.ai"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackCTA('Start Free Trial', 'Case Studies Page')}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
              <a
                href="https://calendly.com/sourabhkumawat0105/lets-talk-self-healing"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackCTA('Book Demo', 'Case Studies Page')}
              >
                Book a Demo
              </a>
            </Button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

