import { FadeIn } from '@/components/animations/fade-in';
import { Cloud } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';

export default function AWSIntegrationPage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'Documentation', url: '/docs' },
        { name: 'AWS Integration', url: '/docs/aws-integration' }
      ]} />
      <FadeIn className="prose prose-invert max-w-none">
        <div className="flex items-center gap-4 mb-8">
          <Cloud className="h-12 w-12 text-primary" />
          <div>
            <h1 className="!mb-0">AWS Integration</h1>
            <p className="!mt-2 text-muted-foreground">Connect HealOps to AWS CloudWatch for log ingestion and auto-scaling</p>
          </div>
        </div>

        <h2>Features</h2>
        <ul>
          <li>CloudWatch Logs integration</li>
          <li>Auto-scaling based on incident patterns</li>
          <li>EC2 and ECS monitoring</li>
          <li>Lambda function error tracking</li>
        </ul>

        <h2>Setup</h2>
        <p>Configure AWS integration using IAM roles with appropriate permissions. See full documentation for detailed setup instructions.</p>

        <p><Link href="/contact">Contact support for AWS integration setup →</Link></p>
      </FadeIn>
    </>
  );
}

