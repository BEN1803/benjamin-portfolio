"use client";

import { motion } from "motion/react";

export default function PageTransition() {
  return (
    <motion.div
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      }}
      style={{ transformOrigin: "top" }}
      className="pointer-events-none fixed inset-0 z-[200] bg-[#050505]"
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.3em] text-white/30"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2f7bff]" />
          BF / SYSTEM
        </motion.div>
      </div>
    </motion.div>
  );
}