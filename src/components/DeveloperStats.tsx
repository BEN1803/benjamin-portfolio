"use client";

import { motion } from "motion/react";
import {
  Activity,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  Server,
  Terminal,
} from "lucide-react";

const stats = [
  {
    label: "Primary Focus",
    value: "FULL STACK",
    detail: "Frontend + Backend",
    icon: Layers3,
  },
  {
    label: "Frontend",
    value: "NEXT.JS",
    detail: "React / TypeScript",
    icon: Code2,
  },
  {
    label: "Backend",
    value: "SPRING BOOT",
    detail: "Java / REST APIs",
    icon: Server,
  },
  {
    label: "Data",
    value: "POSTGRESQL",
    detail: "Relational systems",
    icon: Database,
  },
  {
    label: "Authentication",
    value: "JWT",
    detail: "Secure application access",
    icon: Activity,
  },
  {
    label: "Workflow",
    value: "GIT",
    detail: "Version controlled",
    icon: GitBranch,
  },
];

export default function DeveloperStats() {
  return (
    <section
      id="status"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 md:px-10 md:py-48"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 flex flex-col justify-between gap-8 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-white/30"
            >
              <span className="text-[#2f7bff]">08</span>
              <span>/</span>
              <span>System Status</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-[clamp(3.5rem,8vw,7rem)] font-bold uppercase leading-[0.82] tracking-[-0.06em]"
            >
              Built for
              <br />
              <span className="text-white/25">the stack.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2f7bff] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2f7bff]" />
            </span>

            Systems operational
          </motion.div>
        </div>

        {/* Stats grid */}
        <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative min-h-[230px] border-b border-r border-white/10 bg-[#080808] p-7 transition-colors duration-500 hover:bg-[#0a0a0a] md:p-9"
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                    {stat.label}
                  </span>

                  <Icon
                    size={17}
                    strokeWidth={1.2}
                    className="text-white/15 transition-colors duration-300 group-hover:text-[#7dd3fc]"
                  />
                </div>

                {/* Main value */}
                <div className="absolute bottom-14 left-7 md:left-9">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + index * 0.07,
                    }}
                    className="font-display text-3xl font-bold uppercase tracking-[-0.04em] text-white/75 transition-colors duration-300 group-hover:text-white md:text-4xl"
                  >
                    {stat.value}
                  </motion.p>

                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.15em] text-white/25">
                    {stat.detail}
                  </p>
                </div>

                {/* Index */}
                <span className="absolute bottom-7 right-7 font-mono text-[9px] text-white/10 md:right-9">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#2f7bff] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* System information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-3"
        >
          <div className="flex items-center gap-4">
            <Terminal
              size={16}
              strokeWidth={1.2}
              className="text-[#2f7bff]"
            />

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/20">
                Environment
              </p>

              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/50">
                Development → Production
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Globe2
              size={16}
              strokeWidth={1.2}
              className="text-[#2f7bff]"
            />

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/20">
                Location
              </p>

              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/50">
                Tanzania
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Activity
              size={16}
              strokeWidth={1.2}
              className="text-[#2f7bff]"
            />

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/20">
                Availability
              </p>

              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[#7dd3fc]">
                Open to opportunities
              </p>
            </div>
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