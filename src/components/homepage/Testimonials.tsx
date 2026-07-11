'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, BadgeCheck } from 'lucide-react';
import { zoomIn, revealViewport, reveal } from '@/lib/animations';
import RightArrow from '@/lib/icons/ArrowRight';

const testimonials = [
  {
    outcome:
      "We needed real-time bidding without delays, and Munnaza delivered exactly that. Every bid updates instantly across all dashboards, and the platform matches our original XD designs perfectly. Communication was excellent throughout the project.",
    attribution: "Project Manager",
    location: "Germany",
    href: "/case-studies/real-time-vehicle-auction-platform",
    linkLabel: "Read the case study",
  },
  {
    outcome:
    "This wasn't our first project with Munnaza. She helped us build and improve several platforms, and everything has been delivered on time with great attention to detail. Managing our websites is now much easier, and the whole process has always been smooth",
    attribution: "Business Owner",
    location: "Germany",
    href: "/case-studies/commercial-vehicle-marketplace-network",
    linkLabel: "Read the case study",
  },
  {
    outcome:
      "Our migration from WordPress to Next.js was smooth, and we didn't lose the editing experience our team was used to. The website is noticeably faster, patients have a better experience, and the performance scores speak for themselves.",
    attribution: "Marketing Manager",
    location: "Kuala Lumpur, Malaysia",
    href: "/case-studies/nexus-clinic-headless-wordpress-nextjs",
    linkLabel: "Read the case study",
  },
  {
    outcome:
      "The custom CMS is simple for our staff to use, while the secure login and API give us confidence that everything is protected. The system is reliable, easy to manage, and exactly what we needed.",
    attribution: "Clinic Administrator",
    location: "Malaysia",
    href: "/case-studies/custom-laravel-blog-cms-secure-api",
    linkLabel: "Read the case study",
  },
  {
    outcome:
      "Our website became dramatically faster after the caching improvements. Pages load quickly, visitors have a smoother experience, and we finally have a system that's both fast and easy to maintain.",
    attribution: "Operations Manager",
    location: "Malaysia",
    href: "/case-studies/furnishings-my-nextjs-api-caching",
    linkLabel: "Read the case study",
  },
];

const AUTO_ADVANCE_MS = 6000;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

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
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            transition={reveal()}
          >
            Proven Project Outcomes
          </motion.h2>
          <motion.p
            className="text-xl text-secondaryText max-w-2xl mx-auto"
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            transition={reveal(0.15)}
          >
            What each engagement actually delivered, with every claim traceable to its case study
          </motion.p>
        </div>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          transition={reveal(0.15)}
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
                    className="group ml-auto items-center gap-1.5 text-primaryAccent font-semibold text-sm hover:underline whitespace-nowrap hidden sm:inline-flex"
                  >
                    {active.linkLabel}
                    <RightArrow size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
                <Link
                  href={active.href}
                  className="group mt-4 inline-flex items-center gap-1.5 text-primaryAccent font-semibold text-sm hover:underline sm:hidden"
                >
                  {active.linkLabel}
                  <RightArrow size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
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
