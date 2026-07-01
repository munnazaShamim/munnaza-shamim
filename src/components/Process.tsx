'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Process() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "Deep dive into your business goals, technical requirements, and performance benchmarks."
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description: "Develop a tailored technical approach with performance and SEO optimization as priorities."
    },
    {
      number: "03",
      title: "Development & Implementation",
      description: "Build with modern technologies, following best practices for scalability and performance."
    },
    {
      number: "04",
      title: "Testing & Optimization",
      description: "Comprehensive performance testing, SEO audit, and optimization for results."
    },
    {
      number: "05",
      title: "Launch & Support",
      description: "Smooth deployment with ongoing support and performance monitoring."
    }
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
            Our Process
          </motion.h2>
          <motion.p 
            className="text-xl text-secondaryText max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A structured approach to delivering exceptional results
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col md:flex-row items-start"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isMounted ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                {/* Step number */}
                <div className="absolute left-0 w-16 h-16 rounded-full bg-primaryAccent text-background font-bold flex items-center justify-center text-xl z-10">
                  {step.number}
                </div>

                {/* Content */}
                <div className="ml-24 md:ml-0 md:w-1/2 md:pl-24">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-secondaryText">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-cardBackground rounded-2xl border border-border p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">Why This Process Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Performance First", 
                  description: "Every decision prioritizes speed, user experience, and search rankings." 
                },
                { 
                  title: "Data Driven", 
                  description: "Results are measured, optimized, and continuously improved." 
                },
                { 
                  title: "Scalable Solutions", 
                  description: "Systems built to grow with your business needs." 
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isMounted ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-secondaryText">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}