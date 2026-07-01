'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-8"
            initial={isMounted ? "hidden" : "visible"}
            animate={isMounted ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Building <span className="text-gradient">high-performance</span> web systems
              </h1>
            </motion.div>

            <motion.p 
              className="text-xl md:text-2xl text-secondaryText max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Scalable, SEO-optimized, and conversion-focused web applications for international businesses.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="#contact" className="btn-hover px-8 py-4 bg-primaryAccent text-background font-semibold rounded-lg text-center hover:bg-[#1fb9d0] transition-colors">
                Start Your Project
              </Link>
              <Link href="#case-studies" className="btn-hover px-8 py-4 border border-border text-primaryText font-semibold rounded-lg text-center hover:bg-cardBackground transition-colors">
                View Case Studies
              </Link>
            </motion.div>

            <motion.div 
              className="flex items-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="w-10 h-10 rounded-full bg-secondaryBackground border-2 border-background"></div>
                ))}
              </div>
              <p className="text-sm text-secondaryText">
                Trusted by international clients from Europe, UK, UAE, and North America
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Dashboard-like visualization */}
              <div className="bg-cardBackground rounded-2xl p-6 border border-border shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-secondaryText">Performance Dashboard</div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-secondaryText">Lighthouse Score</span>
                    <span className="font-bold text-primaryAccent">98/100</span>
                  </div>
                  <div className="h-2 bg-secondaryBackground rounded-full overflow-hidden">
                    <div className="h-full bg-primaryAccent w-3/4"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-secondaryText">Core Web Vitals</span>
                    <span className="font-bold text-primaryAccent">95/100</span>
                  </div>
                  <div className="h-2 bg-secondaryBackground rounded-full overflow-hidden">
                    <div className="h-full bg-primaryAccent w-4/5"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-secondaryText">Page Load Time</span>
                    <span className="font-bold text-primaryAccent">1.2s</span>
                  </div>
                  <div className="h-2 bg-secondaryBackground rounded-full overflow-hidden">
                    <div className="h-full bg-primaryAccent w-5/6"></div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-secondaryText">Performance Score</div>
                      <div className="text-xl font-bold">98%</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-secondaryText">SEO Score</div>
                      <div className="text-xl font-bold">95%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primaryAccent rounded-full opacity-10 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primaryAccent rounded-full opacity-10 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}