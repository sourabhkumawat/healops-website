'use client';

import { FadeIn, FadeInStagger } from '@/components/animations/fade-in';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Terminal, 
  Clock, 
  BrainCircuit, 
  Activity, 
  MessageSquare, 
  Bell, 
  ShieldCheck, 
  FileText, 
  LayoutDashboard 
} from 'lucide-react';

const features = [
  {
    title: 'Real-time Logs',
    description: 'Stream logs from your infrastructure in real-time with zero latency. Filter and search instantly.',
    icon: Terminal,
    badge: 'NEW',
    badgeVariant: 'default' as const,
  },
  {
    title: 'Incident Timeline',
    description: 'Track every event during an incident. Collaborate with your team and build a complete post-mortem.',
    icon: Clock,
  },
  {
    title: 'AI Self-Healing',
    description: 'Detects anomalies, identifies root causes, and executes remediation scripts automatically.',
    icon: BrainCircuit,
    badge: 'AI',
    badgeVariant: 'secondary' as const,
  },
  {
    title: 'OpenTelemetry Support',
    description: 'Native support for OpenTelemetry traces and metrics. Drop-in integration with your existing stack.',
    icon: Activity,
    badge: 'OTEL',
    badgeVariant: 'outline' as const,
  },
  {
    title: 'Slack Integration',
    description: 'Manage incidents directly from Slack. Create channels, update statuses, and trigger workflows.',
    icon: MessageSquare,
  },
  {
    title: 'PagerDuty Sync',
    description: 'Bi-directional sync with PagerDuty. Keep your on-call schedules and alerts in perfect harmony.',
    icon: Bell,
  },
  {
    title: 'Role-Based Access',
    description: 'Granular permissions for your team. Control who can view logs, manage incidents, and configure settings.',
    icon: ShieldCheck,
  },
  {
    title: 'Audit Logs',
    description: 'Complete audit trail of all actions taken within the platform. Compliance ready out of the box.',
    icon: FileText,
  },
  {
    title: 'Custom Dashboards',
    description: 'Build custom dashboards to visualize the metrics that matter most to your team.',
    icon: LayoutDashboard,
  },
];

export default function FeaturesPage() {
  return (
    <div className="container px-4 md:px-6 py-20 md:py-32">
      <FadeIn className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Everything you need to manage incidents.
        </h1>
        <p className="text-xl text-muted-foreground">
          HealOps provides a complete suite of tools to help you detect, respond to, and learn from incidents.
        </p>
      </FadeIn>

      <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300">
            <CardHeader>
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                {feature.badge && (
                  <Badge variant={feature.badgeVariant} className="ml-auto">
                    {feature.badge}
                  </Badge>
                )}
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </FadeInStagger>
    </div>
  );
}
