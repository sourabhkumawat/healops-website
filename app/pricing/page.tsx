'use client';

import { FadeIn, FadeInStagger } from '@/components/animations/fade-in';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2, MessageSquare, Calendar, Mail, Rocket, TrendingUp, Building2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { trackCTA, trackKeyEvent, trackPricingPageView, trackBookDemo } from '@/lib/analytics';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { useEffect } from 'react';
import Link from 'next/link';

const plans = [
  {
    name: 'Startups',
    subtitle: 'Small teams & side projects',
    description: 'Get started with self-healing infrastructure without breaking the bank.',
    features: [
      'Up to 5 team members',
      'Log retention up to 30 days',
      'Basic alerting & notifications',
      'Community support',
      'Core integrations (GitHub, Slack)',
      'AI-powered bug detection',
    ],
    icon: Rocket,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-500/10',
    cta: 'Get Custom Quote',
    popular: false,
  },
  {
    name: 'Growth',
    subtitle: 'Growing teams that ship fast',
    description: 'Scale your infrastructure with confidence as your product grows.',
    features: [
      'Unlimited team members',
      'Extended log retention',
      'Advanced alerting (Slack, PagerDuty, Teams)',
      'Priority support with SLA',
      'All integrations included',
      'AI Root Cause Analysis',
      'Auto-fix PR generation',
      'Custom runbooks',
    ],
    icon: TrendingUp,
    iconColor: 'text-green-500',
    iconBg: 'bg-green-500/10',
    cta: 'Get Custom Quote',
    popular: true,
  },
  {
    name: 'Enterprise',
    subtitle: 'Large-scale operations',
    description: 'Enterprise-grade reliability with dedicated support and custom solutions.',
    features: [
      'Everything in Growth, plus:',
      'Custom log retention policies',
      'Dedicated success manager',
      'Unlimited logs & events',
      'SSO / SAML authentication',
      '99.99% uptime SLA',
      'Custom integrations',
      'On-premise deployment options',
      'Advanced security & compliance',
    ],
    icon: Building2,
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-500/10',
    cta: 'Get Custom Quote',
    popular: false,
  },
];

export default function PricingPage() {
  useEffect(() => {
    // Track pricing page view with utm_source if available
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    trackPricingPageView(utmSource || undefined);
  }, []);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does HealOps pricing work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'HealOps offers custom pricing tailored to your team size, infrastructure scale, and specific requirements. We provide flexible plans for startups, growing teams, and enterprises. Contact our team for a personalized quote.',
        },
      },
      {
        '@type': 'Question',
        name: 'What factors determine my pricing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pricing is based on factors including: team size, log volume, retention requirements, integration needs, support level, and SLA requirements. We work with you to create a plan that fits your budget and technical needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer a free trial?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We offer a 14-day free trial with full access to HealOps features. No credit card required. Contact us to get started.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I get a custom quote for my organization?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! We specialize in creating custom solutions for organizations of all sizes. Schedule a call with our team to discuss your specific requirements and receive a tailored proposal.',
        },
      },
      {
        '@type': 'Question',
        name: 'What payment options do you accept?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We accept credit cards, ACH transfers, and wire transfers. Enterprise customers can also arrange annual billing with custom payment terms.',
        },
      },
    ],
  };

  const pricingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'HealOps',
    description: 'AI-powered self-healing platform for production environments with custom pricing',
    brand: {
      '@type': 'Brand',
      name: 'HealOps'
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      description: 'Custom pricing plans tailored to your organization',
      availability: 'https://schema.org/InStock'
    }
  };

  return (
    <div className="container px-4 md:px-6 py-20 md:py-32">
      <Breadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'Pricing', url: '/pricing' }
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <FadeIn className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Pricing Built for Your Infrastructure
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Every team is different. Let&apos;s build a custom plan that fits your scale, budget, and technical requirements.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            size="lg" 
            asChild
            onClick={() => trackBookDemo('Pricing Page', 'Schedule a Call')}
          >
            <a
              href="https://calendly.com/sourabhkumawat0105/lets-talk-self-healing"
              target="_blank"
              rel="noreferrer"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Call
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            asChild
          >
            <Link href="/contact">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Link>
          </Button>
        </div>
      </FadeIn>

      <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        {plans.map((plan, index) => (
          <Card 
            key={index} 
            className={`relative flex flex-col ${
              plan.popular 
                ? 'border-primary shadow-lg shadow-primary/10 scale-105 z-10 bg-card' 
                : 'bg-card/50 border-border/50 backdrop-blur-sm hover:border-border transition-colors'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <Badge className="px-3 py-1 text-sm font-medium">Most Popular</Badge>
              </div>
            )}
            <CardHeader>
              <div className={`flex items-center justify-center w-16 h-16 rounded-2xl ${plan.iconBg} mb-4`}>
                <plan.icon className={`h-8 w-8 ${plan.iconColor}`} />
              </div>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="text-sm text-muted-foreground font-medium mb-2">{plan.subtitle}</div>
              <CardDescription className="text-base">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                variant={plan.popular ? 'default' : 'outline'}
                size="lg"
                asChild
              >
                <a
                  href="https://calendly.com/sourabhkumawat0105/lets-talk-self-healing"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => {
                    trackBookDemo(`Pricing - ${plan.name}`, plan.cta);
                    trackKeyEvent('custom_quote_requested', index);
                  }}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  {plan.cta}
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </FadeInStagger>

      {/* Value Proposition */}
      <FadeIn className="max-w-4xl mx-auto mb-20">
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Why Custom Pricing?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your infrastructure is unique. Your pricing should be too.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                    Pay for What You Need
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    No overpaying for features you won&apos;t use. We tailor the plan to your actual requirements.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                    Flexible Scaling
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Start small and scale seamlessly. Your pricing adjusts as your infrastructure grows.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                    Budget-Friendly
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We work with teams of all sizes to find a solution that fits your budget.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* FAQ Section */}
      <FadeIn className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq, index) => (
            <Card key={index} className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">{faq.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{faq.acceptedAnswer.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </FadeIn>

      {/* Final CTA */}
      <FadeIn className="text-center mt-20">
        <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
          <CardContent className="p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let&apos;s discuss your infrastructure needs and build a custom plan that works for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                asChild
              >
                <a
                  href="https://calendly.com/sourabhkumawat0105/lets-talk-self-healing"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackBookDemo('Pricing Page Bottom', 'Book a Demo')}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Demo
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
              >
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Sales
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}
