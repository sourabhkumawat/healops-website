import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OpenTelemetry SDK for Node.js - HealOps Integration Guide',
  description: 'Install and configure @healops/opentelemetry SDK for Node.js. Auto-instrument your Express apps, capture error spans in real-time, and enable AI-powered self-healing. Setup guide with code examples and troubleshooting.',
  openGraph: {
    title: 'OpenTelemetry Node.js SDK - HealOps Integration Guide',
    description: 'Quick start guide for @healops/opentelemetry SDK. Auto-instrument Node.js/Express apps, capture error spans, and enable AI-powered incident automation. Get started in minutes.',
    url: 'https://healops.com/docs/opentelemetry',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenTelemetry Node.js SDK - HealOps Integration Guide',
    description: 'Quick start guide for @healops/opentelemetry SDK. Auto-instrument apps and enable AI-powered self-healing.',
  },
  alternates: {
    canonical: 'https://healops.com/docs/opentelemetry',
  },
};

export default function OpenTelemetryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

