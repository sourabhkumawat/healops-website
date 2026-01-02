'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/atoms/card';
import { Badge } from '@/components/atoms/badge';
import { Button } from '@/components/atoms/button';
import { CheckCircle2, XCircle } from 'lucide-react';
import { trackCTA, trackKeyEvent } from '@/lib/analytics';

export interface Plan {
    name: string;
    price: string;
    description: string;
    features: string[];
    notIncluded: string[];
    cta: string;
    ctaUrl?: string;
    variant: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    popular?: boolean;
    period?: string;
}

interface PricingCardProps {
    plan: Plan;
}

export function PricingCard({ plan }: PricingCardProps) {
    return (
        <Card
            className={`relative flex flex-col ${
                plan.popular
                    ? 'border-primary shadow-lg shadow-primary/10 scale-105 z-10 bg-card'
                    : 'bg-card/50 border-border/50 backdrop-blur-sm hover:border-border transition-colors'
            }`}
        >
            {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <Badge className="px-3 py-1 text-sm font-medium">Most Popular</Badge>
                </div>
            )}
            <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight">
                    {plan.price}
                    {plan.period && <span className="text-lg font-medium text-muted-foreground tracking-normal">{plan.period}</span>}
                </div>
            </CardHeader>
            <CardContent className="flex-1">
                <ul className="space-y-4 text-sm">
                    {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                            <CheckCircle2 className="mr-3 h-5 w-5 text-primary flex-shrink-0" />
                            {feature}
                        </li>
                    ))}
                    {plan.notIncluded.map((feature) => (
                        <li key={feature} className="flex items-center text-muted-foreground">
                            <XCircle className="mr-3 h-5 w-5 text-muted-foreground/50 flex-shrink-0" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter>
                {plan.ctaUrl ? (
                    <Button
                        className="w-full"
                        variant={plan.variant}
                        size="lg"
                        asChild
                    >
                        <a
                            href={plan.ctaUrl}
                            target={plan.ctaUrl.startsWith('http') ? '_blank' : undefined}
                            rel={plan.ctaUrl.startsWith('http') ? 'noreferrer' : undefined}
                            onClick={() => {
                                trackCTA(plan.cta, `Pricing - ${plan.name}`);
                                if (plan.name === 'Starter') {
                                    trackKeyEvent('start_free_clicked');
                                }
                            }}
                        >
                            {plan.cta}
                        </a>
                    </Button>
                ) : (
                    <Button
                        className="w-full"
                        variant={plan.variant}
                        size="lg"
                        onClick={() => {
                            trackCTA(plan.cta, `Pricing - ${plan.name}`);
                            if (plan.name === 'Pro' || plan.name === 'Enterprise') {
                                trackKeyEvent('pricing_cta_clicked', plan.name === 'Pro' ? 49 : 0);
                            }
                        }}
                    >
                        {plan.cta}
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
