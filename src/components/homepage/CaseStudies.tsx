'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import CaseStudyThumbnail from '@/components/CaseStudyThumbnail';
import { getFeaturedCaseStudies } from '@/lib/caseStudies';
import { zoomIn, slideByIndex, revealViewport, reveal } from '@/lib/animations';
import RightArrow from '@/lib/icons/ArrowRight';

export default function CaseStudies() {
  const caseStudies = getFeaturedCaseStudies().slice(0, 4);

  return (
    <section id="case-studies" className="py-20 bg-secondaryBackground">
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
            Featured Work
          </motion.h2>
          <motion.p
            className="text-xl text-secondaryText max-w-2xl mx-auto"
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            transition={reveal(0.15)}
          >
            Real systems, built for real constraints
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              className="card-hover bg-cardBackground rounded-2xl border border-border overflow-hidden flex flex-col"
              variants={slideByIndex(index)}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              transition={reveal(0.1 * index)}
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
                  className="group mt-auto inline-flex items-center gap-1.5 text-primaryAccent font-semibold text-sm hover:underline"
                >
                  Read full case study
                  <RightArrow size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          transition={reveal()}
        >
          <Link
            href="/case-studies"
            className="group btn-hover inline-flex items-center gap-2 px-8 py-4 border border-border text-primaryText font-semibold rounded-lg hover:bg-cardBackground transition-colors"
          >
            View All Case Studies
            <RightArrow size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
