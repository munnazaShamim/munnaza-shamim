import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CaseStudyCTA from '@/components/CaseStudyCTA';
import CaseStudyGallery from '@/components/CaseStudyGallery';
import { getCaseStudy } from '@/lib/caseStudies';
import LeftArrow from '@/lib/icons/ArrowLeft';
import RightArrow from '@/lib/icons/ArrowRight';

const SLUG = 'nexus-clinic-laravel-cms-migration';

export function generateMetadata(): Metadata {
  const study = getCaseStudy(SLUG);
  if (!study) return {};

  const title = `${study.title} | Case Study | Munnaza Shamim`;

  return {
    title,
    description: study.summary,
    alternates: { canonical: `/case-studies/${SLUG}` },
    openGraph: { type: 'article', title, description: study.summary },
  };
}

const atAGlance = [
  { value: '487', label: 'Posts migrated' },
  { value: '126', label: 'Categories' },
  { value: '4', label: 'Lifecycle views' },
  { value: '2FA', label: 'On every login' },
];

const authFlow = [
  {
    step: '01',
    title: 'Register',
    gate: 'OTP by email',
    body: 'A new account is created, but it goes nowhere until a one-time code sent to that email address is entered back into the CMS.',
  },
  {
    step: '02',
    title: 'Sign in',
    gate: 'Password + OTP',
    body: 'Correct credentials are only the first factor. A fresh one-time code is issued on every sign-in, so a leaked password on its own opens nothing.',
  },
  {
    step: '03',
    title: 'Forgot password',
    gate: 'Emailed reset link',
    body: 'Recovery runs through a link sent to the registered address, rather than an admin resetting someone else’s password by hand.',
  },
];

const lifecycle = [
  {
    name: 'All Blogs',
    tone: 'accent' as const,
    body: 'Every post in one searchable table, with its image, category, date and status visible at a glance.',
  },
  {
    name: 'Published',
    tone: 'accent' as const,
    body: 'Only what is live on nexus-clinic.com right now, served straight from the CMS API to the front end.',
  },
  {
    name: 'Unpublished',
    tone: 'cta' as const,
    body: 'Drafts and pulled posts live in their own destination, so nothing is ever one misclick away from going live.',
  },
  {
    name: 'Deleted',
    tone: 'muted' as const,
    body: 'Deletion is soft. Removed posts land in a recoverable view instead of disappearing from the database.',
  },
];

const toneClasses = {
  accent: {
    card: 'border-primaryAccent/30',
    dot: 'bg-primaryAccent',
    text: 'text-primaryAccent',
  },
  cta: {
    card: 'border-ctaAccent/30',
    dot: 'bg-ctaAccent',
    text: 'text-ctaAccent',
  },
  muted: {
    card: 'border-border',
    dot: 'bg-mutedText',
    text: 'text-mutedText',
  },
};

export default function NexusClinicLaravelCMSCaseStudy() {
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
          <Link href="/case-studies" className="group inline-flex items-center gap-1.5 text-primaryAccent text-sm font-semibold hover:underline">
            <LeftArrow size={16} className="transition-transform duration-200 group-hover:-translate-x-1" />
            All case studies
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
                className="btn-hover group inline-flex items-center gap-1.5 mt-6 px-5 py-2.5 border border-primaryAccent/40 text-primaryAccent font-semibold rounded-lg hover:bg-primaryAccent hover:text-background transition-colors"
              >
                Visit the live site
                <RightArrow size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            )}
          </div>

          {gallery.length > 0 && <CaseStudyGallery gallery={gallery} />}

          <div className="mb-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {atAGlance.map((stat) => (
              <div
                key={stat.label}
                className="card-hover bg-cardBackground rounded-2xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primaryAccent">{stat.value}</div>
                <div className="text-xs text-secondaryText mt-2 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

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
            <h2 className="text-2xl font-bold mb-2">The Full Account Lifecycle, Not Just a Login</h2>
            <p className="text-secondaryText mb-6 max-w-2xl">
              A custom admin panel inherits none of a mature platform&apos;s hardening, so every way
              into the CMS was built as a verified step rather than a single password field.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {authFlow.map((stage) => (
                <div
                  key={stage.step}
                  className="card-hover relative bg-cardBackground rounded-2xl p-6 overflow-hidden"
                >
                  <span className="absolute -top-3 -right-1 text-6xl font-bold text-primaryAccent/10 select-none">
                    {stage.step}
                  </span>
                  <h3 className="font-bold mb-2">{stage.title}</h3>
                  <span className="inline-block text-xs bg-secondaryBackground text-primaryAccent px-3 py-1 rounded-full border border-primaryAccent/30 mb-3">
                    {stage.gate}
                  </span>
                  <p className="text-sm text-secondaryText">{stage.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-14">
            <h2 className="text-2xl font-bold mb-2">A Post Lifecycle You Can See</h2>
            <p className="text-secondaryText mb-6 max-w-2xl">
              Draft, live and deleted are not a status column buried in a filter. Each state is its
              own destination in the sidebar, so the team always knows what they are looking at.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {lifecycle.map((state) => {
                const tone = toneClasses[state.tone];
                return (
                  <div
                    key={state.name}
                    className={`bg-cardBackground rounded-2xl border ${tone.card} p-6 transition-colors`}
                  >
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className={`w-2 h-2 rounded-full ${tone.dot}`} />
                      <h3 className={`font-bold ${tone.text}`}>{state.name}</h3>
                    </div>
                    <p className="text-sm text-secondaryText">{state.body}</p>
                  </div>
                );
              })}
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

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-2">The Other Half of This Build</h2>
            <p className="text-secondaryText mb-6 max-w-2xl">
              This CMS replaced the backend behind a front end I had already migrated to Next.js for
              the same clinic.
            </p>
            <Link
              href="/case-studies/nexus-clinic-headless-wordpress-nextjs"
              className="card-hover group flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-cardBackground rounded-2xl p-6"
            >
              <div>
                <div className="text-primaryAccent text-sm font-semibold mb-1">Related case study</div>
                <div className="font-bold">Nexus Clinic: WordPress to Next.js Migration</div>
              </div>
              <span className="shrink-0 inline-flex items-center gap-1.5 text-primaryAccent text-sm font-semibold">
                Read it
                <RightArrow size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>

          <CaseStudyCTA text="I build custom CMS platforms end to end, from the account security around the login to the API that feeds the live site. Nothing here depends on a plugin ecosystem staying maintained." />
        </div>
      </div>
    </main>
  );
}
