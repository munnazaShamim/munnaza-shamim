import Link from 'next/link';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen pt-32 pb-20 flex flex-col">
      <div className="container mx-auto px-4 flex-1 flex items-center justify-center">
        <div className="max-w-xl text-center">
          <div className="text-7xl md:text-8xl font-bold text-gradient mb-6">404</div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">This page doesn&apos;t exist</h1>
          <p className="text-secondaryText text-lg mb-10">
            The page you&apos;re looking for was moved, renamed, or never shipped. The rest of the site is very much in production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="btn-hover-cta px-8 py-4 bg-ctaAccent text-background font-semibold rounded-lg hover:bg-ctaAccentHover transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/case-studies"
              className="btn-hover px-8 py-4 border border-border text-primaryText font-semibold rounded-lg hover:bg-cardBackground transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
