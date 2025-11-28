'use client';

import { FadeIn, FadeInStagger } from '@/components/animations/fade-in';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for side projects and small teams.',
    features: [
      'Up to 3 team members',
      '14-day log retention',
      'Basic alerting (Email)',
      'Community support',
      '100k logs / month',
    ],
    notIncluded: [
      'SSO / SAML',
      'Custom retention',
      'SLA guarantees',
    ],
    cta: 'Start for free',
    variant: 'outline' as const,
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    description: 'For growing teams that need reliability.',
    features: [
      'Unlimited team members',
      '30-day log retention',
      'Advanced alerting (Slack, PagerDuty)',
      'Priority email support',
      '1M logs / month',
      'AI Root Cause Analysis',
    ],
    notIncluded: [
      'SSO / SAML',
      'Custom retention',
    ],
    cta: 'Start free trial',
    variant: 'default' as const,
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with specific needs.',
    features: [
      'Unlimited team members',
      'Custom log retention',
      'All integrations included',
      'Dedicated success manager',
      'Unlimited logs',
      'SSO / SAML',
      '99.99% SLA',
    ],
    notIncluded: [],
    cta: 'Contact Sales',
    variant: 'outline' as const,
  },
];

export default function PricingPage() {
  return (
    <div className="container px-4 md:px-6 py-20 md:py-32">
      <FadeIn className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Simple, transparent pricing.
        </h1>
        <p className="text-xl text-muted-foreground">
          Start for free, upgrade as you grow. No hidden fees.
        </p>
      </FadeIn>

      <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight">
                {plan.price}
                {plan.period && <span className="text-lg font-medium text-muted-foreground tracking-normal">{plan.period}</span>}
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
                {plan.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-center text-muted-foreground">
                    <XCircle className="mr-3 h-5 w-5 text-muted-foreground/50 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.variant} size="lg">
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </FadeInStagger>
    </div>
  );
}
