"use client";

import { motion } from "motion/react";
import {
  ArrowDownRight,
  Code2,
  Layers3,
  Lightbulb,
} from "lucide-react";

const journey = [
  {
    number: "01",
    year: "START",
    title: "Curiosity",
    description:
      "It started with wanting to understand how software actually works — not just how to use it, but how the pieces behind the screen connect.",
    icon: Lightbulb,
  },
  {
    number: "02",
    year: "BUILD",
    title: "Learning by Building",
    description:
      "Projects became the classroom. Building real systems turned concepts like databases, APIs, authentication and architecture into practical experience.",
    icon: Code2,
  },
  {
    number: "03",
    year: "NOW",
    title: "Systems Thinking",
    description:
      "The focus has grown beyond individual features toward building complete products where interfaces, backend logic, data and infrastructure work together.",
    icon: Layers3,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 md:px-10 md:py-48"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-24 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-white/30"
            >
              <span className="text-[#2f7bff]">07</span>
              <span>/</span>
              <span>About</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-[clamp(3.5rem,9vw,8rem)] font-bold uppercase leading-[0.82] tracking-[-0.06em]"
            >
              Built by
              <br />
              <span className="text-white/25">curiosity.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="max-w-md lg:justify-self-end"
          >
            <p className="text-base leading-relaxed text-white/45 md:text-lg">
              Software development is a continuous process of learning,
              experimenting and turning ideas into working systems.
            </p>

            <p className="mt-6 text-sm leading-relaxed text-white/25">
              The goal is simple: understand the problem deeply, build
              thoughtfully and keep getting better at the craft.
            </p>
          </motion.div>
        </div>

        {/* Journey */}
        <div className="relative">
          <div className="absolute left-[31px] top-8 hidden h-[calc(100%-64px)] w-px bg-white/10 md:block" />

          <div className="space-y-5">
            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: -50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative"
                >
                  <div className="grid min-h-[210px] border border-white/10 bg-[#080808] transition-all duration-500 hover:border-[#2f7bff]/30 md:grid-cols-[64px_140px_180px_1fr_70px]">
                    {/* Number */}
                    <div className="flex items-center justify-center border-b border-white/10 md:border-b-0 md:border-r">
                      <span className="font-mono text-[10px] text-[#2f7bff]">
                        {item.number}
                      </span>
                    </div>

                    {/* Year */}
                    <div className="flex items-center border-b border-white/10 px-6 md:border-b-0 md:border-r">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/25">
                        {item.year}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="flex items-center gap-4 border-b border-white/10 px-6 md:border-b-0 md:border-r">
                      <Icon
                        size={19}
                        strokeWidth={1.2}
                        className="text-white/25 transition-colors duration-300 group-hover:text-[#7dd3fc]"
                      />

                      <span className="font-display text-xl font-bold uppercase tracking-[-0.03em] text-white/65 transition-colors duration-300 group-hover:text-white">
                        {item.title}
                      </span>
                    </div>

                    {/* Description */}
                    <div className="flex items-center px-6 py-8 md:px-10">
                      <p className="max-w-xl text-sm leading-relaxed text-white/30 transition-colors duration-300 group-hover:text-white/50">
                        {item.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden items-center justify-center border-l border-white/10 md:flex">
                      <ArrowDownRight
                        size={17}
                        strokeWidth={1.2}
                        className="text-white/15 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-[#7dd3fc]"
                      />
                    </div>

                    {/* Hover line */}
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-[#2f7bff] transition-all duration-500 group-hover:w-full" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.9,
          }}
          className="mt-24 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[1fr_auto]"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">
              Current direction
            </p>

            <p className="mt-4 max-w-2xl font-display text-2xl font-medium tracking-[-0.03em] text-white/70 md:text-3xl">
              Building software that is useful, scalable and worth exploring.
            </p>
          </div>

          <div className="flex items-end">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#2f7bff]">
              Always learning
            </span>
          </div>
        </motion.div>
      </div>

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute right-[-250px] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#2f7bff]/[0.025] blur-[150px]"
        aria-hidden="true"
      />
    </section>
  );
}