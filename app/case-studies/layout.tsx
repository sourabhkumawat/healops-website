import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies - HealOps Customer Success Stories',
  description: 'See how TechFlow, Velocis, and StackMind reduced MTTR, eliminated on-call burden, and saved costs with HealOps autonomous healing platform.',
  openGraph: {
    title: 'HealOps Case Studies - Real Results from Real Companies',
    description: 'MTTR reduced from 45 min to 5 min. $120K saved annually. Zero downtime achieved.',
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

