import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
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
      <main className="min-h-[100dvh] pt-16">
        <Experience />
      </main>
      <Footer />
    </>
  );
}
