import Link from 'next/link';
import { FadeIn } from '@/components/animations/fade-in';

export default function DocsPage() {
  return (
    <FadeIn className="prose prose-invert max-w-none">
      <h1>Introduction to HealOps</h1>
      <p className="lead text-xl text-muted-foreground">
        HealOps is an AI-powered self-healing platform that turns observability logs into automated remediation actions, saving developers countless hours of debugging and incident response.
      </p>
      
      <h2>Why HealOps?</h2>
      <p>
        Traditional observability tools are great at telling you what&apos;s wrong. They give you dashboards, graphs, and alerts. But they stop there. They leave the &quot;fixing&quot; part to you.
      </p>
      <p>
        HealOps is different. We believe that if a machine can detect an error, a machine should be able to fix it. Our platform analyzes your logs in real-time, detects anomalies, and automatically executes safe remediation actions.
      </p>

      <h2>How It Works</h2>
      <ol>
        <li><strong>Deep Log Analysis:</strong> Our AI agents ingest your observability logs in real-time, understanding the context of every error and warning.</li>
        <li><strong>Anomaly Detection:</strong> We don&apos;t just look for thresholds; we look for patterns. A sudden spike in errors? A slow memory leak? We catch it.</li>
        <li><strong>Autonomous Remediation:</strong> HealOps matches the issue to a library of safe, pre-approved remediation actions and executes them automatically.</li>
        <li><strong>Continuous Learning:</strong> Our AI learns from every incident, getting smarter and more accurate over time.</li>
      </ol>

      <h2>Key Capabilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-8">
        <div className="p-4 rounded-lg border border-border bg-card">
          <h3 className="font-semibold mb-2">Live Log Streaming</h3>
          <p className="text-sm text-muted-foreground">Stream and analyze logs in real-time from all your services with zero latency.</p>
        </div>
        <div className="p-4 rounded-lg border border-border bg-card">
          <h3 className="font-semibold mb-2">AI-Powered Fixes</h3>
          <p className="text-sm text-muted-foreground">Automatically generate and apply hot-patches for code errors using LLMs.</p>
        </div>
        <div className="p-4 rounded-lg border border-border bg-card">
          <h3 className="font-semibold mb-2">Auto-Scaling</h3>
          <p className="text-sm text-muted-foreground">Detect latency spikes and automatically scale your infrastructure.</p>
        </div>
        <div className="p-4 rounded-lg border border-border bg-card">
          <h3 className="font-semibold mb-2">Incident Timeline</h3>
          <p className="text-sm text-muted-foreground">Track every action taken by HealOps with a detailed audit trail.</p>
        </div>
      </div>

      <h2>Getting Started</h2>
      <p>
        The fastest way to get started with HealOps is to integrate our OpenTelemetry SDK into your Node.js application. This will automatically capture error logs and send them to HealOps for analysis and remediation.
      </p>
      <p>
        Check out our <Link href="/docs/opentelemetry" className="text-primary hover:underline">OpenTelemetry Node.js SDK</Link> guide to start capturing and self-healing errors in minutes.
      </p>
    </FadeIn>
  );
}
