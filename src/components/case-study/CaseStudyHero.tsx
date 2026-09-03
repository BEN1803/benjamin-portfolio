"use client";

import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import type { Project } from "@/lib/projects";
import AvailabilityBadge from "./AvailabilityBadge";
import MagneticButton from "../MagneticButton";

interface CaseStudyHeroProps {
  project: Project;
}

export default function CaseStudyHero({
  project,
}: CaseStudyHeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute right-[-250px] top-[20%] h-[650px] w-[650px] rounded-full bg-[#2f7bff]/[0.045] blur-[160px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Back navigation */}
        <motion.a
          href="/#work"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="group inline-flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 transition-colors duration-300 hover:text-white"
        >
          <ArrowLeft
            size={14}
            strokeWidth={1.2}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />

          Back to work
        </motion.a>

        {/* Project metadata */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mt-24 flex flex-wrap items-center gap-4 font-mono text-[9px] uppercase tracking-[0.25em]"
        >
          <span className="text-[#2f7bff]">
            {project.number}
          </span>

          <span className="text-white/20">
            /
          </span>

          <span className="text-white/30">
            Case Study
          </span>

          <span className="text-white/10">
            /
          </span>

          <span className="text-white/25">
            {project.category}
          </span>
        </motion.div>

        {/* Project title */}
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 max-w-6xl font-display text-[clamp(4rem,13vw,12rem)] font-bold uppercase leading-[0.78] tracking-[-0.07em]"
        >
          {project.title}
        </motion.h1>

        {/* Hero information */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          {/* Description + availability */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.45,
            }}
            className="max-w-2xl"
          >
            <p className="text-base leading-relaxed text-white/45 md:text-lg">
              {project.description}
            </p>

            <div className="mt-8">
              <AvailabilityBadge
                availability={project.availability}
              />
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.55,
            }}
            className="lg:justify-self-end"
          >
            <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
              Technology
            </p>

            <div className="flex max-w-md flex-wrap gap-2 lg:justify-end">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-white/10 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-white/40"
                >
                  {technology}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Project links */}
        {(project.liveUrl ||
          project.demoUrl ||
          project.githubUrl) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.65,
            }}
            className="mt-14 flex flex-wrap gap-4"
          >
            {/* Live project */}
            {project.liveUrl && (
              <MagneticButton strength={0.2}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 border border-white/15 bg-white px-5 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-black transition-colors duration-300 hover:bg-[#7dd3fc]"
                >
                  Live Project

                  <ExternalLink
                    size={13}
                    strokeWidth={1.4}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </MagneticButton>
            )}

            {/* Demo */}
            {project.demoUrl && (
              <MagneticButton strength={0.2}>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 border border-white/15 px-5 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/60 transition-colors duration-300 hover:border-[#2f7bff] hover:text-white"
                >
                  Try Demo

                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.4}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </MagneticButton>
            )}

            {/* GitHub */}
            {project.githubUrl && (
              <MagneticButton strength={0.2}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 border border-white/10 px-5 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/35 transition-colors duration-300 hover:border-white/25 hover:text-white"
                >
                  Source Code

                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.4}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </MagneticButton>
            )}
          </motion.div>
        )}

        {/* Scroll marker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="mt-24 flex items-center gap-4"
        >
          <div className="h-px w-16 bg-[#2f7bff]/60" />

          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/20">
            Explore project
          </span>
        </motion.div>
      </div>
    </section>
  );
}