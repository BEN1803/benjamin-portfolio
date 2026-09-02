"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  Server,
  Database,
  Layers3,
  ArrowUpRight,
} from "lucide-react";

const skillGroups = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend",
    icon: Code2,
    description:
      "Interfaces focused on interaction, responsiveness and visual detail.",
    technologies: [
      {
        name: "React",
        description:
          "Component-driven interfaces and interactive application experiences.",
      },
      {
        name: "Next.js",
        description:
          "Full-stack React applications using the App Router, server rendering and modern web architecture.",
      },
      {
        name: "TypeScript",
        description:
          "Type-safe application development for more predictable and maintainable code.",
      },
      {
        name: "Tailwind CSS",
        description:
          "Utility-first styling for building responsive and consistent interfaces.",
      },
    ],
  },
  {
    id: "backend",
    number: "02",
    title: "Backend",
    icon: Server,
    description:
      "Business logic, APIs, authentication and the systems behind the interface.",
    technologies: [
      {
        name: "Java",
        description:
          "Object-oriented application development and backend system design.",
      },
      {
        name: "Spring Boot",
        description:
          "Production-oriented REST APIs, authentication and business logic.",
      },
      {
        name: "Node.js",
        description:
          "JavaScript runtime for APIs, services and server-side applications.",
      },
      {
        name: "NestJS",
        description:
          "Structured backend applications built around modular architecture and TypeScript.",
      },
    ],
  },
  {
    id: "data",
    number: "03",
    title: "Data",
    icon: Database,
    description:
      "Designing and connecting the data layer that keeps applications running.",
    technologies: [
      {
        name: "PostgreSQL",
        description:
          "Relational database systems for structured application data and transactions.",
      },
      {
        name: "MySQL",
        description:
          "Relational data storage for business applications and transactional systems.",
      },
      {
        name: "Supabase",
        description:
          "Postgres-based backend infrastructure with authentication, storage and database tooling.",
      },
    ],
  },
  {
    id: "systems",
    number: "04",
    title: "Systems",
    icon: Layers3,
    description:
      "Connecting authentication, APIs, payments, infrastructure and deployment into complete products.",
    technologies: [
      {
        name: "JWT",
        description:
          "Token-based authentication and authorization for protected application resources.",
      },
      {
        name: "REST APIs",
        description:
          "Structured communication between frontend applications and backend services.",
      },
      {
        name: "Payment APIs",
        description:
          "Integrating digital payment workflows into real-world applications.",
      },
      {
        name: "Git",
        description:
          "Version control and collaborative software development workflows.",
      },
    ],
  },
];

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState("frontend");
  const [activeTechnology, setActiveTechnology] = useState("React");

  const selectedGroup =
    skillGroups.find((group) => group.id === activeGroup) ?? skillGroups[0];

  const selectedTechnology =
    selectedGroup.technologies.find(
      (technology) => technology.name === activeTechnology,
    ) ?? selectedGroup.technologies[0];

  const handleGroupChange = (groupId: string) => {
    const group = skillGroups.find((item) => item.id === groupId);

    if (!group) return;

    setActiveGroup(groupId);
    setActiveTechnology(group.technologies[0].name);
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 md:px-10 md:py-48"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-white/30"
            >
              <span className="text-[#2f7bff]">04</span>
              <span>/</span>
              <span>Technical Stack</span>
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
              The
              <br />
              <span className="text-white/25">Stack.</span>
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
            Tools are only useful when they solve the right problem. The stack
            changes with the system being built.
          </motion.p>
        </div>

        {/* Main stack interface */}
        <div className="grid border border-white/10 lg:grid-cols-[280px_1fr]">
          {/* Categories */}
          <div className="border-b border-white/10 lg:border-b-0 lg:border-r">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              const isActive = activeGroup === group.id;

              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => handleGroupChange(group.id)}
                  className={`group relative flex w-full items-center gap-5 border-b border-white/10 px-6 py-6 text-left transition-all duration-300 last:border-b-0 ${
                    isActive
                      ? "bg-white/[0.04]"
                      : "hover:bg-white/[0.02]"
                  }`}
                >
                  {/* Active indicator */}
                  <span
                    className={`absolute left-0 top-0 h-full w-px transition-all duration-300 ${
                      isActive ? "bg-[#2f7bff]" : "bg-transparent"
                    }`}
                  />

                  <Icon
                    size={18}
                    strokeWidth={1.3}
                    className={`transition-colors duration-300 ${
                      isActive
                        ? "text-[#7dd3fc]"
                        : "text-white/25 group-hover:text-white/50"
                    }`}
                  />

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-mono text-[10px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                          isActive ? "text-white" : "text-white/40"
                        }`}
                      >
                        {group.title}
                      </span>

                      <span className="font-mono text-[9px] text-white/20">
                        {group.number}
                      </span>
                    </div>
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="skill-active-dot"
                      className="h-1.5 w-1.5 rounded-full bg-[#2f7bff] shadow-[0_0_12px_#2f7bff]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Technologies */}
          <div className="min-h-[520px]">
            {/* Group description */}
            <div className="border-b border-white/10 p-8 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedGroup.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[#2f7bff]">
                    {selectedGroup.number} / {selectedGroup.title}
                  </p>

                  <p className="max-w-xl text-sm leading-relaxed text-white/35">
                    {selectedGroup.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Technology list */}
            <div className="grid md:grid-cols-2">
              {selectedGroup.technologies.map((technology, index) => {
                const isActive = activeTechnology === technology.name;

                return (
                  <button
                    key={technology.name}
                    type="button"
                    onClick={() => setActiveTechnology(technology.name)}
                    className={`group relative min-h-[150px] border-b border-white/10 p-7 text-left transition-all duration-300 md:p-8 ${
                      index % 2 === 0 ? "md:border-r" : ""
                    } ${
                      isActive
                        ? "bg-white/[0.035]"
                        : "hover:bg-white/[0.02]"
                    }`}
                  >
                    {/* Number */}
                    <span className="font-mono text-[9px] text-white/15">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Technology */}
                    <div className="mt-5 flex items-center justify-between">
                      <span
                        className={`font-display text-2xl font-bold uppercase tracking-[-0.03em] transition-colors duration-300 md:text-3xl ${
                          isActive
                            ? "text-white"
                            : "text-white/45 group-hover:text-white/75"
                        }`}
                      >
                        {technology.name}
                      </span>

                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.3}
                        className={`transition-all duration-300 ${
                          isActive
                            ? "translate-x-0 -translate-y-0 text-[#7dd3fc] opacity-100"
                            : "translate-y-1 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-50"
                        }`}
                      />
                    </div>

                    {/* Active line */}
                    <span
                      className={`absolute bottom-0 left-0 h-px bg-[#2f7bff] transition-all duration-500 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Selected technology detail */}
            <div className="border-t border-white/10 bg-white/[0.015] p-8 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTechnology.name}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col justify-between gap-8 md:flex-row md:items-center"
                >
                  <div>
                    <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[#2f7bff]">
                      Selected technology
                    </p>

                    <h3 className="font-display text-3xl font-bold uppercase tracking-[-0.04em]">
                      {selectedTechnology.name}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/35">
                      {selectedTechnology.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2f7bff] shadow-[0_0_10px_#2f7bff]" />
                    Active
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/20"
        >
          <span className="h-px w-10 bg-[#2f7bff]" />
          <span>Tools change. Engineering principles remain.</span>
        </motion.div>
      </div>

      {/* Background glow */}
      <div
        className="pointer-events-none absolute right-[-250px] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#2f7bff]/[0.025] blur-[150px]"
        aria-hidden="true"
      />
    </section>
  );
}