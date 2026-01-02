'use client';

import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FAQItemProps {
    question: string;
    answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="border border-white/10 rounded-xl bg-white/5 hover:border-primary/30 transition-all duration-300 overflow-hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="p-6 flex items-center justify-between gap-4">
                <h3 className="font-semibold text-lg text-white">{question}</h3>
                <div className={cn(
                    "p-1 rounded-full bg-white/10 text-muted-foreground transition-transform duration-300",
                    isOpen && "rotate-180 bg-primary/20 text-primary"
                )}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
            </div>
            <div
                className={cn(
                    "px-6 text-muted-foreground transition-all duration-300 ease-in-out overflow-hidden",
                    isOpen ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                {answer}
            </div>
        </div>
    );
}
