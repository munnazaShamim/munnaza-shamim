'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layers, Gauge, Blocks, Search, Zap, Globe, Plug, RefreshCw } from 'lucide-react';

export default function Services() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const services = [
    {
      title: "Next.js Application Development",
      description: "Production applications built around rendering strategy from the start — static generation where content allows it, server rendering where it doesn't, and caching that keeps both fast under real traffic.",
      icon: Layers
    },
    {
      title: "WordPress Engineering & Performance",
      description: "Custom plugin and theme development, hook/filter-level customization, and performance rebuilds for WordPress sites that have outgrown their original build — including WooCommerce stores under real checkout load.",
      icon: Gauge
    },
    {
      title: "Laravel CMS Development",
      description: "Custom CMS platforms built on Laravel for businesses that need structured content management beyond what WordPress or off-the-shelf tools offer.",
      icon: Blocks
    },
    {
      title: "Technical SEO & Core Web Vitals",
      description: "Site audits, schema implementation, and Core Web Vitals remediation aimed at the metrics that actually move rankings — not a generic checklist.",
      icon: Search
    },
    {
      title: "Real-Time Systems",
      description: "WebSocket-based features for platforms that need instant state updates: live bidding, live chat, live dashboards — built on Node.js.",
      icon: Zap
    },
    {
      title: "MERN Stack Development",
      description: "Full-stack applications on MongoDB, Express, React, and Node.js, architected for maintainability as much as for shipping speed.",
      icon: Globe
    },
    {
      title: "API Design & Integrations",
      description: "REST API design for mobile apps, dealer/vendor systems, and third-party data feeds, including custom search and filtering layers over external data.",
      icon: Plug
    },
    {
      title: "Site Migration & Modernization",
      description: "Moving legacy WordPress or hand-rolled systems onto modern architecture without losing search rankings in the process.",
      icon: RefreshCw
    }
  ];

  return (
    <section id="services" className="py-20">
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
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="card-hover bg-cardBackground p-8 rounded-2xl border border-border group"
                initial={{ opacity: 0, y: 20 }}
                animate={isMounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="w-12 h-12 rounded-xl bg-primaryAccent/10 border border-primaryAccent/20 flex items-center justify-center mb-4 transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primaryAccent group-hover:border-primaryAccent">
                  <Icon className="w-6 h-6 text-primaryAccent transition-colors duration-300 group-hover:text-background" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primaryAccent transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondaryText">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}