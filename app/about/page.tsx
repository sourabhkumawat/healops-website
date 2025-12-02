'use client';

import { FadeIn, FadeInStagger } from '@/components/animations/fade-in';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Zap, Shield, Brain, Clock, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Activity,
    title: 'Observability First',
    description: 'We believe that understanding your system starts with deep log analysis. Our AI doesn\'t just collect logs—it understands them.',
  },
  {
    icon: Zap,
    title: 'Action Over Alerts',
    description: 'Traditional tools tell you what\'s wrong. HealOps fixes it. We believe machines should solve machine problems.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Intelligence',
    description: 'Our Large Language Models are trained on millions of incidents. They learn patterns, predict failures, and generate fixes.',
  },
  {
    icon: Clock,
    title: 'Time is Precious',
    description: 'Developers should build features, not babysit servers. We give engineering teams their nights and weekends back.',
  },
  {
    icon: Shield,
    title: 'Safe Automation',
    description: 'Every remediation action is validated and reversible. We prioritize safety while maintaining speed.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Learning',
    description: 'HealOps gets smarter with every incident. Our AI adapts to your infrastructure and learns from your patterns.',
  },
];

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-20 md:py-32">
      <FadeIn className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          We&apos;re on a mission to make operations <span className="text-primary">autonomous</span>.
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Engineering teams are burning out. Alerts are noisy. Context is scattered. We&apos;re building HealOps to fix that.
        </p>
        <div className="prose prose-invert max-w-none">
          <p>
            HealOps was born from frustration. After years of waking up to 3am pages for non-critical issues and struggling to piece together what happened during outages, we decided there had to be a better way.
          </p>
          <p>
            We believe that incident management shouldn&apos;t be a chaotic fire-drill. It should be a structured, calm, and data-driven process that helps teams learn and improve.
          </p>
          <p className="text-lg font-semibold text-foreground mt-8">
            Our approach is simple: Turn observability logs into self-healing actions.
          </p>
        </div>
      </FadeIn>

      <FadeIn className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">What We Believe</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our product philosophy is built on these core principles that guide every decision we make.
        </p>
      </FadeIn>

      <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <Card key={index} className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardHeader>
              <value.icon className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="text-xl">{value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {value.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </FadeInStagger>
    </div>
  );
}
