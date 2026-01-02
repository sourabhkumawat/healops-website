'use client';

import { FadeIn } from '@/components/atoms/animations/fade-in';
import { IntegrationCard } from '@/components/molecules/integration-card';
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
                            <IntegrationCard
                                key={tool.name}
                                name={tool.name}
                                icon={tool.icon}
                                category={tool.category}
                            />
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
