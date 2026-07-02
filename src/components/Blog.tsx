'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Blog() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Core Web Vitals in 2026: What Actually Moves LCP, INP, and CLS",
      excerpt: "A practical breakdown of the fixes that move the needle on Core Web Vitals, versus the ones that just look good in an audit.",
      category: "Performance"
    },
    {
      id: 2,
      title: "WordPress to Next.js Migration Without Losing SEO Rankings",
      excerpt: "How to plan a framework migration so three years of search rankings don't disappear on launch day.",
      category: "SEO"
    },
    {
      id: 3,
      title: "Why WooCommerce Checkout Speed Kills Conversions",
      excerpt: "Where WooCommerce stores actually lose speed at checkout, and the fixes that hold up under real traffic.",
      category: "WordPress"
    },
    {
      id: 4,
      title: "Real-Time Features on WordPress: WebSockets Without a Full Rebuild",
      excerpt: "Adding live bidding, live chat, or live dashboards to a WordPress site without replacing the CMS underneath it.",
      category: "Architecture"
    },
    {
      id: 5,
      title: "Database Optimization for High-Traffic WordPress Sites",
      excerpt: "Query-level and schema fixes that matter more than another caching plugin.",
      category: "Performance"
    },
    {
      id: 6,
      title: "Next.js ISR vs SSG vs SSR: Choosing the Right Rendering Strategy",
      excerpt: "A decision framework for picking a rendering strategy per route, instead of defaulting to one for the whole app.",
      category: "Architecture"
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
            Technical Insights
          </motion.h2>
          <motion.p 
            className="text-xl text-secondaryText max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Expert articles on performance, SEO, and modern web development
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="card-hover bg-cardBackground rounded-2xl border border-border overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold px-3 py-1 bg-primaryAccent text-background rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-secondaryText">Coming soon</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primaryAccent transition-colors">
                  {post.title}
                </h3>
                <p className="text-secondaryText">{post.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <motion.button
            className="btn-hover px-8 py-3 border border-border text-primaryText font-semibold rounded-lg hover:bg-cardBackground transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            View All Articles
          </motion.button>
        </div>
      </div>
    </section>
  );
}