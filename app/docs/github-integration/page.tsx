import { FadeIn } from '@/components/animations/fade-in';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';

export default function GitHubIntegrationPage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'Documentation', url: '/docs' },
        { name: 'GitHub Integration', url: '/docs/github-integration' }
      ]} />
      <FadeIn className="prose prose-invert max-w-none">
        <div className="flex items-center gap-4 mb-8">
          <Github className="h-12 w-12 text-primary" />
          <div>
            <h1 className="!mb-0">GitHub Integration</h1>
            <p className="!mt-2 text-muted-foreground">Connect HealOps to your GitHub repositories for automated PR creation</p>
          </div>
        </div>

        <Card className="bg-primary/5 border-primary/20 mb-8">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold mb-2">What You'll Get</p>
                <ul className="space-y-1 text-sm">
                  <li>Automatic PR creation for detected bugs</li>
                  <li>Code context analysis for better fixes</li>
                  <li>Integration with your CI/CD pipeline</li>
                  <li>Commit history analysis</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2>Prerequisites</h2>
        <ul>
          <li>GitHub account with admin access to your organization</li>
          <li>HealOps account (sign up at <a href="https://experiment.healops.ai">experiment.healops.ai</a>)</li>
          <li>Repository with issues enabled</li>
        </ul>

        <h2>Installation Steps</h2>
        
        <h3>Step 1: Install the HealOps GitHub App</h3>
        <ol>
          <li>Navigate to your HealOps dashboard</li>
          <li>Go to <strong>Integrations</strong> &gt; <strong>GitHub</strong></li>
          <li>Click <strong>Install GitHub App</strong></li>
          <li>Select the repositories you want to connect</li>
          <li>Authorize the app</li>
        </ol>

        <h3>Step 2: Configure Permissions</h3>
        <p>HealOps requires the following permissions:</p>
        <ul>
          <li><CheckCircle className="inline h-4 w-4 text-primary" /> <strong>Read access:</strong> Repository code and commit history</li>
          <li><CheckCircle className="inline h-4 w-4 text-primary" /> <strong>Write access:</strong> Pull requests and issues</li>
          <li><CheckCircle className="inline h-4 w-4 text-primary" /> <strong>Status checks:</strong> CI/CD integration</li>
        </ul>

        <h3>Step 3: Set Up Branch Protection (Recommended)</h3>
        <ol>
          <li>Go to your GitHub repository settings</li>
          <li>Navigate to <strong>Branches</strong> &gt; <strong>Branch protection rules</strong></li>
          <li>Add rule for <code>main</code> or <code>master</code></li>
          <li>Enable <strong>Require pull request reviews before merging</strong></li>
          <li>Enable <strong>Require status checks to pass</strong></li>
        </ol>

        <h2>How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose my-8">
          <Card className="bg-card">
            <CardHeader>
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm mb-2">1</div>
              <CardTitle className="text-base">Detection</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              HealOps detects an error in your logs and traces it back to a specific line of code in your repository.
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardHeader>
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm mb-2">2</div>
              <CardTitle className="text-base">Fix Generation</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              AI analyzes the code context, generates a fix, and creates comprehensive tests.
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardHeader>
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm mb-2">3</div>
              <CardTitle className="text-base">PR Creation</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              A pull request is opened with the fix, description, tests, and links to the original error.
            </CardContent>
          </Card>
        </div>

        <h2>Configuration Options</h2>
        <h3>Auto-Merge Settings</h3>
        <pre><code>{`{
  "auto_merge": {
    "enabled": false,
    "require_ci_pass": true,
    "require_reviews": 1,
    "branches": ["develop", "staging"]
  }
}`}</code></pre>

        <h3>PR Template Customization</h3>
        <p>Customize the PR title and description format in your HealOps dashboard under <strong>Settings</strong> &gt; <strong>GitHub</strong>.</p>

        <h2>Troubleshooting</h2>
        <Card className="bg-card">
          <CardContent className="pt-6">
            <details className="mb-4">
              <summary className="font-semibold cursor-pointer">PRs not being created</summary>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>Check that the GitHub App has write access to the repository</li>
                <li>Verify branch protection rules aren't blocking automated PRs</li>
                <li>Ensure the repository has issues enabled</li>
              </ul>
            </details>
            <details>
              <summary className="font-semibold cursor-pointer">Authentication errors</summary>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>Re-authorize the GitHub App in your organization settings</li>
                <li>Check that your HealOps subscription is active</li>
                <li>Contact support if the issue persists</li>
              </ul>
            </details>
          </CardContent>
        </Card>

        <h2>Next Steps</h2>
        <div className="flex gap-4 not-prose">
          <Button asChild>
            <Link href="/docs/slack-integration">Set Up Slack Notifications →</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </FadeIn>
    </>
  );
}

