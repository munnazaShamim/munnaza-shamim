import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CaseStudyCTA from '@/components/CaseStudyCTA';
import { blogPosts, getBlogPost } from '@/lib/blogPosts';
import LeftArrow from '@/lib/icons/ArrowLeft';
import RightArrow from '@/lib/icons/ArrowRight';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const title = `${post.title} | Munnaza Shamim`;

  return {
    title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      title,
      description: post.excerpt,
      publishedTime: post.publishDate,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Person', name: 'Munnaza Shamim' },
    datePublished: post.publishDate,
  };

  return (
    <main className="min-h-screen pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="group inline-flex items-center gap-1.5 text-primaryAccent text-sm font-semibold hover:underline">
            <LeftArrow size={16} className="transition-transform duration-200 group-hover:-translate-x-1" />
            All articles
          </Link>

          <div className="mt-4 mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 bg-primaryAccent text-background rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-secondaryText">{post.readTime}</span>
              <span className="text-sm text-secondaryText">·</span>
              <span className="text-sm text-secondaryText">
                {new Date(post.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-secondaryText">{post.intro}</p>
            <div className="text-primaryAccent text-sm font-semibold mt-6">
              Written by Munnaza Shamim, Full-Stack Developer &amp; Performance Engineer
            </div>
          </div>

          <div className="space-y-12 mb-14">
            {post.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-secondaryText leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.code && (
                  <div className="mt-6 rounded-xl border border-border overflow-hidden">
                    <div className="px-4 py-2 bg-secondaryBackground border-b border-border text-xs font-semibold text-mutedText uppercase tracking-wider">
                      {section.code.language}
                    </div>
                    <pre className="bg-cardBackground p-5 overflow-x-auto text-sm leading-relaxed text-primaryText">
                      <code>{section.code.snippet}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mb-14 bg-secondaryBackground rounded-2xl border border-border p-8">
            <h2 className="text-2xl font-bold mb-6">Key Takeaways</h2>
            <ul className="space-y-3">
              {post.takeaways.map((point) => (
                <li key={point} className="flex items-start gap-3 text-secondaryText">
                  <span className="text-primaryAccent font-bold mt-0.5">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {post.relatedCaseStudy && (
            <div className="mb-14">
              <Link
                href={`/case-studies/${post.relatedCaseStudy.slug}`}
                className="group inline-flex items-center gap-1.5 text-primaryAccent font-semibold hover:underline"
              >
                {post.relatedCaseStudy.label}
                <RightArrow size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          )}

          <CaseStudyCTA text="If this is the kind of problem you're dealing with right now, I can help you fix it in your own codebase." />
        </div>
      </div>
    </main>
  );
}
