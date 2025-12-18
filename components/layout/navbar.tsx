'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
    { name: 'Pricing', href: '/pricing' },
    { name: 'Docs', href: '/docs' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' }
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link
                    href="/"
                    className="flex items-center gap-2 font-bold text-xl tracking-tight"
                >
                    <Image
                        src="/logo.png"
                        alt="HealOps Logo"
                        width={32}
                        height={32}
                        className="h-8 w-8"
                    />
                    <span>HealOps</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-primary ${
                                pathname === link.href
                                    ? 'text-primary'
                                    : 'text-muted-foreground'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="https://experiment.healops.ai/"
                        className="text-sm font-medium text-muted-foreground hover:text-primary"
                    >
                        Log in
                    </a>
                    <Button
                        asChild
                        size="sm"
                        className="rounded-full px-6 font-semibold"
                    >
                        <a
                            href="https://calendly.com/sourabhkumawat0105/lets-talk-self-healing"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Book a 30-Min Call
                        </a>
                    </Button>
                </div>

                {/* Mobile Nav */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="w-[300px] sm:w-[400px]"
                    >
                        <nav className="flex flex-col gap-4 mt-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-lg font-medium transition-colors hover:text-primary ${
                                        pathname === link.href
                                            ? 'text-primary'
                                            : 'text-muted-foreground'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="mt-4 flex flex-col gap-4">
                                <a
                                    href="https://experiment.healops.ai/"
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-muted-foreground hover:text-primary"
                                >
                                    Log in
                                </a>
                                <Button
                                    asChild
                                    className="w-full rounded-full font-semibold"
                                >
                                    <a
                                        href="https://calendly.com/sourabhkumawat0105/lets-talk-self-healing"
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Book a 30-Min Call
                                    </a>
                                </Button>
                            </div>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
