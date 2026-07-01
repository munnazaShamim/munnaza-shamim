'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const services = [
    {
      title: "High-Performance Websites",
      description: "Lightning-fast websites optimized for speed, SEO, and user experience with modern technologies.",
      icon: "⚡"
    },
    {
      title: "Next.js Development",
      description: "Production-ready Next.js applications with server-side rendering, static site generation, and API routes.",
      icon: "⚛️"
    },
    {
      title: "WordPress Performance Optimization",
      description: "Transform legacy WordPress sites into high-performance, scalable solutions with caching and optimization.",
      icon: "🌿"
    },
    {
      title: "Technical SEO",
      description: "Complete SEO strategy implementation including technical audits, schema markup, and performance optimization.",
      icon: "🔍"
    },
    {
      title: "MERN Stack Applications",
      description: "Full-stack applications using MongoDB, Express, React, and Node.js with modern architecture patterns.",
      icon: "🌐"
    },
    {
      title: "Full-Stack Architecture",
      description: "Scalable, maintainable architecture for complex web applications with clean separation of concerns.",
      icon: "🏗️"
    },
    {
      title: "Core Web Vitals Optimization",
      description: "Complete optimization of Core Web Vitals metrics for improved user experience and search rankings.",
      icon: "📈"
    },
    {
      title: "SaaS Development",
      description: "Enterprise-grade SaaS applications with modern UI/UX, authentication, and scalable backend systems.",
      icon: "🚀"
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
            Specialized Services
          </motion.h2>
          <motion.p 
            className="text-xl text-secondaryText max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Expert solutions for modern web challenges
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card-hover bg-cardBackground p-8 rounded-2xl border border-border group"
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primaryAccent transition-colors">
                {service.title}
              </h3>
              <p className="text-secondaryText">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}