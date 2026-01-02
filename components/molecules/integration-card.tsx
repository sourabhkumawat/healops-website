'use client';

import { LucideIcon } from 'lucide-react';

interface IntegrationCardProps {
    name: string;
    icon: LucideIcon;
    category: string;
}

export function IntegrationCard({ name, icon: Icon, category }: IntegrationCardProps) {
    return (
        <div
            className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 hover:bg-white/10 transition-all duration-300 cursor-default"
        >
            <div className="p-3 rounded-xl bg-black/50 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300 mb-3">
                <Icon className="w-8 h-8" />
            </div>
            <span className="font-semibold text-white group-hover:text-primary transition-colors">
                {name}
            </span>
            <span className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {category}
            </span>
        </div>
    );
}
