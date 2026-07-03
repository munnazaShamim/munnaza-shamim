'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Search, Rocket, Network } from 'lucide-react';

export default function PerformanceExpertise() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const expertiseAreas = [
    {
      title: "Core Web Vitals Optimization",
      description: "Diagnosing and fixing what actually drags down LCP, INP, and CLS — not a generic checklist, but the specific bottleneck on your stack.",
      icon: Activity,
      metrics: ["Database & query-level fixes", "Image optimization & lazy loading", "Render-blocking asset cleanup"]
    },
    {
      title: "Technical SEO",
      description: "Schema markup, canonical tags, crawl structure, and migration-safe SEO for sites that can't afford to lose rankings.",
      icon: Search,
      metrics: ["Schema & structured data", "Crawl & indexation audits", "Migration-safe redirects"]
    },
    {
      title: "Performance Engineering",
      description: "Code splitting, caching strategy, and asset delivery decisions made at the architecture level, not bolted on after launch.",
      icon: Rocket,
      metrics: ["Code splitting & lazy loading", "Caching & minification", "Rendering strategy (SSG/SSR/ISR)"]
    },
    {
      title: "Real-Time & Scalable Systems",
      description: "Architecture for systems that need to hold state under concurrent load — live bidding, live chat, multi-role dashboards.",
      icon: Network,
      metrics: ["WebSocket-based real-time state", "Role-based architecture", "Database optimization for scale"]
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
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
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
                  <div className="w-12 h-12 rounded-xl bg-primaryAccent/10 border border-primaryAccent/20 flex items-center justify-center mb-4 transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primaryAccent group-hover:border-primaryAccent">
                    <Icon className="w-6 h-6 text-primaryAccent transition-colors duration-300 group-hover:text-background" />
                  </div>
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
            );
          })}
        </div>

        <div className="mt-16 bg-cardBackground rounded-2xl border border-border p-8">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Performance Audit Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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