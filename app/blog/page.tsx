'use client';

import { FadeIn, FadeInStagger } from '@/components/atoms/animations/fade-in';
import { BlogPostCard } from '@/components/molecules/blog-post-card';
import { blogPosts } from '@/lib/blog-data';

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
          <BlogPostCard key={index} post={post} />
        ))}
      </FadeInStagger>
    </div>
  );
}
