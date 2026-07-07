'use client';

import { MotionConfig } from 'framer-motion';

// Honors the visitor's OS-level "reduce motion" preference for every
// framer-motion animation in the tree (WCAG 2.3.3).
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
