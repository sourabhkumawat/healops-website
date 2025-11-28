import Link from 'next/link';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
                <Link href="/docs" className="block px-2 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-md">Introduction</Link>
                <Link href="/docs/installation" className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors">Installation</Link>
                <Link href="/docs/quickstart" className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors">Quickstart</Link>
              </nav>
            </div>
            <div>
              <h4 className="font-semibold mb-2 px-2">Core Concepts</h4>
              <nav className="flex flex-col space-y-1">
                <Link href="/docs/incidents" className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors">Incidents</Link>
                <Link href="/docs/alerts" className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors">Alerts</Link>
                <Link href="/docs/integrations" className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors">Integrations</Link>
              </nav>
            </div>
            <div>
              <h4 className="font-semibold mb-2 px-2">API Reference</h4>
              <nav className="flex flex-col space-y-1">
                <Link href="/docs/api/v1" className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors">REST API</Link>
                <Link href="/docs/sdk" className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors">SDKs</Link>
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
