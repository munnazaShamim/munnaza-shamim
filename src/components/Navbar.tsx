'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Case Studies', href: '/#case-studies' },
  { label: 'Tech Stack', href: '/#tech-stack' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={isMounted ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-border'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primaryAccent to-primaryAccentLight flex items-center justify-center font-bold text-background">
              M
            </div>
            <span className="text-xl font-bold text-gradient">Munnaza</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-secondaryText hover:text-primaryText transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/#contact"
            className="hidden md:inline-block btn-hover-cta px-5 py-2.5 bg-ctaAccent text-background font-semibold rounded-lg hover:bg-ctaAccentHover transition-colors"
          >
            Start Your Project
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="md:hidden w-10 h-10 rounded-lg border border-border flex items-center justify-center"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-primaryText transition-transform ${
                  isMenuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-primaryText transition-opacity ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-primaryText transition-transform ${
                  isMenuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-secondaryText hover:text-primaryText transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn-hover-cta px-5 py-2.5 bg-ctaAccent text-background font-semibold rounded-lg text-center hover:bg-ctaAccentHover transition-colors"
              >
                Start Your Project
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
