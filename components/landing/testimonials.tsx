'use client';

import { FadeIn, FadeInStagger, FadeInItem } from '@/components/animations/fade-in';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, TrendingDown, Clock, Shield } from 'lucide-react';

const testimonials = [
  {
    quote: 'HealOps cut our MTTR from 45 minutes to 5 minutes. It\'s like having a senior DevOps engineer on call 24/7.',
    author: 'Sarah Chen',
    role: 'CTO',
    company: 'TechFlow',
    metric: 'MTTR: 45min → 5min',
    icon: Clock,
  },
  {
    quote: 'We went from waking up to PagerDuty alerts every night to sleeping soundly. HealOps handles 80% of incidents automatically.',
    author: 'Marcus Rodriguez',
    role: 'Engineering Lead',
    company: 'Velocis',
    metric: '80% incidents automated',
    icon: TrendingDown,
  },
  {
    quote: 'The ROI was immediate. We reduced on-call burnout and our team morale has never been higher. HealOps pays for itself 10x over.',
    author: 'Emily Zhang',
    role: 'VP of Engineering',
    company: 'StackMind',
    metric: '10x ROI',
    icon: Shield,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 relative z-10 bg-black/20 border-y border-white/5">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Trusted by Engineering Leaders
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See what CTOs and engineering teams say about HealOps
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeInItem key={index}>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm h-full hover:border-primary/30 transition-colors relative">
                <CardContent className="pt-6 space-y-6">
                  <Quote className="h-8 w-8 text-primary/40" />
                  
                  <p className="text-muted-foreground italic text-lg leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <testimonial.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="text-xs font-mono font-semibold text-primary">
                      {testimonial.metric}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <FadeIn>
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-primary">50+ engineering teams</span> have deployed HealOps in production
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

