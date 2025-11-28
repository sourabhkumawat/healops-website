'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { FadeIn, FadeInStagger } from '@/components/animations/fade-in';
import { ArrowRight, Activity, Shield, Zap, Terminal } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center justify-center pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-40" />
        <div className="container px-4 md:px-6 relative z-10">
          <FadeIn className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            <Badge variant="outline" className="px-4 py-1.5 text-sm border-primary/50 text-primary bg-primary/10 rounded-full">
              v2.0 is now available
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white text-balance">
              Self-healing infrastructure for <span className="text-primary">high-velocity</span> teams.
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px] text-balance">
              Don&apos;t just monitor. Heal. Our AI analyzes your logs in real-time and automatically resolves incidents before they impact users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Button size="lg" className="text-lg px-8 rounded-full h-12 font-semibold">
                Start for free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 rounded-full h-12 font-semibold">
                View Documentation
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Product Benefits */}
      <section className="container px-4 md:px-6">
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardHeader>
              <Activity className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Real-time Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Stream logs and metrics in real-time with zero latency. Catch issues before they impact your users.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardHeader>
              <Zap className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Autonomous Remediation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                AI agents detect anomalies and execute safe remediation scripts to fix issues without human intervention.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardHeader>
              <Shield className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Secure by Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Enterprise-grade security with SOC2 compliance, SSO, and granular role-based access control.
              </p>
            </CardContent>
          </Card>
        </FadeInStagger>
      </section>

      {/* Live Logs Preview (Mock) */}
      <section className="container px-4 md:px-6">
        <FadeIn>
          <div className="rounded-xl border border-border bg-card overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Live Logs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-muted-foreground">Connected</span>
              </div>
            </div>
            <div className="p-4 font-mono text-sm space-y-2 h-[300px] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card pointer-events-none" />
              <div className="flex gap-2 text-muted-foreground">
                <span className="text-blue-400">INFO</span>
                <span className="opacity-50">10:42:01</span>
                <span>Service started successfully on port 8080</span>
              </div>
              <div className="flex gap-2 text-muted-foreground">
                <span className="text-blue-400">INFO</span>
                <span className="opacity-50">10:42:05</span>
                <span>Connected to database primary-db-01</span>
              </div>
              <div className="flex gap-2 text-muted-foreground">
                <span className="text-yellow-400">WARN</span>
                <span className="opacity-50">10:45:12</span>
                <span>High memory usage detected (85%)</span>
              </div>
              <div className="flex gap-2 text-muted-foreground">
                <span className="text-red-500">ERROR</span>
                <span className="opacity-50">10:46:00</span>
                <span>Connection timeout: upstream service unavailable</span>
              </div>
              <div className="flex gap-2 text-muted-foreground">
                <span className="text-blue-400">INFO</span>
                <span className="opacity-50">10:46:01</span>
                <span>Retrying connection (attempt 1/3)...</span>
              </div>
              <div className="flex gap-2 text-muted-foreground">
                <span className="text-green-500">RESOLVED</span>
                <span className="opacity-50">10:46:05</span>
                <span>Connection re-established</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Recent Incidents Preview (Mock) */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Recent Incidents</h2>
            <p className="text-muted-foreground">Track and manage incidents with a unified dashboard.</p>
          </div>
          <FadeIn>
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="grid grid-cols-12 gap-4 p-4 border-b border-border bg-muted/30 text-sm font-medium text-muted-foreground">
                <div className="col-span-2">Severity</div>
                <div className="col-span-6">Incident</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2 text-right">Time</div>
              </div>
              <div className="divide-y divide-border">
                <div className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-muted/10 transition-colors">
                  <div className="col-span-2"><Badge variant="destructive">CRITICAL</Badge></div>
                  <div className="col-span-6 font-medium">API Gateway Latency Spike</div>
                  <div className="col-span-2"><Badge variant="outline" className="border-yellow-500/50 text-yellow-500">Investigating</Badge></div>
                  <div className="col-span-2 text-right text-sm text-muted-foreground">2m ago</div>
                </div>
                <div className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-muted/10 transition-colors">
                  <div className="col-span-2"><Badge className="bg-orange-500 hover:bg-orange-600">HIGH</Badge></div>
                  <div className="col-span-6 font-medium">Database Connection Pool Exhausted</div>
                  <div className="col-span-2"><Badge variant="outline" className="border-blue-500/50 text-blue-500">Monitoring</Badge></div>
                  <div className="col-span-2 text-right text-sm text-muted-foreground">15m ago</div>
                </div>
                <div className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-muted/10 transition-colors">
                  <div className="col-span-2"><Badge variant="secondary">LOW</Badge></div>
                  <div className="col-span-6 font-medium">Background Job Delay</div>
                  <div className="col-span-2"><Badge variant="outline" className="border-green-500/50 text-green-500">Resolved</Badge></div>
                  <div className="col-span-2 text-right text-sm text-muted-foreground">1h ago</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 md:px-6">
        <FadeIn>
          <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-card to-card border border-border p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Ready to improve your reliability?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Join high-performing engineering teams who trust HealOps to keep their systems running smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Input placeholder="Enter your work email" className="h-12 bg-background/50" />
              <Button size="lg" className="h-12 px-8 rounded-full w-full sm:w-auto font-semibold">
                Get Early Access
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
