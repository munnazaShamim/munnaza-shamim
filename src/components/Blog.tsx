'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Blog() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Optimizing Next.js Applications for Core Web Vitals",
      excerpt: "Learn advanced techniques to improve your Next.js application's performance metrics and user experience.",
      date: "May 15, 2024",
      readTime: "8 min read",
      category: "Performance"
    },
    {
      id: 2,
      title: "Technical SEO Best Practices for 2024",
      excerpt: "Essential SEO strategies that will help your website rank higher and attract more organic traffic.",
      date: "April 28, 2024",
      readTime: "6 min read",
      category: "SEO"
    },
    {
      id: 3,
      title: "Building Scalable MERN Applications",
      excerpt: "Architecture patterns and best practices for creating robust, maintainable MERN stack applications.",
      date: "April 10, 2024",
      readTime: "10 min read",
      category: "Architecture"
    },
    {
      id: 4,
      title: "WordPress Performance Optimization Guide",
      excerpt: "Complete guide to optimizing WordPress sites for speed, SEO, and user experience.",
      date: "March 22, 2024",
      readTime: "12 min read",
      category: "WordPress"
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
                  <span className="text-sm text-secondaryText">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primaryAccent transition-colors">
                  {post.title}
                </h3>
                <p className="text-secondaryText mb-6">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-secondaryText">{post.readTime}</span>
                  <Link href="#" className="text-primaryAccent text-sm font-semibold hover:underline">
                    Read more →
                  </Link>
                </div>
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