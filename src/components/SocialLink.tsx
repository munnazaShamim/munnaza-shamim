'use client';

import { motion } from 'framer-motion';
import type { SocialLinkData } from '@/lib/socialLinks';

interface SocialLinkProps extends SocialLinkData {
  size?: 'sm' | 'md';
}

export default function SocialLink({ label, href, icon: Icon, glowColor, hoverClass, size = 'md' }: SocialLinkProps) {
  const dimensions = size === 'sm' ? 'w-10 h-10' : 'w-12 h-12';
  const iconSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';

  return (
    <motion.a
      href={href}
      target={href !== '#' ? '_blank' : undefined}
      rel={href !== '#' ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className={`group relative ${dimensions} rounded-full bg-cardBackground border border-border flex items-center justify-center text-secondaryText transition-colors duration-300 ${hoverClass}`}
      whileHover={{ y: -4, scale: 1.08, boxShadow: `0 8px 20px ${glowColor}` }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    >
      <Icon className={`${iconSize} transition-colors duration-300 group-hover:text-white`} />
    </motion.a>
  );
}
