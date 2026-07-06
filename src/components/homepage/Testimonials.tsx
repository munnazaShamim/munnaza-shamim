'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Placeholder testimonial copy — swap `quote` with the client's real words as they come in.
// Attribution is role/project-based (not a named individual) until a real name is provided,
// so nothing here reads as a fabricated person once quotes are updated.
const testimonials = [
  {
    quote:
      'Bidding had to feel instant and be bulletproof under real money — every bid, every dashboard, matched our design pixel-for-pixel and just worked from day one.',
    attribution: 'Project Lead — Vehicle Auction Platform',
    location: 'Germany',
    href: '/case-studies/real-time-vehicle-auction-platform',
    linkLabel: 'Read the case study',
  },
  {
    quote:
      'We needed five sites to rank on their own, not cannibalize each other, while sharing one listing engine behind the scenes. That balance is exactly what got built.',
    attribution: 'Operations Manager — Commercial Vehicle Marketplace Network',
    location: 'Germany',
    href: '/case-studies/commercial-vehicle-marketplace-network',
    linkLabel: 'Read the case study',
  },
  {
    quote:
      'Moving off traditional WordPress felt risky for our rankings. The migration kept our editing workflow intact and the site came out faster than we imagined possible.',
    attribution: 'Clinic Director — Nexus Clinic',
    location: 'Kuala Lumpur, Malaysia',
    href: '/case-studies/nexus-clinic-headless-wordpress-nextjs',
    linkLabel: 'Read the case study',
  },
  {
    quote:
      'Publishing content needed to be simple for our team but locked down properly on the admin side. The two-factor login gave us that without slowing anyone down.',
    attribution: 'Practice Manager — Dr. Soma Plastic Surgery',
    location: 'Malaysia',
    href: '/case-studies/custom-laravel-blog-cms-secure-api',
    linkLabel: 'Read the case study',
  },
  {
    quote:
      'Our site was already built, just slow — every page felt like it was waiting on something. Finding and fixing the actual bottleneck made an immediate, visible difference.',
    attribution: 'Store Owner — Vinyl & Carpet Flooring Retailer',
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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setActiveIndex((index + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      goTo(activeIndex + 1, 1);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [activeIndex, isPaused, goTo]);

  const active = testimonials[activeIndex];

  return (
    <section className="py-20 bg-secondaryBackground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            What Clients Say
          </motion.h2>
          <motion.p
            className="text-xl text-secondaryText max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From the businesses behind the systems in the case studies above
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
              <Quote className="w-16 h-16" fill="currentColor" />
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
                  &ldquo;{active.quote}&rdquo;
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
                aria-label={`Go to testimonial ${index + 1}`}
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
