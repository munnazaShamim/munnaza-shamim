'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { blogPosts as allBlogPosts } from '@/lib/blogPosts';
import { zoomIn, slideByIndex, revealViewport, reveal } from '@/lib/animations';
import RightArrow from '@/lib/icons/ArrowRight';

const blogPosts = allBlogPosts.slice(0, 4);

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-secondaryBackground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            transition={reveal()}
          >
            Technical Insights
          </motion.h2>
          <motion.p
            className="text-xl text-secondaryText max-w-2xl mx-auto"
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            transition={reveal(0.15)}
          >
            Articles on performance, SEO, and architecture, written from real production work
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              variants={slideByIndex(index)}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              transition={reveal(0.1 * index)}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="card-hover bg-cardBackground rounded-2xl border border-border overflow-hidden group block h-full"
              >
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-semibold px-3 py-1 bg-primaryAccent text-background rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-secondaryText">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primaryAccent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-secondaryText mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-primaryAccent font-semibold text-sm">
                    Read article
                    <RightArrow size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <motion.div
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            transition={reveal()}
          >
            <Link
              href="/blog"
              className="group btn-hover inline-flex items-center gap-2 px-8 py-3 border border-border text-primaryText font-semibold rounded-lg hover:bg-cardBackground transition-colors"
            >
              View All Articles
              <RightArrow size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
