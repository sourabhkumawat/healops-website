import { FadeIn } from '@/components/animations/fade-in';
import { Database } from 'lucide-react';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';

export default function DatadogIntegrationPage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'Documentation', url: '/docs' },
        { name: 'Datadog Integration', url: '/docs/datadog-integration' }
      ]} />
      <FadeIn className="prose prose-invert max-w-none">
        <div className="flex items-center gap-4 mb-8">
          <Database className="h-12 w-12 text-primary" />
          <div>
            <h1 className="!mb-0">Datadog Integration</h1>
            <p className="!mt-2 text-muted-foreground">Bi-directional sync between HealOps and Datadog for enhanced observability</p>
          </div>
        </div>

        <h2>Features</h2>
        <ul>
          <li>Import logs and metrics from Datadog</li>
          <li>Send HealOps events back to Datadog</li>
          <li>Correlate incidents with monitoring data</li>
          <li>Unified dashboard view</li>
        </ul>

        <h2>Setup</h2>
        <p>Configure Datadog API key in HealOps dashboard under Integrations. Supports both US and EU Datadog instances.</p>
      </FadeIn>
    </>
  );
}

