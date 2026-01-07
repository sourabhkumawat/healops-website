import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HealOps for Enterprises - SOC 2, SSO, 99.99% SLA',
  description: 'Enterprise-grade security and compliance. SOC 2 certified, SSO enabled, dedicated support, and custom SLAs for large organizations.',
  openGraph: {
    title: 'HealOps for Enterprises - Enterprise Security & Compliance',
    description: 'SOC 2 compliant, SSO-enabled autonomous healing platform for enterprises.',
  },
};

export default function ForEnterprisesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

