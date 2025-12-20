import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - AI Incident Management Plans | HealOps',
  description: 'Simple, transparent pricing for AI-powered incident management. Start free with 100k logs/month, or upgrade to Pro ($49/mo) for unlimited teams and AI root cause analysis. Enterprise plans available with SSO, custom retention, and 99.99% SLA.',
  openGraph: {
    title: 'Pricing - Start Free, Scale as You Grow | HealOps',
    description: 'Transparent pricing for self-healing infrastructure. Free starter plan (100k logs/month), Pro at $49/mo with AI analysis, or Enterprise with unlimited logs and SLA guarantees. No hidden fees.',
    url: 'https://healops.com/pricing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing - Start Free, Scale as You Grow | HealOps',
    description: 'Transparent pricing for self-healing infrastructure. Free starter plan, Pro at $49/mo, or Enterprise with SLA guarantees.',
  },
  alternates: {
    canonical: 'https://healops.com/pricing',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

