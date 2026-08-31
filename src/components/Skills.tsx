"use client";

import { useRef } from "react";
import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
  SiFigma,
  SiC,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

const tech = [
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "React", Icon: SiReact, color: "#61dafb" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38bdf8" },
  { name: "HTML5", Icon: SiHtml5, color: "#e34f26" },
  { name: "CSS", Icon: SiCss, color: "#1572b6" },
  { name: "C", Icon: SiC, color: "#a8b9cc" },
  { name: "Java", Icon: DiJava, color: "#e76f00" },
  { name: "MySQL", Icon: SiMysql, color: "#4479a1" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47a248" },
  { name: "Docker", Icon: SiDocker, color: "#2496ed" },
  { name: "Git", Icon: SiGit, color: "#f05032" },
  { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
  { name: "Figma", Icon: SiFigma, color: "#a259ff" },
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
        onPointerEnter={(e) => {
          if (window.matchMedia("(min-width: 640px)").matches) {
            trackRef.current?.style.setProperty("animation-play-state", "paused");
          }
        }}
        onPointerLeave={(e) => {
          if (window.matchMedia("(min-width: 640px)").matches) {
            trackRef.current?.style.setProperty("animation-play-state", "running");
          }
        }}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-surface to-transparent z-10" />

        <div ref={trackRef} className="carousel-track flex gap-4 sm:gap-6 px-4 w-max">
          {items.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="group w-[150px] sm:w-[190px] shrink-0 rounded-2xl border border-border bg-card hover:border-accent/30 transition-all duration-300 p-5 sm:p-6 flex flex-col items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10"
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: `${t.color}1a`,
                  color: t.color,
                  border: `1px solid ${t.color}44`,
                }}
              >
                <t.Icon className="w-7 h-7 sm:w-8 sm:h-8" />
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
