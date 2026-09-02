"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  MapPin,
} from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "Let's start a conversation",
    href: "mailto:hello@example.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "Explore the code",
    href: "#",
    icon: ArrowUpRight,
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "#",
    icon: ArrowUpRight,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-6 py-32 md:px-10 md:py-48"
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
          <span className="text-[#2f7bff]">09</span>
          <span>/</span>
          <span>Contact</span>
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-6xl font-display text-[clamp(3.5rem,10vw,9.5rem)] font-bold uppercase leading-[0.78] tracking-[-0.065em]"
        >
          So...
          <br />
          <span className="text-white/25">what are we</span>
          <br />
          building
          <br />
          <span className="text-[#2f7bff]">next?</span>
        </motion.h2>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-16 max-w-xl"
        >
          <p className="text-base leading-relaxed text-white/45 md:text-lg">
            Have an idea, a problem worth solving, or a system that needs to
            exist? Let's turn it into something real.
          </p>
        </motion.div>

        {/* Contact links */}
        <div className="mt-16 grid border-l border-t border-white/10 md:grid-cols-3">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;

            return (
              <motion.a
                key={link.label}
                href={link.href}
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
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex min-h-[190px] flex-col justify-between border-b border-r border-white/10 bg-[#080808] p-7 transition-colors duration-500 hover:bg-[#0a0a0a] md:p-9"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                    {link.label}
                  </span>

                  <Icon
                    size={17}
                    strokeWidth={1.2}
                    className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#7dd3fc]"
                  />
                </div>

                <div>
                  <p className="font-display text-xl font-bold uppercase tracking-[-0.03em] text-white/65 transition-colors duration-300 group-hover:text-white">
                    {link.value}
                  </p>

                  <div className="mt-5 h-px w-8 bg-[#2f7bff] transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom information */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center"
        >
          <div className="flex items-center gap-3">
            <MapPin
              size={15}
              strokeWidth={1.2}
              className="text-[#2f7bff]"
            />

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
              Tanzania
            </span>
          </div>

          <div className="flex items-center gap-3">
            <MessageCircle
              size={15}
              strokeWidth={1.2}
              className="text-[#2f7bff]"
            />

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
              Open to opportunities
            </span>
          </div>
        </motion.div>
      </div>

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute right-[-300px] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-[#2f7bff]/[0.035] blur-[160px]"
        aria-hidden="true"
      />

      {/* Small center glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2f7bff]/[0.025] blur-[120px]"
        aria-hidden="true"
      />
    </section>
  );
}