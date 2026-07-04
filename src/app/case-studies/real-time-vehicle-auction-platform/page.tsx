import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import CaseStudyCTA from '@/components/CaseStudyCTA';
import CaseStudyGallery from '@/components/CaseStudyGallery';
import { getCaseStudy } from '@/lib/caseStudies';

const SLUG = 'real-time-vehicle-auction-platform';

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

export default function AuctionPlatformCaseStudy() {
  const study = getCaseStudy(SLUG);
  if (!study) notFound();

  const gallery = study.gallery ?? [];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: study.title,
    description: study.summary,
    author: { '@type': 'Person', name: 'Munnaza Shamim' },
    keywords: study.techStack.join(', '),
  };

  const lifecycle = [
    {
      step: 'A user registers',
      detail: 'Notification emails go out to the new user and the admin, who then manually verifies the account before dashboard access is granted.',
    },
    {
      step: 'A seller lists a vehicle',
      detail: 'The new listing goes live and triggers emails to both the seller and the admin.',
    },
    {
      step: 'Bidding happens live',
      detail: 'Each auction runs in its own authenticated WebSocket room — bid updates push instantly to logged-in participants only, no refresh, no public broadcast.',
    },
    {
      step: 'The auction closes',
      detail: 'Completion emails go out to the seller, the admin, and the highest bidder, closing the loop on the transaction.',
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/case-studies" className="text-primaryAccent text-sm font-semibold hover:underline">
            ← All case studies
          </Link>

          <div className="mt-4 mb-10">
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
            <p className="text-xl text-secondaryText max-w-3xl">{study.summary}</p>
          </div>

          <CaseStudyGallery gallery={gallery} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <div className="bg-cardBackground p-8 rounded-2xl border border-border">
              <h2 className="text-lg font-bold mb-3">The Challenge</h2>
              <p className="text-secondaryText">{study.challenge}</p>
            </div>
            <div className="bg-cardBackground p-8 rounded-2xl border border-border">
              <h2 className="text-lg font-bold mb-3">The Solution</h2>
              <p className="text-secondaryText">{study.solution}</p>
            </div>
          </div>

          <div className="mb-14">
            <h2 className="text-2xl font-bold mb-6">How the Auction Lifecycle Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {lifecycle.map((item, index) => (
                <div key={item.step} className="bg-cardBackground p-6 rounded-2xl border border-border relative">
                  <div className="text-primaryAccent font-bold text-sm mb-2">Step {index + 1}</div>
                  <h3 className="font-semibold mb-2">{item.step}</h3>
                  <p className="text-sm text-secondaryText">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-14">
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

          <div className="mb-14">
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

          <CaseStudyCTA text="I build real-time, high-traffic bidding and auction systems the same way — engineered for production, not just a demo." />
        </div>
      </div>
      <Footer />
    </main>
  );
}
