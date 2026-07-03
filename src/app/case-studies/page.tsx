import type { Metadata } from 'next';
import Link from 'next/link';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Footer from '@/components/Footer';
import { caseStudies } from '@/lib/caseStudies';

const PAGE_TITLE = 'Case Studies — Real-Time, WordPress & Laravel Systems in Production';
const PAGE_DESCRIPTION =
  'Full-stack case studies: a real-time vehicle auction platform with live bidding, a multi-site commercial marketplace network, and custom Laravel CMS builds — engineered for performance and scale.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: '/case-studies',
  },
  openGraph: {
    type: 'website',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function CaseStudiesIndexPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Link href="/" className="text-primaryAccent text-sm font-semibold hover:underline">
            ← Back to home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4">Case Studies</h1>
          <p className="text-xl text-secondaryText max-w-2xl mx-auto">
            Real systems, in production, built for real constraints
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="card-hover bg-cardBackground rounded-2xl border border-border overflow-hidden block"
            >
              <div className="p-8">
                <ImagePlaceholder label={study.imageLabel} className="mb-6" />
                <div className="text-primaryAccent text-sm font-semibold mb-2">{study.client}</div>
                <h2 className="text-xl font-bold mb-3">{study.title}</h2>
                <p className="text-sm text-secondaryText mb-4">{study.summary}</p>
                <span className="text-primaryAccent font-semibold text-sm">Read full case study →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
