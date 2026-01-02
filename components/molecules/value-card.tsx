'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/atoms/card';
import { LucideIcon } from 'lucide-react';

export interface ValueItem {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface ValueCardProps {
    value: ValueItem;
}

export function ValueCard({ value }: ValueCardProps) {
    return (
        <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
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
    );
}
