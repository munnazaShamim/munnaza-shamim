'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';

export default function CaseStudies() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const caseStudies = [
    {
      id: 1,
      title: "Real-Time Vehicle Auction Platform",
      client: "Live bidding & auction marketplace",
      challenge: "Standard WordPress has no concept of live, concurrent bidding — no real-time state, no role-based dashboard separation, no verification workflow for high-value transactions.",
      solution: "Built complete custom auction logic in PHP and MySQL, including real-time bid calculations and role-based permissions. Layered Node.js WebSockets on top of WordPress to push live bid updates instantly, with purpose-built dashboards for Dealers, Sellers, and Admins.",
      features: [
        "Real-time bid engine, no page reload",
        "Dealer / Seller / Admin dashboards",
        "AI-powered outbound verification calls",
        "AI live chat for instant support"
      ],
      imageLabel: "Auction platform — desktop screenshot (1600x1000)"
    },
    {
      id: 2,
      title: "Commercial Vehicle Marketplace Network",
      client: "5-site European commercial vehicle trade network",
      challenge: "Commercial vehicle inventory doesn't fit generic listing plugins — buyers filter by trade-specific fields, and off-the-shelf search doesn't hold up once inventory and traffic scale across five properties.",
      solution: "Built custom vehicle listing systems with advanced filtering, sorting, and search tailored to commercial vehicle attributes, backed by custom API integrations, dynamic search modules, and centralized data management dashboards across the network.",
      features: [
        "Multi-attribute filtering & sorting",
        "Custom API integrations",
        "Trade-specific search modules",
        "Centralized inventory dashboards"
      ],
      imageLabel: "Vehicle marketplace network — desktop screenshot (1600x1000)"
    },
    {
      id: 3,
      title: "Custom Laravel CMS Platforms",
      client: "Two production CMS builds",
      challenge: "Content and workflow requirements that outgrew WordPress's plugin-based approach, needing a structured, purpose-built admin layer.",
      solution: "Built custom CMS platforms on Laravel with tailored content models and admin workflows, rather than forcing the requirements into a general-purpose CMS.",
      features: [
        "Custom content modeling",
        "Purpose-built admin workflows",
        "Laravel backend architecture"
      ],
      imageLabel: "Laravel CMS platform — screenshot (1600x1000)"
    },
    {
      id: 4,
      title: "Next.js Application Development",
      client: "Daikimedia — current work",
      challenge: "Ongoing Next.js application development as Senior Developer at Daikimedia.",
      solution: "Full detail coming as projects ship — this card is reserved for the next production write-up.",
      features: [],
      imageLabel: "Next.js project — screenshot (1600x1000)"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-secondaryBackground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Featured Work
          </motion.h2>
          <motion.p
            className="text-xl text-secondaryText max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real systems, built for real constraints
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="card-hover bg-cardBackground rounded-2xl border border-border overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="p-8">
                <ImagePlaceholder label={study.imageLabel} className="mb-6" />

                <div className="text-primaryAccent text-sm font-semibold mb-2">
                  {study.client}
                </div>
                <h3 className="text-xl font-bold mb-4">{study.title}</h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-secondaryText mb-1">Challenge</h4>
                    <p className="text-sm text-secondaryText">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-secondaryText mb-1">Solution</h4>
                    <p className="text-sm text-secondaryText">{study.solution}</p>
                  </div>
                </div>

                {study.features.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {study.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-secondaryBackground text-secondaryText px-3 py-1.5 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
