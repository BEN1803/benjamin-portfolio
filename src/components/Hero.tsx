"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#050505]"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2f7bff]/10 blur-[140px]"
        aria-hidden="true"
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 md:px-10">
        {/* Technical label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-white/40"
        >
          <span className="h-px w-8 bg-[#2f7bff]" />

          <span>Software Developer</span>
        </motion.div>

        {/* Main heading */}
        <h1 className="max-w-6xl font-display text-[clamp(4rem,12vw,11rem)] font-bold uppercase leading-[0.78] tracking-[-0.06em]">
          <motion.span
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="block"
          >
            Benjamin
          </motion.span>

          <motion.span
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="block text-white/90"
          >
            Florian
          </motion.span>
        </h1>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="mt-12 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <p className="max-w-md text-base leading-relaxed text-white/50 md:text-lg">
            Building digital products, systems and experiences — from
            architecture and APIs to interfaces people actually enjoy using.
          </p>

          <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/30">
            <p>Based in Tanzania</p>
            <p className="mt-2 text-[#2f7bff]">Available for opportunities</p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.3,
          }}
          className="group absolute bottom-8 left-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 md:left-10"
        >
          <span>Scroll to explore</span>

          <ArrowDown
            size={14}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:translate-y-1"
          />
        </motion.a>
      </div>

      {/* Decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
    </section>
  );
}