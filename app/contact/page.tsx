'use client';

import { Button } from '@/components/atoms/button';
import { Input } from '@/components/atoms/input';
import { Card, CardContent } from '@/components/atoms/card';
import { FadeIn } from '@/components/atoms/animations/fade-in';
import { CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock submission
        setTimeout(() => setSubmitted(true), 1000);
    };

    return (
        <div className="container px-4 md:px-6 py-20 md:py-32">
            <FadeIn className="max-w-xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">
                        Contact Us
                    </h1>
                    <p className="text-muted-foreground mb-6">
                        Have questions? We&apos;d love to hear from you.
                    </p>
                    <Button size="lg" className="rounded-full" asChild>
                        <a
                            href="https://calendly.com/sourabhkumawat0105/lets-talk-self-healing"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Book a 30-Min Call
                        </a>
                    </Button>
                </div>

                <Card className="bg-card border-border">
                    <CardContent className="pt-6">
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
                                <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                    <CheckCircle2 className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-semibold">
                                    Message Sent
                                </h3>
                                <p className="text-muted-foreground">
                                    Thanks for reaching out! We&apos;ll get back
                                    to you shortly.
                                </p>
                                <Button
                                    variant="outline"
                                    onClick={() => setSubmitted(false)}
                                >
                                    Send another message
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Name
                                    </label>
                                    <Input
                                        id="name"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Email
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="message"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="How can we help?"
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        )}
                    </CardContent>
                </Card>
            </FadeIn>
        </div>
    );
}
