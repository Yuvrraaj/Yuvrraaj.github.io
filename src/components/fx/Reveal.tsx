import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** seconds */
  delay?: number;
  /** initial y offset in px */
  y?: number;
  once?: boolean;
}

/**
 * Scroll-triggered reveal. Animates opacity + translateY only (compositor-safe).
 * Falls back to a plain fade when the user prefers reduced motion.
 */
export function Reveal({ children, className, delay = 0, y = 18, once = true }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
