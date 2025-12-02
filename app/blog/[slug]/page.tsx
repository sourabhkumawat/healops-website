import { notFound } from 'next/navigation';
import { getPostBySlug, blogPosts } from '@/lib/blog-data';
import { FadeIn } from '@/components/animations/fade-in';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container px-4 md:px-6 py-20 md:py-32 max-w-3xl mx-auto">
      <FadeIn>
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-primary group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Button>
          </Link>
        </div>

        <div className="space-y-6 mb-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Badge variant="secondary" className="rounded-full">{post.category}</Badge>
            <span>•</span>
            <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-4 border-t border-border/50">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="font-medium">{post.author}</div>
              <div className="text-xs text-muted-foreground">HealOps Team</div>
            </div>
          </div>
        </div>

        <div 
          className="prose prose-invert prose-lg max-w-none 
            prose-headings:font-bold prose-headings:tracking-tight prose-headings:mt-12 prose-headings:mb-6 
            prose-p:leading-relaxed prose-p:mb-8 prose-p:text-muted-foreground
            prose-li:text-muted-foreground prose-li:mb-2
            prose-strong:text-foreground
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-xl prose-img:my-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </FadeIn>
    </article>
  );
}
