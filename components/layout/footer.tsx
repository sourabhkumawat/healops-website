import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background py-12 md:py-16 relative z-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="col-span-1">
                        <Link
                            href="/"
                            className="flex items-center gap-2 font-bold text-xl tracking-tight mb-4"
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
                        <p className="text-sm text-muted-foreground max-w-xs mb-6">
                            AI-powered self-healing platform for production environments.
                        </p>
                        <div className="flex gap-2">
                            <Link
                                href="https://experiment.healops.ai"
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm font-semibold text-primary hover:underline"
                            >
                                Try Free
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link
                                    href="/how-it-works"
                                    className="hover:text-primary transition-colors"
                                >
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pricing"
                                    className="hover:text-primary transition-colors"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/docs"
                                    className="hover:text-primary transition-colors"
                                >
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/case-studies"
                                    className="hover:text-primary transition-colors"
                                >
                                    Case Studies
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Solutions</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link
                                    href="/for-startups"
                                    className="hover:text-primary transition-colors"
                                >
                                    For Startups
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/for-enterprises"
                                    className="hover:text-primary transition-colors"
                                >
                                    For Enterprises
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-primary transition-colors"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="hover:text-primary transition-colors"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-primary transition-colors"
                                >
                                    Contact Sales
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
                    <p>
                        &copy; {new Date().getFullYear()} HealOps Inc. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
