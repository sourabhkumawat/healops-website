import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documentation - Getting Started with HealOps | API & SDK Guides',
  description: 'Complete HealOps documentation: Integrate OpenTelemetry SDK, configure AI-powered self-healing, set up automated remediation actions, and start eliminating on-call incidents. Guides for Node.js, observability setup, and incident automation.',
  openGraph: {
    title: 'Documentation - Integrate HealOps Self-Healing Platform | API Guides',
    description: 'Complete documentation for integrating HealOps: OpenTelemetry SDK setup, configuring AI-powered incident response, automated remediation, and self-healing infrastructure. Get started in minutes.',
    url: 'https://healops.com/docs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Documentation - Integrate HealOps Self-Healing Platform',
    description: 'Complete docs for integrating AI-powered incident management. OpenTelemetry SDK setup and automated remediation guides.',
  },
  alternates: {
    canonical: 'https://healops.com/docs',
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container px-4 md:px-6 py-20 md:py-32 max-w-4xl mx-auto">
      {children}
    </div>
  );
}
