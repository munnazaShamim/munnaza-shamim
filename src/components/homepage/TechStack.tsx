'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from 'framer-motion';

// Each group gets its own accent so the marquee reads as a varied,
// scannable strip instead of a wall of identical cards.
const groupColors = {
  language: '#A78BFA',
  frontend: '#5C7CFA',
  backend: '#34D399',
  cms: '#D4A853',
  database: '#F472B6',
  realtime: '#22D3EE',
  infra: '#2DD4BF',
} as const;

const technologies = [
  { name: "HTML5", category: "Markup", color: groupColors.language },
  { name: "CSS3", category: "Styling", color: groupColors.language },
  { name: "JavaScript", category: "Language", color: groupColors.language },
  { name: "TypeScript", category: "Language", color: groupColors.language },
  { name: "React", category: "Frontend Library", color: groupColors.frontend },
  { name: "Next.js", category: "Frontend Framework", color: groupColors.frontend },
  { name: "Tailwind CSS", category: "CSS Framework", color: groupColors.frontend },
  { name: "Node.js", category: "Backend Runtime", color: groupColors.backend },
  { name: "Express", category: "Backend Framework", color: groupColors.backend },
  { name: "PHP", category: "Backend Language", color: groupColors.backend },
  { name: "Laravel", category: "CMS Framework", color: groupColors.backend },
  { name: "WordPress", category: "CMS", color: groupColors.cms },
  { name: "WooCommerce", category: "E-Commerce", color: groupColors.cms },
  { name: "MySQL / MariaDB", category: "Database", color: groupColors.database },
  { name: "MongoDB", category: "Database", color: groupColors.database },
  { name: "WebSockets", category: "Real-Time", color: groupColors.realtime },
  { name: "REST APIs", category: "Integration", color: groupColors.realtime },
  { name: "VPS", category: "Server Management", color: groupColors.infra },
  { name: "cPanel / Apache", category: "Server Management", color: groupColors.infra },
  { name: "Cloudflare", category: "CDN & Security", color: groupColors.infra },
  { name: "Vercel", category: "Deployment", color: groupColors.infra },
];

const metrics = [
  {
    value: "100+",
    label: "Websites & Systems Shipped",
    description: "WordPress, Next.js, and Laravel builds across four years"
  },
  {
    value: "4+ yrs",
    label: "Full-Stack Development",
    description: "Junior WordPress developer to senior Next.js engineer"
  },
  {
    value: "5",
    label: "Commercial Vehicle Marketplaces",
    description: "Custom listing, filtering, and search infrastructure"
  },
  {
    value: "Real-Time",
    label: "Live Bidding Platform",
    description: "Custom PHP/MySQL auction engine with Node.js WebSockets"
  }
];

function MarqueeTrack({ items, speed = 90 }: { items: typeof technologies; speed?: number }) {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const halfWidthRef = useRef(0);
  const isPausedRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (trackRef.current) {
      halfWidthRef.current = trackRef.current.scrollWidth / 2;
    }
  }, []);

  useAnimationFrame((_, delta) => {
    if (prefersReducedMotion || !halfWidthRef.current || isPausedRef.current) return;
    let next = x.get() - (speed * delta) / 1000;
    if (next <= -halfWidthRef.current) {
      next += halfWidthRef.current;
    }
    x.set(next);
  });

  return (
    <motion.div
      ref={trackRef}
      className="flex w-max gap-3 sm:gap-6 py-2"
      style={{ x }}
      role="list"
      aria-label="Technology stack"
      onMouseEnter={() => {
        isPausedRef.current = true;
      }}
      onMouseLeave={() => {
        isPausedRef.current = false;
      }}
    >
      {[false, true].map((isDuplicate) =>
        items.map((tech) => (
          <div
            key={isDuplicate ? `dup-${tech.name}` : tech.name}
            role={isDuplicate ? undefined : 'listitem'}
            aria-hidden={isDuplicate || undefined}
            className="card-hover shrink-0 w-28 sm:w-36 md:w-44 p-3 sm:p-5 md:p-6 rounded-xl border text-center"
            style={{
              borderColor: `${tech.color}40`,
              background: `linear-gradient(180deg, ${tech.color}14, rgba(17, 24, 39, 0.9))`,
            }}
          >
            <div className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">{tech.name}</div>
            <div className="text-[10px] sm:text-xs font-medium" style={{ color: tech.color }}>
              {tech.category}
            </div>
          </div>
        ))
      )}
    </motion.div>
  );
}

export default function TechStack() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="tech-stack" className="pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            className="text-xl text-secondaryText max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real systems, in production, carrying real traffic
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-cardBackground p-8 rounded-2xl border border-border text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primaryAccent mb-2">
                {metric.value}
              </div>
              <div className="text-xl font-semibold mb-2">
                {metric.label}
              </div>
              <div className="text-secondaryText">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="relative w-full overflow-hidden marquee-fade mb-[-60px]"
        initial={{ opacity: 0 }}
        animate={isMounted ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <MarqueeTrack items={technologies} />
      </motion.div>
    </section>
  );
}
