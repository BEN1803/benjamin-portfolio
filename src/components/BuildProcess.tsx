"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Lightbulb,
  Boxes,
  Database,
  Server,
  Cable,
  Monitor,
  FlaskConical,
  Rocket,
  ArrowRight,
} from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Idea",
    description:
      "Understand the problem, define the goal and turn an idea into something that can actually be built.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "Break the system into clear components, responsibilities and relationships before writing the implementation.",
    icon: Boxes,
  },
  {
    number: "03",
    title: "Database",
    description:
      "Design the data model, relationships and constraints that support the application.",
    icon: Database,
  },
  {
    number: "04",
    title: "Backend",
    description:
      "Build the business logic, authentication, services and rules that make the system work.",
    icon: Server,
  },
  {
    number: "05",
    title: "API",
    description:
      "Create the communication layer connecting the backend with clients and external services.",
    icon: Cable,
  },
  {
    number: "06",
    title: "Frontend",
    description:
      "Turn the system into an interface that people can understand, navigate and enjoy using.",
    icon: Monitor,
  },
  {
    number: "07",
    title: "Testing",
    description:
      "Verify that the system behaves correctly and handle the edge cases that appear outside the happy path.",
    icon: FlaskConical,
  },
  {
    number: "08",
    title: "Deployment",
    description:
      "Take the finished system from a development environment into a real production environment.",
    icon: Rocket,
  },
];

export default function BuildProcess() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineScale = useTransform(scrollYProgress, [0.1, 0.85], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 md:px-10 md:py-48"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-24 grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-white/30"
            >
              <span className="text-[#2f7bff]">05</span>
              <span>/</span>
              <span>Development Process</span>
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
              How I
              <br />
              <span className="text-white/25">Build.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="max-w-sm text-sm leading-relaxed text-white/40 lg:justify-self-end"
          >
            Good software is rarely created by jumping straight into code.
            Every layer has a purpose, and every decision affects what comes
            next.
          </motion.p>
        </div>

        {/* Process */}
        <div className="relative">
          {/* Desktop progress line */}
          <div className="absolute left-[31px] top-0 hidden h-full w-px bg-white/10 md:block">
            <motion.div
              style={{
                scaleY: lineScale,
                transformOrigin: "top",
              }}
              className="h-full w-full bg-[#2f7bff]"
            />
          </div>

          <div className="space-y-5">
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <motion.div
                  key={stage.title}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative"
                >
                  <div className="grid min-h-[150px] border border-white/10 bg-[#080808] transition-all duration-500 hover:border-[#2f7bff]/30 md:grid-cols-[64px_180px_1fr_80px]">
                    {/* Number */}
                    <div className="flex items-center justify-center border-b border-white/10 md:border-b-0 md:border-r">
                      <span className="font-mono text-[10px] text-[#2f7bff]">
                        {stage.number}
                      </span>
                    </div>

                    {/* Stage */}
                    <div className="flex items-center gap-4 border-b border-white/10 px-6 py-6 md:border-b-0 md:border-r">
                      <Icon
                        size={19}
                        strokeWidth={1.3}
                        className="text-white/25 transition-colors duration-300 group-hover:text-[#7dd3fc]"
                      />

                      <span className="font-display text-xl font-bold uppercase tracking-[-0.03em] text-white/65 transition-colors duration-300 group-hover:text-white">
                        {stage.title}
                      </span>
                    </div>

                    {/* Description */}
                    <div className="flex items-center px-6 py-7 md:px-10">
                      <p className="max-w-xl text-sm leading-relaxed text-white/30 transition-colors duration-300 group-hover:text-white/50">
                        {stage.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden items-center justify-center border-l border-white/10 md:flex">
                      <ArrowRight
                        size={17}
                        strokeWidth={1.2}
                        className="text-white/15 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#7dd3fc]"
                      />
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-[#2f7bff] transition-all duration-500 group-hover:w-full" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mt-20 border-t border-white/10 pt-8"
        >
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">
              Process / 08 stages
            </p>

            <p className="max-w-md text-sm leading-relaxed text-white/30 md:text-right">
              The goal isn't to use more technology. It's to build the simplest
              system that solves the right problem.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background detail */}
      <div
        className="pointer-events-none absolute left-[-250px] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#2f7bff]/[0.02] blur-[150px]"
        aria-hidden="true"
      />
    </section>
  );
}