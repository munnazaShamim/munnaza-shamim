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
      year: "2024 - Present",
      title: "Senior Full-Stack Developer",
      company: "Global Tech Solutions",
      location: "Lahore, Pakistan (Remote)",
      description: "Leading development of high-performance web applications for international clients, specializing in Next.js, MERN stack, and performance optimization."
    },
    {
      year: "2022 - 2024",
      title: "Frontend Developer",
      company: "Digital Accelerators",
      location: "Lahore, Pakistan",
      description: "Built and optimized complex web applications with React, Next.js, and TypeScript, improving client site performance by 40-60%."
    },
    {
      year: "2020 - 2022",
      title: "Web Developer",
      company: "Tech Innovations",
      location: "Lahore, Pakistan",
      description: "Developed WordPress and custom web solutions for local businesses, with focus on performance optimization and SEO best practices."
    }
  ];

  const skills = [
    { name: "Next.js", level: 95 },
    { name: "React", level: 92 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 88 },
    { name: "WordPress", level: 85 },
    { name: "MongoDB", level: 82 },
    { name: "Technical SEO", level: 94 },
    { name: "Core Web Vitals", level: 96 },
    { name: "Performance Engineering", level: 98 },
    { name: "SaaS Architecture", level: 90 }
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
            Years of expertise in building high-performance web systems
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-cardBackground p-6 rounded-xl border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={isMounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.05 * index }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-secondaryText">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondaryBackground rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-primaryAccent transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}