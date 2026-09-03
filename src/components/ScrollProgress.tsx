"use client";

import { motion, useScroll } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] h-px origin-left bg-[#2f7bff]"
      style={{
        scaleX: scrollYProgress,
        width: "100%",
      }}
    />
  );
}