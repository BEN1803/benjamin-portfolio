"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";

import MagneticButton from "./MagneticButton";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
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
            onClick={closeMenu}
            className="group relative z-[60] flex items-center gap-3"
            aria-label="Benjamin Florian home"
          >
            <span className="font-display text-xl font-bold tracking-tight">
              BF
            </span>

            <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 sm:block">
              Benjamin Florian
            </span>
          </a>

          {/* Desktop navigation */}
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

            <MagneticButton strength={0.2}>
              <a
                href="#contact"
                className="group flex items-center gap-2 border border-white/15 px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] transition-all duration-300 hover:border-[#2f7bff] hover:bg-[#2f7bff]/10"
              >
                Let's Talk

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </MagneticButton>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="relative z-[60] flex h-10 w-10 items-center justify-center border border-white/10 transition-colors duration-300 hover:border-[#2f7bff]"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={17} strokeWidth={1.3} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex w-4 flex-col gap-1.5"
                >
                  <span className="h-px w-full bg-white" />
                  <span className="h-px w-3/4 bg-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* Mobile navigation overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-[#050505] md:hidden"
          >
            <div className="flex h-full flex-col justify-between px-6 pb-10 pt-32">
              {/* Navigation links */}
              <div>
                <div className="mb-8 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.25em] text-white/25">
                  <span className="text-[#2f7bff]">Navigation</span>
                  <span>/</span>
                  <span>BF System</span>
                </div>

                <div className="border-t border-white/10">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={closeMenu}
                      initial={{
                        opacity: 0,
                        x: -30,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: -20,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group flex items-center justify-between border-b border-white/10 py-6"
                    >
                      <div className="flex items-center gap-5">
                        <span className="font-mono text-[9px] text-white/20">
                          0{index + 1}
                        </span>

                        <span className="font-display text-4xl font-bold uppercase tracking-[-0.04em] text-white/70 transition-colors duration-300 group-hover:text-white">
                          {item.label}
                        </span>
                      </div>

                      <ArrowUpRight
                        size={20}
                        strokeWidth={1.2}
                        className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#7dd3fc]"
                      />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Bottom information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.35,
                }}
                className="flex items-end justify-between border-t border-white/10 pt-6"
              >
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                    Software Developer
                  </p>

                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-[#2f7bff]/70">
                    Tanzania
                  </p>
                </div>

                <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2f7bff]" />
                  Online
                </div>
              </motion.div>
            </div>

            {/* Ambient glow */}
            <div
              className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-[#2f7bff]/[0.04] blur-[120px]"
              aria-hidden="true"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}