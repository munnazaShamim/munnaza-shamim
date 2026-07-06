'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CaseStudyThumbnail from '@/components/CaseStudyThumbnail';
import { getFeaturedCaseStudies } from '@/lib/caseStudies';

export default function CaseStudies() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const caseStudies = getFeaturedCaseStudies().slice(0, 4);

  return (
    <section id="case-studies" className="py-20 bg-secondaryBackground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Featured Work
          </motion.h2>
          <motion.p
            className="text-xl text-secondaryText max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real systems, built for real constraints
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              className="card-hover bg-cardBackground rounded-2xl border border-border overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="p-6 flex flex-col flex-1">
                <CaseStudyThumbnail study={study} fit="cover" className="mb-5" />

                <div className="text-primaryAccent text-sm font-semibold mb-2">
                  {study.client}
                </div>
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-sm text-secondaryText mb-5">{study.summary}</p>

                <Link
                  href={`/case-studies/${study.slug}`}
                  className="mt-auto text-primaryAccent font-semibold text-sm hover:underline"
                >
                  Read full case study →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/case-studies"
            className="btn-hover inline-block px-8 py-4 border border-border text-primaryText font-semibold rounded-lg hover:bg-cardBackground transition-colors"
          >
            View All Case Studies ↗
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
