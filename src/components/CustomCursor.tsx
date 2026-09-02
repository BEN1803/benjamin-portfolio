"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  const [isInteractive, setIsInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Custom cursor is intended for pointer devices only.
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;

      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement;

      const interactive = Boolean(
        target.closest("a, button, input, textarea, select, [role='button']")
      );

      setIsInteractive(interactive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("pointerover", handlePointerOver);

    let animationFrame = 0;

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%)`;
      }

      // Smooth lag for the outer ring.
      ring.current.x += (mouse.current.x - ring.current.x) * 0.14;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.14;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("pointerover", handlePointerOver);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {/* Small cursor point */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-[#7dd3fc] transition-[opacity,transform] duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Delayed outer ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[9998] flex items-center justify-center rounded-full border border-[#2f7bff]/50 transition-[width,height,opacity,border-color,background-color] duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          isInteractive
            ? "h-10 w-10 border-[#7dd3fc]/80 bg-[#2f7bff]/10"
            : "h-7 w-7"
        }`}
      >
        {isInteractive && (
          <span className="h-1 w-1 rounded-full bg-[#7dd3fc]" />
        )}
      </div>
    </>
  );
}