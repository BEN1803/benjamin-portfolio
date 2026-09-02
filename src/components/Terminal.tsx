"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Terminal as TerminalIcon,
  Circle,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

const terminalLines = [
  {
    command: "$ whoami",
    output: ["Benjamin Florian", "Software Developer"],
  },
  {
    command: "$ ./skills",
    output: [
      "frontend ................. React / Next.js / TypeScript",
      "backend .................. Java / Spring Boot / Node.js",
      "databases ................ PostgreSQL / MySQL / Supabase",
      "systems .................. JWT / REST APIs / Payments",
    ],
  },
];

const projects = [
  {
    name: "soko-smart",
    label: "Marketplace Platform",
    href: "#work",
  },
  {
    name: "dukani-ledger",
    label: "Business Management System",
    href: "#work",
  },
  {
    name: "student-clearance",
    label: "Academic Management System",
    href: "#work",
  },
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setVisibleLines(1), 500),
      window.setTimeout(() => setVisibleLines(2), 1400),
      window.setTimeout(() => setShowProjects(true), 2300),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return (
    <section
      id="terminal"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 md:px-10 md:py-48"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-white/30"
            >
              <span className="text-[#2f7bff]">06</span>
              <span>/</span>
              <span>System Access</span>
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
              Enter the
              <br />
              <span className="text-white/25">system.</span>
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
            A small look behind the interface. Explore the stack, the systems
            and the things currently being built.
          </motion.p>
        </div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden border border-white/10 bg-[#080808]"
        >
          {/* Terminal header */}
          <div className="flex h-12 items-center justify-between border-b border-white/10 px-4 md:px-5">
            <div className="flex items-center gap-2">
              <Circle
                size={8}
                fill="currentColor"
                className="text-white/20"
              />
              <Circle
                size={8}
                fill="currentColor"
                className="text-white/10"
              />
              <Circle
                size={8}
                fill="currentColor"
                className="text-white/10"
              />
            </div>

            <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
              <TerminalIcon size={12} strokeWidth={1.3} />
              benjamin@portfolio
            </div>

            <div className="font-mono text-[9px] text-white/20">
              online
            </div>
          </div>

          {/* Terminal body */}
          <div className="min-h-[520px] p-6 font-mono text-xs leading-relaxed md:p-10 md:text-sm">
            <div className="mb-10">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-[#2f7bff]">$</span>
                <span className="text-white/70">whoami</span>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: visibleLines >= 1 ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="pl-4"
              >
                <p className="text-white/80">Benjamin Florian</p>
                <p className="mt-1 text-white/30">
                  Software Developer
                </p>
              </motion.div>
            </div>

            <div className="mb-10">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-[#2f7bff]">$</span>
                <span className="text-white/70">./skills</span>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: visibleLines >= 2 ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2 pl-4 text-[11px] md:text-xs"
              >
                <p>
                  <span className="text-white/35">frontend</span>
                  <span className="text-white/15"> ................. </span>
                  <span className="text-white/55">
                    React / Next.js / TypeScript
                  </span>
                </p>

                <p>
                  <span className="text-white/35">backend</span>
                  <span className="text-white/15"> .................. </span>
                  <span className="text-white/55">
                    Java / Spring Boot / Node.js
                  </span>
                </p>

                <p>
                  <span className="text-white/35">databases</span>
                  <span className="text-white/15"> ................ </span>
                  <span className="text-white/55">
                    PostgreSQL / MySQL / Supabase
                  </span>
                </p>

                <p>
                  <span className="text-white/35">systems</span>
                  <span className="text-white/15"> .................. </span>
                  <span className="text-white/55">
                    JWT / REST APIs / Payments
                  </span>
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showProjects ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="text-[#2f7bff]">$</span>
                <span className="text-white/70">./projects</span>
              </div>

              <div className="space-y-2 pl-4">
                {projects.map((project, index) => (
                  <motion.a
                    key={project.name}
                    href={project.href}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: showProjects ? 1 : 0,
                      x: showProjects ? 0 : -15,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.12,
                    }}
                    className="group flex max-w-2xl items-center justify-between border-b border-white/5 py-3 transition-colors duration-300 hover:border-[#2f7bff]/30"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <ChevronRight
                        size={13}
                        strokeWidth={1.5}
                        className="shrink-0 text-[#2f7bff]/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#2f7bff]"
                      />

                      <span className="truncate text-white/65 transition-colors duration-300 group-hover:text-white">
                        {project.name}
                      </span>

                      <span className="hidden text-white/20 sm:inline">
                        —
                      </span>

                      <span className="hidden text-[10px] text-white/25 sm:inline">
                        {project.label}
                      </span>
                    </div>

                    <span className="ml-4 flex shrink-0 items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-[#2f7bff]/60 transition-colors duration-300 group-hover:text-[#7dd3fc]">
                      Open
                      <ArrowUpRight
                        size={12}
                        strokeWidth={1.4}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Active prompt */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showProjects ? 1 : 0 }}
              transition={{
                duration: 0.5,
                delay: 0.6,
              }}
              className="mt-10 flex items-center gap-2"
            >
              <span className="text-[#2f7bff]">$</span>
              <span className="h-4 w-px animate-pulse bg-[#7dd3fc]" />
            </motion.div>
          </div>

          {/* Terminal glow */}
          <div
            className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[70%] -translate-x-1/2 rounded-full bg-[#2f7bff]/[0.06] blur-[100px]"
            aria-hidden="true"
          />
        </motion.div>

        {/* Footer label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-white/20"
        >
          <span>Interactive environment</span>
          <span>STATUS: ONLINE</span>
        </motion.div>
      </div>
    </section>
  );
}