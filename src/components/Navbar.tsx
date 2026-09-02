"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 top-0 z-50 w-full px-6 py-6 md:px-10 md:py-8"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label="Benjamin Florian home"
        >
          <span className="font-display text-xl font-bold tracking-tight">
            BF
          </span>

          <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 sm:block">
            Benjamin Florian
          </span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative font-mono text-xs uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-white"
            >
              {item.label}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#2f7bff] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <a
            href="#contact"
            className="group ml-2 flex items-center gap-2 border border-white/15 px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] transition-all duration-300 hover:border-[#2f7bff] hover:bg-[#2f7bff]/10"
          >
            Let's Talk

            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Open navigation menu"
          className="flex h-10 w-10 items-center justify-center border border-white/10 md:hidden"
        >
          <div className="flex w-4 flex-col gap-1.5">
            <span className="h-px w-full bg-white" />
            <span className="h-px w-3/4 bg-white" />
          </div>
        </button>
      </nav>
    </motion.header>
  );
}