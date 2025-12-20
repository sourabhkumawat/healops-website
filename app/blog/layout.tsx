import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Incident Management, AI Observability & Self-Healing Insights',
  description: 'Engineering blog from HealOps: Learn about autonomous operations, AI-powered incident response, eliminating on-call hell, self-healing infrastructure, LLM-powered error detection, and reducing developer burnout. Case studies, technical deep dives, and product updates.',
  openGraph: {
    title: 'Blog - AI Incident Management & Self-Healing Systems | HealOps',
    description: 'Engineering insights on autonomous operations, AI-powered incident response, self-healing infrastructure, and eliminating developer burnout. Technical deep dives and case studies.',
    url: 'https://healops.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - AI Incident Management & Self-Healing Systems | HealOps',
    description: 'Engineering insights on autonomous operations, AI-powered incident response, and self-healing infrastructure.',
  },
  alternates: {
    canonical: 'https://healops.com/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

