"use client";

const categories = [
  {
    title: "Programming",
    skills: ["C", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript / TSX", "Next.js"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "SQLite"],
  },
  {
    title: "Design",
    skills: ["UI/UX Design", "Graphic Design", "Photo Editing"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "XAMPP", "Docker"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-20 lg:py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-border bg-card text-xs font-mono text-accent mb-4 tracking-wider uppercase">
            Skills
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            My <span className="text-accent">Tech Stack</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5">
          {categories.map((cat) => (
            <div key={cat.title} className="skill-category p-2.5 sm:p-5 rounded-xl border border-border bg-card hover:border-accent/20 transition-colors duration-300">
              <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-xs sm:text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-lg bg-accent/5 border border-accent/10 text-[11px] font-mono text-accent/80 hover:bg-accent/10 hover:border-accent/20 transition-colors duration-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}