'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CaseStudies() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Optimization",
      client: "European Retail Brand",
      challenge: "Slow load times and poor Core Web Vitals affecting conversion rates",
      solution: "Implemented Next.js with ISR, optimized images, and lazy loading",
      results: {
        lighthouse: "98/100",
        loadTime: "1.2s",
        conversion: "+42% increase in conversions"
      },
      metrics: [
        { label: "Lighthouse Score", value: "98/100" },
        { label: "Page Load Time", value: "1.2s" },
        { label: "Conversion Rate", value: "+42%" },
        { label: "SEO Growth", value: "+65%" }
      ]
    },
    {
      id: 2,
      title: "SaaS Dashboard Redesign",
      client: "North American SaaS Startup",
      challenge: "Legacy WordPress site with poor performance and scalability issues",
      solution: "Migrated to Next.js with modern architecture and performance optimizations",
      results: {
        lighthouse: "95/100",
        loadTime: "0.8s",
        conversion: "+38% increase in sign-ups"
      },
      metrics: [
        { label: "Lighthouse Score", value: "95/100" },
        { label: "Page Load Time", value: "0.8s" },
        { label: "Conversion Rate", value: "+38%" },
        { label: "SEO Growth", value: "+52%" }
      ]
    },
    {
      id: 3,
      title: "WordPress Performance Audit",
      client: "UK E-commerce Store",
      challenge: "Slow WordPress site affecting user experience and search rankings",
      solution: "Complete performance audit, caching implementation, and optimization",
      results: {
        lighthouse: "92/100",
        loadTime: "1.5s",
        conversion: "+28% increase in sales"
      },
      metrics: [
        { label: "Lighthouse Score", value: "92/100" },
        { label: "Page Load Time", value: "1.5s" },
        { label: "Conversion Rate", value: "+28%" },
        { label: "SEO Growth", value: "+41%" }
      ]
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
            Featured Case Studies
          </motion.h2>
          <motion.p 
            className="text-xl text-secondaryText max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Measurable results for real-world challenges
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="card-hover bg-cardBackground rounded-2xl border border-border overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="p-8">
                <div className="text-primaryAccent text-sm font-semibold mb-2">
                  {study.client}
                </div>
                <h3 className="text-xl font-bold mb-4">{study.title}</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-secondaryText mb-1">Challenge</h4>
                    <p className="text-sm text-secondaryText">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-secondaryText mb-1">Solution</h4>
                    <p className="text-sm text-secondaryText">{study.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-secondaryBackground p-3 rounded-lg">
                      <div className="text-xs text-secondaryText">{metric.label}</div>
                      <div className="font-bold text-primaryAccent">{metric.value}</div>
                    </div>
                  ))}
                </div>

                <Link href="#" className="text-primaryAccent text-sm font-semibold hover:underline">
                  View Full Case Study →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.button
            className="btn-hover px-8 py-3 border border-border text-primaryText font-semibold rounded-lg hover:bg-cardBackground transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            View All Case Studies
          </motion.button>
        </div>
      </div>
    </section>
  );
}