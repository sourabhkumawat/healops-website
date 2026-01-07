'use client';

import { FadeIn, FadeInStagger, FadeInItem } from '@/components/animations/fade-in';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Lock, FileCheck, Award, BarChart3, Zap } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { trackBookDemo } from '@/lib/analytics';

export default function ForEnterprisesPage() {
  const features = [
    {
      icon: Shield,
      title: 'SOC 2 Type II Compliant',
      description: 'Full compliance with SOC 2 Type II standards. Annual audits, penetration testing, and comprehensive security documentation.',
    },
    {
      icon: Lock,
      title: 'SSO & SAML Integration',
      description: 'Enterprise SSO support with Okta, Azure AD, and Google Workspace. Role-based access control and audit logs.',
    },
    {
      icon: FileCheck,
      title: '99.99% SLA Guarantee',
      description: 'Four-nines uptime SLA with automatic failover, multi-region deployment, and 24/7 infrastructure monitoring.',
    },
    {
      icon: Award,
      title: 'Dedicated Success Manager',
      description: 'Your dedicated customer success manager ensures smooth onboarding, training, and ongoing optimization.',
    },
    {
      icon: BarChart3,
      title: 'Custom Retention & Compliance',
      description: 'Flexible data retention policies to meet your compliance requirements. GDPR, HIPAA, and CCPA support.',
    },
    {
      icon: Zap,
      title: 'Priority Support & SLA',
      description: '1-hour response time for P1 issues. Dedicated Slack channel with engineering team access.',
    },
  ];

  const caseStudies = [
    {
      company: 'TechFlow',
      industry: 'FinTech',
      challenge: 'High MTTR impacting customer trust and regulatory compliance.',
      result: 'MTTR reduced from 45 minutes to 5 minutes',
      improvement: '89% improvement',
    },
    {
      company: 'Velocis',
      industry: 'E-commerce',
      challenge: 'Handling 10K events/day with limited DevOps team resources.',
      result: 'Zero downtime, 70% fewer manual incidents',
      improvement: '70% cost reduction',
    },
    {
      company: 'StackMind',
      industry: 'SaaS',
      challenge: 'Incident response costs eating into engineering budget.',
      result: '60% reduction in on-call burden',
      improvement: '$120K saved annually',
    },
  ];

  const integrations = [
    'GitHub Enterprise',
    'GitLab Self-Hosted',
    'Jira Cloud & Server',
    'ServiceNow',
    'Datadog',
    'New Relic',
    'Splunk',
    'AWS CloudWatch',
    'Azure Monitor',
    'PagerDuty',
    'Slack Enterprise Grid',
    'Microsoft Teams',
  ];

  return (
    <div className="container px-4 md:px-6 py-20 md:py-32">
      <Breadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'For Enterprises', url: '/for-enterprises' }
      ]} />

      {/* Hero Section */}
      <FadeIn className="text-center max-w-3xl mx-auto mb-20">
        <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm border-primary/50 text-primary bg-primary/10 rounded-full">
          <Shield className="w-3 h-3 mr-2" />
          Enterprise Grade
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Enterprise Security. <br />
          <span className="text-primary">Startup Agility.</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          SOC 2 compliant, SSO-enabled, and backed by 99.99% SLA. Give your enterprise the autonomous healing it needs without compromising on security.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="rounded-full px-8" asChild>
            <a 
              href="https://calendly.com/sourabhkumawat0105/lets-talk-self-healing"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackBookDemo('For Enterprises Page', 'Schedule Security Review')}
            >
              Schedule Security Review
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
            <Link href="/case-studies">
              View Case Studies
            </Link>
          </Button>
        </div>
      </FadeIn>

      {/* Enterprise Features */}
      <FadeIn className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Built for Enterprise Requirements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Security, compliance, and reliability features that meet your organization's standards.
          </p>
        </div>
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeInItem key={index}>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm h-full hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </FadeIn>

      {/* Case Studies */}
      <FadeIn className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Proven Results at Scale
          </h2>
          <p className="text-muted-foreground">
            See how enterprises reduce MTTR and operational costs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-gradient-to-br from-primary/5 to-background border-primary/20">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">{study.industry}</Badge>
                <CardTitle className="text-2xl">{study.company}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground font-semibold mb-1">CHALLENGE</p>
                  <p className="text-sm">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold mb-1">RESULT</p>
                  <p className="text-sm">{study.result}</p>
                </div>
                <div className="pt-2 border-t border-border/50">
                  <p className="text-2xl font-bold text-primary">{study.improvement}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </FadeIn>

      {/* Enterprise Integrations */}
      <FadeIn className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Enterprise Integrations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Seamlessly integrate with your existing enterprise toolchain
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {integrations.map((integration, index) => (
            <Card key={index} className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/30 transition-colors">
              <CardContent className="p-4 flex items-center justify-center">
                <p className="text-sm font-medium text-center">{integration}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </FadeIn>

      {/* Security & Compliance */}
      <FadeIn className="mb-20">
        <Card className="bg-gradient-to-br from-background to-primary/5 border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Lock className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">Security & Compliance</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Certifications</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ SOC 2 Type II Certified</li>
                <li>✓ GDPR Compliant</li>
                <li>✓ HIPAA Available</li>
                <li>✓ ISO 27001 in Progress</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Security Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Data encryption at rest and in transit</li>
                <li>✓ Regular penetration testing</li>
                <li>✓ Comprehensive audit logs</li>
                <li>✓ Custom data retention policies</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Final CTA */}
      <FadeIn className="text-center bg-gradient-to-br from-primary/10 to-background border border-primary/20 rounded-2xl p-12">
        <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Ready for Enterprise Deployment?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Schedule a security review with our team to discuss your specific requirements, compliance needs, and custom SLAs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="rounded-full px-8" asChild>
            <a 
              href="https://calendly.com/sourabhkumawat0105/lets-talk-self-healing"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackBookDemo('For Enterprises Page', 'Schedule Security Review - Bottom')}
            >
              Schedule Security Review
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
            <Link href="/contact">
              Contact Sales
            </Link>
          </Button>
        </div>
      </FadeIn>
    </div>
  );
}

