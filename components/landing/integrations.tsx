'use client';

import { FadeIn } from '@/components/animations/fade-in';
import {
    Github,
    Gitlab,
    Slack,
    Trello,
    Cloud,
    Container,
    Database,
    Server
} from 'lucide-react';
import Link from 'next/link';
import { trackIntegrationClick } from '@/lib/analytics';

const integrations = [
    { name: 'GitHub', icon: Github, category: 'Source Control', link: '/docs/github-integration', tooltip: 'Requires GitHub App installation' },
    { name: 'GitLab', icon: Gitlab, category: 'Source Control', link: '/docs/gitlab-integration', tooltip: 'Supports self-hosted & cloud' },
    { name: 'Slack', icon: Slack, category: 'Alerting', link: '/docs/slack-integration', tooltip: 'Real-time notifications' },
    { name: 'Linear', icon: Trello, category: 'Project Mgmt', link: '/docs', tooltip: 'Coming soon' },
    { name: 'AWS', icon: Cloud, category: 'Infrastructure', link: '/docs/aws-integration', tooltip: 'CloudWatch integration' },
    { name: 'Docker', icon: Container, category: 'Container', link: '/docs/docker-integration', tooltip: 'Container monitoring' },
    { name: 'Kubernetes', icon: Server, category: 'Orchestration', link: '/docs/kubernetes-integration', tooltip: 'K8s cluster support' },
    { name: 'Datadog', icon: Database, category: 'Observability', link: '/docs/datadog-integration', tooltip: 'Bi-directional sync' },
];

export function IntegrationsSection() {
    return (
        <section className="py-24 border-b border-white/5 bg-black/20 relative z-10">
            <div className="container px-4 md:px-6">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">
                            Works With Your Existing Stack
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            HealOps connects seamlessly with your repositories, communication channels, and cloud infrastructure. No rip-and-replace required.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {integrations.map((tool) => (
                            <Link
                                key={tool.name}
                                href={tool.link}
                                className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 hover:bg-white/10 transition-all duration-300 cursor-pointer relative"
                                onClick={() => trackIntegrationClick(tool.name)}
                                title={tool.tooltip}
                            >
                                <div className="p-3 rounded-xl bg-black/50 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300 mb-3">
                                    <tool.icon className="w-8 h-8" />
                                </div>
                                <span className="font-semibold text-white group-hover:text-primary transition-colors">
                                    {tool.name}
                                </span>
                                <span className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {tool.category}
                                </span>
                                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[10px] text-primary font-mono">→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
