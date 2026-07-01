'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PerformanceExpertise() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const expertiseAreas = [
    {
      title: "Core Web Vitals Optimization",
      description: "Expertise in improving LCP, FID, and CLS metrics for superior user experience and search rankings.",
      icon: "⚡",
      metrics: ["LCP < 1.2s", "FID < 50ms", "CLS < 0.1"]
    },
    {
      title: "Technical SEO",
      description: "Comprehensive SEO implementation including schema markup, canonical tags, sitemaps, and crawl optimization.",
      icon: "🔍",
      metrics: ["95%+ SEO Score", "Zero crawl errors", "Rich snippets implemented"]
    },
    {
      title: "Performance Engineering",
      description: "Advanced techniques for reducing bundle size, implementing code splitting, and optimizing asset delivery.",
      icon: "🚀",
      metrics: ["< 50KB JS bundle", "98%+ PageSpeed", "Optimized images"]
    },
    {
      title: "Scalable Architecture",
      description: "Designing systems that handle traffic spikes with serverless functions, edge caching, and CDN optimization.",
      icon: "🏗️",
      metrics: ["100k+ concurrent users", "99.99% uptime", "Auto-scaling"]
    }
  ];

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
            Performance Expertise
          </motion.h2>
          <motion.p 
            className="text-xl text-secondaryText max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Engineering solutions that deliver exceptional performance and SEO results
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              className="card-hover bg-cardBackground p-8 rounded-2xl border border-border relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primaryAccent rounded-full opacity-10 -translate-y-10 translate-x-10"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold mb-4">{area.title}</h3>
                <p className="text-secondaryText mb-6">{area.description}</p>
                
                <div className="space-y-2">
                  {area.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primaryAccent mr-3"></div>
                      <span className="text-sm text-secondaryText">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-cardBackground rounded-2xl border border-border p-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Performance Audit Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1. Audit", description: "Comprehensive analysis of current performance metrics" },
                { step: "2. Strategy", description: "Development of tailored optimization plan" },
                { step: "3. Implementation", description: "Execution of performance improvements" },
                { step: "4. Results", description: "Measurement and documentation of improvements" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isMounted ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="text-3xl font-bold text-primaryAccent mb-2">{item.step}</div>
                  <div className="text-secondaryText">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}