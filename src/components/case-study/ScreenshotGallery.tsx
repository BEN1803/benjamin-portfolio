"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

interface ScreenshotGalleryProps {
  screenshots: string[];
  projectTitle: string;
}

export default function ScreenshotGallery({
  screenshots,
  projectTitle,
}: ScreenshotGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  if (!screenshots.length) {
    return null;
  }

  const activeImage = screenshots[activeIndex];

  const previousImage = () => {
    setActiveIndex((current) =>
      current === 0 ? screenshots.length - 1 : current - 1
    );
  };

  const nextImage = () => {
    setActiveIndex((current) =>
      current === screenshots.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="relative bg-[#050505] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 flex items-end justify-between gap-8">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#2f7bff]">
              01 / Interface
            </p>

            <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-[-0.04em] text-white md:text-6xl">
              Inside the system.
            </h2>
          </div>

          <div className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-white/20 md:block">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(screenshots.length).padStart(2, "0")}
          </div>
        </div>

        {/* Main image */}
        <motion.div
          layout
          className="group relative overflow-hidden border border-white/10 bg-white/[0.02]"
        >
          <button
            type="button"
            onClick={() => setFullscreen(true)}
            className="relative block aspect-video w-full cursor-none"
            aria-label={`View ${projectTitle} screenshot fullscreen`}
          >
            <Image
              src={activeImage}
              alt={`${projectTitle} screenshot ${activeIndex + 1}`}
              fill
              priority={activeIndex === 0}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

            {/* Expand indicator */}
            <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/20 bg-black/40 text-white/60 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
              <Maximize2 size={15} strokeWidth={1.3} />
            </div>
          </button>
        </motion.div>

        {/* Thumbnails */}
        {screenshots.length > 1 && (
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group relative aspect-video overflow-hidden border transition-colors duration-300 ${
                  activeIndex === index
                    ? "border-[#2f7bff]"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <Image
                  src={screenshot}
                  alt={`${projectTitle} thumbnail ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  className={`absolute inset-0 transition-colors duration-300 ${
                    activeIndex === index
                      ? "bg-[#2f7bff]/10"
                      : "bg-black/30 group-hover:bg-black/10"
                  }`}
                />

                <span className="absolute bottom-2 left-2 font-mono text-[8px] tracking-[0.15em] text-white/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Controls */}
        {screenshots.length > 1 && (
          <div className="mt-5 flex items-center justify-between">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={previousImage}
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/40 transition-colors hover:border-white/30 hover:text-white"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={16} strokeWidth={1.3} />
              </button>

              <button
                type="button"
                onClick={nextImage}
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/40 transition-colors hover:border-white/30 hover:text-white"
                aria-label="Next screenshot"
              >
                <ChevronRight size={16} strokeWidth={1.3} />
              </button>
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/20">
              {projectTitle}
            </span>
          </div>
        )}
      </div>

      {/* Fullscreen viewer */}
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/95 p-5 md:p-10"
            onClick={() => setFullscreen(false)}
          >
            <button
              type="button"
              onClick={() => setFullscreen(false)}
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition-colors hover:border-white/30 hover:text-white"
              aria-label="Close fullscreen viewer"
            >
              <X size={18} strokeWidth={1.3} />
            </button>

            <div
              className="relative h-full w-full max-w-7xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={activeImage}
                alt={`${projectTitle} screenshot ${activeIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {screenshots.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={previousImage}
                  className="absolute left-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/10 bg-black/40 text-white/50 backdrop-blur-sm transition-colors hover:border-white/30 hover:text-white"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft size={18} strokeWidth={1.3} />
                </button>

                <button
                  type="button"
                  onClick={nextImage}
                  className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/10 bg-black/40 text-white/50 backdrop-blur-sm transition-colors hover:border-white/30 hover:text-white"
                  aria-label="Next screenshot"
                >
                  <ChevronRight size={18} strokeWidth={1.3} />
                </button>

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(screenshots.length).padStart(2, "0")}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}