'use client';

import { FadeIn } from '@/components/animations/fade-in';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SignupPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="container px-4 md:px-6 py-20 md:py-32 flex items-center justify-center min-h-[80vh]">
      <FadeIn className="w-full max-w-md">
        <Card className="bg-card border-border shadow-2xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Get Early Access</CardTitle>
            <CardDescription>
              Join the waitlist for HealOps v2.0
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-6 text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">You&apos;re on the list!</h3>
                <p className="text-muted-foreground">
                  We&apos;ll notify you as soon as your spot opens up.
                </p>
                <Button asChild variant="outline" className="mt-4">
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Work Email</label>
                  <Input id="email" type="email" placeholder="name@company.com" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Company Name</label>
                  <Input id="company" placeholder="Acme Inc." required />
                </div>
                <Button type="submit" className="w-full group">
                  Request Access
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  By signing up, you agree to our <Link href="/terms" className="underline hover:text-primary">Terms of Service</Link> and <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}
