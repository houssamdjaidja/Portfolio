"use client";

import { useState, useEffect } from "react";

interface Project {
  id: string;
  title: string;
  desc: string;
  tech: string[];
  images: string[];
  color: string;
}

const projects: Project[] = [
  {
    id: "shop",
    title: "Online Shop",
    desc: "A modern online shop where customers can browse products, view details, add items to cart, and complete their purchase — backed by a complete dashboard for managing products, orders, and sales.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    images: Array.from({ length: 8 }, (_, i) => `${i + 1}.png`),
    color: "from-violet-500/10 to-indigo-500/10",
  },
  {
    id: "doctor",
    title: "Doctor Appointment System",
    desc: "An appointment booking system for medical clinics, allowing patients to book, reschedule, and manage appointments online.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB"],
    images: Array.from({ length: 10 }, (_, i) => `${i + 1}.png`),
    color: "from-emerald-500/10 to-teal-500/10",
  },
  {
    id: "menu",
    title: "Digital Restaurant Menu",
    desc: "A modern digital restaurant menu with a clean, responsive interface. Customers can browse food categories, view dishes with images, descriptions, and prices, and access the menu instantly via QR code.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    images: Array.from({ length: 5 }, (_, i) => `${i + 1}.png`),
    color: "from-amber-500/10 to-orange-500/10",
  },
];

export default function Projects() {
  const [modal, setModal] = useState<Project | null>(null);
  const [zoom, setZoom] = useState<string | null>(null);

  useEffect(() => {
    if (modal) {
      const prevOverflow = document.body.style.overflow;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          if (zoom) setZoom(null);
          else setModal(null);
        }
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = prevOverflow;
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [modal, zoom]);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-border bg-card text-xs font-mono text-accent mb-4 tracking-wider uppercase">
            Projects
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Featured <span className="text-accent">Work</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="project-card group rounded-xl border border-border bg-card overflow-hidden hover:border-accent/20 transition-all duration-300 cursor-pointer"
              onClick={() => setModal(p)}
            >
              <div className={`h-28 sm:h-48 bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.15),transparent_60%)]" />
                <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-background/50 backdrop-blur-sm border border-border flex items-center justify-center font-mono text-accent text-base sm:text-lg font-bold">
                  {p.id === "shop" ? "SH" : p.id === "doctor" ? "DA" : "DM"}
                </div>
              </div>
              <div className="p-3 sm:p-6">
                <h3 className="font-semibold text-foreground mb-0 sm:mb-2 group-hover:text-accent transition-colors text-sm sm:text-base">
                  {p.title}
                </h3>
                <p className="hidden md:block text-sm text-muted mb-4 leading-relaxed">{p.desc}</p>
                <div className="hidden md:flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-accent/5 border border-accent/10 text-xs font-mono text-accent/80">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="hidden md:flex mt-4 pt-4 border-t border-border items-center gap-2 text-xs text-muted group-hover:text-accent transition-colors">
                  <span>View Project</span>
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setModal(null); }}
        >
          <button
            onClick={() => setModal(null)}
            className="fixed top-3 right-3 sm:top-4 sm:right-4 z-10 w-10 h-10 rounded-full bg-card/90 border border-border hover:bg-white/10 flex items-center justify-center text-muted hover:text-foreground transition-colors shadow-lg"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] sm:max-h-[85vh] overflow-hidden animate-[fadeIn_0.2s_ease] mt-6">
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
              <div>
                <h3 className="font-semibold text-foreground">{modal.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {modal.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-accent/10 text-xs font-mono text-accent">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="px-4 sm:px-6 pt-4 text-sm text-muted leading-relaxed">{modal.desc}</p>
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[60vh] sm:max-h-[55vh]">
              {modal.images.length === 0 ? (
                <div className="py-12 text-center text-sm text-muted border border-dashed border-border rounded-lg">
                  No screenshots available yet.
                </div>
              ) : (
                <div className="grid gap-3">
                  {modal.images.map((img, i) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setZoom(`/projects/${modal.id}/${img}`)}
                      className="group relative block w-full cursor-zoom-in rounded-lg overflow-hidden border border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                      aria-label={`Zoom ${modal.title} screenshot ${i + 1}`}
                    >
                      <img
                        src={`/projects/${modal.id}/${img}`}
                        alt={`${modal.title} screenshot ${i + 1}`}
                        className="w-full rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="w-10 h-10 rounded-full bg-card/90 border border-border flex items-center justify-center shadow-lg">
                          <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {zoom && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setZoom(null)}
        >
          <button
            onClick={() => setZoom(null)}
            className="fixed top-3 right-3 sm:top-4 sm:right-4 z-10 w-10 h-10 rounded-full bg-card/90 border border-border hover:bg-white/10 flex items-center justify-center text-muted hover:text-foreground transition-colors shadow-lg"
            aria-label="Close zoom"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={zoom}
            alt="Zoomed screenshot"
            className="max-w-full max-h-[90vh] rounded-xl border border-border bg-card shadow-2xl animate-[fadeIn_0.2s_ease]"
          />
        </div>
      )}
    </section>
  );
}
