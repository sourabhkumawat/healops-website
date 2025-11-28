import { FadeIn } from '@/components/animations/fade-in';

export default function DocsPage() {
  return (
    <FadeIn className="prose prose-invert max-w-none">
      <h1>Introduction to HealOps</h1>
      <p className="lead text-xl text-muted-foreground">
        HealOps is a modern incident management platform designed to help high-velocity engineering teams detect, respond to, and resolve incidents faster.
      </p>
      
      <h2>Why HealOps?</h2>
      <p>
        Traditional incident management tools are clunky, slow, and disconnected from your actual workflows. HealOps is different. We built it from the ground up to be:
      </p>
      <ul>
        <li><strong>Fast:</strong> Real-time updates, zero latency.</li>
        <li><strong>Integrated:</strong> Works with your existing stack (Slack, PagerDuty, Datadog).</li>
        <li><strong>Intelligent:</strong> AI-driven insights to help you find the root cause.</li>
      </ul>

      <h2>Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-8">
        <div className="p-4 rounded-lg border border-border bg-card">
          <h3 className="font-semibold mb-2">Live Logs</h3>
          <p className="text-sm text-muted-foreground">Stream logs in real-time from all your services.</p>
        </div>
        <div className="p-4 rounded-lg border border-border bg-card">
          <h3 className="font-semibold mb-2">Incident Timeline</h3>
          <p className="text-sm text-muted-foreground">Collaborative timeline for every incident.</p>
        </div>
      </div>

      <h2>Next Steps</h2>
      <p>
        Ready to get started? Check out our <a href="/docs/quickstart" className="text-primary hover:underline">Quickstart Guide</a> to set up your first project in minutes.
      </p>
    </FadeIn>
  );
}
