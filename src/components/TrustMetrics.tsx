'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TrustMetrics() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const metrics = [
    {
      value: "98%",
      label: "Lighthouse Score",
      description: "Average performance across all projects"
    },
    {
      value: "95%",
      label: "Core Web Vitals",
      description: "User experience optimization"
    },
    {
      value: "1.2s",
      label: "Avg. Load Time",
      description: "Fastest page loads in industry"
    },
    {
      value: "50+",
      label: "Projects Completed",
      description: "International client success stories"
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
            Trusted by Global Clients
          </motion.h2>
          <motion.p 
            className="text-xl text-secondaryText max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Performance, reliability, and results that exceed expectations
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

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-2xl font-bold text-primaryAccent mb-2">Europe</div>
            <div className="text-secondaryText">15+ clients</div>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-2xl font-bold text-primaryAccent mb-2">UK</div>
            <div className="text-secondaryText">12+ clients</div>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-2xl font-bold text-primaryAccent mb-2">UAE & North America</div>
            <div className="text-secondaryText">23+ clients</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}