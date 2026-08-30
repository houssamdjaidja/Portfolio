"use client";

const experiences = [
  {
    role: "Software Engineer & Web Developer",
    company: "Personal Projects / Freelance",
    period: "Ongoing",
    desc: "Designing and developing full-stack web applications, from concept to deployment. Combining technical development with clean, user-focused UI/UX design.",
    tags: ["Next.js", "TypeScript", "UI/UX", "Git"],
  },
  {
    role: "Computer Science Student",
    company: "École Supérieure d'Informatique (ESI) — Algiers",
    period: "Present",
    desc: "Studying computer science with a focus on software engineering, algorithms, and programming fundamentals in C and Java.",
    tags: ["C", "Java", "SQL", "Algorithms"],
  },
  {
    role: "Full-Stack Developer",
    company: "Doctor Appointment System",
    period: "Project",
    desc: "Developed an appointment booking system for medical clinics, allowing patients to book, reschedule, and manage appointments online with real-time availability.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    role: "Frontend Developer",
    company: "Online Shop",
    period: "Project",
    desc: "Built a modern online shop for browsing products, adding items to cart, and completing purchases — with a complete dashboard for managing products, orders, and sales.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-border bg-card text-xs font-mono text-accent mb-4 tracking-wider uppercase">
            Experience & Education
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            My Journey <span className="text-accent">So Far</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="exp-card group p-3 sm:p-6 rounded-xl border border-border bg-card hover:border-accent/20 transition-all duration-300"
            >
              <div className="flex flex-col gap-1 mb-2 sm:mb-3">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors text-sm sm:text-base">
                  {exp.role}
                </h3>
                <span className="text-[10px] sm:text-xs font-mono text-dim">{exp.period}</span>
              </div>
              <p className="text-xs sm:text-sm text-accent/70 mb-2 font-medium">{exp.company}</p>
              <p className="text-xs sm:text-sm text-muted leading-relaxed mb-3">{exp.desc}</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {exp.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-accent/5 border border-accent/10 text-[10px] sm:text-xs font-mono text-accent/80">
                    {t}
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