"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 md:px-10 md:py-48"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-24 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-white/30"
            >
              <span className="text-[#2f7bff]">02</span>

              <span>/</span>

              <span>Selected Work</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-[clamp(4rem,10vw,9rem)] font-bold uppercase leading-[0.82] tracking-[-0.06em]"
            >
              Selected
              <br />
              <span className="text-white/30">Work.</span>
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
            className="max-w-sm text-sm leading-relaxed text-white/40 md:text-right"
          >
            A selection of systems and digital products built across
            marketplaces, business management and academic workflows.
          </motion.p>
        </div>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden border border-white/10 bg-white/[0.02] transition-colors duration-500 hover:border-[#2f7bff]/40"
            >
              <div className="grid min-h-[420px] md:grid-cols-[1fr_1.5fr]">
                {/* Project information */}
                <div className="flex flex-col justify-between p-8 md:p-12">
                  <div>
                    <div className="mb-8 flex items-center justify-between">
                      <span className="font-mono text-xs text-[#2f7bff]">
                        {project.number}
                      </span>

                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-display text-4xl font-bold uppercase tracking-[-0.04em] md:text-6xl">
                      {project.title}
                    </h3>

                    <p className="mt-6 max-w-md text-sm leading-relaxed text-white/40 md:text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mt-12">
                    <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
                      Built with
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="border border-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-white/40 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/60"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual area */}
                <div className="relative min-h-[300px] overflow-hidden border-t border-white/10 md:border-l md:border-t-0">
                  {/* Grid */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                      backgroundSize: "60px 60px",
                    }}
                  />

                  {/* Project number */}
                  <div className="absolute right-8 top-8 font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">
                    PROJECT / {project.number}
                  </div>

                  {/* Abstract visual */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.2,
                      }}
                      className="relative h-40 w-40 md:h-56 md:w-56"
                    >
                      <div className="absolute inset-0 rounded-full border border-[#2f7bff]/20" />

                      <div className="absolute inset-6 rounded-full border border-[#2f7bff]/20" />

                      <div className="absolute inset-12 rounded-full border border-[#2f7bff]/30" />

                      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7dd3fc] shadow-[0_0_30px_#2f7bff]" />

                      <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 bg-[#2f7bff]/20" />

                      <div className="absolute left-1/2 top-1/2 h-full w-px -translate-y-1/2 bg-[#2f7bff]/20" />
                    </motion.div>
                  </div>

                  {/* Open project */}
                  <div className="absolute bottom-8 right-8">
                    <div className="flex h-12 w-12 items-center justify-center border border-white/10 transition-all duration-300 group-hover:border-[#2f7bff] group-hover:bg-[#2f7bff]/10">
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div className="pointer-events-none absolute inset-0 bg-[#2f7bff]/0 transition-colors duration-700 group-hover:bg-[#2f7bff]/[0.025]" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}