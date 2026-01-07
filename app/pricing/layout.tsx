import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Pricing & Quotes | HealOps',
  description: 'Flexible pricing tailored to your infrastructure needs. Get a custom quote based on your team size, log volume, and requirements. Plans for startups, growing teams, and enterprises. Contact us for personalized pricing.',
  openGraph: {
    title: 'Custom Pricing Plans | HealOps',
    description: 'Get a personalized quote for HealOps. Custom pricing for startups, growth teams, and enterprises. Pay for what you need, scale as you grow.',
    url: 'https://healops.com/pricing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Pricing Plans | HealOps',
    description: 'Get a personalized quote for HealOps. Custom pricing for startups, growth teams, and enterprises.',
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

