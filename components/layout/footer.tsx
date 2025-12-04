import Link from 'next/link';
import Image from 'next/image';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-12 md:py-16 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight mb-4">
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
              The modern incident management platform for high-velocity engineering teams.
            </p>
            <div className="flex gap-4">
              <Link href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/changelog" className="hover:text-primary transition-colors">Changelog</Link></li>
              <li><Link href="/docs" className="hover:text-primary transition-colors">Documentation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
              <li><Link href="/security" className="hover:text-primary transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} HealOps Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
