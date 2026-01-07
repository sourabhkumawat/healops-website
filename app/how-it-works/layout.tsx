import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works - HealOps AI-Powered Self-Healing',
  description: 'See how HealOps transforms production bugs into automated fixes in under 1 minute. From log analysis to PR creation, understand the complete workflow.',
  openGraph: {
    title: 'How HealOps Works - From Log to Fix in 1 Minute',
    description: 'Watch how HealOps detects bugs and creates PR fixes automatically.',
  },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

