import { FadeIn } from '@/components/animations/fade-in';
import { Server } from 'lucide-react';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';

export default function KubernetesIntegrationPage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'Documentation', url: '/docs' },
        { name: 'Kubernetes Integration', url: '/docs/kubernetes-integration' }
      ]} />
      <FadeIn className="prose prose-invert max-w-none">
        <div className="flex items-center gap-4 mb-8">
          <Server className="h-12 w-12 text-primary" />
          <div>
            <h1 className="!mb-0">Kubernetes Integration</h1>
            <p className="!mt-2 text-muted-foreground">Deploy HealOps agent on Kubernetes clusters for auto-healing</p>
          </div>
        </div>

        <h2>Features</h2>
        <ul>
          <li>Pod auto-restart and scaling</li>
          <li>Node health monitoring</li>
          <li>Service mesh integration</li>
          <li>ConfigMap and Secret management</li>
        </ul>

        <h2>Helm Installation</h2>
        <pre><code>{`helm repo add healops https://charts.healops.com
helm install healops healops/healops-agent \\
  --set apiKey=your_api_key \\
  --namespace healops-system \\
  --create-namespace`}</code></pre>
      </FadeIn>
    </>
  );
}

