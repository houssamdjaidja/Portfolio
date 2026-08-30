"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const handleMouse = (e: MouseEvent) => {
      const rect = grid.getBoundingClientRect();
      grid.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      grid.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    grid.addEventListener("mousemove", handleMouse);
    return () => grid.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.06)_0%,transparent_70%)]" />

      <div
        ref={gridRef}
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(400px circle at var(--mx) var(--my), black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(400px circle at var(--mx) var(--my), black 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-xs sm:text-sm font-mono text-muted">Available for opportunities</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4 sm:mb-6">
          <span className="text-foreground">Hi, I&apos;m </span>
          <span className="bg-gradient-to-r from-accent-light via-accent to-accent-dim bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient-shift_4s_ease_infinite]">
            Houssam Eddine Djaidja
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
          Software Engineer &amp; Web Developer crafting modern, responsive web applications with a focus on UI/UX and clean code.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto">
          <a
            href="#projects"
            className="group w-full sm:w-auto px-6 py-3 sm:px-7 sm:py-3.5 bg-accent hover:bg-accent-dim text-white rounded-xl font-medium text-sm transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 flex items-center justify-center gap-2"
          >
            View Projects
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 sm:px-7 sm:py-3.5 border border-border hover:border-dim text-foreground rounded-xl font-medium text-sm transition-all duration-200 hover:bg-white/5 text-center"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-dim" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
