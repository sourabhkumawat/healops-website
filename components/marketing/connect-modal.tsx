'use client';

import { useEffect, useState } from 'react';
import { X, Calendar, Mail, Clock, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { trackBookDemo, trackKeyEvent } from '@/lib/analytics';

export function ConnectModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if user has already seen the modal in this session
    const hasSeenModal = sessionStorage.getItem('healops_connect_modal_shown');
    if (hasSeenModal) {
      return;
    }

    // Show modal after 20 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem('healops_connect_modal_shown', 'true');
      trackKeyEvent('connect_modal_shown');
    }, 20000); // 20 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    trackKeyEvent('connect_modal_closed');
  };

  const handleBookDemo = () => {
    trackBookDemo('Connect Modal', 'Book a Demo');
    trackKeyEvent('connect_modal_demo_clicked');
  };

  const handleSendEmail = () => {
    trackKeyEvent('connect_modal_email_clicked');
  };

  // Don't render anything on server or if modal shouldn't be shown
  if (!mounted || !isOpen) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] animate-in fade-in duration-300"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
        <Card 
          className="relative w-full max-w-4xl bg-background border-border shadow-2xl pointer-events-auto animate-in zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Left side - Value proposition */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-primary/5 border-r border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/20">
                  <svg 
                    className="h-6 w-6 text-primary" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Let&apos;s Connect!</h2>
                  <p className="text-sm text-muted-foreground">Ready to scale your expertise?</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">
                    Your AI Twin - Builds trust, answers questions, guide decisions, and generates revenue all on autopilot 24/7
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Transform your knowledge into an always-on AI Twin that engages your audience 24/7, answers questions, and generates revenue on autopilot.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 mx-auto mb-2">
                      <Clock className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-xs text-muted-foreground">Always Online</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 mx-auto mb-2">
                      <Users className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="text-2xl font-bold">10K+</div>
                    <div className="text-xs text-muted-foreground">Conversations</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/10 mx-auto mb-2">
                      <TrendingUp className="h-6 w-6 text-purple-500" />
                    </div>
                    <div className="text-2xl font-bold">5x</div>
                    <div className="text-xs text-muted-foreground">Revenue Growth</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - CTA options */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Choose Your Connection Method</h3>
                <p className="text-sm text-muted-foreground">
                  Get started with your AI Twin in just a few minutes
                </p>
              </div>

              <div className="space-y-4">
                {/* Book a Demo */}
                <Button
                  size="lg"
                  className="w-full justify-between h-auto py-4 px-6 bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a
                    href="https://calendly.com/sourabhkumawat0105/lets-talk-self-healing"
                    target="_blank"
                    rel="noreferrer"
                    onClick={handleBookDemo}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/10">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold">Book a Demo</div>
                        <div className="text-xs opacity-90">Schedule a 30-minute call</div>
                      </div>
                    </div>
                    <svg 
                      className="h-5 w-5" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </Button>

                {/* Send Email */}
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full justify-between h-auto py-4 px-6 border-2"
                  asChild
                >
                  <Link
                    href="/contact"
                    onClick={handleSendEmail}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold">Send Email</div>
                        <div className="text-xs text-muted-foreground">Get in touch directly</div>
                      </div>
                    </div>
                    <svg 
                      className="h-5 w-5" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </Button>
              </div>

              <p className="text-xs text-center text-muted-foreground mt-6">
                Join thousands of experts already scaling with AI Twins
              </p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

