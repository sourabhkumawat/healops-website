'use client';

import { FadeIn, FadeInStagger } from '@/components/atoms/animations/fade-in';
import { PricingCard, Plan } from '@/components/molecules/pricing-card';

const plans: Plan[] = [
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
    ctaUrl: 'https://experiment.healops.ai',
    variant: 'outline',
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
    variant: 'default',
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
    variant: 'outline',
  },
];

export default function PricingPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is included in the free Starter plan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Starter plan includes up to 3 team members, 14-day log retention, basic alerting via email, community support, and 100k logs per month.',
        },
      },
      {
        '@type': 'Question',
        name: 'What features are available in the Pro plan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Pro plan includes unlimited team members, 30-day log retention, advanced alerting (Slack, PagerDuty), priority email support, 1M logs per month, and AI Root Cause Analysis.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in the Enterprise plan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Enterprise plan includes unlimited team members, custom log retention, all integrations, dedicated success manager, unlimited logs, SSO/SAML, and 99.99% SLA.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I upgrade or downgrade my plan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, you can upgrade or downgrade your plan at any time. Start for free and upgrade as you grow. No hidden fees.',
        },
      },
    ],
  };

  return (
    <div className="container px-4 md:px-6 py-20 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
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
          <PricingCard key={index} plan={plan} />
        ))}
      </FadeInStagger>
    </div>
  );
}
