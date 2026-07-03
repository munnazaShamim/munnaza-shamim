'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';

const technologies = [
  { name: "HTML5", category: "Markup" },
  { name: "CSS3", category: "Styling" },
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "React", category: "Frontend Library" },
  { name: "Next.js", category: "Frontend Framework" },
  { name: "Tailwind CSS", category: "CSS Framework" },
  { name: "Node.js", category: "Backend Runtime" },
  { name: "Express", category: "Backend Framework" },
  { name: "PHP", category: "Backend Language" },
  { name: "Laravel", category: "CMS Framework" },
  { name: "WordPress", category: "CMS" },
  { name: "WooCommerce", category: "E-Commerce" },
  { name: "MySQL / MariaDB", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "WebSockets", category: "Real-Time" },
  { name: "REST APIs", category: "Integration" },
  { name: "VPS", category: "Server Management" },
  { name: "cPanel / Apache", category: "Server Management" },
  { name: "Cloudflare", category: "CDN & Security" },
  { name: "Vercel", category: "Deployment" },
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

function MarqueeTrack({ items, speed = 40 }: { items: typeof technologies; speed?: number }) {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const halfWidthRef = useRef(0);

  useEffect(() => {
    if (trackRef.current) {
      halfWidthRef.current = trackRef.current.scrollWidth / 2;
    }
  }, []);

  useAnimationFrame((_, delta) => {
    if (!halfWidthRef.current) return;
    let next = x.get() - (speed * delta) / 1000;
    if (next <= -halfWidthRef.current) {
      next += halfWidthRef.current;
    }
    x.set(next);
  });

  return (
    <motion.div ref={trackRef} className="flex w-max gap-6 py-2" style={{ x }} role="list" aria-label="Technology stack">
      {items.map((tech) => (
        <div
          key={tech.name}
          role="listitem"
          className="card-hover shrink-0 w-44 bg-cardBackground p-6 rounded-xl border border-border text-center"
        >
          <div className="text-base font-semibold mb-2">{tech.name}</div>
          <div className="text-xs text-secondaryText">{tech.category}</div>
        </div>
      ))}
      {items.map((tech) => (
        <div
          key={`dup-${tech.name}`}
          aria-hidden="true"
          className="card-hover shrink-0 w-44 bg-cardBackground p-6 rounded-xl border border-border text-center"
        >
          <div className="text-base font-semibold mb-2">{tech.name}</div>
          <div className="text-xs text-secondaryText">{tech.category}</div>
        </div>
      ))}
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
            Cutting-edge technologies for modern web solutions,Real systems, in production, carrying real traffic
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
