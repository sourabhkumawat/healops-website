import Link from 'next/link';
import { Button } from '@/components/atoms/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/atoms/card';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container px-4 md:px-6 py-20 md:py-32 min-h-[80vh] flex items-center justify-center">
      <Card className="max-w-2xl w-full bg-card/50 border-border/50 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="text-6xl font-bold text-primary mb-4">404</div>
          <CardTitle className="text-3xl mb-4">Page Not Found</CardTitle>
          <CardDescription className="text-lg">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/blog">
                <Search className="mr-2 h-5 w-5" />
                Browse Blog
              </Link>
            </Button>
          </div>
          
          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Popular pages:</p>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary hover:underline flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-primary hover:underline flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-primary hover:underline flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary hover:underline flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

