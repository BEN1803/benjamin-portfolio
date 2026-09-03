"use client";

import { useLayoutEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projects } from "@/lib/projects";
import MagneticButton from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        return -(track.scrollWidth - window.innerWidth);
      };

      gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative overflow-hidden bg-[#050505]"
    >
      {/* Section header */}
      <div className="absolute left-0 top-0 z-20 w-full px-6 pt-10 md:px-10 md:pt-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-white/30">
            <span className="text-[#2f7bff]">02</span>
            <span>/</span>
            <span>Selected Work</span>
          </div>

          <div className="hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/25 md:flex">
            <span>Scroll</span>

            <ArrowDown
              size={13}
              strokeWidth={1.5}
              className="rotate-[-90deg]"
            />
          </div>
        </div>
      </div>

      {/* Horizontal track */}
      <div
        ref={trackRef}
        className="flex h-screen w-max items-center gap-8 px-6 md:gap-12 md:px-10"
      >
        {/* Intro panel */}
        <div className="flex h-[70vh] w-[85vw] max-w-[1000px] flex-shrink-0 flex-col justify-end pb-16 md:h-[72vh] md:w-[70vw] md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-[#2f7bff]">
              03 Projects
            </p>

            <h2 className="max-w-5xl font-display text-[clamp(4rem,11vw,10rem)] font-bold uppercase leading-[0.8] tracking-[-0.06em]">
              Selected
              <br />
              <span className="text-white/25">Work.</span>
            </h2>

            <p className="mt-10 max-w-md text-sm leading-relaxed text-white/40 md:text-base">
              Systems, platforms and digital products built to solve real
              problems.
            </p>
          </motion.div>
        </div>

        {/* Project cards */}
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group relative flex h-[70vh] w-[88vw] max-w-[1200px] flex-shrink-0 overflow-hidden border border-white/10 bg-[#080808] md:h-[72vh] md:w-[78vw]"
          >
            {/* Background grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "70px 70px",
              }}
            />

            {/* Blue ambient glow */}
            <div className="pointer-events-none absolute right-[-15%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#2f7bff]/[0.04] blur-[120px] transition-all duration-1000 group-hover:bg-[#2f7bff]/[0.08]" />

            {/* Content */}
            <div className="relative z-10 flex w-full flex-col justify-between p-8 md:p-14 lg:p-16">
              {/* Top */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-xs text-[#2f7bff]">
                    {project.number}
                  </span>

                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
                    {project.category}
                  </p>
                </div>

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">
                  PROJECT / {project.number}
                </span>
              </div>

              {/* Middle */}
              <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
                <div>
                  <h3 className="font-display text-[clamp(3.5rem,7vw,7rem)] font-bold uppercase leading-[0.8] tracking-[-0.06em]">
                    {project.title}
                  </h3>

                  <p className="mt-8 max-w-lg text-sm leading-relaxed text-white/40 md:text-base">
                    {project.description}
                  </p>
                </div>

                {/* Technical visual */}
                <div className="relative hidden aspect-square max-w-[320px] justify-self-end lg:block">
                  <div className="absolute inset-0 rounded-full border border-[#2f7bff]/10" />

                  <div className="absolute inset-[12%] rounded-full border border-[#2f7bff]/15" />

                  <div className="absolute inset-[25%] rounded-full border border-[#2f7bff]/20" />

                  <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 bg-[#2f7bff]/15" />

                  <div className="absolute left-1/2 top-1/2 h-full w-px -translate-y-1/2 bg-[#2f7bff]/15" />

                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-[8%]"
                  >
                    <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#7dd3fc] shadow-[0_0_20px_#2f7bff]" />
                  </motion.div>

                  <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7dd3fc] shadow-[0_0_35px_#2f7bff]" />
                </div>
              </div>

              {/* Bottom */}
              <div className="flex flex-col gap-8 border-t border-white/10 pt-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">
                    Built with
                  </p>

                  <div className="flex max-w-xl flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="border border-white/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-white/35 transition-colors duration-300 group-hover:border-[#2f7bff]/30 group-hover:text-white/60"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <MagneticButton strength={0.18}>
                  <button
                      type="button"
                      className="group/button flex w-fit items-center gap-4 border border-white/10 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 transition-all duration-300 hover:border-[#2f7bff] hover:bg-[#2f7bff]/10 hover:text-white"
                    >
                      Explore Case Study

                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover/button:-translate-y-1 group-hover/button:translate-x-1"
                      />
                  </button>
                </MagneticButton>
              </div>
            </div>

            {/* Hover border */}
            <div className="pointer-events-none absolute inset-0 border border-[#2f7bff]/0 transition-colors duration-700 group-hover:border-[#2f7bff]/30" />

            {/* Project index */}
            <div className="absolute bottom-5 right-6 font-mono text-[9px] uppercase tracking-[0.2em] text-white/15 md:right-10">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </div>
          </article>
        ))}

        {/* Ending panel */}
        <div className="flex h-[70vh] w-[50vw] max-w-[700px] flex-shrink-0 items-center justify-center md:h-[72vh]">
          <div className="text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/25">
              More coming
            </p>

            <div className="mt-6 h-px w-24 bg-[#2f7bff] mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}