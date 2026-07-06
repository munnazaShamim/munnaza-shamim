'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SocialLink from './SocialLink';
import { socialLinks, PHONE_DISPLAY, PHONE_LINK, EMAIL, EMAIL_LINK } from '@/lib/socialLinks';

const serviceLinks = [
  { label: 'Next.js Development', href: '/case-studies/nexus-clinic-headless-wordpress-nextjs' },
  { label: 'WordPress Engineering', href: '/case-studies/real-time-vehicle-auction-platform' },
  { label: 'Laravel CMS Development', href: '/case-studies/custom-laravel-blog-cms-secure-api' },
  { label: 'Technical SEO & Core Web Vitals', href: '/case-studies/furnishings-my-nextjs-api-caching' },
  { label: 'All Services', href: '/#services' },
];

const resourceLinks = [
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Core Web Vitals in 2026', href: '/blog/core-web-vitals-2026-lcp-inp-cls' },
  { label: 'WordPress → Next.js Migration Guide', href: '/blog/wordpress-to-nextjs-migration-seo' },
  { label: 'Privacy Policy', href: '/privacy' },
];

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <footer className="border-t border-border bg-secondaryBackground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="text-2xl font-bold mb-4">Munnaza Shamim</div>
            <p className="text-secondaryText mb-4">
              Full-stack development, engineered around speed — for clients across Europe, the UK, UAE, and North America.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <SocialLink key={social.label} {...social} size="sm" />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-secondaryText">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-primaryAccent transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-secondaryText">
              {resourceLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-primaryAccent transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-secondaryText">
              <li>
                <a href={PHONE_LINK} className="hover:text-primaryAccent transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={EMAIL_LINK} className="hover:text-primaryAccent transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li>Lahore, Pakistan</li>
              <li className="text-secondaryText text-sm">Working hours aligned with CET</li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center text-secondaryText">
          <p>&copy; {new Date().getFullYear()} Munnaza Shamim. All rights reserved.</p>
          <Link href="/privacy" className="text-sm hover:text-primaryAccent transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
