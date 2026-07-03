'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const experiences = [
    {
      year: "Jan 2026 - Present",
      title: "Senior Developer",
      company: "Daikimedia",
      location: "Lahore, Pakistan (Remote)",
      description: "Building Next.js applications with a focus on performance and technical SEO."
    },
    {
      year: "2022 - 2025",
      title: "Junior Developer",
      company: "ultrasolz",
      location: "Lahore, Pakistan",
      description: "Built and maintained WordPress websites across automotive, business, and e-commerce industries. Designed REST APIs for mobile apps and third-party integrations, developed real-time WebSocket features for auction and live-bidding systems, and managed server configurations, databases, and site migrations."
    }
  ];

  const skillGroups = [
    { category: "Frontend", skills: ["Next.js", "React", "TypeScript"] },
    { category: "Backend", skills: ["Node.js", "PHP", "Laravel"] },
    { category: "CMS", skills: ["WordPress (custom plugins & themes)", "WooCommerce"] },
    { category: "Database", skills: ["MySQL / MariaDB", "MongoDB"] },
    { category: "Performance & SEO", skills: ["Core Web Vitals", "Caching & Minification", "Technical SEO"] },
    { category: "Real-Time & Infra", skills: ["WebSockets", "REST APIs", "cPanel / Apache"] },
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
            Professional Experience
          </motion.h2>
          <motion.p
            className="text-xl text-secondaryText max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Four years, two roles, one focus on shipping fast systems
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 md:ml-2 -top-20 h-full w-0.5 bg-border"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col md:flex-row items-start md:items-center md:justify-start mb-12"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isMounted ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 md:ml-2 w-4 h-4 rounded-full bg-primaryAccent border-4 border-background z-10"></div>

                {/* Content */}
                <div className="ml-16 md:ml-20 md:w-1/2">
                  <div className="flex flex-col md:flex-row md:items-center mb-2">
                    <span className="text-primaryAccent font-semibold mb-1 md:mb-0">{exp.year}</span>
                    <span className="text-secondaryText mx-2 md:mx-4">•</span>
                    <span className="text-secondaryText">{exp.location}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  <h4 className="text-lg text-primaryAccent mb-3">{exp.company}</h4>
                  <p className="text-secondaryText">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, index) => (
              <motion.div
                key={index}
                className="bg-cardBackground p-6 rounded-xl border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={isMounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.05 * index }}
              >
                <div className="font-semibold text-primaryAccent mb-3">{group.category}</div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-secondaryBackground text-secondaryText px-3 py-1.5 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
