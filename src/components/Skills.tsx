"use client";

const categories = [
  {
    title: "Programming",
    skills: ["C", "Java", "JavaScript", "TypeScript", "SQL", "Algorithms", "Data Structures"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript / TSX", "Next.js", "React", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "SQL"],
  },
  {
    title: "Design",
    skills: ["UI/UX Design", "Graphic Design", "Photo Editing", "Figma"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "XAMPP", "Docker", "npm", "Vercel"],
  },
];

function MarqueeRow({ title, skills, reverse }: { title: string; skills: string[]; reverse?: boolean }) {
  const items = [...skills, ...skills, ...skills];
  return (
    <div className="relative flex items-center gap-4 overflow-hidden py-2 border-b border-border/40 last:border-b-0">
      <div className="shrink-0 px-3 py-1.5 rounded-md bg-accent text-white text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider z-10">
        {title}
      </div>
      <div className={`marquee-track flex whitespace-nowrap items-center gap-3 ${reverse ? "reverse" : ""}`}>
        {items.map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="px-3 py-1 rounded-full border border-accent/10 bg-accent/5 text-[11px] sm:text-xs font-mono text-accent/80 whitespace-nowrap"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-20 lg:py-24 bg-surface overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-border bg-card text-xs font-mono text-accent mb-4 tracking-wider uppercase">
            Skills
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            My <span className="text-accent">Tech Stack</span>
          </h2>
        </div>
      </div>

      <div className="border-y border-border bg-background/40">
        <div className="flex flex-col">
          {categories.map((cat, i) => (
            <MarqueeRow key={cat.title} title={cat.title} skills={cat.skills} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
