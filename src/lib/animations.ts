import type { Variants, Transition } from 'framer-motion';

// Shared scroll-in presets so every section reveals consistently as it
// enters the viewport. Use with:
//   variants={slideLeft} initial="hidden" whileInView="visible"
//   viewport={revealViewport} transition={reveal(delay)}
export const revealViewport = { once: true, amount: 0.2 } as const;

// easeOutExpo-style curve: quick to start, long soft settle. Reads as
// "premium" because most of the motion happens up front, then eases in gently.
export const EASE = [0.22, 1, 0.36, 1] as const;

// The one reveal transition used across the whole site. Pass a delay to
// stagger items (e.g. reveal(0.1 * index)).
export const reveal = (delay = 0): Transition => ({
  duration: 0.7,
  ease: EASE,
  delay,
});

// Enters from the left.
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

// Enters from the right.
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

// Scales up into place.
export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

// Alternating slide direction for items in a grid, keyed by index.
export const slideByIndex = (index: number): Variants =>
  index % 2 === 0 ? slideLeft : slideRight;
