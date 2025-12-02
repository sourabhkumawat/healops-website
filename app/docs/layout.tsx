'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="container px-4 md:px-6 py-8 flex flex-col md:flex-row gap-8">
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="sticky top-24 space-y-8">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search docs..." className="pl-9 bg-background/50" />
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2 px-2">Getting Started</h4>
              <nav className="flex flex-col space-y-1">
                <Link 
                  href="/docs" 
                  className={`block px-2 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    pathname === '/docs' 
                      ? 'text-primary bg-primary/10' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  Introduction
                </Link>
              </nav>
            </div>
            <div>
              <h4 className="font-semibold mb-2 px-2">SDKs</h4>
              <nav className="flex flex-col space-y-1">
                <Link 
                  href="/docs/opentelemetry" 
                  className={`block px-2 py-1.5 text-sm rounded-md transition-colors ${
                    pathname === '/docs/opentelemetry' 
                      ? 'text-primary bg-primary/10 font-medium' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  OpenTelemetry Node.js SDK
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 min-w-0">
        {children}
      </main>
    </div>
  );
}
