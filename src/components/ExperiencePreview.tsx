import Link from "next/link";

const highlights = [
  { value: "3+", label: "Projects" },
  { value: "ESI", label: "Computer Science" },
  { value: "Ongoing", label: "Freelance & Personal" },
];

export default function ExperiencePreview() {
  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-32 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-border bg-card text-xs font-mono text-accent mb-4 tracking-wider uppercase">
          Experience & Education
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 sm:mb-6">
          My Journey <span className="text-accent">So Far</span>
        </h2>
        <p className="text-muted max-w-xl mx-auto mb-8 sm:mb-12">
          From studying Computer Science at ESI Algiers to building full-stack applications — here's a snapshot of where I've been and where I'm heading.
        </p>

        <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-lg mx-auto mb-10 sm:mb-12">
          {highlights.map((h) => (
            <div key={h.label} className="p-4 rounded-xl border border-border bg-card">
              <div className="text-xl sm:text-2xl font-bold text-foreground font-mono">{h.value}</div>
              <div className="text-xs text-muted uppercase tracking-wider mt-1">{h.label}</div>
            </div>
          ))}
        </div>

        <Link
          href="/experience"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-dim text-white rounded-xl font-medium text-sm transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 group"
        >
          View Full Experience
          <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
