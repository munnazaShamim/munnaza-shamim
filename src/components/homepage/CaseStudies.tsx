'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { getFeaturedCaseStudies } from '@/lib/caseStudies';

export default function CaseStudies() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const caseStudies = getFeaturedCaseStudies();

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
              <div className="p-8 flex flex-col flex-1">
                <ImagePlaceholder label={study.imageLabel} className="mb-6" />

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

                {study.features.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-secondaryBackground text-secondaryText px-3 py-1.5 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                )}

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
            View All Case Studies
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
