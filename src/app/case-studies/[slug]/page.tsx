import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Footer from '@/components/Footer';
import { caseStudies, getCaseStudy } from '@/lib/caseStudies';

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {};
  }

  const title = `${study.title} — Case Study | Munnaza Shamim`;

  return {
    title,
    description: study.summary,
    alternates: {
      canonical: `/case-studies/${study.slug}`,
    },
    openGraph: {
      type: 'article',
      title,
      description: study.summary,
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: study.title,
    description: study.summary,
    author: {
      '@type': 'Person',
      name: 'Munnaza Shamim',
    },
    keywords: study.techStack.join(', '),
  };

  return (
    <main className="min-h-screen pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/case-studies" className="text-primaryAccent text-sm font-semibold hover:underline">
            ← All case studies
          </Link>

          <div className="mt-4 mb-8">
            <div className="text-primaryAccent text-sm font-semibold mb-2">{study.client}</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{study.title}</h1>
            <p className="text-xl text-secondaryText">{study.summary}</p>
          </div>

          <ImagePlaceholder label={study.imageLabel} className="mb-12" aspect="aspect-video" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-cardBackground p-8 rounded-2xl border border-border">
              <h2 className="text-lg font-bold mb-3">The Challenge</h2>
              <p className="text-secondaryText">{study.challenge}</p>
            </div>
            <div className="bg-cardBackground p-8 rounded-2xl border border-border">
              <h2 className="text-lg font-bold mb-3">The Solution</h2>
              <p className="text-secondaryText">{study.solution}</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="flex flex-wrap gap-2">
              {study.features.map((feature) => (
                <span
                  key={feature}
                  className="text-sm bg-secondaryBackground text-secondaryText px-4 py-2 rounded-full border border-border"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {study.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm bg-cardBackground text-primaryText px-4 py-2 rounded-full border border-primaryAccent/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-16 bg-secondaryBackground p-8 rounded-2xl border border-border">
            <h2 className="text-2xl font-bold mb-6">Results &amp; Proof</h2>
            <ul className="space-y-3">
              {study.proof.map((point) => (
                <li key={point} className="flex items-start gap-3 text-secondaryText">
                  <span className="text-primaryAccent font-bold mt-0.5">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center border-t border-border pt-12">
            <h2 className="text-2xl font-bold mb-4">Have a similar system to build?</h2>
            <p className="text-secondaryText mb-8 max-w-xl mx-auto">
              I build real-time, high-traffic, and custom CMS systems the same way — engineered for
              production, not just a demo.
            </p>
            <Link
              href="/#contact"
              className="btn-hover-cta inline-block px-8 py-4 bg-ctaAccent text-background font-semibold rounded-lg hover:bg-ctaAccentHover transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
