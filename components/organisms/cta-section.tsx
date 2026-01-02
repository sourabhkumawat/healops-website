'use client';

import { Button } from '@/components/atoms/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { trackCTA } from '@/lib/analytics';

export function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <Sparkles className="w-4 h-4" />
                        <span>Limited Early Access</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                        Ready to hire your first <br/>
                        <span className="text-primary">AI Site Reliability Engineer</span>?
                    </h2>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Join the engineering teams who sleep soundly while HealOps handles the 3 AM incidents.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Button
                            size="lg"
                            className="text-lg px-8 rounded-full h-14 font-bold shadow-[0_0_30px_rgba(46,204,113,0.4)] hover:shadow-[0_0_40px_rgba(46,204,113,0.6)] hover:scale-105 transition-all duration-300"
                            asChild
                        >
                            <a
                                href="https://calendly.com/sourabhkumawat0105/lets-talk-self-healing"
                                target="_blank"
                                rel="noreferrer"
                                onClick={() => trackCTA('Book Demo Bottom', 'CTA Section')}
                            >
                                Book a Demo
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </Button>
                    </div>

                    <p className="text-sm text-muted-foreground pt-4">
                        No credit card required. Easy 5-minute setup.
                    </p>
                </div>
            </div>
        </section>
    );
}
