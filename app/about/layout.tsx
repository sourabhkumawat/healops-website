import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Autonomous Operations & Self-Healing Infrastructure',
  description: 'HealOps was born from frustration with 3am on-call pages and chaotic incident management. We\'re on a mission to make operations autonomous using AI-powered self-healing systems. Learn about our values: observability first, action over alerts, and continuous learning.',
  openGraph: {
    title: 'About Us - Making Operations Autonomous | HealOps',
    description: 'HealOps transforms incident management with AI-powered self-healing. Born from frustration with on-call hell, we believe machines should solve machine problems. Learn about our mission to eliminate developer burnout.',
    url: 'https://healops.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Making Operations Autonomous | HealOps',
    description: 'HealOps transforms incident management with AI-powered self-healing. Born from frustration with on-call hell, we believe machines should solve machine problems.',
  },
  alternates: {
    canonical: 'https://healops.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

