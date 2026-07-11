'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { zoomIn, slideByIndex, revealViewport, reveal } from '@/lib/animations';

export default function Experience() {
  const experiences = [
    {
      year: 'Jan 2026 - Present',
      title: 'Senior Developer',
      company: 'DaikiMedia',
      location: 'Lahore, Pakistan (Remote)',
      current: true,
      description:
        'Building Next.js applications with a focus on performance and technical SEO. The work spans headless WordPress migrations, custom Laravel CMS platforms, and Core Web Vitals fixes for client sites.',
      highlights: ['Next.js', 'Headless WordPress', 'Laravel CMS', 'Core Web Vitals', 'Server Management', 'Technical SEO', 'Security', 'Performance Optimization', 'REST APIs'],
    },
    {
      year: '2022 - 2025',
      title: 'Full-Stack Developer (WordPress & Node.js)',
      company: 'ultrasolz',
      location: 'Lahore, Pakistan',
      current: false,
      description:
        'Built and maintained WordPress websites across automotive, business, and e-commerce industries. Designed REST APIs for mobile apps and third-party integrations, developed real-time WebSocket features for auction and live-bidding systems, and managed server configurations, databases, and site migrations.',
      highlights: ['WordPress & WooCommerce', 'REST APIs', 'WebSockets', 'Server Management', 'Database Management', 'Security'],
    },
  ];

  return (
    <section className="py-20 bg-secondaryBackground">
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
            Professional Experience
          </motion.h2>
          <motion.p
            className="text-xl text-secondaryText max-w-2xl mx-auto"
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            transition={reveal(0.15)}
          >
            Four years, two roles, one focus on shipping fast systems
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="card-hover relative bg-cardBackground rounded-2xl border border-border p-8 overflow-hidden"
              variants={slideByIndex(index)}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              transition={reveal(0.12 * index)}
            >
              {/* Accent bar */}
              <div
                className={`absolute top-0 left-0 h-1 w-full ${
                  exp.current ? 'bg-gradient-to-r from-primaryAccent to-primaryAccentLight' : 'bg-border'
                }`}
              />

              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primaryAccent/10 border border-primaryAccent/20 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primaryAccent" />
                </div>
                {exp.current && (
                  <span className="flex items-center gap-2 text-xs font-semibold text-primaryAccentLight bg-primaryAccent/15 border border-primaryAccent/30 px-3 py-1.5 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-primaryAccentLight animate-pulse" />
                    Current Role
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
              <div className="text-lg text-primaryAccent font-semibold mb-4">{exp.company}</div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-secondaryText mb-5">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-mutedText" />
                  {exp.year}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-mutedText" />
                  {exp.location}
                </span>
              </div>

              <p className="text-secondaryText mb-6">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((item) => (
                  <span
                    key={item}
                    className="text-xs bg-secondaryBackground text-secondaryText px-3 py-1.5 rounded-full border border-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
