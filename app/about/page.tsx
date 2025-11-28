'use client';

import { FadeIn, FadeInStagger } from '@/components/animations/fade-in';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const team = [
  {
    name: 'Alex Chen',
    role: 'Co-founder & CEO',
    bio: 'Ex-Google SRE. Obsessed with reliability.',
    initials: 'AC',
  },
  {
    name: 'Sarah Jones',
    role: 'Co-founder & CTO',
    bio: 'Built high-scale systems at Netflix.',
    initials: 'SJ',
  },
  {
    name: 'Mike Smith',
    role: 'Head of Product',
    bio: 'Product leader from Datadog.',
    initials: 'MS',
  },
];

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-20 md:py-32">
      <FadeIn className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          We&apos;re on a mission to make operations <span className="text-primary">autonomous</span>.
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Engineering teams are burning out. Alerts are noisy. Context is scattered. We&apos;re building HealOps to fix that.
        </p>
        <div className="prose prose-invert max-w-none">
          <p>
            HealOps was born from frustration. After years of waking up to 3am pages for non-critical issues and struggling to piece together what happened during outages, we decided there had to be a better way.
          </p>
          <p>
            We believe that incident management shouldn&apos;t be a chaotic fire-drill. It should be a structured, calm, and data-driven process that helps teams learn and improve.
          </p>
        </div>
      </FadeIn>

      <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <Card key={index} className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4 border-2 border-primary/20">
                <AvatarImage src={`/placeholder-avatar-${index}.jpg`} />
                <AvatarFallback className="text-lg bg-primary/10 text-primary">{member.initials}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-primary text-sm mb-4">{member.role}</p>
              <p className="text-muted-foreground text-sm">
                {member.bio}
              </p>
            </CardContent>
          </Card>
        ))}
      </FadeInStagger>
    </div>
  );
}
