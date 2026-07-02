'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';

export default function Testimonials() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const proofPoints = [
    {
      title: "Real-time vehicle auction platform",
      note: "Custom PHP/MySQL auction engine, Node.js WebSockets, in production."
    },
    {
      title: "Commercial vehicle marketplace network",
      note: "Five sites, custom listing and search infrastructure, serving the European trade."
    },
    {
      title: "Two custom Laravel CMS platforms",
      note: "Purpose-built content and admin workflows."
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
            Where This Has Shipped
          </motion.h2>
          <motion.p
            className="text-xl text-secondaryText max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Client testimonials are being collected — until then, here&apos;s what&apos;s actually in production
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {proofPoints.map((point, index) => (
            <motion.div
              key={index}
              className="card-hover bg-cardBackground rounded-2xl border border-border overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="p-6 pb-0">
                <ImagePlaceholder label="Client logo / project screenshot" aspect="aspect-[3/2]" />
              </div>
              <div className="p-6">
                <div className="font-bold mb-2">{point.title}</div>
                <p className="text-secondaryText text-sm">{point.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
