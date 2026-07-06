import './globals.css';
import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION } from '@/lib/site';
import { socialLinks } from '@/lib/socialLinks';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sora',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords:
    'next.js developer, wordpress performance optimization, laravel cms development, core web vitals, technical seo, mern stack developer, real-time web applications',
  authors: [{ name: 'Munnaza Shamim' }],
  creator: 'Munnaza Shamim',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Munnaza Shamim',
  jobTitle: 'Full-Stack Developer & Performance Engineer',
  url: SITE_URL,
  sameAs: socialLinks
    .filter((link) => link.label !== 'WhatsApp')
    .map((link) => link.href),
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lahore',
    addressCountry: 'PK',
  },
  areaServed: ['Europe', 'United Kingdom', 'United Arab Emirates', 'North America'],
  worksFor: {
    '@type': 'Organization',
    name: 'Daikimedia',
  },
  knowsAbout: [
    'Next.js',
    'WordPress',
    'Laravel',
    'MERN Stack',
    'Technical SEO',
    'Core Web Vitals',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
