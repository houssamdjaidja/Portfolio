import Link from "next/link";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience & Education | Houssam Eddine Djaidja",
  description:
    "Experience, education, and project history of Houssam Eddine Djaidja — CS student at ESI Algiers and full-stack web developer.",
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-[100dvh]">
        <div className="absolute top-20 sm:top-24 left-4 sm:left-6 z-20">
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors group"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
          </Link>
        </div>
        <Experience />
      </main>
    </>
  );
}
