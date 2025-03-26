"use client";

import { motion } from "framer-motion";

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
  duration?: number;
}

export default function FloatingElement({
  children,
  delay = 0,
  yOffset = 10,
  duration = 4,
}: FloatingElementProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -yOffset, 0] }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}