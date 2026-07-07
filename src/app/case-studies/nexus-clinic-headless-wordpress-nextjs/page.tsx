import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CaseStudyCTA from '@/components/CaseStudyCTA';
import CaseStudyGallery from '@/components/CaseStudyGallery';
import { getCaseStudy } from '@/lib/caseStudies';

const SLUG = 'nexus-clinic-headless-wordpress-nextjs';

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

const mobileScores = [
  { label: 'Performance', value: 95 },
  { label: 'Accessibility', value: 97 },
  { label: 'Best Practices', value: 100 },
  { label: 'SEO', value: 100 },
];

const desktopScores = [
  { label: 'Performance', value: 100 },
  { label: 'Accessibility', value: 97 },
  { label: 'Best Practices', value: 100 },
  { label: 'SEO', value: 100 },
];

const desktopMetrics = [
  { label: 'First Contentful Paint', value: '0.5s' },
  { label: 'Largest Contentful Paint', value: '0.8s' },
  { label: 'Total Blocking Time', value: '30ms' },
  { label: 'Cumulative Layout Shift', value: '0.01' },
  { label: 'Speed Index', value: '0.5s' },
];

export default function NexusClinicCaseStudy() {
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
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hover inline-flex items-center gap-2 mt-6 px-5 py-2.5 border border-primaryAccent/40 text-primaryAccent font-semibold rounded-lg hover:bg-primaryAccent hover:text-background transition-colors"
              >
                Visit the live site ↗
              </a>
            )}
          </div>

          {gallery.length > 0 && <CaseStudyGallery gallery={gallery} />}

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
            <h2 className="text-2xl font-bold mb-2">Core Web Vitals &amp; Lighthouse Scores</h2>
            <p className="text-secondaryText mb-6">
              Real Lighthouse audits of the live site, mobile and desktop.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-cardBackground rounded-2xl border border-border overflow-hidden">
                <div className="aspect-video w-full relative border-b border-border">
                  <Image
                    src="/nexus-core-web-vital.png"
                    alt="Nexus Clinic — mobile Lighthouse audit"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-4">Mobile</h3>
                  <div className="grid grid-cols-4 gap-3">
                    {mobileScores.map((score) => (
                      <div key={score.label} className="text-center">
                        <div className="text-2xl font-bold text-primaryAccent">{score.value}</div>
                        <div className="text-xs text-secondaryText mt-1">{score.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-cardBackground rounded-2xl border border-border overflow-hidden">
                <div className="aspect-video w-full relative border-b border-border">
                  <Image
                    src="/nexus-core-web-vital-desktop.png"
                    alt="Nexus Clinic — desktop Lighthouse audit"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-4">Desktop</h3>
                  <div className="grid grid-cols-4 gap-3">
                    {desktopScores.map((score) => (
                      <div key={score.label} className="text-center">
                        <div className="text-2xl font-bold text-primaryAccent">{score.value}</div>
                        <div className="text-xs text-secondaryText mt-1">{score.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondaryBackground rounded-2xl border border-border p-6">
              <h3 className="font-semibold mb-4">Desktop Core Web Vitals</h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {desktopMetrics.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <div className="text-xl font-bold text-primaryAccent">{metric.value}</div>
                    <div className="text-xs text-secondaryText mt-1">{metric.label}</div>
                  </div>
                ))}
              </div>
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

          <CaseStudyCTA text="I build fast, SEO-optimized Next.js front ends on top of headless CMS backends the same way — engineered for real Core Web Vitals, not just a demo." />
        </div>
      </div>
    </main>
  );
}
