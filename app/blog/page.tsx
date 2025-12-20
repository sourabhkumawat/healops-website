'use client';

import { FadeIn, FadeInStagger } from '@/components/animations/fade-in';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';
import { trackEvent } from '@/lib/analytics';

export default function BlogPage() {
  const baseUrl = 'https://healops.com';
  
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'HealOps Blog',
    description: 'Product updates, engineering deep dives, and industry insights from the HealOps team.',
    url: `${baseUrl}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'HealOps',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `${baseUrl}/blog/${post.slug}`,
      datePublished: new Date(post.date).toISOString(),
      author: {
        '@type': 'Person',
        name: post.author,
      },
    })),
  };

  return (
    <div className="container px-4 md:px-6 py-20 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />
      <FadeIn className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Latest from the team.
        </h1>
        <p className="text-xl text-muted-foreground">
          Product updates, engineering deep dives, and industry insights.
        </p>
      </FadeIn>

      <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Card key={index} className="flex flex-col bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Badge variant="secondary" className="rounded-full">{post.category}</Badge>
                <span>•</span>
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
              </div>
              <CardTitle className="text-2xl mb-2">
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="hover:text-primary transition-colors"
                  onClick={() => {
                    trackEvent({
                      action: 'click',
                      category: 'Blog Post',
                      label: post.title,
                    });
                  }}
                >
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription className="text-base line-clamp-3">
                {post.excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link 
                href={`/blog/${post.slug}`} 
                className="w-full"
                onClick={() => {
                  trackEvent({
                    action: 'click',
                    category: 'Blog Post',
                    label: `Read more - ${post.title}`,
                  });
                }}
              >
                <Button variant="ghost" className="w-full justify-between hover:bg-transparent hover:text-primary group px-0">
                  Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </FadeInStagger>
    </div>
  );
}
