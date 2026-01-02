'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/atoms/card';
import { Badge } from '@/components/atoms/badge';
import { Button } from '@/components/atoms/button';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    readTime: string;
}

interface BlogPostCardProps {
    post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
    return (
        <Card className="flex flex-col bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
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
    );
}
