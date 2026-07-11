'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { slideLeft, slideRight, revealViewport, reveal } from '@/lib/animations';

export default function About() {
  return (
    <section id="about" className="pt-8 pb-20 md:pt-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            transition={reveal()}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-border">
              <Image
                src="/Munnaza.webp"
                alt="Munnaza Shamim"
                fill
                sizes="(min-width: 1024px) 280px, 60vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            transition={reveal(0.15)}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About</h2>
            <div className="space-y-4 text-secondaryText text-lg">
              <p>
                I&apos;m Munnaza Shamim, a full-stack developer based in Lahore, Pakistan. I work with clients across Europe, the UK, the UAE, and North America. Most agencies split this kind of work in two, where one team builds the system and another tries to make it fast. I do both.
              </p>
              <p>
                In practice that means WordPress builds that hold up under WooCommerce checkout load, Next.js applications planned around rendering strategy and caching from day one, and real-time systems wired for genuine concurrent behavior rather than plain CRUD with a WebSocket bolted on top.
              </p>
              <p>
                Recent work includes a live auction and bidding platform running on custom PHP and MySQL auction logic, with Node.js WebSockets pushing instant bid updates to the Dealer, Seller, and Admin roles. I also built a family of commercial vehicle marketplace sites for the European trade, plus two custom Laravel CMS platforms.
              </p>
              <p>
                Right now I&apos;m building Next.js applications as a Senior Developer at DaikiMedia, after three years as a full-stack WordPress and Node.js developer at ultrasolz. Four years in, I hold every project to the same standard: it has to load fast, it has to rank, and it has to hold up under real usage.
              </p>
              <p>
                Most of my clients are in Europe, including German businesses in the commercial vehicle trade, so GDPR-conscious data handling and clean consent flows are built in from the start rather than added later. My hours line up with Central European Time. Lahore is only three to four hours ahead of Berlin, so same-day replies are normal.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
