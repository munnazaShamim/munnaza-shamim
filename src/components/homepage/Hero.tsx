'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { getWhatsAppLink } from '@/lib/socialLinks';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(92,124,250,0.12),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            initial={isMounted ? "hidden" : "visible"}
            animate={isMounted ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-[32px] md:text-[40px] font-bold leading-tight">
                Full-stack development, <span className="text-gradient">engineered around speed</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-secondaryText max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Full-stack developer specializing in Next.js, WordPress, and Laravel systems for businesses across Europe, the UK, UAE, and North America — built for real Core Web Vitals, not just a clean Lighthouse run.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href={getWhatsAppLink()} className="btn-hover-cta px-8 py-4 bg-ctaAccent text-background font-semibold rounded-lg text-center hover:bg-ctaAccentHover transition-colors">
                Start Your Project
              </Link>
              <Link href="/case-studies" className="btn-hover px-8 py-4 border border-border text-primaryText font-semibold rounded-lg text-center hover:bg-cardBackground transition-colors">
                View Case Studies
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-sm text-secondaryText">
                Live in production: a real-time vehicle auction platform with live bidding across dealer, seller, and admin dashboards, plus a network of high-traffic commercial marketplace sites.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="relative aspect-[1200/692] w-full rounded-xl overflow-hidden border border-border shadow-2xl">
                <Image
                  src="/PageSpeed-hero.webp"
                  alt="PageSpeed Insights performance report"
                  fill
                  sizes="(min-width: 1024px) 50vw, 90vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primaryAccent rounded-full opacity-10 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primaryAccent rounded-full opacity-10 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
