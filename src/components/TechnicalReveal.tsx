"use client";

import { motion } from "motion/react";
import {
  ShieldCheck,
  Database,
  Brackets,
  CreditCard,
  Percent,
  ArrowDown,
  Check,
} from "lucide-react";

const layers = [
  {
    number: "01",
    title: "Authentication",
    description:
      "Secure identity, sessions and access control form the foundation.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Database",
    description:
      "Structured data models connect users, products, transactions and systems.",
    icon: Database,
  },
  {
    number: "03",
    title: "API",
    description:
      "Backend services expose the logic that connects every part of the application.",
    icon: Brackets,
  },
  {
    number: "04",
    title: "Payments",
    description:
      "Payment workflows connect real-world transactions with digital systems.",
    icon: CreditCard,
  },
  {
    number: "05",
    title: "Commissions",
    description:
      "Business rules calculate platform earnings and transaction splits.",
    icon: Percent,
  },
  {
    number: "06",
    title: "Payouts",
    description:
      "Completed transactions flow back to the people and businesses involved.",
    icon: Check,
  },
];

export default function TechnicalReveal() {
  return (
    <section
      id="systems"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 md:px-10 md:py-48"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-24 grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-white/30"
            >
              <span className="text-[#2f7bff]">03</span>
              <span>/</span>
              <span>Under the surface</span>
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
              There's more
              <br />
              <span className="text-white/25">underneath.</span>
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
            Good software is more than an interface. Behind every screen is a
            system of decisions, data, logic and infrastructure.
          </motion.p>
        </div>

        {/* System */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[27px] top-8 hidden h-[calc(100%-64px)] w-px bg-white/10 md:block">
            <motion.div
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
              }}
              className="w-full bg-[#2f7bff]"
            />
          </div>

          {/* Layers */}
          <div className="space-y-4">
            {layers.map((layer, index) => {
              const Icon = layer.icon;

              return (
                <motion.div
                  key={layer.title}
                  initial={{
                    opacity: 0,
                    x: -40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative grid min-h-[120px] border border-white/10 bg-[#080808] transition-all duration-500 hover:border-[#2f7bff]/30 md:grid-cols-[56px_180px_1fr_60px]"
                >
                  {/* Number */}
                  <div className="flex items-center justify-center border-b border-white/10 font-mono text-[10px] text-[#2f7bff] md:border-b-0 md:border-r">
                    {layer.number}
                  </div>

                  {/* Icon */}
                  <div className="flex items-center gap-4 border-b border-white/10 px-6 py-5 md:border-b-0 md:border-r">
                    <Icon
                      size={18}
                      strokeWidth={1.3}
                      className="text-white/30 transition-colors duration-300 group-hover:text-[#7dd3fc]"
                    />

                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">
                      {layer.title}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="flex items-center px-6 py-6 md:px-8">
                    <p className="max-w-xl text-sm leading-relaxed text-white/35 transition-colors duration-300 group-hover:text-white/55">
                      {layer.description}
                    </p>
                  </div>

                  {/* Status */}
                  <div className="hidden items-center justify-center border-l border-white/10 md:flex">
                    <div className="h-2 w-2 rounded-full bg-[#2f7bff] opacity-40 shadow-[0_0_12px_#2f7bff] transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  {/* Hover line */}
                  <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-[#2f7bff] transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/25"
        >
          <ArrowDown
            size={14}
            strokeWidth={1.5}
            className="text-[#2f7bff]"
          />

          <span>From interface to infrastructure</span>
        </motion.div>
      </div>

      {/* Ambient background */}
      <div
        className="pointer-events-none absolute left-[-200px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#2f7bff]/[0.025] blur-[140px]"
        aria-hidden="true"
      />
    </section>
  );
}