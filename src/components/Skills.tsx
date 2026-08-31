"use client";

import { useRef } from "react";

const tech = [
  { name: "TypeScript", icon: "TS", color: "#3178c6" },
  { name: "Next.js", icon: "N", color: "#ffffff" },
  { name: "React", icon: "⚛", color: "#61dafb" },
  { name: "Node.js", icon: "⬢", color: "#339933" },
  { name: "JavaScript", icon: "JS", color: "#f7df1e" },
  { name: "Tailwind CSS", icon: "~", color: "#38bdf8" },
  { name: "HTML", icon: "</>", color: "#e34f26" },
  { name: "CSS", icon: "#", color: "#1572b6" },
  { name: "C", icon: "C", color: "#a8b9cc" },
  { name: "Java", icon: "☕", color: "#f89820" },
  { name: "MySQL", icon: "DB", color: "#4479a1" },
  { name: "PostgreSQL", icon: "DB", color: "#336791" },
  { name: "MongoDB", icon: "{}", color: "#47a248" },
  { name: "Docker", icon: "🐳", color: "#2496ed" },
  { name: "Git", icon: "</>", color: "#f05032" },
  { name: "GitHub", icon: "GH", color: "#ffffff" },
  { name: "Figma", icon: "F", color: "#a259ff" },
];

export default function Skills() {
  const trackRef = useRef<HTMLDivElement>(null);
  const items = [...tech, ...tech];

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 bg-surface overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-border bg-card text-xs font-mono text-accent mb-4 tracking-wider uppercase">
            Skills
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            My <span className="text-accent">Tech Stack</span>
          </h2>
          <p className="text-muted text-sm mt-3">Hover to pause</p>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => trackRef.current?.style.setProperty("animation-play-state", "paused")}
        onMouseLeave={() => trackRef.current?.style.setProperty("animation-play-state", "running")}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-surface to-transparent z-10" />

        <div
          ref={trackRef}
          className="carousel-track flex gap-4 sm:gap-6 px-4 w-max"
        >
          {items.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="group w-[150px] sm:w-[190px] shrink-0 rounded-2xl border border-border bg-card hover:border-accent/30 transition-all duration-300 p-5 sm:p-6 flex flex-col items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10"
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center font-mono font-bold text-lg sm:text-xl"
                style={{ backgroundColor: `${t.color}22`, color: t.color, border: `1px solid ${t.color}44` }}
              >
                {t.icon}
              </div>
              <span className="font-medium text-foreground text-sm sm:text-base text-center whitespace-nowrap">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
