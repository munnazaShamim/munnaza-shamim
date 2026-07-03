'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SocialLink from './SocialLink';
import { socialLinks, PHONE_DISPLAY, PHONE_LINK, EMAIL, EMAIL_LINK } from '@/lib/socialLinks';

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
            <div className="text-2xl font-bold mb-4">Munnaza Shamim</div>
            <p className="text-secondaryText mb-4">
              Full-stack development, engineered around speed — for clients across Europe, the UK, UAE, and North America.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <SocialLink key={social.label} {...social} size="sm" />
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
                "Next.js Development",
                "WordPress Engineering",
                "Laravel CMS Development",
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
              <li>
                <a href={PHONE_LINK} className="hover:text-primaryAccent transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={EMAIL_LINK} className="hover:text-primaryAccent transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li>Lahore, Pakistan</li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-secondaryText">
          <p>&copy; {new Date().getFullYear()} Munnaza Shamim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}