import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Munnaza - Premium Developer Portfolio',
  description: 'High-performance web development services for international clients',
  keywords: 'web development, next.js, wordpress, mern, performance optimization, technical seo, core web vitals',
  authors: [{ name: 'Munnaza' }],
  creator: 'Munnaza',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://munnaza-portfolio.vercel.app',
    title: 'Munnaza - Premium Developer Portfolio',
    description: 'High-performance web development services for international clients',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Munnaza Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Munnaza - Premium Developer Portfolio',
    description: 'High-performance web development services for international clients',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://munnaza-portfolio.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}