'use client';

import { FadeIn } from '@/components/atoms/animations/fade-in';
import { FAQItem } from '@/components/molecules/faq-item';

const faqs = [
    {
        question: "Is it safe to let an AI modify my production code?",
        answer: "HealOps never pushes directly to production. It opens a Pull Request with the proposed fix, detailed explanation, and test results. You (or your team) review and merge it just like any human engineer's code."
    },
    {
        question: "How does it connect to my infrastructure?",
        answer: "We provide a secure OpenTelemetry SDK and a GitHub App. The SDK streams logs/traces to our analysis engine, and the GitHub App allows the agent to read code context and open PRs. We follow SOC2 compliance standards."
    },
    {
        question: "Does it work with legacy codebases?",
        answer: "Yes. HealOps is language-agnostic regarding log analysis. For code fixes, we currently support TypeScript/JavaScript, Python, Go, and Java, with more languages rolling out."
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
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
