'use client';

import { motion } from 'framer-motion';
import { Gauge, LineChart, TrendingUp } from 'lucide-react';
import { zoomIn, slideByIndex, revealViewport, reveal } from '@/lib/animations';
import RightArrow from '@/lib/icons/ArrowRight';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Analysis',
      description: 'Deep dive into your business goals, technical requirements, and performance benchmarks.',
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'A tailored technical approach with performance and SEO optimization as priorities.',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Built with modern technologies, following best practices for scalability and performance.',
    },
    {
      number: '04',
      title: 'Testing & Optimization',
      description: 'Comprehensive performance testing, SEO audit, and optimization for results.',
    },
    {
      number: '05',
      title: 'Launch & Support',
      description: 'Smooth deployment with ongoing support and performance monitoring.',
    },
  ];

  const pillars = [
    {
      icon: Gauge,
      title: 'Performance First',
      description: 'Every decision prioritizes speed, user experience, and search rankings.',
    },
    {
      icon: LineChart,
      title: 'Data Driven',
      description: 'Results are measured, optimized, and continuously improved.',
    },
    {
      icon: TrendingUp,
      title: 'Built to Scale',
      description: 'Systems built to grow with your business needs.',
    },
  ];

  return (
    <section id="process" className="py-20">
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
            How This Works
          </motion.h2>
          <motion.p
            className="text-xl text-secondaryText max-w-2xl mx-auto"
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            transition={reveal(0.15)}
          >
            No work starts until the actual bottleneck or requirement is understood
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="card-hover relative bg-cardBackground rounded-2xl border border-border p-6 group"
              variants={slideByIndex(index)}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              transition={reveal(0.1 * index)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-bold text-primaryAccent/60 group-hover:text-primaryAccent/90 transition-colors">
                  {step.number}
                </span>
                {index < steps.length - 1 && (
                  <RightArrow size={18} className="hidden lg:block text-mutedText" />
                )}
              </div>
              <h3 className="font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-secondaryText">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-6xl mx-auto bg-cardBackground rounded-2xl border border-border p-8 md:p-10"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          transition={reveal()}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-border">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="flex items-start gap-4 md:px-6 first:md:pl-0 last:md:pr-0">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-primaryAccent/10 border border-primaryAccent/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primaryAccent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{pillar.title}</h4>
                    <p className="text-sm text-secondaryText">{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
