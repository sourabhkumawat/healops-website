'use client';

import { FadeIn, FadeInStagger } from '@/components/animations/fade-in';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Introducing HealOps v2.0',
    excerpt: 'A complete redesign of our incident management platform, focused on speed and clarity.',
    date: 'Nov 28, 2025',
    author: 'Alex Chen',
    category: 'Product',
    slug: 'introducing-v2',
  },
  {
    title: 'How to reduce MTTR by 50%',
    excerpt: 'Best practices for incident response that we learned from analyzing over 10,000 incidents.',
    date: 'Nov 15, 2025',
    author: 'Sarah Jones',
    category: 'Engineering',
    slug: 'reduce-mttr',
  },
  {
    title: 'The future of observability is AI',
    excerpt: 'Why we are betting big on AI-driven root cause analysis and what it means for you.',
    date: 'Nov 01, 2025',
    author: 'Mike Smith',
    category: 'Vision',
    slug: 'future-of-observability',
  },
];

export default function BlogPage() {
  return (
    <div className="container px-4 md:px-6 py-20 md:py-32">
      <FadeIn className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Latest from the team.
        </h1>
        <p className="text-xl text-muted-foreground">
          Product updates, engineering deep dives, and industry insights.
        </p>
      </FadeIn>

      <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <Card key={index} className="flex flex-col bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Badge variant="secondary" className="rounded-full">{post.category}</Badge>
                <span>•</span>
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
              </div>
              <CardTitle className="text-2xl mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription className="text-base">
                {post.excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                {post.author}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="p-0 h-auto hover:bg-transparent hover:text-primary group">
                Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </FadeInStagger>
    </div>
  );
}
