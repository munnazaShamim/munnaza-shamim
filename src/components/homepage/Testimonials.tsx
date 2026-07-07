'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, BadgeCheck } from 'lucide-react';

// Verifiable project outcomes — every statement here is backed by its linked case study.
// When real client quotes come in, they can be added alongside (never invented).
const testimonials = [
  {
    outcome:
      'Every bid is pushed live over WebSockets to Seller, Dealer, and Admin dashboards — no page reloads — with the client’s XD design implemented exactly as delivered.',
    attribution: 'Real-Time Vehicle Auction Platform',
    location: 'Germany',
    href: '/case-studies/real-time-vehicle-auction-platform',
    linkLabel: 'Read the case study',
  },
  {
    outcome:
      'Five production marketplace sites run on one custom listing and search engine, each with its own technical SEO foundation so every site ranks independently.',
    attribution: 'Commercial Vehicle Marketplace Network',
    location: 'Germany',
    href: '/case-studies/commercial-vehicle-marketplace-network',
    linkLabel: 'Read the case study',
  },
  {
    outcome:
      'A WordPress-to-headless-Next.js migration that kept the team’s editing workflow — and landed 100 desktop / 95 mobile Lighthouse Performance with a 0.8s LCP.',
    attribution: 'Nexus Clinic',
    location: 'Kuala Lumpur, Malaysia',
    href: '/case-studies/nexus-clinic-headless-wordpress-nextjs',
    linkLabel: 'Read the case study',
  },
  {
    outcome:
      'Blog publishing stayed simple for the clinic team while admin access was locked behind OTP two-factor login, with content served through a secure custom API.',
    attribution: 'Dr. Soma Plastic Surgery',
    location: 'Malaysia',
    href: '/case-studies/custom-laravel-blog-cms-secure-api',
    linkLabel: 'Read the case study',
  },
  {
    outcome:
      'One centralized caching layer replaced scattered, repeated API calls — 97 mobile / 99 desktop Lighthouse Performance on a site that previously stalled on every page.',
    attribution: 'Vinyl & Carpet Flooring Retailer',
    location: 'Malaysia',
    href: '/case-studies/furnishings-my-nextjs-api-caching',
    linkLabel: 'Read the case study',
  },
];

const AUTO_ADVANCE_MS = 6000;

export default function Testimonials() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setActiveIndex((index + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const timer = setInterval(() => {
      goTo(activeIndex + 1, 1);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [activeIndex, isPaused, prefersReducedMotion, goTo]);

  const active = testimonials[activeIndex];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Proven Project Outcomes
          </motion.h2>
          <motion.p
            className="text-xl text-secondaryText max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What each engagement actually delivered — every claim traceable to its case study
          </motion.p>
        </div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative bg-cardBackground rounded-2xl border border-border overflow-hidden">
            <div className="absolute top-8 left-8 text-primaryAccent/15" aria-hidden="true">
              <BadgeCheck className="w-16 h-16" />
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.href}
                initial={{ opacity: 0, x: 40 * direction }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 * direction }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative p-10 md:p-14 min-h-[280px] flex flex-col justify-center"
              >
                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                  {active.outcome}
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-primaryAccent/10 border border-primaryAccent/20 flex items-center justify-center text-primaryAccent font-bold">
                    {active.attribution.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{active.attribution}</div>
                    <div className="text-sm text-secondaryText">{active.location}</div>
                  </div>
                  <Link
                    href={active.href}
                    className="ml-auto text-primaryAccent font-semibold text-sm hover:underline whitespace-nowrap hidden sm:block"
                  >
                    {active.linkLabel} →
                  </Link>
                </div>
                <Link
                  href={active.href}
                  className="mt-4 text-primaryAccent font-semibold text-sm hover:underline sm:hidden"
                >
                  {active.linkLabel} →
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => goTo(activeIndex - 1, -1)}
                className="w-11 h-11 rounded-full bg-background/70 backdrop-blur border border-border flex items-center justify-center text-primaryText hover:bg-primaryAccent hover:border-primaryAccent hover:text-background transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => goTo(activeIndex + 1, 1)}
                className="w-11 h-11 rounded-full bg-background/70 backdrop-blur border border-border flex items-center justify-center text-primaryText hover:bg-primaryAccent hover:border-primaryAccent hover:text-background transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Dots — padded to a 24px+ tap target while keeping the visual dot small */}
          <div className="flex justify-center gap-1 mt-6">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.href}
                type="button"
                aria-label={`Go to outcome ${index + 1}`}
                onClick={() => goTo(index, index > activeIndex ? 1 : -1)}
                className="p-2.5 flex items-center justify-center"
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-primaryAccent'
                      : 'w-2 bg-border hover:bg-mutedText'
                  }`}
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
