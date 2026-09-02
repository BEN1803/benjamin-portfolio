"use client";

import { motion } from "motion/react";

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-6 py-32 md:px-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-white/30"
        >
          <span className="text-[#2f7bff]">01</span>

          <span>/</span>

          <span>Introduction</span>
        </motion.div>

        {/* Main statement */}
        <div className="max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-display text-[clamp(4rem,11vw,10rem)] font-bold uppercase leading-[0.82] tracking-[-0.06em]"
          >
            I BUILD
            <br />
            <span className="text-white/30">THINGS.</span>
          </motion.h2>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="mt-16 flex flex-col gap-8 md:ml-auto md:max-w-xl"
        >
          <p className="text-lg leading-relaxed text-white/55 md:text-xl">
            Software isn't just code. It's systems, interfaces, logic and
            experiences working together to solve real problems.
          </p>

          <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
            <span className="h-px w-10 bg-[#2f7bff]" />

            <span>
              From idea
              <span className="mx-2 text-[#2f7bff]">→</span>
              to reality
            </span>
          </div>
        </motion.div>
      </div>

      {/* Background detail */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#2f7bff]/5 blur-[140px]"
        aria-hidden="true"
      />
    </section>
  );
}