import { FadeIn } from '@/components/animations/fade-in';

export default function OpenTelemetryPage() {
  return (
    <FadeIn className="prose prose-invert prose-lg max-w-none 
      prose-headings:font-bold prose-headings:tracking-tight prose-headings:mt-8 prose-headings:mb-4
      prose-p:leading-relaxed prose-p:mb-6 prose-p:text-muted-foreground
      prose-li:text-muted-foreground prose-li:mb-2
      prose-strong:text-foreground
      prose-a:text-primary prose-a:no-underline hover:prose-a:underline
      prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
      prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border">
      <h1>@healops/opentelemetry</h1>
      <p className="lead text-xl text-muted-foreground">
        The official HealOps OpenTelemetry SDK for Node.js. Automatically captures and reports error spans to the HealOps platform.
      </p>

      <h2>Installation</h2>
      <div className="not-prose my-4">
        <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
          npm install @healops/opentelemetry
        </div>
      </div>

      <h2>Usage</h2>
      <p>Initialize the SDK at the very beginning of your application (e.g., in <code>index.ts</code> or <code>app.ts</code>).</p>
      <div className="not-prose my-4">
        <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <pre>{`import { initHealOpsOTel } from '@healops/opentelemetry';

initHealOpsOTel({
  apiKey: process.env.HEALOPS_API_KEY || 'your-api-key',
  serviceName: 'my-service',
  // Optional: Override endpoint
  // endpoint: 'https://engine.healops.ai/otel/errors'
});`}</pre>
        </div>
      </div>

      <h2>Configuration</h2>
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full">
          <thead>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">Option</th>
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">Type</th>
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">apiKey</td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">string</td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Required. Your HealOps API key.</td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">serviceName</td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">string</td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Required. The name of your service.</td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">endpoint</td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">string</td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Optional. The HealOps ingestion endpoint. Defaults to <code>https://engine.healops.ai/otel/errors</code>.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Features</h2>
      <ul>
        <li><strong>Auto-instrumentation:</strong> Automatically instruments supported libraries (Express, Http, etc.) using OpenTelemetry.</li>
        <li><strong>Error Filtering:</strong> Only exports spans with status code ERROR or containing exceptions.</li>
        <li><strong>Efficient Batching:</strong> Batches spans and sends them every 5 seconds.</li>
        <li><strong>Retries:</strong> Automatically retries failed exports with exponential backoff.</li>
      </ul>

      <h2>Troubleshooting</h2>
      <p>If you don&apos;t see errors in HealOps:</p>
      <ul>
        <li>Ensure <code>HEALOPS_API_KEY</code> is correct.</li>
        <li>Verify your application has internet access to <code>engine.healops.ai</code>.</li>
        <li>Check console for any &quot;Failed to export spans&quot; messages (only printed if export fails).</li>
      </ul>
    </FadeIn>
  );
}
