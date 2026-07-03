import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

const SITE_URL = 'http://munnaza-shamim.vercel.app/';
const SITE_TITLE = 'Munnaza Shamim — Full-Stack Developer & Performance Engineer';
const SITE_DESCRIPTION =
  'Full-stack developer specializing in Next.js, WordPress, and Laravel systems engineered for speed and technical SEO. Available for projects across Europe, the UK, UAE, and North America.';

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
    images: [
      {
        url: '/Munnaza.jpg',
        width: 1200,
        height: 630,
        alt: 'Munnaza Shamim — Full-Stack Developer & Performance Engineer',
      },
    ],
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
    canonical: SITE_URL,
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Munnaza Shamim',
  jobTitle: 'Full-Stack Developer & Performance Engineer',
  url: SITE_URL,
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
    <html lang="en">
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