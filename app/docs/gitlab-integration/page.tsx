import { FadeIn } from '@/components/animations/fade-in';
import { Gitlab } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';

export default function GitLabIntegrationPage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'Documentation', url: '/docs' },
        { name: 'GitLab Integration', url: '/docs/gitlab-integration' }
      ]} />
      <FadeIn className="prose prose-invert max-w-none">
        <div className="flex items-center gap-4 mb-8">
          <Gitlab className="h-12 w-12 text-primary" />
          <div>
            <h1 className="!mb-0">GitLab Integration</h1>
            <p className="!mt-2 text-muted-foreground">Connect HealOps to GitLab for automated merge request creation</p>
          </div>
        </div>

        <h2>Supported Versions</h2>
        <ul>
          <li>GitLab.com (SaaS)</li>
          <li>GitLab Self-Managed (13.0+)</li>
          <li>GitLab Enterprise Edition</li>
        </ul>

        <h2>Setup</h2>
        <p>Similar to GitHub integration, HealOps creates merge requests with automated fixes. Configure in your dashboard under Integrations.</p>

        <p><Link href="/docs">View all integrations →</Link></p>
      </FadeIn>
    </>
  );
}

