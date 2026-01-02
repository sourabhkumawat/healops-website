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

const integrations = [
    { name: 'GitHub', icon: Github, category: 'Source Control' },
    { name: 'GitLab', icon: Gitlab, category: 'Source Control' },
    { name: 'Slack', icon: Slack, category: 'Alerting' },
    { name: 'Linear', icon: Trello, category: 'Project Mgmt' }, // Visual proxy
    { name: 'AWS', icon: Cloud, category: 'Infrastructure' },
    { name: 'Docker', icon: Container, category: 'Container' },
    { name: 'Kubernetes', icon: Server, category: 'Orchestration' },
    { name: 'Datadog', icon: Database, category: 'Observability' }, // Visual proxy
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
                            <div
                                key={tool.name}
                                className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 hover:bg-white/10 transition-all duration-300 cursor-default"
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
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
