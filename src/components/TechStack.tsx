'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TechStack() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const technologies = [
    { name: "Next.js", category: "Frontend Framework" },
    { name: "React", category: "Frontend Library" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend Runtime" },
    { name: "Express", category: "Backend Framework" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Tailwind CSS", category: "CSS Framework" },
    { name: "Framer Motion", category: "Animation" },
    { name: "GSAP", category: "Animation" },
    { name: "Lenis", category: "Scrolling" },
    { name: "Vercel", category: "Deployment" },
  ];

  const categories = [
    { name: "Frontend", count: 4 },
    { name: "Backend", count: 3 },
    { name: "Database", count: 2 },
    { name: "Tools", count: 3 }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Technical Expertise
          </motion.h2>
          <motion.p 
            className="text-xl text-secondaryText max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cutting-edge technologies for modern web solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="text-3xl font-bold text-primaryAccent mb-2">{category.count}</div>
              <div className="text-secondaryText">{category.name}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="card-hover bg-cardBackground p-6 rounded-xl border border-border text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="text-2xl mb-2">{tech.name}</div>
              <div className="text-xs text-secondaryText">{tech.category}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}