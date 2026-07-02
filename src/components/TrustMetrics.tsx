'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';

export default function TrustMetrics() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
            Track Record
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        <div className="mt-16">
          <motion.h3
            className="text-xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Core Web Vitals Proof
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <ImagePlaceholder label="PageSpeed Insights — auction platform (before/after)" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <ImagePlaceholder label="PageSpeed Insights — commercial vehicle marketplace network" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
