'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <footer className="border-t border-border bg-secondaryBackground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="text-2xl font-bold mb-4">Munnaza</div>
            <p className="text-secondaryText mb-4">
              Building high-performance, scalable web systems for international businesses.
            </p>
            <div className="flex space-x-4">
              {['LinkedIn', 'GitHub', 'Twitter'].map((platform, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-cardBackground border border-border flex items-center justify-center hover:bg-primaryAccent hover:text-background transition-colors"
                >
                  {platform.charAt(0)}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-secondaryText">
              {[
                "High-Performance Websites",
                "Next.js Development",
                "WordPress Optimization",
                "Technical SEO",
                "MERN Stack Apps"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-primaryAccent transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-secondaryText">
              {[
                "Case Studies",
                "Blog",
                "Performance Guides",
                "SEO Resources",
                "Technical Articles"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-primaryAccent transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-secondaryText">
              <li>contact@munnaza.dev</li>
              <li>Lahore, Pakistan</li>
              <li>GMT+5 | Mon-Fri: 9AM-6PM</li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-secondaryText">
          <p>&copy; {new Date().getFullYear()} Munnaza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}