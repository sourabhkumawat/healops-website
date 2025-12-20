import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get Started with AI-Powered Incident Management',
  description: 'Questions about HealOps self-healing platform? Book a 30-minute call with our team to discuss AI-powered incident management, autonomous operations, and eliminating on-call hell for your engineering team.',
  openGraph: {
    title: 'Contact HealOps - Schedule a Demo | AI Incident Management',
    description: 'Book a call to learn how HealOps can automate your incident response, reduce developer burnout, and eliminate on-call hell with AI-powered self-healing infrastructure.',
    url: 'https://healops.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact HealOps - Schedule a Demo | AI Incident Management',
    description: 'Book a call to learn how HealOps automates incident response and eliminates on-call hell.',
  },
  alternates: {
    canonical: 'https://healops.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

