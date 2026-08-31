"use client";

const tech = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind",
  "C",
  "Java",
  "SQL",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
  "GitHub",
  "Figma",
  "UI/UX",
];

export default function Skills() {
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
        </div>
      </div>

      <div className="relative h-[420px] sm:h-[520px] [perspective:1200px]">
        <div
          className="absolute left-1/2 top-1/2 w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full border border-accent/10 -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "radial-gradient(circle at center, rgba(99,102,241,0.08) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] rounded-full border border-dashed border-accent/20 -translate-x-1/2 -translate-y-1/2"
          style={{ transform: "translate(-50%,-50%)" }}
        />
        <div
          className="absolute left-1/2 top-1/2 w-[6px] h-[6px] rounded-full bg-accent -translate-x-1/2 -translate-y-1/2"
          style={{ boxShadow: "0 0 20px rgba(99,102,241,0.8)" }}
        />

        <div className="absolute left-1/2 top-1/2 w-0 h-0 [transform-style:preserve-3d] [animation:orbit-outer_28s_linear_infinite]">
          {tech.slice(0, 10).map((t, i) => (
            <Chip
              key={t}
              label={t}
              radius={300}
              angle={i * (360 / 10)}
              tilt={15}
              scoped
            />
          ))}
        </div>

        <div className="absolute left-1/2 top-1/2 w-0 h-0 [transform-style:preserve-3d] [animation:orbit-inner_20s_linear_infinite_reverse]">
          {tech.slice(10).map((t, i) => (
            <Chip key={t} label={t} radius={190} angle={i * (360 / 9)} tilt={-20} scoped />
          ))}
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs sm:text-sm font-mono text-dim">
          Hover to slow down
        </div>
      </div>
    </section>
  );
}

function Chip({
  label,
  radius,
  angle,
  tilt,
  scoped,
}: {
  label: string;
  radius: number;
  angle: number;
  tilt: number;
  scoped: boolean;
}) {
  const rad = (angle * Math.PI) / 180;
  const x = radius * Math.cos(rad);
  const z = radius * Math.sin(rad);
  return (
    <span
      className="absolute left-0 top-0 whitespace-nowrap px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-accent/15 bg-card/80 backdrop-blur-sm text-accent font-mono text-xs sm:text-sm"
      style={{
        transform: `translate(-50%,-50%) translateX(${x}px) translateZ(${z}px) rotateY(${tilt}deg)`,
      }}
    >
      {label}
    </span>
  );
}
