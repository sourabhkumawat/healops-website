import { FadeIn } from '@/components/animations/fade-in';
import { Slack } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';

export default function SlackIntegrationPage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'Documentation', url: '/docs' },
        { name: 'Slack Integration', url: '/docs/slack-integration' }
      ]} />
      <FadeIn className="prose prose-invert max-w-none">
        <div className="flex items-center gap-4 mb-8">
          <Slack className="h-12 w-12 text-primary" />
          <div>
            <h1 className="!mb-0">Slack Integration</h1>
            <p className="!mt-2 text-muted-foreground">Get real-time notifications in Slack when HealOps detects and fixes issues</p>
          </div>
        </div>

        <h2>Overview</h2>
        <p>Connect HealOps to Slack to receive instant notifications about:</p>
        <ul>
          <li>Detected production errors</li>
          <li>Automated fixes and PR creations</li>
          <li>System health updates</li>
          <li>Weekly performance summaries</li>
        </ul>

        <h2>Setup</h2>
        <ol>
          <li>In your HealOps dashboard, go to <strong>Integrations</strong> &gt; <strong>Slack</strong></li>
          <li>Click <strong>Add to Slack</strong></li>
          <li>Select the channel where you want notifications</li>
          <li>Configure notification preferences</li>
        </ol>

        <h2>Next Steps</h2>
        <p><Link href="/docs">View all integrations →</Link></p>
      </FadeIn>
    </>
  );
}

