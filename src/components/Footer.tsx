"use client";

import { motion } from "motion/react";
import { ArrowUp, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#050505] px-6 pb-8 pt-24 md:px-10 md:pt-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Top line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="origin-left border-t border-white/10"
        />

        {/* Main footer */}
        <div className="grid gap-16 py-16 md:grid-cols-[1.5fr_1fr] md:py-24">
          {/* Identity */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-display text-6xl font-bold tracking-[-0.07em] md:text-8xl">
                BF
              </span>

              <div className="mt-8">
                <p className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-white/80 md:text-3xl">
                  Benjamin Florian
                </p>

                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/25">
                  Software Developer
                </p>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col justify-end"
          >
            <p className="mb-6 font-mono text-[9px] uppercase tracking-[0.25em] text-white/20">
              Navigate
            </p>

            <div className="flex flex-col">
              {footerLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between border-t border-white/10 py-4"
                >
                  <span className="flex items-center gap-4">
                    <span className="font-mono text-[9px] text-white/20">
                      0{index + 1}
                    </span>

                    <span className="font-display text-lg font-bold uppercase text-white/55 transition-colors duration-300 group-hover:text-white">
                      {link.label}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.3}
                    className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#7dd3fc]"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* System strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid border-t border-white/10 md:grid-cols-3"
        >
          <div className="border-b border-white/10 py-5 md:border-b-0 md:border-r md:pr-8">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
              Built with
            </p>

            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white/45">
              Next.js / React / TypeScript
            </p>
          </div>

          <div className="border-b border-white/10 py-5 md:border-b-0 md:border-r md:px-8">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
              Location
            </p>

            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white/45">
              Tanzania
            </p>
          </div>

          <div className="py-5 md:pl-8">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
              System
            </p>

            <p className="mt-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white/45">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2f7bff]" />
              Online
            </p>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
            © 2026 Benjamin Florian
          </p>

          <a
            href="#top"
            className="group flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/25 transition-colors duration-300 hover:text-white"
          >
            Back to top

            <span className="flex h-7 w-7 items-center justify-center border border-white/10 transition-all duration-300 group-hover:border-[#2f7bff] group-hover:bg-[#2f7bff]/10">
              <ArrowUp
                size={13}
                strokeWidth={1.3}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </span>
          </a>
        </div>
      </div>

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute bottom-[-250px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#2f7bff]/[0.025] blur-[150px]"
        aria-hidden="true"
      />
    </footer>
  );
}