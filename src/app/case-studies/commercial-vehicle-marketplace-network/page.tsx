import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import CaseStudyCTA from '@/components/CaseStudyCTA';
import CaseStudyGallery from '@/components/CaseStudyGallery';
import { getCaseStudy } from '@/lib/caseStudies';

const SLUG = 'commercial-vehicle-marketplace-network';

export function generateMetadata(): Metadata {
  const study = getCaseStudy(SLUG);
  if (!study) return {};

  const title = `${study.title} — Case Study | Munnaza Shamim`;

  return {
    title,
    description: study.summary,
    alternates: { canonical: `/case-studies/${SLUG}` },
    openGraph: { type: 'article', title, description: study.summary },
  };
}

export default function MarketplaceNetworkCaseStudy() {
  const study = getCaseStudy(SLUG);
  if (!study) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: study.title,
    description: study.summary,
    author: { '@type': 'Person', name: 'Munnaza Shamim' },
    keywords: study.techStack.join(', '),
  };

  const gallery = study.gallery ?? [];

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
            <div className="flex flex-wrap gap-2 mb-3">
              {study.categories.map((category) => (
                <span
                  key={category}
                  className="text-xs bg-secondaryBackground text-primaryAccent px-3 py-1 rounded-full border border-primaryAccent/30"
                >
                  {category}
                </span>
              ))}
            </div>
            <div className="text-primaryAccent text-sm font-semibold mb-2">{study.client}</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{study.title}</h1>
            <p className="text-xl text-secondaryText">{study.summary}</p>
          </div>

          {gallery.length > 0 ? (
            <CaseStudyGallery gallery={gallery} />
          ) : (
            <ImagePlaceholder label={study.imageLabel} className="mb-12" aspect="aspect-video" />
          )}

          <div className="mb-12">
            <h2 className="text-lg font-bold mb-3">The Challenge</h2>
            <p className="text-secondaryText bg-cardBackground p-8 rounded-2xl border border-border">
              {study.challenge}
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-lg font-bold mb-3">The Solution</h2>
            <p className="text-secondaryText bg-cardBackground p-8 rounded-2xl border border-border">
              {study.solution}
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {study.features.map((feature) => (
                <div
                  key={feature}
                  className="bg-cardBackground p-5 rounded-xl border border-border text-secondaryText font-medium"
                >
                  {feature}
                </div>
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

          <CaseStudyCTA text="I build custom listing, search, and multi-site content systems the same way — engineered for scale, not a page-builder template." />
        </div>
      </div>
    </main>
  );
}
