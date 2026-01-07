import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HealOps for Startups - Stop Waking Up at 3 AM',
  description: 'Cost-effective automation for startups. Get enterprise-grade reliability without expensive DevOps teams. Start free, scale as you grow.',
  openGraph: {
    title: 'HealOps for Startups - Automated Bug Fixing',
    description: 'Stop waking up at 3 AM. Let AI fix your production bugs automatically.',
  },
};

export default function ForStartupsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

