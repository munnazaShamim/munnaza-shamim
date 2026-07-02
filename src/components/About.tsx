'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';

export default function About() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isMounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <ImagePlaceholder
              label="Headshot — square or 4:5 crop, plain background"
              aspect="aspect-square"
              className="rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isMounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About</h2>
            <div className="space-y-4 text-secondaryText text-lg">
              <p>
                I&apos;m Munnaza Shamim, a full-stack developer based in Lahore, Pakistan, working with clients across Europe, the UK, UAE, and North America. My focus sits where most agencies split the work in two: building the system, and making it fast.
              </p>
              <p>
                That means WordPress builds that don&apos;t fall over under WooCommerce checkout load, Next.js applications architected around rendering strategy and caching from day one, and real-time systems wired for actual concurrent behavior — not just CRUD with a WebSocket bolted on.
              </p>
              <p>
                Recent work includes a live auction and bidding platform built on custom PHP/MySQL auction logic with Node.js WebSockets for instant bid updates across Dealer, Seller, and Admin roles, a family of commercial vehicle marketplace sites built for the European commercial vehicle trade, and two custom Laravel CMS platforms.
              </p>
              <p>
                Currently building Next.js applications as a Senior Developer at Daikimedia, after three years as a full-stack WordPress and Node.js developer at ultrasolz. Four years in, one standard applied to every project: it has to load fast, it has to rank, and it has to hold up under real usage.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
