'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, European Retail Brand",
      content: "The performance improvements were incredible. Our conversion rates increased by 42% after the optimization. Munnaza's technical expertise is unmatched.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CTO, North American SaaS Startup",
      content: "Working with Munnaza transformed our technical infrastructure. The Next.js migration was seamless and the performance gains were immediate.",
      avatar: "MC"
    },
    {
      name: "Emma Rodriguez",
      role: "E-commerce Director, UK Brand",
      content: "The WordPress optimization project exceeded all expectations. Our site now loads in under 1.2 seconds with perfect Core Web Vitals scores.",
      avatar: "ER"
    }
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
            Client Testimonials
          </motion.h2>
          <motion.p 
            className="text-xl text-secondaryText max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What international clients say about working with us
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="card-hover bg-cardBackground p-8 rounded-2xl border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primaryAccent flex items-center justify-center text-background font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-secondaryText">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-secondaryText italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-cardBackground border border-border rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex text-yellow-400 mr-2">
              {'★'.repeat(5)}
            </div>
            <span className="text-secondaryText">5/5 Star Rating from 50+ Clients</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}