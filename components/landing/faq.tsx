'use client';

import { FadeIn } from '@/components/animations/fade-in';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const faqs = [
    {
        question: "Is it safe to let an AI modify my production code?",
        answer: "HealOps never pushes directly to production. It opens a Pull Request with the proposed fix, detailed explanation, and test results. You (or your team) review and merge it just like any human engineer's code."
    },
    {
        question: "How much does HealOps cost?",
        answer: "We offer a free Starter plan with up to 100k logs/month for teams up to 3 people. Our Pro plan is $49/month for growing teams, and we have custom Enterprise pricing for large organizations. View full details on our pricing page.",
        link: "/pricing",
        linkText: "View Pricing"
    },
    {
        question: "How many bugs can HealOps catch per month?",
        answer: "On average, HealOps analyzes 10M+ logs daily and catches 50-200 production bugs per month per customer, depending on application size and complexity. Our AI has a 99.9% accuracy rate in bug detection."
    },
    {
        question: "How does it connect to my infrastructure?",
        answer: "We provide a secure OpenTelemetry SDK and a GitHub App. The SDK streams logs/traces to our analysis engine, and the GitHub App allows the agent to read code context and open PRs. We follow SOC2 compliance standards."
    },
    {
        question: "Does it work with legacy codebases?",
        answer: "Yes. HealOps is language-agnostic regarding log analysis. For code fixes, we currently support TypeScript, JavaScript, Python, Go, Java, and Rust. More languages (C#, Ruby, PHP) coming Q1 2026."
    },
    {
        question: "What happens if the AI suggests a bad fix?",
        answer: "Every PR includes a generated test case that reproduces the bug and verifies the fix. If the test fails, the agent self-corrects before asking for review. You act as the final gatekeeper."
    }
];

export function FAQSection() {
    return (
        <section className="py-24 relative z-10 overflow-hidden">
            <div className="container px-4 md:px-6 max-w-4xl">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-muted-foreground">
                            Common questions about trust, security, and implementation.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <FAQItem 
                                key={index} 
                                question={faq.question} 
                                answer={faq.answer}
                                link={'link' in faq ? faq.link : undefined}
                                linkText={'linkText' in faq ? faq.linkText : undefined}
                            />
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

function FAQItem({ question, answer, link, linkText }: { question: string, answer: string, link?: string, linkText?: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="border border-white/10 rounded-xl bg-white/5 hover:border-primary/30 transition-all duration-300 overflow-hidden"
        >
            <div 
                className="p-6 flex items-center justify-between gap-4 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="font-semibold text-lg text-white">{question}</h3>
                <div className={cn(
                    "p-1 rounded-full bg-white/10 text-muted-foreground transition-transform duration-300 flex-shrink-0",
                    isOpen && "rotate-180 bg-primary/20 text-primary"
                )}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
            </div>
            <div
                className={cn(
                    "px-6 text-muted-foreground transition-all duration-300 ease-in-out overflow-hidden",
                    isOpen ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                {answer}
                {link && linkText && (
                    <Link href={link} className="inline-flex items-center gap-1 text-primary hover:underline mt-2 font-semibold">
                        {linkText}
                    </Link>
                )}
            </div>
        </div>
    );
}
