import { FadeIn } from '@/components/animations/fade-in';
import { Container } from 'lucide-react';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';

export default function DockerIntegrationPage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'Documentation', url: '/docs' },
        { name: 'Docker Integration', url: '/docs/docker-integration' }
      ]} />
      <FadeIn className="prose prose-invert max-w-none">
        <div className="flex items-center gap-4 mb-8">
          <Container className="h-12 w-12 text-primary" />
          <div>
            <h1 className="!mb-0">Docker Integration</h1>
            <p className="!mt-2 text-muted-foreground">Monitor Docker containers and enable auto-restart capabilities</p>
          </div>
        </div>

        <h2>Features</h2>
        <ul>
          <li>Container health monitoring</li>
          <li>Automatic container restarts</li>
          <li>Log aggregation from containers</li>
          <li>Resource usage tracking</li>
        </ul>

        <h2>Installation</h2>
        <pre><code>{`docker run -d \\
  --name healops-agent \\
  -v /var/run/docker.sock:/var/run/docker.sock \\
  -e HEALOPS_API_KEY=your_api_key \\
  healops/agent:latest`}</code></pre>
      </FadeIn>
    </>
  );
}

