import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blogPosts';

const PAGE_TITLE = 'Technical Blog — Performance, SEO & Architecture Notes | Munnaza Shamim';
const PAGE_DESCRIPTION =
  'Practical articles on Core Web Vitals, WordPress-to-Next.js migrations, real-time WebSocket architecture, and database performance, written from real production work.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    type: 'website',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Link href="/" className="text-primaryAccent text-sm font-semibold hover:underline">
            ← Back to home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4">Technical Insights</h1>
          <p className="text-xl text-secondaryText max-w-2xl mx-auto">
            Notes from production — performance, SEO, and architecture decisions from real client work
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card-hover bg-cardBackground rounded-2xl border border-border overflow-hidden group block"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold px-3 py-1 bg-primaryAccent text-background rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-secondaryText">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-primaryAccent transition-colors">
                  {post.title}
                </h2>
                <p className="text-secondaryText mb-4">{post.excerpt}</p>
                <span className="text-primaryAccent font-semibold text-sm">Read article →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
