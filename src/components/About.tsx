"use client";

const features = [
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Modern Websites",
    desc: "Build modern and responsive websites that look great on every device.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "UI/UX Design",
    desc: "Design user interfaces and experiences that are intuitive, clean, and user-focused.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    title: "Digital Products",
    desc: "Create digital products that are practical, functional, and easy to use.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "Databases & APIs",
    desc: "Work with databases and APIs to build complete, data-driven applications.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Software Apps",
    desc: "Develop software applications in C, Java, and modern web technologies.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Ideas to Solutions",
    desc: "Turn ideas into functional digital solutions through design and development.",
  },
];

const stats = [
  { value: "5+", label: "Programming Languages" },
  { value: "10+", label: "Technologies" },
  { value: "3+", label: "Databases" },
  { value: "ESI", label: "Computer Science" },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-border bg-card text-xs font-mono text-accent mb-4 tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Software Engineer &amp; <span className="text-accent">Web Developer</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start mb-12 sm:mb-20">
          <div className="reveal-left">
            <p className="text-muted leading-relaxed mb-4">
              I&apos;m a Computer Science student at <span className="text-foreground font-medium">ESI Algiers</span> with a strong interest in software engineering and web development. I work with languages like C and Java, along with modern web technologies including JavaScript, TypeScript, HTML, CSS, and Next.js.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              I&apos;m also deeply interested in <span className="text-foreground font-medium">UI/UX and graphic design</span>, which lets me combine technical development with creative, user-focused design.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              I enjoy building practical digital products, solving technical problems, and continuously learning new technologies.
            </p>
            <div className="flex flex-wrap gap-3">
              {["C", "Java", "JavaScript", "TypeScript", "Next.js", "SQL", "UI/UX", "Git"].map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-mono text-muted">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 reveal-right">
            {stats.map((s) => (
              <div key={s.label} className="p-5 rounded-xl border border-border bg-card hover:border-accent/20 transition-colors duration-300 text-center">
                <div className="text-2xl font-bold text-foreground mb-1 font-mono">{s.value}</div>
                <div className="text-xs text-muted uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {features.map((f) => (
            <div key={f.title} className="feature-card p-3 sm:p-6 rounded-xl border border-border bg-card hover:border-accent/20 hover:bg-card-hover transition-all duration-300 group">
              <div className="mb-3">{f.icon}</div>
              <h3 className="font-semibold text-foreground mb-2 text-sm">{f.title}</h3>
              <p className="text-xs text-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}